import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Flame, Bookmark, Star } from 'lucide-react';
import { mockUser, getContentById } from '@/data/mockData';
import { useSaved } from '@/context/SavedContext';
import { ContentCard } from '@/components/ContentCard';

export function ProfilePage() {
  const navigate = useNavigate();
  const { savedIds } = useSaved();

  const recentlyRead = mockUser.recentlyReadIds
    .map(id => getContentById(id))
    .filter((i): i is NonNullable<typeof i> => !!i);

  const stats = [
    { icon: BookOpen, label: 'Total Read', value: mockUser.totalRead },
    { icon: Flame, label: 'Day Streak', value: mockUser.readingStreak },
    { icon: Bookmark, label: 'Saved', value: savedIds.length },
    { icon: Star, label: 'Goal', value: `${mockUser.readingGoal}/wk` },
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-content mx-auto px-4 md:px-8 lg:px-12 py-8 md:py-12">

        {/* Profile Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            {/* Avatar */}
            <div className="w-20 h-20 rounded-full bg-ink-accent/10 border border-ink-accent/20 flex items-center justify-center flex-shrink-0">
              <span className="font-serif text-3xl font-medium text-ink-accent">{mockUser.initials}</span>
            </div>
            <div>
              <h1 className="font-serif text-2xl md:text-3xl font-medium text-ink-primary mb-1">{mockUser.name}</h1>
              <p className="text-ink-secondary text-sm italic mb-3">{mockUser.bio}</p>
              <p className="text-xs text-ink-muted">Member since {new Date(mockUser.joinedDate).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}</p>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12"
        >
          {stats.map(({ icon: Icon, label, value }) => (
            <div key={label} className="p-4 rounded-lg bg-bg-card border border-border text-center">
              <Icon size={18} className="text-ink-accent mx-auto mb-2" />
              <p className="font-serif text-2xl font-medium text-ink-primary">{value}</p>
              <p className="text-xs text-ink-muted mt-1">{label}</p>
            </div>
          ))}
        </motion.div>

        {/* Favourite Categories */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-10"
        >
          <div className="flex items-baseline gap-4 mb-5">
            <h2 className="font-serif text-lg font-medium text-ink-primary">Favourite Categories</h2>
            <div className="flex-1 h-px bg-border" />
          </div>
          <div className="flex flex-wrap gap-2">
            {mockUser.favCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => navigate(`/explore?category=${encodeURIComponent(cat)}`)}
                className="px-4 py-2 rounded-lg text-sm font-medium border border-ink-accent/20 bg-ink-accent/10 text-ink-accent hover:bg-ink-accent/20 transition-all duration-200"
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.section>

        {/* Reading Preferences */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10"
        >
          <div className="flex items-baseline gap-4 mb-5">
            <h2 className="font-serif text-lg font-medium text-ink-primary">Reading Profile</h2>
            <div className="flex-1 h-px bg-border" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-lg bg-bg-card border border-border">
              <p className="text-xs text-ink-muted tracking-wider uppercase mb-3">Reading Style</p>
              <p className="text-ink-primary text-sm font-medium">Slow reader · Deep thinker</p>
              <p className="text-ink-muted text-xs mt-1">Prefers concepts over lists</p>
            </div>
            <div className="p-5 rounded-lg bg-bg-card border border-border">
              <p className="text-xs text-ink-muted tracking-wider uppercase mb-3">Best Reading Time</p>
              <p className="text-ink-primary text-sm font-medium">Late evenings</p>
              <p className="text-ink-muted text-xs mt-1">Usually between 10 PM – 12 AM</p>
            </div>
            <div className="p-5 rounded-lg bg-bg-card border border-border">
              <p className="text-xs text-ink-muted tracking-wider uppercase mb-3">Avg. Session Length</p>
              <p className="text-ink-primary text-sm font-medium">12 minutes</p>
              <p className="text-ink-muted text-xs mt-1">Usually 2–3 pieces per session</p>
            </div>
            <div className="p-5 rounded-lg bg-bg-card border border-border">
              <p className="text-xs text-ink-muted tracking-wider uppercase mb-3">Weekly Reading Goal</p>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex-1 h-1.5 bg-bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-ink-accent rounded-full" style={{ width: '60%' }} />
                </div>
                <span className="text-xs text-ink-muted">3/{mockUser.readingGoal}</span>
              </div>
              <p className="text-ink-muted text-xs mt-2">2 more to reach this week's goal</p>
            </div>
          </div>
        </motion.section>

        {/* Recently Read */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-baseline gap-4 mb-5">
            <h2 className="font-serif text-lg font-medium text-ink-primary">Recently Read</h2>
            <div className="flex-1 h-px bg-border" />
          </div>
          <div className="flex flex-col gap-3">
            {recentlyRead.map((item, i) => (
              <ContentCard key={item.id} item={item} variant="compact" index={i} />
            ))}
          </div>
        </motion.section>

      </div>
    </div>
  );
}
