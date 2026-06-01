interface TimelineCardProps {
  title: string;
  subtitle: string;
  duration: string;
  description: string;
}

export default function TimelineCard({
  title,
  subtitle,
  duration,
  description,
}: TimelineCardProps) {
  return (
    <div className="glass-card rounded-3xl border p-6 shadow-lg shadow-slate-950/20">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-slate-100">{title}</h3>
          <p className="mt-1 text-sm text-slate-400">{subtitle}</p>
        </div>
        <span className="rounded-full bg-slate-800 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-300">
          {duration}
        </span>
      </div>
      <p className="mt-4 leading-7 text-slate-300">{description}</p>
    </div>
  );
}
