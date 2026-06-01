import { education } from '../data/portfolio'

export default function EducationSection() {
  return (
    <section id="education" className="space-y-8 rounded-[2rem] border border-slate-200/30 bg-white/95 p-8 shadow-glow transition-colors duration-500 dark:border-white/10 dark:bg-black/65 dark:text-ivory md:p-12">
      <div>
        <p className="section-heading">Education</p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl dark:text-ivory">Academic and professional training.</h2>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        {education.map((item) => (
          <div key={item.title} className="glass-panel rounded-[1.75rem] border border-gold/15 p-6">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">{item.date}</p>
            <h3 className="mt-3 text-xl font-semibold text-slate-950 dark:text-ivory">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{item.institution}</p>
            <p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-300">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
