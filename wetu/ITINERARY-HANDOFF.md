# ASG Digital Itinerary — Option 4 (Ink Edition) reference build

**Marker:** `ASG-ITIN-OPT4INK-20260817-R1` · **Reflects:** ASG Brand Guidelines v1.2 · THEME-SPEC `ASG-THEMES-OPT4INK-20260815-R1`
**Source itinerary:** Wetu ref 189789 — "Rogers Family Safari and Panorama Route Adventure", prepared by Lyzette Bruwer
**Status:** internal review build. Not for client distribution. Content and photography are copied from the live Wetu itinerary so the re-skin can be judged against real data.

---

## 1. Files

| File | What it is | Where it belongs |
|---|---|---|
| `asg_itinerary_option4_ink_edition.html` | Self-contained preview (all images inlined, 1.2 MB). Open in a real browser; fonts load from Google Fonts. | Project knowledge (review copy). Do **not** commit — regenerate from the template. |
| `itinerary_template.html` | The clean template. Every photo/logo is an `<img data-asset="key">` slot; no base64. This is the file a developer reads. | Repo: `wetu/itinerary_template.html` |
| `assets/*.png` (23) | Reference crops from the live itinerary screenshots + logo rasters cropped from the brand-book PDF. Placeholders only. | Repo: `wetu/assets/` |
| `build_itinerary.py` | Re-encodes assets and injects them into the template to produce the preview. `python3 build_itinerary.py` | Repo: `wetu/build_itinerary.py` |
| `ITINERARY-HANDOFF.md` | This document. | Repo: `wetu/` |

Pre-commit probe: `Select-String "ASG-ITIN-OPT4INK-20260817-R1"` must hit in both HTML files.

---

## 2. What the build is — and is not

- It is a **port**, not a redesign: Wetu's ten sections, headings, information and order are preserved (Home · Overview · Price & Terms · Destinations · Accommodation · Daily Information · Map · Transport · Information · About Us), rendered as one long-scroll page with anchored section navigation.
- It applies the shipping Option 4 system: tokens from `design-tokens.json`, and the same nav-handoff/scrollspy, five-tile gallery, ink-scrim lightbox, props bar, check-list and footer patterns as the live Amakhala lodge templates.
- It is the **target** for whoever implements it in Wetu (see §6). Wetu's own map, share and print controls are not rebuilt; their positions are marked.

---

## 3. Section → component map

| Wetu section | Reference treatment | Components / tokens |
|---|---|---|
| Home | Full-bleed hero, `--scrim-bottom`, kicker eyebrow (dates · destinations), one Lora H1 (itinerary title), summary line, three FactPills (days/nights · guests · lodges), **one** brass CTA "Explore the itinerary", image credit bottom-right | `.hero`, `.pill` (22px radius exception), `.btn-brass` |
| Section nav | Sticky Ivory bar handing off from the Ink top nav; scrollspy underline in brass; right-aligned brass CTA "Speak to Lyzette" (`tel:`) | `.subnav` — verbatim lodge-template JS |
| Overview | Two-column: Introduction (dates as tracked-caps eyebrow, verbatim copy) + route table + key · aside: Fast Facts on Charcoal, consultant card · below: two "Where you'll stay" cards (lead image + three tiles, chips for nights/basis/rating) | `.dark-card`, `.consultant`, `.tbl`, `.stay`, `.mosaic`, `.chip` |
| Price & Terms | Charcoal price card — `R 112,180` in Poppins (per THEME-SPEC §9.5), GBP line as quoted · includes as brass check-circles grouped by supplier · excludes as dash list | `.price-card`, `.checks`, `.excl` |
| Destinations | Per destination: Lora H3 + dates, verbatim copy at 68ch measure, three-up photo row, aside links (Accommodation → lodge anchor, More information) | `.dest`, `.trio`, `.mini-links` |
| Accommodation | Per lodge: H3 + brass stars, **five-tile gallery** ("View all N photos" on tile 5, lightbox per lodge), **four-cell props bar** (Your stay · Basis · Your rooms · Property), verbatim description, tabs (Rooms / Villas / Facilities / Activities), room card with image + caption below (never over the photo), facility list-grids, aside Fast Facts | `.g-grid`, `.props`, `.tabs`, `.room`, `.list-grid`, `.lb` |
| Daily Information | Timeline: sticky day numerals (Poppins, brass) · dates eyebrow · Lora H3 · verbatim narrative · dot lists · three-up photos · Expert Tips panel (white card, 2px brass top rule) · Panorama Route activity card · aside "Activities and services" | `.day`, `.day-num`, `.tips`, `.activity` |
| Map | Dark section. Route schematic (SVG) stands in for the Google Map: stops as brass dots, flight leg dashed, transfer/tour legs labelled | `section.dark`, `.route-panel` — production embeds Wetu's map restyled (dark ground, brass markers/route) |
| Transport | Flights and Transfers as hairline tables; times as sub-lines; blank company shown as an em dash | `.tbl` |
| Information | Lora H2 "South Africa" + intro · seven `<details>` accordions with brass +/× indicator; two-column key/value groups | `.acc` (native `<details>`, no JS) |
| About Us | House-voice About paragraphs + reviews link · Terms and Conditions verbatim with both links · aside consultant card + accreditation pills | `.about-grid`, `.terms`, `.accred` |
| Footer | Ink; stacked lockup; consultant column; follow/head-office column; accreditation row (SATSA Member 3099 · ATTA · Cape Town Tourism Classic Tier · Tripadvisor Listed Operator); © line + Back to top | `footer`, `.acc-pill`, `.rev-pill` |

CTA discipline: one brass CTA per view (hero: Explore; after scroll: Speak to Lyzette in the section nav). Consultant contact appears in nav, Overview aside, About aside and footer as plain links, not buttons.

---

## 4. Token bindings (must not be hardcoded downstream)

- Grounds: Ink `#171411` (nav, footer, map), Charcoal `#2B2622` (fact cards, price card, props bar), Warm Ivory `#F6F1EA` (body), Ivory Dim `#EFE7DB` (alternate sections, hairlines), White (cards).
- Accent: Safari Brass `#A8794B` — CTAs, check circles, day numerals, stars, active underlines, eyebrows. Hover `#BB9165`, press `#8E6238`. Links on light grounds use Deep Brass `#8E6238`. Brass always carries white text.
- Type: Lora 500 for H1–H4 only; Poppins for everything else including all numerals (prices, dates, times, counts). Eyebrows Poppins 500, 11px, 2.5px tracking, caps, brass. Body 15px/1.8, measure 68ch.
- Corners 3–4px; hairlines 1px; brass rule 2px; FactPill 22px (the exception). Focus ring `0 0 0 3px rgba(168,121,75,.40)`.
- Photography sits under `--scrim-bottom` wherever text overlays it; captions sit below images.

---

## 5. Image slots

All photos are `data-asset` slots filled at runtime from the asset map (production: Wetu image fields). Reference crops are low-resolution and must be replaced with Wetu's originals; the hero should be a graded lodge/reserve image, not the current orange-sunset banner (brand book §10).

`hero_moditlo` · `ov_moditlo_elephants` `ov_moditlo_pool` `ov_moditlo_gate` `ov_moditlo_welcome` · `ov_chest_buffalo` `ov_chest_pool` `ov_chest_garden` `ov_chest_lounge` · `ac_moditlo_main` `ac_moditlo_room` `ac_chest_main` `ac_chest_room` · `ds_kudu` `ds_waterhole` `ds_wildebeest` `ds_lion` `ds_elephants` `ds_potholes` · logos: `logo_h_white` `logo_stacked_white` `crest_white` `logo_h_ink`

Logo rasters are crops from the brand-book PDF (white-alpha). Swap for the official exports from `ASG_Design_System_Complete/assets/logos/` before anything ships.

---

## 6. Open decisions

1. **Implementation ceiling.** Confirm which Wetu format ASG is on (the source URL is Classic) and what its theme customiser exposes (colours only, or fonts and layout). If Classic cannot host Lora/Poppins or the layout, the options are Wetu custom theme development or the Discovery format. The build is the brief either way.
2. **Two invented copy blocks** (house voice, replacing off-canon boilerplate) — approve or revert: the hero summary line; the About African Safari Group paragraphs (information preserved: Cape Town base, live-in-Africa knowledge, occasions, whole-journey handling, 24-hour support, contracted rates / no booking fees, reviews link).
3. **Copy governance for consultant content.** Introduction, day narratives and Expert Tips carry exclamation points and superlatives that the voice canon bans. Fix at source with a Wetu content-library standard, not in the template.
4. **Price presentation.** Card now shows **total + per person**, no per-night line (bundled quote; per-night is not a real rate here and is blocked by the wrong night count). Decide: (a) keep total as headline, or lead with per person; (b) house format for the secondary currency; (c) whether pppn should appear on single-lodge "from" prices, where it *is* the right unit (as in the lodge templates).
5. **Map style.** Approve producing a Google Maps JSON style (Ink ground, brass route/markers) for Wetu to apply.

---

## 7. Content-defect log (source data, not design)

| # | Where | Issue |
|---|---|---|
| 1 | Price | "Total rate for 4 adults for **4 nights**" — itinerary is 3 nights |
| 2 | Price includes | "Moditlo **Safari** Lodge" — property is Moditlo River Lodge |
| 3 | Transport | Transfer company blank on all rows; narrative names Sable Tours (day 1, day 3) and E-Coaches (day 4) |
| 4 | Introduction / Expert Tips | Three exclamation points; "sheer majesty", "epic", "ticks all the boxes" — off voice |
| 5 | Accommodation | Lodge description contains "unforgettable sightings" (banned word) — supplier content |
| 6 | Information | Temperatures °C only; canon is °C first with °F in parentheses |
| 7 | Header image | Current banner is an over-saturated sunset; brand book §10 prohibits orange HDR skies |
| 8 | Accommodation | Villas (Moditlo) and Suites (Chestnut) tab content not present in the source capture — tabs shown disabled |
| 9 | Dates | Source itinerary is dated December 2024 while the Overview screenshot in Drive says 2026 — confirm the sample dates before external review |

---

## 8. Verification run (17 Aug 2026)

- Tag balance: 0 errors · one `<h1>` · fonts declared: Lora, Poppins only
- Hex values on page: all token values; `#C8A96E` 0 hits; retired `#8F6A40` 0 hits
- Banned phrases in template chrome: 0 (one "unforgettable" in verbatim supplier copy, logged above)
- Exclamation points in text: 3, all verbatim source content
- Rendered headless at 1440px and 390px; mobile scrollWidth = viewport after the table-overflow fix
- All 35 `data-asset` slots resolve to the 23 assets (build asserts)

Two lodge-template drifts surfaced while porting, for the v1.3 sweep: live templates use `--ivory-dim #EDE6DB` and `--brass-dark #8F6A40` where the tokens specify `#EFE7DB` and `#8E6238`. This build uses the token values.

---

## 9. Change log

- **R1 → R1a (17 Aug 2026):** Fixed "Where you'll stay" mosaic — lead image overflowed its grid row (explicit 230px height against a 150px auto-row track) and bled over the three tiles. Removed `grid-auto-rows`; rows now size to items (lead 250px, tiles 160px; 200px stacked on mobile). Added a phone glyph to the "Speak to Lyzette" CTA so the call action reads at a glance.
- **R1a → R1b (17 Aug 2026):** Price & Terms — lifted the "Price" heading to span the full section width so the price card top-aligns with the white "Price includes" card (previously the card sat level with the eyebrow). Measured delta now 0px.
- **R1b → R1c (17 Aug 2026):** Price card — added a per-person decode (R 28,045 · GBP 1,200) beneath the total under a divider. Deliberately no per-person-per-night line: this is a bundled quote (two lodges, flights, private tour), so a per-night figure is not a real rate and invites the wrong lodge-rate comparison; it is also blocked by defect #1 (source says 4 nights, itinerary is 3). Per-person figures are exact (÷4 guests). All price numerals remain Poppins.
