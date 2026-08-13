# ASG Direct Bookings — UI Kit

The **ASG Direct Bookings** site — one of ASG's two operating models. Most ASG sites are **inquiry / consultation-led** (PPC-driven; a specialist reaches out). This is the other model: an **ASG-owned direct-booking site** where visitors search, book, and pay directly — no inquiry step. Same crest, same serif, brass accent; only the wordmark changes ("ASG DIRECT · BOOKINGS"). Real rates, real availability, **no markup at checkout**.

## Editions
- **Dark** (default) and **Light** — `index.html`, switchable via the bottom **Dark / Light** toggle (persists in `localStorage`).
- **Editorial (blend)** — `editorial.html`, dark chrome (header + booking stepper) and a **dark footer** bookending a **light booking body** (ivory ground, white filter/result/summary cards). Matches the flagship site's editorial edition so the two products feel of a piece.

## Screens
- **Results** (`ResultsScreen.jsx`) — search summary bar, filter sidebar (price slider, reserve/experience checkboxes, malaria-free switch), property result cards with live rates.
- **Property** (`PropertyScreen.jsx`) — gallery, date strip, room selection, sticky stay summary.
- **Checkout** (`CheckoutScreen.jsx`) — guest, arrival, and payment cards with a sticky order summary (deposit logic).
- **Confirm** (`ConfirmScreen.jsx`) — confirmation with booking reference, summary, and the assigned specialist.
- **Chrome** (`SbnChrome.jsx`) — header with sub-brand lockup + booking stepper, footer with the "Part of African Safari Group" endorsement.

## Interaction
`index.html` mounts a state router; the header stepper and bottom pill switcher both navigate. "View & book" → property → checkout → confirm. Route persists in `localStorage`.

## Notes
- **Photography is a placeholder** (`SbnPhoto`) — drop in real imagery to finish.
- **Dark / Light.** Default is the dark edition; the **Light** toggle in the bottom switcher previews the Light Edition (persists in `localStorage`).
- Built entirely from the shared component bundle; the sub-brand lockup is `<Logo name="ASG DIRECT" sub="BOOKINGS" />`.
