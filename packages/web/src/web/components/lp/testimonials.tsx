import { ArrowRight, Star } from "lucide-react";
import { SectionLabel } from "./section-label";

const REVIEWS = [
  {
    avatar: "/images/avatar-sophie.png",
    quote:
      "Grâce à ce coaching, j'ai enfin retrouvé de l'énergie et je me sens beaucoup mieux dans mon corps. Les conseils sont clairs, le suivi est top !",
    name: "Sophie L.",
    result: "Perte de poids · 3 mois",
  },
  {
    avatar: "/images/avatar-thomas.png",
    quote:
      "Un accompagnement sérieux et motivant. J'ai gagné en force et en confiance. Je recommande à 100 % !",
    name: "Thomas R.",
    result: "Gain de muscle · 4 mois",
  },
  {
    avatar: "/images/avatar-camille.png",
    quote:
      "Au-delà des résultats physiques, j'ai surtout appris à mieux gérer mon stress et à prendre soin de moi. Une vraie transformation !",
    name: "Camille D.",
    result: "Bien-être global · 6 mois",
  },
];

export function Testimonials() {
  return (
    <section id="avis" className="bg-cream py-14 lg:pt-[38px] lg:pb-[46px]">
      <div className="shell">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel>Ils l&apos;ont fait</SectionLabel>
            <h2 className="display mt-[11px] lg:mt-[8px] max-w-[340px] text-[27px] leading-[1.15] text-ink lg:text-[32.5px] lg:leading-[35.2px]">
              Des résultats concrets, des parcours inspirants
            </h2>
          </div>
          <a
            href="#avis"
            className="group mb-1 inline-flex items-center gap-2 border-b border-ink/25 pb-1 text-[12.5px] font-medium text-ink/80 transition-colors duration-200 hover:border-ink hover:text-ink"
          >
            Voir plus d&apos;avis
            <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="mt-[40px] lg:mt-[48px] grid gap-5 lg:grid-cols-3 lg:gap-x-[34px]">
          {REVIEWS.map((r) => (
            <article
              key={r.name}
              className="reveal rounded-xl bg-white/40 px-[22px] pt-[25px] pb-[26px] ring-1 ring-ink/[0.03]"
            >
              <div className="flex items-start gap-[26px]">
                <img
                  src={r.avatar}
                  alt={r.name}
                  width={58}
                  height={58}
                  className="size-[58px] shrink-0 rounded-full object-cover"
                />
                <p className="mt-[2px] max-w-[264px] text-[14px] leading-[22.5px] text-body">
                  &ldquo;{r.quote}&rdquo;
                </p>
              </div>
              <div className="mt-[15px] pl-[85px]">
                <p className="text-[14px] leading-[19.6px] font-semibold text-ink">{r.name}</p>
                <p className="mt-[2px] text-[12.5px] leading-[1.5] text-muted">{r.result}</p>
                <div className="mt-[3px] flex gap-[1.5px]" aria-label="5 étoiles sur 5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-[17px] fill-sage-deep text-sage-deep"
                      strokeWidth={0}
                    />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
