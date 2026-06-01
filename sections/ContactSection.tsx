'use client';

import { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { AtSign, MapPin, PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Network response was not ok');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="border-t border-slate-800/60 py-20" id="contact">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Contact"
          subtitle="Recruiter-ready contact details and outreach pathways."
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
              I am available for internships, project collaborations, and engineering roles focused
              on CAD design, product innovation, and manufacturing-ready systems.
            </p>
            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <PhoneCall className="mt-1 text-electric" />
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Phone</p>
                  <p className="mt-2 text-lg font-semibold text-slate-100">9080039122</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <AtSign className="mt-1 text-electric" />
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Email</p>
                  <p className="mt-2 text-lg font-semibold text-slate-100">mechmen005@gmail.com</p>
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
          <div className="glass-card rounded-[2rem] border bg-slate-950/80 p-10">
            <h3 className="text-2xl font-semibold text-slate-100">Send a message</h3>
            <p className="mt-3 text-slate-400">
              I respond quickly to inquiries about internships, freelance projects, and technical
              collaborations.
            </p>
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  value={formData.name}
                  onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                  placeholder="Name"
                  className="rounded-3xl border border-slate-700/60 bg-slate-900/70 p-4 text-slate-100 outline-none transition focus:border-electric/70"
                  required
                />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                  placeholder="Email"
                  className="rounded-3xl border border-slate-700/60 bg-slate-900/70 p-4 text-slate-100 outline-none transition focus:border-electric/70"
                  required
                />
              </div>
              <textarea
                value={formData.message}
                onChange={(event) => setFormData({ ...formData, message: event.target.value })}
                placeholder="Message"
                rows={5}
                className="w-full rounded-3xl border border-slate-700/60 bg-slate-900/70 p-4 text-slate-100 outline-none transition focus:border-electric/70"
                required
              />
              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex items-center justify-center rounded-full bg-electric px-6 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'success' ? (
                <p className="text-sm text-emerald-400">Message sent successfully.</p>
              ) : null}
              {status === 'error' ? (
                <p className="text-sm text-rose-400">There was an error sending your message.</p>
              ) : null}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
