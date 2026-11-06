import type { CategoryMeta, ContentItem, MockUser } from "@/types";

// Intentionally empty. All previous sample concepts and stories have been removed.
export const contentItems: ContentItem[] = [];
export const categories: CategoryMeta[] = [
  {
    name: "Psychology",
    emoji: "",
    description: "A little perspective",
    count: 0,
    gradient: "",
  },
  {
    name: "Short Stories",
    emoji: "",
    description: "A little feeling",
    count: 0,
    gradient: "",
  },
];
export const trendingTopics: string[] = [];
export const thoughtOfTheDay = "";
export const mockUser: MockUser = {
  id: "local",
  name: "",
  initials: "",
  bio: "",
  readingStreak: 0,
  totalRead: 0,
  savedCount: 0,
  favCategories: [],
  recentlyReadIds: [],
  joinedDate: "",
  readingGoal: 0,
};
export function getContentById(id: string) {
  return contentItems.find((item) => item.id === id);
}
export function getRelatedContent(item: ContentItem) {
  return contentItems
    .filter((entry) => item.relatedIds.includes(entry.id))
    .slice(0, 3);
}
export function getRandomContent(): ContentItem | undefined {
  return contentItems.length
    ? contentItems[Math.floor(Math.random() * contentItems.length)]
    : undefined;
}
export function searchContent(query: string, category?: string) {
  const q = query.trim().toLowerCase();
  return contentItems.filter(
    (item) =>
      (!category || category === "All" || item.category === category) &&
      (!q ||
        [item.title, item.description, ...item.tags].some((text) =>
          text.toLowerCase().includes(q),
        )),
  );
}
export function getStoriesByTheme(theme: string) {
  return contentItems.filter(
    (item) =>
      item.type === "story" &&
      (theme === "Latest" || item.tags.includes(theme.toLowerCase())),
  );
}
