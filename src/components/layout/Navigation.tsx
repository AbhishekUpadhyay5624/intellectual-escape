import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Bookmark, Search, SlidersHorizontal } from "lucide-react";
import { Brand } from "@/components/Brand";

export function Header() {
  const navigate = useNavigate();
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        navigate("/explore");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [navigate]);
  return (
    <header className="app-header">
      <Brand />
      <nav className="mode-navigation" aria-label="Reading sections">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "mode-link is-active" : "mode-link"
          }
        >
          Psychology
        </NavLink>
        <NavLink
          to="/stories"
          className={({ isActive }) =>
            isActive ? "mode-link is-active" : "mode-link"
          }
        >
          Stories
        </NavLink>
      </nav>
      <nav className="header-tools" aria-label="Your space">
        <NavLink
          to="/explore"
          className="icon-button"
          aria-label="Search"
          title="Search (Ctrl+K)"
        >
          <Search size={18} strokeWidth={1.35} />
        </NavLink>
        <NavLink
          to="/saved"
          className="icon-button"
          aria-label="Saved"
          title="Saved"
        >
          <Bookmark size={18} strokeWidth={1.35} />
        </NavLink>
        <NavLink
          to="/settings"
          className="icon-button"
          aria-label="Settings"
          title="Settings"
        >
          <SlidersHorizontal size={18} strokeWidth={1.35} />
        </NavLink>
      </nav>
    </header>
  );
}
