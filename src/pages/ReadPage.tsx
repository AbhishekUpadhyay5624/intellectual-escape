import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export function ReadPage() {
  return (
    <div className="quiet-page">
      <div className="quiet-empty">
        <p className="feed-prelude">A fresh start.</p>
        <h1>
          A little space
          <br />
          for what’s next.
        </h1>
        <p className="quiet-description">
          The previous reads have been cleared.
        </p>
        <Link to="/" className="text-action">
          <ArrowLeft size={16} strokeWidth={1.4} />
          Back to the feed
        </Link>
      </div>
    </div>
  );
}
