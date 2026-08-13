# ValuePropBar

Four columns on Charcoal, straight under the hero: the why-book-direct strip. Labels are **12px tracked-caps brass** (brand decision — never 10px).

```jsx
<ValuePropBar items={[
  {k:"Current Special", t:"Pay 2, Stay 3", d:"Stay three nights and pay for only two."},
  {k:"Book Direct", t:"Best rate guaranteed", d:"The lodge's own rate with no markup."},
  {k:"Plan With a Consultant", t:"Reply within 24h", d:"Send your dates; a consultant confirms availability."},
  {k:"Expert Support", t:"Specialists on call", d:"Consultants who know the reserve."},
]} />
```

Full-bleed: place it directly in the page flow (it wraps its own container). 4 → 2 → 1 columns responsively.
