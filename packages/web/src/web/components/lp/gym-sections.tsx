import { ArrowRight, Check, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { SectionLabel } from "./section-label";

/* ---------- Plan large de la salle ---------- */
export function GymTour() {
  return (
    <section id="salle" className="relative overflow-hidden bg-night">
      <img
        src="/images/gym-wide.jpg"
        alt="Salle de sport FITBY avec machines et lumière naturelle"
        loading="lazy"
        className="h-[360px] w-full object-cover opacity-80 lg:h-[520px]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-night via-night/60 to-transparent" />
      <div className="shell absolute inset-0 flex items-center">
        <div className="reveal max-w-[520px]">
          <SectionLabel tone="dark">Notre salle</SectionLabel>
          <h2 className="display mt-[11px] text-[30px] leading-[1.15] text-cream lg:text-[44px] lg:leading-[48px]">
            Un espace pensé pour bouger, sans foule
          </h2>
          <p className="mt-4 text-[15px] leading-[1.65] text-cream/70">
            180 m² de plateaux, des machines réglées pour chaque morphologie et une lumière
            naturelle toute la journée. Accès sur réservation, 7 jours sur 7.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Équipements ---------- */
const EQUIPMENT = [
  {
    img: "/images/equip-dumbbells.jpg",
    title: "Haltères et racks",
    text: "De 2 à 40 kg, par paliers de 1 kg, sur racks en acier.",
  },
  {
    img: "/images/equip-cable.jpg",
    title: "Poulie vis-à-vis",
    text: "Machine à câbles double poulie pour travailler chaque groupe musculaire.",
  },
  {
    img: "/images/equip-accessories.jpg",
    title: "Accessoires",
    text: "Kettlebells, bandes de résistance et cordes à sauter en libre-service.",
  },
  {
    img: "/images/equip-cardio.jpg",
    title: "Cardio",
    text: "Tapis de course, rameurs et vélos avec suivi de la fréquence cardiaque.",
  },
];

export function Equipment() {
  return (
    <section id="equipements" className="bg-cream py-14 lg:py-[72px]">
      <div className="shell">
        <div className="reveal max-w-[560px]">
          <SectionLabel>Équipements</SectionLabel>
          <h2 className="display mt-[11px] text-[27px] leading-[1.15] text-ink lg:text-[36px] lg:leading-[40px]">
            Le matériel qu'il vous faut, rien de superflu
          </h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-[22px]">
          {EQUIPMENT.map((e) => (
            <article key={e.title} className="reveal group">
              <div className="aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  src={e.img}
                  alt={e.title}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-[17px] font-bold text-ink">{e.title}</h3>
              <p className="mt-1.5 text-[13.5px] leading-[1.6] text-ink/65">{e.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Boutique FITBY ---------- */
const PRODUCTS = [
  {
    img: "/images/product-bottle.jpg",
    name: "Gourde isotherme FITBY",
    price: 24,
    note: "750 ml, inox double paroi",
  },
  {
    img: "/images/product-bag.jpg",
    name: "Sac de sport FITBY",
    price: 69,
    note: "40 L, compartiment chaussures",
  },
  {
    img: "/images/product-tee.jpg",
    name: "T-shirt technique",
    price: 34,
    note: "Coton recyclé, coupe ajustée",
  },
  {
    img: "/images/product-shaker.jpg",
    name: "Shaker FITBY",
    price: 12,
    note: "600 ml, bille anti-grumeaux",
  },
];

export function Shop() {
  const [cart, setCart] = useState<Record<string, number>>({});
  const [added, setAdded] = useState<string | null>(null);
  const count = Object.values(cart).reduce((a, b) => a + b, 0);

  function add(name: string) {
    setCart((c) => ({ ...c, [name]: (c[name] ?? 0) + 1 }));
    setAdded(name);
    window.setTimeout(() => setAdded((cur) => (cur === name ? null : cur)), 1400);
  }

  return (
    <section id="boutique" className="bg-night-soft py-14 lg:py-[72px]">
      <div className="shell">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel tone="dark">Boutique</SectionLabel>
            <h2 className="display mt-[11px] text-[27px] leading-[1.15] text-cream lg:text-[36px] lg:leading-[40px]">
              Équipez-vous aux couleurs FITBY
            </h2>
          </div>
          <a
            href="#boutique"
            aria-label="Panier"
            className="inline-flex items-center gap-2 rounded-full bg-night-card px-5 py-2.5 text-[13.5px] font-semibold text-cream ring-1 ring-night-border"
          >
            <ShoppingBag className="size-4 text-sage" />
            Panier
            <span className="grid size-5 place-items-center rounded-full bg-sage text-[11px] text-night">
              {count}
            </span>
          </a>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-[22px]">
          {PRODUCTS.map((p) => (
            <article
              key={p.name}
              className="reveal flex flex-col overflow-hidden rounded-xl bg-night-card ring-1 ring-night-border"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-[15px] font-bold text-cream">{p.name}</h3>
                <p className="mt-1 text-[12.5px] text-cream/55">{p.note}</p>
                <div className="mt-auto flex items-center justify-between pt-5">
                  <span className="display text-[20px] font-bold text-sage">{p.price} €</span>
                  <button
                    type="button"
                    onClick={() => add(p.name)}
                    className="inline-flex h-9 items-center gap-1.5 rounded-full bg-sage-soft px-4 text-[12.5px] font-semibold text-night transition-colors hover:bg-sage"
                  >
                    {added === p.name ? (
                      <>
                        <Check className="size-3.5" strokeWidth={2.6} /> Ajouté
                      </>
                    ) : (
                      "Ajouter"
                    )}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="reveal mt-8 flex items-center gap-2 text-[13px] text-cream/50">
          Livraison offerte dès 60 € d'achat.
          <a href="#boutique" className="inline-flex items-center gap-1 text-sage hover:underline">
            Voir la collection <ArrowRight className="size-3.5" />
          </a>
        </p>
      </div>
    </section>
  );
}
