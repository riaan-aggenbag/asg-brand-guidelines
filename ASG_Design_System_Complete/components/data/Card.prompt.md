# Card

The core content unit — a lodge, reserve, or itinerary. Media (or a photography slot) on top, serif title, supporting copy, and an optional footer row.

```jsx
<Card href="#"
  image="/lodges/londolozi.jpg"
  badge={<Badge variant="solid">Big Five</Badge>}
  eyebrow="Sabi Sand"
  title="Londolozi Founders Camp"
  footer={<><div className="asg-card__price"><b>R 18,200</b><span>pp / night</span></div><Button size="sm" variant="secondary">View</Button></>}>
  <p className="asg-card__desc">The highest leopard-sighting density in Africa.</p>
</Card>
```

Omit `image` to show a "Photography" slot. Renders as a link (hover lift) when `href` is set.