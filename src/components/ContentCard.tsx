import { motion } from 'framer-motion';
import { Bookmark, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useSaved } from '@/context/SavedContext';
import type { ContentItem } from '@/types';

interface ContentCardProps {
  item: ContentItem;
  variant?: 'default' | 'compact' | 'featured';
  className?: string;
  index?: number;
}

export function ContentCard({ item, variant = 'default', className, index = 0 }: ContentCardProps) {
  const navigate = useNavigate();
  const { isSaved, toggleSave } = useSaved();
  const saved = isSaved(item.id);

  function handleSave(e: React.MouseEvent) {
    e.stopPropagation();
    toggleSave(item.id);
  }

  if (variant === 'compact') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.08 }}
        onClick={() => navigate(`/read/${item.id}`)}
        className={cn(
          'group flex gap-4 p-4 rounded-lg bg-bg-card border border-border hover:border-border-accent cursor-pointer transition-all duration-300',
          className
        )}
      >
        {/* Colour swatch */}
        <div
          className="w-16 h-16 rounded-md flex-shrink-0 flex items-center justify-center text-2xl"
          style={{ background: item.coverGradient }}
        >
          {item.coverEmoji}
        </div>
        <div className="flex-1 min-w-0">
          <span className="category-badge">{item.category}</span>
          <h3 className="font-serif font-medium text-ink-primary text-sm mt-1 leading-snug line-clamp-2 group-hover:text-ink-accent transition-colors duration-200">
            {item.title}
          </h3>
          <div className="flex items-center gap-2 mt-1.5">
            <Clock size={11} className="text-ink-muted" />
            <span className="text-[10px] text-ink-muted">{item.readingTime}</span>
          </div>
        </div>
        <button
          onClick={handleSave}
          className="flex-shrink-0 self-start mt-1 text-ink-muted hover:text-ink-accent transition-colors duration-200"
          aria-label={saved ? 'Unsave' : 'Save'}
        >
          <Bookmark size={14} fill={saved ? 'currentColor' : 'none'} className={saved ? 'text-ink-accent' : ''} />
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      onClick={() => navigate(`/read/${item.id}`)}
      className={cn(
        'group relative flex flex-col rounded-lg bg-bg-card border border-border hover:border-border-accent cursor-pointer overflow-hidden',
        'transition-all duration-300 hover:-translate-y-1',
        'hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]',
        className
      )}
    >
      {/* Cover */}
      <div
        className="h-40 flex items-center justify-center text-5xl"
        style={{ background: item.coverGradient }}
      >
        {item.coverEmoji}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <span className="category-badge">{item.category}</span>
          <button
            onClick={handleSave}
            className="text-ink-muted hover:text-ink-accent transition-colors duration-200 flex-shrink-0 -mt-0.5"
            aria-label={saved ? 'Unsave' : 'Save'}
          >
            <Bookmark size={15} fill={saved ? 'currentColor' : 'none'} className={saved ? 'text-ink-accent' : ''} />
          </button>
        </div>

        <h3 className="font-serif font-medium text-ink-primary text-base leading-snug mb-2 group-hover:text-ink-accent transition-colors duration-200 line-clamp-2">
          {item.title}
        </h3>
        <p className="text-ink-secondary text-sm leading-relaxed line-clamp-2 flex-1">
          {item.description}
        </p>
        <div className="flex items-center gap-1.5 mt-3">
          <Clock size={12} className="text-ink-muted" />
          <span className="text-xs text-ink-muted">{item.readingTime} read</span>
        </div>
      </div>
    </motion.div>
  );
}
