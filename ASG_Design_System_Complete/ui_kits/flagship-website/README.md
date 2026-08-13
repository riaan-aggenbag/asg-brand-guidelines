# Flagship Website — UI Kit

An interactive recreation of the African Safari Group flagship marketing site, built on the design-system components. Consultation-led (no self-service checkout), dark editorial luxury.

## Editions
This kit ships in three editions:
- **Dark** (default) and **Light** — `index.html`, switchable via the bottom **Dark / Light** toggle (persists in `localStorage`).
- **Editorial (blend)** — `editorial.html`, a standalone home page that bookends a **layered light body** (alternating ivory / white-card / sand-tint bands, with one interior dark specialist band) between **dark chrome** (nav) and a **dark footer**. This is the "best of both" layout: dark for drama at the top and bottom, lighter blocks for the reading body.

## Screens
- **Home** (`HomeScreen.jsx`) — hero, "why ASG" value grid, featured reserves, specialist band, pull-quote, stats.
- **Reserve** (`ReserveScreen.jsx`) — Sabi Sand detail in the **Option 4 architecture**: breadcrumbs over the hero, frosted fact pills, sub-nav with nav handoff + scrollspy, wildlife sightings-honesty list, filterable lodge grid, dark best-time band with the month season grid, getting-there steps.
- **Lodge** (`LodgeScreen.jsx`) — Londolozi detail in the **Option 4 architecture**: hero with price card, value-prop bar, direct-enquiry checklist, sub-nav, gallery, rooms, included experiences, best-time band, reviews, book banner, "More of the Reserve", enquiry dialog.
- **Enquire** (`EnquireScreen.jsx`) — consultation form with a 3-step "what happens next", success toast.
- **Chrome** (`Chrome.jsx`) — sticky header + footer (with accreditation row), shared `SubNav` (nav handoff + scrollspy), shared across screens.

## Nav behaviour (Option 4)
The main nav is sticky until a page's sub-nav meets it, then slides away over 0.28s and the sub-nav owns the top; scrolling back up reverses the handoff. The sub-nav runs a scrollspy — a brass underline follows the section in view. Breadcrumbs sit top-left over the hero image with no background panel; the current page is plain text, never a link.

## Interaction
`index.html` mounts a small state router. Nav links and CTAs move between screens; a bottom pill switcher jumps directly to any screen. Route persists in `localStorage`. Lodge "Enquire" opens a modal; the enquiry form shows a confirmation toast.

## Notes
- **Photography**: the Reserve and Lodge screens use ASG lodge photography from `assets/photos/`; the Home screen's `PhotoSlot` placeholders remain labelled with the shot the brand book calls for.
- **Dark / Light.** The kit ships in the dark edition by default; use the **Light** toggle in the bottom switcher to preview the Light Edition (theme persists in `localStorage`).
- Components come from the bundle (`window.<Namespace>`); this kit only composes them.
- Logo asset path is set via `iconBase="../../assets/logos/"`.
