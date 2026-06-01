import { Link } from 'react-router-dom'
import ProjectsSection from '../components/ProjectsSection'

export default function ProjectsPage() {
  return (
    <div className="space-y-10">
      <section className="rounded-[2rem] border border-white/10 bg-black/60 p-8 shadow-glow md:p-12">
        <div className="mb-6">
          <p className="section-heading">Projects</p>
          <h1 className="mt-3 text-4xl font-semibold text-ivory">Focused work for premium product outcomes.</h1>
        </div>
        <p className="max-w-3xl text-slate-300">
          Explore a curated selection of high-value engineering and industrial design projects that demonstrate craftsmanship, strategy, and technical delivery.
        </p>
      </section>
      <ProjectsSection />
      <div className="rounded-[2rem] border border-white/10 bg-black/60 p-8 text-center shadow-glow">
        <p className="text-slate-300">Want a full portfolio review?</p>
        <Link to="/contact" className="mt-4 inline-flex rounded-full border border-gold/30 bg-gold/5 px-6 py-3 text-sm font-semibold text-gold transition hover:bg-gold/10">
          Reach out today
        </Link>
      </div>
    </div>
  )
}
