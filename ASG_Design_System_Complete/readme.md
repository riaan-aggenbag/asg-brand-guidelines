# African Safari Group — Design System

A code-first design system for **African Safari Group (ASG)**, a luxury inbound safari travel company that designs and fulfils five-star African safari experiences across Southern and East Africa. ASG sells through consultation-led specialists — not self-service booking — and operates a family of properties under one fixed crest.

This repository contains the brand's visual foundations (colour, type, spacing, motion), real logo assets and self-hosted webfonts, a library of reusable React UI components, full-screen UI-kit recreations of the products, and a presentation template. An automated compiler bundles the components into a runtime library and indexes the tokens; consuming projects link `styles.css` and read components from the global namespace.

> **Voice in one line:** authoritative, warm, never salesy — *specific over superlative*, no exclamation points.
>
> **Reflects ASG Brand Guidelines v1.2 · August 2026.**

---

## Sources

- **`uploads/ASG_Brand_Guidelines_v1.2.pdf`** — the brand book (17 pages, v1.2 / "Version 1.0 · 2026"). Every value in this system is derived from it. The crest, lockups, full palette, type rules, voice, and photography direction all come from this document. Logo bitmaps and the brand's exact colours were extracted from the PDF; the extracted source images live in `uploads/extracted/`.
- No codebase, Figma file, or existing slide deck was provided. Where this system makes choices the book does not specify (UI component states, an icon set, spacing scale, motion), those are flagged in the relevant section below.

**Products represented.** ASG runs under **two operating models**: (1) **inquiry / consultation-led** sites — the flagship (africansafarigroup.com) and destination/reserve **microsites** (Sabi Sand, Amakhala), typically PPC-driven, where a specialist reaches out after an enquiry; and (2) **ASG Direct Bookings** — an ASG-owned direct-booking site where visitors search, book, and pay directly (no enquiry step). Every property shares one crest and serif setting; only the wordmark beneath the crest changes.

> **Note:** the design admired at safaribooknow.com is a separate site ASG neither owns nor is affiliated with — used only as general UX/craft reference, never credited or reproduced. "ASG Direct Bookings" is ASG's own direct-booking model; only the booking search widget is ASG-built.

---

## Content Fundamentals — how ASG writes

The brand writes "like the specialist a client is grateful to have found." Tone is **authoritative, warm, restrained**. Confidence is shown through precision and space, never volume.

**Person & stance**
- First person plural — **"we"**, never the third person, in client-facing copy ("we know the reserves," "we hold space").
- Address the guest as **"you"**. Lead with what the guest will *experience*, then support it with ASG's expertise.
- The brand is a *person, not a funnel* — consultation-led, never transactional.

**Sentence craft**
- **Declarative sentences.** Short, certain statements. "Three nights gives you the best odds."
- **Specific beats superlative.** Name the lodge, the season, the sighting odds — not "unforgettable," "dream," "adventure of a lifetime."
- **Earn exclamation points rarely, if ever.** Calm confidence outperforms enthusiasm. (Effectively: never.)
- Numerals carry weight — prices, sighting percentages, night counts, reply times.

**Casing**
- Headlines: title or sentence case, short (six to nine words). One serif headline per view.
- **Eyebrows & labels: tracked UPPERCASE** (e.g. `BIG FIVE · MALARIA-FREE`, `FROM R 14,500 PP / NIGHT`). Never set tracked caps as body text or below ~9pt.
- Prices in Rand: `R 14,500` (space after R, thousands comma).

**Emoji:** none. The brand never uses emoji. Iconography is thin line icons or nothing.

**Words we never use (guest-facing):** “cross-sell”, “upsell”, or any sales-mechanics jargon. Cross-promotion sections are titled **“More of the Reserve”** (e.g. “Other lodges in Amakhala”).

**Temperatures:** always dual-unit, **Celsius first** — “8–22 °C (46–72 °F)” — in season panels and running copy alike.

**Sightings honesty:** a voice feature, not a caveat. Plain probability language — “Leopard — Rarely · elusive” — set in the sightings status badges. Never promise a sighting.

**Worked example** (straight from the book):
- ✗ *"Experience the adventure of a lifetime on this dream safari!"*
- ✓ *"Sabi Sand offers the highest leopard-sighting density in Africa. Three nights gives you the best odds."*

---

## Visual Foundations

The system is **dark, restrained, editorial luxury** — closer to Aman or Singita than a typical travel agency. The book's own words: *"a darker, richer system,"* retiring an inherited green/gold/grey template look.

### Colour
- **One deep near-black ground** — *ASG Ink* `#171411` — carries heroes, headers, footers, and most UI. *Charcoal* `#2B2622` is the secondary dark surface (cards, panels).
- **A single brass accent** — *Safari Brass* `#A8794B` — used "like brass fittings in a lodge": sparingly. The **60 / 30 / 10 rule** governs every layout: 60% ink/charcoal, 30% ivory/white breathing room, **10% brass** for signal only (one primary CTA, key numerals, active states, the rule-line). Brass as a dominant ground reads as cheap gold — forbidden.
- **Brass takes WHITE text** (`--text-on-brass: #FFFFFF`, both themes — brand rule). Mitigation for contrast: brass-fill labels are **minimum 12px semibold tracked caps**; where brass must carry smaller text (solid badges), the fill steps down to deep brass `--asg-brass-600` `#8E6238`.
- *Badge Green* `#4F6B51` (`--asg-badge-green`) marks sightings / inclusion status ("Most drives", "Included").
- **Warm neutrals:** *Soft Charcoal* `#4A443C` (body on light), *Heritage Sand* `#C39F77` (a legacy tone, **tints & secondary accents only**), *Warm Ivory* `#F6F1EA` (light editorial ground), *Bone* `#B9AFA2` (dividers on light).
- Default theme is **dark**; wrap light editorial areas in `.asg-on-ivory` to flip text colours. Feedback colours (success/warning/danger/info) are deliberately **warm and muted — never neon** (`#6E8A5A`, `#C08A3E`, `#B5524A`, sand for info).
- Tokens: `tokens/colors.css` — base palette + derived brass states + semantic aliases (`--surface-*`, `--text-*`, `--accent*`, `--border-*`).

#### Light Edition (theme)
The brand ships a **Light Edition** (same seven colours, inverted application: Warm Ivory the dominant 60% ground, Ink/Charcoal as text & selective dark sections at 30%, Brass the 10% signal). It is implemented as a theme layer in `tokens/theme-light.css`: the **dark system is the default**, and adding `data-theme="light"` to any root (html, body, a section) re-skins every component to the light edition — it remaps the semantic aliases plus the handful of base tokens components reference directly. Both UI kits carry a **Light / Dark toggle** (bottom switcher), and there is a separate **Safari Deck — Light** template. Light-edition specimen cards appear under the **Light Edition** group in the Design System tab.

### Typography
- **Lora** (serif) for display and headlines — "one serif moment per screen." Refined, echoes the wordmark. Used at 400–700; italic for emphasis (often in Heritage Sand).
- **Poppins** (sans) for body, navigation, UI, captions — and **all numerals**, even inside serif paragraphs (Poppins-Medium, tabular figures).
- Rules from the book, encoded in tokens: headlines stay short (6–9 words); body measure 60–75 characters (`--measure: 68ch`); eyebrows are tracked caps (`--ls-eyebrow: 0.22em`); the wordmark is widely tracked (`--ls-wordmark: 0.34em`).
- Both fonts are the **exact brand fonts**, self-hosted from `assets/fonts/` (latin subset, woff2). Tokens: `tokens/typography.css`, faces in `tokens/fonts.css`.

### Spacing & layout
- 4px base unit, **generous** editorial rhythm; section spacing is large (`--gap-section: 6rem`). Page gutters are generous and fluid (`--gutter: clamp(1.25rem, 5vw, 4rem)`). Reading column max 720px; full marketing width 1440px. Tokens: `tokens/spacing.css`.

### Surfaces, borders, corners, elevation
- **Corners are nearly square** — architectural, not rounded. Inputs/chips 2px, buttons/small cards 4px, cards/panels 6px, large media/dialogs 10px, pills only for avatars/status/the occasional tag. Tokens: `tokens/effects.css`.
- **Borders are hairlines.** On dark ground they are low-opacity ivory (`--border-subtle`, `--border-default`); on ivory they are Bone. A 2px **brass rule-line** (56–96px) is the signature divider moment, used under eyebrows and section heads.
- **Cards:** charcoal surface, hairline border, 6px radius, optional media with a bottom scrim; on hover (when linked) a quiet **3px lift** + brass-tinted border + soft shadow, and the media image scales 1.04. No bright drop shadows.
- **Shadows** are soft, warm-black, and only on dark overlays/dialogs (`--shadow-md/lg/xl`); far lighter on ivory.

### Imagery
- Photography "carries more of this brand than any single design element." Direction: **cinematic, restrained** — golden hour, one clear subject (animal, lodge, or guest), wide environmental shots with real negative space, a consistent **warm, slightly desaturated grade**. Avoid flat midday light, crowded grids, generic OTA stock, neon-green grass / orange HDR, and text crammed over busy detail.
- **There is no photography in the brand book**, so every image in this system is a styled **placeholder slot** (a dark, faintly textured `PhotoSlot` labelled with the shot the brand calls for). *Real photography must be supplied to finish any kit, slide, or page.*
- Text over photography always sits on a **scrim** — a bottom-up dark gradient (`--scrim-bottom` / `--scrim-full`) — never raw on the image.

### Motion & states
- **Fades and gentle slides, no bounce.** Calm ease-out curves (`--ease-standard`, `--ease-entrance`); durations 140–720ms. Editorial reveals are slow (~720ms); UI feedback is fast (~140ms).
- **Hover:** links and brass move *lighter* (brass-400); ghost controls gain a faint ivory wash; cards lift. **Press/active:** brass goes *darker* (brass-600); no shrink.
- **Focus:** a 3px translucent-brass ring (`--focus-ring-shadow`). **Disabled:** ~42% opacity.
- Transparency & blur are reserved for chrome over content — the sticky header and dialog backdrop use a small backdrop-blur over a translucent ink; otherwise surfaces are solid.

---

## Iconography

The brand book **defines no icon system** (and uses no emoji or unicode glyphs as icons). To fill the gap, this system ships an **`Icon` component using Lucide geometry** — thin, even line icons (24px grid, 1.75 stroke) that suit the restrained, editorial weight of the brand.

- **This is a substitution and should be reviewed.** If ASG adopts an official icon set, replace the path data in `components/core/Icon.jsx` (the public API stays the same).
- Icons inherit `currentColor` and are kept thin; brass is used for icons only where a signal is intended (active states, key affordances), in keeping with the 10% rule.
- The set is curated to the brand's needs: navigation (`arrow-right`, `chevron-*`, `menu`, `close`), action (`search`, `filter`, `sliders`, `plus`), travel (`map-pin`, `compass`, `binoculars`, `leaf`, `globe`), and meta (`calendar`, `clock`, `user`, `star`, `phone`, `mail`). Full list in `ICON_NAMES`.
- **The crest is never an icon-font glyph.** It is a fixed bitmap asset (see below) and is never redrawn.

---

## Logo & brand assets

`assets/logos/` (extracted from the brand book and recoloured to the approved grounds):
- `asg-stacked-white.png` / `asg-stacked-ink.png` — the stacked lockup (crest above wordmark).
- `asg-stacked-brass.png` — stacked, brass.
- `asg-icon-white.png` / `asg-icon-ink.png` / `asg-icon-brass.png` / `asg-icon-sand.png` — the crest alone, on each approved ground.

Rules: the crest is **fixed** — never redrawn, recoloured outside Ink/Ivory/Brass/Heritage-Sand/White, stretched, skewed, or shadowed. Maintain clear space equal to the crest height. Minimum size 32px (stacked) / 20px (icon alone). The **horizontal lockup** (preferred for nav) is composed in code (crest image + tracked serif wordmark) by the `Logo` component. **Sub-brands change only the wordmark** beneath the same crest — `<Logo name="SABI SAND" sub="GAME RESERVE" />` — and every sub-brand carries a "Part of African Safari Group" endorsement line.

`assets/fonts/` — self-hosted Lora (variable, upright + italic) and Poppins (400/500/600/700 + italic 400), latin subset.

---

## Index / Manifest

**Foundations**
- `styles.css` — the single entry point (only `@import`s). Consumers link this.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `theme-light.css`, `base.css`.
- `guidelines/*.card.html` — foundation specimen cards (Colors, Type, Spacing, Brand) plus a **Light Edition** set, for the Design System tab.

**Components** (`components/<group>/` — React, read from `window.<Namespace>`):
- **core** — `Icon`, `Button`, `IconButton`, `Badge`, `Tag`, `Avatar`, `Divider`, `Logo`
- **forms** — `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`, `Switch`
- **feedback** — `Alert`, `Toast`, `Tooltip`, `Spinner`
- **navigation** — `Tabs`, `Breadcrumb`, `Pagination`
- **data** — `Card`, `Stat`, `Accordion`
- **patterns** — Option 4 web-page patterns: `FactPill` (frosted hero stat badge), `SightingsBadge` (honest probability levels), `MonthGrid` (12-cell best-time grid), `PriceCard` (hero booking sidebar; the From-price is the one serif-numeral exception), `ValuePropBar` (four columns on charcoal), `EnquiryChecklist` (brass check circles), `AccreditationRow` (footer proof pills)
- **overlay** — `Dialog`, `Drawer` (slide-in panel — mobile navigation, filters)

Each component has a `.jsx` implementation, a `.d.ts` props contract, a `.prompt.md` usage note, and a per-directory `@dsCard` showcase.

**UI kits** (`ui_kits/<product>/` — full-screen interactive recreations):
- `flagship-website/` — Home · Reserve (Sabi Sand) · Lodge (Londolozi) · Enquiry, in **three editions**: Dark, Light (toggle in `index.html`), and **Editorial blend** (`editorial.html` — dark chrome, layered light body, dark footer). Reserve and Lodge follow the **Option 4 page architecture**: breadcrumbs over the hero, price card in the hero, value-prop bar, direct-enquiry checklist, sub-nav with nav handoff + scrollspy, month season grid, accreditation footer row. See its `README.md`.
- `asg-direct-bookings/` — Results · Property · Checkout · Confirmation (ASG-owned direct-booking model), in **three editions**: Dark, Light (toggle in `index.html`), and **Editorial blend** (`editorial.html` — dark chrome, light booking body, dark footer). See its `README.md`.

**Templates** (`templates/<slug>/` — starting points for consuming projects):
- `safari-deck/` — `SafariDeck.dc.html`, a 1920×1080 presentation template (title, section, statement, stats, voice, process, image, closing slides).
- `safari-deck-light/` — `SafariDeckLight.dc.html`, the Light Edition of the deck (ivory ground, ink text, brass signal).
- `safari-deck-editorial/` — `SafariDeckEditorial.dc.html`, the Editorial blend (alternating dark ink and light ivory/sand/white slides for rhythm).

**Skill**
- `SKILL.md` — makes this system usable as a downloadable Agent Skill.

---

## Using the system

Link the global stylesheet, then read components from the namespace (run `check_design_system` for the exact `<Namespace>`):

```html
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
<script type="text/babel">
  const { Button, Card, Logo } = window.DesignSystem_e5ff94;
</script>
```

Do **not** hand-edit `_ds_bundle.js`, `_ds_manifest.json`, or `_adherence.oxlintrc.json` — they are generated.
