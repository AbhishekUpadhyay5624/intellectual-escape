import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Bookmark, Share2, Clock } from 'lucide-react';
import { ContentCard } from '@/components/ContentCard';
import { getContentById, getRelatedContent } from '@/data/mockData';
import { useSaved } from '@/context/SavedContext';
import { cn } from '@/lib/utils';

export function ReadPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isSaved, toggleSave } = useSaved();

  const item = id ? getContentById(id) : undefined;
  const saved = item ? isSaved(item.id) : false;

  if (!item) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-4">
        <p className="text-5xl">🌙</p>
        <h2 className="font-serif text-2xl text-ink-primary">Story not found</h2>
        <button
          onClick={() => navigate(-1)}
          className="text-ink-accent text-sm flex items-center gap-2 hover:gap-3 transition-all duration-200"
        >
          <ArrowLeft size={14} /> Go back
        </button>
      </div>
    );
  }

  const related = getRelatedContent(item);

  function handleShare() {
    if (!item) return;
    if (navigator.share) {
      navigator.share({ title: item.title, text: item.subtitle, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  }

  return (
    <div className="min-h-screen">
      {/* Top bar */}
      <div className="sticky top-0 z-30 bg-bg-primary/90 backdrop-blur-md border-b border-border">
        <div className="max-w-reading mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-ink-secondary hover:text-ink-primary transition-colors duration-200 text-sm"
          >
            <ArrowLeft size={16} />
            <span className="hidden sm:block">Back</span>
          </button>
          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="p-2 rounded-lg text-ink-muted hover:text-ink-primary hover:bg-bg-card transition-all duration-200"
              aria-label="Share"
            >
              <Share2 size={16} />
            </button>
            <button
              onClick={() => toggleSave(item.id)}
              className={cn(
                'p-2 rounded-lg transition-all duration-200',
                saved
                  ? 'text-ink-accent bg-ink-accent/10'
                  : 'text-ink-muted hover:text-ink-primary hover:bg-bg-card'
              )}
              aria-label={saved ? 'Unsave' : 'Save'}
            >
              <Bookmark size={16} fill={saved ? 'currentColor' : 'none'} />
            </button>
          </div>
        </div>
      </div>

      {/* Reading content */}
      <div className="max-w-reading mx-auto px-4 md:px-6 py-8 md:py-14">

        {/* Meta */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="category-badge">{item.category}</span>
            <span className="text-border">·</span>
            <div className="flex items-center gap-1.5">
              <Clock size={12} className="text-ink-muted" />
              <span className="text-xs text-ink-muted">{item.readingTime} read</span>
            </div>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-ink-primary leading-tight mb-4">
            {item.title}
          </h1>
          <p className="font-serif text-lg md:text-xl text-ink-secondary italic leading-relaxed">
            {item.subtitle}
          </p>
        </motion.div>

        {/* Cover */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-xl overflow-hidden mb-10 md:mb-14"
          style={{ background: item.coverGradient, height: '220px' }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-8xl opacity-40 select-none">{item.coverEmoji}</span>
          </div>
        </motion.div>

        {/* Body */}
        <motion.article
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose-editorial mb-14"
          dangerouslySetInnerHTML={{ __html: item.body }}
        />

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap gap-2 mb-14"
        >
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs text-ink-muted border border-border capitalize"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex-1 h-px bg-border" />
          <span className="text-ink-muted text-xs tracking-widest uppercase">The Afterthought</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Afterthought */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="bg-bg-secondary rounded-xl p-7 md:p-10 border border-border text-center">
            <div className="text-ink-accent text-3xl mb-5 font-serif">"</div>
            <p className="font-serif text-xl md:text-2xl text-ink-primary leading-relaxed mb-8 italic">
              {item.afterthought}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => toggleSave(item.id)}
                className={cn(
                  'flex items-center gap-2 justify-center px-5 py-2.5 rounded-lg text-sm font-medium border transition-all duration-200',
                  saved
                    ? 'bg-ink-accent/20 border-ink-accent/40 text-ink-accent'
                    : 'border-border text-ink-secondary hover:border-border-accent hover:text-ink-accent'
                )}
              >
                <Bookmark size={14} fill={saved ? 'currentColor' : 'none'} />
                {saved ? 'Saved' : 'Save this thought'}
              </button>
              <button
                onClick={() => related[0] && navigate(`/read/${related[0].id}`)}
                className="flex items-center gap-2 justify-center px-5 py-2.5 rounded-lg text-sm font-medium border border-border text-ink-secondary hover:border-border-accent hover:text-ink-primary transition-all duration-200"
              >
                Read something similar
              </button>
              <button
                onClick={() => navigate('/explore')}
                className="flex items-center gap-2 justify-center px-5 py-2.5 rounded-lg text-sm font-medium border border-border text-ink-secondary hover:border-border-accent hover:text-ink-primary transition-all duration-200"
              >
                Explore another perspective
              </button>
            </div>
          </div>
        </motion.section>

        {/* Related */}
        {related.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="flex items-baseline gap-4 mb-5">
              <h3 className="font-serif text-lg font-medium text-ink-primary">Continue Reading</h3>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {related.map((r, i) => (
                <ContentCard key={r.id} item={r} index={i} />
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
}
