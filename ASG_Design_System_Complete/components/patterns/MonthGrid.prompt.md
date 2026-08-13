# MonthGrid

Best-time-to-visit grid: 12 month cells colour-coded Peak (brass + white) / Good (sand + ink) / Fair (bone + ink), with a built-in legend. Month names 13.5px semibold, sub-labels 9.5px tracked caps. Lives in the dark "When to go" band.

```jsx
<MonthGrid months={[
  {m:"Jan", s:"Green summer", level:"good"},
  {m:"May", s:"Dry, prime", level:"peak"},
  // ...12 cells
]} />
```

Defaults to a Southern-Africa dry-winter-peak pattern; `legend={false}` hides the key. Collapses 12 → 6 → 3 columns on smaller screens.
