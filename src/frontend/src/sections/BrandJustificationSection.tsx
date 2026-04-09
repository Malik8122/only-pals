import { Chip } from "@/components/SectionUtils";
import {
  ArrowRight,
  CheckCircle,
  Heart,
  Shield,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface CompareCard {
  platform: string;
  icon: string;
  failPoints: string[];
  color: string;
  borderColor: string;
}

const OLD_PLATFORMS: CompareCard[] = [
  {
    platform: "Social Media",
    icon: "📱",
    failPoints: [
      "Built for engagement, not safety",
      "No parent verification",
      "Algorithmic addiction by design",
    ],
    color: "bg-destructive/5",
    borderColor: "border-destructive/30",
  },
  {
    platform: "Parenting Apps",
    icon: "👶",
    failPoints: [
      "Parent-to-parent, not child-focused",
      "No playdate coordination",
      "Zero friendship intelligence",
    ],
    color: "bg-muted/50",
    borderColor: "border-border",
  },
  {
    platform: "Gaming Platforms",
    icon: "🎮",
    failPoints: [
      "Online worlds, no offline bridge",
      "Anonymous identity — unverified",
      "Consumed by screen time",
    ],
    color: "bg-muted/50",
    borderColor: "border-border",
  },
];

interface OnlyPalsFeature {
  icon: React.ReactNode;
  title: string;
  desc: string;
  color: string;
}

const ONLY_PALS_FEATURES: OnlyPalsFeature[] = [
  {
    icon: <Shield size={22} />,
    title: "Verified Parent Profiles",
    desc: "Government-ID verified. Face-matched. Every family is real.",
    color: "text-primary",
  },
  {
    icon: <Heart size={22} />,
    title: "Interest-Matched Playdates",
    desc: "Algorithm designed for friendship quality, not watch time.",
    color: "text-secondary",
  },
  {
    icon: <Users size={22} />,
    title: "Community Trusted",
    desc: "Built with pediatricians, educators, and real parents.",
    color: "text-accent",
  },
  {
    icon: <CheckCircle size={22} />,
    title: "No Data. No Ads. Ever.",
    desc: "Revenue from subscriptions only. Children's data stays private.",
    color: "text-[oklch(0.55_0.15_60)]",
  },
];

const STATS = [
  {
    value: "68%",
    label: "Parents fear online spaces for their children",
    emoji: "😟",
    gradient: "from-primary/10 to-primary/5",
  },
  {
    value: "1 in 3",
    label: "Children report having no close friend at school",
    emoji: "💔",
    gradient: "from-secondary/10 to-secondary/5",
  },
  {
    value: "90%",
    label: "Parents want verified playdates, no platform delivers",
    emoji: "🙌",
    gradient: "from-accent/10 to-accent/5",
  },
];

export function BrandJustificationSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="why-us"
      ref={ref}
      className={`py-28 px-4 bg-muted/30 transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <Chip color="secondary">02 · Why Only Pals</Chip>
        </div>
        <div className="text-center mb-16">
          <h2
            className="font-display font-extrabold text-foreground leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
          >
            The world changed.
            <br />
            <span className="text-primary">Parenting apps didn't.</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
            Every platform was built for someone else's problem. Only Pals was
            built for yours.
          </p>
        </div>

        {/* Comparison: OLD vs NEW */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16 items-start">
          {/* Old platforms */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <X size={18} className="text-destructive" />
              <p className="font-display font-bold text-lg text-foreground uppercase tracking-wide">
                Old Platforms
              </p>
            </div>
            <div className="space-y-4">
              {OLD_PLATFORMS.map((platform) => (
                <div
                  key={platform.platform}
                  className={`rounded-2xl border p-5 ${platform.color} ${platform.borderColor}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{platform.icon}</span>
                    <p className="font-display font-bold text-foreground">
                      {platform.platform}
                    </p>
                  </div>
                  <ul className="space-y-1.5">
                    {platform.failPoints.map((fp) => (
                      <li
                        key={fp}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <X
                          size={13}
                          className="text-destructive/70 flex-shrink-0"
                        />
                        {fp}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Only Pals */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <CheckCircle size={18} className="text-secondary" />
              <p className="font-display font-bold text-lg text-foreground uppercase tracking-wide">
                Only Pals
              </p>
            </div>

            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden mb-5 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=800&q=80"
                alt="Parent and child warm connection"
                className="w-full object-cover"
                style={{ maxHeight: "220px", objectPosition: "center 20%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-display font-bold text-white text-lg drop-shadow">
                  "We don't just connect kids — we protect childhood."
                </p>
              </div>
            </div>

            {/* Feature list */}
            <div className="space-y-3">
              {ONLY_PALS_FEATURES.map((feature) => (
                <div
                  key={feature.title}
                  className="card-warm p-4 flex items-start gap-4 bg-card hover:shadow-md transition-all duration-300"
                >
                  <div className={`flex-shrink-0 mt-0.5 ${feature.color}`}>
                    {feature.icon}
                  </div>
                  <div>
                    <p className="font-display font-semibold text-foreground text-sm mb-0.5">
                      {feature.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {feature.desc}
                    </p>
                  </div>
                  <CheckCircle
                    size={16}
                    className="text-secondary flex-shrink-0 ml-auto mt-0.5"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Stats */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-2 mb-8">
            <TrendingUp size={18} className="text-primary" />
            <p className="font-display font-bold text-foreground uppercase tracking-widest text-sm">
              The Numbers Don't Lie
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {STATS.map((stat) => (
              <div
                key={stat.value}
                className={`card-warm p-7 text-center bg-gradient-to-br ${stat.gradient} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="text-4xl mb-3">{stat.emoji}</div>
                <p
                  className="font-display font-extrabold text-foreground mb-1.5"
                  style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
                >
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Cultural shift callout */}
        <div
          className="relative rounded-3xl overflow-hidden p-10 text-center shadow-xl"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.6 0.2 13 / 0.12) 0%, oklch(0.58 0.13 170 / 0.10) 50%, oklch(0.72 0.15 245 / 0.10) 100%)",
            border: "1px solid oklch(0.6 0.2 13 / 0.15)",
          }}
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
          <p className="font-display font-bold text-muted-foreground uppercase tracking-widest text-xs mb-3">
            Cultural Shift
          </p>
          <p
            className="font-display font-extrabold text-foreground leading-tight mb-4"
            style={{ fontSize: "clamp(1.4rem, 3vw, 2.25rem)" }}
          >
            Gen Z parents aren't afraid of technology.
            <br />
            <span className="text-primary">
              They're afraid of the wrong technology.
            </span>
          </p>
          <p className="text-muted-foreground max-w-lg mx-auto mb-6 leading-relaxed">
            This generation researches every product their child touches. They
            demand transparency, safety certifications, and emotional alignment
            — before they'll hand their child's world to any platform.
          </p>
          <button
            type="button"
            onClick={() => scrollTo("mission")}
            className="inline-flex items-center gap-2 font-display font-bold text-primary hover:text-primary/80 transition-colors text-sm"
            data-ocid="brand-justification-cta"
          >
            See our values <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
