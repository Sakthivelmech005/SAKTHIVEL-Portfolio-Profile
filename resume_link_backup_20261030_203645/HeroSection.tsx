import { Download, Mail } from 'lucide-react'

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden rounded-[2rem] border border-slate-200/30 bg-white/95 p-8 shadow-glow transition-colors duration-500 dark:border-white/10 dark:bg-black/70 md:p-12">
      <div className="absolute inset-0 bg-hero-gradient opacity-80" />
      <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-8">
          <span className="inline-flex items-center gap-3 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-gold">
            Luxury Engineering Portfolio
          </span>
          <div className="space-y-5">
            <h1 className="text-4xl font-semibold leading-tight tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl dark:text-ivory">
              Sakthivel S
            </h1>
            <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300">
              Mechanical Engineer and Product Designer delivering premium engineering systems,
              CAD innovation, and recruiter-ready technical design experiences.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-105"
            >
              <Download size={16} /> Resume
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300/30 bg-slate-100/80 px-6 py-3 text-sm text-slate-950 transition hover:bg-slate-200 dark:border-white/15 dark:bg-white/5 dark:text-slate-100 dark:hover:bg-white/10"
            >
              <Mail size={16} /> Contact
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:max-w-md">
            <div className="glass-panel rounded-[1.75rem] p-5 text-center">
              <p className="text-4xl font-semibold text-gold">12+</p>
              <p className="mt-2 text-xs uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">Projects Delivered</p>
            </div>
            <div className="glass-panel rounded-[1.75rem] p-5 text-center">
              <p className="text-4xl font-semibold text-gold">2027</p>
              <p className="mt-2 text-xs uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">Graduation Year</p>
            </div>
          </div>
        </div>

        <div className="relative rounded-[2rem] border border-slate-200/40 bg-slate-100/80 p-6 shadow-2xl shadow-slate-900/5 transition-colors duration-500 dark:border-white/10 dark:bg-white/5">
          <div className="relative mx-auto max-w-md overflow-hidden rounded-[1.75rem] border border-gold/20 bg-slate-100/90 p-6 dark:border-gold/20 dark:bg-slate-900/70">
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-gold/20 to-transparent" />
            <div className="relative rounded-[1.5rem] border border-slate-200/40 bg-white/95 p-6 dark:border-white/10 dark:bg-black/65">
              <div className="mb-6 flex items-center gap-4 rounded-[1.75rem] border border-slate-200/40 bg-gold/10 p-4 dark:border-white/10 dark:bg-gold/10">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold text-slate-950 text-lg font-bold">
                  S
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Location</p>
                  <p className="mt-1 text-lg font-semibold text-slate-950 dark:text-ivory">Hosur, Tamil Nadu</p>
                </div>
              </div>
              <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                Premium design thinking, manufacturing-aware engineering, and polished portfolio presentation for recruiters and hiring teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
