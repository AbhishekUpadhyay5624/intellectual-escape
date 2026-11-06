/**
 * API service layer.
 *
 * Currently uses mock data exclusively.
 * Designed to be swapped out for real HTTP calls to a FastAPI backend
 * when the backend is ready, without changing any page or component code.
 *
 * Future integration pattern:
 *   const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1'
 *   const response = await fetch(`${API_BASE}/content/${id}`, { headers: authHeaders() })
 */

import {
  contentItems,
  getContentById as _getById,
  getRelatedContent as _getRelated,
  getRandomContent as _getRandom,
  searchContent as _search,
  getStoriesByTheme as _getByTheme,
  categories,
  trendingTopics,
  mockUser,
} from '@/data/mockData';

import type { ContentItem, CategoryMeta, MockUser } from '@/types';

// Simulate async API calls (ready to replace with real fetch)
const delay = (ms = 0) => new Promise<void>((r) => setTimeout(r, ms));

export const api = {
  content: {
    list: async (): Promise<ContentItem[]> => {
      await delay();
      return contentItems;
    },
    getById: async (id: string): Promise<ContentItem | undefined> => {
      await delay();
      return _getById(id);
    },
    related: async (item: ContentItem): Promise<ContentItem[]> => {
      await delay();
      return _getRelated(item);
    },
    random: async (): Promise<ContentItem> => {
      await delay();
      return _getRandom();
    },
    search: async (query: string, category?: string): Promise<ContentItem[]> => {
      await delay();
      return _search(query, category);
    },
    byTheme: async (theme: string): Promise<ContentItem[]> => {
      await delay();
      return _getByTheme(theme);
    },
  },
  categories: {
    list: async (): Promise<CategoryMeta[]> => {
      await delay();
      return categories;
    },
  },
  topics: {
    trending: async (): Promise<string[]> => {
      await delay();
      return trendingTopics;
    },
  },
  user: {
    profile: async (): Promise<MockUser> => {
      await delay();
      return mockUser;
    },
  },
};
