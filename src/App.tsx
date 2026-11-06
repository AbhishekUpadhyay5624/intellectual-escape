import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SavedProvider } from "@/context/SavedContext";
import { HomePage } from "@/pages/HomePage";
import { ExplorePage } from "@/pages/ExplorePage";
import { StoriesPage } from "@/pages/StoriesPage";
import { SavedPage } from "@/pages/SavedPage";
import { ProfilePage } from "@/pages/ProfilePage";
import { ReadPage } from "@/pages/ReadPage";
import { AppearanceProvider } from "@/context/AppearanceContext";

export default function App() {
  return (
    <BrowserRouter>
      <AppearanceProvider>
        <SavedProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/explore" element={<ExplorePage />} />
              <Route path="/stories" element={<StoriesPage />} />
              <Route path="/saved" element={<SavedPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/settings" element={<ProfilePage />} />
              <Route path="/read/:id" element={<ReadPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </SavedProvider>
      </AppearanceProvider>
    </BrowserRouter>
  );
}
