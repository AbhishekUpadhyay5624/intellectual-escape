# Intellectual Escape

> **Read a little. Think a lot.**

A premium, editorial-style web application for discovering short stories, psychological concepts, and philosophical ideas — all beautifully curated and designed for a 1–3 minute reading experience.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + TypeScript |
| Build | Vite 6 |
| Styling | Tailwind CSS |
| UI Components | shadcn/ui (custom-built) |
| Animations | Framer Motion |
| Routing | React Router 6 |
| Icons | Lucide React |

---

## Project Structure

```
src/
├── components/
│   ├── layout/         # Sidebar, BottomNav, Layout wrapper
│   ├── ui/             # Reusable shadcn/ui-style components
│   ├── ContentCard.tsx # Versatile content card (default + compact)
│   ├── HeroCard.tsx    # Large featured story card
│   └── SearchBar.tsx   # Animated search input
├── context/
│   └── SavedContext.tsx # Bookmarks state (localStorage-backed)
├── data/
│   └── mockData.ts     # 18 richly-written stories & concepts
├── hooks/
│   └── useLocalStorage.ts
├── lib/
│   ├── api.ts          # Service layer (swap for real API later)
│   └── utils.ts        # cn(), getTimeGreeting(), etc.
├── pages/
│   ├── HomePage.tsx
│   ├── ExplorePage.tsx
│   ├── StoriesPage.tsx
│   ├── ReadPage.tsx
│   ├── SavedPage.tsx
│   └── ProfilePage.tsx
└── types/
    └── index.ts        # TypeScript interfaces
```

---

## Getting Started

```bash
npm install
npm run dev
```

App runs at **http://localhost:5173**

---

## Features

- **5 fully-functional pages**: Home, Explore, Stories, Saved, Profile
- **Reading experience**: Drop-cap first letter, prose-editorial layout, afterthought section
- **Search & filter**: Real-time search + category filtering
- **Bookmarks**: Save/unsave any story or concept, persisted to localStorage
- **Random Thought**: Navigates to a random piece of content
- **Responsive**: Desktop sidebar + mobile bottom navigation
- **18 pieces of content**: Fully-written stories and concept explainers

---

## Backend Integration Guide

The app is structured for seamless FastAPI + PostgreSQL/Supabase integration.

### Step 1 — Add environment variables
```bash
cp .env.example .env.local
# Set VITE_API_URL=http://localhost:8000/api/v1
```

### Step 2 — Replace mock API calls
All data fetching is centralised in `src/lib/api.ts`.
Swap the mock implementations with real `fetch()` calls:

```typescript
// Before (mock)
getById: async (id: string) => _getById(id)

// After (real API)
getById: async (id: string) => {
  const res = await fetch(`${API_BASE}/content/${id}`, { headers: authHeaders() })
  return res.json()
}
```

### Step 3 — Add auth
Wrap routes in an `AuthGuard` component and add JWT headers in `src/lib/api.ts`.

---

## Design System

| Token | Value |
|-------|-------|
| Background | `#151515` |
| Secondary BG | `#202020` |
| Card BG | `#272727` |
| Primary Text | `#F5F0E8` |
| Secondary Text | `#A8A29E` |
| Accent | `#C6A77D` |
| Serif Font | Playfair Display |
| Sans Font | Inter |
