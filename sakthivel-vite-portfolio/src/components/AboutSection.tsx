const bullets = [
  'CAD modeling and engineering visualization',
  'Product design with manufacturability in mind',
  'Innovation-driven technical communication',
  'Research-backed design workflows',
]

export default function AboutSection() {
  return (
    <section id="about" className="space-y-8 rounded-[2rem] border border-slate-200/30 bg-white/95 p-8 shadow-glow transition-colors duration-500 dark:border-white/10 dark:bg-black/65 dark:text-ivory md:p-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="section-heading">About</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl dark:text-ivory">A luxury portfolio for premium engineering impact.</h2>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.95fr_0.55fr]">
        <div className="glass-panel space-y-6 p-8">
          <p className="text-base leading-8 text-slate-700 dark:text-slate-300">
            I am a Mechanical Engineer focused on premium product development, CAD excellence, and recruiter-oriented technical design. My work blends elegant visual systems with deep engineering discipline.
          </p>
          <p className="text-base leading-8 text-slate-700 dark:text-slate-300">
            I create portfolio experiences that highlight the polished execution, research foundation, and innovation mindset recruiters value most.
          </p>
        </div>

        <div className="glass-panel space-y-4 border border-gold/20 p-8">
          {bullets.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <span className="mt-1 h-3 w-3 rounded-full bg-gold" />
              <p className="text-sm text-slate-700 dark:text-slate-300">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
