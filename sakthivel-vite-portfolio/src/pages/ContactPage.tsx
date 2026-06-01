import ContactSection from '../components/ContactSection'

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <section className="rounded-[2rem] border border-white/10 bg-black/60 p-8 shadow-glow md:p-12">
        <div>
          <p className="section-heading">Contact</p>
          <h1 className="mt-3 text-4xl font-semibold text-ivory">Let's build your next premium project.</h1>
        </div>
        <p className="max-w-3xl text-slate-300">
          Reach out for product engineering, CAD design, manufacturing strategy, or recruiter-ready portfolio guidance.
        </p>
      </section>
      <ContactSection />
    </div>
  )
}
