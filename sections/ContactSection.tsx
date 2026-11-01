import SectionHeading from '../components/SectionHeading';
import { AtSign, Globe, MapPin, PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <section className="border-t border-slate-800/60 py-20" id="contact">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Contact"
          subtitle="Get in touch about mechanical design, product development, or manufacturing opportunities."
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]"
        >
          <div className="glass-card rounded-[2rem] border p-10">
            <p className="text-slate-300 leading-8">
              I am seeking opportunities in mechanical design, product development, and
              manufacturing engineering.
            </p>
            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <PhoneCall className="mt-1 text-electric" />
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Phone</p>
                  <a
                    href="tel:+919080039122"
                    className="mt-2 inline-block text-lg font-semibold text-slate-100 hover:text-electric"
                  >
                    +91 90 800 39 122
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <AtSign className="mt-1 text-electric" />
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Email</p>
                  <a
                    href="mailto:sakthiveldesigner05@gmail.com"
                    className="mt-2 inline-block break-all text-lg font-semibold text-slate-100 hover:text-electric"
                  >
                    sakthiveldesigner05@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Globe className="mt-1 text-electric" />
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Portfolio</p>
                  <a
                    href="https://sakthiveldesigner.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-block text-lg font-semibold text-slate-100 hover:text-electric"
                  >
                    sakthiveldesigner.vercel.app
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 text-electric" />
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Location</p>
                  <p className="mt-2 text-lg font-semibold text-slate-100">
                    Hosur, Tamil Nadu, India
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <a
              href="mailto:sakthiveldesigner05@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-electric px-6 py-3 font-semibold text-slate-950 transition hover:brightness-110"
            >
              <AtSign size={18} /> Email Sakthivel
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
