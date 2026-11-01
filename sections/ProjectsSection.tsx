import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';
import { BatteryCharging, Bot, Cog, Factory, FlaskConical } from 'lucide-react';

const projects = [
  {
    title: 'Hydrogen Production System',
    meta: 'SIH 2025',
    description:
      'Explored water electrolysis, renewable energy integration, process automation, and hydrogen storage concepts.',
    technologies: ['Water Electrolysis', 'Renewable Energy', 'Process Automation'],
    icon: FlaskConical,
    logo: '/logos/sih.png',
  },
  {
    title: 'Self-Charging Electric Vehicle Concept',
    meta: 'Electric Mobility',
    description:
      'Studied auxiliary energy recovery, battery monitoring, energy management, and regenerative braking.',
    technologies: ['Electric Vehicle', 'Energy Recovery', 'Battery Monitoring'],
    icon: BatteryCharging,
  },
  {
    title: 'AI Application Concepts',
    meta: 'Workflow Automation & Computer Vision',
    description:
      'Designed concepts for an agentic business assistant and CCTV-based smart attendance system using workflow automation and computer vision.',
    technologies: ['AI Workflow Automation', 'Computer Vision'],
    icon: Bot,
  },
  {
    title: 'CAD-Based Mechanical Design & Simulation',
    meta: 'Mechanical Design',
    description:
      'Created component models and engineering drawings using CATIA V5, SolidWorks, and AutoCAD; focused on assembly fitment and manufacturability.',
    technologies: ['CATIA V5', 'SolidWorks', 'AutoCAD', 'Simulation'],
    icon: Cog,
  },
  {
    title: 'Automated Multi-Process Welding Robot',
    meta: 'Robotics & Automation',
    description:
      'Designed a system concept with interchangeable end-effectors; explored arm design, workspace planning, tool changing, and motion automation.',
    technologies: ['Robotic Welding', 'End-Effectors', 'Motion Automation'],
    icon: Factory,
  },
];

export default function ProjectsSection() {
  return (
    <section className="border-t border-slate-800/60 py-20" id="projects">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Projects"
          subtitle="Selected academic work in robotic welding, electric mobility, hydrogen, CAD, and AI applications."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
