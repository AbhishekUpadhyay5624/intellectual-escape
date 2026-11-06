import { useEffect, useRef } from "react";
import { Search, X } from "lucide-react";

interface Props {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}
export function SearchBar({
  value,
  onChange,
  placeholder = "What’s on your mind?",
  className = "",
}: Props) {
  const input = useRef<HTMLInputElement>(null);
  useEffect(() => {
    input.current?.focus();
  }, []);
  return (
    <div className={"search-line " + className}>
      <Search size={20} strokeWidth={1.3} />
      <input
        ref={input}
        type="search"
        aria-label="Search your feed"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
      />
      {value && (
        <button
          className="icon-button"
          onClick={() => onChange("")}
          aria-label="Clear search"
        >
          <X size={18} strokeWidth={1.3} />
        </button>
      )}
    </div>
  );
}
