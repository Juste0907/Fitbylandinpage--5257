import { Facebook, Instagram, Youtube } from "lucide-react";
import { Logo } from "./logo";

const LEGAL = [
  { label: "Mentions légales", href: "#" },
  { label: "Politique de confidentialité", href: "#" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

export function SiteFooter() {
  return (
    <footer className="bg-night">
      <div className="shell flex flex-col items-center gap-8 py-8 lg:h-[119px] lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:py-0">
        <Logo width={65} stacked />

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {LEGAL.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-[12px] text-cream/70 transition-colors duration-200 hover:text-cream"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {SOCIAL.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="grid size-7 place-items-center rounded-full text-cream/80 ring-1 ring-white/20 transition-colors duration-200 hover:text-cream hover:ring-white/45"
              >
                <Icon className="size-3.5" strokeWidth={1.6} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
