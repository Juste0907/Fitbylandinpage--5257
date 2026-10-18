import type { SVGProps } from "react";

/**
 * Line icons drawn to match the reference mockup's custom set. Everything uses
 * a 24×24 viewBox, `currentColor` and `fill: none`. Each glyph carries its own
 * `scale` about the box centre so its ink measures the same as the reference's
 * at the rendered size — the reference icons are not all the same width.
 */
function Svg({ children, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.05}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      {children}
    </svg>
  );
}

/** Angular hex dumbbell — the reference's "Coaching" / "Plus d'énergie" mark. */
export function DumbbellHex(props: SVGProps<SVGSVGElement>) {
  return (
    <Svg {...props}>
      <g transform="translate(12 12) scale(0.9 0.93) translate(-12 -12)">
        <path d="M1.4 9.6v4.8" />
        <path d="M5.4 5.4 9.4 8.3v7.4l-4 2.9-2.7-3.5V8.9l2.7-3.5Z" />
        <path d="M9.4 11.2h5.2M9.4 12.8h5.2" />
        <path d="M18.6 5.4 21.3 8.9v5.8l-2.7 3.5-4-2.9V8.3l4-2.9Z" />
        <path d="M22.6 9.6v4.8" />
      </g>
    </Svg>
  );
}

/** Round apple with a two-leaf sprout — the reference's "Nutrition" mark. */
export function Apple(props: SVGProps<SVGSVGElement>) {
  return (
    <Svg {...props}>
      <g transform="translate(12 12.35) scale(0.951 0.891) translate(-12 -12.35)">
        <path d="M12 9.4C10.4 8 8.6 7.3 7 7.6 4.4 8.1 2.8 10.4 2.7 13.3c-.2 4.5 2.9 9.3 6 9.3 1.2 0 2.1-.7 3.3-.7s2.1.7 3.3.7c3.1 0 6.2-4.8 6-9.3-.1-2.9-1.7-5.2-4.3-5.7-1.6-.3-3.4.4-5 1.8Z" />
        <path d="M12 8.7v-2.6" />
        <path d="M11.9 6.1 7.1 2.8" />
        <path d="M11.9 6.1C13.4 2.7 15.6 1.2 16.9 2.6c1.2 1.1.7 2.4-2.6 2.7" />
      </g>
    </Svg>
  );
}

/**
 * Three-petal lotus sitting in a bowl — the reference's "Bien-être mental" mark.
 * The side petals are left open at the base so their edges run into the bowl,
 * which is what makes it read as one flower rather than three leaves.
 */
export function Lotus(props: SVGProps<SVGSVGElement>) {
  return (
    <Svg {...props}>
      <g transform="translate(12 12) scale(0.98 0.95) translate(-12 -12)">
        <path d="M12 4c-2.2 4-2.8 7.6-1.9 10.4.4 1.5 1.2 2.7 1.9 4.1.7-1.4 1.5-2.6 1.9-4.1.9-2.8.3-6.4-1.9-10.4Z" />
        <path d="M1.6 13.8C2.8 10.6 4.1 7.9 5.5 6.1c1.2 1.4 2.2 4 3.2 11.2" />
        <path d="M22.4 13.8C21.2 10.6 19.9 7.9 18.5 6.1c-1.2 1.4-2.2 4-3.2 11.2" />
        <path d="M1.6 13.8c.9 4.2 4.9 6.6 10.4 6.6s9.5-2.4 10.4-6.6" />
        <path d="M4.6 16.8c1.5 2.1 4.1 3.3 7.4 3.3s5.9-1.2 7.4-3.3" />
      </g>
    </Svg>
  );
}

/** Bar chart under a rising arrow — the reference's "Résultats durables" mark. */
export function TrendUp(props: SVGProps<SVGSVGElement>) {
  return (
    <Svg {...props}>
      <g transform="translate(12 12.4) scale(0.8 0.86) translate(-12 -12.4)">
        <path d="M1.4 13.9v7.7h21.2" />
        <path d="M2.8 21.6v-6.4h2.4v6.4" />
        <path d="M8.3 21.6v-6.9h2.4v6.9" />
        <path d="M15.7 21.6v-8h2.4v8" />
        <path d="M2.4 14.9 8.1 9l3.5 2.7 7.2-7.9" />
        <path d="M17.1 3.2h5.4v5.4" />
      </g>
    </Svg>
  );
}

/** Outlined heart — the final CTA's "Confiance en soi" mark. */
export function HeartLine(props: SVGProps<SVGSVGElement>) {
  return (
    <Svg {...props}>
      <g transform="translate(12 11.75) scale(0.785 0.84) translate(-12 -11.75)">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </g>
    </Svg>
  );
}

/** Two-peak range inside a closed triangle — the CTA's "Résultats durables" mark. */
export function MountainPeak(props: SVGProps<SVGSVGElement>) {
  return (
    <Svg {...props}>
      <g transform="translate(12 12) scale(0.92 0.92) translate(-12 -12)">
        <path d="M2.2 19.5h19.6L12 4.5 2.2 19.5Z" />
        <path d="M7.7 16.2 9.6 9.6l2.6 4.2 2.4-6.4 3.4 8.8" />
      </g>
    </Svg>
  );
}
