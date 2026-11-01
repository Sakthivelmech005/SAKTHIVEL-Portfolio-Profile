import SectionHeading from '../components/SectionHeading';
import TimelineCard from '../components/TimelineCard';
import { motion } from 'framer-motion';

export default function ExperienceSection() {
  return (
    <section className="border-t border-slate-800/60 py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Industrial Training"
          subtitle="Industrial exposure in operations and automation."
        />
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="space-y-6"
          >
            <TimelineCard
              title="Virya Industries Pvt. Ltd."
              subtitle="Hosur"
              duration="Dec 2025 – Jan 2026"
              description="Exposure to industrial operations, production planning, workflow coordination, documentation, and process improvement."
            />
            <TimelineCard
              title="Adroid Automation India Pvt. Ltd."
              subtitle="Hosur"
              duration="Mar 2024"
              description="Exposure to industrial automation, equipment operation, manufacturing workflows, and technical reporting."
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
