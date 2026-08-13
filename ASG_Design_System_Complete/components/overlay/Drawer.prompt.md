# Drawer

Slide-in panel over a dark scrim. The mobile home of anything that is a sidebar or nav row on desktop: navigation links, result filters, a booking summary.

```jsx
const { Drawer, Button, Checkbox } = window.DesignSystem_e5ff94;

<Drawer open={open} onClose={() => setOpen(false)} title="Menu"
        footer={<Button variant="primary" style={{width:'100%'}}>Plan My Safari</Button>}>
  …links or filter controls…
</Drawer>
```

- `side="right"` (default) for navigation, `side="left"` for filters, `side="bottom"` for sheets.
- Head shows a tracked-caps `title` and always a close button; Escape and backdrop click also close.
- Pass a full-width primary Button as `footer` to pin the key action.
- Keep contents calm: one list of links or one group of controls — no nested scrolling regions.
