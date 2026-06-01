export default function ContactSection() {
  return (
    <section id="contact" className="space-y-8 rounded-[2rem] border border-slate-200/30 bg-white/95 p-8 shadow-glow transition-colors duration-500 dark:border-white/10 dark:bg-black/65 dark:text-ivory md:p-12">
      <div>
        <p className="section-heading">Contact</p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl dark:text-ivory">Ready to start a premium collaboration.</h2>
      </div>
      <div className="grid gap-8 lg:grid-cols-[0.95fr_0.6fr]">
        <div className="glass-panel p-8">
          <p className="text-base leading-8 text-slate-700 dark:text-slate-300">
            Let’s connect to discuss product design, mechanical systems, CAD workflows, and premium engineering leadership.
          </p>
          <div className="mt-8 space-y-4 text-sm text-slate-700 dark:text-slate-300">
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:sakthivel@example.com" className="text-gold">sakthivel@example.com</a>
            </p>
            <p>
              <strong>Location:</strong> Hosur, Tamil Nadu
            </p>
          </div>
        </div>
        <form className="glass-panel p-8">
          <div className="space-y-4">
            <label className="block text-sm text-slate-700 dark:text-slate-300">Name</label>
            <input type="text" placeholder="Your Name" className="w-full rounded-3xl border border-slate-200/60 bg-white/90 px-4 py-3 text-slate-950 outline-none transition focus:border-gold/50 dark:border-white/10 dark:bg-slate-950 dark:text-ivory" />
          </div>
          <div className="space-y-4">
            <label className="block text-sm text-slate-700 dark:text-slate-300">Email</label>
            <input type="email" placeholder="Your Email" className="w-full rounded-3xl border border-slate-200/60 bg-white/90 px-4 py-3 text-slate-950 outline-none transition focus:border-gold/50 dark:border-white/10 dark:bg-slate-950 dark:text-ivory" />
          </div>
          <div className="space-y-4">
            <label className="block text-sm text-slate-700 dark:text-slate-300">Message</label>
            <textarea rows={5} placeholder="Project details or collaboration inquiry" className="w-full rounded-3xl border border-slate-200/60 bg-white/90 px-4 py-3 text-slate-950 outline-none transition focus:border-gold/50 dark:border-white/10 dark:bg-slate-950 dark:text-ivory" />
          </div>
          <button
            type="submit"
            className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
