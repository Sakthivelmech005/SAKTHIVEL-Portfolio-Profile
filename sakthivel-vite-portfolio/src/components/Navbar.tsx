import { Link, NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import { navLinks } from '../data/portfolio'

type NavbarProps = {
  theme: 'dark' | 'light'
  onToggleTheme: () => void
}

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/20 bg-white/90 backdrop-blur-xl transition-colors duration-500 dark:border-white/10 dark:bg-black/75">
      <div className="container mx-auto flex items-center justify-between px-6 py-4 lg:px-10">
        <Link to="/" className="text-xl font-semibold tracking-[0.2em] text-slate-950 transition-colors duration-500 dark:text-ivory">
          SAKTHIVEL S
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.href}
              className={({ isActive }) =>
                `font-medium text-sm transition duration-300 ${
                  isActive ? 'text-gold' : 'text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-ivory'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <Link
            to="/contact"
            className="hidden rounded-full border border-gold/30 bg-gold/5 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-gold/10 dark:text-slate-950 lg:inline-flex"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  )
}
