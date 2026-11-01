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
    <div className="min-h-screen bg-[#070707] text-slate-100">
      {isLoading ? <LoadingScreen /> : null}
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
