import SectionHeading from '../components/SectionHeading';
import { motion } from 'framer-motion';

const groups = [
  {
    title: 'CAD & Design Software',
    skills: [
      'CATIA V5: Part Design, Generative Shape Design, Assembly Design, Drafting',
      'SolidWorks',
      'AutoCAD',
      '3DEXPERIENCE',
    ],
  },
  {
    title: 'Engineering & Manufacturing',
    skills: [
      'Engineering drawings and GD&T fundamentals',
      'Mechanical component design and material selection',
      'Design for Manufacturing and Design for Assembly (DFM/DFA)',
      'Basic FEA and engineering analysis',
      'Machining, welding, casting, forging, and automation fundamentals',
    ],
  },
  {
    title: 'Computer & Office Applications',
    skills: [
      'MS Excel and PowerPoint',
      'Technical documentation',
      'Exposure to AI workflow automation and computer vision',
    ],
  },
  {
    title: 'Core & Soft Skills',
    skills: [
      'Problem-solving and analytical thinking',
      'Product development and innovation',
      'Teamwork and leadership',
      'Project coordination and technical communication',
      'Continuous learning and Vibe Coding',
    ],
  },
];

export default function SkillsSection() {
  return (
    <section className="border-t border-slate-800/60 py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Skills"
          subtitle="Design tools, manufacturing knowledge, and professional capabilities."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {groups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="glass-card rounded-2xl border p-7"
            >
              <h3 className="text-xl font-semibold text-slate-100">{group.title}</h3>
              <ul className="mt-5 space-y-3">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex gap-3 leading-7 text-slate-300">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-electric" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
