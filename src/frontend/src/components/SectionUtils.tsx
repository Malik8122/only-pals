import { useFadeIn } from "@/hooks/useFadeIn";
import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
}

export function Section({ id, className = "", children }: SectionProps) {
  const { ref, isVisible } = useFadeIn();
  return (
    <section
      id={id}
      ref={ref as React.RefObject<HTMLElement>}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
    >
      {children}
    </section>
  );
}

interface ChipProps {
  children: ReactNode;
  color?: "primary" | "secondary" | "accent" | "warm";
}

const colorMap: Record<string, string> = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary/10 text-secondary",
  accent: "bg-accent/10 text-accent",
  warm: "bg-[oklch(0.68_0.18_60)]/10 text-[oklch(0.55_0.15_60)]",
};

export function Chip({ children, color = "primary" }: ChipProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${colorMap[color]}`}
    >
      {children}
    </span>
  );
}

interface StatCardProps {
  value: string;
  label: string;
  emoji?: string;
  gradient?: string;
}

export function StatCard({ value, label, emoji, gradient }: StatCardProps) {
  return (
    <div
      className={`card-warm p-6 flex flex-col items-center text-center gap-2 ${gradient || ""}`}
    >
      {emoji && <span className="text-3xl">{emoji}</span>}
      <p className="font-display font-bold text-3xl text-foreground">{value}</p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
