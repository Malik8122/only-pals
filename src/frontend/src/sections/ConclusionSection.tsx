import { useFadeIn } from "@/hooks/useFadeIn";

export function ConclusionSection() {
  const { ref: headingRef, isVisible: headingVisible } = useFadeIn(0.1);
  const { ref: subRef, isVisible: subVisible } = useFadeIn(0.15);
  const { ref: ctaRef, isVisible: ctaVisible } = useFadeIn(0.2);

  return (
    <section
      id="conclusion"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-24"
      data-ocid="conclusion-section"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1400&q=80')",
        }}
      />

      {/* Cinematic dark gradient overlay — deep coral → dark sage */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.18 0.12 13 / 0.92) 0%, oklch(0.14 0.08 170 / 0.88) 60%, oklch(0.10 0.05 245 / 0.95) 100%)",
        }}
      />

      {/* Floating orbs for cinematic depth */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{
          background: "oklch(0.6 0.2 13 / 0.6)",
        }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{
          background: "oklch(0.58 0.13 170 / 0.5)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        {/* Eyebrow */}
        <div
          ref={headingRef as React.RefObject<HTMLDivElement>}
          className={`transition-all duration-700 ${
            headingVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <span
            className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8"
            style={{
              background: "oklch(0.6 0.2 13 / 0.3)",
              border: "1px solid oklch(0.6 0.2 13 / 0.5)",
              color: "oklch(0.95 0.05 30)",
            }}
          >
            Our Promise
          </span>

          {/* Main headline */}
          <h2
            className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight"
            style={{ color: "oklch(0.98 0.01 30)" }}
          >
            Every child deserves
            <br />
            to be{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.78 0.18 30), oklch(0.72 0.15 60))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              understood,
            </span>
            <br />
            not just seen.
          </h2>
        </div>

        {/* Supporting line */}
        <div
          ref={subRef as React.RefObject<HTMLDivElement>}
          className={`transition-all duration-700 delay-200 ${
            subVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p
            className="text-lg sm:text-xl md:text-2xl font-body leading-relaxed max-w-2xl mx-auto"
            style={{ color: "oklch(0.82 0.03 250)" }}
          >
            Only Pals exists so that no child ever feels invisible in a world
            full of noise.
          </p>
        </div>

        {/* CTA + logo mark */}
        <div
          ref={ctaRef as React.RefObject<HTMLDivElement>}
          className={`transition-all duration-700 delay-400 flex flex-col items-center gap-8 ${
            ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button
            type="button"
            data-ocid="conclusion-cta"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-2xl font-display font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95"
            style={{
              background: "oklch(0.98 0.01 30)",
              color: "oklch(0.52 0.2 13)",
              boxShadow: "0 8px 32px oklch(0.6 0.2 13 / 0.4)",
            }}
            onClick={() => {
              document
                .getElementById("hero")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span>🤝</span>
            Join the Movement
          </button>

          {/* Brand mark */}
          <div className="flex flex-col items-center gap-2 mt-4 opacity-70">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-display font-black"
              style={{
                background: "oklch(0.6 0.2 13 / 0.4)",
                border: "2px solid oklch(0.7 0.15 30 / 0.4)",
                color: "oklch(0.98 0.01 30)",
              }}
            >
              OP
            </div>
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "oklch(0.72 0.04 250)" }}
            >
              Only Pals · Trust First
            </span>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
          aria-hidden="true"
        >
          <span
            className="text-xs uppercase tracking-widest font-semibold"
            style={{ color: "oklch(0.82 0.02 250)" }}
          >
            scroll back up
          </span>
          <div
            className="w-0.5 h-8 rounded-full"
            style={{ background: "oklch(0.82 0.02 250)" }}
          />
        </div>
      </div>

      {/* Bottom vignette */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, oklch(0.10 0.05 245 / 0.8))",
        }}
      />
    </section>
  );
}
