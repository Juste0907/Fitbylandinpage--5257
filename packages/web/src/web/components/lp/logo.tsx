import { cn } from "../../lib/utils";

type LogoProps = {
  /** "cream" on dark backgrounds, "olive" on light ones */
  tone?: "cream" | "olive";
  /** width of the FITBY wordmark in px */
  width?: number;
  className?: string;
  withTagline?: boolean;
  /** stack the tagline under the wordmark (footer) instead of beside it (header) */
  stacked?: boolean;
};

/**
 * The supplied FITBY wordmark, used exactly as provided and recoloured to the
 * reference palette: cream on the dark header/footer, olive on light surfaces.
 */
export function Logo({
  tone = "cream",
  width = 88,
  className,
  withTagline = true,
  stacked = false,
}: LogoProps) {
  return (
    <div
      className={cn(
        "flex",
        stacked ? "flex-col items-start gap-[9px]" : "items-center gap-[22px]",
        className,
      )}
    >
      <img
        src={tone === "cream" ? "/images/logo-fitby-cream.png" : "/images/logo-fitby-olive.png"}
        alt="FITBY"
        width={width}
        height={Math.round((width * 903) / 3147)}
        style={{ width, height: "auto" }}
        className="block shrink-0 select-none"
        draggable={false}
      />
      {withTagline && (
        <span
          className={cn(
            "hidden text-[9.5px] leading-none font-semibold uppercase tracking-[0.22em] sm:block",
            tone === "cream" ? "text-cream/60" : "text-ink/45",
          )}
        >
          Corps · Esprit · Équilibre
        </span>
      )}
    </div>
  );
}
