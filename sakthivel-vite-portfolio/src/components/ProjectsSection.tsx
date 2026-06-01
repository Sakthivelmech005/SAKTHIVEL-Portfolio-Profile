import { projects } from '../data/portfolio'

export default function ProjectsSection() {
  return (
    <section id="projects" className="space-y-8 rounded-[2rem] border border-slate-200/30 bg-white/95 p-8 shadow-glow transition-colors duration-500 dark:border-white/10 dark:bg-black/65 dark:text-ivory md:p-12">
      <div>
        <p className="section-heading">Projects</p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl dark:text-ivory">Selected engineering and design work.</h2>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <article key={project.title} className="glass-panel rounded-[1.75rem] p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-gold">{project.category}</p>
            <h3 className="mt-4 text-2xl font-semibold text-slate-950 dark:text-ivory">{project.title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-300">{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
