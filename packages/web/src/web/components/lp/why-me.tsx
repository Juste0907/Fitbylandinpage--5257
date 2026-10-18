import { ClipboardCheck, Heart, Target, UserRound } from "lucide-react";
import { SectionLabel } from "./section-label";

const PILLARS = [
  {
    icon: Target,
    title: "Objectifs clairs",
    body: "Perte de poids, gain de muscle, remise en forme, énergie… On définit ensemble ce qui compte pour vous.",
  },
  {
    icon: UserRound,
    title: "Suivi personnalisé",
    body: "Un programme adapté à votre niveau, à votre mode de vie et à vos contraintes.",
  },
  {
    icon: ClipboardCheck,
    title: "Méthode holistique",
    body: "Fitness, nutrition, récupération, équilibre mental. Tout est lié.",
  },
  {
    icon: Heart,
    title: "Résultats durables",
    body: "Pas de solution temporaire. Vous apprenez à prendre soin de vous sur le long terme.",
  },
];

export function WhyMe() {
  return (
    <section className="bg-cream py-14 lg:py-[54px]">
      <div className="shell grid gap-12 lg:grid-cols-[minmax(0,400px)_1fr] lg:gap-x-[70px]">
        <div className="reveal">
          <SectionLabel>Pourquoi me choisir ?</SectionLabel>
          <h2 className="display mt-[12px] text-[28px] leading-[1.07] text-ink lg:text-[39px]">
            Un accompagnement complet et <span className="text-olive-icon">sur mesure</span>
          </h2>
          <p className="mt-[14px] max-w-[345px] text-[13.5px] leading-[1.6] text-body/90 lg:text-[14px]">
            Je ne vous propose pas des solutions toutes faites. Je vous accompagne étape par étape,
            avec un suivi personnalisé, des conseils concrets et une vraie écoute de vos besoins.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 lg:gap-x-[26px]">
          {PILLARS.map(({ icon: Icon, title, body }) => (
            <div key={title} className="reveal">
              <Icon className="size-[25px] text-olive-icon" strokeWidth={1.5} />
              <h3 className="mt-[16px] text-[14px] leading-tight font-bold text-ink">{title}</h3>
              <p className="mt-[10px] text-[12.5px] leading-[1.6] text-muted">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
