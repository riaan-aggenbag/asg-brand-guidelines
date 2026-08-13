# Tabs

Underline tabs with a brass active indicator.

```jsx
<Tabs
  tabs={[{id:"overview",label:"Overview"},{id:"lodges",label:"Lodges",icon:"map-pin"},{id:"rates",label:"Rates"}]}
  defaultValue="overview"
  onChange={setTab}
/>
```

Pass `value` + `onChange` for a controlled component.