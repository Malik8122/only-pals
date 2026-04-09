# Design Brief — Only Pals

**Purpose**: Trust-first playdate and emotional connection platform for children and parents. Showcase/landing site with premium agency pitch aesthetic.

**Tone**: Warm, emotionally intelligent, child-friendly, modern, storytelling-driven with visual hierarchy over text.

**Differentiation**: Color-cycling animated hero gradient, hand-drawn illustration integration, soft-rounded minimalism, emotional color labeling on palette, generative geometric backgrounds.

---

## Color Palette

| Token | OKLCH | Usage | Emotion |
|-------|-------|-------|---------|
| Primary | 0.6 0.2 13 (coral/peach) | CTAs, headlines, trust markers | Warmth, safety, approachable |
| Secondary | 0.58 0.13 170 (sage green) | Accents, balance, secondary CTAs | Growth, calm, connection |
| Accent | 0.72 0.15 245 (sky blue) | Highlights, icons, interactive states | Play, openness, trust |
| Chart-4 | 0.68 0.18 60 (warm yellow) | Emotional callouts, joy moments | Happiness, wonder |
| Neutral-Muted | 0.88 0.01 0 (off-white) | Cards, secondary surfaces | Softness, breathing room |
| Foreground | 0.18 0.01 250 (deep ink) | Body text, primary content | Clarity, legibility |

**Gradient**: Coral → Sage Green → Sky Blue → Warm Yellow (135deg, animation: 8s loop on hero).

---

## Typography

| Role | Font | Scale | Weight | Use Case |
|------|------|-------|--------|----------|
| Display | Bricolage Grotesque | 48–72px | 700, 600 | Headlines, hero titles, section markers |
| Body | Figtree | 16–18px | 400, 500 | Body text, descriptions, CTAs |
| Mono | System | 12–14px | 400 | Code snippets, data (if needed) |

**Line Height**: 1.6 body, 1.2 display. **Letter Spacing**: +0.5px on display.

---

## Structural Zones

| Zone | Surface | Border | Shadow | Intent |
|------|---------|--------|--------|--------|
| Header/Nav | Transparent or bg-card @ 30% | Bottom border-subtle | None | Navigation clarity, minimal visual weight |
| Hero | gradient-primary (animated) | None | None | Emotional impact, color cycling motion |
| Content Section | bg-background | None | None | Primary reading space |
| Card Container | bg-card | border-border | shadow-sm hover:shadow-md | Elevation, interactivity cue |
| CTA Zone | bg-secondary (soft) | border-border | shadow-sm | Action encouragement |
| Footer | bg-muted @ 40% | border-t | None | Context containment |

---

## Spacing & Rhythm

- **Base Unit**: 1.25rem (20px)
- **Content Max-Width**: 1200px, centered
- **Padding**: Hero 60–80px, sections 40–60px, cards 24–32px
- **Gap**: 24px between major sections, 16px within card groups

---

## Component Patterns

- **Buttons**: 12px padding top/bottom, 24px left/right, rounded-xl (border-radius 12px), transition-smooth
- **Cards**: rounded-2xl (border-radius 20px), bg-card, border-border, shadow-sm
- **Inputs**: rounded-lg, bg-input, border-border, focus:ring-ring
- **Typography**: text-heading (display, bold), text-body (body, 16px)

---

## Motion & Animation

- **Fade-In**: 0.6s ease-out on section entry (scroll trigger)
- **Float-Slow**: 6s infinite on decorative elements (subtle Y-translate)
- **Pulse-Soft**: 4s infinite on call-to-action buttons (opacity pulse)
- **Hero Gradient**: 8s loop animation cycling through 4 colors
- **Card Hover**: shadow-sm → shadow-md, 0.3s transition-smooth
- **No Bouncy Animations**: Cubic-bezier smooth curves preferred over bounce easing

---

## Imagery & Visual Language

- **Hero Background**: Animated color-cycling gradient (coral → sage → sky blue → yellow)
- **Decorative Elements**: Soft geometric shapes (circles, soft polygons), semi-transparent overlays
- **Section Dividers**: Hand-drawn style illustrations representing connection, trust, play, growth
- **Illustrations**: Character avatars, parent-child moments, playdate scenarios (warm, inclusive, illustrated not photographic)
- **Color Swatches**: Inline palette cards with emotional labels (e.g., "Trust," "Growth," "Play")

---

## Constraints & Anti-Patterns

❌ No harsh shadows or glows. ❌ No neon or garish colors. ❌ No bouncy animations. ❌ No thin typography on colored backgrounds without sufficient contrast. ❌ No centered text blocks longer than 2 lines (except body copy). ✅ Always use semantic color tokens. ✅ Generous whitespace favored over information density. ✅ Illustration prioritized over photography.

---

## Accessibility

- **Contrast**: AA+ on all text (min 0.7 lightness diff on light, min 0.6 on dark)
- **Motion**: Respect `prefers-reduced-motion` for animations
- **Keyboard**: Focus rings visible, outline: 2px solid primary
- **Alt Text**: All illustrations and decorative images labeled for screen readers

---

## Signature Detail

**Color-Cycling Hero Gradient Animation**: The hero background loops through the four brand colors (coral, sage, sky blue, warm yellow) over 8 seconds, creating a dynamic, emotionally resonant entry point that embodies the platform's core values: warmth (coral), growth (sage), trust (sky), and joy (yellow).

