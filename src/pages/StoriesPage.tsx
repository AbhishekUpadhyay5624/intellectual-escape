import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { ContentCard } from '@/components/ContentCard';
import { contentItems, getStoriesByTheme, getContentById } from '@/data/mockData';

const storySections = [
  'Latest',
  'Most Thought-Provoking',
  'Human Relationships',
  'Loneliness & Belonging',
  'Regret & Nostalgia',
  'Unexpected Endings',
];

const featuredStory = getContentById('man-always-available')!;

export function StoriesPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <div className="max-w-content mx-auto px-4 md:px-8 lg:px-12 py-8 md:py-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h1 className="font-serif text-3xl md:text-4xl font-medium text-ink-primary mb-2">Stories</h1>
          <p className="text-ink-secondary">Short stories written to stay with you.</p>
        </motion.div>

        {/* Featured */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <div
            className="group relative cursor-pointer rounded-xl overflow-hidden"
            onClick={() => navigate(`/read/${featuredStory.id}`)}
            style={{ minHeight: '320px' }}
          >
            <div className="absolute inset-0" style={{ background: featuredStory.coverGradient }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute top-6 right-6 text-6xl opacity-15 select-none">{featuredStory.coverEmoji}</div>
            <div className="relative flex flex-col justify-end p-7 md:p-10 h-full" style={{ minHeight: '320px' }}>
              <span className="category-badge mb-2 block">Featured · {featuredStory.category}</span>
              <h2 className="font-serif text-2xl md:text-3xl font-medium text-ink-primary mb-2 leading-snug">
                {featuredStory.title}
              </h2>
              <p className="text-ink-secondary text-sm md:text-base mb-4 max-w-md">{featuredStory.subtitle}</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <Clock size={12} className="text-ink-muted" />
                  <span className="text-xs text-ink-muted">{featuredStory.readingTime}</span>
                </div>
                <button className="flex items-center gap-2 text-ink-accent text-sm font-medium group-hover:gap-3 transition-all duration-300">
                  Read <ArrowRight size={14} />
                </button>
              </div>
            </div>
            <div className="absolute inset-0 rounded-xl border border-border group-hover:border-border-accent transition-colors duration-300" />
          </div>
        </motion.section>

        {/* Story sections */}
        {storySections.map((theme, sectionIndex) => {
          const items = getStoriesByTheme(theme);
          if (items.length === 0) return null;
          return (
            <motion.section
              key={theme}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.05 }}
              className="mb-10 md:mb-12"
            >
              <div className="flex items-baseline gap-4 mb-5">
                <h2 className="font-serif text-lg md:text-xl font-medium text-ink-primary">{theme}</h2>
                <div className="flex-1 h-px bg-border" />
              </div>

              {/* Mobile: horizontal scroll; Desktop: grid */}
              <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 hidden">
                {items.map((item, i) => (
                  <ContentCard key={item.id} item={item} index={i} />
                ))}
              </div>
              <div className="flex gap-4 overflow-x-auto scrollbar-hide md:hidden -mx-4 px-4">
                {items.map((item, i) => (
                  <div key={item.id} className="w-[260px] flex-shrink-0">
                    <ContentCard item={item} index={i} />
                  </div>
                ))}
              </div>
            </motion.section>
          );
        })}

        {/* All stories list */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-baseline gap-4 mb-5">
            <h2 className="font-serif text-lg md:text-xl font-medium text-ink-primary">All Stories</h2>
            <div className="flex-1 h-px bg-border" />
          </div>
          <div className="flex flex-col gap-3">
            {contentItems.filter(i => i.type === 'story').map((item, i) => (
              <ContentCard key={item.id} item={item} variant="compact" index={i} />
            ))}
          </div>
        </motion.section>

      </div>
    </div>
  );
}
