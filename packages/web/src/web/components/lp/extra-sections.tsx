import { ClipboardList, Dumbbell, Target, Trophy } from "lucide-react";
import { SectionLabel } from "./section-label";

const STEPS = [
  {
    icon: ClipboardList,
    title: "Bilan initial",
    body: "Un échange pour faire le point sur vos habitudes, votre historique et vos objectifs.",
  },
  {
    icon: Target,
    title: "Plan personnalisé",
    body: "Un programme sport et nutrition construit autour de votre emploi du temps.",
  },
  {
    icon: Dumbbell,
    title: "Accompagnement suivi",
    body: "Des séances régulières, des ajustements et un contact direct entre chaque rendez-vous.",
  },
  {
    icon: Trophy,
    title: "Objectifs atteints",
    body: "Bilan à intervalles réguliers pour mesurer vos progrès et définir la suite.",
  },
];

export function Method() {
  return (
    <section id="methode" className="bg-cream py-14 lg:py-[60px]">
      <div className="shell">
        <div className="reveal max-w-[520px]">
          <SectionLabel>Ma méthode</SectionLabel>
          <h2 className="display mt-[11px] text-[27px] leading-[1.15] text-ink lg:text-[32.5px] lg:leading-[35.2px]">
            Quatre étapes simples pour avancer sereinement
          </h2>
        </div>
        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-[44px] lg:grid-cols-4 lg:gap-x-[24px]">
          {STEPS.map(({ icon: Icon, title, body }, i) => (
            <li
              key={title}
              className="reveal rounded-xl bg-white/50 p-[24px] ring-1 ring-ink/[0.04]"
            >
              <div className="flex items-center justify-between">
                <span className="grid size-10 place-items-center rounded-full bg-sage-mist text-sage-deep">
                  <Icon className="size-[18px]" strokeWidth={1.6} />
                </span>
                <span className="text-[13px] font-semibold text-olive-icon/70">0{i + 1}</span>
              </div>
              <h3 className="mt-5 text-[16px] font-bold text-ink">{title}</h3>
              <p className="mt-2 text-[13.5px] leading-[1.6] text-ink/65">{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const STATS = [
  { value: "8+", label: "ans d'expérience" },
  { value: "350", label: "clients accompagnés" },
  { value: "92%", label: "de clients satisfaits" },
  { value: "4,9/5", label: "note moyenne" },
];

export function Stats() {
  return (
    <section className="bg-night-soft py-14 lg:py-[56px]">
      <div className="shell grid grid-cols-2 gap-y-10 lg:grid-cols-4 lg:gap-x-[24px]">
        {STATS.map((s) => (
          <div key={s.label} className="reveal text-center lg:text-left">
            <p className="display text-[40px] leading-none font-bold text-sage lg:text-[52px]">
              {s.value}
            </p>
            <p className="mt-3 text-[13.5px] text-cream/65">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const FAQ = [
  {
    q: "Ai-je besoin d'un niveau sportif particulier ?",
    a: "Non. Les programmes sont adaptés à tous les niveaux, du débutant au sportif confirmé.",
  },
  {
    q: "Les séances se font-elles en présentiel ou à distance ?",
    a: "Les deux. Vous choisissez selon vos disponibilités et vos préférences.",
  },
  {
    q: "Combien de temps dure un accompagnement ?",
    a: "La durée est définie avec vous lors du bilan initial, en général entre 3 et 6 mois.",
  },
  {
    q: "Le premier rendez-vous est-il payant ?",
    a: "Le bilan initial est offert, sans engagement de votre part.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-cream pb-14 lg:pb-[60px]">
      <div className="shell grid gap-10 lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)] lg:gap-x-[80px]">
        <div className="reveal">
          <SectionLabel>Questions fréquentes</SectionLabel>
          <h2 className="display mt-[11px] text-[27px] leading-[1.15] text-ink lg:text-[32.5px] lg:leading-[35.2px]">
            Vos questions, mes réponses
          </h2>
        </div>
        <div className="divide-y divide-ink/10 border-y border-ink/10">
          {FAQ.map((item) => (
            <details key={item.q} className="group reveal py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[15px] font-semibold text-ink">
                {item.q}
                <span className="text-sage-deep text-xl leading-none transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-[620px] text-[14px] leading-[1.65] text-ink/65">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
