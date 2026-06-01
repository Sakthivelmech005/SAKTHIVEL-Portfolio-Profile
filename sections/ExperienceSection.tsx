import SectionHeading from '../components/SectionHeading';
import TimelineCard from '../components/TimelineCard';
import { motion } from 'framer-motion';

export default function ExperienceSection() {
  return (
    <section className="border-t border-slate-800/60 py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Experience & Education"
          subtitle="Recruiter-friendly timeline with high-impact roles and academic milestones."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="space-y-6"
          >
            <TimelineCard
              title="Virya Industries Pvt Ltd"
              subtitle="Administrative Management Project Trainee"
              duration="2024"
              description="Managed project coordination, workflow optimization, and administrative documentation for new production lines. Delivered clear process updates and supported interdisciplinary teams."
            />
            <TimelineCard
              title="Android Automation India Pvt Ltd"
              subtitle="Industrial Training"
              duration="2023"
              description="Completed industry exposure on automation systems, manufacturing equipment, and CAD-driven mechanical linkages. Developed insights into production-quality component design."
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="space-y-6"
          >
            <TimelineCard
              title="B.E Mechanical Engineering"
              subtitle="Er. Perumal Manimekalai College of Engineering"
              duration="2023 - 2027"
              description="Focused on core mechanical engineering topics with coursework in CAD, design analysis, manufacturing processes, and product lifecycle management."
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
