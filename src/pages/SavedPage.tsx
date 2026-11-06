import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Bookmark } from "lucide-react";

export function SavedPage() {
  return (
    <div className="quiet-page">
      <Link to="/" className="back-link">
        <ArrowLeft size={16} strokeWidth={1.4} />
        Back to the feed
      </Link>
      <div className="quiet-empty">
        <Bookmark size={34} strokeWidth={0.9} className="quiet-symbol" />
        <p className="feed-prelude">A little collection, entirely yours.</p>
        <h1>
          Some things
          <br />
          stay with you.
        </h1>
        <p className="quiet-description">
          When something clicks, keep it.
          <br />
          Your saved shorts will live here.
        </p>
        <Link to="/" className="text-action">
          Find a little wonder
          <ArrowRight size={17} strokeWidth={1.4} />
        </Link>
      </div>
    </div>
  );
}
