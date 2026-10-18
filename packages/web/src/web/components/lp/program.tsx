import { Apple, ArrowRight, Dumbbell, Flower2 } from "lucide-react";
import { SectionLabel } from "./section-label";

const CARDS = [
  {
    icon: Dumbbell,
    title: "Séances d'entraînement",
    body: "En présentiel ou à distance, adaptées à votre niveau et à vos objectifs.",
  },
  {
    icon: Apple,
    title: "Conseils nutritionnels",
    body: "Des habitudes simples et durables pour une meilleure énergie.",
  },
  {
    icon: Flower2,
    title: "Suivi bien-être",
    body: "Gestion du stress, sommeil, équilibre mental. Un corps en forme, un esprit plus serein.",
  },
];

export function Program() {
  return (
    <section
      id="programme"
      className="relative isolate overflow-hidden bg-night-soft py-14 lg:pt-[65px] lg:pb-[47px]"
    >
      <img
        src="/images/product.jpg"
        alt=""
        aria-hidden
        className="absolute inset-y-0 right-0 -z-10 hidden h-full w-[38%] object-cover lg:block"
        style={{
          objectPosition: "68% 52%",
          maskImage: "linear-gradient(90deg, transparent 0%, #000 30%, #000 100%)",
          WebkitMaskImage: "linear-gradient(90deg, transparent 0%, #000 30%, #000 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 lg:bg-[linear-gradient(90deg,#070C0D_0%,#070C0D_60%,rgba(7,12,13,0.9)_72%,rgba(7,12,13,0.4)_100%)]"
      />

      <div className="shell grid items-start gap-12 lg:grid-cols-[minmax(0,430px)_minmax(0,560px)] lg:gap-x-[34px]">
        <div className="reveal">
          <SectionLabel tone="dark">Mon accompagnement</SectionLabel>
          <h2 className="display mt-[14px] text-[27px] leading-[1.15] text-cream lg:text-[35px] ">
            Un accompagnement conçu<br className="hidden lg:block" /> pour votre <span className="text-sage">réussite</span>
          </h2>
          <p className="mt-[14px] max-w-[514px] text-[13.5px] leading-[1.62] text-cream/65 lg:text-[14px]">
            Un suivi complet, simple et efficace pour vous aider à atteindre vos objectifs, pas à
            pas.
          </p>
          <a
            href="#contact"
            className="group mt-[14px] inline-flex h-11 items-center gap-2 rounded-full bg-sage-soft px-[26px] text-[13.5px] font-semibold text-night transition-colors duration-200 hover:bg-sage"
          >
            Découvrir le programme
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-[28px] lg:pt-[15px]">
          {CARDS.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="reveal flex flex-col items-center rounded-xl border border-night-border bg-night-card/80 px-[22px] py-[28px] text-center backdrop-blur-[2px]"
            >
              <Icon className="size-[24px] text-sage" strokeWidth={1.4} />
              <h3 className="mt-[15px] text-[14px] leading-tight font-bold text-cream">{title}</h3>
              <p className="mt-[11px] text-[12px] leading-[1.6] text-cream/60">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
