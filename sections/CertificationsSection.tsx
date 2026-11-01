import CertificationCard from '../components/CertificationCard';
import SectionHeading from '../components/SectionHeading';
import { motion } from 'framer-motion';

const certifications = [
  {
    title: 'CATIA V5 & 3DEXPERIENCE Certifications',
    issuer: 'Dassault Systèmes / TANCAM',
    highlight: 'CAD and product design certifications.',
    logo: '/logos/dassault-systemes.png',
  },
  {
    title: 'AICTE Innovation Student Ambassador',
    issuer: 'AICTE',
    highlight: 'All India Council for Technical Education.',
    logo: '/logos/aicte.jpg',
  },
  {
    title: 'Best Research Paper Award',
    issuer: 'Annamalai University',
    highlight: 'Research recognition.',
    logo: '/logos/annamalai-university.png',
  },
];

export default function CertificationsSection() {
  return (
    <section className="border-t border-slate-800/60 py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Certifications"
          subtitle="Credentials and recognition listed in the attached resume."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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
