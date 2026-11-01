import AchievementCard from '../components/AchievementCard';
import SectionHeading from '../components/SectionHeading';
import { motion } from 'framer-motion';

const achievements = [
  {
    title: 'EDP Student Innovation Ambassador',
    description:
      'Supported entrepreneurship activities, student pitching, and an eight-hour startup challenge.',
  },
  {
    title: 'Innovation Student Coordinator',
    description: 'Supported innovation and intellectual property awareness.',
  },
];

export default function AchievementsSection() {
  return (
    <section className="border-t border-slate-800/60 py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Achievements"
          subtitle="Career highlights that demonstrate leadership, research, and innovation."
        />
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
            >
              <AchievementCard {...achievement} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
