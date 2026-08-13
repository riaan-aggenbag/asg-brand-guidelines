# ASG Design System — Master Reference
**African Safari Group · Brand & Design System**
Version: August 2026 (rev. 13 Aug) · Custodian: Riaan Aggenbag, CEO
Status: **Claude Design system export v1.2-stamped, verified and approved (13 Aug 2026).** Ink Edition confirmed as loved; Option 4 (CMS × Ink) patterns now encoded in the exported design system. Formal Option 3 vs Option 4 direction decision still pending.

---

## 0. SOURCE OF TRUTH & SYNC DISCIPLINE

- **Git repo:** `github.com/riaan-aggenbag/asg-brand-guidelines` — the canonical home.
  - `ASG_Design_System_Complete/` — the full Claude Design export (replaced wholesale on each re-export; never store keeper files here).
  - `brand-books/` — canonical deliverables that survive export swaps: Light Edition PDF, Ink one-pager, assets zip, Option 3 & 4 concept PDFs, homepage mockups.
  - `ASG_Design_System_README.md` — this file, at repo root.
- **Claude project knowledge** mirrors the reference layer: this README + the export's overview HTML (`ASG Design System.html`), export readme (`DS_Export_README.md`), and `_ds_manifest.json`.
- **Sync rule:** any change to a design-system file → (1) commit in the git repo, (2) replace the same file in project knowledge. Both copies must always agree.

---

## 1. THE OPTIONS ON THE TABLE

| Option | What it is | Status |
|---|---|---|
| **Ink Edition (v1.2)** | Core dark editorial-luxury brand system. 17-page guidelines. | ✅ Riaan loves it. Canonical brand book. |
| **Light Edition** | Same palette, inverted ground (Ivory-led). Implemented as `data-theme="light"` layer in the export. | Reference only; ships as a theme, not a separate system. |
| **Option 3 — Reserve-CMS** | The live safari-cms.replit.app system as-built: Ink nav/footer, cream body, pale gold #C8A96E accent (dark button text). | Riaan very impressed with the live site. |
| **Option 4 — CMS × Ink** | Option 3's page architecture re-skinned in Ink Edition colours: Safari Brass #A8794B CTAs (white text), badges re-tuned to Ink family. | ⭐ Working direction. All seven patterns + behaviour spec now componentised in the design system export. |

**Open decision:** formally pick Option 3 vs Option 4 (or confirmed hybrid) as the official ASG web/CMS system, then consolidate into the brand book.

---

## 2. CANONICAL COLOUR SYSTEM (INK EDITION)

| Name | Hex | Role |
|---|---|---|
| ASG Ink | #171411 | Primary ground — heroes, headers, nav, footers |
| Charcoal | #2B2622 | Dark UI elements; info cards on dark sections |
| Soft Charcoal | #4A443C | Body copy on light backgrounds |
| Safari Brass | #A8794B | Primary accent — CTAs, links. **Takes WHITE text.** |
| Deep Brass | #8E6238 | `--asg-brass-600` — active states; small-badge fill (see approved exception) |
| Heritage Sand | #C39F77 | Secondary accent, tints. **Takes DARK text at small sizes** (see month grid rule). |
| Warm Ivory | #F6F1EA | Light ground — body, cards, email backgrounds |
| Ivory Dim | #EDE6DB | Secondary light surface |
| Bone | #B9AFA2 | Borders, dividers, "Fair" state blocks |
| Badge Green | #4F6B51 | `--asg-badge-green` — "Included / Most drives" status |

**Usage ratio (Ink Edition):** Ink/Charcoal 60% · Ivory/White 30% · Brass 10% (signal only).
**Option 3's accent (for comparison only):** #C8A96E pale gold — takes DARK text (opposite rule to Brass). Not part of the core system.

### Contrast rules (hard-won, do not regress)
- Brass buttons → **white** text, always (`--text-on-brass: #FFFFFF` in BOTH dark and light themes).
- **APPROVED EXCEPTION (Riaan, Aug 2026):** solid brass-filled badges **under 12px** step the *fill* down to Deep Brass #8E6238 (`--asg-brass-600`) to preserve white-text contrast. CTAs, buttons, rule-lines, and all brass at 12px+ stay #A8794B. **The fill adapts, never the text colour.** Documented on the Safari Brass card as "Approved exception."
- #C8A96E / pale golds / Heritage Sand at small text sizes → **dark/Ink** text. Verified in `SightingsBadge.jsx`: `.asg-sighting--often{background:var(--asg-heritage-sand);color:var(--asg-ink);}`.
- Dark-section info cards (e.g. Dry Winter / Green Summer) → Charcoal #2B2622 background, border rgba(255,255,255,.11).
- Never use MUTED_DARK-type tones (#A89D8C) for text on light backgrounds — too weak.

---

## 3. TYPOGRAPHY

- **Lora** (serif) — display & headlines, H1/H2, pull quotes, lodge/destination names.
- **Poppins** (sans) — body, UI, nav, buttons, data. Numerals always Poppins. (One exception in the export: the PriceCard From-price is the sole serif-numeral moment.)
- Scale: H1 26–38pt · H2 20–22pt · Body 12–13.5pt · Caption 8–9pt.
- Eyebrows: Poppins-Medium, tracked caps, Brass.
- Rules: headlines 6–9 words; one serif moment per screen; line length 60–75 chars; no all-caps Poppins below 9pt.
- Both fonts self-hosted in the export (`assets/fonts/`, latin woff2).

---

## 4. LOGO SYSTEM

- **Lion crest is fixed** — never redrawn, never recoloured outside Ink / Ivory / Brass / Heritage Sand / White.
- Lockups: **Stacked** (square formats, avatars) and **Horizontal** (preferred for website headers).
- Icon-only mark: favicon, avatars, where brand is established. Full mane, correct crop (fixed in brand book v1.1; v1.2 is canonical).
- Clear space = icon height on all sides. Min sizes: 32px stacked / 20px icon (digital).
- Approved variations: On Ink (white) · On Ivory (black) · On Brass (white) · On Heritage Sand (white).
- **Sub-brands** (Sabi Sand, Amakhala, SafariBookNow): same icon + serif setting; only the name beneath changes. Every sub-brand carries "Part of African Safari Group" in its footer.
- Logo PNGs: `brand-books/ASG_Design_System_Assets.zip` + `ASG_Design_System_Complete/assets/logos/`.

---

## 5. VOICE & TONE

Authoritative, warm, never salesy. Specific beats superlative. Declarative sentences. No exclamation points. Speak as "we." Lead with guest experience.

**Words we don't use (guest-facing):** cross-sell, upsell, or any sales-mechanics jargon. (Replaced with e.g. "More of the Reserve." The live safari-cms site still says "Cross-sell" — flag for fixing there.)

**Content rules added during CMS review (all now on the export's Voice card):**
- Temperatures always dual-unit: **Celsius first, Fahrenheit second** — e.g. "8–22 °C (46–72 °F)". Applies to panels and in-copy mentions.
- Sightings honesty is a voice feature: "Leopard — Rarely · elusive" style plain-probability language is on-brand. Never promise sightings.

---

## 6. OPTION 4 COMPONENT DECISIONS (from Riaan's page-by-page review — all encoded in the export)

1. **Hero fact badges** — translucent frosted pills (rgba white .10 bg, .28 border, blur, radius 22px) with Brass ✦ glyph. NOT bare text. → `FactPill` component.
2. **Dark-section info cards** — Charcoal #2B2622, not near-Ink.
3. **Temperatures** — dual °C/°F everywhere (see voice rules).
4. **Breadcrumbs** — top-left of hero image, no background, clickable links (Sand, Brass hover); current page plain text, never a link. → Behaviour card.
5. **Hero stars** — 16px, optically nudged +2px to align with review text. Production should use inline SVG stars (font glyphs vary by OS).
6. **Value-prop bar titles** (Current Special / Book Direct / etc.) — 12px tracked caps Brass, not 10px. → `ValuePropBar` component.
7. **Nav behaviour** — main nav sticky until sub-nav meets it, then main nav slides away (0.28s) and sub-nav owns top; reverses on scroll-up. Sub-nav has scrollspy: Brass underline follows section in view. (Bug fixed: bare href="#" links must be excluded from scrollspy or querySelector throws and kills the script.) → Behaviour card.
8. **Month season grid** — month 13.5px, sub-label 9.5px uppercase; Peak = Brass + white text, Good = Sand + **dark** text, Fair = Bone + dark text. → `MonthGrid` component.
9. **Status badges (sightings)** — Green #4F6B51 "Most drives" (white text) · Brass "Very often" (white) · Sand "Often" (**INK text**) · Charcoal "Rarely" (ivory). → `SightingsBadge` component.
10. **"Cross-sell" section** renamed → eyebrow "More of the Reserve", heading "Other lodges in Amakhala".

---

## 7. THE DESIGN SYSTEM EXPORT (verified 13 Aug 2026)

The Claude Design export is the machine-usable form of everything above. Stamped **"Reflects ASG Brand Guidelines v1.2 · August 2026"** (readme, overview meta, footer, and Light overview — all verified).

**Verified in the final export:**
- `--text-on-brass: #FFFFFF` in both `tokens/colors.css` and `tokens/theme-light.css`.
- `--asg-badge-green: #4F6B51` token present.
- All 7 pattern components (`FactPill`, `SightingsBadge`, `MonthGrid`, `PriceCard`, `ValuePropBar`, `EnquiryChecklist`, `AccreditationRow`) with cards, JSX, .d.ts, .prompt.md each.
- Patterns group + Behaviour card + Drawer tile all linked from the overview page (previously orphaned — fixed).
- Sand badge renders ink text at code level; brass-600 exception documented with "Approved exception" chip on the Safari Brass card.
- Behaviour card states all three specifics: plain-text current breadcrumb, 0.28s nav handoff with scroll-up reversal, brass scrollspy underline.
- Voice card carries the cross-sell/upsell ban, "More of the Reserve", Celsius-first rule.

**Export contents of note:** two UI kits (`flagship-website`, `asg-direct-bookings`, each in Dark / Light / Editorial-blend editions), three Safari Deck presentation templates (dark / light / editorial), `SKILL.md` (usable as an Agent Skill), self-hosted brand fonts, real photography in `assets/photos/`.

---

## 8. IMAGERY — CRITICAL OPERATIONAL KNOWLEDGE

- **Pimcore is the photography source of truth:** `pim.africansafarigroup.com` (plus `amakhala.com` for the Amakhala logo). URLs harvested from the live CMS pages work perfectly in a real browser.
- **Claude's in-chat HTML preview blocks ALL external requests** (images, fonts). HTML mockups must be **downloaded and opened in a browser** to judge. This caused multiple false "broken images" alarms.
- Sandbox has no outbound network: Claude cannot download image bytes to embed; hotlink from Pimcore or ask Riaan to upload files for base64 embedding.
- More lodge imagery is harvestable by fetching each lodge page on safari-cms.replit.app (each exposes its own Pimcore gallery URLs).
- The export now carries a starter photo set in `assets/photos/`; brand book itself contains no photography — real photography must be supplied to finish any kit or page.

---

## 9. FILE MANIFEST

**Git repo `asg-brand-guidelines` (canonical):**
- `ASG_Design_System_Complete/` — full v1.2-stamped export (replaced wholesale each re-export)
- `brand-books/ASG_Brand_Guidelines_Light.pdf` — Light Edition (reference only)
- `brand-books/ASG_Brand_Quick_Reference.pdf` — Ink one-pager
- `brand-books/ASG_Design_System_Assets.zip` — one-pager + 6 logo PNGs
- `brand-books/ASG_Option_3_Reserve_System.pdf` — CMS as-built, #C8A96E accent
- `brand-books/ASG_Option_4_Reserve_System_Ink.pdf` — CMS × Ink concept
- `brand-books/africansafarigroup_homepage_mockup(.html/_light.html)` — earlier-phase homepage mockups
- `ASG_Design_System_README.md` — this file

**Inside the export (`ASG_Design_System_Complete/uploads/`):** `ASG_Brand_Guidelines_v1.2.pdf` (canonical brand book), `ASG_Brand_Quick_Reference_Light.pdf`, Option 4 working HTML (`amakhala_option4_ink_edition.html`, `woodbury_lodge_option4_ink_edition.html`).

**Claude project knowledge (reference layer):** this README · `ASG Design System.html` (overview) · `DS_Export_README.md` (export readme, renamed) · `_ds_manifest.json` · brand-book PDFs.

**Build scripts** (sandbox `/home/claude/`, regenerate any PDF): build_brandbook_v2.py, build_brandbook_light.py, build_onepager*.py, build_option_3.py, build_option_4.py, build_homepage*.py. Sandbox resets between sessions — scripts also implied recoverable from chat history if needed.

---

## 10. BACKLOG / NEXT SESSION

1. Continue Riaan's page-by-page feedback on the two Option 4 pages (mid-review).
2. Build remaining six lodge pages in Option 4 (harvest each lodge's Pimcore gallery from safari-cms first).
3. Formal decision: Option 3 vs Option 4 → then consolidate winner into the brand book as the Web/CMS component section.
4. Swap hero star glyphs for inline SVG in the working HTML pages.
5. Apply chosen system back to the live safari-cms build (incl. removing "Cross-sell" label there).
6. Claude Design org setup: publish the verified export as the org design system.
7. Brand book v1.3 (future): fold the brass-600 badge exception and the seven Option 4 patterns into the printed guidelines so PDF and design system stay in lockstep.
