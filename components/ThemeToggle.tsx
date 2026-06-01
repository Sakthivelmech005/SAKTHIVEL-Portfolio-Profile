'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Moon, SunMedium } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-10 w-10 rounded-full bg-slate-800" />;
  }

  return (
    <button
      aria-label="Toggle theme"
      className="grid h-10 w-10 place-items-center rounded-full border border-slate-600/60 bg-slate-900/80 text-slate-200 transition hover:border-electric hover:text-electric"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <SunMedium size={18} /> : <Moon size={18} />}
    </button>
  );
}
