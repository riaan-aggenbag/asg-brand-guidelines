# ASG Design System — Master Reference
**African Safari Group · Brand & Design System**
Version: August 2026 · Custodian: Riaan Aggenbag, CEO
Status: Ink Edition confirmed as loved; Option 4 (CMS × Ink) in active refinement; final direction decision pending.

---

## 1. THE OPTIONS ON THE TABLE

| Option | What it is | Status |
|---|---|---|
| **Ink Edition (v1.2)** | Core dark editorial-luxury brand system. 17-page guidelines. | ✅ Riaan loves it. Most refined. |
| **Light Edition** | Same palette, inverted ground (Ivory-led). 17-page guidelines. | Riaan's least favourite. Keep as reference only. |
| **Option 3 — Reserve-CMS** | The live safari-cms.replit.app system as-built: Ink nav/footer, cream body, pale gold #C8A96E accent (dark button text). | Riaan very impressed with the live site. |
| **Option 4 — CMS × Ink** | Option 3's page architecture re-skinned in Ink Edition colours: Safari Brass #A8794B CTAs (white text), badges re-tuned to Ink family. | ⭐ Current working direction. Two live HTML pages built and refined through iterative feedback. |

**Open decision:** formally pick Option 3 vs Option 4 (or confirmed hybrid) as the official ASG web/CMS system, then consolidate into the brand book.

---

## 2. CANONICAL COLOUR SYSTEM (INK EDITION)

| Name | Hex | Role |
|---|---|---|
| ASG Ink | #171411 | Primary ground — heroes, headers, nav, footers |
| Charcoal | #2B2622 | Dark UI elements; info cards on dark sections |
| Soft Charcoal | #4A443C | Body copy on light backgrounds |
| Safari Brass | #A8794B | Primary accent — CTAs, links. **Takes WHITE text.** |
| Heritage Sand | #C39F77 | Secondary accent, tints. **Takes DARK text at small sizes** (see month grid rule). |
| Warm Ivory | #F6F1EA | Light ground — body, cards, email backgrounds |
| Ivory Dim | #EDE6DB | Secondary light surface |
| Bone | #B9AFA2 | Borders, dividers, "Fair" state blocks |
| Badge Green | #4F6B51 | Option 4 only — "Included / Most drives" status |

**Usage ratio (Ink Edition):** Ink/Charcoal 60% · Ivory/White 30% · Brass 10% (signal only).
**Option 3's accent (for comparison only):** #C8A96E pale gold — takes DARK text (opposite rule to Brass). Not part of the core system.

### Contrast rules (hard-won, do not regress)
- Brass buttons → **white** text, always.
- #C8A96E / pale golds / Heritage Sand at small text sizes → **dark/Ink** text.
- Dark-section info cards (e.g. Dry Winter / Green Summer) → Charcoal #2B2622 background, border rgba(255,255,255,.11).
- Never use MUTED_DARK-type tones (#A89D8C) for text on light backgrounds — too weak.

---

## 3. TYPOGRAPHY

- **Lora** (serif) — display & headlines, H1/H2, pull quotes, lodge/destination names.
- **Poppins** (sans) — body, UI, nav, buttons, data. Numerals always Poppins.
- Scale: H1 26–38pt · H2 20–22pt · Body 12–13.5pt · Caption 8–9pt.
- Eyebrows: Poppins-Medium, tracked caps, Brass.
- Rules: headlines 6–9 words; one serif moment per screen; line length 60–75 chars; no all-caps Poppins below 9pt.

---

## 4. LOGO SYSTEM

- **Lion crest is fixed** — never redrawn, never recoloured outside Ink / Ivory / Brass / Heritage Sand / White.
- Lockups: **Stacked** (square formats, avatars) and **Horizontal** (preferred for website headers).
- Icon-only mark: favicon, avatars, where brand is established. Full mane, correct crop (fixed in v1.1).
- Clear space = icon height on all sides. Min sizes: 32px stacked / 20px icon (digital).
- Approved variations: On Ink (white) · On Ivory (black) · On Brass (white) · On Heritage Sand (white).
- **Sub-brands** (Sabi Sand, Amakhala, SafariBookNow): same icon + serif setting; only the name beneath changes. Every sub-brand carries "Part of African Safari Group" in its footer.
- Six logo PNGs live in ASG_Design_System_Assets.zip.

---

## 5. VOICE & TONE

Authoritative, warm, never salesy. Specific beats superlative. Declarative sentences. No exclamation points. Speak as "we." Lead with guest experience.

**Words we don't use (guest-facing):** cross-sell, upsell, or any sales-mechanics jargon. (Replaced with e.g. "More of the Reserve." The live safari-cms site still says "Cross-sell" — flag for fixing there.)

**Content rules added during CMS review:**
- Temperatures always dual-unit: **Celsius first, Fahrenheit second** — e.g. "8–22 °C (46–72 °F)". Applies to panels and in-copy mentions.
- Sightings honesty is a voice feature: "Leopard — Rarely · elusive" style plain-probability language is on-brand. Never promise sightings.

---

## 6. OPTION 4 COMPONENT DECISIONS (from Riaan's page-by-page review)

1. **Hero fact badges** — translucent frosted pills (rgba white .10 bg, .28 border, blur, radius 22px) with Brass ✦ glyph. NOT bare text.
2. **Dark-section info cards** — Charcoal #2B2622, not near-Ink.
3. **Temperatures** — dual °C/°F everywhere (see voice rules).
4. **Breadcrumbs** — top-left of hero image, no background, clickable links (Sand, Brass hover); current page plain text.
5. **Hero stars** — 16px, optically nudged +2px to align with review text. Production should use inline SVG stars (font glyphs vary by OS).
6. **Value-prop bar titles** (Current Special / Book Direct / etc.) — 12px tracked caps Brass, not 10px.
7. **Nav behaviour** — main nav sticky until sub-nav meets it, then main nav slides away (0.28s) and sub-nav owns top; reverses on scroll-up. Sub-nav has scrollspy: Brass underline follows section in view. (Bug fixed: bare href="#" links must be excluded from scrollspy or querySelector throws and kills the script.)
8. **Month season grid** — month 13.5px, sub-label 9.5px uppercase; Peak = Brass + white text, Good = Sand + **dark** text, Fair = Bone + dark text.
9. **Status badges (sightings)** — Green #4F6B51 "Most drives" · Brass "Very often" · Sand "Often" · Charcoal "Rarely".
10. **"Cross-sell" section** renamed → eyebrow "More of the Reserve", heading "Other lodges in Amakhala".

---

## 7. IMAGERY — CRITICAL OPERATIONAL KNOWLEDGE

- **Pimcore is the photography source of truth:** `pim.africansafarigroup.com` (plus `amakhala.com` for the Amakhala logo). URLs harvested from the live CMS pages work perfectly in a real browser.
- **Claude's in-chat HTML preview blocks ALL external requests** (images, fonts). HTML mockups must be **downloaded and opened in a browser** to judge. This caused multiple false "broken images" alarms.
- Sandbox has no outbound network: Claude cannot download image bytes to embed; hotlink from Pimcore or ask Riaan to upload files for base64 embedding.
- More lodge imagery is harvestable by fetching each lodge page on safari-cms.replit.app (each exposes its own Pimcore gallery URLs).

---

## 8. FILE MANIFEST (current, keep these)

**Brand books & references**
- `ASG_Brand_Guidelines_v1.2.pdf` — Ink Edition, canonical (v1 / v1.1 are superseded drafts — discard)
- `ASG_Brand_Guidelines_Light.pdf` — Light Edition (reference only)
- `ASG_Brand_Quick_Reference.pdf` / `ASG_Brand_Quick_Reference_Light.pdf` — one-pagers
- `ASG_Design_System_Assets.zip` — one-pager + 6 logo PNGs (Claude Design upload package)

**Option concepts**
- `ASG_Option_3_Reserve_System.pdf` — CMS as-built, #C8A96E accent
- `ASG_Option_4_Reserve_System_Ink.pdf` — CMS × Ink Edition concept

**Live working HTML (Option 4, all feedback applied)**
- `amakhala_option4_ink_edition.html` — reserve page template
- `woodbury_lodge_option4_ink_edition.html` — lodge page template (most refined; contains nav handoff + scrollspy JS)

**Homepage mockups (earlier phase)**
- `africansafarigroup_homepage_mockup.html` (dark) / `..._light.html` — re-test in browser; Unsplash images may work now that the preview issue is understood.

**Build scripts** (in sandbox `/home/claude/`, regenerate any PDF): build_brandbook_v2.py, build_brandbook_light.py, build_onepager*.py, build_option_3.py, build_option_4.py, build_homepage*.py

---

## 9. BACKLOG / NEXT SESSION

1. Continue Riaan's page-by-page feedback on the two Option 4 pages (in progress, mid-review).
2. Build remaining six lodge pages in Option 4 (harvest each lodge's Pimcore gallery from safari-cms first).
3. Formal decision: Option 3 vs Option 4 → then consolidate winner into the brand book as the Web/CMS component section (badges, pills, month grid, nav behaviour, breadcrumbs, price card, value-prop bar, accreditation footer).
4. Re-test homepage mockups in browser; swap star glyphs for inline SVG; add "words we don't use" to voice page.
5. Apply chosen system back to the live safari-cms build (incl. removing "Cross-sell" label).
6. Claude Design org setup: upload assets zip + quick reference + a finished HTML page; publish org design system.
