# Button

The primary action control. Brass fill is the single signal — use **one** primary `Button` per view; everything else is secondary, ghost, or link. Labels render as tracked uppercase Poppins.

```jsx
<Button variant="primary" size="lg" iconRight="arrow-right">Plan My Safari</Button>
<Button variant="secondary">View Itinerary</Button>
<Button variant="ghost" icon="filter">Filter</Button>
<Button variant="link" iconRight="arrow-right">See all reserves</Button>
```

- **variant**: `primary` (brass fill, **white** label — brand rule; labels are min 12px semibold tracked caps), `secondary` (hairline outline), `ghost` (quiet), `link` (inline brass, sentence case).
- **size**: `sm` · `md` · `lg`.
- **icon** / **iconRight**: any `IconName`. **loading** shows a spinner. **fullWidth** stretches. **onLight** adjusts outline/ghost for ivory grounds.
- Renders an `<a>` when `href` is set.
