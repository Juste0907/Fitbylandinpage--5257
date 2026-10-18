import { cn } from "../../lib/utils";

type SectionLabelProps = {
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
};

/** A 22px rule followed by a letterspaced uppercase label. */
export function SectionLabel({ children, tone = "light", className }: SectionLabelProps) {
  return (
    <p className={cn("flex items-center gap-3", className)}>
      <span
        aria-hidden
        className={cn("block h-px w-[22px]", tone === "light" ? "bg-olive-icon/60" : "bg-sage/60")}
      />
      <span className={cn("eyebrow", tone === "light" ? "text-olive-icon" : "text-sage")}>
        {children}
      </span>
    </p>
  );
}
