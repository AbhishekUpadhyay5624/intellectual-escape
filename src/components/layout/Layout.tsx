import { Outlet } from 'react-router-dom';
import { Sidebar, BottomNav } from './Navigation';

export function Layout() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Sidebar />
      <main className="md:ml-[240px] pb-20 md:pb-0 min-h-screen">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
}
