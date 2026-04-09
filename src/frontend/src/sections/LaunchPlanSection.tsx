import { Chip, Section } from "@/components/SectionUtils";

const phases = [
  {
    number: "01",
    name: "Pre-Launch",
    dateRange: "Week 1 – 4",
    gradient: "from-[oklch(0.6_0.2_13)] to-[oklch(0.68_0.18_60)]",
    ringColor: "ring-[oklch(0.6_0.2_13)]",
    dotColor: "bg-[oklch(0.6_0.2_13)]",
    badge: "bg-[oklch(0.6_0.2_13)]/10 text-[oklch(0.42_0.16_13)]",
    steps: [
      {
        icon: "🔮",
        text: "Teaser campaign across social: cryptic visuals, countdown timer",
      },
      {
        icon: "🌱",
        text: "Seed 50 top parenting influencers with early access + briefing kit",
      },
      {
        icon: "📋",
        text: "Launch waitlist page — goal: 50,000 sign-ups before Day 0",
      },
      {
        icon: "📰",
        text: "Press embargo: brief 15 tier-1 journalists for launch day coverage",
      },
    ],
  },
  {
    number: "00",
    name: "Launch Day",
    dateRange: "Day 0",
    gradient: "from-[oklch(0.58_0.13_170)] to-[oklch(0.72_0.15_245)]",
    ringColor: "ring-[oklch(0.58_0.13_170)]",
    dotColor: "bg-[oklch(0.58_0.13_170)]",
    badge: "bg-[oklch(0.58_0.13_170)]/10 text-[oklch(0.38_0.12_170)]",
    isHero: true,
    steps: [
      {
        icon: "🎊",
        text: "Live launch event in Mumbai, Delhi & Bangalore simultaneously",
      },
      {
        icon: "📡",
        text: "24-hour media blast: interviews, press releases, social surge",
      },
      {
        icon: "🎁",
        text: "Exclusive early access drops every hour — creating FOMO & buzz",
      },
      {
        icon: "🔴",
        text: "Live stream: founder story + first real playdate made on the app",
      },
    ],
  },
  {
    number: "02",
    name: "Post-Launch",
    dateRange: "Week 1 – 8",
    gradient: "from-[oklch(0.72_0.15_245)] to-[oklch(0.75_0.16_85)]",
    ringColor: "ring-[oklch(0.72_0.15_245)]",
    dotColor: "bg-[oklch(0.72_0.15_245)]",
    badge: "bg-[oklch(0.72_0.15_245)]/10 text-[oklch(0.42_0.13_245)]",
    steps: [
      {
        icon: "🔥",
        text: "Community activation: onboard 1,000 parent groups in 8 weeks",
      },
      {
        icon: "📣",
        text: "PR follow-up stories: early success metrics + emotional testimonials",
      },
      {
        icon: "📊",
        text: "Weekly dashboard review: CAC, retention, NPS, playdate completions",
      },
      {
        icon: "🤝",
        text: "Activate school & pediatrician partnerships for referral pipeline",
      },
    ],
  },
];

export function LaunchPlanSection() {
  return (
    <Section id="launch" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Chip color="accent">Product Launch</Chip>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mt-4 mb-3">
            Launch Plan
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            A three-phase rollout designed to build anticipation, explode on Day
            0, and sustain momentum.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connector line — hidden on mobile */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-[oklch(0.6_0.2_13)] via-[oklch(0.58_0.13_170)] to-[oklch(0.72_0.15_245)] mx-20 z-0" />

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {phases.map((phase) => (
              <div
                key={phase.number}
                data-ocid={`launch-phase-${phase.number}`}
                className={`card-warm overflow-hidden flex flex-col ${phase.isHero ? `ring-2 ring-offset-2 ${phase.ringColor} scale-[1.03]` : ""}`}
              >
                {/* Gradient top strip */}
                <div className={`h-2 bg-gradient-to-r ${phase.gradient}`} />

                {/* Phase number circle */}
                <div className="flex flex-col items-center pt-7 pb-4 px-6">
                  <div
                    className={`w-14 h-14 rounded-full bg-gradient-to-br ${phase.gradient} flex items-center justify-center shadow-lg mb-4`}
                  >
                    <span className="font-display font-bold text-lg text-white">
                      {phase.number}
                    </span>
                  </div>

                  {phase.isHero ? (
                    <div className="text-center mb-2">
                      <p
                        className={`inline-flex items-center px-3 py-0.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-2 ${phase.badge}`}
                      >
                        🚀 {phase.dateRange}
                      </p>
                      <h3 className="font-display font-bold text-3xl text-foreground">
                        LAUNCH DAY
                      </h3>
                    </div>
                  ) : (
                    <div className="text-center mb-2">
                      <p
                        className={`inline-flex items-center px-3 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wide mb-2 ${phase.badge}`}
                      >
                        {phase.dateRange}
                      </p>
                      <h3 className="font-display font-bold text-xl text-foreground">
                        {phase.name}
                      </h3>
                    </div>
                  )}
                </div>

                {/* Steps */}
                <div className="px-6 pb-7 flex-1">
                  <ul className="space-y-3">
                    {phase.steps.map((s) => (
                      <li key={s.text} className="flex items-start gap-3">
                        <span
                          className={`w-2 h-2 rounded-full mt-2 shrink-0 ${phase.dotColor}`}
                        />
                        <span className="text-sm text-muted-foreground leading-relaxed flex items-start gap-1.5">
                          <span className="text-base shrink-0">{s.icon}</span>
                          {s.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom stat strip */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "50K", label: "Waitlist Target", emoji: "📋" },
            { value: "3", label: "City Launch Events", emoji: "🎊" },
            { value: "8 Weeks", label: "Community Activation", emoji: "🔥" },
            { value: "1,000+", label: "Parent Groups", emoji: "👥" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="card-warm p-4 flex flex-col items-center text-center gap-1"
            >
              <span className="text-2xl">{stat.emoji}</span>
              <p className="font-display font-bold text-2xl text-foreground">
                {stat.value}
              </p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
