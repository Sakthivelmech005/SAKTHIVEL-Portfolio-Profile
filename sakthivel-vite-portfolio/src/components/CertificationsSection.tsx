import { certifications } from '../data/portfolio'

export default function CertificationsSection() {
  return (
    <section id="certifications" className="space-y-8 rounded-[2rem] border border-slate-200/30 bg-white/95 p-8 shadow-glow transition-colors duration-500 dark:border-white/10 dark:bg-black/65 dark:text-ivory md:p-12">
      <div>
        <p className="section-heading">Certifications</p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl dark:text-ivory">Qualifications that prove expertise.</h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {certifications.map((item) => (
          <div key={item.name} className="glass-panel rounded-[1.75rem] border border-gold/15 p-6">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">{item.year}</p>
            <h3 className="mt-3 text-xl font-semibold text-slate-950 dark:text-ivory">{item.name}</h3>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">Issued by {item.issuer}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
