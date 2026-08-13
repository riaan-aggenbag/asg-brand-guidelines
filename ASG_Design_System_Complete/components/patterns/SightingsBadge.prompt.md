# SightingsBadge

Wildlife sighting-probability badge. Sightings honesty is a voice feature — plain probability language, never a promise. Four fixed levels:

- `most` — Badge Green, white text, "Most drives"
- `very` — Safari Brass, white text, "Very often"
- `often` — Heritage Sand, **ink** text, "Often"
- `rare` — Charcoal, white text, "Rarely · elusive"

```jsx
<SightingsBadge level="most" />
<SightingsBadge level="rare">Rarely · elusive</SightingsBadge>
```

Compose with a species name in a row: `Leopard — <SightingsBadge level="rare" />`.
