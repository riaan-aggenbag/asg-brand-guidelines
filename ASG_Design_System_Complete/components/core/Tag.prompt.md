# Tag

Filter / attribute chip (pill). Interactive when `onClick` is set; removable when `onRemove` is set.

```jsx
<Tag dot>Sabi Sand</Tag>
<Tag selected onClick={...}>Big Five</Tag>
<Tag onRemove={...}>October</Tag>
```

Use `selected` for active filters (brass). Combine `onClick` + `selected` for a filter toggle.
