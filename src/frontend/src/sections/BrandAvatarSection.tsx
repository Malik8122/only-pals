import { Chip, Section } from "@/components/SectionUtils";
import { useFadeIn } from "@/hooks/useFadeIn";

const traits = [
  { label: "Warm", color: "primary" as const },
  { label: "Playful", color: "warm" as const },
  { label: "Trustworthy", color: "secondary" as const },
  { label: "Wise", color: "accent" as const },
  { label: "Inclusive", color: "secondary" as const },
];

const toneCards = [
  {
    phrase: '"We\'ve got you."',
    desc: "Reassuring & steady — never preachy",
    gradient: "from-[oklch(0.96_0.05_13)] to-[oklch(0.98_0.02_13)]",
    icon: "🫶",
  },
  {
    phrase: '"Let\'s play."',
    desc: "Joyful & energetic — sparks curiosity",
    gradient: "from-[oklch(0.96_0.05_170)] to-[oklch(0.98_0.02_170)]",
    icon: "🎈",
  },
  {
    phrase: '"You can trust this."',
    desc: "Clear & direct — earns confidence",
    gradient: "from-[oklch(0.96_0.05_245)] to-[oklch(0.98_0.02_245)]",
    icon: "🔒",
  },
];

export default function BrandAvatarSection() {
  const { ref: heroRef, isVisible: heroVisible } = useFadeIn();
  const { ref: quoteRef, isVisible: quoteVisible } = useFadeIn();

  return (
    <Section id="brand-avatar" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Chip color="primary">Brand Avatar</Chip>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-foreground mt-4 mb-4">
            Meet <span className="text-primary">The Warm Guide</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            A personality built on empathy, safety, and pure childhood joy.
          </p>
        </div>

        {/* Main card — portrait + traits */}
        <div
          ref={heroRef as React.RefObject<HTMLDivElement>}
          className={`grid md:grid-cols-2 gap-10 items-center mb-16 transition-all duration-700 ease-out ${
            heroVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {/* Portrait */}
          <div className="relative flex justify-center">
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              {/* Gradient ring */}
              <div className="absolute inset-0 rounded-full gradient-primary p-1 shadow-xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-muted">
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80"
                    alt="The Warm Guide — Brand Avatar"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-card border border-border rounded-2xl px-4 py-2 shadow-md whitespace-nowrap">
                <span className="font-display font-bold text-sm text-primary">
                  ✨ The Warm Guide
                </span>
              </div>
            </div>
          </div>

          {/* Traits + description */}
          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                Personality Traits
              </p>
              <div className="flex flex-wrap gap-2">
                {traits.map((t) => (
                  <span
                    key={t.label}
                    className={`px-4 py-2 rounded-full text-sm font-bold tracking-wide shadow-sm
                      ${t.color === "primary" ? "bg-primary/15 text-primary" : ""}
                      ${t.color === "secondary" ? "bg-secondary/15 text-secondary" : ""}
                      ${t.color === "accent" ? "bg-accent/15 text-accent" : ""}
                      ${t.color === "warm" ? "bg-[oklch(0.68_0.18_60)]/15 text-[oklch(0.48_0.15_60)]" : ""}
                    `}
                    data-ocid="trait-badge"
                  >
                    {t.label}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                Tone of Voice
              </p>
              <div className="grid gap-3">
                {toneCards.map((card) => (
                  <div
                    key={card.phrase}
                    className={`flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r ${card.gradient} border border-border`}
                  >
                    <span className="text-2xl flex-shrink-0">{card.icon}</span>
                    <div>
                      <p className="font-display font-bold text-foreground text-base">
                        {card.phrase}
                      </p>
                      <p className="text-muted-foreground text-xs mt-0.5">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Brand-as-person quote */}
        <div
          ref={quoteRef as React.RefObject<HTMLDivElement>}
          className={`transition-all duration-700 delay-200 ease-out ${
            quoteVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <blockquote
            className="relative max-w-3xl mx-auto p-8 rounded-3xl bg-card border-l-4 border-primary shadow-sm"
            data-ocid="brand-avatar-quote"
          >
            <span className="absolute top-4 left-6 text-5xl text-primary/20 font-serif leading-none select-none">
              "
            </span>
            <p className="italic font-body text-xl md:text-2xl text-foreground leading-relaxed pl-6">
              If Only Pals were a person, she'd be a pediatrician who moonlights
              as a kindergarten teacher —{" "}
              <span className="text-primary font-semibold not-italic">
                deeply caring, quietly brilliant, and always safe.
              </span>
            </p>
            <footer className="mt-4 pl-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Brand Archetype — The Caregiver × The Jester
              </span>
            </footer>
          </blockquote>
        </div>
      </div>
    </Section>
  );
}
