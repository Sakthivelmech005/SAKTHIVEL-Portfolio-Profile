interface CertificationCardProps {
  title: string;
  issuer: string;
  highlight: string;
}

export default function CertificationCard({ title, issuer, highlight }: CertificationCardProps) {
  return (
    <div className="glass-card rounded-3xl border p-6 transition hover:-translate-y-1 hover:border-electric/30">
      <p className="text-sm uppercase tracking-[0.24em] text-electric">Certificate</p>
      <h3 className="mt-3 text-xl font-semibold text-slate-100">{title}</h3>
      <p className="mt-3 text-slate-400">{issuer}</p>
      <p className="mt-4 text-slate-500">{highlight}</p>
    </div>
  );
}
