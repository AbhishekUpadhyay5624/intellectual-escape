import { contentItems } from "./mockData";
import type { ContentItem } from "@/types";

export const topics = [
  "For you",
  "Mind & self",
  "Relationships",
  "Decisions",
  "Focus",
];
export const storyMoods = [
  "For you",
  "Happy",
  "Deeply moving",
  "Hopeful",
  "Bittersweet",
];
export const psychologyItems = contentItems.filter(
  (item) => item.type === "concept",
);
export const storyItems = contentItems.filter((item) => item.type === "story");
export function matchesSelection(item: ContentItem, selection: string) {
  if (selection === "For you") return true;
  const tags = item.tags.map((tag) => tag.toLowerCase());
  return tags.includes(selection.toLowerCase());
}
