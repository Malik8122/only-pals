import { Chip, Section } from "@/components/SectionUtils";
import { useFadeIn } from "@/hooks/useFadeIn";

const emotionalCards = [
  {
    emoji: "😔",
    label: "Invisible Loneliness",
    desc: "Connected devices, but no real bonds",
  },
  {
    emoji: "😰",
    label: "Social Anxiety",
    desc: "Screen-first kids struggle face-to-face",
  },
  {
    emoji: "💔",
    label: "Emotional Gaps",
    desc: "No trusted peer to share real feelings with",
  },
];

const functionalCards = [
  {
    emoji: "🔍",
    label: "No Safe Discovery",
    desc: "No verified way to find compatible friends",
  },
  {
    emoji: "🚫",
    label: "Zero Parent Control",
    desc: "Platforms ignore the family unit entirely",
  },
  {
    emoji: "📵",
    label: "Toxic Algorithms",
    desc: "Engagement over wellbeing — always",
  },
];

const ethicalCards = [
  {
    emoji: "🔓",
    label: "Data Exploitation",
    desc: "Children's data sold without consent",
  },
  {
    emoji: "👁️",
    label: "Predator Exposure",
    desc: "Unverified strangers access kids freely",
  },
];

function PainCard({
  emoji,
  label,
  desc,
  colorClass,
}: { emoji: string; label: string; desc: string; colorClass: string }) {
  const { ref, isVisible } = useFadeIn();
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`rounded-2xl border p-5 flex flex-col gap-3 transition-all duration-500 hover:scale-[1.03] hover:shadow-lg ${colorClass} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      <span className="text-4xl">{emoji}</span>
      <p className="font-display font-bold text-base text-foreground">
        {label}
      </p>
      <p className="text-xs text-muted-foreground leading-snug">{desc}</p>
    </div>
  );
}

export default function ProblemSection() {
  const { ref: statRef, isVisible: statVisible } = useFadeIn();

  return (
    <Section id="problem" className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Chip color="primary">The Reality</Chip>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mt-4 mb-4 leading-tight">
            A Crisis Hidden in Plain Sight
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            Children are more digitally connected than ever — and more
            emotionally isolated.
          </p>
        </div>

        {/* Image + Stat overlay */}
        <div className="relative rounded-3xl overflow-hidden mb-16 h-64 md:h-80">
          <img
            src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1200&q=80"
            alt="Child looking at phone alone"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
          <div
            ref={statRef as React.RefObject<HTMLDivElement>}
            className={`absolute left-6 bottom-6 md:left-12 md:bottom-10 transition-all duration-700 ${statVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <p className="font-display font-bold text-5xl md:text-7xl text-white">
              73%
            </p>
            <p className="text-white/80 text-sm md:text-base max-w-xs mt-1">
              of children report feeling isolated despite being "connected"
            </p>
          </div>
        </div>

        {/* Emotional Pain Points */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-3 h-3 rounded-full bg-[oklch(0.62_0.22_22)]" />
            <p className="font-display font-semibold text-sm uppercase tracking-widest text-[oklch(0.52_0.18_22)]">
              Emotional
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {emotionalCards.map((c) => (
              <PainCard
                key={c.label}
                {...c}
                colorClass="bg-[oklch(0.97_0.04_22)] border-[oklch(0.88_0.1_22)]"
              />
            ))}
          </div>
        </div>

        {/* Functional Pain Points */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-3 h-3 rounded-full bg-[oklch(0.55_0.18_280)]" />
            <p className="font-display font-semibold text-sm uppercase tracking-widest text-[oklch(0.45_0.15_280)]">
              Functional
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {functionalCards.map((c) => (
              <PainCard
                key={c.label}
                {...c}
                colorClass="bg-[oklch(0.96_0.04_280)] border-[oklch(0.86_0.1_280)]"
              />
            ))}
          </div>
        </div>

        {/* Ethical Concerns */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="w-3 h-3 rounded-full bg-[oklch(0.7_0.18_65)]" />
            <p className="font-display font-semibold text-sm uppercase tracking-widest text-[oklch(0.52_0.15_65)]">
              Ethical
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ethicalCards.map((c) => (
              <PainCard
                key={c.label}
                {...c}
                colorClass="bg-[oklch(0.97_0.05_65)] border-[oklch(0.88_0.12_65)]"
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
