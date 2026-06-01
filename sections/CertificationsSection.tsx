import CertificationCard from '../components/CertificationCard';
import SectionHeading from '../components/SectionHeading';
import { motion } from 'framer-motion';

const certifications = [
  {
    title: 'CATIA (TANCAM)',
    issuer: 'TAMIL NADU CERTIFICATION AUTHORITY FOR MECHANICAL',
    highlight: 'Advanced CAD modeling and assembly certification.',
  },
  {
    title: 'Innovation Ambassador',
    issuer: 'AICTE',
    highlight: 'Accredited innovation leadership and product development mentorship.',
  },
];

export default function CertificationsSection() {
  return (
    <section className="border-t border-slate-800/60 py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Certifications"
          subtitle="Verified credentials that validate expertise in CAD and innovation."
        />
        <div className="grid gap-8 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
            >
              <CertificationCard {...cert} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
