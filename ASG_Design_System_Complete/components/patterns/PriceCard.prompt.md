# PriceCard

Hero booking sidebar — warm-ivory card floated over the hero photograph. From-price is the one serif numeral moment; dual CTAs; "no payment required" assurance note.

```jsx
<PriceCard
  from="R 18,200"
  unit="pp / night"
  primaryLabel="Start Planning / Enquire"
  onPrimary={openEnquiry}
  secondaryLabel="Check Availability"
  onSecondary={checkDates}
/>
```

Default note: "No payment required · we reply within 24 hours" — pass `note=""` to hide. Omit `secondaryLabel` for a single CTA.
