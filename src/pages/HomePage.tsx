import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { HeroCard } from '@/components/HeroCard';
import { ContentCard } from '@/components/ContentCard';
import { contentItems, categories, thoughtOfTheDay, getContentById } from '@/data/mockData';
import { getTimeGreeting } from '@/lib/utils';

const featured = getContentById('man-always-available')!;
const dailyDiscoveries = [
  getContentById('spotlight-effect')!,
  getContentById('unopened-letter')!,
  getContentById('ship-of-theseus')!,
];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export function HomePage() {
  const navigate = useNavigate();
  const greeting = getTimeGreeting();

  return (
    <div className="min-h-screen">
      <div className="max-w-content mx-auto px-4 md:px-8 lg:px-12 py-8 md:py-12">

        {/* Welcome */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-14"
        >
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-ink-primary mb-2">
            {greeting}.
          </h1>
          <p className="text-ink-secondary text-base md:text-lg">
            Something interesting is waiting to be discovered.
          </p>
        </motion.section>

        {/* Featured Story */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 md:mb-16"
        >
          <HeroCard item={featured} />
        </motion.section>

        {/* Daily Discoveries */}
        <section className="mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-baseline gap-4 mb-6"
          >
            <h2 className="font-serif text-xl md:text-2xl font-medium text-ink-primary">
              Daily Discoveries
            </h2>
            <div className="flex-1 h-px bg-border" />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {dailyDiscoveries.map((item, i) => (
              <ContentCard key={item.id} item={item} index={i} />
            ))}
          </motion.div>
        </section>

        {/* Explore Categories */}
        <section className="mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-baseline gap-4 mb-6"
          >
            <h2 className="font-serif text-xl md:text-2xl font-medium text-ink-primary">
              Explore
            </h2>
            <div className="flex-1 h-px bg-border" />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
          >
            {categories.map((cat, i) => (
              <motion.button
                key={cat.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                onClick={() => navigate(`/explore?category=${encodeURIComponent(cat.name)}`)}
                className="group p-4 rounded-lg bg-bg-card border border-border hover:border-border-accent text-left transition-all duration-300 hover:-translate-y-0.5"
              >
                <span className="text-2xl block mb-2">{cat.emoji}</span>
                <p className="text-ink-primary text-sm font-medium group-hover:text-ink-accent transition-colors duration-200">
                  {cat.name}
                </p>
                <p className="text-ink-muted text-xs mt-0.5">{cat.count} pieces</p>
              </motion.button>
            ))}
          </motion.div>
        </section>

        {/* Recently Added */}
        <section className="mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-baseline gap-4 mb-6"
          >
            <h2 className="font-serif text-xl md:text-2xl font-medium text-ink-primary">
              Recently Added
            </h2>
            <div className="flex-1 h-px bg-border" />
            <button
              onClick={() => navigate('/explore')}
              className="text-ink-accent text-sm font-medium hover:text-ink-accent-hover transition-colors duration-200 flex-shrink-0"
            >
              See all
            </button>
          </motion.div>
          <div className="flex flex-col gap-3">
            {contentItems.slice(4, 8).map((item, i) => (
              <ContentCard key={item.id} item={item} variant="compact" index={i} />
            ))}
          </div>
        </section>

        {/* Thought to Take With You */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="relative rounded-xl border border-border bg-bg-secondary px-8 md:px-14 py-12 md:py-16 overflow-hidden text-center">
            {/* Decorative */}
            <div className="absolute top-6 left-6 text-ink-accent/10 text-7xl font-serif select-none">"</div>
            <div className="absolute bottom-6 right-6 text-ink-accent/10 text-7xl font-serif select-none">"</div>

            <p className="font-serif text-xl md:text-2xl lg:text-3xl text-ink-primary leading-relaxed max-w-3xl mx-auto font-medium italic">
              {thoughtOfTheDay}
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-ink-accent/30" />
              <span className="text-ink-muted text-xs tracking-widest uppercase">A Thought to Take With You</span>
              <div className="h-px w-12 bg-ink-accent/30" />
            </div>
          </div>
        </motion.section>

        {/* Editor's Picks */}
        <section className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-baseline gap-4 mb-6"
          >
            <h2 className="font-serif text-xl md:text-2xl font-medium text-ink-primary">
              Editor's Picks
            </h2>
            <div className="flex-1 h-px bg-border" />
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contentItems.filter(i => i.editorsPick).slice(0, 4).map((item, i) => (
              <ContentCard key={item.id} item={item} index={i} />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
