interface SkillBarProps {
  label: string;
  score: number;
}

export default function SkillBar({ label, score }: SkillBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm font-medium text-slate-200">
        <span>{label}</span>
        <span>{score}%</span>
      </div>
      <div className="h-2 rounded-full bg-slate-800">
        <div
          className="h-full rounded-full bg-electric transition-all"
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
}
