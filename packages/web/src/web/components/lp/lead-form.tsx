import { useState } from "react";
import { ArrowRight, Check, Lock, Mail, Phone, User } from "lucide-react";
import { SectionLabel } from "./section-label";

type Errors = { name?: string; email?: string; phone?: string };

const FIELD =
  "h-[45px] w-full rounded-lg border border-hairline bg-field pl-[38px] pr-3 text-[14px] text-ink " +
  "placeholder:text-muted/75 transition-colors duration-200 outline-none " +
  "focus:border-olive/45 focus:bg-white";

/**
 * Hero lead capture. Client-side validation only — nothing is sent anywhere.
 */
export function LeadForm({ className }: { className?: string }) {
  const [values, setValues] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const set = (k: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    setErrors((p) => ({ ...p, [k]: undefined }));
  };

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const next: Errors = {};
    if (values.name.trim().length < 2) next.name = "Indiquez votre nom complet.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
      next.email = "Indiquez une adresse email valide.";
    if (values.phone.replace(/\D/g, "").length < 9) next.phone = "Indiquez un numéro valide.";
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  }

  return (
    <div
      className={
        "rounded-xl bg-surface-soft p-[28px] shadow-[0_24px_60px_-24px_rgba(6,11,12,0.55)] ring-1 ring-black/5 " +
        (className ?? "")
      }
    >
      <SectionLabel>Passer à l&apos;action</SectionLabel>
      <h2 className="mt-[8px] text-[23px] leading-[1.15] font-bold tracking-[-0.015em] text-ink">
        Commencez votre transformation dès aujourd&apos;hui
      </h2>
      <p className="mt-[13px] text-[14.5px] leading-[1.55] text-body/85">
        Remplissez ce formulaire et recevez un appel gratuit de 15 minutes pour discuter de vos
        objectifs et découvrir le programme qui vous correspond.
      </p>

      {sent ? (
        <div className="mt-[18px] flex items-start gap-3 rounded-lg bg-olive/5 p-4 ring-1 ring-olive/15">
          <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-olive text-cream">
            <Check className="size-3.5" strokeWidth={3} />
          </span>
          <p className="text-[14px] leading-[1.5] text-ink">
            <strong className="font-semibold">Merci {values.name.split(" ")[0]} !</strong> Votre
            demande est bien notée. Nous vous rappelons sous 24h ouvrées.
          </p>
        </div>
      ) : (
        <form onSubmit={submit} noValidate className="mt-[13px] space-y-[7px]">
          <Field icon={<User className="size-[15px]" />} error={errors.name}>
            <input
              className={FIELD}
              placeholder="Votre nom complet"
              autoComplete="name"
              value={values.name}
              onChange={set("name")}
            />
          </Field>
          <Field icon={<Mail className="size-[15px]" />} error={errors.email}>
            <input
              className={FIELD}
              type="email"
              placeholder="Votre email"
              autoComplete="email"
              value={values.email}
              onChange={set("email")}
            />
          </Field>
          <Field icon={<Phone className="size-[15px]" />} error={errors.phone}>
            <input
              className={FIELD}
              type="tel"
              placeholder="Votre numéro de téléphone"
              autoComplete="tel"
              value={values.phone}
              onChange={set("phone")}
            />
          </Field>

          <button
            type="submit"
            className="group mt-[13px] flex h-[46px] w-full items-center justify-center gap-2 rounded-full bg-olive text-[14px] font-semibold text-cream transition-colors duration-200 hover:bg-olive-dark focus-visible:ring-2 focus-visible:ring-olive/40 focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            Réserver mon appel gratuit
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </form>
      )}

      <p className="mt-[13px] flex items-center justify-center gap-1.5 text-[11px] text-muted">
        <Lock className="size-3" />
        Vos informations sont en sécurité.
      </p>
    </div>
  );
}

function Field({
  icon,
  error,
  children,
}: {
  icon: React.ReactNode;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="relative">
        <span className="pointer-events-none absolute top-1/2 left-[14px] -translate-y-1/2 text-olive-icon/75">
          {icon}
        </span>
        {children}
      </div>
      {error && <p className="mt-1 pl-1 text-[11.5px] text-red-700/80">{error}</p>}
    </div>
  );
}
