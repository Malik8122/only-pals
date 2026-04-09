import { Chip, Section } from "@/components/SectionUtils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

const pillars = [
  {
    id: "digital",
    label: "Digital Marketing",
    pct: 45,
    budget: "₹4.5 Cr",
    color: "border-l-[oklch(0.6_0.2_13)]",
    badgeBg: "bg-[oklch(0.6_0.2_13)]/10 text-[oklch(0.48_0.18_13)]",
    barColor: "bg-[oklch(0.6_0.2_13)]",
    emoji: "📱",
    tactics: [
      {
        icon: "🎯",
        text: "Performance ads on Meta & Google targeting millennial parents",
      },
      {
        icon: "🎬",
        text: "Short-form video content: real playdate stories, parent reels",
      },
      {
        icon: "✍️",
        text: "SEO-driven blog & parenting guides to build organic trust",
      },
      {
        icon: "📧",
        text: "Email nurture sequences with safety tips & community highlights",
      },
    ],
  },
  {
    id: "influencer",
    label: "Influencer Marketing",
    pct: 22,
    budget: "₹2.2 Cr",
    color: "border-l-[oklch(0.58_0.13_170)]",
    badgeBg: "bg-[oklch(0.58_0.13_170)]/10 text-[oklch(0.42_0.12_170)]",
    barColor: "bg-[oklch(0.58_0.13_170)]",
    emoji: "🌟",
    tactics: [
      {
        icon: "👩‍👧",
        text: "50 parenting macro-influencers sharing authentic playdate moments",
      },
      {
        icon: "🎙️",
        text: "200 micro-creators (10K-100K) for neighborhood-level relatability",
      },
      {
        icon: "🎥",
        text: "Long-form YouTube docu-style videos: 'A day in our Only Pals life'",
      },
      { icon: "📖", text: "User-generated story campaigns: #MyChildsFirstPal" },
    ],
  },
  {
    id: "outdoor",
    label: "Outdoor Marketing",
    pct: 13,
    budget: "₹1.3 Cr",
    color: "border-l-[oklch(0.72_0.15_245)]",
    badgeBg: "bg-[oklch(0.72_0.15_245)]/10 text-[oklch(0.48_0.13_245)]",
    barColor: "bg-[oklch(0.72_0.15_245)]",
    emoji: "🏙️",
    tactics: [
      {
        icon: "🛝",
        text: "Emotional storytelling hoardings at parks & playgrounds in 10 cities",
      },
      {
        icon: "🏫",
        text: "School gate activations: branded activity kits + app demo stations",
      },
      {
        icon: "🏘️",
        text: "Society notice boards & apartment building elevator wraps",
      },
      {
        icon: "🎪",
        text: "Weekend pop-ups at malls: live playdate matching experience",
      },
    ],
  },
  {
    id: "pr",
    label: "PR Campaigns",
    pct: 12,
    budget: "₹1.2 Cr",
    color: "border-l-[oklch(0.68_0.18_60)]",
    badgeBg: "bg-[oklch(0.68_0.18_60)]/10 text-[oklch(0.5_0.16_60)]",
    barColor: "bg-[oklch(0.68_0.18_60)]",
    emoji: "📢",
    tactics: [
      {
        icon: "🚀",
        text: "National launch press conference with live playdate demo",
      },
      {
        icon: "📰",
        text: "Tier-1 editorial coverage: TOI, NDTV, Hindu, Mint, Economic Times",
      },
      {
        icon: "🎙️",
        text: "Founder on parenting & startup podcasts: 20+ appearances",
      },
      {
        icon: "🏆",
        text: "Award submissions: EdTech India, Social Impact Startups 2026",
      },
    ],
  },
  {
    id: "community",
    label: "Community & Partnerships",
    pct: 8,
    budget: "₹0.8 Cr",
    color: "border-l-[oklch(0.75_0.16_85)]",
    badgeBg: "bg-[oklch(0.75_0.16_85)]/10 text-[oklch(0.52_0.14_85)]",
    barColor: "bg-[oklch(0.75_0.16_85)]",
    emoji: "🤝",
    tactics: [
      {
        icon: "🏥",
        text: "Partnerships with 500+ pediatricians recommending the platform",
      },
      {
        icon: "🏫",
        text: "MoUs with CBSE/ICSE schools for integration into social curriculum",
      },
      {
        icon: "👥",
        text: "Parent WhatsApp & Facebook group ecosystem: 1000 communities",
      },
      {
        icon: "🎓",
        text: "Child psychologist advisory board for trust validation",
      },
    ],
  },
];

export function MarketingStrategySection() {
  const [openItem, setOpenItem] = useState<string>("digital");

  return (
    <Section id="strategy" className="py-20 px-4 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <Chip color="primary">Marketing Strategy</Chip>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mt-4 mb-3 leading-tight">
            <span className="text-5xl mr-2">₹</span>10 Crore Campaign Budget
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            A multi-channel approach that meets parents where they are — online,
            offline, and in community.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Bar Chart */}
          <div className="lg:col-span-2 card-warm p-6 space-y-4">
            <p className="font-display font-semibold text-foreground text-base mb-5">
              Budget Allocation
            </p>
            {pillars.map((p) => (
              <div key={p.id} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-foreground flex items-center gap-1.5">
                    <span>{p.emoji}</span> {p.label}
                  </span>
                  <span className="font-bold text-foreground">{p.pct}%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ${p.barColor}`}
                    style={{ width: `${p.pct}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground text-right">
                  {p.budget}
                </p>
              </div>
            ))}
          </div>

          {/* Accordion */}
          <div className="lg:col-span-3">
            <Accordion
              type="single"
              collapsible
              value={openItem}
              onValueChange={(v) => setOpenItem(v ?? "")}
              className="space-y-3"
            >
              {pillars.map((p) => (
                <AccordionItem
                  key={p.id}
                  value={p.id}
                  className={`card-warm border-l-4 ${p.color} overflow-hidden`}
                  data-ocid={`strategy-${p.id}`}
                >
                  <AccordionTrigger className="px-5 py-4 hover:no-underline">
                    <div className="flex items-center gap-3 flex-1 text-left">
                      <span className="text-2xl">{p.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <p className="font-display font-semibold text-foreground text-base">
                          {p.label}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {p.pct}% of total budget
                        </p>
                      </div>
                      <span
                        className={`text-sm font-bold px-3 py-1 rounded-full mr-2 ${p.badgeBg}`}
                      >
                        {p.budget}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-5">
                    <ul className="space-y-2.5 mt-1">
                      {p.tactics.map((t) => (
                        <li key={t.text} className="flex items-start gap-3">
                          <span className="text-lg mt-0.5 shrink-0">
                            {t.icon}
                          </span>
                          <span className="text-sm text-muted-foreground leading-relaxed">
                            {t.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </Section>
  );
}
