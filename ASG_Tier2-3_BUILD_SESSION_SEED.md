# ASG Build Session — Tier 2 + Tier 3 (Amakhala reserve site on the master, under R3 canon)

Seed this into a NEW chat inside the ASG brand-guidelines project. Self-contained.
Read in full before building anything: `THEME-SPEC.md` (**R3**, marker `ASG-THEMES-V13-20260820-R3`),
`design-tokens.json` (**R3**), `ASG_Design_System_README.md` (**R6** — see §16 for the platform,
currency, static-output and aspect-ratio rulings), the `asg-brand` skill,
`ASG_CRO_teardown_for_lodge_template.md`, and the master lodge template
`asg_master_lodge_template_woodbury_option4_ink_edition.html`.

## 0. What is already done (do NOT rebuild)
- Master lodge template shipped: `ASG-LODGE-MASTER-OPT4INK-20260818-R1`, sha256 head `724AC63234434F61`,
  124,048 bytes. The static reference build every lodge and new page clones.
- Reference layer settled and pushed: R3 canon (Astro/Cloudflare platform, native-currency ruling,
  fallback-default rates block, per-output component comments, ratified aspect-ratio set). Commits
  `91c194d` + `ab58aa3`. Project-knowledge mirror agrees. Aspect-ratio contract = ledger **D-046**.

## 1. Objective
Complete the **Amakhala reserve microsite** on the master, under full R3 canon + conversion optimisation:
- **Task Zero (before any cloning):** conform the master to R3.
- **Tier 2:** re-clone the TEN sibling lodge pages from the conformed master. **Full Amakhala roster is
  ELEVEN** — the master (Woodbury Lodge) + ten clones — **roster authority = the supplier site
  `amakhala.co.za/lodges`** (amakhala.com shows only 8: the three Lodge-only properties have no BLodge
  object and don't render there). Three content tiers (see §6 for the pairing table): **Both objects** (BLodge rules content, Lodge supplies rate structure): Bush, Safari, Woodbury
  Tented, HillsNek, Leeuwenbosch, Quatermain's. **BLodge-only:** Woodbury Manor (permanent enquire — no
  rate structure). **Lodge-only (standard depth):** Hlosi, Bukela, Induli. Captured facts cover only the
  seven built 13–14 Aug (master + the six "both"); the four new have ZERO captured facts. Roster
  cross-check is a Gate 1 deliverable (§6).
- **Tier 3:** build the new standalone page types — Activities, Specials, Reserve, Map — and wire
  Reviews Block B (tabbed 3-source `/reviews/` page; reference `asg_reviews_pattern_ink_edition.html`).

Repo/reference build work. The live estate is NOT touched.

## 2. PLATFORM & OUTPUT CONTRACT (R3 — governs every file this session)
- **Target:** Astro, hosted on **Cloudflare Pages/Workers**. One shared codebase per portfolio; lodge/
  rate/content data injected from a central database **at build time**; output is static HTML + vanilla
  CSS (custom properties) with **minimal, dependency-free JS** from the edge. **No WordPress, no on-site
  CMS, no plugins.** The Replit demo is a **visual reference only** — its code is not reused.
- **Deliver:** clean semantic static HTML + vanilla CSS custom properties. No page-builder markup, no
  WordPress conventions/shortcodes, no React/Vue/framework, no build-tooling assumptions. Structure so
  the Astro translation is trivial.
- **Component comments are a STANDING PER-OUTPUT RULE:** every repeatable block is delimited by
  `<!-- component: name -->` ... `<!-- /component -->` on **every HTML output in every chat under this
  project**, not just the master.
- **JavaScript:** minimal and deliberate. If a block genuinely needs interactivity, **describe the
  behaviour in a comment** rather than pull a dependency. (The master's JS is already clean — vanilla,
  zero external scripts.)
- **Brand rules stay fully in force:** 60/30/10, one brass CTA per screen, Lora headlines / Poppins
  everything (incl. all numerals), no emoji, no exclamation points, no bubbly buttons.

## 3. CURRENCY & RATES (R3 ruling — read carefully; this changed)
- **Native currency of the rate sheet only.** ZAR for South African lodges (**all Amakhala = ZAR**),
  USD where the sheet is USD-denominated (East Africa / Botswana). **No visitor-currency conversion of
  any kind — no IP-at-render, no build-time variants, no switcher.** Do not reintroduce a switcher.
- **The fallback IS the default/launch state.** The rates block's default rendered state is the
  **enquire-fallback** — "From R xx,xxx — enquire" / "From $x,xxx — enquire", one currency-agnostic
  component state accepting either symbol, built to **equal design quality as the polished primary
  state**. Rate data renders only once a **rate row is certified in the database**; the full rate grid
  is the **enhanced state a lodge graduates into**. At launch no rows are certified, so **every lodge
  renders the fallback** — that is the launch state site-wide.
- **Placeholders are obviously fake**, never plausible: `R 00,000` / `$0,000` / `{{rate_pppn}}`. The
  earlier USD snapshots (Safari $472, Bush $554, ...) were **conversion artifacts, not native rates** —
  **do NOT propagate them.** Amakhala full-grid mockups, when shown, use fake **ZAR** placeholders.
- **Prices are Poppins**, all currencies.

## 4. IMAGE CONTRACT (R3 / ledger D-046 — the fixed set; dimensions in markup, no per-page variation)
| Slot | Ratio | Source px |
|---|---|---|
| Hero | 16:9 | 1920x1080 (viewport-cropped via CSS) |
| Gallery — tall | 2:3 | 800x1200 **(coupled to the 1-tall-beside-4-square grid — revisit if that grid changes)** |
| Gallery — square | 1:1 | 800x800 |
| Room card | 3:2 | 1200x800 |
| Sibling / More-of-the-Reserve card | 3:2 | 1200x800 |
| Thumbnail / lightbox strip | 1:1 | 400x400 |

Neutral placeholders assuming **Cloudflare Images** on-the-fly resizing — never final assets. Image
hosts in production references: `pim.africansafarigroup.com` / `amakhala.com` only. Review-card avatars
are CSS monogram discs, not image slots. Machine-readable: `design-tokens.json -> image.aspectRatios`.

## 5. TASK ZERO — conform the master to R3 (before any clone)
The master predates R3 and carries five defects; fix them at the master so the six clones inherit
correctly (Gate 1 plan -> Gate 2 verified execution, per-edit `assert count==1`, filtered diff):
1. **Placeholder values** — replace plausible `$405`/`$472`... with obviously-fake ZAR placeholders
   `R 00,000` (the full-grid enhanced state); the **default state renders the enquire-fallback**.
2. **Enquire-fallback state** — add it as the **default** rates-block state (currently absent), equal
   design quality, accepting either symbol.
3. **Image dimensions** — 13 `<img>`, 0 with dims; apply the D-046 ratio set with width/height (or CSS
   `aspect-ratio`) in markup.
4. **Component comments** — add `<!-- component: name -->` ... `<!-- /component -->` boundaries throughout.
5. **Currency switcher** — remove it entirely (native-currency ruling; no switcher).
Re-marker the conformed master and QA-sweep (palette/fonts/voice/imagery/structure/overflow 320-1440).

## 6. TIER 2 — the eleven-property Amakhala roster (content-authority model)

**BLodge is the ruling content source wherever it exists.** Pimcore holds two object classes: manually-built
**Lodge** objects and **BLodge** objects derived from each lodge's Booking.com listing — the BLodge is richer
and more authoritative. Where both exist, **BLodge rules the CONTENT; the Lodge sibling supplies only the
RATE STRUCTURE.**

| Lodge | Lodge obj | BLodge obj | Content source | Rate structure |
|---|---|---|---|---|
| Woodbury Lodge (**master**) | L-2575 | B-5325 | BLodge | Lodge |
| Bush Lodge | L-2584 | B-5193 | BLodge | Lodge |
| Safari Lodge | L-2579 | B-5323 | BLodge | Lodge |
| Woodbury Tented Camp | L-2576 | B-5324 | BLodge | Lodge |
| HillsNek Safari Camp | L-2581 | B-5329 | BLodge | Lodge |
| Leeuwenbosch Country House | L-2577 | B-5327 | BLodge | Lodge |
| Quatermain's 1920's Safari Camp | L-2578 | B-5326 | BLodge | Lodge |
| Woodbury Manor | — | B-5338 | BLodge | **none — permanent enquire** |
| Hlosi Game Lodge | L-2582 | — | Lodge (standard) | Lodge |
| Bukela Game Lodge | L-2583 | — | Lodge (standard) | Lodge |
| Induli Game Lodge | L-5406 | — | Lodge (standard) | Lodge |

*Pairing live-verified today via each lodge's amakhala.com "Check availability" tab ID (Bush = tabs-5193; Manor 5338, Safari 5323, Woodbury Lodge 5325, Tented 5324, Quatermain's 5326, Leeuwenbosch 5327, HillsNek 5329).*

**Render gate unchanged (R3 §3 stands):** the Lodge-sibling rate mapping is a data-pipeline fact recorded
for accuracy — **NOT a licence to render numbers.** The rates block defaults to the enquire-fallback; real
rates render only from certified DB rows. **Woodbury Manor has no rate structure at all** — its rates block
is a PERMANENT enquire / check-availability state until a rate sheet is captured.

**Captured facts — valid for the master + the six "both" lodges only** (Bush, Safari, Woodbury Tented,
HillsNek, Leeuwenbosch, Quatermain's). **NO extrapolation between lodges** — specials, child policies,
facility claims and reviews are per-lodge facts:
- **Child policies:** Bush 12+ · Quatermain's 12+ · HillsNek 9+ · Woodbury Tented 6+ · Leeuwenbosch all
  ages · Safari 9+ (ages 9-11 free).
- **Facility truths (honest only):** no air-con at HillsNek · no internet at Quatermain's · WiFi
  main-areas-only where true. Never claim a facility a lodge lacks.
- **Specials (amakhala.com/specials):** Pay 2 Stay 3 (33% off, 1 May-30 Sep 2026, 3-night, single supp
  30%, not combinable) — **captured for the six; stays scoped to the six, never assumed for the four new.**
  Kids Under 12 Free additionally at Safari, Leeuwenbosch, HillsNek. SAVE chips = Badge Green. **The
  supplier site (amakhala.co.za) runs its OWN direct offers — SA Resident, Stay Longer Pay Less, Kids
  Stay Free — which are supplier-direct, NOT ASG offers; never import them as ASG specials when capturing
  the four new.**
- **Sightings (amakhala.com/wildlife):** Common = elephant, giraffe, hippo, buffalo, zebra, wildebeest,
  hyena · Occasional = white rhino, lion · Rare = black rhino, leopard, cheetah, wild dog. Honest
  probability language; never promise a sighting.
- **FAQ:** 12 lodge-specific GEO FAQs per page, **unique answers per page** (zero identical strings
  site-wide — verify programmatically), FAQPage JSON-LD in `<head>`.
- **Rooms:** per-lodge two-column grid, each card its own image + photo set (3:2 room ratio).
- **Reviews:** Bush/HillsNek/Leeuwenbosch = 3 real TripAdvisor excerpts each · Woodbury Tented = 3 ·
  Quatermain's = service quotes only. Counts bound. Rating under the rounding rule (halve `/10`, floor to
  one decimal, never up).
- **Rates:** default enquire-fallback (no numbers) at launch; full-grid mockups use fake ZAR placeholders.
  The supplier's published "full price from" figures are captured to the rates pipeline **separately** and
  do NOT enter any page, mockup, or placeholder — placeholder discipline is unchanged (obviously fake only).

**The four new properties (Hlosi, Bukela, Induli, Woodbury Manor) have ZERO captured facts.** Capture with
chat-level web tools (`web_search` / `web_fetch` — available, confirmed), by tier:
- **Lodge-only (Hlosi, Bukela, Induli):** the **supplier site is PRIMARY** — `amakhala.co.za/lodges/{slug}`
  carries full descriptions, facility lists and star gradings; Booking.com is the **secondary** source.
- **Woodbury Manor (BLodge-only):** its **Booking.com listing** is the source.
Capture per-lodge: child policy · facilities · star grading · rooms/images · reviews · description. **What
the tools genuinely cannot reach → gaps batch as itemised per-lodge entries with the specific URL Riaan must
supply.** Never extrapolate one lodge's facts onto another; supplier-direct offers are NOT ASG specials.

**Roster — LIVE-VERIFIED (record, not a deliverable).** Full-page fetches of both sites today confirm all
eleven. `amakhala.co.za/lodges` lists **Bukela Game Lodge as the first entry** in the main lodges list (full
description) and again in the footer Lodges list, the Book Now dropdown, and the contact-form dropdown; the
supplier meta description reads "11 luxury star rated lodges." Induli confirmed. The full object pairing is
live-verified via each lodge's amakhala.com "Check availability" tab ID (Bush = tabs-5193; the rest as
tabled). No open roster or pairing question. (My earlier "ten-lodge nav" reading was a partial JS-rendered
menu — falsified by the full-page fetch; see the capture rule in §10.)

**Gate 1 deliverables for Tier 2 (approve before any clone):**
1. **Template-variant decision (Ruling 3).** With two content depths (BLodge-rich vs Lodge standard),
   decide: **(a)** two page templates, or **(b)** one template with conditional sections that collapse when
   standard-depth content lacks them. Not pre-decided here — bring the recommendation, pairing table as input.
2. **Woodbury Manor treatment.** BLodge-only, no Lodge sibling, **no rate structure** — its rates block is a
   PERMANENT enquire / check-availability state. Decide how the page renders without a rate grid: the same
   template with the rates block locked to enquire (and any rate-dependent sections collapsed), or a Manor
   variant. This is the edge case that stress-tests deliverable 1.
(Per-lodge capture for the four new is now execution, not a Gate-1 deliverable — sources are settled in §6:
supplier-primary for the Lodge-only three, the Booking listing for Manor.)

## 7. TIER 3 — the new page types
Build the STRUCTURE against the master's language + the ratio contract + CRO (§8). Use captured data
where it exists; where it does not, build **bound/placeholder slots** and **log the gap** (§9) — never
invent.
- **Specials** — buildable from captured specials for the six; the four new need capture-first (§6).
- **Reviews Block B** — wire the existing `asg_reviews_pattern_ink_edition.html`.
- **Activities · Reserve · Map** — need data not yet captured (activity list, reserve overview copy,
  Google Maps JSON style spec). Build layout with bound slots; put the exact data needs in the gaps batch.
- **Roster span:** More-of-the-Reserve cross-links and the Reserve page span the full ELEVEN-property
  roster (§1/§6), not the seven.

## 8. CONVERSION OPTIMISATION (validated for ASG — apply throughout)
Concierge consultation, not a transaction · **Tier-1 trust signals** (SATSA 3099 · ATTA · Cape Town
Tourism Classic · Tripadvisor · Travellers' Choice 2026 = ASG proof rows only, never lodge-scoped) ·
**response-time promise near CTA** ("within 15 minutes in working hours" — never "24/7") · **WhatsApp
co-primary** (bound placeholder until the Business number lands) · **sticky booking bar** owns the
persistent action, sub-nav wayfinding-only, per-room CTAs outline · **no fake urgency** · **multi-step
enquiry, contact details LAST**.

## 9. GAPS BATCH (fill and surface ONCE at the end — never guess; capture-first per §6)
**Resolved — live-verified today (full-page fetches of both sites):** roster = eleven (`amakhala.co.za/lodges`
lists Bukela first; meta reads "11 luxury star rated lodges"); Bukela and Induli confirmed in scope; full
object pairing verified via amakhala.com "Check availability" tab IDs (Bush = tabs-5193); canonical spelling
"Quatermain's 1920's Safari Camp" (supplier form).
**Per-new-property capture (attempt supplier-primary first; itemise what's unreachable + the URL Riaan must supply):**
- **Hlosi Game Lodge** (L-2582): `amakhala.co.za/lodges/hlosi-game-lodge` (primary) → Booking (secondary) —
  child policy · facilities · star grading · rooms/images · reviews · description.
- **Bukela Game Lodge** (L-2583): `amakhala.co.za/lodges/bukela-game-lodge` (primary) → Booking — same set.
- **Induli Game Lodge** (L-5406): `amakhala.co.za/lodges/induli-game-lodge` (primary) → Booking — same set.
- **Woodbury Manor** (B-5338, BLodge-only): its Booking.com listing; rates = permanent enquire (no rate
  structure).
**Page data still needed:**
- Activities page: the actual Amakhala activity list + copy.
- Reserve page: reserve overview copy (spans all 11).
- Map: Google Maps JSON style spec (also needed for the Wetu itinerary).
- WhatsApp Business number (bind slot until it exists).
- Native ZAR rate sheets per lodge (real rates from the DB on certification; not needed for the
  fallback-default launch, but flag the certification dependency).
- [add anything else encountered — one batch only]

## 10. GATES, SYNC & PASS CRITERIA
- **Two gates:** plan + pass-criteria approved (Gate 1), then verified execution (Gate 2). No file
  touched until the step plan is approved.
- **Verify, don't assert:** every completion claim carries exact grep/probe counts + a filtered diff.
  `assert count==1` before every surgical edit. Never `git add .` — explicit paths only.
- **Tools:** the bash sandbox has no outbound network, but **chat-level web tools (`web_search` /
  `web_fetch`) ARE available** — use them for the §6 capture-first on the four new properties and any thin
  BLodge content. `web_fetch` reaches static HTML; it cannot render JS-built content (live reviews, IP-
  converted prices) or reach auth-walled pages. Whatever the tools genuinely cannot reach → gaps batch,
  never invented. Never extrapolate one lodge's facts onto another.
- **Capture rule (standing):** a partial or nav-only capture is **never roster evidence** — use full-page
  fetches only. (Today's lesson: a JS-rendered nav menu read as 10 lodges; the full-page fetch confirmed 11.)
- **Sync discipline:** any design-system file changed -> commit explicit paths in `asg-brand-guidelines`,
  then mirror the same file in project knowledge; marker/hash probe before every commit. New decisions
  logged to the Site Factory ledger.
- **Pass criteria:** master conformed to R3 (5 defects fixed, re-markered); **Gate 1 cleared** (roster
  confirmed [supplier authority] + template-variant decision + per-lodge capture plan); the eleven-property
  roster built to the content-authority model (BLodge rules content where it exists; Lodge supplies rate
  structure; Woodbury Manor permanent-enquire); each page with unique-answer FAQs + JSON-LD, fallback-default
  rates, D-046 ratios with dims, component comments, honest per-lodge facility claims, per-page markers;
  capture-first attempted for the four new with unreachable items itemised per-lodge in the gaps batch; Tier 3
  Specials + Reviews Block B built, Activities/Reserve/Map structured with logged gaps; one consolidated gaps
  batch; nothing in the live estate touched; nothing invented.
