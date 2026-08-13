# Breadcrumb

Quiet wayfinding trail; the last item renders as the current page — plain text, never a link.

```jsx
<Breadcrumb items={[
  {label:"Destinations", href:"/"},
  {label:"Sabi Sand", href:"/sabi-sand"},
  {label:"Londolozi Founders Camp"},
]} />
```

`hero` — the over-hero treatment: breadcrumbs sit **top-left over the hero image with no background panel**; links in Heritage Sand, brass on hover, tracked caps.

```jsx
<Breadcrumb hero items={[...]} />
```