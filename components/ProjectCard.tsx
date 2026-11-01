import type { LucideIcon } from 'lucide-react';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  meta: string;
  description: string;
  technologies: string[];
  icon: LucideIcon;
  logo?: string;
}

export default function ProjectCard({
  title,
  meta,
  description,
  technologies,
  icon: Icon,
  logo,
}: ProjectCardProps) {
  return (
    <article className="glass-card group h-full overflow-hidden rounded-2xl border p-6 transition hover:-translate-y-1 hover:border-electric/30">
      <div className="mb-6 flex h-36 items-center justify-between rounded-xl border border-slate-700/70 bg-slate-900/70 px-6">
        <span className="text-xs uppercase tracking-[0.24em] text-slate-400">
          Engineering project
        </span>
        <div className="flex items-center gap-3">
          {logo && (
            <Image
              src={logo}
              alt={`${title} logo`}
              width={52}
              height={52}
              className="h-12 w-12 rounded-lg bg-white object-contain p-1"
            />
          )}
          <Icon
            aria-hidden="true"
            className="h-12 w-12 text-electric transition group-hover:scale-110"
            strokeWidth={1.3}
          />
        </div>
      </div>
      <div className="space-y-4">
        <div>
          <p className="text-sm uppercase tracking-[0.16em] text-electric">{meta}</p>
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
      </div>
    </article>
  );
}
