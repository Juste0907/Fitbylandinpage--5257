import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { cn } from "../../lib/utils";

const NAV = [
  { label: "Accueil", href: "#accueil" },
  { label: "Programme", href: "#programme" },
  { label: "Avis", href: "#avis" },
  { label: "FAQ", href: "#faq" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "bg-night/85 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="shell flex h-[74px] items-center justify-between lg:h-[90px]">
        <a href="#accueil" aria-label="FITBY — accueil">
          <Logo width={88} />
        </a>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 lg:flex">
          {NAV.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                "relative py-2 text-[15px] transition-colors duration-200",
                i === 0 ? "text-cream" : "text-cream/75 hover:text-cream",
              )}
            >
              {item.label}
              {i === 0 && (
                <span className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-sage" />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden h-11 items-center rounded-full bg-olive px-6 text-[14px] font-semibold text-cream transition-colors duration-200 hover:bg-olive-dark sm:flex"
          >
            Rejoindre l&apos;accompagnement
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="grid size-10 place-items-center rounded-full text-cream ring-1 ring-white/15 lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="shell bg-night/95 backdrop-blur-md lg:hidden">
          <nav className="flex flex-col border-t border-white/10 py-3">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[15px] text-cream/85"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 flex h-11 items-center justify-center rounded-full bg-olive text-[14px] font-semibold text-cream"
            >
              Rejoindre l&apos;accompagnement
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
