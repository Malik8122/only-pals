import { Chip, Section } from "@/components/SectionUtils";

const campaigns = [
  {
    id: "empty-swing",
    name: "The Empty Swing",
    tagline: "A seat saved for a friend who hasn't arrived yet.",
    emoji: "🛕",
    gradient: "from-[oklch(0.6_0.2_13)] to-[oklch(0.68_0.18_60)]",
    badgeColor: "bg-[oklch(0.6_0.2_13)]/15 text-[oklch(0.42_0.16_13)]",
    image:
      "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?w=600&q=80",
    tactics: [
      {
        icon: "📲",
        text: "QR codes on park swings → digital profile of a lonely child",
      },
      { icon: "💔", text: "Viral art installation toured across 10 cities" },
    ],
  },
  {
    id: "find-your-pal",
    name: "#FindYourPal Challenge",
    tagline: "Your first playdate memory is someone's future.",
    emoji: "🤗",
    gradient: "from-[oklch(0.58_0.13_170)] to-[oklch(0.72_0.15_245)]",
    badgeColor: "bg-[oklch(0.58_0.13_170)]/15 text-[oklch(0.38_0.12_170)]",
    image:
      "https://images.unsplash.com/photo-1576671081837-49000212a370?w=600&q=80",
    tactics: [
      {
        icon: "📸",
        text: "Parents post first playdate memory → share with #FindYourPal",
      },
      {
        icon: "🎁",
        text: "Top stories featured on Only Pals — brand co-created by parents",
      },
    ],
  },
  {
    id: "kindness-report",
    name: "Report Card for Kindness",
    tagline: "Grade what really matters — being a good friend.",
    emoji: "🌟",
    gradient: "from-[oklch(0.72_0.15_245)] to-[oklch(0.75_0.16_85)]",
    badgeColor: "bg-[oklch(0.72_0.15_245)]/15 text-[oklch(0.42_0.13_245)]",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80",
    tactics: [
      {
        icon: "🏫",
        text: "Partner with 200 schools to issue kindness scorecards",
      },
      {
        icon: "🏅",
        text: "Monthly recognition for 'Kindness Champions' shared on app",
      },
    ],
  },
];

export function PRCampaignsSection() {
  return (
    <Section id="pr" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <Chip color="secondary">PR Campaigns</Chip>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mt-4 mb-3">
            Campaigns That Move Hearts
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Three big ideas built to spark national conversation, earn media,
            and create emotional impact.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-7">
          {campaigns.map((c) => (
            <div
              key={c.id}
              data-ocid={`pr-campaign-${c.id}`}
              className="card-warm overflow-hidden group hover:-translate-y-2 transition-smooth cursor-default"
            >
              {/* Image + Gradient Header */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={c.image}
                  alt={c.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${c.gradient} opacity-60`}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white gap-2 p-4">
                  <span className="text-5xl drop-shadow-lg">{c.emoji}</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 space-y-3">
                <span
                  className={`inline-flex items-center px-3 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wide ${c.badgeColor}`}
                >
                  PR Idea
                </span>
                <h3 className="font-display font-bold text-xl text-foreground leading-snug">
                  {c.name}
                </h3>
                <p className="text-sm text-muted-foreground italic leading-relaxed">
                  "{c.tagline}"
                </p>
                <ul className="space-y-2 pt-1">
                  {c.tactics.map((t) => (
                    <li key={t.text} className="flex items-start gap-2.5">
                      <span className="text-base shrink-0 mt-0.5">
                        {t.icon}
                      </span>
                      <span className="text-sm text-muted-foreground leading-snug">
                        {t.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
