interface AchievementCardProps {
  title: string;
  description: string;
}

export default function AchievementCard({ title, description }: AchievementCardProps) {
  return (
    <div className="glass-card rounded-3xl border p-6 transition hover:-translate-y-1 hover:border-electric/30">
      <p className="text-sm uppercase tracking-[0.24em] text-electric">Achievement</p>
      <h3 className="mt-3 text-xl font-semibold text-slate-100">{title}</h3>
      <p className="mt-3 text-slate-400">{description}</p>
    </div>
  );
}
