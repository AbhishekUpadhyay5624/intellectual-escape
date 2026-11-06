import { lazy, Suspense, useRef, useState, type KeyboardEvent } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight, Bookmark, Pause, Play } from "lucide-react";
import { contentItems } from "@/data/mockData";
import { matchesSelection, storyMoods, topics } from "@/data/presentation";
import { useAppearance } from "@/context/AppearanceContext";
import { useSaved } from "@/context/SavedContext";
import type { ContentItem } from "@/types";

const Atmosphere = lazy(() => import("./Atmosphere"));

export function SectionPage({
  section,
}: {
  section: "psychology" | "stories";
}) {
  const isStory = section === "stories";
  const filters = isStory ? storyMoods : topics;
  const [selection, setSelection] = useState("For you");
  const { ambientMotion, setAmbientMotion } = useAppearance();
  const viewport = useRef<HTMLDivElement>(null);
  const items = contentItems.filter(
    (item) =>
      item.type === (isStory ? "story" : "concept") &&
      matchesSelection(item, selection),
  );

  function navigateFeed(event: KeyboardEvent<HTMLDivElement>) {
    if (
      event.target !== event.currentTarget ||
      !["ArrowDown", "ArrowUp", "PageDown", "PageUp", " "].includes(event.key)
    )
      return;
    event.preventDefault();
    const direction = ["ArrowUp", "PageUp"].includes(event.key) ? -1 : 1;
    viewport.current?.scrollBy({
      top: direction * viewport.current.clientHeight,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  }

  return (
    <div
      className={
        "feed-experience " +
        (isStory ? "stories-experience" : "psychology-experience")
      }
    >
      <div
        className="feed-filters"
        role="group"
        aria-label={isStory ? "Story mood" : "Psychology topic"}
      >
        {filters.map((filter) => (
          <button
            key={filter}
            className={
              selection === filter ? "feed-filter is-active" : "feed-filter"
            }
            aria-pressed={selection === filter}
            onClick={() => {
              setSelection(filter);
              viewport.current?.scrollTo({ top: 0 });
            }}
          >
            {filter}
          </button>
        ))}
      </div>
      <div
        ref={viewport}
        className="feed-scroll"
        tabIndex={0}
        onKeyDown={navigateFeed}
        aria-label={isStory ? "Stories feed" : "Psychology feed"}
      >
        {items.length ? (
          items.map((item) => <ShortScreen key={item.id} item={item} />)
        ) : (
          <section
            className="empty-feed short-screen"
            aria-labelledby="empty-feed-title"
          >
            <div className="sculpture-stage">
              <Suspense
                fallback={
                  <div className="atmosphere">
                    <div className="sculpture-fallback">
                      <i />
                      <i />
                      <i />
                    </div>
                  </div>
                }
              >
                <Atmosphere
                  mode={section}
                  variation={filters.indexOf(selection)}
                />
              </Suspense>
            </div>
            <div className="empty-feed-copy" key={section + selection}>
              <p className="feed-prelude">
                {selection === "For you"
                  ? isStory
                    ? "A moment to feel something."
                    : "For the beautifully curious."
                  : selection}
              </p>
              <h1 id="empty-feed-title">
                {isStory ? (
                  <>
                    Stay for
                    <br />
                    <span>the feeling.</span>
                  </>
                ) : (
                  <>
                    Room for
                    <br />
                    <span>wonder.</span>
                  </>
                )}
              </h1>
              <p className="feed-empty-description">
                {isStory
                  ? "A whole world. Just a few words."
                  : "A small idea. A different way to see it."}
              </p>
              <p className="empty-feed-notice">
                {isStory ? "No stories here yet." : "No shorts here yet."} This
                space is ready.
              </p>
            </div>
          </section>
        )}
      </div>
      <footer className="feed-footer">
        <button
          className="motion-control"
          onClick={() => setAmbientMotion(!ambientMotion)}
          aria-label={
            ambientMotion ? "Pause ambient motion" : "Resume ambient motion"
          }
          aria-pressed={!ambientMotion}
        >
          {ambientMotion ? (
            <Pause size={13} strokeWidth={1.5} />
          ) : (
            <Play size={13} strokeWidth={1.5} />
          )}
          <span>{ambientMotion ? "Pause the motion" : "Bring it to life"}</span>
        </button>
        {items.length > 1 && (
          <span className="feed-scroll-cue">
            One moment at a time
            <ArrowDown size={13} />
          </span>
        )}
        <Link to={isStory ? "/" : "/stories"} className="switch-section">
          {isStory ? "Follow a little curiosity" : "Follow a feeling"}
          <ArrowRight size={16} strokeWidth={1.4} />
        </Link>
      </footer>
    </div>
  );
}

function ShortScreen({ item }: { item: ContentItem }) {
  const { isSaved, toggleSave } = useSaved();
  const saved = isSaved(item.id);
  return (
    <section className="short-screen reading-screen">
      <div className="short-copy">
        <p className="feed-prelude">
          {item.category} <span>{item.readingTime}</span>
        </p>
        <h2>{item.title}</h2>
        <div
          className="short-body"
          dangerouslySetInnerHTML={{ __html: item.body }}
        />
        <button
          className="keep-control"
          onClick={() => toggleSave(item.id)}
          aria-pressed={saved}
        >
          <Bookmark
            size={17}
            strokeWidth={1.4}
            fill={saved ? "currentColor" : "none"}
          />
          {saved ? "Kept" : "Keep this"}
        </button>
      </div>
    </section>
  );
}
