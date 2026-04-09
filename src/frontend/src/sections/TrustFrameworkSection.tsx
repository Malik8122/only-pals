import { Chip, Section } from "@/components/SectionUtils";
import { useFadeIn } from "@/hooks/useFadeIn";

const pillars = [
  {
    icon: "🛡️",
    title: "Child Safety",
    color: "from-[oklch(0.6_0.2_13)] to-[oklch(0.68_0.18_30)]",
    bg: "bg-[oklch(0.98_0.01_13)]",
    border: "border-[oklch(0.88_0.08_13)]",
    badge: "bg-[oklch(0.6_0.2_13)]",
    points: [
      "Verified parent profiles only",
      "No direct child-to-child contact",
      "Guardian approval for every playdate",
    ],
  },
  {
    icon: "🔒",
    title: "Data Privacy",
    color: "from-[oklch(0.58_0.13_170)] to-[oklch(0.66_0.13_155)]",
    bg: "bg-[oklch(0.97_0.01_170)]",
    border: "border-[oklch(0.86_0.07_170)]",
    badge: "bg-[oklch(0.58_0.13_170)]",
    points: [
      "Zero child data shared with third parties",
      "COPPA compliant & data minimization",
      "End-to-end encrypted communications",
    ],
  },
  {
    icon: "✅",
    title: "Parent Verification",
    color: "from-[oklch(0.72_0.15_245)] to-[oklch(0.65_0.16_225)]",
    bg: "bg-[oklch(0.97_0.01_245)]",
    border: "border-[oklch(0.85_0.08_245)]",
    badge: "bg-[oklch(0.62_0.16_245)]",
    points: [
      "Multi-step identity verification",
      "Community peer reviews & ratings",
      "Dynamic trust score per profile",
    ],
  },
  {
    icon: "💛",
    title: "Emotional Responsibility",
    color: "from-[oklch(0.78_0.16_85)] to-[oklch(0.72_0.18_60)]",
    bg: "bg-[oklch(0.98_0.01_85)]",
    border: "border-[oklch(0.88_0.09_85)]",
    badge: "bg-[oklch(0.72_0.18_60)]",
    points: [
      "In-app parent guides & resources",
      "Mood check-ins after playdates",
      "Behavioral safety monitoring",
    ],
  },
];

function PillarCard({
  pillar,
  index,
}: {
  pillar: (typeof pillars)[0];
  index: number;
}) {
  const { ref, isVisible } = useFadeIn(0.1);
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      data-ocid={`trust-pillar-${index}`}
      className={`relative flex flex-col items-center text-center rounded-3xl border-2 ${pillar.border} ${pillar.bg} p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Gradient top bar */}
      <div
        className={`absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl bg-gradient-to-r ${pillar.color}`}
      />

      {/* Icon circle */}
      <div
        className={`w-24 h-24 rounded-full bg-gradient-to-br ${pillar.color} flex items-center justify-center text-5xl shadow-md mb-6`}
      >
        {pillar.icon}
      </div>

      <h3 className="font-display font-bold text-2xl text-foreground mb-4">
        {pillar.title}
      </h3>

      <ul className="space-y-3 text-left w-full">
        {pillar.points.map((pt) => (
          <li key={pt} className="flex items-start gap-3">
            <span
              className={`flex-shrink-0 mt-0.5 w-5 h-5 rounded-full ${pillar.badge} flex items-center justify-center`}
            >
              <svg
                className="w-3 h-3 text-white"
                fill="none"
                viewBox="0 0 12 12"
                aria-hidden="true"
                role="img"
              >
                <title>Check</title>
                <path
                  d="M2 6l3 3 5-5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="text-sm text-muted-foreground leading-snug">
              {pt}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function TrustFrameworkSection() {
  return (
    <Section id="trust" className="py-0 px-0">
      <div
        className="py-24 px-4"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.99 0.01 13) 0%, oklch(0.97 0.02 60) 40%, oklch(0.98 0.01 170) 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <Chip color="primary">Trust & Safety</Chip>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
              Safety isn't a feature.
              <br />
              <span className="text-primary">It's our foundation.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mt-4">
              Every layer of Only Pals is built with one purpose — to keep your
              child safe, your data private, and your trust intact.
            </p>
          </div>

          {/* Shield visual badge */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white border-2 border-primary/20 shadow-lg">
              <span className="text-2xl">🏅</span>
              <span className="font-display font-semibold text-foreground text-sm">
                4-Layer Protection Framework
              </span>
              <span className="text-2xl">🏅</span>
            </div>
          </div>

          {/* Pillar cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, i) => (
              <PillarCard key={pillar.title} pillar={pillar} index={i} />
            ))}
          </div>

          {/* Bottom trust bar */}
          <div className="mt-14 flex flex-wrap justify-center gap-6 text-center">
            {[
              { emoji: "🔐", label: "SOC 2 Certified" },
              { emoji: "🇺🇸", label: "COPPA Compliant" },
              { emoji: "👁️", label: "Zero-Knowledge Data" },
              { emoji: "🌍", label: "GDPR Ready" },
            ].map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 px-5 py-2.5 bg-white/80 rounded-full border border-border shadow-sm text-sm font-semibold text-foreground"
              >
                <span>{badge.emoji}</span>
                <span>{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
