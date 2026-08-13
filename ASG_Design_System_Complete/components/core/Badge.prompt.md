# Badge

Small status / category marker in tracked caps. Keep brass for genuine signals.

```jsx
<Badge variant="brass" dot>Available</Badge>
<Badge variant="neutral">Malaria-Free</Badge>
<Badge variant="success">Confirmed</Badge>
```

variants: `neutral` · `brass` · `solid` (deep brass — badge text sits under the 12px white-on-brass minimum, so the fill steps down to `--asg-brass-600`) · `green` (`--asg-badge-green` — sightings / inclusion status) · `success` · `warning` · `danger` · `info`. `dot` adds a leading status dot.
