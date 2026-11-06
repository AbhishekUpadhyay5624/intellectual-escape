import { Link } from "react-router-dom";
import { ArrowLeft, Check, Monitor, Moon, Sun } from "lucide-react";
import { useAppearance } from "@/context/AppearanceContext";

const themes = [
  { value: "dark", label: "After dark", icon: Moon },
  { value: "light", label: "Daylight", icon: Sun },
  { value: "system", label: "Your device", icon: Monitor },
] as const;
const sizes = [
  { value: "small", label: "Small" },
  { value: "medium", label: "Comfortable" },
  { value: "large", label: "A little larger" },
] as const;

export function ProfilePage() {
  const {
    theme,
    setTheme,
    readingSize,
    setReadingSize,
    ambientMotion,
    setAmbientMotion,
  } = useAppearance();
  return (
    <div className="preferences-page quiet-page">
      <Link to="/" className="back-link">
        <ArrowLeft size={16} strokeWidth={1.4} />
        Back to the feed
      </Link>
      <header className="preferences-intro">
        <p className="feed-prelude">Your pace. Your space.</p>
        <h1>
          Make yourself
          <br />
          at home.
        </h1>
      </header>
      <section className="preference-section">
        <div className="preference-label">
          <h2>The atmosphere</h2>
          <p>A different light, the same little escape.</p>
        </div>
        <div className="theme-choices" role="group" aria-label="Color theme">
          {themes.map(({ value, label, icon: Icon }) => (
            <button
              key={value}
              aria-pressed={theme === value}
              className={
                "theme-choice " + (theme === value ? "is-selected" : "")
              }
              onClick={() => setTheme(value)}
            >
              <span className={"theme-orb theme-orb-" + value}>
                <Icon size={22} strokeWidth={1.2} />
              </span>
              <span>{label}</span>
              {theme === value && <Check size={12} className="choice-check" />}
            </button>
          ))}
        </div>
      </section>
      <section className="preference-section">
        <div className="preference-label">
          <h2>The words</h2>
          <p>A size that feels good to read.</p>
        </div>
        <div className="reading-choices" role="group" aria-label="Reading size">
          {sizes.map(({ value, label }) => (
            <button
              key={value}
              aria-pressed={readingSize === value}
              className={
                "reading-choice reading-choice-" +
                value +
                (readingSize === value ? " is-selected" : "")
              }
              onClick={() => setReadingSize(value)}
            >
              <span aria-hidden="true">Aa</span>
              <span>{label}</span>
            </button>
          ))}
        </div>
        <p className="reading-sample">
          A little room to breathe.
          <br />A few words worth your time.
        </p>
      </section>
      <section className="preference-section motion-preference">
        <div className="preference-label">
          <h2>A little movement</h2>
          <p>The sculpture takes a slow breath. Or stays still.</p>
        </div>
        <button
          className={"motion-switch " + (ambientMotion ? "is-on" : "")}
          role="switch"
          aria-checked={ambientMotion}
          aria-label="Ambient motion"
          onClick={() => setAmbientMotion(!ambientMotion)}
        >
          <i />
        </button>
      </section>
      <p className="preference-footnote">Just for you. Saved on this device.</p>
    </div>
  );
}
