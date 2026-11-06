import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Navigation";

export function Layout() {
  const { pathname } = useLocation();
  const isFeed = pathname === "/" || pathname === "/stories";
  return (
    <div className={"app-shell " + (isFeed ? "feed-shell" : "utility-shell")}>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Outlet />
      </main>
    </div>
  );
}
