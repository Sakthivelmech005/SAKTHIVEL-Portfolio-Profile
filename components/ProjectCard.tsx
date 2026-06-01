import Link from 'next/link';
import { ArrowUpRight, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  detailsUrl: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  image,
  githubUrl,
  detailsUrl,
}: ProjectCardProps) {
  return (
    <div className="glass-card group overflow-hidden rounded-[2rem] border p-6 transition hover:-translate-y-1 hover:border-electric/30">
      <div className="mb-5 overflow-hidden rounded-3xl bg-slate-900/80">
        <img
          src={image}
          alt={title}
          className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="space-y-4">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-electric">Project</p>
          <h3 className="mt-3 text-2xl font-semibold text-slate-100">{title}</h3>
        </div>
        <p className="text-slate-400">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-slate-800 px-3 py-1 text-xs uppercase tracking-[0.16em] text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href={detailsUrl}
            className="inline-flex items-center gap-2 rounded-full border border-electric/40 px-4 py-2 text-sm text-electric transition hover:bg-electric/10"
          >
            Details <ArrowUpRight size={16} />
          </Link>
          <Link
            href={githubUrl}
            className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 px-4 py-2 text-sm text-slate-200 transition hover:border-electric hover:text-electric"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={16} /> GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}
