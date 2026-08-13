# Logo

The fixed lion crest plus a typographic wordmark. The crest is never redrawn — sub-brands change ONLY `name`/`sub`.

```jsx
<Logo variant="horizontal" tone="white" size={44} />
<Logo variant="stacked" name="SABI SAND" sub="GAME RESERVE" />
<Logo variant="icon" tone="brass" size={32} />
```

variants: `horizontal` (nav default) · `stacked` · `icon`. tones: `white` · `ink` · `brass` · `sand`.

**Asset paths:** the crest is a PNG. Set `iconBase` to the relative path of `assets/logos/` from your page (e.g. `"../../assets/logos/"`), or pass an explicit `iconSrc`.
