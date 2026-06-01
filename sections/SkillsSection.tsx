import SectionHeading from '../components/SectionHeading';
import SkillBar from '../components/SkillBar';
import { motion } from 'framer-motion';

const technical = [
  { label: 'SolidWorks', score: 92 },
  { label: 'AutoCAD', score: 88 },
  { label: 'CATIA', score: 85 },
  { label: 'ANSYS', score: 80 },
  { label: 'Product Design', score: 92 },
  { label: 'GD&T', score: 87 },
  { label: 'CAD Modeling', score: 90 },
  { label: 'Mechanical Design', score: 92 },
  { label: 'Technical Drawing', score: 94 },
  { label: 'BOM Preparation', score: 89 },
];

const professional = [
  { label: 'Team Leadership', score: 90 },
  { label: 'Project Management', score: 86 },
  { label: 'Problem Solving', score: 93 },
  { label: 'Communication', score: 88 },
  { label: 'Innovation Management', score: 91 },
];

export default function SkillsSection() {
  return (
    <section className="border-t border-slate-800/60 py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Skills"
          subtitle="Technical and professional strengths for engineering excellence."
        />
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="glass-card rounded-[2rem] border p-8"
          >
            <h3 className="text-xl font-semibold text-slate-100">Technical Skills</h3>
            <div className="mt-8 space-y-5">
              {technical.map((skill) => (
                <SkillBar key={skill.label} label={skill.label} score={skill.score} />
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="glass-card rounded-[2rem] border p-8"
          >
            <h3 className="text-xl font-semibold text-slate-100">Professional Skills</h3>
            <div className="mt-8 space-y-5">
              {professional.map((skill) => (
                <SkillBar key={skill.label} label={skill.label} score={skill.score} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
