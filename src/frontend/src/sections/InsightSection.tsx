import { Chip, Section } from "@/components/SectionUtils";
import { useFadeIn } from "@/hooks/useFadeIn";

function InsightCard({
  quote,
  sub,
  gradient,
  delay,
}: {
  quote: string;
  sub: string;
  gradient: string;
  delay: string;
}) {
  const { ref, isVisible } = useFadeIn();
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`relative overflow-hidden rounded-3xl p-8 md:p-12 flex flex-col justify-between min-h-[280px] transition-all duration-700 ${delay} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className={`absolute inset-0 ${gradient}`} />
      {/* Decorative circles */}
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10" />
      <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full bg-white/10" />

      <div className="relative z-10">
        <span className="text-white/50 font-display font-bold text-7xl leading-none select-none">
          "
        </span>
        <p className="font-display font-bold text-2xl md:text-3xl text-white leading-snug -mt-4">
          {quote}
        </p>
      </div>
      <p className="relative z-10 text-white/70 text-sm mt-6 font-body">
        {sub}
      </p>
    </div>
  );
}

export default function InsightSection() {
  return (
    <Section id="insight" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <Chip color="warm">Key Insight</Chip>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mt-4 leading-tight">
            The Truth Behind the Problem
          </h2>
        </div>

        {/* Two insight cards side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InsightCard
            quote="Parents don't lack options — they lack trust."
            sub="Every app promises safety. None has earned it."
            gradient="bg-gradient-to-br from-[oklch(0.58_0.22_13)] via-[oklch(0.62_0.2_28)] to-[oklch(0.65_0.15_45)]"
            delay="delay-0"
          />
          <InsightCard
            quote="Children aren't lonely because they're isolated. They're lonely because they're unseen."
            sub="Technology connected them to the world — but not to each other."
            gradient="bg-gradient-to-br from-[oklch(0.45_0.14_170)] via-[oklch(0.52_0.12_185)] to-[oklch(0.58_0.1_210)]"
            delay="delay-150"
          />
        </div>

        {/* Supporting insight strip */}
        <div className="mt-8 rounded-2xl bg-gradient-to-r from-[oklch(0.95_0.04_245)] to-[oklch(0.97_0.02_245)] border border-[oklch(0.88_0.08_245)] px-8 py-6 flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
          <span className="text-4xl shrink-0">💡</span>
          <p className="font-display font-semibold text-lg text-[oklch(0.32_0.1_245)]">
            The solution isn't more features. It's more <em>faith</em> — in the
            platform, in other families, in the process.
          </p>
        </div>
      </div>
    </Section>
  );
}
