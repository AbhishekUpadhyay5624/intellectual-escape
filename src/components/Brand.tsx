import { Link } from "react-router-dom";

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      to="/"
      className={"brand " + (compact ? "brand-compact" : "")}
      aria-label="Escape home"
    >
      <span className="brand-symbol" aria-hidden="true">
        <i />
        <i />
      </span>
      <span className="brand-wordmark">
        escape<span>.</span>
      </span>
    </Link>
  );
}
