import { ArrowRight } from "lucide-react";
import { DumbbellHex, HeartLine, Lotus, MountainPeak } from "./icons";

const STATS = [
  { icon: DumbbellHex, label: "Plus d'énergie" },
  { icon: Lotus, label: "Meilleure santé" },
  { icon: HeartLine, label: "Confiance en soi" },
  { icon: MountainPeak, label: "Résultats durables" },
];

export function FinalCta() {
  return (
    <section id="contact" className="relative isolate overflow-hidden bg-night">
      <img
        src="/images/cta-final.jpg"
        alt=""
        aria-hidden
        className="absolute inset-0 -z-10 size-full object-cover"
        style={{ objectPosition: "50% 72%" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(90deg, rgba(4,7,8,0.76) 0%, rgba(4,7,8,0.72) 15%, rgba(4,7,8,0.68) 33%, rgba(4,7,8,0.52) 50%, rgba(4,7,8,0.45) 68%, rgba(4,7,8,0.5) 84%, rgba(4,7,8,0.6) 100%)",
        }}
      />

      <div className="shell flex flex-col gap-10 py-14 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:pt-[43px] lg:pb-[37px]">
        <div className="reveal max-w-[480px]">
          <p className="eyebrow text-sage">Votre nouveau départ commence ici</p>
          <h2 className="display mt-[7px] text-[30px] leading-[1.1] text-cream lg:text-[36px]">
            Prêt à prendre soin de vous&nbsp;?
          </h2>
          <p className="mt-[11px] text-[14.5px] leading-[1.55] text-cream/70 lg:text-[15.5px]">
            Rejoignez dès maintenant un accompagnement qui fait la différence.
          </p>
          <a
            href="#accueil"
            className="group mt-[26px] inline-flex h-[45px] items-center gap-2 rounded-full bg-sage-bright px-[25px] text-[13.5px] font-semibold text-night transition-colors duration-200 hover:bg-sage"
          >
            Réserver mon appel gratuit
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </div>

        <ul className="reveal flex max-w-[480px] lg:mt-[7px] lg:w-[461px] lg:shrink-0">
          {STATS.map(({ icon: Icon, label }, i) => (
            <li
              key={label}
              className={
                "flex flex-1 flex-col items-center gap-[17px] text-center " +
                (i > 0 ? "border-l border-white/15" : "")
              }
            >
              <Icon className="size-[36px] text-sage-mist" strokeWidth={1.2} />
              <span className="max-w-[92px] text-[12.5px] leading-[1.35] text-cream/80">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
