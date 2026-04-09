import { Chip, Section } from "@/components/SectionUtils";
import { useFadeIn } from "@/hooks/useFadeIn";

const palette = [
  {
    name: "Empathy Coral",
    hex: "#FF6B6B",
    oklch: "oklch(0.6 0.2 13)",
    emotion: "Warmth & Safety",
    usage: "Primary CTAs, highlights, key moments",
    bg: "bg-[oklch(0.6_0.2_13)]",
    light: "bg-[oklch(0.95_0.05_13)]",
  },
  {
    name: "Connection Green",
    hex: "#7FB3A0",
    oklch: "oklch(0.58 0.13 170)",
    emotion: "Trust & Growth",
    usage: "Secondary accents, success states",
    bg: "bg-[oklch(0.58_0.13_170)]",
    light: "bg-[oklch(0.95_0.04_170)]",
  },
  {
    name: "Security Blue",
    hex: "#87CEEB",
    oklch: "oklch(0.72 0.15 245)",
    emotion: "Calm & Reliability",
    usage: "Informational content, links",
    bg: "bg-[oklch(0.72_0.15_245)]",
    light: "bg-[oklch(0.96_0.04_245)]",
  },
  {
    name: "Joy Yellow",
    hex: "#FFD93D",
    oklch: "oklch(0.68 0.18 60)",
    emotion: "Playfulness & Energy",
    usage: "Badges, tags, celebratory moments",
    bg: "bg-[oklch(0.68_0.18_60)]",
    light: "bg-[oklch(0.96_0.05_60)]",
  },
];

const visualGallery = [
  {
    src: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=400&q=80",
    label: "Soft & Rounded",
    desc: "Approachable forms",
  },
  {
    src: "https://images.unsplash.com/photo-1473691955023-da1c49c95c78?w=400&q=80",
    label: "Warm & Radiant",
    desc: "Light-filled moments",
  },
  {
    src: "https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?w=400&q=80",
    label: "Playful & Tactile",
    desc: "Hands-on experiences",
  },
  {
    src: "https://images.unsplash.com/photo-1596491557897-6a716b62c03a?w=400&q=80",
    label: "Community & Joy",
    desc: "Shared memories",
  },
];

export default function BrandIdentitySection() {
  const { ref: paletteRef, isVisible: paletteVisible } = useFadeIn();
  const { ref: typoRef, isVisible: typoVisible } = useFadeIn();
  const { ref: logoRef, isVisible: logoVisible } = useFadeIn();
  const { ref: galleryRef, isVisible: galleryVisible } = useFadeIn();

  return (
    <Section id="identity" className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* Header */}
        <div className="text-center">
          <Chip color="secondary">Brand Identity</Chip>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-foreground mt-4 mb-4">
            Colors that <span className="text-secondary">feel something.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Every design decision is emotionally intentional — built for trust,
            joy, and warmth.
          </p>
        </div>

        {/* Color Palette */}
        <div
          ref={paletteRef as React.RefObject<HTMLDivElement>}
          className={`transition-all duration-700 ease-out ${paletteVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground text-center mb-8">
            Color Palette
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {palette.map((color) => (
              <div
                key={color.name}
                className="card-warm overflow-hidden group"
                data-ocid="color-swatch"
              >
                {/* Swatch */}
                <div
                  className={`${color.bg} h-32 w-full transition-smooth group-hover:scale-105 relative`}
                >
                  <div className="absolute bottom-3 right-3 bg-white/25 backdrop-blur-sm rounded-lg px-2 py-1">
                    <span className="font-mono text-xs font-bold text-white">
                      {color.hex}
                    </span>
                  </div>
                </div>
                {/* Info */}
                <div className={`p-4 ${color.light}`}>
                  <p className="font-display font-bold text-foreground text-base">
                    {color.name}
                  </p>
                  <p className="text-xs font-semibold text-primary mt-0.5">
                    {color.emotion}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2 leading-snug">
                    {color.usage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Logo + Typography row */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Logo Concept */}
          <div
            ref={logoRef as React.RefObject<HTMLDivElement>}
            className={`card-warm p-8 transition-all duration-700 ease-out ${logoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
              Logo Concept
            </p>
            {/* Visual: overlapping circles */}
            <div className="flex justify-center mb-6 relative h-24">
              <div className="absolute w-20 h-20 rounded-full bg-primary/20 border-2 border-primary left-1/2 -translate-x-8 top-1/2 -translate-y-1/2" />
              <div className="absolute w-20 h-20 rounded-full bg-secondary/20 border-2 border-secondary left-1/2 translate-x-0 top-1/2 -translate-y-1/2" />
              <div className="absolute left-1/2 -translate-x-3 top-1/2 -translate-y-1/2 w-6 h-12 bg-[oklch(0.58_0.13_170)]/30 rounded-full mix-blend-multiply" />
            </div>
            <h3 className="font-display font-bold text-2xl text-foreground mb-2">
              Overlapping Circles
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Two circles converging at the center — one for{" "}
              <span className="text-primary font-semibold">parent</span>, one
              for <span className="text-secondary font-semibold">child</span>.
              The overlap is the connection. Simple. Universal. Warm.
            </p>
            <div className="flex gap-2 mt-4 flex-wrap">
              <Chip color="primary">Connection</Chip>
              <Chip color="secondary">Unity</Chip>
              <Chip color="accent">Trust</Chip>
            </div>
          </div>

          {/* Typography */}
          <div
            ref={typoRef as React.RefObject<HTMLDivElement>}
            className={`card-warm p-8 transition-all duration-700 delay-150 ease-out ${typoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
              Typography
            </p>

            <div className="space-y-5">
              <div>
                <span className="text-xs text-muted-foreground font-semibold tracking-wide uppercase">
                  Display — Bricolage Grotesque
                </span>
                <p className="font-display font-bold text-4xl text-foreground leading-tight mt-1">
                  Only Pals
                </p>
                <p className="font-display font-semibold text-xl text-primary mt-1">
                  Bold. Playful. Trustworthy.
                </p>
              </div>

              <div className="h-px bg-border" />

              <div>
                <span className="text-xs text-muted-foreground font-semibold tracking-wide uppercase">
                  Body — Figtree
                </span>
                <p className="font-body text-base text-foreground leading-relaxed mt-1">
                  "Safe connections start with a simple hello. Only Pals brings
                  families together in a space built on trust and joy."
                </p>
                <p className="font-body text-sm text-muted-foreground mt-1">
                  Warm · Readable · Approachable
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Language Gallery */}
        <div
          ref={galleryRef as React.RefObject<HTMLDivElement>}
          className={`transition-all duration-700 ease-out ${galleryVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground text-center mb-8">
            Visual Language
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {visualGallery.map((img, i) => (
              <div
                key={img.src}
                className="group relative overflow-hidden rounded-2xl shadow-sm"
                style={{ transitionDelay: `${i * 80}ms` }}
                data-ocid={`gallery-tile-${i}`}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-52 object-cover transition-smooth group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-display font-bold text-white text-sm">
                    {img.label}
                  </p>
                  <p className="text-white/70 text-xs">{img.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
