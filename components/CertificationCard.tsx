import Image from 'next/image';

interface CertificationCardProps {
  title: string;
  issuer: string;
  highlight: string;
  logo: string;
}

export default function CertificationCard({
  title,
  issuer,
  highlight,
  logo,
}: CertificationCardProps) {
  return (
    <div className="glass-card rounded-3xl border p-6 transition hover:-translate-y-1 hover:border-electric/30">
      <div className="flex min-h-14 items-start justify-between gap-3">
        <p className="text-sm uppercase tracking-[0.24em] text-electric">Certificate</p>
        <Image
          src={logo}
          alt={`${issuer} logo`}
          width={88}
          height={52}
          className="h-12 w-20 shrink-0 rounded bg-white object-contain p-1"
        />
      </div>
      <h3 className="mt-3 text-xl font-semibold text-slate-100">{title}</h3>
      <p className="mt-3 text-slate-400">{issuer}</p>
      <p className="mt-4 text-slate-500">{highlight}</p>
    </div>
  );
}
