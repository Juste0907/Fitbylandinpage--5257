import { Apple, DumbbellHex, Lotus, TrendUp } from "./icons";
import { LeadForm } from "./lead-form";

const BENEFITS = [
  { icon: DumbbellHex, label: "Coaching personnalisé" },
  { icon: Apple, label: "Nutrition équilibrée" },
  { icon: Lotus, label: "Bien-être mental" },
  { icon: TrendUp, label: "Résultats durables" },
];

export function Hero() {
  return (
    <section id="accueil" className="relative isolate overflow-hidden bg-night">
      <img
        src="/images/hero.jpg"
        alt=""
        aria-hidden
        className="absolute inset-0 -z-10 size-full object-cover"
        style={{ objectPosition: "54% 34%" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(90deg, rgba(4,7,8,0.82) 0%, rgba(4,7,8,0.80) 18%, rgba(4,7,8,0.72) 33%, rgba(4,7,8,0.42) 45%, rgba(4,7,8,0.12) 54%, rgba(4,7,8,0) 62%, rgba(4,7,8,0) 88%, rgba(4,7,8,0.08) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-32"
        style={{ background: "linear-gradient(180deg, rgba(4,7,8,0.5) 0%, transparent 100%)" }}
      />

      <div className="shell flex flex-col gap-12 pt-28 pb-14 lg:min-h-[665px] lg:flex-row lg:items-start lg:gap-10 lg:pt-[143px] lg:pb-[36px]">
        <div className="reveal max-w-[520px] lg:pt-[4px]">
          <span className="eyebrow inline-flex items-center rounded-full bg-white/10 px-[15px] py-[5px] text-cream ring-1 ring-white/15 backdrop-blur-sm">
            Coaching fitness &amp; bien-être
          </span>

          <h1 className="display mt-[8px] text-[34px] leading-[1.05] text-cream sm:text-[40px] lg:text-[48px] lg:leading-[51px]">
            Un corps plus fort,
            <br />
            un esprit plus serein,
            <br />
            <span className="text-sage">
              une meilleure version
              <br />
              de vous.
            </span>
          </h1>

          <p className="mt-[26px] max-w-[455px] text-[14.5px] leading-[1.6] text-cream/70 lg:text-[15.5px] lg:leading-[25px]">
            Un accompagnement personnalisé pour atteindre vos objectifs de forme, de santé et de
            bien-être, sans méthode miracle, mais avec une vraie stratégie, adaptée à votre rythme de
            vie.
          </p>

          <ul className="mt-[32px] flex max-w-[490px] lg:-ml-[37px] lg:mt-[39px] lg:w-[564px] lg:max-w-none">
            {BENEFITS.map(({ icon: Icon, label }, i) => (
              <li
                key={label}
                className={
                  "flex flex-1 flex-col items-center gap-[12px] px-1 text-center " +
                  (i > 0 ? "border-l border-white/15" : "")
                }
              >
                <Icon className="size-[30px] text-sage-mist lg:size-[38px]" strokeWidth={1.2} />
                <span className="max-w-[94px] text-[12px] leading-[1.35] font-semibold text-cream lg:text-[15.5px] lg:leading-[22px]">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal w-full max-w-[420px] lg:ml-auto lg:w-[387px] lg:shrink-0">
          <LeadForm />
        </div>
      </div>
    </section>
  );
}
