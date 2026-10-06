import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { brand, nav } from "@/data/site";

const socials = [
  { label: "Instagram", href: brand.instagram },
  { label: "Facebook", href: brand.facebook },
  { label: "WhatsApp", href: brand.whatsapp },
];

export default function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-ink px-5 pb-10 pt-20 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-display text-4xl tracking-[0.25em]">SHESHA</p>
          <p className="mt-1 text-[11px] uppercase tracking-[0.5em] text-amber">Cafe</p>
          <p className="mt-6 text-muted">{brand.location}</p>
          <p className="mt-1 text-sm text-muted/70">Opening hours coming soon</p>
        </div>

        <nav className="md:col-span-3" aria-label="Footer">
          <p className="mb-5 text-[11px] uppercase tracking-[0.35em] text-amber">Explore</p>
          <ul className="space-y-3">
            {nav.map((n) => (
              <li key={n.label}>
                <Link href={n.href} className="text-cream/80 transition-colors hover:text-amber">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <p className="mb-5 text-[11px] uppercase tracking-[0.35em] text-amber">Follow</p>
          <ul className="space-y-3">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-cream/80 transition-colors hover:text-amber"
                >
                  {s.label}
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-7xl flex-col justify-between gap-3 border-t border-cream/10 pt-6 text-xs text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} SHESHA CAFE. Website demo.</p>
        <p>{brand.support}</p>
      </div>
    </footer>
  );
}
