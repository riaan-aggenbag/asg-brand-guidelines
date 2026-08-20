# ASG Design System — Master Reference
**African Safari Group · Brand & Design System**
Version: August 2026 (rev. 20 Aug — Astro/Cloudflare platform + native-currency ruling, R3 canon) · Custodian: Riaan Aggenbag, CEO · Marker: ASG-README-20260820-R6
Status: **Option 4 (CMS × Ink) formalised as THE official ASG web/CMS system (Riaan, 13 Aug 2026).** Canonical brand book is now **v1.3 (27 pages)** — Option 4, extended colour/contrast, voice, the Web & CMS system and a governance record folded into the PDF (see §14). One colour system — Safari Brass, white text — across brand book, web, and email. **Live safari-cms fully on canon: Step A (tokens/voice) 14 Aug, Step B (lodge template rollout + site chrome) closed 15 Aug 2026 — see §13.** `/themes/` pointer package re-stamped v1.3 (marker `ASG-THEMES-V13-20260816-R1`); v1.3 committed (`57ac621`) and the Drive brand kit refreshed 17 Aug 2026. The design system export stays v1.2-stamped until the next wholesale re-export. **18 Aug 2026: the master lodge template shipped** (marker `ASG-LODGE-MASTER-OPT4INK-20260818-R1`) — the static Option 4 Ink build every lodge and standalone page clones — and the `/themes/` pointer pair was revised to **R2** (`ASG-THEMES-V13-20260818-R2`, commit `5e0d3e4`) to fold its nine patterns + four deviations and the reviews pattern into THEME-SPEC §8/§8.2. See §15.

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
- **Pricing model** — ~~base rates live in Pimcore in ZAR; the WP sites convert at render time from the visitor's IP-based currency~~ **SUPERSEDED by the 20 Aug native-currency ruling (§16):** rates render in the rate sheet's own currency only, no conversion of any form; the platform is Astro on Cloudflare, not WordPress. The price field is bound and DB-injected at build time — never hardcoded. The USD figures here and in §11 are **conversion artifacts, not native rates** — Amakhala is ZAR.
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

**Still open after v1.3:** ~~rating rounding rule / 4.7-vs-4.8 canonical call~~ — **resolved 18 Aug 2026 by the reviews rounding rule** (a `/10` score halves and floors to one decimal, never up; §15) · Quatermain's + Woodbury Lodge review rows to top up when the feed lands · live amakhala.com Woodbury Lodge spa-FAQ answer says "Safari Lodge" (web team; scope + sweep in §15) · ~~production must bind currency symbol as well as amount~~ — **superseded 20 Aug 2026 by the native-currency ruling (§16): render in the rate sheet's own currency, no conversion or switcher** · Claude Design org setup **and the export re-stamp to v1.3** on next re-export.

---

## 15. MASTER LODGE TEMPLATE SHIP + /themes/ R2 (18 Aug 2026)

**What shipped.** The **master lodge template** — `lodge-pages/asg_master_lodge_template_woodbury_option4_ink_edition.html`, marker `ASG-LODGE-MASTER-OPT4INK-20260818-R1`, sha256 head `724AC63234434F61`, 124,048 bytes. It is the **static** Option 4 Ink build every lodge and every new standalone page type clones (NOT the CMS build). It extended `woodbury_lodge_option4_ink_edition_v2.html` section by section, integrated the approved reviews pattern, and passed a full QA sweep (palette / fonts / voice / imagery / structure / overflow at 320–1440). Probe-verified before this record: nine patterns present, four deviations present, all confirmations hold — "24/7"/"24 hours" = 0, "within 15 minutes in working hours" ×6, banned rate claims = 0, `#C8A96E` = 0, exclamation marks in copy = 0, image hosts `pim.africansafarigroup.com` / `amakhala.com` only, currency bound (amount + symbol + code). **Note: the currency model changed at R3 (§16) — native currency only, no switcher; the master is conformed before Tier 2 clones.**

**Nine patterns + four deviations folded to THEME-SPEC §8** (the §8 table went 7 → 16; the lodge-page canon list went 11 → 15):
- Patterns: TrustRow · StickyBookingBar · GuestsLove · SpecialsOffer · NearbyCards · FacilitiesDisclosure · WhyBookGrid · EnquiryStepper · MobileNavDrawer. **Export-pending** — they enter the componentised export at the next wholesale re-export.
- Deviations (canon 12–15): sub-nav is wayfinding-only (the sticky booking bar owns the persistent action) · per-room CTAs are outline, not brass · the four-check "why book direct" panel is retired (content moved to props bar / PriceCard / TrustRow / WhyBookGrid) · the base `<section class="banner">` is repurposed as the human-access close (call · WhatsApp · callback).

**Reviews pattern folded to THEME-SPEC §8.2** (approved 18 Aug 2026; reference `asg_reviews_pattern_ink_edition.html`): ReviewCard + RatingSummary + the tabbed three-source `/reviews/` page. Reviews display through the **licensed Elfsight widget**; the static rendering is a design reference only, swapped for the live widget on rebuild — one lodge at a time, never retrofitted across the live estate. Stars are partial-fill SVG under the rounding rule; the `/10` chip is Deep Brass; counts bound, never hardcoded.

**Confirmations recorded (THEME-SPEC §1/§6):**
- **Travellers' Choice 2026** is an ASG-level award — appears only in ASG proof rows (TrustRow, WhyBook accreditation row, footer), never in a lodge's quick-facts, FAQ, or lodge-scoped copy.
- **WhatsApp entry points ship as bound placeholders** (`data-bind="contact.whatsapp"`) until a WhatsApp Business number exists — never hardcoded (PriceCard, contact banner, enquiry chip).
- **Response-time promise** is "within 15 minutes in working hours" everywhere; "24 hours" retired, "24/7" never printed. Operational promises are written to the literal truth, never rounded up.

**Items 3–5 resolutions (from the reviews-pattern batch):**
- **Item 3 — Woodbury spa-FAQ bug.** Confirmed live: the auto-generated "Is there a spa?" answer on `/lodge/amakhala-woodbury-lodge/` reads "Safari Lodge". Fix handed to the web team — replace with copy naming Woodbury Lodge – Amakhala Game Reserve and stating no spa/wellness centre. Bush Lodge verified clean (curated Q&A, no templated spa answer). Full 8-lodge sweep delegated to **Bobby** for exact PASS/FAIL counts + a "Safari Lodge on a non-Safari-Lodge page" grep. Related content-quality backlog: raw/emoji/typo'd curated Q&A on some lodges; live pages render 5 stars against `/10` scores (fixed by the rounding rule on reviews-pattern rollout).
- **Item 4 — currency binding.** ~~IP geolocation converts … switcher order USD · GBP · EUR · AUD · MXN · ZAR~~ **SUPERSEDED at R3 (§16):** rates render in the rate sheet's native currency only — ZAR for Amakhala, USD where the sheet is USD-denominated — with **no conversion or switcher of any kind**. Price field bound + DB-injected at build time, never hardcoded; placeholders obviously fake in native currency.
- **Item 5 — Claude Design org design system.** Confirmed reading **v1.2**, which is correct for its current v1.2 content — no stamp bump. Recorded task: a wholesale **v1.3 re-export** of the Claude Design org design system (folds full v1.3 canon incl. the reviews pattern), which also re-stamps the frozen `ASG_Design_System_Complete/` export — the two move together, as a dedicated session, not this batch. Until then, this project is canonical for anything new.

**`/themes/` R2 sync (committed `5e0d3e4`, scoped `-- themes/THEME-SPEC.md themes/design-tokens.json`):**
- THEME-SPEC.md → R2 (`ASG-THEMES-V13-20260818-R2`, package v1.1.1): §1 six dated rows, §6 literal-truth note, §8 intro + nine pattern rows + four deviations + item-6 currency refinement, §8.1 booking-bar/drawer behaviours, §8.2 reviews pattern, §9.1 reference implementation → the master, §9 heading restored, §12 revision-within-version wording + probe marker, §13 master-template file-map row.
- design-tokens.json → R2 ($meta marker/version/date + one `component.lodgeTemplate.pricing` doc string; **no token values changed**). The two files version together, per the tokens `$meta.companion` note.
- Probe before commit: THEME-SPEC marker ×3, tokens marker ×1 — clean. Project knowledge mirror swapped to the R2 pair.
- **Governance note:** a `/themes/` revision *within* brand-book v1.3 is now explicitly allowed (THEME-SPEC §12) provided both files version together and carry a fresh revision marker. The brand book PDF, the quick reference, the Drive kit, and the frozen export are **unchanged** by R2 — this is a pointer-package revision, not a v1.4 bump.

**Backlog — done / next:**
- ✅ **Master lodge template built** (this section). Supersedes the "build the master template" work stream.
- **Tier 2 (next):** re-clone the six sibling Amakhala lodge pages **from this master** (data swaps + per-page FAQ uniqueness sweep). Repo/reference only; live estate untouched.
- **Tier 3 (next):** design the new standalone page types — Activities, Specials, Reserve, Map — and wire **Reviews Block B** (the tabbed 3-source `/reviews/` page already exists in `asg_reviews_pattern_ink_edition.html`).
- **Then Replit re-skin** (consumes the finished static system — single comprehensive re-instruction pass: icons, reviews pattern, CRO moves, currency, full Option 4 canon).
- **Parked, logged:** enquiry step-4 A/B pair (Google prefill / WhatsApp path) + field-validation states (CMS-wired). Also open: port ReviewCard + RatingSummary into the lodge template (folds into the Woodbury retrofit); reskin the live Elfsight widgets to Ink Edition one lodge at a time; add the three reviews components to the export at the next wholesale re-export; production binds combined + per-source review counts to live widget data.

**v2 — superseded, NOT removable (blocker logged).** `woodbury_lodge_option4_ink_edition_v2.html` is superseded by the master as the reference build. It **cannot be removed yet** — it is still referenced by: **§9** (file manifest, "the seven Option 4 lodge reference templates … Woodbury Lodge v2") · **§10/§11** (history: the overnight build and the "REPLACES the old Woodbury file" note) · `ASG_master_lodge_template_BUILD_BRIEF.md` ("Base to extend: `woodbury_lodge_option4_ink_edition_v2.html`") · and the **live CMS Step B port**, which still derives from it until the Replit re-skin consumes the master. Retirement is gated on the Replit re-skin landing and the manifest/BUILD_BRIEF references being repointed at the master. Until then v2 stays in place, marked superseded here.

**Sync discipline (this session).** `/themes/` R2 committed `5e0d3e4` and mirrored to project knowledge (step 1 + step 2 both done). This README R5 is a design-system file → commit in `asg-brand-guidelines` with explicit path, then replace the same file in project knowledge. Marker to probe before staging: `ASG-README-20260818-R5`.

## 16. PLATFORM + NATIVE-CURRENCY RULING; STATIC-OUTPUT CANON (20 Aug 2026)

**Platform ruling (Riaan).** ASG portfolio sites are built with **Astro, hosted on Cloudflare Pages/Workers** — one shared codebase per portfolio, lodge/rate/content data injected from a central database **at build time**, output is static HTML + vanilla CSS (custom properties) with **minimal, dependency-free JavaScript** served from Cloudflare's edge. There is **no WordPress** (not wordpress.com, not WP-on-Cloudways), **no on-site CMS admin panel, no plugins**. The Replit demo (`safari-cms.replit.app`) is a **visual reference only** — its code is not reused and it is not the hosting model. This resolves the standing standalone-vs-WordPress host question. A Cloudflare connector is available for deploys.

**Currency ruling (Riaan — supersedes the R2 switcher decision entirely).** Rates render in the **native currency of the rate sheet only**: **ZAR** for South African lodges (all Amakhala), **USD** where the rate sheet is USD-denominated (most East Africa & Botswana). **There is no visitor-currency conversion of any kind** — not by IP at render, not as build-time variants, not as a client-side switcher. One rate sheet, one currency, rendered as stored. Consequences:
- **The R2 currency-switcher order (USD · GBP · EUR · AUD · MXN · ZAR) is dead.** Removed from THEME-SPEC, tokens, and active guidance here. Do not reintroduce a switcher in any form.
- **The USD rate snapshots in §11** (Safari $472, Bush $554, HillsNek $475, Leeuwenbosch $299, Quatermain's $227, Woodbury Tented $299, Woodbury Lodge $405) are **conversion artifacts, not native rates.** Amakhala rate sheets are **ZAR**. Those USD figures must NOT be propagated into the Tier 2 clones. Native ZAR rates come from the rate sheet (central DB); until injected, use obviously-fake placeholders.
- The Quatermain's "$227 vs €197" question and the "$472/$473/$483" discrepancy are **moot** — conversion artifacts of the retired WordPress IP model.
- **Placeholders are obviously fake in the component's native currency** — `R 00,000` / `$0,000` / `{{rate_pppn}}`, never plausible numbers. USD placeholders are legitimate for East Africa/Botswana components.
- **All numerals including prices remain Poppins**, regardless of currency (brand canon unchanged).

**Static-output canon (folded into THEME-SPEC §8/§9.1).** All HTML output from here is: clean semantic static HTML + vanilla CSS custom properties; **components delimited by `<!-- component: name -->` … `<!-- /component -->`** for trivial Astro translation; **no page-builder markup, no WordPress conventions/shortcodes, no React/Vue/framework, no build-tooling assumptions**; **images at fixed aspect ratios with dimensions in markup** against Cloudflare Images placeholders (never final assets); **JavaScript minimal and dependency-free** — behaviour described in a comment where interactivity is genuinely needed. Brand rules (colour, type, one brass CTA per screen, no emoji, no bubbly buttons) remain fully in force.

**The rates block requires two designed states:** (a) full rate display; (b) lapsed-rate fallback "From R xx,xxx — enquire" / "From $x,xxx — enquire" — **one currency-agnostic component state accepting either symbol.**

**Conformance owed before the Tier 2 build (task for the build session).** The master lodge template predates this ruling and carries five defects against it — plausible placeholder values (`$405` etc.), no lapsed-rate fallback state, no image dimensions/aspect-ratios (13 `<img>`, 0 with dims), no `<!-- component: -->` boundaries, and a currency switcher. The master must be **conformed to R3** before the six siblings clone from it, so the defects are not multiplied six times. Its JS is already clean (zero external scripts, zero frameworks). The `/themes/` R3 canon is the contract; the master conforms to it, then the clones inherit correctly.

**`/themes/` R3 + README R6 sync (to commit).** THEME-SPEC.md + design-tokens.json → R3 (`ASG-THEMES-V13-20260820-R3`, package v1.1.2). This README → R6 (`ASG-README-20260820-R6`). Sync discipline: commit explicit paths in `asg-brand-guidelines`, then mirror all three files in project knowledge. Probe markers before staging: THEME-SPEC R3 ×3, tokens R3 ×1, README R6 in header.
