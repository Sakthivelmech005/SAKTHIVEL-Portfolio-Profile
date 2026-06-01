import SectionHeading from '../components/SectionHeading';
import { motion } from 'framer-motion';

const bullets = [
  'Mechanical Engineering Student',
  'CAD Designer',
  'Product Design Enthusiast',
  'Innovation Ambassador',
  'Engineering Research Contributor',
];

export default function AboutSection() {
  return (
    <section className="border-t border-slate-800/60 py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="About"
          subtitle="Professional summary for recruiters and innovation partners."
        />
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-[2rem] border p-10"
          >
            <p className="text-lg leading-8 text-slate-300">
              I am a Mechanical Engineering student with deep expertise in CAD modeling, product
              design, and applied research. My focus is on delivering premium engineering solutions
              with attention to manufacturability, technical drawing accuracy, and innovation
              leadership.
            </p>
            <div className="mt-8 space-y-4">
              {bullets.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-3 w-3 rounded-full bg-electric" />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid gap-6"
          >
            <div className="glass-card rounded-[2rem] border p-8">
              <h3 className="text-xl font-semibold text-slate-100">Professional attitude</h3>
              <p className="mt-4 text-slate-400 leading-7">
                I deliver recruiter-ready documentation, polished technical presentations, and
                strong stakeholder communication in every mechanical engineering engagement.
              </p>
            </div>
            <div className="glass-card rounded-[2rem] border p-8">
              <h3 className="text-xl font-semibold text-slate-100">Research and mentorship</h3>
              <p className="mt-4 text-slate-400 leading-7">
                Engaged in research-driven projects, workshops, and mentorship roles that bolster
                team performance and innovation outcomes.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
