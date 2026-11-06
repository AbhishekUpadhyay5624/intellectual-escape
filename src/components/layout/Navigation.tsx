import { NavLink, useNavigate } from 'react-router-dom';
import { Home, Compass, BookOpen, Bookmark, User, Shuffle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getRandomContent } from '@/data/mockData';

const navItems = [
  { to: '/', icon: Home, label: 'Home' },
  { to: '/explore', icon: Compass, label: 'Explore' },
  { to: '/stories', icon: BookOpen, label: 'Stories' },
  { to: '/saved', icon: Bookmark, label: 'Saved' },
  { to: '/profile', icon: User, label: 'Profile' },
];

export function Sidebar() {
  const navigate = useNavigate();

  function handleRandom() {
    const item = getRandomContent();
    navigate(`/read/${item.id}`);
  }

  return (
    <aside className="hidden md:flex flex-col fixed left-0 top-0 h-screen w-[240px] bg-bg-secondary border-r border-border z-40">
      {/* Logo */}
      <div className="px-6 py-8">
        <NavLink to="/" className="block group">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-ink-accent/10 border border-ink-accent/20 flex items-center justify-center">
              <span className="font-serif font-semibold text-ink-accent text-sm">IE</span>
            </div>
            <div>
              <p className="font-serif font-medium text-ink-primary text-sm leading-tight">Intellectual</p>
              <p className="font-serif font-medium text-ink-primary text-sm leading-tight">Escape</p>
            </div>
          </div>
        </NavLink>
        <p className="text-ink-muted text-[10px] tracking-wider uppercase mt-3 ml-11">
          Read a little. Think a lot.
        </p>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 transition-all duration-200 group',
                isActive
                  ? 'bg-ink-accent/10 text-ink-accent'
                  : 'text-ink-secondary hover:text-ink-primary hover:bg-bg-card'
              )
            }
          >
            {({ isActive }) => (
              <>
                <Icon
                  size={18}
                  className={cn(
                    'transition-colors duration-200 flex-shrink-0',
                    isActive ? 'text-ink-accent' : 'text-ink-secondary group-hover:text-ink-primary'
                  )}
                />
                <span className="text-sm font-medium">{label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Random Thought CTA */}
      <div className="p-4 border-t border-border">
        <button
          onClick={handleRandom}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-ink-accent/10 border border-ink-accent/20 hover:bg-ink-accent/20 hover:border-ink-accent/40 transition-all duration-200 group"
        >
          <Shuffle size={16} className="text-ink-accent flex-shrink-0" />
          <div className="text-left">
            <p className="text-xs font-medium text-ink-accent">Random Thought</p>
            <p className="text-[10px] text-ink-muted leading-tight mt-0.5">Something you didn't know you needed</p>
          </div>
        </button>
      </div>
    </aside>
  );
}

export function BottomNav() {
  const navigate = useNavigate();

  function handleRandom() {
    const item = getRandomContent();
    navigate(`/read/${item.id}`);
  }

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-bg-secondary border-t border-border bottom-nav-safe">
      <div className="flex items-center justify-around py-2">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              cn(
                'flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all duration-200',
                isActive ? 'text-ink-accent' : 'text-ink-muted'
              )
            }
          >
            {({ isActive }) => (
              <>
                <Icon size={20} className={isActive ? 'text-ink-accent' : 'text-ink-muted'} />
                <span className="text-[10px] font-medium">{label}</span>
              </>
            )}
          </NavLink>
        ))}
        <button
          onClick={handleRandom}
          className="flex flex-col items-center gap-1 px-3 py-2 text-ink-muted"
        >
          <Shuffle size={20} />
          <span className="text-[10px] font-medium">Random</span>
        </button>
      </div>
    </nav>
  );
}
