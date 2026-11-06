import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { ContentItem } from '@/types';

interface HeroCardProps {
  item: ContentItem;
}

export function HeroCard({ item }: HeroCardProps) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      onClick={() => navigate(`/read/${item.id}`)}
      className="group relative cursor-pointer rounded-xl overflow-hidden"
      style={{ minHeight: '380px' }}
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{ background: item.coverGradient }}
      />

      {/* Atmospheric overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      {/* Decorative emoji */}
      <div className="absolute top-8 right-8 text-7xl opacity-20 select-none">
        {item.coverEmoji}
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-8 md:p-10" style={{ minHeight: '380px' }}>
        <div className="max-w-xl">
          <span className="category-badge mb-3 block">{item.category}</span>
          <h2 className="font-serif font-semibold text-ink-primary text-2xl md:text-3xl lg:text-4xl leading-tight mb-3">
            {item.title}
          </h2>
          <p className="text-ink-secondary text-base md:text-lg leading-relaxed mb-6 max-w-md">
            {item.subtitle}
          </p>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5">
              <Clock size={13} className="text-ink-muted" />
              <span className="text-xs text-ink-muted">{item.readingTime} read</span>
            </div>
            <button className="flex items-center gap-2 text-ink-accent text-sm font-medium group-hover:gap-3 transition-all duration-300">
              Read the story
              <ArrowRight size={15} className="text-ink-accent" />
            </button>
          </div>
        </div>
      </div>

      {/* Hover border */}
      <div className="absolute inset-0 rounded-xl border border-border group-hover:border-border-accent transition-colors duration-300" />
    </motion.div>
  );
}
