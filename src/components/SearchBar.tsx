import { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function SearchBar({ value, onChange, placeholder = 'Search stories, concepts, ideas…', className }: SearchBarProps) {
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <div
      className={cn(
        'relative flex items-center transition-all duration-300',
        focused ? 'ring-1 ring-ink-accent/40' : '',
        className
      )}
    >
      <div
        className={cn(
          'w-full flex items-center gap-3 px-4 py-3 rounded-xl border bg-bg-card transition-all duration-300',
          focused ? 'border-ink-accent/40' : 'border-border'
        )}
      >
        <Search size={16} className={cn('flex-shrink-0 transition-colors duration-200', focused ? 'text-ink-accent' : 'text-ink-muted')} />
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          className="flex-1 bg-transparent text-ink-primary text-sm placeholder:text-ink-muted outline-none"
        />
        <AnimatePresence>
          {value && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => onChange('')}
              className="text-ink-muted hover:text-ink-primary transition-colors duration-200 flex-shrink-0"
            >
              <X size={14} />
            </motion.button>
          )}
        </AnimatePresence>
        {!focused && !value && (
          <span className="text-[10px] text-ink-muted border border-border rounded px-1.5 py-0.5 flex-shrink-0 hidden sm:block">⌘K</span>
        )}
      </div>
    </div>
  );
}
