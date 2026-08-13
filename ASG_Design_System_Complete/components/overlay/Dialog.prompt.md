# Dialog

Modal over a dark scrim. Closes on backdrop click and Escape.

```jsx
<Dialog open={open} onClose={close} title="Enquire about Londolozi"
  footer={<><Button variant="ghost" onClick={close}>Cancel</Button><Button>Send enquiry</Button></>}>
  <p>A specialist will reply within the hour.</p>
</Dialog>
```