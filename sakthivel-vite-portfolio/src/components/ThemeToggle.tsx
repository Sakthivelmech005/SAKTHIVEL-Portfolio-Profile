import { Moon, Sun } from 'lucide-react'

type ThemeToggleProps = {
  theme: 'dark' | 'light'
  onToggle: () => void
}

export default function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label="Toggle theme"
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300/20 bg-slate-100 text-slate-900 transition hover:bg-slate-200 dark:border-white/20 dark:bg-white/5 dark:text-gold dark:hover:bg-white/10"
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}
