import { ReactNode, useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import LoadingScreen from './LoadingScreen';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 650);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.15),_transparent_18%),radial-gradient(circle_at_bottom_right,_rgba(148,163,184,0.08),_transparent_16%),linear-gradient(180deg,_#070707_0%,_#050505_100%)] text-slate-100">
      {isLoading ? <LoadingScreen /> : null}
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
