import { Section } from "@/components/SectionUtils";
import { useFadeIn } from "@/hooks/useFadeIn";

export default function CoreCampaignSection() {
  const { ref, isVisible } = useFadeIn(0.1);

  return (
    <Section
      id="campaign"
      className="relative min-h-screen flex items-center justify-center overflow-hidden p-0"
    >
      {/* Hero background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=1200&q=80"
          alt="Children playing together — Only Pals campaign"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
      </div>

      {/* Coral-to-sage gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.38 0.2 13 / 0.82) 0%, oklch(0.35 0.15 13 / 0.75) 40%, oklch(0.32 0.13 170 / 0.80) 75%, oklch(0.28 0.13 170 / 0.88) 100%)",
        }}
      />

      {/* Subtle texture dots */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Content */}
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`relative z-10 text-center px-6 max-w-4xl mx-auto transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {/* Campaign label */}
        <p
          className="text-white/60 text-xs font-semibold uppercase tracking-[0.3em] mb-6"
          style={{ transitionDelay: "100ms" }}
          data-ocid="campaign-label"
        >
          Core Campaign 2026
        </p>

        {/* FOUND — massive display */}
        <h2
          className="font-display font-bold text-white leading-none mb-4"
          style={{
            fontSize: "clamp(5rem, 18vw, 14rem)",
            letterSpacing: "-0.03em",
          }}
          data-ocid="campaign-title"
        >
          FOUND
        </h2>

        {/* Tagline */}
        <p
          className="font-display font-semibold text-white text-3xl md:text-5xl mb-8 tracking-tight"
          data-ocid="campaign-tagline"
        >
          Find Your Pal.
        </p>

        {/* Emotional hook — 3 short lines */}
        <div className="space-y-1 mb-12">
          <p className="text-white/80 text-base md:text-lg font-body">
            Every child deserves to be truly understood.
          </p>
          <p className="text-white/80 text-base md:text-lg font-body">
            Every parent deserves to feel safe letting them grow.
          </p>
          <p className="text-white/90 text-base md:text-lg font-body font-semibold">
            This is where real connections begin.
          </p>
        </div>

        {/* Badges */}
        <div
          className="flex flex-wrap justify-center gap-4"
          data-ocid="campaign-badges"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 text-white text-sm font-semibold">
            <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
            Campaign Name: <strong>FOUND</strong>
          </span>
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 text-white text-sm font-semibold">
            <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0" />
            Tagline: <strong>Find Your Pal.</strong>
          </span>
        </div>
      </div>

      {/* Bottom scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50">
        <span className="text-white text-xs tracking-widest uppercase font-semibold">
          Scroll
        </span>
        <div className="w-px h-8 bg-white/50 animate-pulse" />
      </div>
    </Section>
  );
}
