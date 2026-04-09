import { Chip, Section } from "@/components/SectionUtils";
import { useFadeIn } from "@/hooks/useFadeIn";
import { useState } from "react";

type Tab = "Demographic" | "Psychographic" | "Behavioral";

const tabContent: Record<Tab, { items: { icon: string; text: string }[] }> = {
  Demographic: {
    items: [
      { icon: "👨‍👩‍👧", text: "Millennial & Gen Z parents, ages 28–40" },
      { icon: "🏙️", text: "Urban & semi-urban households" },
      { icon: "👶", text: "Children ages 4–12" },
      { icon: "💼", text: "Dual-income, tech-savvy families" },
      { icon: "📍", text: "Tier 1 & Tier 2 cities across India" },
    ],
  },
  Psychographic: {
    items: [
      { icon: "💚", text: "Conscious parenting — quality over quantity" },
      { icon: "🧠", text: "Emotionally intelligent, values-led households" },
      { icon: "📵", text: "Skeptical of social media for kids" },
      { icon: "🤗", text: "Prioritize real-world social skills" },
      { icon: "🌍", text: "Community-seeking, peer-support driven" },
    ],
  },
  Behavioral: {
    items: [
      { icon: "🔎", text: "Active searchers of safer alternatives" },
      { icon: "📱", text: "Use parenting apps, forums & communities" },
      { icon: "⭐", text: "High trust in peer reviews & recommendations" },
      { icon: "🏫", text: "Involved in school groups & parent networks" },
      { icon: "🚫", text: "Have rejected or limited mainstream platforms" },
    ],
  },
};

const primaryTraits = [
  "Privacy-first mindset",
  "Emotionally aware",
  "Community-oriented",
  "High engagement",
];

function TabButton({
  label,
  active,
  onClick,
}: { label: Tab; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      data-ocid={`tab-${label.toLowerCase()}`}
      className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
        active
          ? "bg-primary text-primary-foreground shadow-md scale-105"
          : "bg-muted text-muted-foreground hover:bg-muted/80"
      }`}
    >
      {label}
    </button>
  );
}

export default function STPSection() {
  const [activeTab, setActiveTab] = useState<Tab>("Demographic");
  const { ref: posRef, isVisible: posVisible } = useFadeIn();

  return (
    <Section id="audience" className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <Chip color="accent">Who We Serve</Chip>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mt-4 leading-tight">
            Segmentation & Targeting
          </h2>
        </div>

        {/* Segmentation Tabs */}
        <div className="mb-8 flex gap-3 justify-center flex-wrap">
          {(["Demographic", "Psychographic", "Behavioral"] as Tab[]).map(
            (tab) => (
              <TabButton
                key={tab}
                label={tab}
                active={activeTab === tab}
                onClick={() => setActiveTab(tab)}
              />
            ),
          )}
        </div>

        {/* Tab Content */}
        <div className="rounded-3xl bg-card border border-border p-8 mb-12 min-h-[220px] transition-all duration-300">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {tabContent[activeTab].items.map((item) => (
              <div
                key={item.text}
                className="flex items-start gap-3 p-4 rounded-2xl bg-background border border-border"
              >
                <span className="text-2xl shrink-0">{item.icon}</span>
                <p className="text-sm text-foreground leading-snug">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Audience Profiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Primary */}
          <div className="md:col-span-2 rounded-3xl bg-gradient-to-br from-[oklch(0.97_0.04_13)] to-[oklch(0.99_0.01_13)] border border-[oklch(0.88_0.1_13)] p-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl">👩‍💼</span>
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-primary/15 text-primary mb-1">
                  Primary Audience
                </span>
                <p className="font-display font-bold text-xl text-foreground">
                  Millennial & Gen Z Parents
                </p>
                <p className="text-sm text-muted-foreground">
                  Ages 28–40 · Urban India
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {primaryTraits.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Secondary */}
          <div className="rounded-3xl bg-gradient-to-br from-[oklch(0.96_0.04_170)] to-[oklch(0.99_0.01_170)] border border-[oklch(0.85_0.08_170)] p-8 flex flex-col justify-between">
            <div>
              <span className="text-4xl">👴👵</span>
              <span className="inline-block mt-3 px-2.5 py-0.5 rounded-full text-xs font-bold bg-secondary/15 text-secondary">
                Secondary
              </span>
              <p className="font-display font-bold text-lg text-foreground mt-2">
                Grandparents & Caregivers
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Extended family trusted by parents to manage playdates
              </p>
            </div>
          </div>
        </div>

        {/* Positioning Statement */}
        <div
          ref={posRef as React.RefObject<HTMLDivElement>}
          className={`rounded-3xl overflow-hidden transition-all duration-700 ${posVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          <div className="relative bg-gradient-to-br from-[oklch(0.18_0.04_250)] to-[oklch(0.22_0.06_270)] p-10 md:p-14">
            <div className="absolute top-4 right-4 text-6xl opacity-10 font-display font-black select-none">
              POS
            </div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-5">
              Positioning Statement
            </p>
            <p className="font-display font-bold text-xl md:text-3xl text-white leading-snug">
              For{" "}
              <span className="text-[oklch(0.85_0.18_13)]">
                conscious Millennial parents
              </span>
              , Only Pals is the{" "}
              <span className="text-[oklch(0.8_0.15_170)]">
                trust-first playdate platform
              </span>{" "}
              that enables safe, meaningful childhood connections —{" "}
              <span className="text-[oklch(0.82_0.14_245)]">
                unlike social media
              </span>{" "}
              that prioritizes engagement over wellbeing.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
