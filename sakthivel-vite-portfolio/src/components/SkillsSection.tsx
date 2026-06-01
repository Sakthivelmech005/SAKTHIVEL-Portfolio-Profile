import { skills } from '../data/portfolio'

export default function SkillsSection() {
  return (
    <section id="skills" className="space-y-8 rounded-[2rem] border border-slate-200/30 bg-white/95 p-8 shadow-glow transition-colors duration-500 dark:border-white/10 dark:bg-black/65 dark:text-ivory md:p-12">
      <div>
        <p className="section-heading">Skills</p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl dark:text-ivory">Engineering capabilities for premium execution.</h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill) => (
          <div key={skill} className="glass-panel rounded-[1.75rem] p-5 text-sm">
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}
