---
name: asg-design
description: Use this skill to generate well-branded interfaces and assets for African Safari Group (ASG), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping luxury safari travel experiences.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Fast orientation for African Safari Group
- **Aesthetic:** dark, restrained, editorial luxury — Aman/Singita, not a typical travel agency.
- **Colour:** near-black ground (ASG Ink `#171411`) + a single brass accent (`#A8794B`) used sparingly under the **60/30/10 rule** (60% ink, 30% ivory, 10% brass). Warm neutrals: Soft Charcoal, Heritage Sand (tints only), Warm Ivory, Bone. Never neon.
- **Type:** Lora (serif) for one headline/display moment per screen; Poppins (sans) for body, UI, and ALL numerals. Self-hosted in `assets/fonts/`.
- **Voice:** authoritative, warm, never salesy. First-person "we", address "you", declarative sentences, specific over superlative, **no exclamation points, no emoji**.
- **Logo:** fixed lion crest in `assets/logos/` — never redrawn; sub-brands only change the wordmark beneath the same crest.
- **Imagery:** cinematic, golden-hour, one clear subject, warm desaturated grade. The brand ships NO photography — use placeholder slots and tell the user real images are needed.
- **Iconography:** thin Lucide-geometry line icons (a documented substitution; the brand defines none).

## What's here
- `styles.css` + `tokens/` — link `styles.css` to get every colour/type/spacing token and the webfonts.
- `components/` — reusable React UI primitives (Button, Card, Input, Tabs, Dialog, …). Read each `.prompt.md` for usage.
- `ui_kits/` — full-screen recreations: `flagship-website/`, `asg-direct-bookings/`.
- `templates/safari-deck/` — a presentation template.
- `readme.md` — the full design guide (content + visual foundations, iconography, manifest).

When building production artifacts, link `styles.css` and read components from `window.<Namespace>` (the bundle is `_ds_bundle.js`). When building throwaway mocks, copy the assets and tokens you need into a self-contained HTML file.
