import { ArrowRight, Check, Clock, Mail } from "lucide-react";
import { useState } from "react";
import { SectionLabel } from "./section-label";

/* ---------- À propos du coach ---------- */
const CREDENTIALS = [
  "Coach sportive diplômée d'État (BPJEPS)",
  "Certifiée en nutrition du sport",
  "8 ans d'accompagnement en cabinet et à distance",
  "Spécialisée remise en forme et bien-être",
];

export function About() {
  return (
    <section id="coach" className="bg-cream py-14 lg:py-[72px]">
      <div className="shell grid items-center gap-12 lg:grid-cols-[minmax(0,460px)_minmax(0,1fr)] lg:gap-x-[90px]">
        <div className="reveal relative">
          <img
            src="/images/coach.jpg"
            alt="Claire Martin, coach sportive FITBY"
            loading="lazy"
            className="aspect-[3/4] w-full rounded-2xl object-cover"
          />
          <div className="absolute -bottom-5 -right-5 hidden rounded-xl bg-night px-5 py-4 text-cream shadow-xl sm:block">
            <p className="display text-[30px] leading-none font-bold text-sage">8 ans</p>
            <p className="mt-1 text-[12px] text-cream/70">d'expérience terrain</p>
          </div>
        </div>
        <div>
          <div className="reveal">
            <SectionLabel>Votre coach</SectionLabel>
            <h2 className="display mt-[11px] text-[27px] leading-[1.15] text-ink lg:text-[36px] lg:leading-[40px]">
              Claire Martin, une approche humaine et exigeante
            </h2>
            <p className="mt-5 max-w-[540px] text-[15px] leading-[1.7] text-ink/70">
              Je crois qu'un bon programme doit s'adapter à la vie réelle. Pas de régime
              impossible, pas de séances qui vous épuisent : des objectifs clairs, un rythme
              tenable et quelqu'un pour vous rappeler pourquoi vous avez commencé.
            </p>
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {CREDENTIALS.map((c) => (
              <li key={c} className="reveal flex items-start gap-3 text-[14px] text-ink/80">
                <span className="mt-[2px] grid size-5 shrink-0 place-items-center rounded-full bg-sage-mist text-sage-deep">
                  <Check className="size-3" strokeWidth={2.5} />
                </span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- Galerie ---------- */
const GALLERY = [
  { src: "/images/gallery-kettlebell.jpg", alt: "Séance de kettlebell à domicile", tag: "Force" },
  { src: "/images/gallery-run.jpg", alt: "Course matinale en forêt", tag: "Cardio" },
  { src: "/images/gallery-meal.jpg", alt: "Repas équilibrés préparés à l'avance", tag: "Nutrition" },
  { src: "/images/gallery-stretch.jpg", alt: "Étirements sur tapis", tag: "Mobilité" },
];

export function Gallery() {
  return (
    <section id="galerie" className="bg-night-soft py-14 lg:py-[68px]">
      <div className="shell">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel tone="dark">En images</SectionLabel>
            <h2 className="display mt-[11px] text-[27px] leading-[1.15] text-cream lg:text-[36px] lg:leading-[40px]">
              Un mode de vie, pas une contrainte
            </h2>
          </div>
          <p className="max-w-[360px] text-[14px] leading-[1.6] text-cream/60">
            Quelques instantanés de ce que mes clients vivent au quotidien.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {GALLERY.map((g) => (
            <figure
              key={g.src}
              className="reveal group relative aspect-[4/5] overflow-hidden rounded-xl"
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <span className="absolute top-3 left-3 rounded-full bg-night/70 px-3 py-1 text-[11px] font-semibold tracking-wide text-sage backdrop-blur-sm">
                {g.tag}
              </span>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Partenaires (défilement continu) ---------- */
const PARTNERS = ["NUTRIVITA", "FORMA+", "GREEN BOWL", "ZENITH STUDIO", "PULSE CLUB", "SOLÉA"];

export function Partners() {
  const row = [...PARTNERS, ...PARTNERS];
  return (
    <section aria-label="Partenaires" className="border-y border-ink/10 bg-cream py-7">
      <div className="marquee-mask overflow-hidden">
        <div className="marquee-track flex w-max items-center gap-16">
          {row.map((p, i) => (
            <span
              key={`${p}-${i}`}
              className="display text-[20px] font-bold tracking-[0.18em] whitespace-nowrap text-ink/35"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Tarifs ---------- */
const PLANS = [
  {
    name: "Essentiel",
    price: "49",
    desc: "Pour démarrer avec un cadre simple.",
    items: ["1 bilan initial", "2 séances par mois", "Plan alimentaire de base", "Suivi par e-mail"],
    featured: false,
  },
  {
    name: "Équilibre",
    price: "89",
    desc: "Le plus choisi : sport, nutrition et suivi.",
    items: [
      "1 bilan initial",
      "4 séances par mois",
      "Plan nutrition personnalisé",
      "Suivi bien-être hebdomadaire",
      "Messagerie directe",
    ],
    featured: true,
  },
  {
    name: "Transformation",
    price: "149",
    desc: "Un accompagnement complet et intensif.",
    items: [
      "Bilan complet et tests de forme",
      "8 séances par mois",
      "Nutrition et sommeil",
      "Points d'étape mensuels",
      "Accès à tous les contenus",
    ],
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="tarifs" className="bg-cream py-14 lg:py-[72px]">
      <div className="shell">
        <div className="reveal mx-auto max-w-[620px] text-center">
          <div className="flex justify-center">
            <SectionLabel>Tarifs</SectionLabel>
          </div>
          <h2 className="display mt-[11px] text-[27px] leading-[1.15] text-ink lg:text-[36px] lg:leading-[40px]">
            Une formule pour chaque objectif
          </h2>
          <p className="mt-4 text-[14px] leading-[1.6] text-ink/65">
            Sans engagement. Résiliable à tout moment. Premier bilan offert.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:gap-[28px]">
          {PLANS.map((p) => (
            <article
              key={p.name}
              className={`reveal relative flex flex-col rounded-2xl p-[30px] ${
                p.featured
                  ? "bg-night text-cream shadow-2xl lg:-translate-y-3"
                  : "bg-white/50 text-ink ring-1 ring-ink/[0.06]"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-sage px-4 py-1 text-[11px] font-bold tracking-wide text-night">
                  RECOMMANDÉ
                </span>
              )}
              <h3 className="text-[18px] font-bold">{p.name}</h3>
              <p className={`mt-1 text-[13.5px] ${p.featured ? "text-cream/65" : "text-ink/60"}`}>
                {p.desc}
              </p>
              <p className="mt-6 flex items-baseline gap-1">
                <span className="display text-[44px] leading-none font-bold">{p.price} €</span>
                <span className={`text-[13px] ${p.featured ? "text-cream/60" : "text-ink/55"}`}>
                  / mois
                </span>
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {p.items.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-[14px]">
                    <Check
                      className={`mt-[3px] size-4 shrink-0 ${p.featured ? "text-sage" : "text-sage-deep"}`}
                      strokeWidth={2.4}
                    />
                    {it}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 inline-flex h-11 items-center justify-center rounded-full text-[14px] font-semibold transition-colors duration-200 ${
                  p.featured
                    ? "bg-sage-soft text-night hover:bg-sage"
                    : "bg-ink text-cream hover:bg-olive-icon"
                }`}
              >
                Choisir {p.name}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Blog / conseils ---------- */
const ARTICLES = [
  {
    img: "/images/gallery-meal.jpg",
    tag: "Nutrition",
    title: "Préparer ses repas de la semaine en 2 heures",
    read: "5 min",
  },
  {
    img: "/images/gallery-run.jpg",
    tag: "Cardio",
    title: "Courir sans se blesser : les 4 erreurs à éviter",
    read: "7 min",
  },
  {
    img: "/images/gallery-stretch.jpg",
    tag: "Bien-être",
    title: "Dix minutes d'étirements pour mieux dormir",
    read: "4 min",
  },
];

export function Blog() {
  return (
    <section id="conseils" className="bg-cream pb-14 lg:pb-[72px]">
      <div className="shell">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel>Conseils</SectionLabel>
            <h2 className="display mt-[11px] text-[27px] leading-[1.15] text-ink lg:text-[36px] lg:leading-[40px]">
              Pour aller plus loin
            </h2>
          </div>
          <a
            href="#conseils"
            className="group inline-flex items-center gap-2 border-b border-ink/25 pb-1 text-[13px] font-medium text-ink/80 transition-colors hover:border-ink hover:text-ink"
          >
            Tous les articles
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
        <div className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-3 lg:gap-[28px]">
          {ARTICLES.map((a) => (
            <a key={a.title} href="#conseils" className="reveal group block">
              <div className="aspect-[16/10] overflow-hidden rounded-xl">
                <img
                  src={a.img}
                  alt=""
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-5 flex items-center gap-3 text-[12px] font-semibold tracking-wide text-olive-icon uppercase">
                <span>{a.tag}</span>
                <span className="text-ink/30">·</span>
                <span className="inline-flex items-center gap-1 text-ink/55 normal-case">
                  <Clock className="size-3" /> {a.read}
                </span>
              </div>
              <h3 className="mt-2 text-[18px] leading-snug font-bold text-ink transition-colors group-hover:text-sage-deep">
                {a.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Newsletter (client-side uniquement) ---------- */
export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
    setStatus(valid ? "ok" : "error");
    if (valid) setEmail("");
  }

  return (
    <section className="bg-night-soft py-14 lg:py-[60px]">
      <div className="shell reveal flex flex-col items-start justify-between gap-8 rounded-2xl bg-night-card/80 p-8 ring-1 ring-night-border lg:flex-row lg:items-center lg:p-[44px]">
        <div className="max-w-[460px]">
          <p className="flex items-center gap-2 text-sage">
            <Mail className="size-4" />
            <span className="eyebrow">Newsletter</span>
          </p>
          <h2 className="display mt-3 text-[26px] leading-[1.2] text-cream lg:text-[30px]">
            Un conseil simple chaque semaine
          </h2>
          <p className="mt-2 text-[14px] text-cream/60">
            Recettes, exercices et motivation. Désinscription en un clic.
          </p>
        </div>
        <form onSubmit={onSubmit} noValidate className="w-full max-w-[420px]">
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setStatus("idle");
              }}
              placeholder="votre@email.fr"
              aria-label="Adresse e-mail"
              className="h-12 flex-1 rounded-full bg-night px-5 text-[14px] text-cream ring-1 ring-night-border outline-none placeholder:text-cream/35 focus:ring-sage"
            />
            <button
              type="submit"
              className="h-12 rounded-full bg-sage-soft px-6 text-[14px] font-semibold text-night transition-colors hover:bg-sage"
            >
              S'inscrire
            </button>
          </div>
          <p className="mt-3 min-h-[20px] text-[13px]" role="status">
            {status === "ok" && <span className="text-sage">Merci, vous êtes inscrit(e).</span>}
            {status === "error" && (
              <span className="text-[#e0907a]">Merci de saisir une adresse e-mail valide.</span>
            )}
          </p>
        </form>
      </div>
    </section>
  );
}
