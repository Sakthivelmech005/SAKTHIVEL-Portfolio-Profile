import AboutSection from '../sections/AboutSection';
import AchievementsSection from '../sections/AchievementsSection';
import CertificationsSection from '../sections/CertificationsSection';
import ContactSection from '../sections/ContactSection';
import ExperienceSection from '../sections/ExperienceSection';
import HeroSection from '../sections/HeroSection';
import ProjectsSection from '../sections/ProjectsSection';
import SkillsSection from '../sections/SkillsSection';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <>
      <SEO
        title="Sakthivel S | Mechanical Engineer & CAD Designer"
        description="Premium portfolio of Sakthivel S: Mechanical engineering, CAD design, innovation leadership, and engineering research contributions."
      />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <AchievementsSection />
      <CertificationsSection />
      <ContactSection />
    </>
  );
}
