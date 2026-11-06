export type ContentType = 'story' | 'concept';

export type Category =
  | 'Psychology'
  | 'Philosophy'
  | 'Human Nature'
  | 'Short Stories'
  | 'Relationships'
  | 'Books & Ideas'
  | 'Science'
  | 'Life & Existence';

export interface ContentItem {
  id: string;
  type: ContentType;
  title: string;
  subtitle: string;
  description: string;
  category: Category;
  readingTime: string;
  readingTimeSeconds: number;
  body: string;
  tags: string[];
  coverGradient: string;
  coverEmoji: string;
  featured?: boolean;
  editorsPick?: boolean;
  thoughtProvoking?: boolean;
  relatedIds: string[];
  afterthought: string;
  publishedAt: string;
}

export interface CategoryMeta {
  name: Category;
  emoji: string;
  description: string;
  count: number;
  gradient: string;
}

export interface MockUser {
  id: string;
  name: string;
  initials: string;
  bio: string;
  readingStreak: number;
  totalRead: number;
  savedCount: number;
  favCategories: Category[];
  recentlyReadIds: string[];
  joinedDate: string;
  readingGoal: number;
}

export interface SavedContextType {
  savedIds: string[];
  toggleSave: (id: string) => void;
  isSaved: (id: string) => boolean;
}
