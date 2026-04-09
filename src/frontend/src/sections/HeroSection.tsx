import { Chip } from "@/components/SectionUtils";
import { ArrowRight, Heart, Shield, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const GRADIENT_STOPS = [
  "linear-gradient(135deg, oklch(0.6 0.2 13) 0%, oklch(0.58 0.13 170) 40%, oklch(0.72 0.15 245) 70%, oklch(0.68 0.18 60) 100%)",
  "linear-gradient(135deg, oklch(0.68 0.18 60) 0%, oklch(0.6 0.2 13) 35%, oklch(0.58 0.13 170) 65%, oklch(0.72 0.15 245) 100%)",
  "linear-gradient(135deg, oklch(0.72 0.15 245) 0%, oklch(0.68 0.18 60) 30%, oklch(0.6 0.2 13) 60%, oklch(0.58 0.13 170) 100%)",
  "linear-gradient(135deg, oklch(0.58 0.13 170) 0%, oklch(0.72 0.15 245) 35%, oklch(0.68 0.18 60) 65%, oklch(0.6 0.2 13) 100%)",
];

const TRUST_BADGES = [
  { icon: Shield, label: "Verified Profiles", color: "bg-white/20 text-white" },
  {
    icon: Heart,
    label: "Trust-First Platform",
    color: "bg-white/20 text-white",
  },
  { icon: Sparkles, label: "Safe Playdates", color: "bg-white/20 text-white" },
];

export function HeroSection() {
  const [gradientIndex, setGradientIndex] = useState(0);
  const [titleVisible, setTitleVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  // Cycle gradients every 3s
  useEffect(() => {
    const id = setInterval(() => {
      setGradientIndex((i) => (i + 1) % GRADIENT_STOPS.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  // Entrance animation on mount
  useEffect(() => {
    const t = setTimeout(() => setTitleVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="brand-essence"
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: GRADIENT_STOPS[gradientIndex],
        transition: "background 2s ease-in-out",
      }}
    >
      {/* Layered overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30 pointer-events-none" />

      {/* Animated blob decorations */}
      <div
        className="absolute top-20 left-8 md:left-20 w-56 h-56 rounded-full bg-white/10 blur-3xl"
        style={{ animation: "pulse 4s ease-in-out infinite" }}
      />
      <div
        className="absolute bottom-32 right-8 md:right-24 w-72 h-72 rounded-full bg-white/8 blur-3xl"
        style={{ animation: "pulse 5s ease-in-out infinite 1.5s" }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-white/5 blur-3xl pointer-events-none" />

      {/* Content */}
      <div
        className={`relative z-10 w-full max-w-[1200px] mx-auto px-4 pt-28 pb-16 flex flex-col items-center text-center transition-all duration-1000 ease-out ${
          titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Label chip */}
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-widest mb-6 border border-white/30">
          <Sparkles size={12} className="text-white" />
          Brand Campaign Strategy 2026
        </div>

        {/* Main wordmark + headline */}
        <h1
          className="font-display font-extrabold text-white leading-[0.95] mb-6"
          style={{
            fontSize: "clamp(3rem, 9vw, 7.5rem)",
            letterSpacing: "-0.02em",
          }}
        >
          Only Pals
        </h1>

        {/* Tagline */}
        <p
          className="font-display font-semibold text-white/95 mb-4 leading-tight"
          style={{
            fontSize: "clamp(1.25rem, 3.5vw, 2.5rem)",
            maxWidth: "820px",
          }}
        >
          Every child deserves to be{" "}
          <span
            className="italic"
            style={{
              background:
                "linear-gradient(90deg, #fff 0%, rgba(255,255,255,0.75) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            understood,
          </span>{" "}
          not just seen.
        </p>

        <p className="font-body text-white/80 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
          A trust-first playdate and emotional connection platform for children
          and parents.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <button
            type="button"
            onClick={() => scrollTo("why-us")}
            className="flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-2xl font-display font-bold text-base shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95"
            data-ocid="hero-cta-explore"
          >
            Explore Strategy
            <ArrowRight size={18} />
          </button>
          <button
            type="button"
            onClick={() => scrollTo("campaign")}
            className="flex items-center gap-2 px-8 py-4 bg-white/15 backdrop-blur-sm text-white border-2 border-white/35 rounded-2xl font-display font-bold text-base transition-all duration-300 hover:bg-white/25 active:scale-95"
            data-ocid="hero-cta-campaign"
          >
            See the Campaign
          </button>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
          {TRUST_BADGES.map(({ icon: Icon, label, color }) => (
            <div
              key={label}
              className={`flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20 text-sm font-semibold ${color}`}
            >
              <Icon size={15} />
              {label}
            </div>
          ))}
        </div>

        {/* Hero image */}
        <div
          className="w-full max-w-4xl relative"
          style={{
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
            opacity: imageLoaded ? 1 : 0,
            transform: imageLoaded ? "translateY(0)" : "translateY(20px)",
          }}
        >
          {/* Decorative glow ring */}
          <div className="absolute -inset-2 rounded-3xl bg-white/20 blur-xl -z-10" />
          <img
            src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200&q=80"
            alt="Children playing together warmly"
            className="w-full rounded-3xl shadow-2xl object-cover"
            style={{ maxHeight: "420px", objectPosition: "center 30%" }}
            onLoad={() => setImageLoaded(true)}
          />
          {/* Overlay gradient at bottom of image */}
          <div className="absolute bottom-0 left-0 right-0 h-32 rounded-b-3xl bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
          {/* Floating stat chips on image */}
          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-lg hidden sm:block">
            <p className="font-display font-bold text-foreground text-xl">
              10M+
            </p>
            <p className="text-xs text-muted-foreground">Families to connect</p>
          </div>
          <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-lg hidden sm:block">
            <p className="font-display font-bold text-foreground text-xl">
              100%
            </p>
            <p className="text-xs text-muted-foreground">Trust-verified</p>
          </div>
        </div>

        {/* Scroll hint */}
        <button
          type="button"
          onClick={() => scrollTo("why-us")}
          className="mt-10 flex flex-col items-center gap-1 text-white/60 hover:text-white/90 transition-colors text-sm font-medium"
          aria-label="Scroll down"
        >
          <span>Scroll to explore</span>
          <div
            className="w-px h-8 bg-white/30 mt-1"
            style={{ animation: "pulse 2s ease-in-out infinite" }}
          />
        </button>
      </div>
    </section>
  );
}
