import SectionHeading from '../components/SectionHeading';
import { motion } from 'framer-motion';

const bullets = [
  'CATIA V5, SolidWorks, AutoCAD, and 3DEXPERIENCE',
  'Mechanical design, engineering analysis, and manufacturing',
  'Innovation, product development, and collaborative engineering',
];

export default function AboutSection() {
  return (
    <section className="border-t border-slate-800/60 py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="About Me"
          subtitle="Mechanical engineering student focused on CAD design and innovative engineering solutions."
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
              Mechanical Engineering undergraduate specializing in CAD modelling, product design,
              and manufacturing engineering. Proficient in CATIA V5, SolidWorks, AutoCAD, and
              3DEXPERIENCE for design and engineering analysis. Experienced in multidisciplinary
              projects involving robotic welding, electric mobility, hydrogen production, and AI
              applications. AICTE Innovation Student Ambassador and Best Research Paper Award
              recipient, passionate about innovative engineering solutions.
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
              <h3 className="text-xl font-semibold text-slate-100">Engineering interests</h3>
              <p className="mt-4 text-slate-400 leading-7">
                Mechanical design, product development, electric mobility, renewable hydrogen
                production, robotic welding, and engineering analysis.
              </p>
            </div>
            <div className="glass-card rounded-[2rem] border p-8">
              <h3 className="text-xl font-semibold text-slate-100">Innovation & collaboration</h3>
              <p className="mt-4 text-slate-400 leading-7">
                Applies analytical thinking, problem-solving, teamwork, and project coordination to
                multidisciplinary engineering concepts.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
