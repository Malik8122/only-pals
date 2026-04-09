import { Chip, Section, StatCard } from "@/components/SectionUtils";
import BrandAvatarSection from "@/sections/BrandAvatarSection";
import BrandIdentitySection from "@/sections/BrandIdentitySection";
import { BrandJustificationSection } from "@/sections/BrandJustificationSection";
import { ConclusionSection } from "@/sections/ConclusionSection";
import CoreCampaignSection from "@/sections/CoreCampaignSection";
import { HeroSection } from "@/sections/HeroSection";
import { LaunchPlanSection } from "@/sections/LaunchPlanSection";
import { MarketingStrategySection } from "@/sections/MarketingStrategySection";
import { PRCampaignsSection } from "@/sections/PRCampaignsSection";
import { TrustFrameworkSection } from "@/sections/TrustFrameworkSection";
import type { PainPoint, ValueCard } from "@/types";

/* ─── Data ──────────────────────────────────────────────────── */
const PAIN_POINTS: PainPoint[] = [
  {
    emoji: "😔",
    title: "Digital Loneliness",
    description:
      "1 in 3 children report having no close friend at school. Screens replaced swings.",
    type: "emotional",
  },
  {
    emoji: "🔒",
    title: "Unsafe Online Spaces",
    description:
      "82% of parents fear child safety in social apps. No platform built trust-first.",
    type: "functional",
  },
  {
    emoji: "🎭",
    title: "Superficial Connections",
    description:
      "Kids collect followers, not friends. Likes replaced genuine belonging.",
    type: "emotional",
  },
  {
    emoji: "🔑",
    title: "Verification Gap",
    description:
      "Zero platforms verify parent identity before connecting families.",
    type: "functional",
  },
  {
    emoji: "📱",
    title: "Screen Addiction Risk",
    description:
      "Average child spends 7+ hrs on screens. Meaningful connection = less than 45 mins.",
    type: "ethical",
  },
  {
    emoji: "🌐",
    title: "Data Privacy Neglect",
    description:
      "Children's data sold, harvested, monetized. COPPA barely enforced. Parents blindsided.",
    type: "ethical",
  },
];

const VALUES: ValueCard[] = [
  {
    icon: "🛡️",
    title: "Trust-First",
    description:
      "Every interaction verified. Every profile parent-approved. Safety is the product, not an afterthought.",
    color: "bg-primary/8",
  },
  {
    icon: "🌱",
    title: "Authentic Growth",
    description:
      "Real friendships, real play, real emotional development. No filters, no pretend.",
    color: "bg-secondary/8",
  },
  {
    icon: "🤝",
    title: "Community Care",
    description:
      "Built with parents, pediatricians, educators. Your village, digitally enabled.",
    color: "bg-accent/8",
  },
  {
    icon: "🔐",
    title: "Privacy Sacred",
    description:
      "No ads. No selling data. No tracking. Children's information stays children's information.",
    color: "bg-[oklch(0.68_0.18_60)]/8",
  },
  {
    icon: "💛",
    title: "Emotional Intelligence",
    description:
      "We measure connection quality, not follower count. Empathy is our algorithm.",
    color: "bg-primary/8",
  },
];

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      {/* ── HERO ─────────────────────────────────────────── */}
      <HeroSection />

      {/* ── BRAND JUSTIFICATION ──────────────────────────── */}
      <BrandJustificationSection />

      {/* ── MISSION ─────────────────────────────────────── */}
      <Section id="mission" className="py-24 px-4 bg-background">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <Chip color="accent">03 · Mission, Vision & Values</Chip>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mt-4">
              What We Believe In
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-14">
            <div className="card-warm p-8 bg-accent/5 border-accent/20">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🎯</span>
                <p className="font-display font-bold text-2xl text-accent">
                  Our Mission
                </p>
              </div>
              <p className="text-lg text-foreground leading-relaxed">
                To build a verified, emotionally intelligent platform where
                parents can confidently connect their children for safe,
                meaningful, in-person friendships.
              </p>
            </div>
            <div className="card-warm p-8 bg-primary/5 border-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🌅</span>
                <p className="font-display font-bold text-2xl text-primary">
                  Our Vision
                </p>
              </div>
              <p className="text-lg text-foreground leading-relaxed">
                A world where every child has at least one genuine friend
                outside their school gate — and every parent feels safe making
                that happen.
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {VALUES.map((v) => (
              <div key={v.title} className={`card-warm p-6 ${v.color}`}>
                <span className="text-4xl block mb-3">{v.icon}</span>
                <p className="font-display font-bold text-lg text-foreground mb-2">
                  {v.title}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── PROBLEM ─────────────────────────────────────── */}
      <Section id="problem" className="py-24 px-4 bg-muted/30">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <Chip color="primary">04 · Problem Identification</Chip>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mt-4 mb-4">
              The Crisis No One Is Solving
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-14">
            <div>
              <img
                src="/assets/generated/parent-child-trust.dim_600x500.png"
                alt="Parent and child connection"
                className="w-full rounded-3xl shadow-xl object-cover max-h-80"
              />
            </div>
            <div className="space-y-4">
              {PAIN_POINTS.slice(0, 4).map((p) => (
                <div
                  key={p.title}
                  className="card-warm p-5 flex gap-4 items-start"
                >
                  <span className="text-3xl flex-shrink-0">{p.emoji}</span>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-display font-semibold text-foreground">
                        {p.title}
                      </p>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                          p.type === "emotional"
                            ? "bg-primary/10 text-primary"
                            : p.type === "functional"
                              ? "bg-secondary/10 text-secondary"
                              : "bg-accent/10 text-accent"
                        }`}
                      >
                        {p.type}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {p.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {PAIN_POINTS.slice(4).map((p) => (
              <div
                key={p.title}
                className="card-warm p-5 flex gap-4 items-start"
              >
                <span className="text-3xl flex-shrink-0">{p.emoji}</span>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-display font-semibold text-foreground">
                      {p.title}
                    </p>
                    <span className="bg-accent/10 text-accent text-xs px-2 py-0.5 rounded-full font-medium">
                      {p.type}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── INSIGHT ─────────────────────────────────────── */}
      <Section id="insight" className="py-24 px-4 bg-background">
        <div className="max-w-[1200px] mx-auto text-center">
          <Chip color="warm">05 · Consumer Insight</Chip>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mt-4 mb-16">
            The One Truth That Changes Everything
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                insight: '"Parents don\'t lack options — they lack trust."',
                context:
                  "There are 47 parenting apps in India. None of them have solved the core problem: a parent cannot confidently hand their child to a stranger, no matter how many stars their profile has.",
                color: "border-l-4 border-primary bg-primary/5",
              },
              {
                insight:
                  '"Children don\'t need more content — they need someone to play with."',
                context:
                  "Every algorithm optimizes for watch time. Only Pals optimizes for friendship time. The shift from consumption to connection is the biggest whitespace in child technology.",
                color: "border-l-4 border-secondary bg-secondary/5",
              },
            ].map((i) => (
              <div
                key={i.insight}
                className={`card-warm p-10 text-left ${i.color}`}
              >
                <p className="font-display font-bold text-2xl text-foreground mb-4 italic leading-snug">
                  {i.insight}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {i.context}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── AUDIENCE ─────────────────────────────────────── */}
      <Section id="audience" className="py-24 px-4 bg-muted/30">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <Chip color="secondary">06 · STP Framework</Chip>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mt-4">
              Who We Talk To
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-center mb-14">
            <img
              src="/assets/generated/audience-segments.dim_800x500.png"
              alt="Target audience segments"
              className="w-full rounded-3xl shadow-xl object-cover max-h-72"
            />
            <div className="space-y-5">
              {[
                {
                  label: "Primary Audience",
                  desc: "Gen Z & Millennial parents (25–40), urban India, Tier 1 & Tier 2 cities, household income ₹8L+, digital-first lifestyle, value-driven parenting.",
                  badge: "🎯 Primary",
                  color: "bg-primary/8 border-primary/20",
                },
                {
                  label: "Secondary Audience",
                  desc: "Schools, pediatricians, child psychologists, parenting coaches, and NGOs working on childhood wellbeing.",
                  badge: "🌐 Secondary",
                  color: "bg-secondary/8 border-secondary/20",
                },
                {
                  label: "Influence Network",
                  desc: "Grandparents (53% make playdate decisions), school teachers, housing society administrators — the hidden decision-makers.",
                  badge: "💡 Influence",
                  color: "bg-accent/8 border-accent/20",
                },
              ].map((a) => (
                <div key={a.label} className={`card-warm p-5 ${a.color}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">{a.badge.split(" ")[0]}</span>
                    <p className="font-display font-semibold text-foreground">
                      {a.label}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Positioning statement */}
          <div className="card-warm p-10 bg-gradient-to-br from-primary/8 via-secondary/5 to-accent/8 text-center">
            <p className="font-display font-bold text-xl text-muted-foreground mb-2">
              Positioning Statement
            </p>
            <p className="font-display font-bold text-2xl md:text-3xl text-foreground leading-relaxed">
              "For <span className="text-primary">trust-conscious parents</span>{" "}
              in urban India,
              <br className="hidden md:block" />
              Only Pals is the{" "}
              <span className="text-secondary">
                verified friendship platform
              </span>{" "}
              that
              <br className="hidden md:block" />
              enables safe, meaningful in-person playdates —
              <br className="hidden md:block" />
              unlike <span className="text-accent">social media</span>, which
              was never built for children."
            </p>
          </div>
        </div>
      </Section>

      {/* ── BRAND AVATAR — Section 7 ──────────────────────── */}
      <BrandAvatarSection />

      {/* ── BRAND IDENTITY — Section 8 ───────────────────── */}
      <BrandIdentitySection />

      {/* ── CORE CAMPAIGN — Section 9 ────────────────────── */}
      <CoreCampaignSection />

      {/* ── STRATEGY ─────────────────────────────────────── */}
      <MarketingStrategySection />

      {/* ── PR ─────────────────────────────────────────── */}
      <PRCampaignsSection />

      {/* ── LAUNCH ─────────────────────────────────────── */}
      <LaunchPlanSection />

      {/* ── TRUST ─────────────────────────────────────── */}
      <TrustFrameworkSection />

      {/* ── COMMUNITY ─────────────────────────────────── */}
      <Section id="community-visual" className="py-0 px-0 bg-muted/30">
        <div className="max-w-[1200px] mx-auto px-4 py-16">
          <img
            src="/assets/generated/community-visual.dim_800x500.png"
            alt="Community of parents and children"
            className="w-full rounded-3xl shadow-2xl object-cover max-h-72"
          />
        </div>
      </Section>

      {/* ── CONCLUSION ─────────────────────────────────── */}
      <ConclusionSection />
    </main>
  );
}
