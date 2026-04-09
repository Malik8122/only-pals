import { Chip, Section } from "@/components/SectionUtils";
import { useFadeIn } from "@/hooks/useFadeIn";

const values = [
  {
    emoji: "🛡️",
    label: "Safety",
    desc: "Every interaction verified & protected",
  },
  { emoji: "🤝", label: "Trust", desc: "Parent-led profiles, real identities" },
  {
    emoji: "💛",
    label: "Authenticity",
    desc: "Genuine kids, genuine connections",
  },
  { emoji: "✨", label: "Joy", desc: "Playdates that spark real happiness" },
  {
    emoji: "🌱",
    label: "Growth",
    desc: "Friendships that nurture every child",
  },
];

const valueColors = [
  "from-[oklch(0.92_0.08_13)] to-[oklch(0.97_0.03_13)] border-[oklch(0.85_0.12_13)]",
  "from-[oklch(0.92_0.07_170)] to-[oklch(0.97_0.03_170)] border-[oklch(0.82_0.1_170)]",
  "from-[oklch(0.94_0.08_60)] to-[oklch(0.98_0.03_60)] border-[oklch(0.87_0.12_60)]",
  "from-[oklch(0.92_0.07_245)] to-[oklch(0.97_0.03_245)] border-[oklch(0.82_0.1_245)]",
  "from-[oklch(0.93_0.08_145)] to-[oklch(0.97_0.03_145)] border-[oklch(0.83_0.1_145)]",
];

function ValueCard({
  emoji,
  label,
  desc,
  gradient,
}: { emoji: string; label: string; desc: string; gradient: string }) {
  const { ref, isVisible } = useFadeIn();
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`bg-gradient-to-br ${gradient} border rounded-3xl p-6 flex flex-col items-center text-center gap-3 transition-all duration-500 hover:scale-105 hover:shadow-lg ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <span className="text-5xl">{emoji}</span>
      <p className="font-display font-bold text-lg text-foreground">{label}</p>
      <p className="text-sm text-muted-foreground leading-snug">{desc}</p>
    </div>
  );
}

export default function MissionSection() {
  return (
    <Section id="mission" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Chip color="secondary">Our Purpose</Chip>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mt-4 mb-6 leading-tight">
            Why We Exist
          </h2>
        </div>

        {/* Mission */}
        <div className="relative rounded-3xl overflow-hidden mb-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.6_0.2_13)] via-[oklch(0.58_0.13_170)] to-[oklch(0.72_0.15_245)]" />
          <div className="relative z-10 px-8 py-12 md:px-16 md:py-16 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/70 mb-4">
              Mission
            </p>
            <p className="font-display font-bold text-2xl md:text-4xl text-white leading-snug max-w-3xl mx-auto">
              We connect children with trusted peers through emotionally safe
              playdates, guided by parents.
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="rounded-3xl border border-[oklch(0.87_0.12_60)] bg-gradient-to-r from-[oklch(0.97_0.04_60)] to-[oklch(0.99_0.02_60)] px-8 py-10 flex flex-col md:flex-row items-center gap-6 mb-16 shadow-md">
          <span className="text-5xl shrink-0">🌟</span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.55_0.15_60)] mb-2">
              Vision
            </p>
            <p className="font-display font-bold text-xl md:text-2xl text-foreground leading-snug">
              A world where every child has a safe place to belong.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="text-center mb-10">
          <Chip color="accent">Core Values</Chip>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {values.map((v, i) => (
            <ValueCard key={v.label} {...v} gradient={valueColors[i]} />
          ))}
        </div>
      </div>
    </Section>
  );
}
