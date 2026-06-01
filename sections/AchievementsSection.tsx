import AchievementCard from '../components/AchievementCard';
import SectionHeading from '../components/SectionHeading';
import { motion } from 'framer-motion';

const achievements = [
  {
    title: 'Best Research Paper Award',
    description:
      'Recognized for research excellence and engineering innovation in mechanical systems.',
  },
  {
    title: 'Innovation Ambassador Certification',
    description: 'Awarded by AICTE for driving creativity, mentorship, and technology outreach.',
  },
  {
    title: 'TN Impact Hackathon Mentor',
    description:
      'Supported high-performing teams through rapid prototyping, presentation coaching, and technical strategy.',
  },
  {
    title: 'Hackathon Team Leader',
    description:
      'Led cross-functional teams to deliver competitive engineering solutions under tight deadlines.',
  },
  {
    title: 'Drone Technology Workshop',
    description:
      'Delivered technical instruction on UAV design, stability, and manufacturing best practices.',
  },
  {
    title: 'Leadership Recognition',
    description:
      'Earned institutional commendation for initiative, collaboration, and team outcomes.',
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
