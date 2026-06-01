import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Mechanical Assembly Workflow',
    description:
      'Developed an optimized CAD assembly and documentation system for manufacturable mechanical modules, reducing design iteration time by 25%.',
    technologies: ['SolidWorks', 'BOM', 'GD&T'],
    image: '/project-assembly.svg',
    githubUrl: 'https://github.com/sakthivel/mechanical-assembly',
    detailsUrl: '/projects#project-1',
  },
  {
    title: 'Smart Product Prototype',
    description:
      'Designed a research-grade prototype featuring precision mounting, motion study, and electrical housing for a robotics workshop.',
    technologies: ['CATIA', 'ANSYS', 'Product Design'],
    image: '/project-prototype.svg',
    githubUrl: 'https://github.com/sakthivel/smart-prototype',
    detailsUrl: '/projects#project-2',
  },
  {
    title: 'CAD Design System',
    description:
      'Created a reusable CAD standards library and technical drawing templates to accelerate cross-team design reviews.',
    technologies: ['AutoCAD', 'CAD Modeling', 'Technical Drawing'],
    image: '/project-system.svg',
    githubUrl: 'https://github.com/sakthivel/cad-design-system',
    detailsUrl: '/projects#project-3',
  },
];

export default function ProjectsSection() {
  return (
    <section className="border-t border-slate-800/60 py-20" id="projects">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Projects"
          subtitle="Premium engineering projects with real impact and clear technical storytelling."
        />
        <div className="grid gap-8 lg:grid-cols-3">
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
