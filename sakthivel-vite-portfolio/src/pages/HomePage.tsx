import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import SkillsSection from '../components/SkillsSection'
import EducationSection from '../components/EducationSection'
import ProjectsSection from '../components/ProjectsSection'
import CertificationsSection from '../components/CertificationsSection'
import ContactSection from '../components/ContactSection'

export default function HomePage() {
  return (
    <div className="space-y-10">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
    </div>
  )
}
