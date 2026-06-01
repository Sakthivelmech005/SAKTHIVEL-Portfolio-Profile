interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="mb-3 text-sm uppercase tracking-[0.24em] text-electric">Section</p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-3 text-slate-400 sm:text-lg">{subtitle}</p> : null}
    </div>
  );
}
