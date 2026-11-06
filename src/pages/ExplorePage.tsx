import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { SearchBar } from "@/components/SearchBar";

export function ExplorePage() {
  const [query, setQuery] = useState("");
  return (
    <div className="quiet-page search-page">
      <Link to="/" className="back-link">
        <ArrowLeft size={16} strokeWidth={1.4} />
        Back to the feed
      </Link>
      <div className="search-intro">
        <p className="feed-prelude">Curiosity looks good on you.</p>
        <h1>
          Go on.
          <br />
          Ask the little question.
        </h1>
      </div>
      <SearchBar value={query} onChange={setQuery} />
      <p className="search-empty" aria-live="polite">
        {query.trim()
          ? "Nothing to find just yet. Your library is starting fresh."
          : "Your library is empty for now. There’s room for everything that interests you."}
      </p>
    </div>
  );
}
