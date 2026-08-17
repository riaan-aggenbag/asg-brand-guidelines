# ASG Design System — Master Reference
**African Safari Group · Brand & Design System**
Version: August 2026 (rev. 17 Aug — brand book v1.3 build & sync) · Custodian: Riaan Aggenbag, CEO · Marker: ASG-README-20260817-R4
Status: **Option 4 (CMS × Ink) formalised as THE official ASG web/CMS system (Riaan, 13 Aug 2026).** Canonical brand book is now **v1.3 (27 pages)** — Option 4, extended colour/contrast, voice, the Web & CMS system and a governance record folded into the PDF (see §14). One colour system — Safari Brass, white text — across brand book, web, and email. **Live safari-cms fully on canon: Step A (tokens/voice) 14 Aug, Step B (lodge template rollout + site chrome) closed 15 Aug 2026 — see §13.** `/themes/` pointer package re-stamped v1.3 (marker `ASG-THEMES-V13-20260816-R1`); v1.3 committed (`57ac621`) and the Drive brand kit refreshed 17 Aug 2026. The design system export stays v1.2-stamped until the next wholesale re-export.

---

## 0. SOURCE OF TRUTH & SYNC DISCIPLINE

- **Git repo:** `github.com/riaan-aggenbag/asg-brand-guidelines` — the canonical home.
  - `ASG_Design_System_Complete/` — the full Claude Design export (replaced wholesale on each re-export; never store keeper files here).
  - `brand-books/` — canonical deliverables that survive export swaps: **ASG_Brand_Guidelines_v1.3.pdf** (the book), **ASG_Brand_Quick_Reference_v1.3.pdf**, the assets zip, the Option 3 & 4 concept PDFs, homepage mockups, the v1.3 generators in `brand-books/build/`, and superseded editions in `brand-books/archive/`.
  - `ASG_Design_System_README.md` — this file, at repo root.
- **Claude project knowledge** mirrors the reference layer: this README + the export's overview HTML (`ASG Design System.html`), export readme (`DS_Export_README.md`), and `_ds_manifest.json`.
- **Sync rule:** any change to a design-system file → (1) commit in the git repo, (2) replace the same file in project knowledge. Both copies must always agree.
- **Pre-commit probe (standing, 15 Aug 2026):** before committing any synced file, `Select-String` for a marker only the correct generation contains (Downloads filename-collision generations `_1`, `_19` … are the known failure mode — the stale `_19` Safari Lodge template got into project knowledge this way). Stage with explicit paths; never `git add .` / `commit -a` in this repo.
- **`themes/`** — `THEME-SPEC.md` + `design-tokens.json`: the single pointer package for any designer, developer, agency or printer. Reflects brand book **v1.3**; frozen between deliberate version bumps (next v1.4). Package v1.1.0, marker `ASG-THEMES-V13-20260816-R1`.
- **Distribution mirror (Drive):** the shared `_ASG Brand Kit – CURRENT (vN · …)` folder is the human-facing copy for designers, agencies and printers. Refreshed **wholesale** on each release — rename the folder to the new version (keeps its ID and every share link), swap the book / quick-reference / THEME-SPEC / tokens, move the superseded set to `zz Archive`, update `00 READ ME FIRST`. Never hand-edited between releases; hand people the folder link, not loose files.

---

## 1. THE SYSTEM (DECIDED)

**FORMAL DECISION — Riaan, 13 Aug 2026: Option 4 (CMS × Ink) is the official ASG web/CMS system.** One colour system everywhere: Safari Brass #A8794B with white text, from brand book to booking flow. The #C8A96E pale gold (and its opposite dark-text rule) is retired with Option 3.

| System | What it is | Status |
|---|---|---|
| **Ink Edition (v1.3)** | Core dark editorial-luxury brand system. 27-page guidelines (17 at v1.2). | ✅ Canonical brand book. |
| **Light Edition** | Same palette, inverted ground (Ivory-led). Implemented as `data-theme="light"` layer in the export. | Reference; ships as a theme, not a separate system. |
| **Option 4 — CMS × Ink** | Option 3's page architecture in Ink Edition colours: Safari Brass CTAs (white text), badges tuned to the Ink family. | ⭐ **OFFICIAL web/CMS system.** All seven patterns + behaviour spec componentised in the export **and folded into the brand book (Sections 10–11) at v1.3.** |
| **Option 3 — Reserve-CMS** | The live safari-cms.replit.app system as-built: pale gold #C8A96E accent (dark button text). | 🗄️ **Retired to archive** (`brand-books/ASG_Option_3_Reserve_System.pdf`). Live site re-skinned to Option 4 — Step A 14 Aug, Step B closed 15 Aug 2026 (§13). |

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
| Ivory Dim | #EFE7DB | Secondary light surface (corrected from #EDE6DB to match tokens, v1.3) |
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
- Icon-only mark: favicon, avatars, where brand is established. Full mane, correct crop (fixed in brand book v1.1; v1.3 is canonical).
- Clear space = icon height on all sides. Min sizes: 32px stacked / 20px icon (digital).
- Approved variations: On Ink (white) · On Ivory (black) · On Brass (white) · On Heritage Sand (white).
- **Sub-brands** (Sabi Sand, Amakhala, SafariBookNow): same icon + serif setting; only the name beneath changes. Every sub-brand carries "Part of African Safari Group" in its footer.
- Logo PNGs: `brand-books/ASG_Design_System_Assets.zip` + `ASG_Design_System_Complete/assets/logos/`.

---

## 5. VOICE & TONE

Authoritative, warm, never salesy. Specific beats superlative. Declarative sentences. No exclamation points. No emoji. Speak as "we." Lead with guest experience.

**Words we don't use (guest-facing):** cross-sell, upsell, or any sales-mechanics jargon. (Replaced with "More of the Reserve." Live safari-cms verified 15 Aug 2026: "Cross-sell" = 0 on all seven lodge pages; "More of the Reserve" present on all seven.)

**Content rules added during CMS review (all now on the export's Voice card):**
- Temperatures always dual-unit: **Celsius first, Fahrenheit second** — e.g. "8–22 °C (46–72 °F)". Applies to panels and in-copy mentions.
- Sightings honesty is a voice feature: "Leopard — Rarely · elusive" style plain-probability language is on-brand. Never promise sightings.

---
- **Banned rate claims (13 Aug 2026):** never "book direct", "the lodge's own rate", "no markup" — ASG sells under STO agreements and is not the lodge. Approved claims: **best price guarantee**, **contracted rates**, **no booking fees**. Same family as the cross-sell/upsell ban.

## 6. OPTION 4 COMPONENT DECISIONS (from Riaan's page-by-page review — all encoded in the export)

1. **Hero fact badges** — translucent frosted pills (rgba white .10 bg, .28 border, blur, radius 22px) with Brass ✦ glyph. NOT bare text. → `FactPill` component.
2. **Dark-section info cards** — Charcoal #2B2622, not near-Ink.
3. **Temperatures** — dual °C/°F everywhere (see voice rules).
4. **Breadcrumbs** — top-left of hero image, no background, clickable links (Sand, Brass hover); current page plain text, never a link. → Behaviour card.
5. **Hero stars** — 16px, optically nudged +2px to align with review text. Production should use inline SVG stars (font glyphs vary by OS).
6. **Value-prop bar titles** (Current Specials / Best Price / Plan With a Consultant / Expert Support — "Book Direct" retired under the 13 Aug banned-rate-claims rule) — 12px tracked caps Brass, not 10px. → `ValuePropBar` component.
7. **Nav behaviour** — main nav sticky until sub-nav meets it, then main nav slides away (0.28s) and sub-nav owns top; reverses on scroll-up. Sub-nav has scrollspy: Brass underline follows section in view. (Bug fixed: bare href="#" links must be excluded from scrollspy or querySelector throws and kills the script.) → Behaviour card.
8. **Month season grid** — month 13.5px, sub-label 9.5px uppercase; Peak = Brass + white text, Good = Sand + **dark** text, Fair = Bone + dark text. → `MonthGrid` component.
9. **Status badges (sightings)** — Green #4F6B51 "Most drives" (white text) · Brass "Very often" (white) · Sand "Often" (**INK text**) · Charcoal "Rarely" (ivory). → `SightingsBadge` component.
10. **"Cross-sell" section** renamed → eyebrow "More of the Reserve", heading "Other lodges in Amakhala".

---

## 6B. LODGE PAGE TEMPLATE CANON (13 Aug 2026 — reference: safari_lodge_option4_ink_edition.html)
The Safari Lodge page is the frozen reference template for all lodge pages (`lodge-pages/safari_lodge_option4_ink_edition.html`, 5-tile generation, marker `ASG-SL-5TILE-20260815`). Additions beyond the original Woodbury template:
- **Good to Know section** (`#good-to-know`, in sub-nav): two `.qf` cards — Arrival & policies + Current specials conditions. Specials card carries `.qf.special` treatment.
- **FAQ section** (`#faq`, in sub-nav): 12 GEO-optimised questions in two columns, sourced per lodge from its live "Travelers are asking" data. Answer-first, fact-dense, honest (spa/lions answers stay truthful). **FAQPage JSON-LD schema in `<head>` is mandatory** — CMS should auto-generate it from FAQ content.
- **Specials treatment family (Badge Green #4F6B51, role extended to savings signals):** solid green **SAVE chip** (hero price card, card headers, white text) OR **green top-rule + ~5% tint wash** (props cell `.prop.special`, GTK card `.qf.special`). Nothing else. In-cell links on the special cell use soft green #9FBFA3, not brass.
- **Lightbox gallery** (vanilla JS, no deps): ink scrim .94, brass circular prev/next, counter, Esc/arrows/scrim-close, body scroll lock. Gallery = **five tiles** (one tall + four), the fifth carries the "View all N photos" overlay, tiles are the first five entries of the lodge lightbox set so every tile opens on the photo it shows (canon per §12; the 8-tile line that stood here was superseded — Safari Lodge reference template regenerated to canon 15 Aug 2026). Room card image is the room-set trigger via corner badge overlay (`.room-lb-trigger`), NOT full scrim — the single room photo must still sell.
- **Facility icons:** inline Lucide-style SVGs (24 grid, 1.75 stroke, brass, 19px) replace the generic ✓ in Facilities only. Experiences keeps brass ✓ (= "included").
- **Pull-quote interlude** between FAQ and Reviews: Sand Tint #E8DCCB ground, ink Lora italic 27px, brass rule, Deep Brass tracked-caps attribution. Each lodge gets its own line **from the lodge's own copy — never a fabricated guest quote**.
- **Reviews:** 6-card grid — mix of service quotes and real lodge guest excerpts (short, attributed). Live reviews are JS-rendered on amakhala.com (unextractable by fetch); production pipes the review feed into this layout.
- **Specials data per lodge (from amakhala.com/specials):** Pay 2 Stay 3 (33%, 1 May–30 Sep 2026 low season, 3-night stays, single supp 30%, not combinable) at ALL 7 lodges. Kids Under 12 Free additionally at Safari Lodge, Woodbury Lodge, Leeuwenbosch, HillsNek. Safari Lodge kids reality: ages 9–11 free (children 9+ policy).
- **Sightings frequencies (canonical, amakhala.com/wildlife):** Common = elephant, giraffe, hippo, buffalo, zebra, wildebeest, hyena · Occasional = white rhino, lion · Rare = black rhino, leopard, cheetah, wild dog. Feeds Sightings Status Badges on reserve rebuild.

**Open data issues (live-site fixes for the team):** rate shown as $483 (homepage grid) vs $472 (lodge page) vs $473 (CMS) — one lodge, three prices; rating 4.8 (TripAdvisor badge) vs 9.4/10=4.7 (room data) — page uses 4.7 · 800+ pending Riaan's canonical call.

## 7. THE DESIGN SYSTEM EXPORT (verified 13 Aug 2026)

The Claude Design export is the machine-usable form of everything above. Stamped **"Reflects ASG Brand Guidelines v1.2 · August 2026"** (readme, overview meta, footer, and Light overview — all verified). The canonical book is now v1.3; this export stays v1.2-stamped **by design** and re-stamps to v1.3 on the next wholesale re-export (§14).

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
- `ASG_Design_System_Complete/` — full v1.2-stamped export (replaced wholesale each re-export; re-stamps to v1.3 next re-export)
- `brand-books/ASG_Brand_Guidelines_v1.3.pdf` — **canonical brand book (27 pages, marker `ASG-BOOK-V13-20260816-R1`)**
- `brand-books/ASG_Brand_Quick_Reference_v1.3.pdf` — Ink one-pager (marker `ASG-QR-V13-20260816-R1`)
- `brand-books/build/build_brandbook_v13.py` + `build_onepager_v13.py` — v1.3 generators (committed)
- `brand-books/ASG_Design_System_Assets.zip` — assets + 6 logo PNGs
- `brand-books/ASG_Option_3_Reserve_System.pdf` — CMS as-built, #C8A96E accent (archived decision)
- `brand-books/ASG_Option_4_Reserve_System_Ink.pdf` — CMS × Ink concept (archived decision)
- `brand-books/archive/` — superseded editions: `ASG_Brand_Guidelines_Light.pdf`, `ASG_Brand_Quick_Reference.pdf` (Light is now a theme; the Ink one-pager is replaced by v1.3)
- `brand-books/africansafarigroup_homepage_mockup(.html/_light.html)` — earlier-phase homepage mockups
- `lodge-pages/` — the seven Option 4 lodge reference templates (Safari Lodge, Bush Lodge, HillsNek, Leeuwenbosch, Quatermain's, Woodbury Tented Camp, Woodbury Lodge v2) — content source for the CMS rollout
- `themes/THEME-SPEC.md` + `themes/design-tokens.json` — the pointer package (see §0)
- `ASG_Design_System_README.md` — this file (repo root; never relocated)

**Inside the export (`ASG_Design_System_Complete/uploads/`):** `ASG_Brand_Guidelines_v1.2.pdf` (frozen v1.2 copy — the canonical book is now `brand-books/ASG_Brand_Guidelines_v1.3.pdf`), `ASG_Brand_Quick_Reference_Light.pdf`, Option 4 working HTML (`amakhala_option4_ink_edition.html`, `woodbury_lodge_option4_ink_edition.html`).

**Claude project knowledge (reference layer):** this README · `ASG Design System.html` (overview) · `DS_Export_README.md` (export readme, renamed) · `_ds_manifest.json` · brand-book PDFs.

**Build scripts:** the v1.3 generators `build_brandbook_v13.py` + `build_onepager_v13.py` are **committed to `brand-books/build/`** (no longer sandbox-only). Earlier scripts (build_brandbook_v2.py, build_brandbook_light.py, build_onepager*.py, build_option_3.py, build_option_4.py, build_homepage*.py) live in the sandbox and are recoverable from chat history.

---

## 10. BACKLOG / NEXT SESSION

1. ~~Formal decision: Option 3 vs Option 4~~ — ✅ DONE 13 Aug 2026: Option 4 formalised.
2. ~~Build remaining six Amakhala lodge pages in Option 4~~ — ✅ DONE 13–14 Aug (§11).
3. ~~Continue Riaan's page-by-page feedback on the two existing Option 4 pages~~ — ✅ folded into §12 canon.
4. Swap hero star glyphs for inline SVG in the working HTML pages.
5. ~~Re-skin the live safari-cms build to Option 4~~ — ✅ DONE: Step A 14 Aug, Step B closed 15 Aug 2026 (§13).
6. Claude Design org setup: publish the verified export as the org design system.
7. ~~Brand book v1.3: fold in the Option 4 formalisation, the brass-600 badge exception, and the seven web patterns~~ — ✅ DONE 16–17 Aug 2026 (§14). Book, `/themes/`, quick reference and Drive kit all on v1.3.
- ~~Build remaining 5 lodge pages from the Safari Lodge reference~~ — ✅ DONE (§11).
- ~~**Retrofit Woodbury**~~ — ✅ DONE: live Woodbury Lodge page now rendered from `woodbury_lodge_option4_ink_edition_v2.html` via the Step B rollout (GTK, FAQ+schema, lightbox, SAVE chips, zero banned claims — probe-verified 15 Aug).
- ~~Check live safari-cms demo copy for the banned rate claims~~ — ✅ verified 15 Aug: "book direct" / "no markup" / "the lodge's own rate" = 0 on all seven lodge pages; "Free cancellation*" (orphan asterisk, unbacked claim) removed.
- Design system next iteration (Claude Design): SaveChip, Lightbox, FAQ accordion, facility icon set as export patterns. (The voice ban + Badge Green role extension are now in brand book v1.3 — §14.)
- Resolve rate ($472/$473/$483) and rating (4.7/4.8) discrepancies on live site + CMS.

## 11. OVERNIGHT BUILD — ALL AMAKHALA LODGE PAGES (13–14 Aug 2026)
All seven Amakhala lodge pages now exist on the Option 4 reference template, built from live amakhala.com data. Verified USD rates: Safari $472 · Bush $554 · HillsNek $475 · Leeuwenbosch $299 · Quatermain's $227* · Woodbury Tented $299 · Woodbury Lodge $405 (supersedes €354). Every page: 12 lodge-specific GEO FAQs + FAQPage schema, correct specials combo (Kids-free only at Safari/Woodbury/Leeuwenbosch/HillsNek), honest facility claims (no air-con at HillsNek, no internet at Quatermain's, WiFi main-areas-only where true), per-lodge child policies (Bush/Quatermain's 12+, HillsNek 9+, Woodbury/WTC 6+, Leeuwenbosch all ages), lightbox with per-room photo sets, More-of-the-Reserve cross-links with verified USD prices, zero banned rate claims. `woodbury_lodge_option4_ink_edition_v2.html` REPLACES the old Woodbury file (which carried banned claims and €-pricing).

**Morning flags:** (1) *Quatermain's price: live page served €197 (currency switch); $227 used from ASG CMS card — confirm canonical USD. (2) Reviews: Bush/HillsNek/Leeuwenbosch carry 3 real TripAdvisor excerpts each; Woodbury Tented carries 3; Quatermain's has service quotes only and Woodbury Lodge has 1 TA + service quotes — top up when review feed lands. (3) Live-site data bugs found for the web team: Woodbury Lodge spa-FAQ answer says "Safari Lodge"; Safari Lodge rate appears as $472/$473/$483 in three places; rating 4.7-vs-4.8 call still open. (4) Woodbury Tented rating shown 4.8 (from 9.5/10) — confirm rounding rule (9.4→4.7 at Safari).

## 12. MORNING REVIEW FIXES + NEW CANON (14 Aug 2026)
- **Props bar canon: four cells, fixed order** — Current Specials → Best Price → Plan With a Consultant → (fourth cell). A builder bug had swallowed the Best Price cell on all six overnight pages (the section swap used "Plan With a Consultant" as its end marker and Best Price sits between). Reinstated everywhere with per-lodge name.
- **Gallery canon: exactly five tiles** — one tall + four square, "View all N photos" overlay always on the fifth tile, and tiles mirror the first five entries of the lodge lightbox set so tile-click indexes match. Four tiles leaves an empty grid cell; never ship fewer than five.
- **FAQ uniqueness rule** — no two lodge pages may carry identical Q&A text, including universal topics (malaria, best time, lions, check-in). Universal questions stay, but every answer gets lodge-flavoured phrasing (duplicate-content SEO + AI-search differentiation). Verified: zero identical answers across all seven pages. General questions are the approved filler when a lodge lacks enough unique ones.
- **Pricing model (operational fact from Riaan)** — base rates live in Pimcore in **ZAR**; the WP sites convert at render time from the visitor's IP-based currency. All prices in these mockups are placeholder USD snapshots; production templates must bind the price field and never hardcode. This explains the earlier $472/$483 and €197-vs-$227 "discrepancies" — they were currency conversion, not data errors. Flags withdrawn.
- **Remaining flags:** Woodbury Lodge live-site spa-FAQ answer still says "Safari Lodge" (web team); rating rounding rule to confirm (9.5→4.8 used at Woodbury Tented vs 9.4→4.7 at Safari); Quatermain's + Woodbury Lodge review rows to top up when the review feed lands.

## 13. STEP B CLOSURE — LIVE CMS ON CANON (15 Aug 2026)

**Method:** every claim below was verified by fetching the live pages/CSS and counting (`Invoke-WebRequest` + regex), never from the agent's narrative. Where agent report and probe disagreed, the probe won — three times.

**Verified on all seven lodge pages** (`/lodges/safari-lodge`, `woodbury-lodge`, `bush-lodge`, `hillsnek-safari-camp`, `leeuwenbosch-country-house`, `quatermains-camp`, `woodbury-tented-camp`):
- Props bar: 4 cells, canonical order Current Specials → Best Price → Plan With a Consultant → Expert Support.
- Gallery: 5 tiles, overlay on the fifth; lightbox lodge set + separate room set(s) via corner badge trigger.
- Good to Know present; FAQ 12 per page + FAQPage JSON-LD; **84 answers, zero identical strings site-wide**.
- SAVE chips ×2 (hero price card + GTK conditions); temperatures dual-unit Celsius-first; "More of the Reserve" / "Other lodges in Amakhala".
- Best price guarantee + no booking fees present; banned terms 0 (cross-sell, upsell, book direct, no markup, the lodge's own rate); "Free cancellation*" removed.
- Footer endorsement **"Part of African Safari Group"** present.
- Rooms: two-column grid restored (`grid-template-columns:1fr 1fr`, single column <1000px — 1 room = half-width left-aligned, 2 side by side, 3 = two + one); every room card carries its own image and photo set (Bush Lodge had the Luxury Tent photo on both rooms — fixed; distinct-image count = room count on all seven).
- Image hosts: `pim.africansafarigroup.com` / `amakhala.com` only.
- Compiled CSS bundle: `#C8A96E` 0 · `#A89D8C` 0 · Safari Brass / Deep Brass / Badge Green / Ink present · Lora + Poppins declared.
- Nav handoff (behaviour spec item 7): hidden-state rule `translateY(-100%)` + `.28s` transition present in shipped CSS; sub-nav sticky top:0 over header. Visual behaviour confirmed by Riaan 15 Aug 2026 — header slides away when the sub-nav meets it, slides back on scroll-up, hidden on cold deep-link load. Works as designed.
- Replit "Enable feedback widget" turned OFF in Publishing → Adjust settings → Engagement tools; republished; `replit-cdn` script = 0 on all seven.

**New standing rules recorded 15 Aug 2026:**
- **Guest-facing deployments never publish with the Replit feedback widget or "Made with Replit" badge enabled** (Publishing → Adjust settings → Engagement tools — both OFF). Agent redeploys do not change this setting; check it on every republish.
- **Rooms grid canon:** `.rooms-grid{display:grid; grid-template-columns:1fr 1fr; gap:26px}` collapsing to one column below 1000px; each room card binds its own hero image + photo set — never a sibling's.
- **Sub-brand footer canon:** the "Part of African Safari Group" endorsement line is mandatory on every sub-brand page footer, including the CMS.
- **Rate-claim hygiene:** any assurance-row claim not in the approved set (best price guarantee · contracted rates · no booking fees) is removed unless T&Cs back it and it carries a footnote.

**Doc-sync completed in this revision:** §6 item 6 "Book Direct" example retired · §6B gallery line corrected to five tiles · Safari Lodge reference template regenerated (5-tile, index-consistent; stale `_19` retired from project knowledge) · `lodge-pages/` and `themes/` added to manifest · backlog items 2/3/5 + Woodbury retrofit + banned-claims check closed.

**Still open (unchanged):** rating rounding rule / 4.7-vs-4.8 canonical call · Quatermain's + Woodbury Lodge review rows to top up when the review feed lands · live amakhala.com Woodbury Lodge spa-FAQ answer says "Safari Lodge" (web team) · production must bind currency symbol as well as amount (demo renders USD literal) · Claude Design org setup. **Brand book v1.3 fold-in — ✅ CLOSED 16–17 Aug 2026, recorded in §14.**

## 14. BRAND BOOK v1.3 BUILD & SYNC (16–17 Aug 2026)

**What shipped:** the canonical brand book moved from v1.2 (17 pages) to **v1.3 (27 pages)**, folding every post-print decision into the PDF itself; the `/themes/` package and quick reference were re-stamped to match. Built with reportlab from the genuine v1.2 source PDF; a `--faithful` mode reproduces the exact 17-page v1.2 byte-for-byte as a regression proof (approved before any v1.3 page was written).

**Markers (probe before every sync):**
- Book — `ASG-BOOK-V13-20260816-R1` (PDF Keywords)
- Quick reference — `ASG-QR-V13-20260816-R1`
- `/themes/` (THEME-SPEC.md + design-tokens.json) — `ASG-THEMES-V13-20260816-R1`

**Page map (27):** Cover · Contents (11 sections) · 01 Brand Essence · 02 Logo System (Mark; Clear Space) · 03 Logo Colour & Usage · 04 Sub-Brand Architecture · 05 Colour System (Palette; **Extended System & Retired Tones — new**; **Contrast Rules — new**; In Practice) · 06 Typography (Lora & Poppins; Rules) · 07 Voice & Tone (Voice; **Words & Formats — new**) · 08 Photography Direction · 09 Applications (Web; Email & Social; Print) · 10 Web & CMS System (**Hero & Signal; Booking & Proof; Specials/Gallery/FAQ; Lodge Anatomy; Lodge Rules — all new**) · 11 Governance (**Decisions of Record; The Pointer Package — new**) · Closing (version history + marker).

**Content folded in:** Option 4 formalised; pale gold #C8A96E retired on the page; the brass-600 sub-12px fill exception; the seven web patterns + SaveChip / Lightbox / FAQ-accordion; Badge Green savings role; the 15 Aug lodge-template + chrome + rate-claim canon; the PriceCard serif-numeral exception. Two banned lines corrected **in the book**: the p10 "no markup at checkout" type specimen → "Best price guarantee on contracted rates, with no booking fees."; the voice rule harmonised to "No exclamation points. No emoji." (matching THEME-SPEC/tokens).

**Build notes (probe-verified):** ✦ ✓ ✕ are absent from Poppins/Lora and would render blank, so the four-point star, check and cross are drawn as **vector paths**. All buttons, pills, FAQ rows, anatomy rows and decisions rows are vertically centred via a **cap-height helper** (defect Riaan caught at checkpoint B). Photography sourcing note reseated above the footer. **Ivory Dim corrected to #EFE7DB** to match tokens (README had #EDE6DB).

**Committed** — `57ac621`, scoped `-- brand-books themes`: v1.3 book + quick reference, both generators, THEME-SPEC.md + design-tokens.json (v1.3), and `git mv` of `ASG_Brand_Guidelines_Light.pdf` + `ASG_Brand_Quick_Reference.pdf` → `brand-books/archive/`. A pre-existing `.gitignore` change and the `templates/wetu/ → wetu/` rename staged in the index were **deliberately excluded** (scoped commit) and remain pending for a separate commit.

**Frozen by design** (re-stamp on next wholesale re-export, never hand-edited): `ASG_Design_System_Complete/`, `DS_Export_README.md`, `_ds_manifest.json`, and the v1.2 book inside the export's `uploads/`.

**Distribution + project knowledge:** Drive brand-kit folder renamed to v1.3, the four v1.3 files swapped in, six superseded files moved to `zz Archive`, `00 READ ME FIRST` doc updated. Project knowledge swapped to the v1.3 set (v1.2 book + old one-pagers removed so no stale copy surfaces in search).

**Still open after v1.3:** rating rounding rule / 4.7-vs-4.8 canonical call · Quatermain's + Woodbury Lodge review rows to top up when the feed lands · live amakhala.com Woodbury Lodge spa-FAQ answer says "Safari Lodge" (web team) · production must bind currency symbol as well as amount · Claude Design org setup **and the export re-stamp to v1.3** on next re-export.
