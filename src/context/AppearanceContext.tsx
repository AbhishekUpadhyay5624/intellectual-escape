import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Theme = "dark" | "light" | "system";
type ReadingSize = "small" | "medium" | "large";
interface Preferences {
  theme: Theme;
  readingSize: ReadingSize;
  ambientMotion: boolean;
}
interface AppearanceState extends Preferences {
  setTheme: (theme: Theme) => void;
  setReadingSize: (size: ReadingSize) => void;
  setAmbientMotion: (enabled: boolean) => void;
}
const storageKey = "ie-appearance";
const AppearanceContext = createContext<AppearanceState | null>(null);

function initialPreferences(): Preferences {
  try {
    const stored = JSON.parse(localStorage.getItem(storageKey) || "{}");
    return {
      theme: ["dark", "light", "system"].includes(stored.theme)
        ? stored.theme
        : "dark",
      readingSize: ["small", "medium", "large"].includes(stored.readingSize)
        ? stored.readingSize
        : "medium",
      ambientMotion:
        typeof stored.ambientMotion === "boolean" ? stored.ambientMotion : true,
    };
  } catch {
    return { theme: "dark", readingSize: "medium", ambientMotion: true };
  }
}

export function AppearanceProvider({ children }: { children: ReactNode }) {
  const [preferences, setPreferences] = useState(initialPreferences);
  useEffect(() => {
    const system = window.matchMedia("(prefers-color-scheme: dark)");
    const apply = () => {
      const resolved =
        preferences.theme === "system"
          ? system.matches
            ? "dark"
            : "light"
          : preferences.theme;
      document.documentElement.dataset.theme = resolved;
      document.documentElement.dataset.readingSize = preferences.readingSize;
      document
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute("content", resolved === "dark" ? "#08090d" : "#f5f5f8");
    };
    apply();
    system.addEventListener("change", apply);
    try {
      localStorage.setItem(storageKey, JSON.stringify(preferences));
    } catch {
      /* Preferences remain usable for this visit. */
    }
    return () => system.removeEventListener("change", apply);
  }, [preferences]);
  return (
    <AppearanceContext.Provider
      value={{
        ...preferences,
        setTheme: (theme) =>
          setPreferences((previous) => ({ ...previous, theme })),
        setReadingSize: (readingSize) =>
          setPreferences((previous) => ({ ...previous, readingSize })),
        setAmbientMotion: (ambientMotion) =>
          setPreferences((previous) => ({ ...previous, ambientMotion })),
      }}
    >
      {children}
    </AppearanceContext.Provider>
  );
}

export function useAppearance() {
  const value = useContext(AppearanceContext);
  if (!value)
    throw new Error("useAppearance must be used within AppearanceProvider");
  return value;
}
