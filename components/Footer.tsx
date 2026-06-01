import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-slate-700/40 bg-slate-950/80 py-8 text-slate-400">
      <div className="container mx-auto px-4 text-sm md:flex md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Sakthivel S. Premium engineering portfolio.</p>
        <div className="mt-3 flex flex-col gap-2 md:mt-0 md:flex-row md:items-center">
          <Link href="mailto:mechmen005@gmail.com" className="transition hover:text-electric">
            mechmen005@gmail.com
          </Link>
          <span className="text-slate-600">·</span>
          <Link href="tel:9080039122" className="transition hover:text-electric">
            +91 90800 39122
          </Link>
        </div>
      </div>
    </footer>
  );
}
