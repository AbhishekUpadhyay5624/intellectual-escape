import { motion, AnimatePresence } from 'framer-motion';
import { Bookmark, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useSaved } from '@/context/SavedContext';
import { contentItems } from '@/data/mockData';
import { ContentCard } from '@/components/ContentCard';

export function SavedPage() {
  const { savedIds } = useSaved();
  const navigate = useNavigate();

  const savedItems = contentItems.filter(i => savedIds.includes(i.id));
  const savedStories = savedItems.filter(i => i.type === 'story');
  const savedConcepts = savedItems.filter(i => i.type === 'concept');

  if (savedItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-16 h-16 rounded-full bg-bg-card border border-border flex items-center justify-center mx-auto mb-6">
            <Bookmark size={24} className="text-ink-muted" />
          </div>
          <h2 className="font-serif text-2xl text-ink-primary mb-2">Your library is empty</h2>
          <p className="text-ink-secondary text-sm max-w-sm leading-relaxed mb-8">
            Save stories and concepts that move you. They'll live here, waiting for you to return.
          </p>
          <button
            onClick={() => navigate('/explore')}
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-ink-accent/10 border border-ink-accent/20 text-ink-accent text-sm font-medium hover:bg-ink-accent/20 transition-all duration-200 mx-auto"
          >
            <BookOpen size={15} />
            Start exploring
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-content mx-auto px-4 md:px-8 lg:px-12 py-8 md:py-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h1 className="font-serif text-3xl md:text-4xl font-medium text-ink-primary mb-2">Saved</h1>
          <p className="text-ink-secondary">
            {savedItems.length} {savedItems.length === 1 ? 'piece' : 'pieces'} you've kept.
          </p>
        </motion.div>

        <AnimatePresence>
          {savedStories.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-10"
            >
              <div className="flex items-baseline gap-4 mb-5">
                <h2 className="font-serif text-lg font-medium text-ink-primary">Stories</h2>
                <span className="text-xs text-ink-muted border border-border rounded-full px-2 py-0.5">{savedStories.length}</span>
                <div className="flex-1 h-px bg-border" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {savedStories.map((item, i) => (
                  <ContentCard key={item.id} item={item} index={i} />
                ))}
              </div>
            </motion.section>
          )}

          {savedConcepts.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mb-10"
            >
              <div className="flex items-baseline gap-4 mb-5">
                <h2 className="font-serif text-lg font-medium text-ink-primary">Concepts & Ideas</h2>
                <span className="text-xs text-ink-muted border border-border rounded-full px-2 py-0.5">{savedConcepts.length}</span>
                <div className="flex-1 h-px bg-border" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {savedConcepts.map((item, i) => (
                  <ContentCard key={item.id} item={item} index={i} />
                ))}
              </div>
            </motion.section>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
