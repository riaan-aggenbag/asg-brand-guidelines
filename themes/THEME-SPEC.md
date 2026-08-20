# ASG Theme Specification — Option 4 · CMS × Ink Edition

**African Safari Group · Corporate Identity & Design System — the single pointer document.**

| | |
|---|---|
| **Reflects** | ASG Brand Guidelines **v1.3** · August 2026 |
| **System** | **Option 4 (CMS × Ink)** — the official ASG system across brand book, web/CMS, and email |
| **Themes package** | v1.1.2 · Generated 2026-08-20 (rev. R3) |
| **Custodian** | Riaan Aggenbag, CEO |
| **Companion file** | `design-tokens.json` (machine-readable; CSS variable names match the shipping export exactly) |
| **Spec marker** | `ASG-THEMES-V13-20260820-R4` |

**Who this is for.** Any designer, developer, agency, or printer producing anything carrying the ASG name — websites, emails, social profiles, brochures, itineraries, decks, stationery. If you are briefed on ASG work, this document and `design-tokens.json` are your contract. Nothing outside them is on-brand.

---

## 0. If You Read Nothing Else

1. **Two typefaces:** Lora (headlines only) and Poppins (everything else, including every numeral). Never a third face.
2. **One accent:** Safari Brass `#A8794B`. It always carries **white text**. It is a fitting, not a floor — never a background.
3. **The ratio:** 60% Ink/Charcoal · 30% Ivory/White · 10% Brass. Always.
4. **The voice:** specific over superlative. Declarative sentences. No exclamation points. No emoji. Never salesy.
5. **The crest is fixed:** never redrawn, recoloured, stretched, shadowed, or cropped.
6. **Restraint is the luxury signal:** generous negative space, one primary CTA per view, hairline borders, near-square corners. Density reads as cheap.

The brand character in one line: **dark, restrained, editorial luxury — closer to Aman or Singita than a travel agency.**

---

## 1. Decisions of Record

These are settled. They are not open for reinterpretation per project.

| Date | Decision |
|---|---|
| 13 Aug 2026 | **Option 4 (CMS × Ink) is the official ASG web/CMS system.** All other options retired. One colour system across brand book, web, and email. |
| 13 Aug 2026 | **Pale gold `#C8A96E` is retired** with Option 3 (its dark-text contrast rule retired with it). Zero-match verified in shipping code. |
| 13 Aug 2026 | **Banned rate claims:** never "book direct", "the lodge's own rate", "no markup" — ASG sells under STO agreements and is not the lodge. Approved claims: **best price guarantee · contracted rates · no booking fees**. |
| Aug 2026 | **Brass small-fill exception:** solid brass fills carrying text **under 12px** step the *fill* down to Deep Brass `#8E6238` (`--asg-brass-600`). All brass at 12px+ stays `#A8794B`. **The fill adapts, never the text colour.** |
| Aug 2026 | **Badge Green `#4F6B51` role extended** from sightings/inclusion status to savings signals (SAVE chips). |
| 15 Aug 2026 | **Lodge template canon:** props bar is four cells in fixed order; the gallery is exactly five index-consistent tiles; rooms are a two-column grid with per-room images; FAQ answers are unique per page with mandatory FAQPage JSON-LD. |
| 15 Aug 2026 | **Chrome canon:** the "Part of African Safari Group" endorsement line is mandatory on every sub-brand footer (CMS included); nav-handoff + scrollspy are the standard page behaviours; guest-facing deployments never ship a feedback widget or third-party badge. |
| 15 Aug 2026 | **Rate-claim hygiene:** any assurance-row claim outside the approved set is removed unless T&Cs back it and it carries a footnote. |
| 18 Aug 2026 | **Master lodge template shipped.** `asg_master_lodge_template_woodbury_option4_ink_edition.html` — marker `ASG-LODGE-MASTER-OPT4INK-20260818-R1`, sha256 head `724AC63234434F61`, 124,048 bytes. The static master (Option 4 Ink) every lodge and standalone page clones — **not** the CMS build. Nine patterns + four deviations folded to §8; the confirmations below recorded from it. |
| 18 Aug 2026 | **Travellers' Choice 2026 is an ASG-level award.** ASG awards appear only in ASG proof rows — TrustRow, the WhyBook accreditation row, the footer — never in a lodge's quick-facts, FAQ, or lodge-scoped copy. |
| 18 Aug 2026 | **WhatsApp entry points ship as bound placeholders** (`data-bind="contact.whatsapp"`) until a WhatsApp Business number exists — never hardcoded. Applies to the PriceCard, the contact banner, and the enquiry "reach me by" chip. |
| 18 Aug 2026 | **Reviews pattern approved** (Ink Edition; static reference `asg_reviews_pattern_ink_edition.html`): ReviewCard + RatingSummary + the tabbed three-source `/reviews/` page (§8.2). Reviews display through the **licensed Elfsight widget**; static rendering is a design reference only, swapped for the live widget on rebuild — one lodge at a time, never retrofitted across the live estate. Counts bound, never hardcoded; stars are partial-fill SVG under the rounding rule; the `/10` chip is Deep Brass. |
| 20 Aug 2026 | **Platform ruling.** ASG sites are built with **Astro, hosted on Cloudflare Pages/Workers** — one shared codebase per portfolio, lodge/rate/content data injected from a central database **at build time**, output is static HTML/CSS with minimal vanilla JS from the edge. No WordPress, no on-site CMS admin, no plugins. The Replit demo is a **visual reference only** — its code is not reused and it is not the hosting model. |
| 20 Aug 2026 | **Currency ruling (supersedes the R2 switcher row entirely).** Rates render in the **native currency of the rate sheet only** — ZAR for South African lodges (all Amakhala), USD where the sheet is USD-denominated (most East Africa & Botswana). **No visitor-currency conversion of any kind** — not IP-at-render, not build-time variants, not a client-side switcher. One rate sheet, one currency, rendered as stored. Bind the price field (DB-injected at build), never hardcode; placeholders obviously fake in the component's native currency (`R 00,000` / `$0,000` / `{{rate_pppn}}`). Prices stay Poppins. |
| 20 Aug 2026 | **Rates verified at load — ledger D-048** (Site Factory `f04ef53`). A Pimcore rate row loaded by the product team from the STO agreement is a legitimate, displayable rack rate — **loading is the verification**; there is no separate certification ceremony. **Validity rule, per row:** a row displays while today falls within its validity window; a future-dated window displays as a **forthcoming season**; a lapsed, undated, or malformed window fails validity and renders **enquire for that row only — never blocking the lodge**. A 12-month re-verification backstop applies. **Only STO-loaded Pimcore rows are a rate source — supplier public-site prices are never a source.** **From-line rule:** a From-price renders only when a validity-passing row backs it, and is suppressed otherwise; **Woodbury Manor's From-line is permanently suppressed** (no rate structure exists). |
| 20 Aug 2026 | **Budget-step currency select is consultation data, not display.** The currency `select` in the EnquiryStepper's Budget step captures the client's own budget currency as lead-qualification data. It **survives the native-currency ruling** and **must never be conflated with the removed on-site switcher**: it sets nothing on the page, converts nothing, and renders no rate. |
| 18 Aug 2026 | **Response-time promise:** "within 15 minutes in working hours" everywhere. The old "24 hours" is retired; the page never prints "24/7" (see §6). |
| Standing | **No new accent colours, ever.** Safari Brass is the only accent. |
| Standing | Canonical brand book is **v1.3**; every design-system export stamps "Reflects ASG Brand Guidelines v1.3". Next deliberate bump: v1.4. |

---

## 2. Identity & Principles

**Positioning:** Premier inbound travel agent. Luxury, consultation-led, never self-service. A person, not a funnel.

| Principle | Meaning |
|---|---|
| Restraint | Space and silence do the work |
| Precision | Specific detail over adjectives |
| Warmth | Authoritative, never cold |
| Consistency | One brass, one crest, everywhere |

**Two operating models, one identity:** (1) enquiry/consultation-led sites — the flagship and destination/reserve microsites; (2) ASG Direct Bookings. Every property shares one crest and serif setting; only the wordmark changes, and every sub-brand carries "Part of African Safari Group".

---

## 3. Colour

### 3.1 The Palette

| Name | Hex | CSS var | Role |
|---|---|---|---|
| ASG Ink | `#171411` | `--asg-ink` | Primary ground — heroes, headers, nav, footers |
| Charcoal | `#2B2622` | `--asg-charcoal` | Secondary dark surface; dark-section info cards |
| Soft Charcoal | `#4A443C` | `--asg-soft-charcoal` | Body copy on light backgrounds |
| **Safari Brass** | **`#A8794B`** | `--asg-brass` | **The single accent** — CTAs, links, rule-lines. White text, always |
| Deep Brass | `#8E6238` | `--asg-brass-600` | Press/active state; sub-12px solid-fill exception |
| Heritage Sand | `#C39F77` | `--asg-heritage-sand` | Secondary tone — tints, "Often" badges (ink text), month-grid Good |
| Warm Ivory | `#F6F1EA` | `--asg-warm-ivory` | Light editorial ground — body, cards, email backgrounds |
| Ivory Dim | `#EFE7DB` | `--asg-ivory-200` | Secondary light surface, hairlines |
| Bone | `#B9AFA2` | `--asg-bone` | Borders/dividers on light; month-grid Fair |
| Badge Green | `#4F6B51` | `--asg-badge-green` | Status + savings — "Most drives", "Included", SAVE chips. White text |
| White | `#FFFFFF` | `--asg-white` | Raised light surface; text on brass/green/ink |

Extended scales (ink 900/800/700, charcoal 600/500, brass 600/500/400, alphas, scrims) live in `design-tokens.json` under `color.scale`, `color.alpha`, `color.scrim`.

### 3.2 The 60 / 30 / 10 Rule — Always

- **60% Ink & Charcoal** — the dominant dark ground
- **30% Ivory & White** — breathing room, light editorial areas
- **10% Brass** — one primary CTA, key numerals, active states, the rule-line

**Brass is a fitting, not a floor.** As a large ground it reads as cheap gold; used sparingly it signals luxury.

### 3.3 Contrast Rules (hard-won — do not regress)

1. **Brass takes white text** (`--text-on-brass: #FFFFFF`) in both dark and light themes. No exceptions.
2. **Sub-12px brass fills** step the fill to Deep Brass `#8E6238` to preserve white-text contrast. The fill adapts, never the text colour.
3. **Hover moves brass lighter** (`--asg-brass-400 #BB9165`); **press moves brass darker** (`--asg-brass-600 #8E6238`). No shrink on press.
4. **Heritage Sand and pale tones at small text sizes take dark/Ink text** (verified in `SightingsBadge`: sand ground, ink text).
5. **Links on light grounds use Deep Brass `#8E6238`**, not base brass — contrast.
6. **MUTED_DARK-type tones (`#A89D8C` family) are never text on light backgrounds** — too weak. Muted text on light is `--text-muted-ink #7A7166` minimum; `--text-faint` is decorative captions only.
7. Dark-section info cards sit on **Charcoal `#2B2622`** (not near-Ink) with border `rgba(255,255,255,.11)`.
8. Text over photography always sits on a **dark bottom-up scrim** (`--scrim-bottom`) — never bare.

### 3.4 Retired & Banned

| Item | Status |
|---|---|
| Pale gold `#C8A96E` | **Retired 13 Aug 2026** with Option 3. Never use, any surface, any size. Its opposite contrast rule (dark text on gold) died with it. |
| Any new accent colour | **Banned permanently.** Brass is the only accent. |
| Bright colours, neon, gradients as decoration, heavy drop-shadows | Banned. Feedback colours are warm and muted (`--success #6E8A5A`, `--warning #C08A3E`, `--danger #B5524A`), never neon. |

---

## 4. Typography

### 4.1 Two Typefaces Only — Never Substitute

| Font | Role | Weights |
|---|---|---|
| **Lora** (serif) | Display & headlines only | 400 / 500 / 600 + italic |
| **Poppins** (sans) | Body, UI, labels, nav, buttons, **all numerals** | 400 / 500 / 600 / 700 |

Never Arial, Times, or a decorative font as a chosen face. (The production fallback stacks — `Georgia, "Times New Roman", serif` and `system-ui, "Segoe UI", sans-serif` — are graceful degradation only.) Both brand fonts are self-hosted woff2 in the export (`assets/fonts/`).

**The one exception:** the PriceCard From-price is the system's sole serif-numeral moment. Everywhere else, numerals are Poppins — prices, night counts, percentages, reply times.

### 4.2 Scale

Fluid web scale (tokens): Display `clamp(2.75rem → 4.5rem)` · H1 `clamp(2.25rem → 3.25rem)` · H2 `clamp(1.75rem → 2.5rem)` · H3 `1.5rem` · H4 `1.25rem` · Lead `1.1875rem` · Body `1rem` · Caption `0.8125rem` · Eyebrow `0.75rem` · Micro `0.6875rem`.

Print/document guidance: H1 26–38pt · H2 20–22pt · Body 12–13.5pt · Caption 8–9pt.

Line heights: display 1.04 · heading 1.12 · body 1.65. Tracking: eyebrows `0.22em` caps · buttons `0.06em` · wordmark `0.34em`.

### 4.3 Type Rules

- Headlines short — **six to nine words**. **One serif moment per view.**
- Body line length **60–75 characters** (`--measure: 68ch`).
- **Tracked caps for eyebrows and labels only** — never body text, never below ~9pt.
- Eyebrows: Poppins Medium, tracked caps, Brass.
- Prices in Rand: `R 14,500` — space after R, thousands comma.

---

## 5. Logo

**The mark:** lion crest + tracked serif wordmark. **The crest is never redrawn.** Icon-only mark uses the full mane, correct crop (fixed v1.1; v1.2 canonical).

| Lockup | Use |
|---|---|
| Stacked (master) | Covers, formal documents, square formats, avatars |
| Horizontal | Website nav, letterhead headers (preferred for headers) |
| Crest only | Favicons, stamps, tight spaces — only where the full name reads nearby |

**Approved grounds (only these):** white crest on Ink `#171411` · ink crest on Ivory `#F6F1EA` · white crest on Brass `#A8794B` · crest on Heritage Sand `#C39F77`.

**Clear space:** crest height on all sides. **Minimum sizes:** stacked 32px / 12mm · horizontal 28px / 24mm wide · crest 20px / 8mm.

**Never:** stretch, rotate, shadow, recolour outside approved grounds, watermark at low opacity, box in a coloured shape, crop the crest, brass crest on light grounds, reset the wordmark in another face.

**Sub-brands** (Sabi Sand, Amakhala, SafariBookNow, and future properties): same crest, same serif setting — only the wordmark changes. Footer always carries **"Part of African Safari Group"**.

Assets: `brand-books/ASG_Design_System_Assets.zip` and `ASG_Design_System_Complete/assets/logos/`.

---

## 6. Voice & Copy

Write like the specialist a client is grateful to have found — **authoritative, warm, restrained**. Confidence through precision and space, never volume.

**Mechanics**

- **"We"** for ASG, **"you"** for the guest. Lead with what the guest experiences.
- **Declarative sentences.** Short, certain. "Three nights gives you the best odds."
- **Specific beats superlative.** Name the lodge, the season, the sighting odds.
- **No exclamation points. No emoji. Ever.**
- Numerals carry the weight — prices, sighting percentages, night counts, reply times.

**Banned guest-facing language:** "cross-sell", "upsell", any sales-mechanics jargon · "dream", "unforgettable", "incredible", "amazing", "adventure of a lifetime" · "book direct", "the lodge's own rate", "no markup".

**Fixed labels & formats**

- Cross-promotion sections are titled **"More of the Reserve"** (e.g. heading "Other lodges in Amakhala"). This label is fixed.
- Rate claims: only **best price guarantee · contracted rates · no booking fees**.
- Temperatures always dual-unit, **Celsius first**: `8–22 °C (46–72 °F)` — panels and running copy alike.
- **Sightings honesty is a voice feature:** plain probability language — "Leopard — Rarely · elusive". Never promise a sighting.
- **Operational promises are written to the literal truth, never rounded up.** Support is "reachable while you travel"; the enquiry first-reply is "within 15 minutes in working hours." ASG support is strong but not literally 24/7, so the page never prints "24/7" or "24 hours". Specific-over-superlative governs operational claims, not just adjectives.

**Worked example**

- ✗ "Experience the adventure of a lifetime on this dream safari!"
- ✓ "Sabi Sand has the highest leopard-sighting density in Africa. Three nights gives you the best odds."

---

## 7. Layout, Surfaces & Motion

**Default theme is dark (Ink Edition).** The Light Edition is the same palette on inverted ground, shipping as a `[data-theme="light"]` layer — a theme, not a separate system.

**The Editorial Blend** (flagship/CMS page recipe): dark chrome bookends a layered light body — Ink nav/hero, Ivory reading body, Ink footer.

- Containers: content 1200px · wide 1440px · text 720px · gutter `clamp(1.25rem, 5vw, 4rem)`.
- Spacing scale: 0.25rem steps to 8rem; sections breathe at `--space-9` (6rem).
- **Near-square corners** (2–6px working range; 10px large surfaces; FactPill's 22px is the exception). **Hairline borders** (1px); the brass rule-line is 2px.
- Shadows are deep and warm on dark, soft on ivory — never heavy decorative drop-shadows.
- Motion: standard ease `cubic-bezier(0.22, 0.61, 0.36, 1)`, 140/240/420ms durations, 720ms reveals. Calm, never bouncy.
- **One primary brass CTA per screen.** No stacked CTAs, no bubbly buttons.

---

## 8. Components & Web Pattern Canon

The pattern canon has two provenances. The first **seven are componentised in the design-system export** (each with card, JSX, `.d.ts`, prompt). The next **nine were established in the master lodge template** (`ASG-LODGE-MASTER-OPT4INK-20260818-R1`) and are **export-pending** — they enter the componentised export at the next wholesale re-export (7 → 16 UI patterns, plus the three reviews components of §8.2). All sixteen are canon now; only their export status differs.

| Pattern | Spec |
|---|---|
| **FactPill** | Hero stat badges: frosted pills — `rgba(255,255,255,.10)` bg, `.28` border, blur, radius 22px, brass ✦ glyph. Never bare text on photos. |
| **SightingsBadge** | Green `#4F6B51` "Most drives" (white) · Brass "Very often" (white) · Sand "Often" (**ink text**) · Charcoal "Rarely" (ivory). |
| **MonthGrid** | 12-cell best-time grid: Peak = brass + white · Good = sand + ink · Fair = bone + ink. |
| **PriceCard** | Hero booking sidebar — From-price (the sole serif-numeral moment), dual CTAs, no-payment note. |
| **ValuePropBar** | Four columns on Charcoal; titles 12px tracked-caps Brass (e.g. Current Special / Best Price). |
| **EnquiryChecklist** | Brass check circles — the why-enquire-direct panel. |
| **AccreditationRow** | Footer proof: bordered membership pills + brass-bordered review counts. |
| **TrustRow** | Slim Ivory-Dim strip under the props bar: Tier-1 accreditation pills lead, then the reviews signal (★ 4.9 · 4,300+ verified, bound). One scrollable strip on phones. |
| **StickyBookingBar** | Bottom-docked; appears once the hero PriceCard scrolls out (IntersectionObserver); hides while the enquiry section or the contact banner is on screen; collapses to price + one brass button on mobile. Owns the persistent action — the sub-nav does not. |
| **GuestsLove** | White hairline band, five short signals with brass stroke icons (location score bound). |
| **SpecialsOffer** | Offer card: Badge Green top rule, SAVE chip, four rate conditions + four inclusions, one brass CTA. |
| **NearbyCards** | Three quick-facts cards (reserves/landmarks · restaurants · airport) + a straight-line footnote + a CMS map slot. |
| **FacilitiesDisclosure** | Twelve iconed highlights + a dietary line + a `<details>` holding the full categorised list (count bound). |
| **WhyBookGrid** | Six reasons in the EnquiryChecklist idiom + the accreditation row. Trust, no CTA. |
| **EnquiryStepper** | Four styled-static steps (When → Who → Budget → Details, contact **last**), progress numerals, four-segment bar, one brass action per step, confirmation state, risk-reversal row. No `<form>` — the CMS wires submission. |
| **MobileNavDrawer** | Logo · brass call icon · menu → ink drawer (Lora items, phone lines, one brass CTA). Closes on link tap or Escape. |

**Lodge-page template canon** (Option 4, per the approved Safari Lodge template and the eight Amakhala builds, commit `e2e8d89`):

1. **Props bar:** always **four cells in the canonical fixed order**, specials cell (`.prop.special`) leading. Specials treatment: green top-rule + ~5% tint wash; in-cell links on the special cell use soft green `#9FBFA3`, not brass.
2. **Gallery: exactly five tiles**, "View all N photos" overlay on the fifth. Ink-scrim lightbox (scrim `.94`, brass circular prev/next, counter, Esc/arrows/scrim-close, scroll lock). Room photos are a **separate lightbox set** opened via a corner badge trigger — never a full scrim over the room card image.
3. **Good to Know** (policies + specials conditions) and **FAQ** sections are required on every lodge page. **FAQ answers must be unique per page** — zero identical strings across pages, verified programmatically.
4. **SAVE chips:** solid Badge Green `#4F6B51`, white text (hero price card, card headers).
5. **Sightings frequencies** source from `amakhala.com/wildlife` — Common / Occasional / Rare per species. Honest probability language only.
6. **Pricing:** rates render in the **native currency of the rate sheet only** (ZAR for Amakhala and all South African lodges; USD where the sheet is USD-denominated). **No visitor-currency conversion — none, in any form.** The price field is bound and injected from the central database at build time — **never hardcoded**. Mockup values are obviously-fake placeholders in the component's native currency (`R 00,000` / `$0,000` / `{{rate_pppn}}`), never plausible numbers. **The rates block's default rendered state is the enquire-fallback** — "From R xx,xxx — enquire" / "From $x,xxx — enquire", one currency-agnostic component state that accepts either symbol, built to equal design quality as a polished primary state, not a stopgap. A rate surface renders when a **validity-passing Pimcore row backs it** (ledger **D-048**: a row loaded from the STO agreement, inside its validity window); otherwise it renders **enquire**, per row, never blocking the lodge. **The launch mix is per-lodge and data-determined** — most lodges carry a current-season row and show real rates at launch, while lapsed rows and rate-less lodges (Woodbury Manor) render enquire. The enquire-fallback stays the component's **default *design* state** — equal quality, currency-agnostic — but is **no longer the universal launch state**. This per-lodge data state is exactly why lodge pages are **one presence-gated template, not a template fork**: presence-gating renders each lodge's real mix natively, which a fork cannot. **From-line:** renders only when a validity-passing row backs it; Woodbury Manor's is permanently suppressed. Prices are Poppins regardless of currency.
7. Breadcrumbs: top-left of hero, no background; links in Sand with brass hover; current page plain text, never a link.
8. **Gallery is index-consistent:** the five tiles are the first five entries of the lodge lightbox set, so every tile opens on the photo it shows. Room photos are a separate set via a corner badge — never a full scrim over the room card image.
9. **Rooms grid:** `grid-template-columns:1fr 1fr`, collapsing to one column below 1000px. Each room card binds its own hero image and photo set — never a sibling's.
10. **FAQPage JSON-LD** in the page `<head>` is mandatory; the CMS auto-generates it from the FAQ content. FAQ answers are unique per page — zero identical strings across pages, verified programmatically.
11. **Pull-quote interlude** (Sand-tint ground, ink Lora italic, brass rule) comes from the lodge's own copy — never a fabricated guest quote. Facility rows use inline Lucide-style brass icons; Experiences keep the brass check (= included).
12. **Sub-nav is wayfinding-only.** The sticky booking bar owns the persistent action — the sub-nav carries no CTA.
13. **Per-room CTAs are outline, not brass.** The booking bar's brass primary is in the same viewport; two brass primaries in view would break the one-CTA rule.
14. **The four-check "why book direct" panel is retired.** Its content moves to the props bar, the PriceCard contact/assurance rows, the TrustRow, and the WhyBookGrid.
15. **The base `<section class="banner">` is repurposed as the human-access close** — call · WhatsApp · request a callback.

### 8.1 Page Behaviours (CMS)

- **Nav handoff:** the main nav is sticky until the sub-nav meets it, then slides away (`translateY(-100%)`, 0.28s) and the sub-nav owns the top. Reverses on scroll-up; hidden on cold deep-link load.
- **Scrollspy:** a brass underline follows the section in view. Bare `href="#"` links are excluded so the querySelector never throws.
- **Sticky booking bar:** appears once the hero PriceCard scrolls out of view (IntersectionObserver); hides while the enquiry section or the contact banner is on screen; collapses to price + one brass button on mobile. It, not the sub-nav, owns the persistent action.
- **Mobile nav drawer:** the menu icon toggles an ink drawer (Lora nav items, phone lines, one brass CTA); closes on link tap or Escape.
- **No feedback widget:** guest-facing deployments never publish with a feedback widget or third-party "made with" badge enabled — checked on every republish.
- **Rate-claim hygiene:** any **rate or booking-terms** claim outside *best price guarantee · contracted rates · no booking fees* is removed unless T&Cs back it and it carries a footnote (e.g. "Free cancellation*"). Non-rate assurances (e.g. "Secure & private") must be literally true and, where they imply a policy, link to it.

### 8.2 Reviews Pattern (approved 18 Aug 2026)

Reference implementation: `asg_reviews_pattern_ink_edition.html` — a static Ink-Edition rendering. **Production replaces each block with the licensed Elfsight widget** for that source (TripAdvisor · Google · Feedback Company). Three components:

- **ReviewCard** — warm-white card on Ivory, 1px Ivory-Dim border, ~7px radius, hover-lift only. Monogram avatar (ink disc, Lora initial, 1.5px brass ring — never a scraped profile photo) · name (Poppins 600) + date (Bone) · brass star row · Lora title · Poppins body · brass-dot source line. `/10` sources add a Deep-Brass score chip on the star row.
- **RatingSummary** — centred lockup: brass lion-mane emblem between two rules · tracked-caps source eyebrow (brass) · large **Poppins** score + `/ 5` · partial star row · verified-count line. All numerals Poppins — the rating is **not** the PriceCard serif-numeral exception.
- **ReviewsPage** (`/reviews/`) — combined-total lead-in hero (Poppins count, brass `+`, "4.9 / 5 average") · Ink three-source toggle (brass active underline) · per-source panel (RatingSummary + "What guests highlight" + ReviewCard grid + "Load more"), one source visible at a time.

**Rules**

- **Stars are partial-fill SVG**, not glyphs. Fill % = (displayed star ÷ 5) × 100, obeying the **rounding rule**: a `/10` score halves and floors to one decimal, never up (8/10 → 4.0, 9/10 → 4.5, 10/10 → 5.0).
- **`/10` chip** (Feedback Company): solid **Deep Brass `#8E6238`**, white text — the sub-12px step-down, showing the native score beside the floored stars. The conversion is visible, never hidden.
- **Aggregate display:** each source's own published figure as-is — TripAdvisor 4.9, Feedback Company 9.8/10 → 4.9, Google 4.9. Only `/10` aggregates convert.
- **Counts bound, never hardcoded** — combined and per-source counts read from the live widgets, same discipline as prices. The static mock shows "4,300+"; production sums the live counts.
- **Licensing / lifecycle:** reviews display through the licensed Elfsight widget; the static rendering is a design reference only, swapped for the live widget on rebuild. The **widget Ink-Edition reskin is per-rebuild, one lodge at a time** — live widgets stay as-is across the PPC estate until each site is rebuilt.
- **No fabricated reviews; no scraped permanent copies.** Names attributed exactly as the source shows them. No emoji, even when a source review contains them.

**Export status:** ReviewCard / RatingSummary / ReviewsPage are new and **export-pending** — added to the componentised export at the next wholesale re-export, alongside the nine master UI patterns.

---

## 9. Applications

One colour system everywhere. The surface changes; the identity does not.

### 9.1 Websites — Astro on Cloudflare

**Build model.** One shared Astro codebase per portfolio renders every domain; content, lodge data and rates inject from a central database **at build time**; output is static HTML + vanilla CSS (custom properties) with **minimal, dependency-free JavaScript**, served from Cloudflare Pages/Workers. No page-builder markup, no WordPress conventions or shortcodes, no React/Vue/heavy framework, no build-tooling assumptions in the HTML. **Output rules:** design in **repeatable components** with consistent class structure, **each delimited by `<!-- component: name -->` … `<!-- /component -->` — a standing per-output rule, required on every HTML output in every chat under this project, not just the master** (it makes the Astro translation trivial); **images** at fixed aspect ratios with dimensions in markup (`width`/`height` or CSS `aspect-ratio`), neutral placeholders assuming Cloudflare Images on-the-fly resizing — never final assets; **JavaScript** minimal and deliberate — describe interactive behaviour in a comment rather than pull a dependency. The Replit demo is a visual reference only.

**Locked aspect-ratio set (ratified 20 Aug 2026 — the fixed contract the Cloudflare Images pipeline builds against; one ratio per slot, dimensions in markup, no per-page variation):** hero 16:9 (1920×1080, viewport-cropped via CSS) · gallery tall 2:3 (800×1200) · gallery square 1:1 (800×800) · room card 3:2 (1200×800) · sibling/Reserve card 3:2 (1200×800) · thumbnail 1:1 (400×400). **Gallery tall 2:3 is coupled to the current 1-tall-beside-4-square gallery grid — revisit it if that grid changes in the Astro build.** Review-card avatars are CSS monogram discs, not image slots. Machine-readable set: `design-tokens.json → image.aspectRatios`.

Dark cinematic hero (bottom-up scrim), one serif headline, single brass CTA. Body content on Ivory for reading; Ink footer. Hairline borders, near-square corners, generous whitespace. Consume tokens via the export's `styles.css` / `tokens/*.css` — never hardcode values that exist as tokens. Reference implementation: the **master lodge template** (`asg_master_lodge_template_woodbury_option4_ink_edition.html`, marker `ASG-LODGE-MASTER-OPT4INK-20260818-R1`) — the canonical build every lodge and standalone page clones; the flagship UI kit in the export supports it.

### 9.2 Email & Newsletters

- **Raw hex only** — CSS variables do not survive email clients. Same hexes as web.
- Single narrow column. Dark Ink `#171411` header with horizontal logo; Ivory `#F6F1EA` body.
- One cinematic image, one Lora headline (Georgia fallback), short editorial copy in Poppins (system-sans fallback), **one brass button** — `#A8794B`, white text, 4px radius.
- Never: multi-column layouts, multiple CTAs, discount shouting, emoji.

### 9.3 Social Profiles

- **Avatar:** stacked lockup or crest-only, white on Ink ground (crest-only acceptable — the profile name carries the wordmark).
- **Covers/headers:** brand photography per §10 with bottom scrim if any text sits on it; or plain Ink with white horizontal lockup.
- Bio and post copy follow §6 in full — no emoji, no exclamation points, specific over superlative. Sub-brand profiles state "Part of African Safari Group".
- Post graphics obey 60/30/10; brass appears as the signal (a rule-line, a numeral, one chip), never a flood.

### 9.4 Brochures & Print

- **Covers/folders:** full dark treatment — deep Ink ground, centred crest, single brass rule. **Interior pages:** ink on white, Soft Charcoal body.
- Stock: **uncoated or soft-touch matte**. No glossy UV, no rainbow foil.
- Margins: minimum 20mm. Formal materials cite accreditations: **SATSA Member 3099 · ATTA · Cape Town Tourism Classic Tier · Tripadvisor Listed Operator**.
- CMYK: formula conversions live in `design-tokens.json → print.cmyk` (Ink 0/13/26/91 · Brass 0/28/55/34 · Ivory 0/2/5/4 …). **Always wet-proof against the press**; Pantone matching is settled at the first major run, not improvised per job.

### 9.5 Documents & Stationery

- **Letterhead:** ink horizontal logo on white, single brass rule-line, ≥20mm margins, body in Soft Charcoal Poppins.
- **Business cards (90 × 55mm):** dark Ink ground; name in Lora, title in tracked Poppins caps; back is logo only. No QR codes or social icons on the front.
- **Itineraries/proposals:** dark cover, light interior; numerals in Poppins; prices `R 14,500` format.

---

## 10. Imagery

**Cinematic and restrained** — one clear subject, real negative space, a warm slightly desaturated grade, golden hour preferred. Any text over an image sits on a dark bottom-up scrim.

**Never:** flat midday light, crowded grids, generic OTA stock, over-saturation (neon grass, orange HDR skies), text over busy detail.

**Sourcing:** all production photography comes from ASG's Pimcore infrastructure (`pim.africansafarigroup.com`, `amakhala.com`). Note for reviewers: sandboxed HTML previews block external requests — **judge imagery only in a real browser** against the live asset host.

---

## 11. Key Contrast Pairings (quick check)

| Ground | Text | Status |
|---|---|---|
| Brass `#A8794B` | White `#FFFFFF` | ✓ Canon (12px+ semibold tracked caps minimum on fills) |
| Deep Brass `#8E6238` | White | ✓ The sub-12px fill |
| Badge Green `#4F6B51` | White | ✓ SAVE chips, status |
| Heritage Sand `#C39F77` | Ink `#171411` | ✓ Small badges — never white on sand |
| Ink `#171411` | Warm Ivory `#F6F1EA` | ✓ Primary dark reading pair |
| Warm Ivory | Soft Charcoal `#4A443C` | ✓ Primary light reading pair |
| Warm Ivory | `#A89D8C` / `--text-faint` | ✗ Never for body — decorative captions only |
| Any photo | Any text without scrim | ✗ Never |

Focus states: 3px brass ring (`--focus-ring-shadow`) on all interactive elements, both themes.

---

## 12. Governance, Versioning & Sync

- **Canonical brand book: v1.3.** This package reflects it and stamps it. The `/themes/` pointer package (THEME-SPEC + design-tokens) **may be revised within a brand-book version** to fold settled canon — provided both files version together and carry a fresh revision marker (R1 → R2 …). What is frozen between deliberate book bumps (**v1.4**) is the `/themes/`-*consuming* export in `ASG_Design_System_Complete/`, never hand-edited between re-exports. **Revision R2 (18 Aug 2026)** folds the master's nine patterns + four deviations, the reviews pattern (§8.2), the Travellers' Choice / WhatsApp / reply-promise / currency-order confirmations, and restores the §9 heading. **Revision R3 (20 Aug 2026)** records the Astro/Cloudflare platform ruling and the native-currency ruling (rates render in the rate sheet's own currency, no conversion of any kind — the R2 switcher row is superseded), and folds the static-output rules (component comments as a per-output rule, the ratified aspect-ratio set, image dimensions, the fallback-default rates block, minimal JS) into §8/§9.1. **Revision R4 (20 Aug 2026)** records ledger **D-048** (Pimcore rates verified at load; the per-row validity rule; supplier public-site prices are not a source), supersedes the §8 item-6 "at launch every lodge renders fallback" premise (the launch mix is per-lodge and data-determined; the enquire-fallback is the component's default *design* state, not the universal launch state), records the From-line render rule and the Budget-step currency-select carve-out, and corrects the one-template presence-gated rationale to per-lodge data state. Versions with `design-tokens.json` R4 (pricing doc-string corrected to match; no token *values* changed).
- **v1.3 fold-in list (closed 16 Aug 2026):** Option 4 formalisation, the brass-600 exception, the seven web patterns, SaveChip / Lightbox / FAQ-accordion, the Badge Green role extension, the 15 Aug lodge/chrome canon, and this `/themes/` package are all now in the PDF brand book (v1.3, 27 pages) — Sections 05, 07, 10 and 11.
- **Sync discipline (standing):** any change to a design-system file → **(1)** commit in `asg-brand-guidelines` git repo, **(2)** replace the same file in Claude project knowledge. Both copies must always agree.
- **Pre-commit probe:** before committing a synced file, `Select-String` for a marker only the correct generation contains — this file's marker is `ASG-THEMES-V13-20260820-R4` (also in `design-tokens.json → $meta.marker`; the two version together). Guards against Downloads filename-collision generations.
- **Verification posture:** agent "everything verified" narratives are not sufficient — grep/`Select-String` actual file content before declaring a step closed.

**Known doc-sync items (recorded, not blocking):**

1. ~~8-tile gallery in the README~~ — **resolved at v1.3.** Canon is five index-consistent tiles, overlay on the fifth.
2. ~~"Book Direct" ValuePropBar example~~ — **resolved at v1.3.** Retired under the banned-rate-claims rule; the approved title is "Best Price".
3. ~~Cross-sell label / Woodbury retrofit~~ — **resolved 15 Aug 2026.** "More of the Reserve" live on all seven lodge pages; Woodbury retrofitted (GTK, FAQ, SAVE chips, ink-scrim lightbox).
4. ~~Missing `## 9. Applications` heading~~ — **restored at R2 (18 Aug 2026).** §8.1 flowed straight into §9.1 with no section heading; the book's Applications section is 09/10. Fixed.
5. ~~Convert-for-visitor currency model (IP-at-render / switcher)~~ — **removed at R3 (20 Aug 2026).** Superseded by the native-currency ruling: rates render in the rate sheet's own currency, no conversion in any form. The USD figures in README §11 are conversion artifacts, not native Amakhala rates (Amakhala is ZAR).

---

## 13. File Map & Consumption

| Path | What |
|---|---|
| `/themes/THEME-SPEC.md` | This document — the pointer spec for humans |
| `/themes/design-tokens.json` | Machine-readable tokens — hexes, CSS vars, scales, themes, component values, email/print maps |
| `lodge-pages/asg_master_lodge_template_woodbury_option4_ink_edition.html` | The static master template (Option 4 Ink) every lodge and standalone page clones — canonical reference build, marker `ASG-LODGE-MASTER-OPT4INK-20260818-R1`. Not the CMS. |
| `ASG_Design_System_Complete/` | Full export — `tokens/*.css`, components, UI kits, fonts, logos. Still v1.2-stamped; re-stamps to v1.3 on the next wholesale Claude Design re-export (never hand-edited) |
| `brand-books/` | Canonical PDFs surviving export swaps — `ASG_Brand_Guidelines_v1.3.pdf` (source of truth), quick reference, Option archives; superseded books in `brand-books/archive/` |
| `ASG_Design_System_README.md` | Decision record & export verification log, repo root |

**Consumption rule:** web projects link the export's compiled `styles.css` and read tokens as CSS variables; email and print consume raw values from `design-tokens.json`. When this spec and any downstream file disagree, **the brand book v1.3 + this `/themes/` package win**, and the downstream file gets fixed.

---

*African Safari Group · Reflects ASG Brand Guidelines v1.3 · August 2026 · Marker: ASG-THEMES-V13-20260820-R4*
