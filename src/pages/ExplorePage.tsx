import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { SearchBar } from '@/components/SearchBar';
import { ContentCard } from '@/components/ContentCard';
import { categories, trendingTopics, searchContent, contentItems } from '@/data/mockData';
import { cn } from '@/lib/utils';

const ALL = 'All';
const filterOptions = [ALL, ...categories.map(c => c.name)];

export function ExplorePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || ALL;

  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setActiveCategory(cat);
  }, [searchParams]);

  const results = searchContent(query, activeCategory === ALL ? undefined : activeCategory);
  const editorsPicks = contentItems.filter(i => i.editorsPick);

  function handleCategoryChange(cat: string) {
    setActiveCategory(cat);
    setSearchParams(cat !== ALL ? { category: cat } : {});
  }

  function handleTopicClick(topic: string) {
    setQuery(topic);
    setActiveCategory(ALL);
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-content mx-auto px-4 md:px-8 lg:px-12 py-8 md:py-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="font-serif text-3xl md:text-4xl font-medium text-ink-primary mb-2">Explore</h1>
          <p className="text-ink-secondary">Discover ideas across psychology, philosophy, and human experience.</p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6"
        >
          <SearchBar value={query} onChange={setQuery} />
        </motion.div>

        {/* Trending Topics */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-8"
        >
          <p className="text-xs text-ink-muted tracking-wider uppercase mb-3">Trending Topics</p>
          <div className="flex flex-wrap gap-2">
            {trendingTopics.map((topic) => (
              <button
                key={topic}
                onClick={() => handleTopicClick(topic)}
                className={cn(
                  'px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200',
                  query.toLowerCase() === topic.toLowerCase()
                    ? 'bg-ink-accent/20 border-ink-accent/40 text-ink-accent'
                    : 'border-border text-ink-secondary hover:border-border-accent hover:text-ink-accent bg-transparent'
                )}
              >
                {topic}
              </button>
            ))}
          </div>
        </motion.section>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 overflow-x-auto scrollbar-hide"
        >
          <div className="flex gap-2 min-w-max pb-1">
            {filterOptions.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-200 whitespace-nowrap',
                  activeCategory === cat
                    ? 'bg-ink-accent text-bg-primary border-ink-accent'
                    : 'border-border text-ink-secondary hover:border-border-accent hover:text-ink-primary bg-transparent'
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Results */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${query}-${activeCategory}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            {results.length === 0 ? (
              <div className="text-center py-24">
                <p className="text-ink-muted text-4xl mb-4">🔍</p>
                <p className="font-serif text-ink-secondary text-lg">Nothing found for "{query}"</p>
                <p className="text-ink-muted text-sm mt-2">Try a different word or browse by category.</p>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-5">
                  <p className="text-ink-muted text-sm">
                    {results.length} {results.length === 1 ? 'piece' : 'pieces'} found
                    {activeCategory !== ALL ? ` in ${activeCategory}` : ''}
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                  {results.map((item, i) => (
                    <ContentCard key={item.id} item={item} index={i} />
                  ))}
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Editor's Picks */}
        {!query && (
          <motion.section
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Sparkles size={16} className="text-ink-accent" />
              <h2 className="font-serif text-xl font-medium text-ink-primary">Editor's Picks</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {editorsPicks.map((item, i) => (
                <ContentCard key={item.id} item={item} index={i} />
              ))}
            </div>
          </motion.section>
        )}

      </div>
    </div>
  );
}
