/* @ds-bundle: {"format":4,"namespace":"DesignSystem_e5ff94","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Accordion","sourcePath":"components/data/Accordion.jsx"},{"name":"Card","sourcePath":"components/data/Card.jsx"},{"name":"Stat","sourcePath":"components/data/Stat.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Spinner","sourcePath":"components/feedback/Spinner.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Dialog","sourcePath":"components/overlay/Dialog.jsx"},{"name":"Drawer","sourcePath":"components/overlay/Drawer.jsx"},{"name":"AccreditationRow","sourcePath":"components/patterns/AccreditationRow.jsx"},{"name":"EnquiryChecklist","sourcePath":"components/patterns/EnquiryChecklist.jsx"},{"name":"FactPill","sourcePath":"components/patterns/FactPill.jsx"},{"name":"DEFAULT_MONTHS","sourcePath":"components/patterns/MonthGrid.jsx"},{"name":"MonthGrid","sourcePath":"components/patterns/MonthGrid.jsx"},{"name":"PriceCard","sourcePath":"components/patterns/PriceCard.jsx"},{"name":"SightingsBadge","sourcePath":"components/patterns/SightingsBadge.jsx"},{"name":"ValuePropBar","sourcePath":"components/patterns/ValuePropBar.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"545f12fc8243","components/core/Badge.jsx":"f9eadf2f727b","components/core/Button.jsx":"a0f59dd14294","components/core/Divider.jsx":"3ec69dcd7fa3","components/core/Icon.jsx":"7bcc7ec7dece","components/core/IconButton.jsx":"d5cc0c856a1e","components/core/Logo.jsx":"2e27fe350c66","components/core/Tag.jsx":"cbbf9a68e665","components/data/Accordion.jsx":"c3decb0f89ff","components/data/Card.jsx":"b4885859ceb0","components/data/Stat.jsx":"463ebdc72c10","components/feedback/Alert.jsx":"d20c2ab0ecfc","components/feedback/Spinner.jsx":"06b6c1d631f2","components/feedback/Toast.jsx":"d2e3c8d857c4","components/feedback/Tooltip.jsx":"9216def51129","components/forms/Checkbox.jsx":"0b3f8c8ad9fa","components/forms/Input.jsx":"c1ea49b07a0a","components/forms/Radio.jsx":"3b0605f15eac","components/forms/Select.jsx":"5a16c5349e6c","components/forms/Switch.jsx":"b3760352e0e3","components/forms/Textarea.jsx":"af7cc3d2892b","components/navigation/Breadcrumb.jsx":"55523259cfa0","components/navigation/Pagination.jsx":"ec0c3e83064b","components/navigation/Tabs.jsx":"e91d14f0c452","components/overlay/Dialog.jsx":"3a73ecd0f37d","components/overlay/Drawer.jsx":"dcd513f5476d","components/patterns/AccreditationRow.jsx":"a124a3ca676c","components/patterns/EnquiryChecklist.jsx":"6b08b6a42566","components/patterns/FactPill.jsx":"828e11bd1c2d","components/patterns/MonthGrid.jsx":"20fd63065030","components/patterns/PriceCard.jsx":"78a2c8d7bb05","components/patterns/SightingsBadge.jsx":"5a63cabcb52c","components/patterns/ValuePropBar.jsx":"2bef590baa38","ui_kits/asg-direct-bookings/CheckoutScreen.jsx":"38b113ed587f","ui_kits/asg-direct-bookings/ConfirmScreen.jsx":"ab2c8d9c98d4","ui_kits/asg-direct-bookings/PropertyScreen.jsx":"7b28ed3caae9","ui_kits/asg-direct-bookings/ResultsScreen.jsx":"35de093506fe","ui_kits/asg-direct-bookings/SbnChrome.jsx":"3535bc5c4118","ui_kits/flagship-website/Chrome.jsx":"f9cd698445cc","ui_kits/flagship-website/EnquireScreen.jsx":"76b998ba4d4d","ui_kits/flagship-website/HomeScreen.jsx":"0748b3b920b3","ui_kits/flagship-website/LodgeScreen.jsx":"e56305adfe69","ui_kits/flagship-website/ReserveScreen.jsx":"58108c936aee","ui_kits/flagship-website/editorial/EdChrome.jsx":"7d65d547a800","ui_kits/flagship-website/editorial/EdPagesA.jsx":"cc4abb294e23","ui_kits/flagship-website/editorial/EdPagesB.jsx":"c0b90e93f167"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_e5ff94 = window.DesignSystem_e5ff94 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* African Safari Group — Avatar
   Specialist / guest portrait. Image or initials, optional brass ring. */

const CSS = `
.asg-avatar{
  display:inline-flex;align-items:center;justify-content:center;flex:none;
  border-radius:50%;overflow:hidden;background:var(--asg-charcoal-500);
  color:var(--text-primary);font-family:var(--font-body);font-weight:var(--fw-medium);
  letter-spacing:.02em;text-transform:uppercase;user-select:none;
}
.asg-avatar img{width:100%;height:100%;object-fit:cover;display:block;}
.asg-avatar--ring{box-shadow:0 0 0 1px var(--surface-base),0 0 0 2px var(--asg-brass);}
.asg-avatar--xs{width:28px;height:28px;font-size:11px;}
.asg-avatar--sm{width:36px;height:36px;font-size:13px;}
.asg-avatar--md{width:48px;height:48px;font-size:16px;}
.asg-avatar--lg{width:64px;height:64px;font-size:21px;}
.asg-avatar--xl{width:88px;height:88px;font-size:28px;}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "avatar");
  s.textContent = CSS;
  document.head.appendChild(s);
}
function initials(name = "") {
  return name.trim().split(/\s+/).slice(0, 2).map(w => w[0] || "").join("");
}
function Avatar({
  src,
  name = "",
  size = "md",
  ring = false,
  className = "",
  ...rest
}) {
  inject();
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["asg-avatar", `asg-avatar--${size}`, ring && "asg-avatar--ring", className].filter(Boolean).join(" "),
    role: "img",
    "aria-label": name || "avatar"
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name
  }) : /*#__PURE__*/React.createElement("span", null, initials(name)));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* African Safari Group — Badge
   Small status / category marker. Warm, restrained tones. */

const CSS = `
.asg-badge{
  display:inline-flex;align-items:center;gap:.4em;
  font-family:var(--font-body);font-weight:var(--fw-medium);
  font-size:11px;letter-spacing:.06em;text-transform:uppercase;line-height:1;
  padding:5px 9px;border-radius:var(--radius-xs);border:1px solid transparent;white-space:nowrap;
}
.asg-badge--solid{background:var(--asg-brass-600);color:var(--text-on-brass);} /* 11px label < 12px min for brass-500 + white — deep brass fill per brand rule */
.asg-badge--green{background:var(--asg-badge-green);color:#FFFFFF;}
.asg-badge__dot{width:6px;height:6px;border-radius:50%;background:currentColor;}
.asg-badge--neutral{background:var(--asg-ivory-a08);color:var(--text-body);border-color:var(--border-default);}
.asg-badge--brass{background:var(--asg-brass-a20);color:var(--accent-hover);border-color:var(--asg-brass-a40);}
.asg-badge--success{background:var(--success-bg);color:var(--success);}
.asg-badge--warning{background:var(--warning-bg);color:var(--warning);}
.asg-badge--danger{background:var(--danger-bg);color:var(--danger);}
.asg-badge--info{background:var(--info-bg);color:var(--info);}
/* Solid earth-tone colour range — self-contained fills that read identically
   on light, dark or blended grounds. oklch-harmonised (shared chroma band). */
.asg-badge--sand{background:oklch(0.77 0.055 75);color:var(--asg-ink);}
.asg-badge--gold{background:oklch(0.73 0.10 86);color:var(--asg-ink);}
.asg-badge--clay{background:oklch(0.56 0.10 46);color:#FFFFFF;}
.asg-badge--olive{background:oklch(0.53 0.06 128);color:var(--asg-warm-ivory);}
.asg-badge--moss{background:oklch(0.47 0.055 150);color:var(--asg-warm-ivory);}
.asg-badge--plum{background:oklch(0.51 0.06 22);color:var(--asg-warm-ivory);}
.asg-badge--stone{background:oklch(0.59 0.012 80);color:var(--asg-warm-ivory);}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "badge");
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Badge({
  children,
  variant = "neutral",
  dot = false,
  className = "",
  ...rest
}) {
  inject();
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["asg-badge", `asg-badge--${variant}`, className].filter(Boolean).join(" ")
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "asg-badge__dot",
    "aria-hidden": "true"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* African Safari Group — Divider
   Hairline rule, or the signature short brass rule-line. Optional centred label. */

const CSS = `
.asg-divider{border:0;height:1px;background:var(--border-default);width:100%;margin:0;}
.asg-divider--vertical{height:auto;width:1px;align-self:stretch;min-height:1em;}
.asg-rule-line{display:inline-block;width:56px;height:2px;background:var(--asg-brass);border:0;}
.asg-rule-line--center{display:block;margin-inline:auto;}
.asg-divider-label{display:flex;align-items:center;gap:16px;width:100%;}
.asg-divider-label::before,.asg-divider-label::after{content:"";flex:1;height:1px;background:var(--border-default);}
.asg-divider-label__txt{font-family:var(--font-body);font-size:11px;font-weight:var(--fw-medium);letter-spacing:.22em;text-transform:uppercase;color:var(--text-muted);white-space:nowrap;}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "divider");
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Divider({
  orientation = "horizontal",
  brass = false,
  center = false,
  label,
  className = "",
  ...rest
}) {
  inject();
  if (label) {
    return /*#__PURE__*/React.createElement("div", _extends({
      className: ["asg-divider-label", className].filter(Boolean).join(" ")
    }, rest), /*#__PURE__*/React.createElement("span", {
      className: "asg-divider-label__txt"
    }, label));
  }
  if (brass) {
    return /*#__PURE__*/React.createElement("hr", _extends({
      className: ["asg-rule-line", center && "asg-rule-line--center", className].filter(Boolean).join(" ")
    }, rest));
  }
  return /*#__PURE__*/React.createElement("hr", _extends({
    className: ["asg-divider", orientation === "vertical" && "asg-divider--vertical", className].filter(Boolean).join(" ")
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* African Safari Group — Icon
   Thin-stroke line icons (Lucide geometry, 24px grid, 1.75 stroke by default).
   The brand book defines no icon system; Lucide is the chosen substitute for its
   restrained, editorial line weight. Currency/numerals are typographic, not icons.
   Icons inherit `color` via currentColor; default size 20px. */

const PATHS = {
  "arrow-right": "M5 12h14 M13 6l6 6-6 6",
  "arrow-left": "M19 12H5 M11 18l-6-6 6-6",
  "arrow-up-right": "M7 17 17 7 M7 7h10v10",
  "chevron-right": "M9 6l6 6-6 6",
  "chevron-left": "M15 6l-6 6 6 6",
  "chevron-down": "M6 9l6 6 6-6",
  "chevron-up": "M6 15l6-6 6 6",
  "menu": "M4 6h16 M4 12h16 M4 18h16",
  "close": "M6 6l12 12 M18 6 6 18",
  "check": "M5 12.5 10 17.5 19.5 7",
  "search": "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z M21 21l-4.3-4.3",
  "plus": "M12 5v14 M5 12h14",
  "minus": "M5 12h14",
  "star": "M12 3.5l2.6 5.3 5.9.9-4.25 4.15 1 5.85L12 17.1 6.75 19.75l1-5.85L3.5 9.7l5.9-.9Z",
  "map-pin": "M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
  "calendar": "M7 3v4 M17 3v4 M4 9h16 M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z",
  "user": "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z M4.5 20a7.5 7.5 0 0 1 15 0",
  "users": "M9 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z M2.5 20a6.5 6.5 0 0 1 13 0 M17 4.2a4 4 0 0 1 0 7.6 M21.5 20a6.5 6.5 0 0 0-4-6",
  "phone": "M6.5 3.5h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A16 16 0 0 1 4.5 5.5a2 2 0 0 1 2-2Z",
  "mail": "M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z M3.5 6.5 12 13l8.5-6.5",
  "globe": "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z M3.5 12h17 M12 3a14 14 0 0 1 0 18 M12 3a14 14 0 0 0 0 18",
  "compass": "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z M15.5 8.5l-2 5-5 2 2-5Z",
  "heart": "M12 20S4 14.5 4 8.8A4.3 4.3 0 0 1 12 6a4.3 4.3 0 0 1 8 2.8C20 14.5 12 20 12 20Z",
  "filter": "M3 5h18l-7 8v5l-4 2v-7Z",
  "sliders": "M4 7h10 M18 7h2 M4 12h2 M10 12h10 M4 17h7 M15 17h5 M14 5v4 M6 10v4 M11 15v4",
  "info": "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z M12 11v5 M12 7.6h.01",
  "alert": "M12 3 2.5 20h19L12 3Z M12 9.5v5 M12 17.6h.01",
  "moon": "M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5Z",
  "sun": "M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z M12 2v2 M12 20v2 M4 12H2 M22 12h-2 M5 5l1.5 1.5 M17.5 17.5 19 19 M19 5l-1.5 1.5 M6.5 17.5 5 19",
  "binoculars": "M6 4h3v3H6Z M15 4h3v3h-3Z M9 7h6 M7.5 7 5 18a2.5 2.5 0 0 0 5 .5L11 9 M16.5 7 19 18a2.5 2.5 0 0 1-5 .5L13 9",
  "leaf": "M5 19c0-8 6-14 15-14 0 9-6 15-14 15 0-4 3-8 8-9",
  "play": "M7 4.5 19 12 7 19.5Z",
  "external": "M14 4h6v6 M20 4l-9 9 M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5",
  "download": "M12 3v12 M7 11l5 5 5-5 M4 20h16",
  "clock": "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z M12 7v5l3.5 2"
};
function Icon({
  name,
  size = 20,
  strokeWidth = 1.75,
  color = "currentColor",
  style,
  className,
  ...rest
}) {
  const d = PATHS[name];
  if (!d) return null;
  const segments = d.split(" M").map((s, i) => i === 0 ? s : "M" + s);
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    focusable: "false",
    className: className,
    style: {
      display: "inline-block",
      flex: "none",
      verticalAlign: "middle",
      ...style
    }
  }, rest), segments.map((seg, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: seg
  })));
}
const ICON_NAMES = Object.keys(PATHS);
Object.assign(__ds_scope, { Icon, ICON_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* African Safari Group — Button
   Tracked-caps Poppins label, near-square corners, brass used as the single
   signal. Primary = brass fill with WHITE label (brand rule) — labels are
   min 12px semibold tracked caps so white holds up on brass; smaller text on
   brass uses the deep brass-600 fill instead. Secondary = hairline outline;
   ghost = quiet; link = inline brass. No bounce — colour transitions only. */

const CSS = `
.asg-btn{
  --_bg:transparent;--_fg:var(--text-primary);--_bd:transparent;
  display:inline-flex;align-items:center;justify-content:center;gap:.6em;
  font-family:var(--font-body);font-weight:var(--fw-semibold);
  letter-spacing:var(--ls-button);text-transform:uppercase;
  border:1px solid var(--_bd);background:var(--_bg);color:var(--_fg);
  border-radius:var(--radius-sm);cursor:pointer;text-decoration:none;
  white-space:nowrap;line-height:1;transition:background var(--dur-fast) var(--ease-standard),
  color var(--dur-fast) var(--ease-standard),border-color var(--dur-fast) var(--ease-standard),opacity var(--dur-fast);
  -webkit-tap-highlight-color:transparent;
}
.asg-btn:focus-visible{outline:none;box-shadow:var(--focus-ring-shadow);}
.asg-btn--sm{font-size:12px;padding:9px 16px;}
.asg-btn--md{font-size:12px;padding:13px 24px;}
.asg-btn--lg{font-size:13px;padding:17px 34px;}
.asg-btn--full{width:100%;}
/* loading — keep full-strength colour so the label stays readable */
.asg-btn--loading{cursor:default;pointer-events:none;}
/* primary — brass fill */
.asg-btn--primary{--_bg:var(--asg-brass);--_fg:var(--text-on-brass);--_bd:var(--asg-brass);}
.asg-btn--primary:hover{--_bg:var(--asg-brass-400);--_bd:var(--asg-brass-400);}
.asg-btn--primary:active{--_bg:var(--asg-brass-600);--_bd:var(--asg-brass-600);}
/* secondary — hairline outline */
.asg-btn--secondary{--_bg:transparent;--_fg:var(--text-primary);--_bd:var(--border-strong);}
.asg-btn--secondary:hover{--_bd:var(--asg-brass);--_fg:var(--accent-hover);}
.asg-btn--secondary:active{--_bd:var(--asg-brass-600);}
/* ghost — quiet */
.asg-btn--ghost{--_bg:transparent;--_fg:var(--text-body);--_bd:transparent;}
.asg-btn--ghost:hover{--_fg:var(--text-primary);--_bg:var(--asg-ivory-a08);}
/* link — inline brass */
.asg-btn--link{--_bg:transparent;--_fg:var(--accent);--_bd:transparent;padding-left:0;padding-right:0;letter-spacing:.04em;text-transform:none;}
.asg-btn--link:hover{--_fg:var(--accent-hover);}
/* on ivory ground */
.asg-on-ivory .asg-btn--secondary,.asg-btn--secondary.asg-btn--on-light{--_fg:var(--text-primary-ink);--_bd:var(--asg-bone);}
.asg-on-ivory .asg-btn--ghost,.asg-btn--ghost.asg-btn--on-light{--_fg:var(--text-body-ink);}
.asg-btn__spin{width:1em;height:1em;border-radius:50%;border:2px solid currentColor;border-right-color:transparent;animation:asg-btn-spin .7s linear infinite;}
@keyframes asg-btn-spin{to{transform:rotate(360deg)}}
/* disabled — defined last so it overrides every variant's colours; a legible
   muted fill (dark charcoal + light text), never a low-opacity wash */
.asg-btn--disabled,.asg-btn--disabled:hover,.asg-btn--disabled:active{--_bg:var(--asg-soft-charcoal);--_fg:#CFC7BB;--_bd:var(--asg-soft-charcoal);cursor:not-allowed;pointer-events:none;box-shadow:none;}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "button");
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  fullWidth = false,
  loading = false,
  disabled = false,
  onLight = false,
  as,
  href,
  className = "",
  ...rest
}) {
  inject();
  const Tag = as || (href ? "a" : "button");
  const cls = ["asg-btn", `asg-btn--${variant}`, `asg-btn--${size}`, fullWidth && "asg-btn--full", loading && "asg-btn--loading", disabled && !loading && "asg-btn--disabled", onLight && "asg-btn--on-light", className].filter(Boolean).join(" ");
  const iconSize = size === "lg" ? 18 : size === "sm" ? 14 : 16;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    href: href,
    disabled: Tag === "button" ? disabled || loading : undefined,
    "aria-disabled": disabled || loading || undefined
  }, rest), loading && /*#__PURE__*/React.createElement("span", {
    className: "asg-btn__spin",
    "aria-hidden": "true"
  }), !loading && icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: iconSize,
    strokeWidth: 2
  }), children && /*#__PURE__*/React.createElement("span", null, children), !loading && iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: iconSize,
    strokeWidth: 2
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* African Safari Group — IconButton
   A square, icon-only control. Same restraint as Button. */

const CSS = `
.asg-iconbtn{
  display:inline-flex;align-items:center;justify-content:center;
  background:transparent;border:1px solid transparent;color:var(--text-body);
  border-radius:var(--radius-sm);cursor:pointer;flex:none;
  transition:background var(--dur-fast) var(--ease-standard),color var(--dur-fast) var(--ease-standard),border-color var(--dur-fast) var(--ease-standard);
  -webkit-tap-highlight-color:transparent;
}
.asg-iconbtn:focus-visible{outline:none;box-shadow:var(--focus-ring-shadow);}
.asg-iconbtn[disabled]{opacity:.42;cursor:not-allowed;pointer-events:none;}
.asg-iconbtn--sm{width:34px;height:34px;}
.asg-iconbtn--md{width:42px;height:42px;}
.asg-iconbtn--lg{width:50px;height:50px;}
.asg-iconbtn--ghost:hover{background:var(--asg-ivory-a08);color:var(--text-primary);}
.asg-iconbtn--outline{border-color:var(--border-strong);}
.asg-iconbtn--outline:hover{border-color:var(--asg-brass);color:var(--accent-hover);}
.asg-iconbtn--solid{background:var(--asg-brass);color:var(--text-on-brass);border-color:var(--asg-brass);}
.asg-iconbtn--solid:hover{background:var(--asg-brass-400);border-color:var(--asg-brass-400);}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "iconbutton");
  s.textContent = CSS;
  document.head.appendChild(s);
}
function IconButton({
  icon,
  label,
  variant = "ghost",
  size = "md",
  className = "",
  ...rest
}) {
  inject();
  const iconSize = size === "lg" ? 22 : size === "sm" ? 16 : 19;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    className: ["asg-iconbtn", `asg-iconbtn--${variant}`, `asg-iconbtn--${size}`, className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: iconSize
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* African Safari Group — Logo
   The fixed crest (image asset) plus a typographic wordmark. Sub-brands change
   ONLY the wordmark beneath the same icon. Pass `iconSrc` with the correct
   relative path to the crest PNG for where this is mounted. */

const CSS = `
.asg-logo{display:inline-flex;align-items:center;gap:14px;line-height:1;}
.asg-logo--stacked{flex-direction:column;gap:12px;text-align:center;}
.asg-logo__icon{display:block;flex:none;}
.asg-logo__wm{display:flex;flex-direction:column;gap:5px;}
.asg-logo--stacked .asg-logo__wm{align-items:center;}
.asg-logo__name{font-family:var(--font-serif);font-weight:var(--fw-medium);color:var(--text-primary);letter-spacing:.12em;line-height:1;white-space:nowrap;}
.asg-logo__sub{display:flex;align-items:center;gap:9px;width:100%;}
.asg-logo--stacked .asg-logo__sub{justify-content:center;}
.asg-logo__sub span{font-family:var(--font-body);color:var(--text-body);letter-spacing:.32em;white-space:nowrap;}
.asg-logo__sub i{flex:1;height:1px;background:var(--asg-brass);min-width:16px;}
.asg-logo--stacked .asg-logo__sub i:first-child{display:block;}
.asg-logo--tone-ink .asg-logo__name{color:var(--text-primary-ink);}
.asg-logo--tone-ink .asg-logo__sub span{color:var(--text-body-ink);}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "logo");
  s.textContent = CSS;
  document.head.appendChild(s);
}
const TONE_FILE = {
  white: "asg-icon-white.png",
  ink: "asg-icon-ink.png",
  brass: "asg-icon-brass.png",
  sand: "asg-icon-sand.png"
};
function Logo({
  variant = "horizontal",
  tone = "white",
  name = "AFRICAN SAFARI",
  sub = "GROUP",
  size = 44,
  iconSrc,
  iconBase = "assets/logos/",
  className = "",
  ...rest
}) {
  inject();
  const src = iconSrc || `${iconBase}${TONE_FILE[tone] || TONE_FILE.white}`;
  const nameSize = Math.round(size * 0.42);
  const subSize = Math.max(8, Math.round(size * 0.21));
  if (variant === "icon") {
    return /*#__PURE__*/React.createElement("img", _extends({
      src: src,
      alt: name,
      height: size,
      className: ["asg-logo__icon", className].filter(Boolean).join(" ")
    }, rest));
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["asg-logo", `asg-logo--${variant}`, `asg-logo--tone-${tone}`, className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    height: size,
    className: "asg-logo__icon"
  }), /*#__PURE__*/React.createElement("span", {
    className: "asg-logo__wm"
  }, /*#__PURE__*/React.createElement("span", {
    className: "asg-logo__name",
    style: {
      fontSize: nameSize
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    className: "asg-logo__sub",
    style: {
      fontSize: subSize
    }
  }, variant === "stacked" && /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("span", null, sub), /*#__PURE__*/React.createElement("i", null))));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* African Safari Group — Tag / Chip
   Filter or attribute chip. Optional leading dot and removable close. */

const CSS = `
.asg-tag{
  display:inline-flex;align-items:center;gap:.5em;
  font-family:var(--font-body);font-size:13px;font-weight:var(--fw-regular);
  line-height:1;padding:7px 12px;border-radius:var(--radius-pill);
  background:transparent;border:1px solid var(--border-strong);color:var(--text-body);
  transition:border-color var(--dur-fast) var(--ease-standard),color var(--dur-fast) var(--ease-standard),background var(--dur-fast) var(--ease-standard);
}
.asg-tag--interactive{cursor:pointer;}
.asg-tag--interactive:hover{border-color:var(--asg-brass);color:var(--text-primary);}
.asg-tag--selected{background:var(--asg-brass-a20);border-color:var(--asg-brass);color:var(--accent-hover);}
/* Opaque pastel colour range — self-contained, legible on light/dark/blended */
.asg-tag--sand{background:oklch(0.90 0.03 75);color:oklch(0.42 0.05 60);border-color:transparent;}
.asg-tag--gold{background:oklch(0.91 0.045 88);color:oklch(0.45 0.07 78);border-color:transparent;}
.asg-tag--clay{background:oklch(0.89 0.045 46);color:oklch(0.45 0.09 42);border-color:transparent;}
.asg-tag--olive{background:oklch(0.91 0.035 128);color:oklch(0.42 0.06 135);border-color:transparent;}
.asg-tag--moss{background:oklch(0.90 0.035 150);color:oklch(0.40 0.06 155);border-color:transparent;}
.asg-tag--plum{background:oklch(0.90 0.03 22);color:oklch(0.44 0.06 20);border-color:transparent;}
.asg-tag--stone{background:oklch(0.90 0.008 80);color:oklch(0.42 0.01 80);border-color:transparent;}
.asg-tag__dot{width:7px;height:7px;border-radius:50%;background:var(--accent);flex:none;}
.asg-tag__x{display:inline-flex;margin-right:-3px;opacity:.7;cursor:pointer;background:none;border:0;padding:0;color:inherit;}
.asg-tag__x:hover{opacity:1;}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "tag");
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Tag({
  children,
  dot = false,
  selected = false,
  color,
  onRemove,
  onClick,
  className = "",
  ...rest
}) {
  inject();
  const interactive = !!onClick;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["asg-tag", interactive && "asg-tag--interactive", selected && "asg-tag--selected", color && `asg-tag--${color}`, className].filter(Boolean).join(" "),
    onClick: onClick
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "asg-tag__dot",
    "aria-hidden": "true"
  }), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "asg-tag__x",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "close",
    size: 13,
    strokeWidth: 2
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* African Safari Group — Accordion
   Expandable rows with a brass chevron. Single or multiple open. */

const CSS = `
.asg-acc{display:flex;flex-direction:column;border-top:1px solid var(--border-default);}
.asg-acc__item{border-bottom:1px solid var(--border-default);}
.asg-acc__head{
  width:100%;display:flex;align-items:center;justify-content:space-between;gap:16px;
  background:none;border:0;cursor:pointer;text-align:left;padding:18px 2px;
  font-family:var(--font-serif);font-size:18px;font-weight:var(--fw-medium);color:var(--text-primary);
  transition:color var(--dur-fast);
}
.asg-acc__head:hover{color:var(--accent-hover);}
.asg-acc__chev{flex:none;color:var(--accent);transition:transform var(--dur-base) var(--ease-standard);}
.asg-acc__item--open .asg-acc__chev{transform:rotate(180deg);}
.asg-acc__panel{overflow:hidden;display:grid;grid-template-rows:0fr;transition:grid-template-rows var(--dur-base) var(--ease-standard);}
.asg-acc__item--open .asg-acc__panel{grid-template-rows:1fr;}
.asg-acc__panel-inner{min-height:0;overflow:hidden;}
.asg-acc__content{padding:0 2px 20px;font-family:var(--font-body);font-size:14px;line-height:1.65;color:var(--text-body);max-width:64ch;}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "accordion");
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Accordion({
  items = [],
  allowMultiple = false,
  defaultOpen = [],
  className = "",
  ...rest
}) {
  inject();
  const [open, setOpen] = React.useState(new Set(defaultOpen));
  const toggle = i => {
    setOpen(prev => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(i)) next.delete(i);else next.add(i);
      return next;
    });
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["asg-acc", className].filter(Boolean).join(" ")
  }, rest), items.map((it, i) => {
    const isOpen = open.has(i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: ["asg-acc__item", isOpen && "asg-acc__item--open"].filter(Boolean).join(" ")
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "asg-acc__head",
      "aria-expanded": isOpen,
      onClick: () => toggle(i)
    }, /*#__PURE__*/React.createElement("span", null, it.title), /*#__PURE__*/React.createElement("span", {
      className: "asg-acc__chev"
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-down",
      size: 20
    }))), /*#__PURE__*/React.createElement("div", {
      className: "asg-acc__panel"
    }, /*#__PURE__*/React.createElement("div", {
      className: "asg-acc__panel-inner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "asg-acc__content"
    }, it.content))));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/data/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* African Safari Group — Card
   The core content unit — a lodge, reserve, or itinerary. Optional media with a
   bottom scrim, a serif title, supporting copy and a meta/footer row. Renders as
   a link when `href` is set, with a quiet lift on hover. */

const CSS = `
.asg-card{
  display:flex;flex-direction:column;background:var(--surface-raised);
  border:1px solid var(--border-default);border-radius:var(--radius-md);overflow:hidden;
  text-decoration:none;color:inherit;
  transition:transform var(--dur-base) var(--ease-standard),border-color var(--dur-base) var(--ease-standard),box-shadow var(--dur-base) var(--ease-standard);
}
.asg-card--link{cursor:pointer;}
.asg-card--link:hover{transform:translateY(-3px);border-color:var(--asg-brass-a40);box-shadow:var(--shadow-lg);}
.asg-card__media{position:relative;aspect-ratio:4/3;background:var(--asg-ink-900);overflow:hidden;}
.asg-card__media img{width:100%;height:100%;object-fit:cover;display:block;transition:transform var(--dur-slow) var(--ease-standard);}
.asg-card--link:hover .asg-card__media img{transform:scale(1.04);}
.asg-card__media::after{content:"";position:absolute;inset:0;background:var(--scrim-bottom);opacity:.5;}
.asg-card__media-slot{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:var(--text-faint);font-family:var(--font-body);font-size:12px;letter-spacing:.16em;text-transform:uppercase;}
.asg-card__badge{position:absolute;top:13px;left:13px;z-index:2;}
.asg-card__fav{position:absolute;top:11px;right:11px;z-index:2;}
.asg-card__body{display:flex;flex-direction:column;gap:9px;padding:var(--gap-card);flex:1;}
.asg-card__eyebrow{font-family:var(--font-body);font-size:11px;font-weight:var(--fw-medium);letter-spacing:.18em;text-transform:uppercase;color:var(--accent);}
.asg-card__title{font-family:var(--font-serif);font-weight:var(--fw-medium);font-size:22px;line-height:1.15;color:var(--text-primary);margin:0;}
.asg-card__desc{font-family:var(--font-body);font-size:14px;line-height:1.6;color:var(--text-body);margin:0;}
.asg-card__footer{margin-top:auto;padding-top:14px;display:flex;align-items:flex-end;justify-content:space-between;gap:12px;border-top:1px solid var(--border-subtle);}
.asg-card__price{font-family:var(--font-numeric);}
.asg-card__price b{display:block;font-weight:var(--fw-medium);font-size:18px;color:var(--text-primary);}
.asg-card__price span{font-size:12px;color:var(--text-muted);}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "card");
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Card({
  image,
  imageAlt = "",
  imageSlot,
  badge,
  favorite,
  eyebrow,
  title,
  children,
  footer,
  href,
  className = "",
  ...rest
}) {
  inject();
  const Tag = href ? "a" : "div";
  const hasMedia = image || imageSlot || badge || favorite;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    className: ["asg-card", href && "asg-card--link", className].filter(Boolean).join(" ")
  }, rest), hasMedia && /*#__PURE__*/React.createElement("div", {
    className: "asg-card__media"
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt
  }) : /*#__PURE__*/React.createElement("div", {
    className: "asg-card__media-slot"
  }, imageSlot || "Photography"), badge && /*#__PURE__*/React.createElement("div", {
    className: "asg-card__badge"
  }, badge), favorite && /*#__PURE__*/React.createElement("div", {
    className: "asg-card__fav"
  }, favorite)), /*#__PURE__*/React.createElement("div", {
    className: "asg-card__body"
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    className: "asg-card__eyebrow"
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    className: "asg-card__title"
  }, title), children, footer && /*#__PURE__*/React.createElement("div", {
    className: "asg-card__footer"
  }, footer)));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Card.jsx", error: String((e && e.message) || e) }); }

// components/data/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* African Safari Group — Stat
   A single numeral statistic. Value is always Poppins; serif optional for label. */

const CSS = `
.asg-stat{display:flex;flex-direction:column;gap:4px;}
.asg-stat--center{align-items:center;text-align:center;}
.asg-stat__value{font-family:var(--font-numeric);font-weight:var(--fw-medium);line-height:1;color:var(--accent);font-feature-settings:"tnum" 1;}
.asg-stat__label{font-family:var(--font-body);font-size:13px;color:var(--text-muted);letter-spacing:.02em;}
.asg-stat--plain .asg-stat__value{color:var(--text-primary);}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "stat");
  s.textContent = CSS;
  document.head.appendChild(s);
}
const SIZES = {
  sm: 24,
  md: 34,
  lg: 46
};
function Stat({
  value,
  label,
  size = "md",
  brass = true,
  center = false,
  className = "",
  ...rest
}) {
  inject();
  const px = SIZES[size] || 34;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["asg-stat", center && "asg-stat--center", !brass && "asg-stat--plain", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "asg-stat__value",
    style: {
      fontSize: px
    }
  }, value), label && /*#__PURE__*/React.createElement("span", {
    className: "asg-stat__label"
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Stat.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* African Safari Group — Alert / Callout
   Inline message block. Warm, restrained tones; a left brass keyline for emphasis. */

const CSS = `
.asg-alert{
  display:flex;gap:13px;align-items:flex-start;
  padding:15px 17px;border-radius:var(--radius-sm);
  border:1px solid var(--border-default);background:var(--surface-raised);
  font-family:var(--font-body);position:relative;overflow:hidden;
}
.asg-alert::before{content:"";position:absolute;left:0;top:0;bottom:0;width:3px;background:var(--accent);}
.asg-alert__icon{flex:none;margin-top:1px;}
.asg-alert__body{display:flex;flex-direction:column;gap:3px;min-width:0;flex:1;}
.asg-alert__title{font-size:14px;font-weight:var(--fw-semibold);color:var(--text-primary);line-height:1.4;}
.asg-alert__text{font-size:13px;color:var(--text-body);line-height:1.55;}
.asg-alert__x{flex:none;background:none;border:0;padding:2px;color:var(--text-muted);cursor:pointer;display:flex;}
.asg-alert__x:hover{color:var(--text-primary);}
.asg-alert--brass::before{background:var(--accent);} .asg-alert--brass .asg-alert__icon{color:var(--accent);}
.asg-alert--info::before{background:var(--info);} .asg-alert--info .asg-alert__icon{color:var(--info);}
.asg-alert--success::before{background:var(--success);} .asg-alert--success .asg-alert__icon{color:var(--success);}
.asg-alert--warning::before{background:var(--warning);} .asg-alert--warning .asg-alert__icon{color:var(--warning);}
.asg-alert--danger::before{background:var(--danger);} .asg-alert--danger .asg-alert__icon{color:var(--danger);}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "alert");
  s.textContent = CSS;
  document.head.appendChild(s);
}
const ICONS = {
  brass: "info",
  info: "info",
  success: "check",
  warning: "alert",
  danger: "alert"
};
function Alert({
  variant = "info",
  title,
  children,
  icon,
  onClose,
  className = "",
  ...rest
}) {
  inject();
  const ic = icon || ICONS[variant] || "info";
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["asg-alert", `asg-alert--${variant}`, className].filter(Boolean).join(" "),
    role: "status"
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "asg-alert__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: ic,
    size: 19
  })), /*#__PURE__*/React.createElement("div", {
    className: "asg-alert__body"
  }, title && /*#__PURE__*/React.createElement("span", {
    className: "asg-alert__title"
  }, title), children && /*#__PURE__*/React.createElement("span", {
    className: "asg-alert__text"
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "asg-alert__x",
    "aria-label": "Dismiss",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "close",
    size: 16
  })));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Spinner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* African Safari Group — Spinner
   Minimal brass ring loader. */

const CSS = `
.asg-spinner{display:inline-block;border-radius:50%;border-style:solid;border-color:var(--border-default);border-top-color:var(--accent);animation:asg-spin .8s linear infinite;}
@keyframes asg-spin{to{transform:rotate(360deg)}}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "spinner");
  s.textContent = CSS;
  document.head.appendChild(s);
}
const SIZES = {
  sm: 16,
  md: 24,
  lg: 36
};
function Spinner({
  size = "md",
  className = "",
  style,
  label = "Loading",
  ...rest
}) {
  inject();
  const px = typeof size === "number" ? size : SIZES[size] || 24;
  const bw = Math.max(2, Math.round(px / 11));
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["asg-spinner", className].filter(Boolean).join(" "),
    role: "status",
    "aria-label": label,
    style: {
      width: px,
      height: px,
      borderWidth: bw,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Spinner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Spinner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* African Safari Group — Toast
   Transient confirmation. Dark overlay surface, soft elevation, brass accent. */

const CSS = `
.asg-toast{
  display:flex;gap:12px;align-items:flex-start;width:340px;max-width:88vw;
  padding:14px 15px;border-radius:var(--radius-md);
  background:var(--surface-overlay);border:1px solid var(--border-default);
  box-shadow:var(--shadow-lg);font-family:var(--font-body);
}
.asg-toast__icon{flex:none;margin-top:1px;color:var(--accent);}
.asg-toast--success .asg-toast__icon{color:var(--success);}
.asg-toast--danger .asg-toast__icon{color:var(--danger);}
.asg-toast__body{display:flex;flex-direction:column;gap:2px;flex:1;min-width:0;}
.asg-toast__title{font-size:14px;font-weight:var(--fw-semibold);color:var(--text-primary);line-height:1.4;}
.asg-toast__text{font-size:13px;color:var(--text-body);line-height:1.5;}
.asg-toast__x{flex:none;background:none;border:0;padding:2px;color:var(--text-muted);cursor:pointer;display:flex;}
.asg-toast__x:hover{color:var(--text-primary);}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "toast");
  s.textContent = CSS;
  document.head.appendChild(s);
}
const ICONS = {
  default: "check",
  success: "check",
  danger: "alert",
  info: "info"
};
function Toast({
  variant = "default",
  title,
  children,
  onClose,
  className = "",
  ...rest
}) {
  inject();
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["asg-toast", `asg-toast--${variant}`, className].filter(Boolean).join(" "),
    role: "status"
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "asg-toast__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: ICONS[variant] || "check",
    size: 19
  })), /*#__PURE__*/React.createElement("div", {
    className: "asg-toast__body"
  }, title && /*#__PURE__*/React.createElement("span", {
    className: "asg-toast__title"
  }, title), children && /*#__PURE__*/React.createElement("span", {
    className: "asg-toast__text"
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "asg-toast__x",
    "aria-label": "Dismiss",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "close",
    size: 16
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* African Safari Group — Tooltip
   Quiet hover/focus label. Dark overlay chip, four placements. CSS-driven. */

const CSS = `
.asg-tip{position:relative;display:inline-flex;}
.asg-tip__bubble{
  position:absolute;z-index:var(--z-overlay);pointer-events:none;
  background:var(--asg-ink-900);color:var(--text-primary);
  border:1px solid var(--border-default);border-radius:var(--radius-xs);
  font-family:var(--font-body);font-size:12px;line-height:1.4;letter-spacing:.01em;
  padding:7px 10px;white-space:nowrap;box-shadow:var(--shadow-md);
  opacity:0;transform:translate(var(--_tx,0),var(--_ty,4px));
  transition:opacity var(--dur-fast) var(--ease-standard),transform var(--dur-fast) var(--ease-standard);
}
.asg-tip:hover .asg-tip__bubble,.asg-tip:focus-within .asg-tip__bubble{opacity:1;transform:translate(var(--_tx,0),var(--_ty2,0));}
.asg-tip--top .asg-tip__bubble{bottom:100%;left:50%;--_tx:-50%;--_ty:4px;--_ty2:-8px;margin-bottom:0;}
.asg-tip--bottom .asg-tip__bubble{top:100%;left:50%;--_tx:-50%;--_ty:-4px;--_ty2:8px;}
.asg-tip--left .asg-tip__bubble{right:100%;top:50%;--_tx:0;--_ty:-50%;margin-right:8px;}
.asg-tip--right .asg-tip__bubble{left:100%;top:50%;--_tx:0;--_ty:-50%;margin-left:8px;}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "tooltip");
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Tooltip({
  label,
  placement = "top",
  children,
  className = "",
  ...rest
}) {
  inject();
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["asg-tip", `asg-tip--${placement}`, className].filter(Boolean).join(" ")
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    className: "asg-tip__bubble",
    role: "tooltip"
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* African Safari Group — Checkbox
   Square check, brass when selected. Optional description. */

const CSS = `
.asg-check{display:inline-flex;align-items:flex-start;gap:11px;cursor:pointer;font-family:var(--font-body);}
.asg-check--disabled{opacity:.5;cursor:not-allowed;}
.asg-check input{position:absolute;opacity:0;width:0;height:0;}
.asg-check__box{
  width:20px;height:20px;flex:none;margin-top:1px;border-radius:var(--radius-xs);
  border:1px solid var(--border-strong);background:var(--surface-inset);color:var(--text-on-brass);
  display:flex;align-items:center;justify-content:center;
  transition:background var(--dur-fast) var(--ease-standard),border-color var(--dur-fast) var(--ease-standard);
}
.asg-check__box svg{opacity:0;transition:opacity var(--dur-fast);}
.asg-check:hover .asg-check__box{border-color:var(--asg-brass);}
.asg-check input:checked + .asg-check__box{background:var(--asg-brass);border-color:var(--asg-brass);}
.asg-check input:checked + .asg-check__box svg{opacity:1;}
.asg-check input:focus-visible + .asg-check__box{box-shadow:var(--focus-ring-shadow);}
.asg-check__text{display:flex;flex-direction:column;gap:2px;}
.asg-check__label{font-size:15px;color:var(--text-primary);line-height:1.4;}
.asg-check__desc{font-size:13px;color:var(--text-muted);line-height:1.45;}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "checkbox");
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Checkbox({
  label,
  description,
  disabled = false,
  className = "",
  ...rest
}) {
  inject();
  return /*#__PURE__*/React.createElement("label", {
    className: ["asg-check", disabled && "asg-check--disabled", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "asg-check__box"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14,
    strokeWidth: 2.6
  })), (label || description) && /*#__PURE__*/React.createElement("span", {
    className: "asg-check__text"
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "asg-check__label"
  }, label), description && /*#__PURE__*/React.createElement("span", {
    className: "asg-check__desc"
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* African Safari Group — Input
   Text field with label, optional leading icon, hint and error. Inset dark
   surface, hairline border, brass focus ring. */

const CSS = `
.asg-field{display:flex;flex-direction:column;gap:7px;width:100%;}
.asg-field__label{font-family:var(--font-body);font-size:12px;font-weight:var(--fw-medium);letter-spacing:.04em;color:var(--text-body);}
.asg-field__label .req{color:var(--accent);margin-left:2px;}
.asg-field__wrap{position:relative;display:flex;align-items:center;}
.asg-field__icon{position:absolute;left:14px;color:var(--text-muted);pointer-events:none;display:flex;}
.asg-input{
  width:100%;font-family:var(--font-body);font-size:15px;color:var(--text-primary);
  background:var(--surface-inset);border:1px solid var(--border-strong);border-radius:var(--radius-xs);
  padding:12px 14px;line-height:1.4;outline:none;
  transition:border-color var(--dur-fast) var(--ease-standard),box-shadow var(--dur-fast) var(--ease-standard);
}
.asg-input::placeholder{color:var(--text-faint);}
.asg-input--icon{padding-left:42px;}
.asg-input:hover{border-color:var(--asg-charcoal-500);}
.asg-input:focus{border-color:var(--asg-brass);box-shadow:var(--focus-ring-shadow);}
.asg-input:disabled{opacity:.5;cursor:not-allowed;}
.asg-field--error .asg-input{border-color:var(--danger);}
.asg-field--error .asg-input:focus{box-shadow:0 0 0 3px rgba(181,82,74,.32);}
.asg-field__msg{font-family:var(--font-body);font-size:12px;line-height:1.4;color:var(--text-muted);}
.asg-field__msg--error{color:var(--danger);}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "input");
  s.textContent = CSS;
  document.head.appendChild(s);
}
let _id = 0;
function Input({
  label,
  hint,
  error,
  icon,
  required = false,
  id,
  className = "",
  ...rest
}) {
  inject();
  const fid = id || `asg-in-${++_id}`;
  return /*#__PURE__*/React.createElement("div", {
    className: ["asg-field", error && "asg-field--error", className].filter(Boolean).join(" ")
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "asg-field__label",
    htmlFor: fid
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "req"
  }, "*")), /*#__PURE__*/React.createElement("div", {
    className: "asg-field__wrap"
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: "asg-field__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18
  })), /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    className: ["asg-input", icon && "asg-input--icon"].filter(Boolean).join(" "),
    "aria-invalid": !!error
  }, rest))), (error || hint) && /*#__PURE__*/React.createElement("span", {
    className: ["asg-field__msg", error && "asg-field__msg--error"].filter(Boolean).join(" ")
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* African Safari Group — Radio
   Round selector, brass dot when chosen. Pair with name to group. */

const CSS = `
.asg-radio{display:inline-flex;align-items:flex-start;gap:11px;cursor:pointer;font-family:var(--font-body);}
.asg-radio--disabled{opacity:.5;cursor:not-allowed;}
.asg-radio input{position:absolute;opacity:0;width:0;height:0;}
.asg-radio__dot{
  width:20px;height:20px;flex:none;margin-top:1px;border-radius:50%;
  border:1px solid var(--border-strong);background:var(--surface-inset);
  display:flex;align-items:center;justify-content:center;
  transition:border-color var(--dur-fast) var(--ease-standard);
}
.asg-radio__dot::after{content:"";width:9px;height:9px;border-radius:50%;background:var(--asg-brass);transform:scale(0);transition:transform var(--dur-fast) var(--ease-standard);}
.asg-radio:hover .asg-radio__dot{border-color:var(--asg-brass);}
.asg-radio input:checked + .asg-radio__dot{border-color:var(--asg-brass);}
.asg-radio input:checked + .asg-radio__dot::after{transform:scale(1);}
.asg-radio input:focus-visible + .asg-radio__dot{box-shadow:var(--focus-ring-shadow);}
.asg-radio__text{display:flex;flex-direction:column;gap:2px;}
.asg-radio__label{font-size:15px;color:var(--text-primary);line-height:1.4;}
.asg-radio__desc{font-size:13px;color:var(--text-muted);line-height:1.45;}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "radio");
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Radio({
  label,
  description,
  disabled = false,
  className = "",
  ...rest
}) {
  inject();
  return /*#__PURE__*/React.createElement("label", {
    className: ["asg-radio", disabled && "asg-radio--disabled", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "asg-radio__dot"
  }), (label || description) && /*#__PURE__*/React.createElement("span", {
    className: "asg-radio__text"
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "asg-radio__label"
  }, label), description && /*#__PURE__*/React.createElement("span", {
    className: "asg-radio__desc"
  }, description)));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* African Safari Group — Select
   Native select styled to match Input, with a brass chevron. */

const CSS = `
.asg-field{display:flex;flex-direction:column;gap:7px;width:100%;}
.asg-field__label{font-family:var(--font-body);font-size:12px;font-weight:var(--fw-medium);letter-spacing:.04em;color:var(--text-body);}
.asg-field__label .req{color:var(--accent);margin-left:2px;}
.asg-field__msg{font-family:var(--font-body);font-size:12px;line-height:1.4;color:var(--text-muted);}
.asg-field__msg--error{color:var(--danger);}
.asg-select-wrap{position:relative;display:flex;align-items:center;}
.asg-select-wrap__chev{position:absolute;right:14px;color:var(--text-muted);pointer-events:none;display:flex;}
.asg-select{
  appearance:none;-webkit-appearance:none;width:100%;
  font-family:var(--font-body);font-size:15px;color:var(--text-primary);
  background:var(--surface-inset);border:1px solid var(--border-strong);border-radius:var(--radius-xs);
  padding:12px 42px 12px 14px;line-height:1.4;outline:none;cursor:pointer;
  transition:border-color var(--dur-fast) var(--ease-standard),box-shadow var(--dur-fast) var(--ease-standard);
}
.asg-select:hover{border-color:var(--asg-charcoal-500);}
.asg-select:focus{border-color:var(--asg-brass);box-shadow:var(--focus-ring-shadow);}
.asg-select:disabled{opacity:.5;cursor:not-allowed;}
.asg-select option{background:var(--asg-charcoal);color:var(--text-primary);}
.asg-field--error .asg-select{border-color:var(--danger);}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "select");
  s.textContent = CSS;
  document.head.appendChild(s);
}
let _id = 0;
function Select({
  label,
  hint,
  error,
  required = false,
  placeholder,
  options,
  children,
  id,
  className = "",
  ...rest
}) {
  inject();
  const fid = id || `asg-sel-${++_id}`;
  return /*#__PURE__*/React.createElement("div", {
    className: ["asg-field", error && "asg-field--error", className].filter(Boolean).join(" ")
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "asg-field__label",
    htmlFor: fid
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "req"
  }, "*")), /*#__PURE__*/React.createElement("div", {
    className: "asg-select-wrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fid,
    className: "asg-select",
    "aria-invalid": !!error
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options ? options.map(o => {
    const val = typeof o === "string" ? o : o.value;
    const lab = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lab);
  }) : children), /*#__PURE__*/React.createElement("span", {
    className: "asg-select-wrap__chev"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18
  }))), (error || hint) && /*#__PURE__*/React.createElement("span", {
    className: ["asg-field__msg", error && "asg-field__msg--error"].filter(Boolean).join(" ")
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* African Safari Group — Switch
   Toggle for settings. Brass track when on. */

const CSS = `
.asg-switch{display:inline-flex;align-items:center;gap:12px;cursor:pointer;font-family:var(--font-body);}
.asg-switch--disabled{opacity:.5;cursor:not-allowed;}
.asg-switch input{position:absolute;opacity:0;width:0;height:0;}
.asg-switch__track{
  width:42px;height:24px;flex:none;border-radius:var(--radius-pill);
  background:var(--asg-charcoal-500);border:1px solid var(--border-strong);position:relative;
  transition:background var(--dur-base) var(--ease-standard),border-color var(--dur-base) var(--ease-standard);
}
.asg-switch__track::after{content:"";position:absolute;top:2px;left:2px;width:18px;height:18px;border-radius:50%;background:var(--text-body);transition:transform var(--dur-base) var(--ease-standard),background var(--dur-base);}
.asg-switch input:checked + .asg-switch__track{background:var(--asg-brass);border-color:var(--asg-brass);}
.asg-switch input:checked + .asg-switch__track::after{transform:translateX(18px);background:var(--asg-ink);}
.asg-switch input:focus-visible + .asg-switch__track{box-shadow:var(--focus-ring-shadow);}
.asg-switch__label{font-size:15px;color:var(--text-primary);}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "switch");
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Switch({
  label,
  disabled = false,
  className = "",
  ...rest
}) {
  inject();
  return /*#__PURE__*/React.createElement("label", {
    className: ["asg-switch", disabled && "asg-switch--disabled", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "asg-switch__track"
  }), label && /*#__PURE__*/React.createElement("span", {
    className: "asg-switch__label"
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* African Safari Group — Textarea
   Multi-line field. Shares the Input field shell. */

const CSS = `
.asg-field{display:flex;flex-direction:column;gap:7px;width:100%;}
.asg-field__label{font-family:var(--font-body);font-size:12px;font-weight:var(--fw-medium);letter-spacing:.04em;color:var(--text-body);}
.asg-field__label .req{color:var(--accent);margin-left:2px;}
.asg-field__msg{font-family:var(--font-body);font-size:12px;line-height:1.4;color:var(--text-muted);}
.asg-field__msg--error{color:var(--danger);}
.asg-textarea{
  width:100%;font-family:var(--font-body);font-size:15px;color:var(--text-primary);
  background:var(--surface-inset);border:1px solid var(--border-strong);border-radius:var(--radius-xs);
  padding:12px 14px;line-height:1.6;outline:none;resize:vertical;min-height:108px;
  transition:border-color var(--dur-fast) var(--ease-standard),box-shadow var(--dur-fast) var(--ease-standard);
}
.asg-textarea::placeholder{color:var(--text-faint);}
.asg-textarea:hover{border-color:var(--asg-charcoal-500);}
.asg-textarea:focus{border-color:var(--asg-brass);box-shadow:var(--focus-ring-shadow);}
.asg-textarea:disabled{opacity:.5;cursor:not-allowed;}
.asg-field--error .asg-textarea{border-color:var(--danger);}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "textarea");
  s.textContent = CSS;
  document.head.appendChild(s);
}
let _id = 0;
function Textarea({
  label,
  hint,
  error,
  required = false,
  id,
  className = "",
  rows = 4,
  ...rest
}) {
  inject();
  const fid = id || `asg-ta-${++_id}`;
  return /*#__PURE__*/React.createElement("div", {
    className: ["asg-field", error && "asg-field--error", className].filter(Boolean).join(" ")
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "asg-field__label",
    htmlFor: fid
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "req"
  }, "*")), /*#__PURE__*/React.createElement("textarea", _extends({
    id: fid,
    className: "asg-textarea",
    rows: rows,
    "aria-invalid": !!error
  }, rest)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    className: ["asg-field__msg", error && "asg-field__msg--error"].filter(Boolean).join(" ")
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* African Safari Group — Breadcrumb
   Quiet wayfinding trail with chevron separators; current page in ivory,
   never a link. The hero variant sits top-left OVER the hero image — no
   background panel: sand links, brass on hover, current page plain text. */

const CSS = `
.asg-crumbs{display:flex;align-items:center;flex-wrap:wrap;gap:7px;font-family:var(--font-body);font-size:13px;}
.asg-crumbs a,.asg-crumbs__item{color:var(--text-muted);text-decoration:none;transition:color var(--dur-fast) var(--ease-standard);}
.asg-crumbs a:hover{color:var(--accent-hover);}
.asg-crumbs__item--current{color:var(--text-primary);font-weight:var(--fw-medium);}
.asg-crumbs__sep{color:var(--text-faint);display:flex;}
.asg-crumbs--hero{font-size:11px;letter-spacing:.13em;text-transform:uppercase;}
.asg-crumbs--hero a,.asg-crumbs--hero .asg-crumbs__item{color:var(--asg-heritage-sand);}
.asg-crumbs--hero a:hover{color:var(--asg-brass);}
.asg-crumbs--hero .asg-crumbs__item--current{color:var(--asg-heritage-sand);font-weight:var(--fw-medium);}
.asg-crumbs--hero .asg-crumbs__sep{color:var(--asg-heritage-sand);opacity:.6;}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "breadcrumb");
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Breadcrumb({
  items = [],
  hero = false,
  className = "",
  ...rest
}) {
  inject();
  return /*#__PURE__*/React.createElement("nav", _extends({
    className: ["asg-crumbs", hero && "asg-crumbs--hero", className].filter(Boolean).join(" "),
    "aria-label": "Breadcrumb"
  }, rest), items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, last || !it.href ? /*#__PURE__*/React.createElement("span", {
      className: ["asg-crumbs__item", last && "asg-crumbs__item--current"].filter(Boolean).join(" "),
      "aria-current": last ? "page" : undefined
    }, it.label) : /*#__PURE__*/React.createElement("a", {
      href: it.href
    }, it.label), !last && /*#__PURE__*/React.createElement("span", {
      className: "asg-crumbs__sep",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-right",
      size: 14
    })));
  }));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* African Safari Group — Pagination
   Page navigation with prev/next and numbered controls (with ellipsis). */

const CSS = `
.asg-pager{display:inline-flex;align-items:center;gap:6px;font-family:var(--font-numeric);}
.asg-pager__btn{
  min-width:38px;height:38px;padding:0 10px;display:inline-flex;align-items:center;justify-content:center;
  background:transparent;border:1px solid transparent;border-radius:var(--radius-xs);
  color:var(--text-body);font-size:14px;font-weight:var(--fw-medium);cursor:pointer;
  transition:color var(--dur-fast),border-color var(--dur-fast),background var(--dur-fast);
}
.asg-pager__btn:hover:not(:disabled){border-color:var(--asg-brass);color:var(--text-primary);}
.asg-pager__btn:disabled{opacity:.35;cursor:not-allowed;}
.asg-pager__btn--active{background:var(--asg-brass);border-color:var(--asg-brass);color:var(--text-on-brass);}
.asg-pager__btn--active:hover{color:var(--text-on-brass);}
.asg-pager__gap{min-width:24px;text-align:center;color:var(--text-faint);}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "pagination");
  s.textContent = CSS;
  document.head.appendChild(s);
}
function range(total, current) {
  const pages = [];
  for (let p = 1; p <= total; p++) {
    if (p === 1 || p === total || p >= current - 1 && p <= current + 1) pages.push(p);else if (pages[pages.length - 1] !== "…") pages.push("…");
  }
  return pages;
}
function Pagination({
  page = 1,
  total = 1,
  onChange,
  className = "",
  ...rest
}) {
  inject();
  const go = p => {
    if (p >= 1 && p <= total && p !== page) onChange && onChange(p);
  };
  return /*#__PURE__*/React.createElement("nav", _extends({
    className: ["asg-pager", className].filter(Boolean).join(" "),
    "aria-label": "Pagination"
  }, rest), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "asg-pager__btn",
    onClick: () => go(page - 1),
    disabled: page <= 1,
    "aria-label": "Previous"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-left",
    size: 18
  })), range(total, page).map((p, i) => p === "…" ? /*#__PURE__*/React.createElement("span", {
    key: `g${i}`,
    className: "asg-pager__gap"
  }, "\u2026") : /*#__PURE__*/React.createElement("button", {
    key: p,
    type: "button",
    className: ["asg-pager__btn", p === page && "asg-pager__btn--active"].filter(Boolean).join(" "),
    "aria-current": p === page ? "page" : undefined,
    onClick: () => go(p)
  }, p)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "asg-pager__btn",
    onClick: () => go(page + 1),
    disabled: page >= total,
    "aria-label": "Next"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 18
  })));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* African Safari Group — Tabs
   Underline tabs with a brass active indicator. Controlled or uncontrolled. */

const CSS = `
.asg-tabs{display:flex;gap:0;border-bottom:1px solid var(--border-default);}
.asg-tab{
  display:inline-flex;align-items:center;gap:8px;background:none;border:0;cursor:pointer;
  font-family:var(--font-body);font-size:13px;font-weight:var(--fw-medium);letter-spacing:.04em;
  color:var(--text-muted);padding:13px 18px;position:relative;white-space:nowrap;
  transition:color var(--dur-fast) var(--ease-standard);
}
.asg-tab:first-child{padding-left:0;}
.asg-tab::after{content:"";position:absolute;left:0;right:0;bottom:-1px;height:2px;background:var(--accent);transform:scaleX(0);transform-origin:left;transition:transform var(--dur-base) var(--ease-standard);}
.asg-tab:first-child::after{left:0;}
.asg-tab:hover{color:var(--text-body);}
.asg-tab--active{color:var(--text-primary);}
.asg-tab--active::after{transform:scaleX(1);}
.asg-tab:focus-visible{outline:none;color:var(--text-primary);}
.asg-tab:focus-visible::after{transform:scaleX(1);background:var(--asg-brass-400);}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "tabs");
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  className = "",
  ...rest
}) {
  inject();
  const [internal, setInternal] = React.useState(defaultValue ?? (tabs[0] && tabs[0].id));
  const active = value !== undefined ? value : internal;
  const select = id => {
    if (value === undefined) setInternal(id);
    onChange && onChange(id);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["asg-tabs", className].filter(Boolean).join(" "),
    role: "tablist"
  }, rest), tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    type: "button",
    role: "tab",
    "aria-selected": active === t.id,
    className: ["asg-tab", active === t.id && "asg-tab--active"].filter(Boolean).join(" "),
    onClick: () => select(t.id)
  }, t.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 16
  }), t.label)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* African Safari Group — Dialog
   Modal over a dark scrim. Title, body, and a footer action row. Controlled
   via `open`. Closes on backdrop click and Escape. */

const CSS = `
.asg-dialog__backdrop{
  position:fixed;inset:0;z-index:var(--z-modal);
  background:var(--asg-ink-a60);backdrop-filter:blur(3px);-webkit-backdrop-filter:blur(3px);
  display:flex;align-items:center;justify-content:center;padding:24px;
  animation:asg-dlg-fade var(--dur-base) var(--ease-standard);
}
@keyframes asg-dlg-fade{from{opacity:0}to{opacity:1}}
.asg-dialog{
  width:100%;max-width:520px;max-height:90vh;overflow:auto;
  background:var(--surface-overlay);border:1px solid var(--border-default);
  border-radius:var(--radius-lg);box-shadow:var(--shadow-xl);
  animation:asg-dlg-rise var(--dur-base) var(--ease-entrance);
}
@keyframes asg-dlg-rise{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}
.asg-dialog__head{display:flex;align-items:flex-start;justify-content:space-between;gap:16px;padding:24px 24px 0;}
.asg-dialog__title{font-family:var(--font-serif);font-size:24px;font-weight:var(--fw-medium);color:var(--text-primary);margin:0;line-height:1.2;}
.asg-dialog__x{flex:none;background:none;border:0;color:var(--text-muted);cursor:pointer;padding:4px;display:flex;}
.asg-dialog__x:hover{color:var(--text-primary);}
.asg-dialog__body{padding:14px 24px 4px;font-family:var(--font-body);font-size:15px;line-height:1.65;color:var(--text-body);}
.asg-dialog__footer{display:flex;justify-content:flex-end;gap:12px;padding:20px 24px 24px;}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "dialog");
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Dialog({
  open,
  onClose,
  title,
  children,
  footer,
  className = "",
  ...rest
}) {
  inject();
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === "Escape") onClose && onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "asg-dialog__backdrop",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", _extends({
    className: ["asg-dialog", className].filter(Boolean).join(" "),
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation()
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "asg-dialog__head"
  }, title && /*#__PURE__*/React.createElement("h2", {
    className: "asg-dialog__title"
  }, title), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "asg-dialog__x",
    "aria-label": "Close",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "close",
    size: 20
  }))), /*#__PURE__*/React.createElement("div", {
    className: "asg-dialog__body"
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    className: "asg-dialog__footer"
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Drawer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* African Safari Group — Drawer
   Slide-in panel over a dark scrim, for mobile navigation and filters.
   Controlled via `open`. Slides from `side` ("right" | "left" | "bottom").
   Closes on backdrop click and Escape. Ink surface, hairline border —
   the mobile home of anything that lives in a sidebar or nav on desktop. */

const CSS = `
.asg-drawer__backdrop{
  position:fixed;inset:0;z-index:var(--z-modal);
  background:var(--asg-ink-a60);backdrop-filter:blur(3px);-webkit-backdrop-filter:blur(3px);
  animation:asg-drw-fade var(--dur-base) var(--ease-standard);
}
@keyframes asg-drw-fade{from{opacity:0}to{opacity:1}}
.asg-drawer{
  position:fixed;z-index:calc(var(--z-modal) + 1);
  background:var(--surface-overlay);
  display:flex;flex-direction:column;
  box-shadow:var(--shadow-xl);
}
.asg-drawer--right{top:0;right:0;bottom:0;width:min(360px,88vw);border-left:1px solid var(--border-default);animation:asg-drw-right var(--dur-base) var(--ease-entrance);}
.asg-drawer--left{top:0;left:0;bottom:0;width:min(360px,88vw);border-right:1px solid var(--border-default);animation:asg-drw-left var(--dur-base) var(--ease-entrance);}
.asg-drawer--bottom{left:0;right:0;bottom:0;max-height:86vh;border-top:1px solid var(--border-default);border-radius:var(--radius-lg) var(--radius-lg) 0 0;animation:asg-drw-up var(--dur-base) var(--ease-entrance);}
@keyframes asg-drw-right{from{transform:translateX(24px);opacity:0}to{transform:none;opacity:1}}
@keyframes asg-drw-left{from{transform:translateX(-24px);opacity:0}to{transform:none;opacity:1}}
@keyframes asg-drw-up{from{transform:translateY(24px);opacity:0}to{transform:none;opacity:1}}
.asg-drawer__head{flex:none;display:flex;align-items:center;justify-content:space-between;gap:16px;padding:18px 22px;border-bottom:1px solid var(--border-subtle);}
.asg-drawer__title{font-family:var(--font-body);font-size:12px;font-weight:600;letter-spacing:var(--ls-eyebrow);text-transform:uppercase;color:var(--text-muted);margin:0;}
.asg-drawer__x{flex:none;background:none;border:0;color:var(--text-muted);cursor:pointer;padding:4px;display:flex;margin-left:auto;}
.asg-drawer__x:hover{color:var(--text-primary);}
.asg-drawer__body{flex:1;overflow:auto;padding:22px;}
.asg-drawer__footer{flex:none;padding:18px 22px;border-top:1px solid var(--border-subtle);display:flex;flex-direction:column;gap:10px;}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "drawer");
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Drawer({
  open,
  onClose,
  title,
  side = "right",
  children,
  footer,
  className = "",
  ...rest
}) {
  inject();
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === "Escape") onClose && onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "asg-drawer__backdrop",
    onClick: onClose
  }), /*#__PURE__*/React.createElement("div", _extends({
    className: ["asg-drawer", "asg-drawer--" + side, className].filter(Boolean).join(" "),
    role: "dialog",
    "aria-modal": "true"
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "asg-drawer__head"
  }, title && /*#__PURE__*/React.createElement("h2", {
    className: "asg-drawer__title"
  }, title), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "asg-drawer__x",
    "aria-label": "Close",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "close",
    size: 20
  }))), /*#__PURE__*/React.createElement("div", {
    className: "asg-drawer__body"
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    className: "asg-drawer__footer"
  }, footer)));
}
Object.assign(__ds_scope, { Drawer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Drawer.jsx", error: String((e && e.message) || e) }); }

// components/patterns/AccreditationRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* African Safari Group — Accreditation Footer Row
   Bordered pills for memberships / accreditations, plus brass-bordered
   review-count pills (TripAdvisor, Feedback Company, Google). Sits above
   the footer's bottom bar on the ink ground. Option 4 template. */

const CSS = `
.asg-accred{display:flex;flex-wrap:wrap;gap:10px;font-family:var(--font-body);}
.asg-accred__pill{border:1px solid var(--border-default);color:var(--text-body);font-size:11px;line-height:1;padding:8px 14px;border-radius:var(--radius-pill);display:inline-flex;align-items:center;}
.asg-accred__pill--review{border-color:var(--asg-brass-a40);color:var(--accent-quiet);}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "accred");
  s.textContent = CSS;
  document.head.appendChild(s);
}
function AccreditationRow({
  pills = [],
  reviews = [],
  className = "",
  ...rest
}) {
  inject();
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["asg-accred", className].filter(Boolean).join(" ")
  }, rest), pills.map(p => /*#__PURE__*/React.createElement("span", {
    key: p,
    className: "asg-accred__pill"
  }, p)), reviews.map(r => /*#__PURE__*/React.createElement("span", {
    key: r,
    className: "asg-accred__pill asg-accred__pill--review"
  }, r)));
}
Object.assign(__ds_scope, { AccreditationRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/AccreditationRow.jsx", error: String((e && e.message) || e) }); }

// components/patterns/EnquiryChecklist.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* African Safari Group — Direct-Enquiry Checklist
   Two-column reasons-to-book-direct list with brass check circles.
   Sits in the "Why enquire direct" panel. Option 4 template. */

const CSS = `
.asg-checklist{display:grid;grid-template-columns:1fr 1fr;gap:14px 40px;}
.asg-checklist--1{grid-template-columns:1fr;}
.asg-check-item{display:flex;gap:12px;font-family:var(--font-body);font-size:13.5px;color:var(--text-body);align-items:flex-start;line-height:1.5;}
.asg-check-item::before{content:'\\2713';flex-shrink:0;width:22px;height:22px;border-radius:50%;background:var(--asg-brass);color:#FFFFFF;font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;margin-top:1px;}
@media(max-width:640px){.asg-checklist{grid-template-columns:1fr;}}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "checklist");
  s.textContent = CSS;
  document.head.appendChild(s);
}
function EnquiryChecklist({
  items = [],
  columns = 2,
  className = "",
  ...rest
}) {
  inject();
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["asg-checklist", columns === 1 && "asg-checklist--1", className].filter(Boolean).join(" ")
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "asg-check-item"
  }, it)));
}
Object.assign(__ds_scope, { EnquiryChecklist });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/EnquiryChecklist.jsx", error: String((e && e.message) || e) }); }

// components/patterns/FactPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* African Safari Group — Fact Pill
   Frosted stat badge for hero imagery: translucent white fill, hairline
   translucent border, backdrop blur, brass ✦ prefix. Never bare text over
   a photo — the pill gives facts a surface. From the Option 4 templates. */

const CSS = `
.asg-factpill{display:inline-flex;align-items:center;gap:9px;background:rgba(255,255,255,.10);border:1px solid rgba(255,255,255,.28);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);color:#FFFFFF;font-family:var(--font-body);font-size:12px;font-weight:var(--fw-medium);letter-spacing:.03em;line-height:1;padding:9px 18px;border-radius:var(--radius-pill);white-space:nowrap;}
.asg-factpill::before{content:'\\2726';color:var(--asg-brass);font-size:11px;line-height:1;}
.asg-factpill--noglyph{gap:0;}
.asg-factpill--noglyph::before{content:none;}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "factpill");
  s.textContent = CSS;
  document.head.appendChild(s);
}
function FactPill({
  children,
  glyph = true,
  className = "",
  ...rest
}) {
  inject();
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["asg-factpill", !glyph && "asg-factpill--noglyph", className].filter(Boolean).join(" ")
  }, rest), children);
}
Object.assign(__ds_scope, { FactPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/FactPill.jsx", error: String((e && e.message) || e) }); }

// components/patterns/MonthGrid.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* African Safari Group — Month Season Grid
   Twelve cells, one per month, colour-coded by season quality.
   Peak = brass + white · Good = sand + ink · Fair = bone + ink.
   Month names 13.5px semibold; sub-labels 9.5px tracked caps. */

const DEFAULT_MONTHS = [{
  m: "Jan",
  s: "Green summer",
  level: "good"
}, {
  m: "Feb",
  s: "Lush, warm",
  level: "good"
}, {
  m: "Mar",
  s: "Newborn game",
  level: "good"
}, {
  m: "Apr",
  s: "Shoulder",
  level: "fair"
}, {
  m: "May",
  s: "Dry, prime",
  level: "peak"
}, {
  m: "Jun",
  s: "Peak viewing",
  level: "peak"
}, {
  m: "Jul",
  s: "Peak viewing",
  level: "peak"
}, {
  m: "Aug",
  s: "Peak viewing",
  level: "peak"
}, {
  m: "Sep",
  s: "Dry, prime",
  level: "peak"
}, {
  m: "Oct",
  s: "Green returns",
  level: "good"
}, {
  m: "Nov",
  s: "Warm, lush",
  level: "good"
}, {
  m: "Dec",
  s: "Busy holidays",
  level: "good"
}];
const CSS = `
.asg-months{display:grid;grid-template-columns:repeat(12,1fr);gap:8px;}
.asg-month{border-radius:var(--radius-sm);padding:14px 6px 12px;text-align:center;}
.asg-month__m{font-family:var(--font-body);font-weight:var(--fw-semibold);font-size:13.5px;letter-spacing:.5px;line-height:1;}
.asg-month__s{font-family:var(--font-body);font-size:9.5px;letter-spacing:.5px;text-transform:uppercase;margin-top:5px;opacity:.95;line-height:1.4;}
.asg-month--peak{background:var(--asg-brass);color:#FFFFFF;}
.asg-month--good{background:var(--asg-heritage-sand);color:var(--asg-ink);}
.asg-month--fair{background:var(--asg-bone);color:var(--asg-ink);}
.asg-months__legend{display:flex;gap:22px;margin-top:20px;font-family:var(--font-body);font-size:11px;color:var(--text-muted);align-items:center;flex-wrap:wrap;}
.asg-months__legend i{display:inline-block;width:12px;height:12px;border-radius:3px;margin-right:7px;vertical-align:-1px;}
@media(max-width:1000px){.asg-months{grid-template-columns:repeat(6,1fr);}}
@media(max-width:640px){.asg-months{grid-template-columns:repeat(3,1fr);}}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "monthgrid");
  s.textContent = CSS;
  document.head.appendChild(s);
}
function MonthGrid({
  months = DEFAULT_MONTHS,
  legend = true,
  className = "",
  ...rest
}) {
  inject();
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "asg-months"
  }, months.map(mo => /*#__PURE__*/React.createElement("div", {
    key: mo.m,
    className: `asg-month asg-month--${mo.level}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "asg-month__m"
  }, mo.m), mo.s && /*#__PURE__*/React.createElement("div", {
    className: "asg-month__s"
  }, mo.s)))), legend && /*#__PURE__*/React.createElement("div", {
    className: "asg-months__legend"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    style: {
      background: "var(--asg-brass)"
    }
  }), "Peak"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    style: {
      background: "var(--asg-heritage-sand)"
    }
  }), "Good"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    style: {
      background: "var(--asg-bone)"
    }
  }), "Fair")));
}
Object.assign(__ds_scope, { DEFAULT_MONTHS, MonthGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/MonthGrid.jsx", error: String((e && e.message) || e) }); }

// components/patterns/PriceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* African Safari Group — Price Card
   Hero booking sidebar: warm-ivory card floated over the hero photograph,
   From-price (the one serif numeral moment), dual CTAs, and the
   no-payment-required assurance line. From the Option 4 lodge template. */

const CSS = `
.asg-pricecard{background:var(--asg-warm-ivory);border-radius:var(--radius-md);padding:26px 28px;min-width:300px;max-width:340px;box-shadow:0 30px 60px rgba(8,6,4,.40);}
.asg-pricecard__from{font-family:var(--font-body);font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--asg-brass-600);font-weight:var(--fw-semibold);}
.asg-pricecard__amount{font-family:var(--font-serif);font-weight:500;font-size:30px;color:var(--asg-ink);margin:4px 0 16px;line-height:1.15;}
.asg-pricecard__amount span{font-family:var(--font-body);font-weight:var(--fw-regular);font-size:13px;color:var(--asg-soft-charcoal);}
.asg-pricecard__ctas{display:flex;flex-direction:column;gap:10px;}
.asg-pricecard__note{font-family:var(--font-body);font-size:10.5px;color:var(--asg-soft-charcoal);opacity:.78;text-align:center;margin:12px 0 0;line-height:1.5;}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "pricecard");
  s.textContent = CSS;
  document.head.appendChild(s);
}
function PriceCard({
  from,
  unit = "pp / night",
  primaryLabel = "Start Planning / Enquire",
  onPrimary,
  secondaryLabel,
  onSecondary,
  note = "No payment required · we reply within 24 hours",
  className = "",
  ...rest
}) {
  inject();
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["asg-pricecard", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "asg-pricecard__from"
  }, "From"), /*#__PURE__*/React.createElement("div", {
    className: "asg-pricecard__amount"
  }, from, " ", /*#__PURE__*/React.createElement("span", null, unit)), /*#__PURE__*/React.createElement("div", {
    className: "asg-pricecard__ctas"
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    fullWidth: true,
    onClick: onPrimary
  }, primaryLabel), secondaryLabel && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    onLight: true,
    fullWidth: true,
    onClick: onSecondary
  }, secondaryLabel)), note && /*#__PURE__*/React.createElement("p", {
    className: "asg-pricecard__note"
  }, note));
}
Object.assign(__ds_scope, { PriceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/PriceCard.jsx", error: String((e && e.message) || e) }); }

// components/patterns/SightingsBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* African Safari Group — Sightings Status Badge
   Plain-probability wildlife language is a voice feature: sightings are
   stated honestly, never promised. Four fixed levels from the Option 4
   templates. Labels are 12px semibold — the white-on-brass minimum. */

const LEVELS = {
  most: {
    cls: "most",
    label: "Most drives"
  },
  very: {
    cls: "very",
    label: "Very often"
  },
  often: {
    cls: "often",
    label: "Often"
  },
  rare: {
    cls: "rare",
    label: "Rarely · elusive"
  }
};
const CSS = `
.asg-sighting{display:inline-flex;align-items:center;font-family:var(--font-body);font-size:12px;font-weight:var(--fw-semibold);letter-spacing:.02em;line-height:1;padding:7px 14px;border-radius:var(--radius-pill);white-space:nowrap;border:1px solid transparent;}
.asg-sighting--most{background:var(--asg-badge-green);color:#FFFFFF;}
.asg-sighting--very{background:var(--asg-brass);color:#FFFFFF;}
.asg-sighting--often{background:var(--asg-heritage-sand);color:var(--asg-ink);}
.asg-sighting--rare{background:var(--asg-charcoal);color:#FFFFFF;border-color:rgba(255,255,255,.14);}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "sighting");
  s.textContent = CSS;
  document.head.appendChild(s);
}
function SightingsBadge({
  level = "often",
  children,
  className = "",
  ...rest
}) {
  inject();
  const lv = LEVELS[level] || LEVELS.often;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["asg-sighting", `asg-sighting--${lv.cls}`, className].filter(Boolean).join(" ")
  }, rest), children || lv.label);
}
Object.assign(__ds_scope, { SightingsBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/SightingsBadge.jsx", error: String((e && e.message) || e) }); }

// components/patterns/ValuePropBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* African Safari Group — Value-Prop Bar
   Four columns on Charcoal directly under the hero: Current Special,
   Book Direct, Plan With a Consultant, Expert Support. Labels are 12px
   tracked-caps brass (brand decision — never 10px). Option 4 template. */

const CSS = `
.asg-props{background:var(--asg-charcoal);color:var(--asg-warm-ivory);}
.asg-props__in{max-width:var(--container-wide);margin:0 auto;padding:0 var(--gutter);display:grid;grid-template-columns:repeat(4,1fr);}
.asg-prop{padding:24px 26px 24px 0;margin-right:26px;border-right:1px solid rgba(255,255,255,.08);}
.asg-prop:last-child{border-right:none;margin-right:0;}
.asg-prop__k{font-family:var(--font-body);font-size:12px;letter-spacing:.125em;text-transform:uppercase;color:var(--asg-brass);font-weight:var(--fw-semibold);margin:0 0 6px;}
.asg-prop__t{font-family:var(--font-body);font-size:13.5px;color:#FFFFFF;font-weight:var(--fw-medium);margin:0 0 4px;}
.asg-prop__d{font-family:var(--font-body);font-size:11.5px;color:var(--asg-bone);line-height:1.55;margin:0;}
@media(max-width:1000px){.asg-props__in{grid-template-columns:1fr 1fr;}.asg-prop{border-right:none;margin-right:0;border-bottom:1px solid rgba(255,255,255,.08);}}
@media(max-width:640px){.asg-props__in{grid-template-columns:1fr;}}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-asg", "valueprops");
  s.textContent = CSS;
  document.head.appendChild(s);
}
function ValuePropBar({
  items = [],
  className = "",
  ...rest
}) {
  inject();
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["asg-props", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "asg-props__in"
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.k,
    className: "asg-prop"
  }, /*#__PURE__*/React.createElement("p", {
    className: "asg-prop__k"
  }, it.k), /*#__PURE__*/React.createElement("p", {
    className: "asg-prop__t"
  }, it.t), /*#__PURE__*/React.createElement("p", {
    className: "asg-prop__d"
  }, it.d)))));
}
Object.assign(__ds_scope, { ValuePropBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/ValuePropBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/asg-direct-bookings/CheckoutScreen.jsx
try { (() => {
/* ASG Direct Bookings · Checkout */
const {
  Button,
  Input,
  Select,
  Checkbox,
  Divider,
  Icon
} = window.DesignSystem_e5ff94;
const coCss = `
.sbn-co{max-width:1100px;margin:0 auto;padding:36px 28px 90px;display:grid;grid-template-columns:1fr 360px;gap:40px;align-items:start;}
@media (max-width:900px){.sbn-co{grid-template-columns:1fr;}}
.sbn-co h1{font-family:var(--font-serif);font-weight:500;font-size:30px;color:var(--text-primary);margin:0 0 26px;}
.sbn-co__card{background:var(--surface-raised);border:1px solid var(--border-default);border-radius:var(--radius-md);padding:28px;margin-bottom:18px;}
.sbn-co__card h3{font-family:var(--font-body);font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--text-muted);margin:0 0 18px;display:flex;align-items:center;gap:9px;}
.sbn-co__card h3 .ic{color:var(--accent);}
.sbn-co__row{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:14px;}
.sbn-co__field{margin-bottom:14px;}
.sbn-pay{display:flex;align-items:center;gap:8px;font-family:var(--font-body);font-size:12px;color:var(--text-muted);margin-top:14px;}
.sbn-pay .ic{color:var(--success);}
.sbn-sum{background:var(--surface-raised);border:1px solid var(--border-default);border-radius:var(--radius-md);padding:24px;position:sticky;top:88px;}
.sbn-sum__prop{display:flex;gap:12px;align-items:center;padding-bottom:16px;border-bottom:1px solid var(--border-subtle);margin-bottom:16px;}
.sbn-sum__prop .ph{width:64px;height:54px;border-radius:var(--radius-sm);overflow:hidden;flex:none;}
.sbn-sum__prop b{font-family:var(--font-serif);font-weight:500;font-size:16px;color:var(--text-primary);display:block;}
.sbn-sum__prop span{font-family:var(--font-body);font-size:12px;color:var(--text-muted);}
.sbn-line{display:flex;justify-content:space-between;font-family:var(--font-body);font-size:14px;color:var(--text-body);padding:9px 0;}
.sbn-line span:last-child{font-family:var(--font-numeric);color:var(--text-primary);white-space:nowrap;}
.sbn-line--total{border-top:1px solid var(--border-subtle);margin-top:8px;padding-top:14px;}
.sbn-line--total b{font-family:var(--font-numeric);font-weight:600;font-size:20px;color:var(--text-primary);}
`;
(function () {
  const s = document.createElement('style');
  s.textContent = coCss;
  document.head.appendChild(s);
})();
function CheckoutScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "sbn-co"
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      go("confirm");
    }
  }, /*#__PURE__*/React.createElement("h1", null, "Complete your booking"), /*#__PURE__*/React.createElement("div", {
    className: "sbn-co__card"
  }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "user",
    size: 16
  })), "Lead guest"), /*#__PURE__*/React.createElement("div", {
    className: "sbn-co__row"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "First name",
    placeholder: "Sarah",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Last name",
    placeholder: "Kruger",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "sbn-co__field"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    icon: "mail",
    placeholder: "you@example.com",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "sbn-co__row"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Phone",
    icon: "phone",
    placeholder: "+27 \u2026",
    required: true
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Nationality",
    placeholder: "Select",
    options: ["South Africa", "United Kingdom", "United States", "Germany", "Other"]
  }))), /*#__PURE__*/React.createElement("div", {
    className: "sbn-co__card"
  }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "globe",
    size: 16
  })), "Arrival"), /*#__PURE__*/React.createElement("div", {
    className: "sbn-co__row"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Arrival airport",
    placeholder: "Johannesburg (JNB)"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Flight no. (optional)",
    placeholder: "SA 234"
  })), /*#__PURE__*/React.createElement(Checkbox, {
    label: "I'd like ASG Direct Bookings to arrange light-aircraft transfers"
  })), /*#__PURE__*/React.createElement("div", {
    className: "sbn-co__card"
  }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info",
    size: 16
  })), "Payment"), /*#__PURE__*/React.createElement("div", {
    className: "sbn-co__field"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Cardholder name",
    placeholder: "Name on card",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "sbn-co__field"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Card number",
    placeholder: "4242 4242 4242 4242",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "sbn-co__row"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Expiry",
    placeholder: "MM / YY",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "CVC",
    placeholder: "123",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "sbn-pay"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 15,
    strokeWidth: 2.4
  })), "Secured by ASG \xB7 30% deposit today, balance due 60 days before travel"))), /*#__PURE__*/React.createElement("aside", {
    className: "sbn-sum"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sbn-sum__prop"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ph"
  }, /*#__PURE__*/React.createElement(SbnPhoto, {
    label: "",
    style: {
      height: '100%'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Londolozi Founders Camp"), /*#__PURE__*/React.createElement("span", null, "Riverside Suite \xB7 Sabi Sand"))), /*#__PURE__*/React.createElement("div", {
    className: "sbn-line"
  }, /*#__PURE__*/React.createElement("span", null, "14\u201317 Oct 2026"), /*#__PURE__*/React.createElement("span", null, "3 nights")), /*#__PURE__*/React.createElement("div", {
    className: "sbn-line"
  }, /*#__PURE__*/React.createElement("span", null, "R 18,200 \xD7 3"), /*#__PURE__*/React.createElement("span", null, "R 54,600")), /*#__PURE__*/React.createElement("div", {
    className: "sbn-line"
  }, /*#__PURE__*/React.createElement("span", null, "Conservation levy"), /*#__PURE__*/React.createElement("span", null, "R 1,200")), /*#__PURE__*/React.createElement("div", {
    className: "sbn-line"
  }, /*#__PURE__*/React.createElement("span", null, "Booking fee"), /*#__PURE__*/React.createElement("span", null, "R 0")), /*#__PURE__*/React.createElement("div", {
    className: "sbn-line sbn-line--total"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "Total")), /*#__PURE__*/React.createElement("b", null, "R 55,800")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--text-muted)',
      margin: '6px 0 0',
      textAlign: 'right'
    }
  }, "Deposit today \xB7 R 16,740"), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    iconRight: "arrow-right",
    onClick: () => go("confirm")
  }, "Pay deposit & confirm")));
}
Object.assign(window, {
  CheckoutScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/asg-direct-bookings/CheckoutScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/asg-direct-bookings/ConfirmScreen.jsx
try { (() => {
/* ASG Direct Bookings · Confirmation */
const {
  Button,
  Divider,
  Icon,
  Avatar
} = window.DesignSystem_e5ff94;
const cfCss = `
.sbn-cf{max-width:760px;margin:0 auto;padding:72px 28px 100px;text-align:center;}
.sbn-cf__tick{width:64px;height:64px;border-radius:50%;background:var(--asg-brass-a20);border:1px solid var(--asg-brass-a40);color:var(--accent);display:flex;align-items:center;justify-content:center;margin:0 auto 26px;}
.sbn-cf h1{font-family:var(--font-serif);font-weight:500;font-size:clamp(2rem,1.5rem+1.6vw,2.8rem);color:var(--text-primary);margin:0;}
.sbn-cf__lead{font-family:var(--font-body);font-size:16px;line-height:1.65;color:var(--text-body);max-width:48ch;margin:16px auto 0;}
.sbn-cf__ref{display:inline-flex;align-items:center;gap:10px;margin-top:22px;padding:10px 18px;border:1px solid var(--border-default);border-radius:var(--radius-pill);background:var(--surface-raised);}
.sbn-cf__ref span{font-family:var(--font-body);font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:var(--text-muted);}
.sbn-cf__ref b{font-family:var(--font-numeric);font-size:14px;color:var(--accent);letter-spacing:.04em;}
.sbn-cf__card{background:var(--surface-raised);border:1px solid var(--border-default);border-radius:var(--radius-md);padding:28px;margin-top:40px;text-align:left;}
.sbn-cf__card .row{display:flex;justify-content:space-between;font-family:var(--font-body);font-size:14px;color:var(--text-body);padding:11px 0;border-bottom:1px solid var(--border-subtle);}
.sbn-cf__card .row:last-child{border-bottom:0;}
.sbn-cf__card .row span:last-child{color:var(--text-primary);font-family:var(--font-numeric);}
.sbn-cf__specialist{display:flex;gap:16px;align-items:center;text-align:left;background:var(--surface-raised);border:1px solid var(--border-default);border-radius:var(--radius-md);padding:22px 24px;margin-top:18px;}
.sbn-cf__specialist b{font-family:var(--font-body);font-size:15px;color:var(--text-primary);font-weight:600;display:block;}
.sbn-cf__specialist span{font-family:var(--font-body);font-size:13px;color:var(--text-muted);line-height:1.5;}
.sbn-cf__actions{display:flex;gap:12px;justify-content:center;margin-top:36px;flex-wrap:wrap;}
`;
(function () {
  const s = document.createElement('style');
  s.textContent = cfCss;
  document.head.appendChild(s);
})();
function ConfirmScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "sbn-cf"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sbn-cf__tick"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 30,
    strokeWidth: 2.2
  })), /*#__PURE__*/React.createElement("h1", null, "You're confirmed."), /*#__PURE__*/React.createElement("p", {
    className: "sbn-cf__lead"
  }, "Your deposit is paid and your suite is held. A confirmation is on its way to your inbox \u2014 and a specialist is already reviewing your trip."), /*#__PURE__*/React.createElement("div", {
    className: "sbn-cf__ref"
  }, /*#__PURE__*/React.createElement("span", null, "Booking reference"), /*#__PURE__*/React.createElement("b", null, "ASG-LF-72481")), /*#__PURE__*/React.createElement("div", {
    className: "sbn-cf__card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("span", null, "Londolozi Founders Camp \xB7 Riverside Suite"), /*#__PURE__*/React.createElement("span", null, "Sabi Sand")), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("span", null, "14 \u2013 17 October 2026 \xB7 2 adults"), /*#__PURE__*/React.createElement("span", null, "3 nights")), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("span", null, "Deposit paid today"), /*#__PURE__*/React.createElement("span", null, "R 16,740")), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("span", null, "Balance due 15 Aug 2026"), /*#__PURE__*/React.createElement("span", null, "R 39,060"))), /*#__PURE__*/React.createElement("div", {
    className: "sbn-cf__specialist"
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Thandi Mokoena",
    size: "lg",
    ring: true
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Thandi Mokoena \xB7 Your specialist"), /*#__PURE__*/React.createElement("span", null, "I've stayed at Londolozi a dozen times. I'll email you a few touches to consider before you travel \u2014 sundowner spots, the best drive times, what to pack."))), /*#__PURE__*/React.createElement("div", {
    className: "sbn-cf__actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "download"
  }, "Download itinerary"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => go("results")
  }, "Back to search")));
}
Object.assign(window, {
  ConfirmScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/asg-direct-bookings/ConfirmScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/asg-direct-bookings/PropertyScreen.jsx
try { (() => {
/* ASG Direct Bookings · Property — pick dates & room, then checkout */
const {
  Button,
  Badge,
  Stat,
  Divider,
  Icon
} = window.DesignSystem_e5ff94;
const propCss = `
.sbn-prop2{max-width:1320px;margin:0 auto;padding:24px 28px 80px;}
.sbn-prop2__gallery{display:grid;grid-template-columns:2fr 1fr 1fr;grid-template-rows:150px 150px;gap:8px;border-radius:var(--radius-md);overflow:hidden;}
.sbn-prop2__gallery .sbn-photo{border-radius:0;}
.sbn-prop2__gallery .g0{grid-row:span 2;}
.sbn-prop2__head{display:flex;align-items:flex-end;justify-content:space-between;gap:20px;margin:26px 0 0;flex-wrap:wrap;}
.sbn-prop2__head h1{font-family:var(--font-serif);font-weight:500;font-size:34px;color:var(--text-primary);margin:8px 0 0;}
.sbn-prop2__head .meta{display:flex;gap:16px;color:var(--text-muted);font-family:var(--font-body);font-size:13px;margin-top:10px;}
.sbn-prop2__head .meta span{display:inline-flex;align-items:center;gap:6px;}
.sbn-prop2__grid{display:grid;grid-template-columns:1fr 360px;gap:40px;align-items:start;margin-top:36px;}
@media (max-width:900px){.sbn-prop2__grid{grid-template-columns:1fr;}}
.sbn-dates{display:flex;gap:10px;margin-bottom:24px;flex-wrap:wrap;}
.sbn-date{flex:1;min-width:130px;padding:12px 15px;border:1px solid var(--border-strong);border-radius:var(--radius-xs);background:var(--surface-inset);cursor:pointer;}
.sbn-date span{font-family:var(--font-body);font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--text-muted);}
.sbn-date b{font-family:var(--font-numeric);font-size:15px;color:var(--text-primary);display:block;margin-top:3px;}
.sbn-rooms{display:flex;flex-direction:column;gap:14px;}
.sbn-room{display:grid;grid-template-columns:130px 1fr auto;gap:18px;padding:16px;border:1px solid var(--border-default);border-radius:var(--radius-md);background:var(--surface-raised);align-items:center;transition:border-color var(--dur-fast);}
.sbn-room--sel{border-color:var(--asg-brass);box-shadow:inset 0 0 0 1px var(--asg-brass);}
.sbn-room__media{height:90px;border-radius:var(--radius-sm);overflow:hidden;}
.sbn-room h4{font-family:var(--font-serif);font-weight:500;font-size:18px;color:var(--text-primary);margin:0 0 4px;}
.sbn-room p{font-family:var(--font-body);font-size:13px;color:var(--text-muted);margin:0;}
.sbn-room__rate{text-align:right;}
.sbn-room__rate b{font-family:var(--font-numeric);font-weight:500;font-size:20px;color:var(--text-primary);display:block;}
.sbn-room__rate span{font-family:var(--font-body);font-size:11px;color:var(--text-muted);}
.sbn-summary{background:var(--surface-raised);border:1px solid var(--border-default);border-radius:var(--radius-md);padding:24px;position:sticky;top:88px;}
.sbn-summary h3{font-family:var(--font-serif);font-weight:500;font-size:20px;color:var(--text-primary);margin:0 0 4px;}
.sbn-summary__sub{font-family:var(--font-body);font-size:13px;color:var(--text-muted);margin:0 0 18px;}
.sbn-line{display:flex;justify-content:space-between;font-family:var(--font-body);font-size:14px;color:var(--text-body);padding:10px 0;border-bottom:1px solid var(--border-subtle);}
.sbn-line span:last-child{font-family:var(--font-numeric);color:var(--text-primary);white-space:nowrap;}
.sbn-line--total{border-bottom:0;padding-top:16px;}
.sbn-line--total b{font-family:var(--font-numeric);font-weight:600;font-size:20px;color:var(--text-primary);}
.sbn-note{display:flex;gap:8px;align-items:flex-start;margin:14px 0 0;color:var(--text-muted);font-family:var(--font-body);font-size:12px;line-height:1.5;}
.sbn-note .ic{color:var(--accent);flex:none;margin-top:1px;}
`;
(function () {
  const s = document.createElement('style');
  s.textContent = propCss;
  document.head.appendChild(s);
})();
const ROOMS = [{
  id: "suite",
  h: "Riverside Suite",
  p: "Private plunge pool · river deck · 75m²",
  rate: 18200
}, {
  id: "founders",
  h: "Founders Suite",
  p: "Two bedrooms · private chef · 140m²",
  rate: 26400
}];
function PropertyScreen({
  go
}) {
  const [room, setRoom] = React.useState("suite");
  const nights = 3;
  const rate = ROOMS.find(r => r.id === room).rate;
  const sub = rate * nights;
  const levy = 1200;
  return /*#__PURE__*/React.createElement("div", {
    className: "sbn-prop2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sbn-prop2__gallery"
  }, /*#__PURE__*/React.createElement(SbnPhoto, {
    className: "g0",
    label: "Suite & deck"
  }), /*#__PURE__*/React.createElement(SbnPhoto, {
    label: "River"
  }), /*#__PURE__*/React.createElement(SbnPhoto, {
    label: "Dining"
  }), /*#__PURE__*/React.createElement(SbnPhoto, {
    label: "Drive"
  }), /*#__PURE__*/React.createElement(SbnPhoto, {
    label: "Pool"
  })), /*#__PURE__*/React.createElement("div", {
    className: "sbn-prop2__head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: 'var(--accent)'
    }
  }, "Sabi Sand \xB7 Founders Camp"), /*#__PURE__*/React.createElement("h1", null, "Londolozi Founders Camp"), /*#__PURE__*/React.createElement("div", {
    className: "meta"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    name: "star",
    size: 15,
    color: "var(--accent)"
  }), " 5.0 \xB7 Relais & Ch\xE2teaux"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 15
  }), " Private Sand River frontage"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 15,
    color: "var(--success)"
  }), " Free cancellation to 30 days"))), /*#__PURE__*/React.createElement(Badge, {
    variant: "solid"
  }, "Big Five")), /*#__PURE__*/React.createElement("div", {
    className: "sbn-prop2__grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "sbn-dates"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sbn-date"
  }, /*#__PURE__*/React.createElement("span", null, "Check in"), /*#__PURE__*/React.createElement("b", null, "Wed 14 Oct")), /*#__PURE__*/React.createElement("div", {
    className: "sbn-date"
  }, /*#__PURE__*/React.createElement("span", null, "Check out"), /*#__PURE__*/React.createElement("b", null, "Sat 17 Oct")), /*#__PURE__*/React.createElement("div", {
    className: "sbn-date"
  }, /*#__PURE__*/React.createElement("span", null, "Guests"), /*#__PURE__*/React.createElement("b", null, "2 adults"))), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 500,
      fontSize: 22,
      color: 'var(--text-primary)',
      margin: '0 0 14px'
    }
  }, "Choose your suite"), /*#__PURE__*/React.createElement("div", {
    className: "sbn-rooms"
  }, ROOMS.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.id,
    className: ["sbn-room", room === r.id && "sbn-room--sel"].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("div", {
    className: "sbn-room__media"
  }, /*#__PURE__*/React.createElement(SbnPhoto, {
    label: "Suite",
    style: {
      height: '100%'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, r.h), /*#__PURE__*/React.createElement("p", null, r.p)), /*#__PURE__*/React.createElement("div", {
    className: "sbn-room__rate"
  }, /*#__PURE__*/React.createElement("b", null, "R ", r.rate.toLocaleString()), /*#__PURE__*/React.createElement("span", null, "pp / night"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: room === r.id ? "primary" : "secondary",
    onClick: () => setRoom(r.id)
  }, room === r.id ? "Selected" : "Select"))))))), /*#__PURE__*/React.createElement("aside", {
    className: "sbn-summary"
  }, /*#__PURE__*/React.createElement("h3", null, "Your stay"), /*#__PURE__*/React.createElement("p", {
    className: "sbn-summary__sub"
  }, "3 nights \xB7 2 adults \xB7 full board"), /*#__PURE__*/React.createElement("div", {
    className: "sbn-line"
  }, /*#__PURE__*/React.createElement("span", null, "R ", rate.toLocaleString(), " \xD7 ", nights, " nights"), /*#__PURE__*/React.createElement("span", null, "R ", sub.toLocaleString())), /*#__PURE__*/React.createElement("div", {
    className: "sbn-line"
  }, /*#__PURE__*/React.createElement("span", null, "Conservation levy"), /*#__PURE__*/React.createElement("span", null, "R ", levy.toLocaleString())), /*#__PURE__*/React.createElement("div", {
    className: "sbn-line"
  }, /*#__PURE__*/React.createElement("span", null, "Booking fee"), /*#__PURE__*/React.createElement("span", null, "R 0")), /*#__PURE__*/React.createElement("div", {
    className: "sbn-line sbn-line--total"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "Total")), /*#__PURE__*/React.createElement("b", null, "R ", (sub + levy).toLocaleString())), /*#__PURE__*/React.createElement("div", {
    className: "sbn-note"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info",
    size: 15
  })), "The rate you see is the rate you pay \u2014 no markup added at checkout."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    iconRight: "arrow-right",
    onClick: () => go("checkout"),
    "data-comment-anchor": "812f9a0ce3-button-105-39"
  }, "Continue to checkout")))));
}
Object.assign(window, {
  PropertyScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/asg-direct-bookings/PropertyScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/asg-direct-bookings/ResultsScreen.jsx
try { (() => {
/* ASG Direct Bookings · Search results */
const {
  Button,
  Badge,
  Tag,
  Switch,
  Checkbox,
  Icon,
  Divider
} = window.DesignSystem_e5ff94;
const SbnDrawer = window.DesignSystem_e5ff94.Drawer || (() => null);
const resCss = `
.sbn-searchbar{background:var(--surface-raised);border-bottom:1px solid var(--border-default);}
.sbn-searchbar__in{max-width:1320px;margin:0 auto;padding:16px 28px;display:flex;align-items:center;gap:14px;flex-wrap:wrap;}
.sbn-sb-field{display:flex;align-items:center;gap:10px;padding:10px 16px;background:var(--surface-inset);border:1px solid var(--border-strong);border-radius:var(--radius-xs);}
.sbn-sb-field .ic{color:var(--accent);}
.sbn-sb-field b{font-family:var(--font-body);font-size:13px;color:var(--text-primary);font-weight:500;}
.sbn-sb-field span{font-family:var(--font-body);font-size:11px;color:var(--text-muted);display:block;letter-spacing:.06em;text-transform:uppercase;}
.sbn-layout{max-width:1320px;margin:0 auto;padding:28px;display:grid;grid-template-columns:264px 1fr;gap:28px;align-items:start;}
@media (max-width:900px){.sbn-layout{grid-template-columns:1fr;}}
.sbn-filters-btn{display:none;}
@media (max-width:900px){.sbn-filters{display:none;}.sbn-filters-btn{display:inline-flex;}}
.sbn-fdrawer{display:flex;flex-direction:column;gap:18px;}
.sbn-filters{background:var(--surface-raised);border:1px solid var(--border-default);border-radius:var(--radius-md);padding:22px;position:sticky;top:88px;display:flex;flex-direction:column;gap:18px;}
.sbn-filters h4{font-family:var(--font-body);font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--text-muted);margin:0 0 12px;}
.sbn-fgroup{display:flex;flex-direction:column;gap:11px;}
.sbn-price{display:flex;align-items:center;gap:10px;}
.sbn-price input{flex:1;accent-color:var(--asg-brass);}
.sbn-results__head{display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;flex-wrap:wrap;gap:12px;}
.sbn-results__head h2{font-family:var(--font-serif);font-weight:500;font-size:24px;color:var(--text-primary);margin:0;}
.sbn-results__head span{font-family:var(--font-body);font-size:13px;color:var(--text-muted);}
.sbn-reslist{display:flex;flex-direction:column;gap:16px;}
.sbn-prop{display:grid;grid-template-columns:240px 1fr auto;background:var(--surface-raised);border:1px solid var(--border-default);border-radius:var(--radius-md);overflow:hidden;transition:border-color var(--dur-base),box-shadow var(--dur-base);}
.sbn-prop:hover{border-color:var(--asg-brass-a40);box-shadow:var(--shadow-md);}
.sbn-prop__media{position:relative;min-height:190px;}
.sbn-prop__fav{position:absolute;top:10px;right:10px;}
.sbn-prop__body{padding:20px 22px;display:flex;flex-direction:column;gap:9px;}
.sbn-prop__eyebrow{font-family:var(--font-body);font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--accent);}
.sbn-prop__title{font-family:var(--font-serif);font-weight:500;font-size:21px;color:var(--text-primary);margin:0;display:flex;align-items:center;gap:10px;}
.sbn-prop__rate-stars{display:inline-flex;align-items:center;gap:4px;font-family:var(--font-numeric);font-size:13px;color:var(--text-body);}
.sbn-prop__desc{font-family:var(--font-body);font-size:13.5px;line-height:1.6;color:var(--text-muted);margin:0;max-width:52ch;}
.sbn-prop__amen{display:flex;gap:8px;flex-wrap:wrap;margin-top:2px;}
.sbn-prop__amen span{font-family:var(--font-body);font-size:12px;color:var(--text-body);display:inline-flex;align-items:center;gap:6px;}
.sbn-prop__amen .ic{color:var(--text-muted);}
.sbn-prop__rate{border-left:1px solid var(--border-subtle);padding:20px 22px;display:flex;flex-direction:column;align-items:flex-end;justify-content:space-between;gap:12px;min-width:190px;}
.sbn-prop__price b{font-family:var(--font-numeric);font-weight:500;font-size:26px;color:var(--text-primary);display:block;text-align:right;}
.sbn-prop__price span{font-family:var(--font-body);font-size:12px;color:var(--text-muted);display:block;text-align:right;}
.sbn-prop__avail{font-family:var(--font-body);font-size:11.5px;color:var(--success);display:inline-flex;align-items:center;gap:6px;}
@media (max-width:760px){.sbn-prop{grid-template-columns:1fr;}.sbn-prop__rate{border-left:0;border-top:1px solid var(--border-subtle);align-items:stretch;}.sbn-prop__price b,.sbn-prop__price span{text-align:left;}}
`;
(function () {
  const s = document.createElement('style');
  s.textContent = resCss;
  document.head.appendChild(s);
})();
const PROPS = [{
  eyebrow: "Sabi Sand",
  title: "Londolozi Founders Camp",
  stars: "5.0",
  desc: "Founders-suite privacy on the Sand River; the relaxed-leopard original.",
  price: "R 18,200",
  left: "2 suites left",
  amen: ["binoculars", "leaf", "users"],
  fav: true
}, {
  eyebrow: "Sabi Sand",
  title: "Cheetah Plains",
  stars: "4.9",
  desc: "Solar-run contemporary villas, exclusive-use available for families.",
  price: "R 22,900",
  left: "Good availability",
  amen: ["leaf", "users", "compass"]
}, {
  eyebrow: "Amakhala",
  title: "Hlosi Game Lodge",
  stars: "4.7",
  desc: "Malaria-free Big Five in the Eastern Cape — ideal for first safaris.",
  price: "R 9,400",
  left: "4 rooms left",
  amen: ["binoculars", "users"]
}];
const AMEN_LABEL = {
  binoculars: "Game drives",
  leaf: "Eco-certified",
  users: "Family-friendly",
  compass: "Guided walks"
};
function ResultsScreen({
  go
}) {
  const [malaria, setMalaria] = React.useState(false);
  const [price, setPrice] = React.useState(25000);
  const [filtersOpen, setFiltersOpen] = React.useState(false);
  const count = malaria ? 1 : 3;
  const filterControls = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Price \xB7 per night"), /*#__PURE__*/React.createElement("div", {
    className: "sbn-price"
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "5000",
    max: "30000",
    step: "500",
    value: price,
    onChange: e => setPrice(+e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-numeric)',
      fontSize: 13,
      color: 'var(--text-body)',
      marginTop: 8
    }
  }, "Up to R ", price.toLocaleString())), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Reserve"), /*#__PURE__*/React.createElement("div", {
    className: "sbn-fgroup"
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Sabi Sand",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Amakhala"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Madikwe"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Timbavati"
  }))), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Experience"), /*#__PURE__*/React.createElement("div", {
    className: "sbn-fgroup"
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Big Five",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Exclusive-use"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Family-friendly"
  }))), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(Switch, {
    label: "Malaria-free only",
    checked: malaria,
    onChange: e => setMalaria(e.target.checked)
  }));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "sbn-searchbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sbn-searchbar__in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sbn-sb-field"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 18
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Destination"), /*#__PURE__*/React.createElement("b", null, "Sabi Sand & nearby"))), /*#__PURE__*/React.createElement("div", {
    className: "sbn-sb-field"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar",
    size: 18
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Dates"), /*#__PURE__*/React.createElement("b", null, "14 \u2013 17 Oct 2026"))), /*#__PURE__*/React.createElement("div", {
    className: "sbn-sb-field"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "user",
    size: 18
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Guests"), /*#__PURE__*/React.createElement("b", null, "2 adults"))), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    icon: "search"
  }, "Edit search"))), /*#__PURE__*/React.createElement("div", {
    className: "sbn-layout"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "sbn-filters"
  }, filterControls), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    className: "sbn-results__head"
  }, /*#__PURE__*/React.createElement("h2", null, count, " lodges available"), /*#__PURE__*/React.createElement("span", {
    className: "sbn-filters-btn"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    icon: "sliders",
    onClick: () => setFiltersOpen(true)
  }, "Filters")), /*#__PURE__*/React.createElement("span", null, "Sorted by relevance \xB7 real-time availability")), /*#__PURE__*/React.createElement(SbnDrawer, {
    open: filtersOpen,
    onClose: () => setFiltersOpen(false),
    title: "Filters",
    side: "left",
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      style: {
        width: '100%'
      },
      onClick: () => setFiltersOpen(false)
    }, "Show ", count, " lodges")
  }, /*#__PURE__*/React.createElement("div", {
    className: "sbn-fdrawer"
  }, filterControls)), /*#__PURE__*/React.createElement("div", {
    className: "sbn-reslist"
  }, PROPS.filter(p => !malaria || p.eyebrow === "Amakhala").map(p => /*#__PURE__*/React.createElement("article", {
    className: "sbn-prop",
    key: p.title
  }, /*#__PURE__*/React.createElement("div", {
    className: "sbn-prop__media"
  }, /*#__PURE__*/React.createElement(SbnPhoto, {
    label: "Lodge photo",
    style: {
      position: 'absolute',
      inset: 0
    }
  }), p.fav && /*#__PURE__*/React.createElement("span", {
    className: "sbn-prop__fav"
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "solid"
  }, "2 left"))), /*#__PURE__*/React.createElement("div", {
    className: "sbn-prop__body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sbn-prop__eyebrow"
  }, p.eyebrow), /*#__PURE__*/React.createElement("h3", {
    className: "sbn-prop__title"
  }, p.title, /*#__PURE__*/React.createElement("span", {
    className: "sbn-prop__rate-stars"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "star",
    size: 14,
    color: "var(--accent)"
  }), p.stars)), /*#__PURE__*/React.createElement("p", {
    className: "sbn-prop__desc"
  }, p.desc), /*#__PURE__*/React.createElement("div", {
    className: "sbn-prop__amen"
  }, p.amen.map(a => /*#__PURE__*/React.createElement("span", {
    key: a
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: a,
    size: 15
  })), AMEN_LABEL[a])))), /*#__PURE__*/React.createElement("div", {
    className: "sbn-prop__rate"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sbn-prop__avail"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 14,
    strokeWidth: 2.4
  }), p.left), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "sbn-prop__price"
  }, /*#__PURE__*/React.createElement("b", null, p.price), /*#__PURE__*/React.createElement("span", null, "pp / night \xB7 incl. all drives")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => go("property")
  }, "View & book"))))))))));
}
Object.assign(window, {
  ResultsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/asg-direct-bookings/ResultsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/asg-direct-bookings/SbnChrome.jsx
try { (() => {
/* ASG Direct Bookings · Shared chrome + helpers */
const {
  Logo,
  Button,
  IconButton,
  Badge,
  Icon
} = window.DesignSystem_e5ff94;
const SBN_ICON_BASE = "../../assets/logos/";
const sbnCss = `
.sbn-photo{position:relative;background:radial-gradient(120% 90% at 65% 15%, #241f19 0%, #171411 58%, #0e0c0a 100%);overflow:hidden;display:flex;align-items:center;justify-content:center;}
.sbn-photo::before{content:"";position:absolute;inset:0;background-image:repeating-linear-gradient(135deg,rgba(168,121,75,.05) 0 2px,transparent 2px 9px);opacity:.5;}
.sbn-photo__t{position:relative;font-family:var(--font-body);font-size:10.5px;letter-spacing:.18em;text-transform:uppercase;color:var(--text-faint);}

.sbn-header{position:sticky;top:0;z-index:120;background:rgba(14,12,10,.9);backdrop-filter:blur(10px);border-bottom:1px solid var(--border-subtle);}
.sbn-header__in{max-width:1320px;margin:0 auto;padding:0 28px;height:68px;display:flex;align-items:center;justify-content:space-between;gap:20px;}
.sbn-logo{cursor:pointer;display:inline-flex;}
.sbn-header__right{display:flex;align-items:center;gap:18px;}
.sbn-trust{display:flex;align-items:center;gap:7px;font-family:var(--font-body);font-size:12px;color:var(--text-muted);}
.sbn-trust .ic{color:var(--accent);}

.sbn-steps{display:flex;align-items:center;gap:0;}
.sbn-step{display:flex;align-items:center;gap:9px;font-family:var(--font-body);font-size:12px;letter-spacing:.04em;color:var(--text-faint);}
.sbn-step .n{width:24px;height:24px;border-radius:50%;border:1px solid var(--border-strong);display:flex;align-items:center;justify-content:center;font-family:var(--font-numeric);font-size:12px;}
.sbn-step--done{color:var(--text-body);} .sbn-step--done .n{border-color:var(--asg-brass);background:var(--asg-brass);color:var(--text-on-brass);}
.sbn-step--active{color:var(--text-primary);} .sbn-step--active .n{border-color:var(--asg-brass);color:var(--accent);}
.sbn-steps__line{width:34px;height:1px;background:var(--border-strong);margin:0 12px;}
.sbn-steps-mini{display:none;align-items:center;gap:9px;font-family:var(--font-body);font-size:12px;letter-spacing:.04em;color:var(--text-body);}
.sbn-steps-mini .n{width:24px;height:24px;border-radius:50%;border:1px solid var(--asg-brass);display:flex;align-items:center;justify-content:center;font-family:var(--font-numeric);font-size:12px;color:var(--accent);}
@media (max-width:820px){.sbn-steps{display:none;}.sbn-steps-mini{display:flex;}}
@media (max-width:640px){.sbn-trust{display:none;}}
`;
(function () {
  const s = document.createElement('style');
  s.textContent = sbnCss;
  document.head.appendChild(s);
})();
function SbnPhoto({
  label = "Photo",
  style,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ["sbn-photo", className].filter(Boolean).join(" "),
    style: style
  }, /*#__PURE__*/React.createElement("span", {
    className: "sbn-photo__t"
  }, label));
}
function SbnHeader({
  step,
  go,
  theme
}) {
  const logoTone = theme === "light" ? "ink" : "white";
  const steps = [["Search", "results"], ["Property", "property"], ["Checkout", "checkout"], ["Confirmed", "confirm"]];
  const idx = {
    results: 0,
    property: 1,
    checkout: 2,
    confirm: 3
  }[step] ?? 0;
  return /*#__PURE__*/React.createElement("header", {
    className: "sbn-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sbn-header__in"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sbn-logo",
    onClick: () => go("results")
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "horizontal",
    tone: logoTone,
    name: "ASG DIRECT",
    sub: "BOOKINGS",
    size: 34,
    iconBase: SBN_ICON_BASE
  })), step !== "confirm" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "sbn-steps"
  }, steps.slice(0, 3).map(([label], i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: label
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    className: "sbn-steps__line"
  }), /*#__PURE__*/React.createElement("span", {
    className: ["sbn-step", i < idx && "sbn-step--done", i === idx && "sbn-step--active"].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("span", {
    className: "n"
  }, i < idx ? /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 13,
    strokeWidth: 2.4
  }) : i + 1), label)))), /*#__PURE__*/React.createElement("span", {
    className: "sbn-steps-mini"
  }, /*#__PURE__*/React.createElement("span", {
    className: "n"
  }, Math.min(idx, 2) + 1), "of 3 \xB7 ", steps[Math.min(idx, 2)][0])), /*#__PURE__*/React.createElement("div", {
    className: "sbn-header__right"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sbn-trust"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info",
    size: 15
  })), "No markup at checkout"), /*#__PURE__*/React.createElement(IconButton, {
    icon: "user",
    label: "Account",
    variant: "outline",
    size: "sm"
  }))));
}
function SbnFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      background: 'var(--asg-ink-900)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1320,
      margin: '0 auto',
      padding: '26px 28px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--text-faint)'
    }
  }, "Part of African Safari Group \xB7 Real rates, real availability"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--text-faint)',
      display: 'inline-flex',
      gap: 7,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "globe",
    size: 15,
    color: "var(--accent)"
  }), " Secure booking \xB7 ASG")));
}
Object.assign(window, {
  SbnHeader,
  SbnFooter,
  SbnPhoto,
  SBN_ICON_BASE
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/asg-direct-bookings/SbnChrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/flagship-website/Chrome.jsx
try { (() => {
/* African Safari Group — Flagship Website · Shared chrome (Header + Footer + SubNav) */
const {
  Logo,
  Button,
  Icon,
  IconButton
} = window.DesignSystem_e5ff94;
const AccreditationRow = window.DesignSystem_e5ff94.AccreditationRow || (() => null);
const Drawer = window.DesignSystem_e5ff94.Drawer || (() => null);
const ICON_BASE = "../../assets/logos/";
const chromeCss = `
.site-header{position:sticky;top:0;z-index:120;background:rgba(14,12,10,.82);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border-bottom:1px solid var(--border-subtle);transition:transform .28s var(--ease-standard);}
.site-header.nav-hidden{transform:translateY(-100%);}
.site-header__in{max-width:var(--container-wide);margin:0 auto;padding:0 var(--gutter);height:76px;display:flex;align-items:center;justify-content:space-between;gap:24px;}
.site-nav{display:flex;align-items:center;gap:30px;}
.site-nav a{font-family:var(--font-body);font-size:12px;font-weight:500;letter-spacing:.14em;text-transform:uppercase;color:var(--text-body);cursor:pointer;transition:color var(--dur-fast);}
.site-nav a:hover,.site-nav a.is-active{color:var(--text-primary);}
.site-header__cta{display:flex;align-items:center;gap:14px;}
.site-logo{cursor:pointer;display:inline-flex;}
.site-burger{display:none;}
@media (max-width:900px){
  .site-nav{display:none;}
  .site-burger{display:inline-flex;}
  .site-header__cta .site-cta-desktop{display:none;}
}
.site-drawer-links{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;}
.site-drawer-links a{display:block;padding:15px 0;font-family:var(--font-body);font-size:13px;font-weight:500;letter-spacing:.14em;text-transform:uppercase;color:var(--text-body);border-bottom:1px solid var(--border-subtle);cursor:pointer;transition:color var(--dur-fast);}
.site-drawer-links a:hover,.site-drawer-links a.is-active{color:var(--text-primary);}
.site-drawer-contact{margin:20px 0 0;font-family:var(--font-body);font-size:13px;line-height:1.8;color:var(--text-muted);}

/* Sub-nav — sticky section bar; takes the top from the header (nav handoff) and
   runs a scrollspy: the brass underline follows the section in view. */
.subnav{position:sticky;top:0;z-index:110;background:rgba(14,12,10,.94);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);border-bottom:1px solid var(--border-subtle);}
.subnav__in{max-width:var(--container-wide);margin:0 auto;padding:0 var(--gutter);display:flex;align-items:center;gap:28px;height:56px;overflow-x:auto;}
.subnav__in a{font-family:var(--font-body);font-size:11.5px;letter-spacing:.1em;text-transform:uppercase;color:var(--text-muted);white-space:nowrap;padding:4px 0;border-bottom:2px solid transparent;cursor:pointer;transition:color var(--dur-fast);}
.subnav__in a:hover,.subnav__in a.active{color:var(--accent);border-bottom-color:var(--asg-brass);}
.subnav__cta{margin-left:auto;flex:none;}

.site-footer{background:var(--asg-ink-900);border-top:1px solid var(--border-subtle);}
.site-footer__in{max-width:var(--container-wide);margin:0 auto;padding:64px var(--gutter) 40px;display:grid;grid-template-columns:1.4fr 1fr 1fr 1fr;gap:40px;}
.site-footer h5{font-family:var(--font-body);font-size:11px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:var(--text-muted);margin:0 0 18px;}
.site-footer ul{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:11px;}
.site-footer a{font-family:var(--font-body);font-size:14px;color:var(--text-body);cursor:pointer;transition:color var(--dur-fast);}
.site-footer a:hover{color:var(--accent-hover);}
.site-footer__brand p{font-family:var(--font-body);font-size:13.5px;line-height:1.7;color:var(--text-muted);max-width:34ch;margin:18px 0 0;}
.site-footer__bar{max-width:var(--container-wide);margin:0 auto;padding:22px var(--gutter);border-top:1px solid var(--border-subtle);display:flex;align-items:center;justify-content:space-between;gap:16px;}
.site-footer__bar span{font-family:var(--font-body);font-size:12px;color:var(--text-faint);letter-spacing:.04em;}
.site-footer__social{display:flex;gap:10px;}
.site-footer__accred{max-width:var(--container-wide);margin:0 auto;padding:0 var(--gutter) 30px;}
@media (max-width:900px){.site-footer__in{grid-template-columns:1fr 1fr;}}
`;
(function () {
  const s = document.createElement('style');
  s.textContent = chromeCss;
  document.head.appendChild(s);
})();
const NAV = ["Destinations", "Experiences", "Accommodation", "About"];

/* Nav handoff + scrollspy. Sections are matched by id — items carry real ids
   only (never bare "#": those must stay out of the spy or querySelector throws). */
function SubNav({
  items,
  ctaLabel = "Plan My Safari",
  onCta
}) {
  const [active, setActive] = React.useState(items[0] && items[0].id);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const header = () => document.querySelector(".site-header");
    const onScroll = () => {
      const h = header();
      const el = ref.current;
      if (h && el) {
        const headerH = h.offsetHeight;
        if (el.getBoundingClientRect().top <= headerH + 1) h.classList.add("nav-hidden");else h.classList.remove("nav-hidden");
      }
      let current = items[0] && items[0].id;
      for (const it of items) {
        const sec = document.getElementById(it.id);
        if (sec && sec.getBoundingClientRect().top - 90 <= 0) current = it.id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      const h = header();
      if (h) h.classList.remove("nav-hidden");
    };
  }, [items]);
  const jump = id => e => {
    e.preventDefault();
    const sec = document.getElementById(id);
    if (sec) window.scrollTo({
      top: sec.getBoundingClientRect().top + window.scrollY - 70,
      behavior: "smooth"
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "subnav",
    ref: ref
  }, /*#__PURE__*/React.createElement("div", {
    className: "subnav__in"
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.id,
    className: active === it.id ? "active" : "",
    onClick: jump(it.id)
  }, it.label)), onCta && /*#__PURE__*/React.createElement("span", {
    className: "subnav__cta"
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: onCta
  }, ctaLabel))));
}
function Header({
  route,
  go,
  theme
}) {
  const logoTone = theme === "light" ? "ink" : "white";
  const [menuOpen, setMenuOpen] = React.useState(false);
  const goClose = r => {
    setMenuOpen(false);
    go(r);
  };
  return /*#__PURE__*/React.createElement("header", {
    className: "site-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "site-header__in"
  }, /*#__PURE__*/React.createElement("span", {
    className: "site-logo",
    onClick: () => go("home")
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "horizontal",
    tone: logoTone,
    size: 38,
    iconBase: ICON_BASE
  })), /*#__PURE__*/React.createElement("nav", {
    className: "site-nav"
  }, NAV.map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    className: route === "reserve" && n === "Destinations" ? "is-active" : "",
    onClick: () => go("reserve")
  }, n))), /*#__PURE__*/React.createElement("div", {
    className: "site-header__cta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "site-cta-desktop"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: () => go("enquire")
  }, "Plan My Safari")), /*#__PURE__*/React.createElement("span", {
    className: "site-burger"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "menu",
    label: "Menu",
    variant: "ghost",
    onClick: () => setMenuOpen(true)
  })))), /*#__PURE__*/React.createElement(Drawer, {
    open: menuOpen,
    onClose: () => setMenuOpen(false),
    title: "Menu",
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      style: {
        width: '100%'
      },
      onClick: () => goClose("enquire")
    }, "Plan My Safari")
  }, /*#__PURE__*/React.createElement("ul", {
    className: "site-drawer-links"
  }, NAV.map(n => /*#__PURE__*/React.createElement("li", {
    key: n
  }, /*#__PURE__*/React.createElement("a", {
    className: route === "reserve" && n === "Destinations" ? "is-active" : "",
    onClick: () => goClose("reserve")
  }, n)))), /*#__PURE__*/React.createElement("p", {
    className: "site-drawer-contact"
  }, "+27 21 200 5960", /*#__PURE__*/React.createElement("br", null), "bookings@africansafarigroup.com")));
}
function Footer({
  go,
  theme
}) {
  const logoTone = theme === "light" ? "ink" : "white";
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("footer", {
    className: "site-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "site-footer__in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "site-footer__brand"
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "stacked",
    tone: logoTone,
    size: 52,
    iconBase: ICON_BASE
  }), /*#__PURE__*/React.createElement("p", null, "Tailor-made five-star safaris across Southern & East Africa, designed by specialists who have stayed at every lodge they recommend.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, "Destinations"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    onClick: () => go("reserve")
  }, "Sabi Sand")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    onClick: () => go("reserve")
  }, "Amakhala")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    onClick: () => go("reserve")
  }, "Madikwe")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    onClick: () => go("reserve")
  }, "Serengeti")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, "Company"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "About us")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "Our specialists")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "Responsible travel")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "Journal")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, "Speak to us"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "+27 21 200 5960")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "bookings@africansafarigroup.com"))))), /*#__PURE__*/React.createElement("div", {
    className: "site-footer__accred"
  }, /*#__PURE__*/React.createElement(AccreditationRow, {
    pills: ["Cape Town Tourism", "SATSA", "ATTA Corporate", "TripAdvisor Certificate of Excellence"],
    reviews: ["TripAdvisor · 1,000+ reviews", "Feedback Company · 1,000+ reviews", "Google · 400+ reviews"]
  })), /*#__PURE__*/React.createElement("div", {
    className: "site-footer__bar"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 African Safari Group. All rights reserved."), /*#__PURE__*/React.createElement("div", {
    className: "site-footer__social"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "globe",
    size: 18
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 18
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 18
  }))))));
}
Object.assign(window, {
  Header,
  Footer,
  SubNav,
  ICON_BASE
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/flagship-website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/flagship-website/EnquireScreen.jsx
try { (() => {
/* African Safari Group — Flagship Website · Enquiry (consultation-led) */
const {
  Button,
  Input,
  Textarea,
  Select,
  Checkbox,
  Divider,
  Toast,
  Icon
} = window.DesignSystem_e5ff94;
const enqCss = `
.enq{max-width:var(--container-max);margin:0 auto;padding:72px var(--gutter) 110px;display:grid;grid-template-columns:1fr 1.05fr;gap:64px;align-items:start;}
@media (max-width:900px){.enq{grid-template-columns:1fr;gap:36px;}}
.enq__intro h1{font-size:clamp(2.2rem,1.5rem+2.2vw,3.2rem);margin:14px 0 0;}
.enq__intro p{font-size:16.5px;line-height:1.7;color:var(--text-body);max-width:46ch;margin:20px 0 0;}
.enq__steps{display:flex;flex-direction:column;gap:22px;margin-top:36px;}
.enq__step{display:flex;gap:16px;align-items:flex-start;}
.enq__step .n{flex:none;width:34px;height:34px;border-radius:50%;border:1px solid var(--asg-brass-a40);color:var(--accent);font-family:var(--font-numeric);font-weight:500;display:flex;align-items:center;justify-content:center;font-size:14px;}
.enq__step b{display:block;font-family:var(--font-body);font-size:15px;color:var(--text-primary);font-weight:600;}
.enq__step span{font-family:var(--font-body);font-size:14px;color:var(--text-muted);line-height:1.55;}
.enq__form{background:var(--surface-raised);border:1px solid var(--border-default);border-radius:var(--radius-lg);padding:36px;}
.enq__form h3{font-family:var(--font-serif);font-weight:500;font-size:22px;color:var(--text-primary);margin:0 0 22px;}
.enq__row{display:grid;grid-template-columns:1fr 1fr;gap:16px;}
.enq__field{margin-bottom:16px;}
.enq__toast{position:fixed;right:24px;bottom:24px;z-index:1200;}
`;
(function () {
  const s = document.createElement('style');
  s.textContent = enqCss;
  document.head.appendChild(s);
})();
function EnquireScreen() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    className: "enq"
  }, /*#__PURE__*/React.createElement("div", {
    className: "enq__intro"
  }, /*#__PURE__*/React.createElement("span", {
    className: "asg-eyebrow"
  }, "Plan my safari"), /*#__PURE__*/React.createElement("h1", null, "Let's start with a conversation."), /*#__PURE__*/React.createElement("p", null, "Tell us who is travelling and roughly when. A specialist \u2014 not a call centre \u2014 will reply within the hour with a considered first shortlist."), /*#__PURE__*/React.createElement(Divider, {
    brass: true
  }), /*#__PURE__*/React.createElement("div", {
    className: "enq__steps"
  }, /*#__PURE__*/React.createElement("div", {
    className: "enq__step"
  }, /*#__PURE__*/React.createElement("span", {
    className: "n"
  }, "1"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "We listen"), /*#__PURE__*/React.createElement("span", null, "Your dates, your party, the kind of trip you have in mind."))), /*#__PURE__*/React.createElement("div", {
    className: "enq__step"
  }, /*#__PURE__*/React.createElement("span", {
    className: "n"
  }, "2"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "We shortlist"), /*#__PURE__*/React.createElement("span", null, "Three or four lodges we know first-hand, with real rates and availability."))), /*#__PURE__*/React.createElement("div", {
    className: "enq__step"
  }, /*#__PURE__*/React.createElement("span", {
    className: "n"
  }, "3"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "We hold & refine"), /*#__PURE__*/React.createElement("span", null, "We hold space while we tailor the itinerary with you, end to end."))))), /*#__PURE__*/React.createElement("form", {
    className: "enq__form",
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    }
  }, /*#__PURE__*/React.createElement("h3", null, "Your enquiry"), /*#__PURE__*/React.createElement("div", {
    className: "enq__row enq__field"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "First name",
    placeholder: "Sarah",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Last name",
    placeholder: "Kruger",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "enq__field"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    icon: "mail",
    placeholder: "you@example.com",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "enq__row enq__field"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Phone",
    icon: "phone",
    placeholder: "+27 \u2026"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Reserve of interest",
    placeholder: "Open to suggestions",
    options: ["Sabi Sand", "Amakhala", "Madikwe", "Serengeti", "Not sure yet"]
  })), /*#__PURE__*/React.createElement("div", {
    className: "enq__row enq__field"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Approx. travel dates",
    icon: "calendar",
    placeholder: "October 2026"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Guests",
    options: [{
      value: "2",
      label: "2 adults"
    }, {
      value: "4",
      label: "4 adults"
    }, {
      value: "family",
      label: "Family with children"
    }]
  })), /*#__PURE__*/React.createElement("div", {
    className: "enq__field"
  }, /*#__PURE__*/React.createElement(Textarea, {
    label: "Anything else?",
    rows: 3,
    placeholder: "First safari, special occasion, must-see species\u2026"
  })), /*#__PURE__*/React.createElement("div", {
    className: "enq__field"
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Malaria-free reserves only"
  })), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "primary",
    size: "lg",
    fullWidth: true,
    iconRight: "arrow-right"
  }, "Send my enquiry"))), sent && /*#__PURE__*/React.createElement("div", {
    className: "enq__toast"
  }, /*#__PURE__*/React.createElement(Toast, {
    variant: "success",
    title: "Enquiry received",
    onClose: () => setSent(false)
  }, "Thandi will reply within the hour. Check your inbox for a confirmation.")));
}
Object.assign(window, {
  EnquireScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/flagship-website/EnquireScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/flagship-website/HomeScreen.jsx
try { (() => {
/* African Safari Group — Flagship Website · Home */
const {
  Button,
  Badge,
  Card,
  Stat,
  Divider,
  Icon
} = window.DesignSystem_e5ff94;
const homeCss = `
.photo-slot{position:relative;background:
  radial-gradient(120% 90% at 70% 10%, #241f19 0%, #171411 55%, #0e0c0a 100%);
  overflow:hidden;display:flex;align-items:center;justify-content:center;}
.photo-slot::before{content:"";position:absolute;inset:0;background-image:
  repeating-linear-gradient(135deg, rgba(168,121,75,.05) 0 2px, transparent 2px 9px);opacity:.5;}
.photo-slot__tag{position:relative;font-family:var(--font-body);font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:var(--text-faint);display:flex;align-items:center;gap:9px;}
.photo-slot__tag .dot{width:5px;height:5px;border-radius:50%;background:var(--asg-brass);opacity:.6;}

.hero{position:relative;min-height:82vh;display:flex;align-items:flex-end;}
.hero .photo-slot{position:absolute;inset:0;}
.hero::after{content:"";position:absolute;inset:0;background:var(--scrim-full);}
.hero__in{position:relative;z-index:2;max-width:var(--container-wide);margin:0 auto;width:100%;padding:0 var(--gutter) 88px;}
.hero__eyebrow{color:var(--accent);}
.hero h1{font-size:clamp(2.8rem,1.6rem+4.4vw,4.6rem);line-height:1.02;letter-spacing:-.015em;max-width:16ch;margin:18px 0 0;}
.hero h1 em{font-style:italic;color:var(--asg-heritage-sand);}
.hero__lead{margin:22px 0 30px;font-size:19px;line-height:1.5;color:var(--text-body);max-width:52ch;}
.hero__cta{display:flex;gap:14px;flex-wrap:wrap;}
.hero__scroll{position:absolute;bottom:30px;right:var(--gutter);z-index:2;display:flex;align-items:center;gap:9px;color:var(--text-muted);font-family:var(--font-body);font-size:11px;letter-spacing:.18em;text-transform:uppercase;}

.section{max-width:var(--container-wide);margin:0 auto;padding:96px var(--gutter);}
.section--text{max-width:var(--container-max);}
.sec-head{display:flex;flex-direction:column;gap:14px;margin-bottom:46px;}
.sec-head .asg-eyebrow{color:var(--accent);}
.sec-head h2{font-size:clamp(2rem,1.4rem+2vw,3rem);margin:0;max-width:20ch;}
.sec-head p{margin:0;color:var(--text-body);font-size:16px;max-width:60ch;}

.values{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border-subtle);border:1px solid var(--border-subtle);border-radius:var(--radius-md);overflow:hidden;}
.value{background:var(--surface-base);padding:34px 28px;display:flex;flex-direction:column;gap:14px;}
.value__ic{color:var(--accent);}
.value h4{font-family:var(--font-serif);font-weight:500;font-size:21px;color:var(--text-primary);margin:0;}
.value p{font-size:14px;line-height:1.6;color:var(--text-muted);margin:0;}
@media (max-width:900px){.values{grid-template-columns:1fr 1fr;}}

.reserves{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
@media (max-width:900px){.reserves{grid-template-columns:1fr;}}

.hm-band{position:relative;background:var(--asg-charcoal);border-radius:var(--radius-lg);overflow:hidden;display:grid;grid-template-columns:1.1fr 1fr;}
.hm-band__slot{min-height:380px;}
.hm-band__body{padding:64px;display:flex;flex-direction:column;justify-content:center;gap:18px;}
.hm-band__body h2{font-size:34px;margin:0;max-width:18ch;}
.hm-band__body p{margin:0;color:var(--text-body);font-size:16px;line-height:1.65;max-width:46ch;}
.hm-band__specialist{display:flex;align-items:center;gap:14px;margin-top:8px;}
.hm-band__specialist .av{width:52px;height:52px;border-radius:50%;background:var(--asg-charcoal-500);}
.hm-band__specialist b{display:block;font-family:var(--font-body);font-size:14px;color:var(--text-primary);font-weight:600;}
.hm-band__specialist span{font-family:var(--font-body);font-size:13px;color:var(--text-muted);}
@media (max-width:900px){.hm-band{grid-template-columns:1fr;}.hm-band__body{padding:40px;}}

.quote{text-align:center;max-width:var(--container-text);margin:0 auto;padding:110px var(--gutter);}
.quote p{font-family:var(--font-serif);font-style:italic;font-size:clamp(1.7rem,1.2rem+1.6vw,2.4rem);line-height:1.34;color:var(--text-primary);margin:0;}
.quote cite{display:block;margin-top:26px;font-style:normal;font-family:var(--font-body);font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:var(--text-muted);}
.statsrow{display:flex;justify-content:center;gap:64px;flex-wrap:wrap;padding-bottom:30px;}
`;
(function () {
  const s = document.createElement('style');
  s.textContent = homeCss;
  document.head.appendChild(s);
})();
function PhotoSlot({
  label = "Photography",
  style,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ["photo-slot", className].filter(Boolean).join(" "),
    style: style
  }, /*#__PURE__*/React.createElement("span", {
    className: "photo-slot__tag"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), label));
}
const VALUES = [{
  icon: "compass",
  h: "We know the reserves",
  p: "Not a directory — we have slept in the beds, met the guides, and watched the light."
}, {
  icon: "binoculars",
  h: "Specific over superlative",
  p: "Sighting odds, seasons and lodges named plainly, so you choose with confidence."
}, {
  icon: "users",
  h: "Consultation-led",
  p: "One specialist, start to finish. A person, never a booking funnel."
}, {
  icon: "leaf",
  h: "Quietly responsible",
  p: "Reserves and lodges chosen for their conservation record, not their marketing."
}];
const RESERVES = [{
  eyebrow: "Sabi Sand · South Africa",
  title: "The Leopard Capital",
  desc: "The highest leopard-sighting density in Africa, traversing Kruger's unfenced western edge.",
  price: "R 18,200",
  badge: "Big Five"
}, {
  eyebrow: "Amakhala · Eastern Cape",
  title: "Malaria-Free Big Five",
  desc: "Five reserves, one ecosystem — ideal for families and first safaris.",
  price: "R 9,400",
  badge: "Malaria-Free"
}, {
  eyebrow: "Serengeti · Tanzania",
  title: "The Great Migration",
  desc: "Time your stay to the river crossings; we hold the camps that move with the herds.",
  price: "R 24,600",
  badge: "Migration"
}];
function HomeScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    className: "hero"
  }, /*#__PURE__*/React.createElement(PhotoSlot, {
    label: "Hero \u2014 golden hour, one clear subject, room to breathe"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero__in"
  }, /*#__PURE__*/React.createElement("span", {
    className: "asg-eyebrow hero__eyebrow"
  }, "Tailor-made \xB7 Five-star \xB7 Southern & East Africa"), /*#__PURE__*/React.createElement("h1", null, "Your Africa,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "Considered.")), /*#__PURE__*/React.createElement("p", {
    className: "hero__lead"
  }, "Safaris designed by specialists who have stayed at every lodge they recommend. We start with a conversation, not a checkout."), /*#__PURE__*/React.createElement("div", {
    className: "hero__cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: "arrow-right",
    onClick: () => go("enquire")
  }, "Plan My Safari"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => go("reserve")
  }, "Explore reserves"))), /*#__PURE__*/React.createElement("div", {
    className: "hero__scroll"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 16
  }), "Scroll")), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "asg-eyebrow"
  }, "Why African Safari Group"), /*#__PURE__*/React.createElement("h2", null, "The authority, not a booking platform.")), /*#__PURE__*/React.createElement("div", {
    className: "values"
  }, VALUES.map(v => /*#__PURE__*/React.createElement("div", {
    className: "value",
    key: v.h
  }, /*#__PURE__*/React.createElement("span", {
    className: "value__ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: v.icon,
    size: 26,
    strokeWidth: 1.5
  })), /*#__PURE__*/React.createElement("h4", null, v.h), /*#__PURE__*/React.createElement("p", null, v.p))))), /*#__PURE__*/React.createElement("section", {
    className: "section",
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "asg-eyebrow"
  }, "Featured reserves"), /*#__PURE__*/React.createElement("h2", null, "Where the sightings are."), /*#__PURE__*/React.createElement("p", null, "A short, curated list \u2014 the reserves we return to, season after season.")), /*#__PURE__*/React.createElement("div", {
    className: "reserves"
  }, RESERVES.map(r => /*#__PURE__*/React.createElement(Card, {
    key: r.title,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go("reserve");
    },
    imageSlot: "Reserve photography",
    badge: /*#__PURE__*/React.createElement(Badge, {
      variant: "solid"
    }, r.badge),
    eyebrow: r.eyebrow,
    title: r.title,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "asg-card__price"
    }, /*#__PURE__*/React.createElement("b", null, r.price), /*#__PURE__*/React.createElement("span", null, "from / pp night")), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--accent)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 20
    })))
  }, /*#__PURE__*/React.createElement("p", {
    className: "asg-card__desc"
  }, r.desc))))), /*#__PURE__*/React.createElement("section", {
    className: "section",
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hm-band"
  }, /*#__PURE__*/React.createElement(PhotoSlot, {
    className: "hm-band__slot",
    label: "Specialist portrait"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hm-band__body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "asg-eyebrow"
  }, "A person, not a funnel"), /*#__PURE__*/React.createElement("h2", null, "One specialist, from first call to final sundowner."), /*#__PURE__*/React.createElement("p", null, "Tell us who is travelling and when. Your specialist shortlists lodges, holds space, and stays with your trip the whole way through."), /*#__PURE__*/React.createElement("div", {
    className: "hm-band__specialist"
  }, /*#__PURE__*/React.createElement("div", {
    className: "av"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Thandi Mokoena"), /*#__PURE__*/React.createElement("span", null, "Senior Safari Specialist \xB7 14 years in-field"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => go("enquire")
  }, "Start the conversation"))))), /*#__PURE__*/React.createElement("section", {
    className: "quote"
  }, /*#__PURE__*/React.createElement(Divider, {
    brass: true,
    center: true
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 34
    }
  }, "\u201CSabi Sand offers the highest leopard-sighting density in Africa. Three nights gives you the best odds.\u201D"), /*#__PURE__*/React.createElement("cite", null, "From your specialist briefing")), /*#__PURE__*/React.createElement("section", {
    className: "statsrow"
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "40+",
    label: "reserves we know first-hand",
    center: true
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "2,000+",
    label: "journeys designed",
    center: true
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "1 hour",
    label: "typical reply time",
    center: true
  })));
}
Object.assign(window, {
  HomeScreen,
  PhotoSlot
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/flagship-website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/flagship-website/LodgeScreen.jsx
try { (() => {
/* African Safari Group — Flagship Website · Lodge detail (Londolozi)
   Option 4 lodge architecture: hero with breadcrumbs + price card, value-prop
   bar, direct-enquiry checklist, sub-nav (nav handoff + scrollspy), gallery,
   rooms, included experiences, best-time band, reviews, book banner,
   "More of the Reserve". */
const {
  Button,
  Badge,
  Dialog,
  Input,
  Icon,
  Breadcrumb
} = window.DesignSystem_e5ff94;
const _lgDS = window.DesignSystem_e5ff94;
const FactPill = _lgDS.FactPill || (({
  children
}) => /*#__PURE__*/React.createElement("span", null, children));
const PriceCard = _lgDS.PriceCard || (() => null);
const ValuePropBar = _lgDS.ValuePropBar || (() => null);
const EnquiryChecklist = _lgDS.EnquiryChecklist || (() => null);
const MonthGrid = _lgDS.MonthGrid || (() => null);
const lodgeCss = `
.lg-hero{position:relative;min-height:74vh;display:flex;align-items:flex-end;}
.lg-hero__img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center 45%;}
.lg-hero::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(14,12,10,.5) 0%,rgba(14,12,10,.24) 40%,rgba(14,12,10,.9) 100%);}
.lg-hero__crumbs{position:absolute;top:24px;left:0;right:0;z-index:3;}
.lg-hero__crumbs .in{max-width:var(--container-wide);margin:0 auto;padding:0 var(--gutter);}
.lg-hero__in{position:relative;z-index:2;max-width:var(--container-wide);margin:0 auto;width:100%;padding:120px var(--gutter) 54px;display:flex;justify-content:space-between;align-items:flex-end;gap:40px;flex-wrap:wrap;}
.lg-hero__in h1{font-size:clamp(2.4rem,1.6rem+2.8vw,3.5rem);margin:12px 0 0;color:#FFFFFF;}
.lg-hero__meta{display:flex;align-items:center;gap:14px;margin-top:16px;color:var(--asg-ivory-200);font-family:var(--font-body);font-size:13.5px;flex-wrap:wrap;}
.lg-stars{display:inline-flex;gap:2px;position:relative;top:1px;}
.lg-hero__pills{display:flex;gap:10px;margin-top:18px;flex-wrap:wrap;}
section[id],div[id]{scroll-margin-top:72px;}
.lg-section{max-width:var(--container-wide);margin:0 auto;padding:80px var(--gutter);}
.lg-head{max-width:660px;margin-bottom:36px;}
.lg-head h2{font-family:var(--font-serif);font-weight:500;font-size:2rem;margin:10px 0 0;color:var(--text-primary);}
.lg-head p{font-family:var(--font-body);font-weight:300;font-size:15px;line-height:1.75;color:var(--text-body);margin:14px 0 0;max-width:60ch;}
.direct-band{background:var(--surface-raised);border-bottom:1px solid var(--border-subtle);}
.direct-band .in{max-width:var(--container-wide);margin:0 auto;padding:52px var(--gutter);}
.direct-band h2{font-family:var(--font-serif);font-weight:500;font-size:1.6rem;color:var(--text-primary);margin:0 0 8px;}
.direct-band .sub{font-family:var(--font-body);font-weight:300;font-size:14px;color:var(--text-body);margin:0 0 24px;max-width:64ch;line-height:1.7;}
.ov-grid{display:grid;grid-template-columns:1.6fr 1fr;gap:56px;align-items:start;}
@media (max-width:900px){.ov-grid{grid-template-columns:1fr;gap:28px;}}
.ov-grid .prose p{font-size:16.5px;line-height:1.75;color:var(--text-body);max-width:64ch;}
.qf{background:var(--surface-raised);border:1px solid var(--border-default);border-radius:var(--radius-md);padding:26px 28px;position:sticky;top:90px;}
.qf h3{font-family:var(--font-serif);font-weight:500;font-size:18px;color:var(--text-primary);margin:0 0 10px;}
.qf-row{display:flex;justify-content:space-between;gap:18px;padding:12px 0;border-bottom:1px solid var(--border-subtle);font-family:var(--font-body);font-size:13.5px;}
.qf-row:last-child{border-bottom:none;}
.qf-row .k{color:var(--text-muted);}
.qf-row .v{color:var(--text-primary);font-weight:500;text-align:right;}
.lg-gallery{display:grid;grid-template-columns:2fr 1fr 1fr;grid-template-rows:220px 220px;gap:12px;border-radius:var(--radius-md);overflow:hidden;}
.lg-gallery img{width:100%;height:100%;object-fit:cover;display:block;}
.lg-gallery .g0{grid-row:span 2;}
@media (max-width:900px){.lg-gallery{grid-template-columns:1fr 1fr;grid-template-rows:170px 170px 170px;}.lg-gallery .g0{grid-row:span 1;grid-column:span 2;}}
.rooms-grid{display:grid;grid-template-columns:1fr 1fr;gap:26px;}
@media (max-width:900px){.rooms-grid{grid-template-columns:1fr;}}
.room{background:var(--surface-raised);border:1px solid var(--border-default);border-radius:var(--radius-md);overflow:hidden;display:flex;flex-direction:column;}
.room .img{height:240px;overflow:hidden;}
.room .img img{width:100%;height:100%;object-fit:cover;display:block;}
.room .body{padding:26px 28px;flex:1;display:flex;flex-direction:column;}
.room h3{font-family:var(--font-serif);font-weight:500;font-size:20px;color:var(--text-primary);margin:0;}
.room .spec{font-family:var(--font-body);font-size:11.5px;letter-spacing:.1em;text-transform:uppercase;color:var(--accent);font-weight:500;margin:6px 0 14px;}
.feat{display:grid;grid-template-columns:1fr 1fr;gap:8px 22px;margin-bottom:20px;flex:1;}
.feat span{font-family:var(--font-body);font-size:12.5px;color:var(--text-body);position:relative;padding-left:16px;}
.feat span::before{content:'\\2713';position:absolute;left:0;color:var(--accent);font-weight:700;}
.room .row{display:flex;justify-content:space-between;align-items:center;border-top:1px solid var(--border-subtle);padding-top:18px;gap:12px;}
.room .pr{font-family:var(--font-serif);font-size:16px;color:var(--text-primary);}
.room .pr span{font-family:var(--font-body);font-size:11px;color:var(--text-muted);}
.list-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px 36px;max-width:920px;}
@media (max-width:900px){.list-grid{grid-template-columns:1fr 1fr;}}
@media (max-width:640px){.list-grid{grid-template-columns:1fr;}}
.list-grid span{font-family:var(--font-body);font-size:13.5px;color:var(--text-body);position:relative;padding-left:20px;}
.list-grid span::before{content:'\\2713';position:absolute;left:0;color:var(--accent);font-weight:700;}
.season-band{background:linear-gradient(135deg,#1F1B17,var(--asg-ink-800));border-top:1px solid var(--border-subtle);border-bottom:1px solid var(--border-subtle);}
.scards{display:grid;grid-template-columns:1fr 1fr;gap:22px;margin-bottom:40px;}
@media (max-width:900px){.scards{grid-template-columns:1fr;}}
.scard{background:var(--asg-charcoal);border:1px solid rgba(255,255,255,.11);border-radius:var(--radius-md);padding:26px 28px;}
.scard h3{font-family:var(--font-serif);font-weight:500;color:var(--accent);font-size:19px;margin:0 0 4px;}
.scard .when{font-family:var(--font-body);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--accent-quiet);font-weight:500;margin:0 0 12px;}
.scard p{font-family:var(--font-body);font-size:13.5px;color:var(--asg-bone);line-height:1.7;margin:0;}
.reviews-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:26px;}
@media (max-width:900px){.reviews-grid{grid-template-columns:1fr;}}
.rvcard{background:var(--surface-raised);border:1px solid var(--border-default);border-radius:var(--radius-md);padding:30px;}
.rvcard .stars{color:var(--accent);letter-spacing:2px;font-size:13px;margin-bottom:16px;}
.rvcard p{font-family:var(--font-serif);font-style:italic;font-size:14.5px;color:var(--text-primary);line-height:1.7;margin:0 0 20px;}
.rvcard .who{font-family:var(--font-body);font-size:12px;font-weight:600;color:var(--text-body);}
.rvcard .who span{color:var(--accent);font-weight:400;}
.banner{background:linear-gradient(135deg,#1F1B17,var(--asg-ink-800));text-align:center;padding:88px var(--gutter);border-top:1px solid var(--border-subtle);}
.banner h2{font-family:var(--font-serif);font-weight:500;color:#FFFFFF;font-size:2rem;margin:0 0 12px;}
.banner .sub{font-family:var(--font-body);color:var(--asg-bone);font-size:15px;margin:0 0 34px;}
.banner .sub b{color:var(--accent);font-family:var(--font-serif);font-size:19px;font-weight:500;}
.banner .btns{display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin-bottom:22px;}
.banner .assure{font-family:var(--font-body);color:var(--text-faint);font-size:11.5px;letter-spacing:.05em;}
.banner .assure i{font-style:normal;margin:0 12px;}
.xs-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
@media (max-width:900px){.xs-grid{grid-template-columns:1fr;}}
.xcard{background:var(--surface-raised);border:1px solid var(--border-default);border-radius:var(--radius-md);overflow:hidden;cursor:pointer;transition:box-shadow .25s var(--ease-standard),transform .25s var(--ease-standard),border-color .25s;}
.xcard:hover{box-shadow:var(--shadow-md);transform:translateY(-3px);border-color:var(--asg-brass-a40);}
.xcard .img{height:170px;overflow:hidden;}
.xcard .img img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .5s var(--ease-standard);}
.xcard:hover .img img{transform:scale(1.05);}
.xcard .body{padding:20px 22px;}
.xcard h4{font-family:var(--font-serif);font-weight:500;font-size:16.5px;color:var(--text-primary);margin:0 0 6px;}
.xcard p{font-family:var(--font-body);font-size:12.5px;color:var(--text-body);line-height:1.6;margin:0 0 12px;}
.xcard .pr{font-family:var(--font-body);font-size:12.5px;color:var(--accent);font-weight:600;}
`;
(function () {
  const s = document.createElement('style');
  s.textContent = lodgeCss;
  document.head.appendChild(s);
})();
function LgStar() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "var(--asg-brass)",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2l2.94 6.58 7.06.64-5.34 4.75 1.58 6.94L12 17.27 5.76 20.9l1.58-6.94L2 9.22l7.06-.64z"
  }));
}
function LodgeScreen({
  go
}) {
  const [open, setOpen] = React.useState(false);
  const subnav = [{
    id: "overview",
    label: "Overview"
  }, {
    id: "gallery",
    label: "Gallery"
  }, {
    id: "rooms",
    label: "Rooms"
  }, {
    id: "experiences",
    label: "Experiences"
  }, {
    id: "lodge-best-time",
    label: "Best Time"
  }, {
    id: "reviews",
    label: "Reviews"
  }];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    className: "lg-hero"
  }, /*#__PURE__*/React.createElement("img", {
    className: "lg-hero__img",
    src: "../../assets/photos/lounge-deck.webp",
    alt: "Londolozi Founders Camp \u2014 deck over the Sand River"
  }), /*#__PURE__*/React.createElement("div", {
    className: "lg-hero__crumbs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "in"
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    hero: true,
    items: [{
      label: "Destinations",
      href: "#destinations"
    }, {
      label: "Sabi Sand",
      href: "#sabi-sand"
    }, {
      label: "Londolozi Founders Camp"
    }]
  }))), /*#__PURE__*/React.createElement("div", {
    className: "lg-hero__in"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "asg-eyebrow",
    style: {
      color: 'var(--accent-quiet)'
    }
  }, "Sabi Sand \xB7 Founders Camp \xB7 Big Five"), /*#__PURE__*/React.createElement("h1", null, "Londolozi Founders Camp"), /*#__PURE__*/React.createElement("div", {
    className: "lg-hero__meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lg-stars"
  }, /*#__PURE__*/React.createElement(LgStar, null), /*#__PURE__*/React.createElement(LgStar, null), /*#__PURE__*/React.createElement(LgStar, null), /*#__PURE__*/React.createElement(LgStar, null), /*#__PURE__*/React.createElement(LgStar, null)), /*#__PURE__*/React.createElement("span", null, "4.9 \xB7 300+ reviews"), /*#__PURE__*/React.createElement("span", null, "Relais & Ch\xE2teaux")), /*#__PURE__*/React.createElement("div", {
    className: "lg-hero__pills"
  }, /*#__PURE__*/React.createElement(FactPill, null, "10 riverside suites"), /*#__PURE__*/React.createElement(FactPill, null, "Private plunge pools"), /*#__PURE__*/React.createElement(FactPill, null, "2 game drives daily"))), /*#__PURE__*/React.createElement(PriceCard, {
    from: "R 18,200",
    unit: "pp / night",
    primaryLabel: "Enquire About Dates",
    onPrimary: () => setOpen(true),
    secondaryLabel: "Plan My Safari",
    onSecondary: () => go("enquire")
  }))), /*#__PURE__*/React.createElement(ValuePropBar, {
    items: [{
      k: "Current Special",
      t: "Stay 4, Pay 3",
      d: "A fourth night on us in green season — limited dates, subject to availability."
    }, {
      k: "Book Direct",
      t: "No markup at quote",
      d: "You see the lodge's contracted rate — the price we pay is the price you see."
    }, {
      k: "Plan With a Consultant",
      t: "Reply within 24h",
      d: "Send your dates and a specialist tailors the stay and confirms space."
    }, {
      k: "Expert Support",
      t: "Specialists on call",
      d: "Talk to consultants who have stayed at Londolozi — not a call centre."
    }]
  }), /*#__PURE__*/React.createElement("div", {
    className: "direct-band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "in"
  }, /*#__PURE__*/React.createElement("h2", null, "Why enquire direct with ASG"), /*#__PURE__*/React.createElement("p", {
    className: "sub"
  }, "Enquiring connects you to a specialist who knows Founders Camp first-hand \u2014 what you see is the lodge's contracted rate, with a reply within 24 hours."), /*#__PURE__*/React.createElement(EnquiryChecklist, {
    items: ["Lodge's contracted rate — no markup", "Personal advice from safari specialists", "A tailored itinerary for your dates", "No payment to enquire — reply within 24 hours"]
  }))), /*#__PURE__*/React.createElement(SubNav, {
    items: subnav,
    ctaLabel: "Enquire",
    onCta: () => setOpen(true)
  }), /*#__PURE__*/React.createElement("section", {
    className: "lg-section",
    id: "overview"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ov-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "prose"
  }, /*#__PURE__*/React.createElement("span", {
    className: "asg-eyebrow"
  }, "Overview"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 500,
      fontSize: '2rem',
      color: 'var(--text-primary)',
      margin: '10px 0 14px'
    }
  }, "Ten suites along the Sand River."), /*#__PURE__*/React.createElement("p", null, "Londolozi all but invented the relaxed-leopard sighting. Founders Camp is its most private address \u2014 ten suites along the Sand River, each with a plunge pool and a deck that looks straight into the riverine bush."), /*#__PURE__*/React.createElement("p", null, "Mornings begin before light with your ranger and tracker; afternoons end with a sundowner where the herds come to drink. Between drives, the camp is yours: unhurried, quiet, and entirely without schedule.")), /*#__PURE__*/React.createElement("aside", {
    className: "qf"
  }, /*#__PURE__*/React.createElement("h3", null, "Quick facts"), /*#__PURE__*/React.createElement("div", {
    className: "qf-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Children"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, "All ages \xB7 family vehicles")), /*#__PURE__*/React.createElement("div", {
    className: "qf-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Getting there"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, "90 min \xB7 Johannesburg")), /*#__PURE__*/React.createElement("div", {
    className: "qf-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Setting"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, "Private Sand River frontage")), /*#__PURE__*/React.createElement("div", {
    className: "qf-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Wildlife"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, "Big Five \xB7 Leopard")), /*#__PURE__*/React.createElement("div", {
    className: "qf-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Board"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, "All-inclusive, house cellar"))))), /*#__PURE__*/React.createElement("section", {
    className: "lg-section",
    id: "gallery",
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "asg-eyebrow"
  }, "Gallery"), /*#__PURE__*/React.createElement("h2", null, "A look around the camp.")), /*#__PURE__*/React.createElement("div", {
    className: "lg-gallery"
  }, /*#__PURE__*/React.createElement("div", {
    className: "g0"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/suite.webp",
    alt: "Founders suite and deck"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/bed.webp",
    alt: "Suite bedroom"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/lounge.webp",
    alt: "Camp lounge"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/boma.webp",
    alt: "Boma dinner under the stars"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/jamala-1.jpg",
    alt: "Evening view from the deck"
  })))), /*#__PURE__*/React.createElement("section", {
    className: "lg-section",
    id: "rooms",
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "asg-eyebrow"
  }, "Rooms & suites"), /*#__PURE__*/React.createElement("h2", null, "Where you will stay.")), /*#__PURE__*/React.createElement("div", {
    className: "rooms-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "room"
  }, /*#__PURE__*/React.createElement("div", {
    className: "img"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/suite-lounge.webp",
    alt: "Founders Suite"
  })), /*#__PURE__*/React.createElement("div", {
    className: "body"
  }, /*#__PURE__*/React.createElement("h3", null, "Founders Suite"), /*#__PURE__*/React.createElement("p", {
    className: "spec"
  }, "Sleeps 2 \xB7 River-facing"), /*#__PURE__*/React.createElement("div", {
    className: "feat"
  }, /*#__PURE__*/React.createElement("span", null, "Private plunge pool"), /*#__PURE__*/React.createElement("span", null, "Deck into the bush"), /*#__PURE__*/React.createElement("span", null, "King or twin beds"), /*#__PURE__*/React.createElement("span", null, "Indoor\u2013outdoor shower")), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pr"
  }, "From R 18,200 ", /*#__PURE__*/React.createElement("span", null, "pp / night")), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => setOpen(true)
  }, "Enquire")))), /*#__PURE__*/React.createElement("div", {
    className: "room"
  }, /*#__PURE__*/React.createElement("div", {
    className: "img"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/jamala-2.jpg",
    alt: "Family Suite"
  })), /*#__PURE__*/React.createElement("div", {
    className: "body"
  }, /*#__PURE__*/React.createElement("h3", null, "Family Suite"), /*#__PURE__*/React.createElement("p", {
    className: "spec"
  }, "Sleeps 4 \xB7 Interleading"), /*#__PURE__*/React.createElement("div", {
    className: "feat"
  }, /*#__PURE__*/React.createElement("span", null, "Two en-suite rooms"), /*#__PURE__*/React.createElement("span", null, "Shared river deck"), /*#__PURE__*/React.createElement("span", null, "Private family vehicle"), /*#__PURE__*/React.createElement("span", null, "Dedicated ranger on request")), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pr"
  }, "From R 24,600 ", /*#__PURE__*/React.createElement("span", null, "pp / night")), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => setOpen(true)
  }, "Enquire")))))), /*#__PURE__*/React.createElement("section", {
    className: "lg-section",
    id: "experiences",
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "asg-eyebrow"
  }, "Experiences \xB7 Included"), /*#__PURE__*/React.createElement("h2", null, "Things to do."), /*#__PURE__*/React.createElement("p", null, "Expert-guided game drives are the centrepiece; everything below is included in your stay.")), /*#__PURE__*/React.createElement("div", {
    className: "list-grid"
  }, /*#__PURE__*/React.createElement("span", null, "Big Five game drives"), /*#__PURE__*/React.createElement("span", null, "Guided bush walks"), /*#__PURE__*/React.createElement("span", null, "Sundowner stops"), /*#__PURE__*/React.createElement("span", null, "Birdwatching"), /*#__PURE__*/React.createElement("span", null, "Boma dinners"), /*#__PURE__*/React.createElement("span", null, "Stargazing with a guide"), /*#__PURE__*/React.createElement("span", null, "All meals & house cellar"), /*#__PURE__*/React.createElement("span", null, "Laundry & conservation levies"), /*#__PURE__*/React.createElement("span", null, "Transfers within the reserve"))), /*#__PURE__*/React.createElement("section", {
    className: "season-band",
    id: "lodge-best-time"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg-section",
    style: {
      paddingTop: 72,
      paddingBottom: 72
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "asg-eyebrow"
  }, "Best time to visit"), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: '#FFFFFF'
    }
  }, "When to go."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--asg-bone)'
    }
  }, "Game viewing rewards year-round; the dry winter months are peak for sightings.")), /*#__PURE__*/React.createElement("div", {
    className: "scards"
  }, /*#__PURE__*/React.createElement("div", {
    className: "scard"
  }, /*#__PURE__*/React.createElement("h3", null, "Dry Winter"), /*#__PURE__*/React.createElement("p", {
    className: "when"
  }, "May \u2013 September"), /*#__PURE__*/React.createElement("p", null, "Animals gather at the Sand River, the bush thins out and viewing is at its best. Clear days of 8\u201326\xA0\xB0C (46\u201379\xA0\xB0F), minimal rain, cold early mornings.")), /*#__PURE__*/React.createElement("div", {
    className: "scard"
  }, /*#__PURE__*/React.createElement("h3", null, "Green Summer"), /*#__PURE__*/React.createElement("p", {
    className: "when"
  }, "October \u2013 March"), /*#__PURE__*/React.createElement("p", null, "Lush landscapes, newborn animals and migratory birds. Warm days of 20\u201332\xA0\xB0C (68\u201390\xA0\xB0F) with dramatic afternoon skies."))), /*#__PURE__*/React.createElement(MonthGrid, null))), /*#__PURE__*/React.createElement("section", {
    className: "lg-section",
    id: "reviews"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "asg-eyebrow"
  }, "Reviews"), /*#__PURE__*/React.createElement("h2", null, "4.9 / 5 \xB7 300+ guest reviews.")), /*#__PURE__*/React.createElement("div", {
    className: "reviews-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rvcard"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stars"
  }, "\u2605\u2605\u2605\u2605\u2605"), /*#__PURE__*/React.createElement("p", null, "\u201CRoxanne was our reservations specialist and she has been nothing short of fantastic.\u201D"), /*#__PURE__*/React.createElement("div", {
    className: "who"
  }, "Ally Brown ", /*#__PURE__*/React.createElement("span", null, "\xB7 TripAdvisor"))), /*#__PURE__*/React.createElement("div", {
    className: "rvcard"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stars"
  }, "\u2605\u2605\u2605\u2605\u2605"), /*#__PURE__*/React.createElement("p", null, "\u201CIf I could give David 10 stars I would. So easy to book, great location and accommodation.\u201D"), /*#__PURE__*/React.createElement("div", {
    className: "who"
  }, "Chessie McHugh ", /*#__PURE__*/React.createElement("span", null, "\xB7 Google"))), /*#__PURE__*/React.createElement("div", {
    className: "rvcard"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stars"
  }, "\u2605\u2605\u2605\u2605\u2605"), /*#__PURE__*/React.createElement("p", null, "\u201COutstanding help from James throughout. Seamless from quote to arrival.\u201D"), /*#__PURE__*/React.createElement("div", {
    className: "who"
  }, "ASG guest ", /*#__PURE__*/React.createElement("span", null, "\xB7 Feedback Company"))))), /*#__PURE__*/React.createElement("section", {
    className: "banner"
  }, /*#__PURE__*/React.createElement("h2", null, "Ready to plan Londolozi?"), /*#__PURE__*/React.createElement("p", {
    className: "sub"
  }, "From ", /*#__PURE__*/React.createElement("b", null, "R 18,200"), " pp / night \xB7 \u2605 4.9 \xB7 300+ reviews"), /*#__PURE__*/React.createElement("div", {
    className: "btns"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => setOpen(true)
  }, "Enquire About Dates"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => go("reserve")
  }, "Explore the Reserve")), /*#__PURE__*/React.createElement("p", {
    className: "assure"
  }, "No booking fee", /*#__PURE__*/React.createElement("i", null, "\xB7"), "No payment to enquire", /*#__PURE__*/React.createElement("i", null, "\xB7"), "Expert support")), /*#__PURE__*/React.createElement("section", {
    className: "lg-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "asg-eyebrow"
  }, "More of the Reserve"), /*#__PURE__*/React.createElement("h2", null, "Other lodges in Sabi Sand.")), /*#__PURE__*/React.createElement("div", {
    className: "xs-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "xcard",
    onClick: () => go("reserve")
  }, /*#__PURE__*/React.createElement("div", {
    className: "img"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/lounge.webp",
    alt: "Lion Sands"
  })), /*#__PURE__*/React.createElement("div", {
    className: "body"
  }, /*#__PURE__*/React.createElement("h4", null, "Lion Sands"), /*#__PURE__*/React.createElement("p", null, "Treehouse sleep-outs and a wide river frontage \u2014 the family favourite."), /*#__PURE__*/React.createElement("div", {
    className: "pr"
  }, "From R 15,600 pp / night \u2192"))), /*#__PURE__*/React.createElement("div", {
    className: "xcard",
    onClick: () => go("reserve")
  }, /*#__PURE__*/React.createElement("div", {
    className: "img"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/boma.webp",
    alt: "Cheetah Plains"
  })), /*#__PURE__*/React.createElement("div", {
    className: "body"
  }, /*#__PURE__*/React.createElement("h4", null, "Cheetah Plains"), /*#__PURE__*/React.createElement("p", null, "Solar-run, contemporary, fully private villas with your own vehicle."), /*#__PURE__*/React.createElement("div", {
    className: "pr"
  }, "From R 22,900 pp / night \u2192"))), /*#__PURE__*/React.createElement("div", {
    className: "xcard",
    onClick: () => go("reserve")
  }, /*#__PURE__*/React.createElement("div", {
    className: "img"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/kopano-top.webp",
    alt: "Sabi Sabi Earth Lodge"
  })), /*#__PURE__*/React.createElement("div", {
    className: "body"
  }, /*#__PURE__*/React.createElement("h4", null, "Sabi Sabi Earth Lodge"), /*#__PURE__*/React.createElement("p", null, "Sculpted into the earth \u2014 the reserve's quietest architectural statement."), /*#__PURE__*/React.createElement("div", {
    className: "pr"
  }, "From R 21,400 pp / night \u2192"))))), /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    onClose: () => setOpen(false),
    title: "Enquire about Londolozi",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setOpen(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      onClick: () => setOpen(false)
    }, "Send enquiry"))
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 0
    }
  }, "A specialist who has stayed at Londolozi will reply within 24 hours \u2014 no call centre, no quote cycle, no payment to enquire."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full name",
    placeholder: "Sarah Kruger"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "you@example.com"
  }))));
}
Object.assign(window, {
  LodgeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/flagship-website/LodgeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/flagship-website/ReserveScreen.jsx
try { (() => {
/* African Safari Group — Flagship Website · Reserve detail (Sabi Sand)
   Option 4 page architecture: breadcrumbs over the hero, frosted fact pills,
   sub-nav with nav handoff + scrollspy, wildlife sightings honesty, dark
   best-time band with the month season grid, getting-there steps. */
const {
  Button,
  Badge,
  Card,
  Stat,
  Breadcrumb,
  Tag,
  Icon
} = window.DesignSystem_e5ff94;
const _rsvDS = window.DesignSystem_e5ff94;
const FactPill = _rsvDS.FactPill || (({
  children
}) => /*#__PURE__*/React.createElement("span", null, children));
const SightingsBadge = _rsvDS.SightingsBadge || (() => null);
const MonthGrid = _rsvDS.MonthGrid || (() => null);
const reserveCss = `
.rsv-hero{position:relative;min-height:64vh;display:flex;align-items:flex-end;}
.rsv-hero__img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center 55%;}
.rsv-hero::after{content:"";position:absolute;inset:0;background:var(--scrim-bottom);}
.rsv-hero__crumbs{position:absolute;top:24px;left:0;right:0;z-index:3;}
.rsv-hero__crumbs .in{max-width:var(--container-wide);margin:0 auto;padding:0 var(--gutter);}
.rsv-hero__in{position:relative;z-index:2;max-width:var(--container-wide);margin:0 auto;width:100%;padding:110px var(--gutter) 52px;}
.rsv-hero__in h1{font-size:clamp(2.6rem,1.6rem+3.4vw,4rem);margin:14px 0 0;color:#FFFFFF;}
.rsv-hero__lede{font-family:var(--font-body);font-weight:300;font-size:16px;line-height:1.7;color:var(--asg-ivory-200);max-width:56ch;margin:18px 0 0;}
.rsv-hero__meta{display:flex;gap:12px;margin-top:26px;flex-wrap:wrap;}
.rsv-hero__ctas{display:flex;gap:14px;margin-top:32px;flex-wrap:wrap;}
.section{max-width:var(--container-wide);margin:0 auto;padding:80px var(--gutter);}
section[id]{scroll-margin-top:72px;}
.rsv-grid{display:grid;grid-template-columns:1.5fr 1fr;gap:56px;align-items:start;}
@media (max-width:900px){.rsv-grid{grid-template-columns:1fr;gap:32px;}}
.rsv-prose p{font-size:16.5px;line-height:1.75;color:var(--text-body);max-width:64ch;}
.rsv-prose h2{font-family:var(--font-serif);font-weight:500;font-size:clamp(1.7rem,1.3rem+1.2vw,2.1rem);color:var(--text-primary);margin:10px 0 14px;}
.rsv-photo{border-radius:var(--radius-md);overflow:hidden;box-shadow:var(--shadow-md);}
.rsv-photo img{width:100%;height:460px;object-fit:cover;display:block;}
.statsrow2{display:flex;gap:54px;flex-wrap:wrap;margin:8px 0 0;}
.sec-head{max-width:660px;margin-bottom:36px;}
.sec-head h2{font-family:var(--font-serif);font-weight:500;font-size:2rem;margin:10px 0 0;color:var(--text-primary);}
.sec-head p{font-family:var(--font-body);font-weight:300;font-size:15px;line-height:1.75;color:var(--text-body);margin:14px 0 0;max-width:60ch;}
.wild-grid{display:grid;grid-template-columns:1fr 1fr;gap:0 56px;max-width:820px;}
@media (max-width:700px){.wild-grid{grid-template-columns:1fr;}}
.wild-row{display:flex;justify-content:space-between;align-items:center;gap:16px;padding:13px 0;border-bottom:1px solid var(--border-subtle);}
.wild-row span{font-family:var(--font-body);font-size:14px;color:var(--text-body);}
.lodges{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
@media (max-width:900px){.lodges{grid-template-columns:1fr;}}
.filters{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:28px;}
.season-band{background:linear-gradient(135deg,#1F1B17,var(--asg-ink-800));border-top:1px solid var(--border-subtle);border-bottom:1px solid var(--border-subtle);}
.scards{display:grid;grid-template-columns:1fr 1fr;gap:22px;margin-bottom:40px;}
@media (max-width:900px){.scards{grid-template-columns:1fr;}}
.scard{background:var(--asg-charcoal);border:1px solid rgba(255,255,255,.11);border-radius:var(--radius-md);padding:26px 28px;}
.scard h3{font-family:var(--font-serif);font-weight:500;color:var(--accent);font-size:19px;margin:0 0 4px;}
.scard .when{font-family:var(--font-body);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--accent-quiet);font-weight:500;margin:0 0 12px;}
.scard p{font-family:var(--font-body);font-size:13.5px;color:var(--asg-bone);line-height:1.7;margin:0;}
.steps{display:grid;gap:26px;margin-top:8px;max-width:560px;}
.step{display:flex;gap:20px;align-items:flex-start;}
.step .num{flex:none;width:40px;height:40px;border-radius:50%;background:var(--asg-brass);color:#FFFFFF;display:flex;align-items:center;justify-content:center;font-family:var(--font-serif);font-size:17px;}
.step h3{font-family:var(--font-body);font-weight:600;font-size:16px;color:var(--text-primary);margin:0 0 6px;}
.step p{font-family:var(--font-body);font-size:13.5px;color:var(--text-body);line-height:1.65;margin:0;}
`;
(function () {
  const s = document.createElement('style');
  s.textContent = reserveCss;
  document.head.appendChild(s);
})();
const LODGES = [{
  eyebrow: "Founders Camp",
  title: "Londolozi",
  desc: "Founders-suite privacy on the Sand River.",
  price: "R 18,200",
  tag: "Leopards",
  img: "../../assets/photos/suite.webp"
}, {
  eyebrow: "Family Camp",
  title: "Lion Sands",
  desc: "Treehouse sleep-outs and a wide river frontage.",
  price: "R 15,600",
  tag: "Families",
  img: "../../assets/photos/lounge.webp"
}, {
  eyebrow: "Tented",
  title: "Cheetah Plains",
  desc: "Solar-run, contemporary, fully private villas.",
  price: "R 22,900",
  tag: "Exclusive-use",
  img: "../../assets/photos/boma.webp"
}];
const SIGHTINGS = [{
  sp: "Leopard",
  level: "most"
}, {
  sp: "Elephant",
  level: "very"
}, {
  sp: "Lion",
  level: "very"
}, {
  sp: "Buffalo",
  level: "often"
}, {
  sp: "Rhino",
  level: "often"
}, {
  sp: "Wild dog",
  level: "rare"
}];
function ReserveScreen({
  go
}) {
  const [filter, setFilter] = React.useState("All lodges");
  const filters = ["All lodges", "Leopards", "Families", "Exclusive-use"];
  const subnav = [{
    id: "overview",
    label: "Overview"
  }, {
    id: "wildlife",
    label: "Wildlife"
  }, {
    id: "lodges",
    label: "Lodges"
  }, {
    id: "best-time",
    label: "Best Time"
  }, {
    id: "getting-there",
    label: "Getting There"
  }];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    className: "rsv-hero"
  }, /*#__PURE__*/React.createElement("img", {
    className: "rsv-hero__img",
    src: "../../assets/photos/vista.jpg",
    alt: "Sabi Sand \u2014 wide environmental view at golden hour"
  }), /*#__PURE__*/React.createElement("div", {
    className: "rsv-hero__crumbs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "in"
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    hero: true,
    items: [{
      label: "Destinations",
      href: "#destinations"
    }, {
      label: "South Africa",
      href: "#south-africa"
    }, {
      label: "Sabi Sand"
    }]
  }))), /*#__PURE__*/React.createElement("div", {
    className: "rsv-hero__in"
  }, /*#__PURE__*/React.createElement("span", {
    className: "asg-eyebrow",
    style: {
      color: 'var(--accent-quiet)'
    }
  }, "Mpumalanga, South Africa \xB7 Greater Kruger"), /*#__PURE__*/React.createElement("h1", null, "Sabi Sand Game Reserve"), /*#__PURE__*/React.createElement("p", {
    className: "rsv-hero__lede"
  }, "Unfenced with Kruger, privately traversed \u2014 a handful of vehicles to a sighting, and the most relaxed leopards on the continent."), /*#__PURE__*/React.createElement("div", {
    className: "rsv-hero__meta"
  }, /*#__PURE__*/React.createElement(FactPill, null, "Big Five"), /*#__PURE__*/React.createElement(FactPill, null, "65,000 hectares"), /*#__PURE__*/React.createElement(FactPill, null, "Unfenced with Kruger"), /*#__PURE__*/React.createElement(FactPill, null, "Open all year")), /*#__PURE__*/React.createElement("div", {
    className: "rsv-hero__ctas"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => go("enquire")
  }, "Plan My Safari"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => {
      const s = document.getElementById('lodges');
      if (s) window.scrollTo({
        top: s.getBoundingClientRect().top + window.scrollY - 70,
        behavior: 'smooth'
      });
    }
  }, "Explore the Lodges")))), /*#__PURE__*/React.createElement(SubNav, {
    items: subnav,
    onCta: () => go("enquire")
  }), /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "overview"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rsv-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rsv-prose"
  }, /*#__PURE__*/React.createElement("span", {
    className: "asg-eyebrow"
  }, "The reserve"), /*#__PURE__*/React.createElement("h2", null, "Where leopards are relaxed around vehicles."), /*#__PURE__*/React.createElement("p", null, "Sabi Sand shares an unfenced boundary with Kruger, so game moves freely while the traversing rights stay private \u2014 a handful of vehicles to a sighting, not a queue. Decades of respectful viewing have made its leopards the most relaxed on the continent."), /*#__PURE__*/React.createElement("p", null, "We hold space across the reserve's founding lodges. Three nights is our standard recommendation: enough for the unhurried mornings and the one sighting you will talk about for years."), /*#__PURE__*/React.createElement("div", {
    className: "statsrow2"
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "98%",
    label: "trips with a leopard sighting"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "6\u20137",
    label: "lodges we place guests in"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "3 nights",
    label: "recommended stay",
    brass: false
  }))), /*#__PURE__*/React.createElement("div", {
    className: "rsv-photo"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/kopano-top.webp",
    alt: "Lodge deck over the bushveld"
  })))), /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "wildlife",
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "asg-eyebrow"
  }, "Wildlife"), /*#__PURE__*/React.createElement("h2", null, "What you are likely to see."), /*#__PURE__*/React.createElement("p", null, "Stated honestly \u2014 sighting odds by species, from decades of drive records. Never promised.")), /*#__PURE__*/React.createElement("div", {
    className: "wild-grid"
  }, SIGHTINGS.map(w => /*#__PURE__*/React.createElement("div", {
    key: w.sp,
    className: "wild-row"
  }, /*#__PURE__*/React.createElement("span", null, w.sp), /*#__PURE__*/React.createElement(SightingsBadge, {
    level: w.level
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "lodges",
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head",
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "asg-eyebrow"
  }, "The lodges"), /*#__PURE__*/React.createElement("h2", null, "Where you will stay.")), /*#__PURE__*/React.createElement("div", {
    className: "filters"
  }, filters.map(f => /*#__PURE__*/React.createElement(Tag, {
    key: f,
    selected: filter === f,
    onClick: () => setFilter(f)
  }, f))), /*#__PURE__*/React.createElement("div", {
    className: "lodges"
  }, LODGES.filter(l => filter === "All lodges" || l.tag === filter).map(l => /*#__PURE__*/React.createElement(Card, {
    key: l.title,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go("lodge");
    },
    image: l.img,
    imageAlt: l.title,
    badge: /*#__PURE__*/React.createElement(Badge, {
      variant: "neutral"
    }, l.tag),
    eyebrow: l.eyebrow,
    title: l.title,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "asg-card__price"
    }, /*#__PURE__*/React.createElement("b", null, l.price), /*#__PURE__*/React.createElement("span", null, "pp / night")), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary"
    }, "View lodge"))
  }, /*#__PURE__*/React.createElement("p", {
    className: "asg-card__desc"
  }, l.desc))))), /*#__PURE__*/React.createElement("section", {
    className: "season-band",
    id: "best-time"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section",
    style: {
      paddingTop: 72,
      paddingBottom: 72
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "asg-eyebrow"
  }, "Best time to visit"), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: '#FFFFFF'
    }
  }, "When to go."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--asg-bone)'
    }
  }, "Game viewing rewards year-round. Dry winter is peak for sightings; green summer brings lush scenery and newborn game.")), /*#__PURE__*/React.createElement("div", {
    className: "scards"
  }, /*#__PURE__*/React.createElement("div", {
    className: "scard"
  }, /*#__PURE__*/React.createElement("h3", null, "Dry Winter"), /*#__PURE__*/React.createElement("p", {
    className: "when"
  }, "May \u2013 September"), /*#__PURE__*/React.createElement("p", null, "Animals gather at water, the bush thins out and viewing is at its best. Clear days of 8\u201326\xA0\xB0C (46\u201379\xA0\xB0F), minimal rain, cold early mornings. Peak game viewing.")), /*#__PURE__*/React.createElement("div", {
    className: "scard"
  }, /*#__PURE__*/React.createElement("h3", null, "Green Summer"), /*#__PURE__*/React.createElement("p", {
    className: "when"
  }, "October \u2013 March"), /*#__PURE__*/React.createElement("p", null, "Lush landscapes, newborn animals and migratory birds. Warm days of 20\u201332\xA0\xB0C (68\u201390\xA0\xB0F), with dramatic afternoon skies and busier school-holiday periods."))), /*#__PURE__*/React.createElement(MonthGrid, null))), /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "getting-there"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rsv-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "asg-eyebrow"
  }, "Getting there"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 500,
      fontSize: '2rem',
      color: 'var(--text-primary)',
      margin: '10px 0 26px'
    }
  }, "Ninety minutes from Johannesburg."), /*#__PURE__*/React.createElement("div", {
    className: "steps"
  }, /*#__PURE__*/React.createElement("div", {
    className: "step"
  }, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, "1"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Fly to the reserve"), /*#__PURE__*/React.createElement("p", null, "A 90-minute light-aircraft flight from Johannesburg lands at the reserve's private airstrip. We book it with your stay."))), /*#__PURE__*/React.createElement("div", {
    className: "step"
  }, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, "2"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Meet your ranger"), /*#__PURE__*/React.createElement("p", null, "Your lodge collects you from the strip \u2014 a 20-minute transfer that usually doubles as your first game drive."))), /*#__PURE__*/React.createElement("div", {
    className: "step"
  }, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, "3"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Settle in by lunch"), /*#__PURE__*/React.createElement("p", null, "Arrive mid-morning, lunch on the deck, and be on your first full drive by late afternoon."))))), /*#__PURE__*/React.createElement("div", {
    className: "rsv-photo"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/lounge-deck.webp",
    alt: "Arrival deck at the lodge"
  })))));
}
Object.assign(window, {
  ReserveScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/flagship-website/ReserveScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/flagship-website/editorial/EdChrome.jsx
try { (() => {
/* Flagship — Editorial (blend) · Shared chrome + helpers */
const {
  Logo,
  Button,
  Icon,
  IconButton
} = window.DesignSystem_e5ff94;
const EdDrawer = window.DesignSystem_e5ff94.Drawer || (() => null);
const ED_ICON_BASE = "../../assets/logos/";
function PhotoSlot({
  label,
  style,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ["photo-slot", className].filter(Boolean).join(" "),
    style: style
  }, /*#__PURE__*/React.createElement("span", {
    className: "photo-slot__tag"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), label));
}
const NAV = [["destinations", "Destinations"], ["experiences", "Experiences"], ["accommodation", "Accommodation"], ["about", "About"]];
function EbNav({
  route,
  go
}) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const goClose = r => {
    setMenuOpen(false);
    go(r);
  };
  return /*#__PURE__*/React.createElement("header", {
    className: "eb-nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-nav__in"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eb-logo",
    onClick: () => go("home")
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "horizontal",
    tone: "white",
    size: 38,
    iconBase: ED_ICON_BASE
  })), /*#__PURE__*/React.createElement("nav", {
    className: "eb-nav__links"
  }, NAV.map(([id, label]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    className: route === id ? "on" : "",
    onClick: () => go(id)
  }, label))), /*#__PURE__*/React.createElement("span", {
    className: "eb-nav__actions"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eb-cta-desktop"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: () => go("enquire")
  }, "Plan My Safari")), /*#__PURE__*/React.createElement("span", {
    className: "eb-burger"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "menu",
    label: "Menu",
    variant: "ghost",
    onClick: () => setMenuOpen(true)
  })))), /*#__PURE__*/React.createElement(EdDrawer, {
    open: menuOpen,
    onClose: () => setMenuOpen(false),
    title: "Menu",
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      style: {
        width: '100%'
      },
      onClick: () => goClose("enquire")
    }, "Plan My Safari")
  }, /*#__PURE__*/React.createElement("ul", {
    className: "eb-drawer-links"
  }, NAV.map(([id, label]) => /*#__PURE__*/React.createElement("li", {
    key: id
  }, /*#__PURE__*/React.createElement("a", {
    className: route === id ? "on" : "",
    onClick: () => goClose(id)
  }, label)))), /*#__PURE__*/React.createElement("p", {
    className: "eb-drawer-contact"
  }, "+27 21 200 5960", /*#__PURE__*/React.createElement("br", null), "bookings@africansafarigroup.com")));
}
function EbFooter({
  go
}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: "eb-foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-foot__in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-foot__brand"
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "stacked",
    tone: "white",
    size: 52,
    iconBase: ED_ICON_BASE
  }), /*#__PURE__*/React.createElement("p", null, "Tailor-made five-star safaris across Southern & East Africa, designed by specialists who have stayed at every lodge they recommend.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, "Destinations"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    onClick: () => go("destinations")
  }, "Sabi Sand")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    onClick: () => go("destinations")
  }, "Amakhala")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    onClick: () => go("destinations")
  }, "Madikwe")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    onClick: () => go("destinations")
  }, "Serengeti")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, "Company"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    onClick: () => go("about")
  }, "About us")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    onClick: () => go("about")
  }, "Our specialists")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    onClick: () => go("about")
  }, "Responsible travel")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    onClick: () => go("experiences")
  }, "Experiences")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, "Speak to us"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    onClick: () => go("enquire")
  }, "+27 21 200 5960")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    onClick: () => go("enquire")
  }, "bookings@africansafarigroup.com"))))), /*#__PURE__*/React.createElement("div", {
    className: "eb-foot__bar"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 African Safari Group. All rights reserved."), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      display: 'inline-flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "globe",
    size: 18
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 18
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 18
  }))));
}
Object.assign(window, {
  PhotoSlot,
  EbNav,
  EbFooter,
  ED_ICON_BASE
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/flagship-website/editorial/EdChrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/flagship-website/editorial/EdPagesA.jsx
try { (() => {
/* Flagship — Editorial (blend) · Pages A: Home, Destinations, Experiences, Accommodation */
const {
  Button,
  Badge,
  Card,
  Stat,
  Tag,
  Avatar,
  Icon
} = window.DesignSystem_e5ff94;
const {
  PhotoSlot
} = window;

/* ---------------- HOME ---------------- */
const HOME_VALUES = [{
  icon: "compass",
  h: "We know the reserves",
  p: "Not a directory — we have slept in the beds, met the guides, and watched the light."
}, {
  icon: "binoculars",
  h: "Specific over superlative",
  p: "Sighting odds, seasons and lodges named plainly, so you choose with confidence."
}, {
  icon: "users",
  h: "Consultation-led",
  p: "One specialist, start to finish. A person, never a booking funnel."
}, {
  icon: "leaf",
  h: "Quietly responsible",
  p: "Reserves and lodges chosen for their conservation record, not their marketing."
}];
const HOME_RESERVES = [{
  eyebrow: "Sabi Sand · South Africa",
  title: "The Leopard Capital",
  desc: "The highest leopard-sighting density in Africa, traversing Kruger's unfenced western edge.",
  price: "R 18,200",
  badge: "Big Five",
  to: "reserve"
}, {
  eyebrow: "Amakhala · Eastern Cape",
  title: "Malaria-Free Big Five",
  desc: "Five reserves, one ecosystem — ideal for families and first safaris.",
  price: "R 9,400",
  badge: "Malaria-Free",
  to: "destinations"
}, {
  eyebrow: "Serengeti · Tanzania",
  title: "The Great Migration",
  desc: "Time your stay to the river crossings; we hold the camps that move with the herds.",
  price: "R 24,600",
  badge: "Migration",
  to: "destinations"
}];
function EdHome({
  go
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    className: "hero hero--tall"
  }, /*#__PURE__*/React.createElement(PhotoSlot, {
    label: "Hero \u2014 golden hour, one clear subject, room to breathe"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero__in hero__in--tall"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Tailor-made \xB7 Five-star \xB7 Southern & East Africa"), /*#__PURE__*/React.createElement("h1", null, "Your Africa,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "Considered.")), /*#__PURE__*/React.createElement("p", {
    className: "hero__lead"
  }, "Safaris designed by specialists who have stayed at every lodge they recommend. We start with a conversation, not a checkout."), /*#__PURE__*/React.createElement("div", {
    className: "hero__cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: "arrow-right",
    onClick: () => go("enquire")
  }, "Plan My Safari"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => go("destinations")
  }, "Explore destinations")))), /*#__PURE__*/React.createElement("section", {
    className: "band band--ivory",
    "data-theme": "light"
  }, /*#__PURE__*/React.createElement("div", {
    className: "band__in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Why African Safari Group"), /*#__PURE__*/React.createElement("h2", null, "The authority, not a booking platform."), /*#__PURE__*/React.createElement("hr", {
    className: "rule"
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid-4"
  }, HOME_VALUES.map(v => /*#__PURE__*/React.createElement("div", {
    className: "tile",
    key: v.h
  }, /*#__PURE__*/React.createElement("span", {
    className: "tile__ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: v.icon,
    size: 26,
    strokeWidth: 1.5
  })), /*#__PURE__*/React.createElement("h4", null, v.h), /*#__PURE__*/React.createElement("p", null, v.p)))))), /*#__PURE__*/React.createElement("section", {
    className: "band band--white",
    "data-theme": "light"
  }, /*#__PURE__*/React.createElement("div", {
    className: "band__in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Featured reserves"), /*#__PURE__*/React.createElement("h2", null, "Where the sightings are."), /*#__PURE__*/React.createElement("p", null, "A short, curated list \u2014 the reserves we return to, season after season.")), /*#__PURE__*/React.createElement("div", {
    className: "grid-3"
  }, HOME_RESERVES.map(r => /*#__PURE__*/React.createElement(Card, {
    key: r.title,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go(r.to);
    },
    imageSlot: "Reserve photography",
    badge: /*#__PURE__*/React.createElement(Badge, {
      variant: "solid"
    }, r.badge),
    eyebrow: r.eyebrow,
    title: r.title,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "asg-card__price"
    }, /*#__PURE__*/React.createElement("b", null, r.price), /*#__PURE__*/React.createElement("span", null, "from / pp night")), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--accent)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 20
    })))
  }, /*#__PURE__*/React.createElement("p", {
    className: "asg-card__desc"
  }, r.desc)))))), /*#__PURE__*/React.createElement("section", {
    className: "band band--dark"
  }, /*#__PURE__*/React.createElement("div", {
    className: "band__in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "feature"
  }, /*#__PURE__*/React.createElement("div", {
    className: "feature__media"
  }, /*#__PURE__*/React.createElement(PhotoSlot, {
    label: "Specialist portrait",
    style: {
      position: 'absolute',
      inset: 0
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "feature__body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "A person, not a funnel"), /*#__PURE__*/React.createElement("h2", null, "One specialist, from first call to final sundowner."), /*#__PURE__*/React.createElement("p", null, "Tell us who is travelling and when. Your specialist shortlists lodges, holds space, and stays with your trip the whole way through."), /*#__PURE__*/React.createElement("div", {
    className: "feature__who"
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Thandi Mokoena",
    size: "lg",
    ring: true
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Thandi Mokoena"), /*#__PURE__*/React.createElement("span", null, "Senior Safari Specialist \xB7 14 years in-field"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => go("enquire")
  }, "Start the conversation")))))), /*#__PURE__*/React.createElement("section", {
    className: "band band--sand",
    "data-theme": "light"
  }, /*#__PURE__*/React.createElement("div", {
    className: "band__in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "quote"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "From your specialist briefing"), /*#__PURE__*/React.createElement("p", null, "\u201CSabi Sand offers the highest leopard-sighting density in Africa. Three nights gives you the best odds.\u201D")), /*#__PURE__*/React.createElement("div", {
    className: "statsrow statsrow--mt"
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "40+",
    label: "reserves we know first-hand",
    center: true
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "2,000+",
    label: "journeys designed",
    center: true
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "1 hour",
    label: "typical reply time",
    center: true
  })))));
}

/* ---------------- DESTINATIONS ---------------- */
const DESTS = [{
  eyebrow: "South Africa",
  title: "Sabi Sand",
  desc: "The leopard capital — unfenced, bordering Kruger.",
  price: "R 18,200",
  badge: "Big Five",
  to: "reserve"
}, {
  eyebrow: "Eastern Cape",
  title: "Amakhala",
  desc: "Malaria-free Big Five, ideal for families.",
  price: "R 9,400",
  badge: "Malaria-Free",
  to: "reserve"
}, {
  eyebrow: "North West",
  title: "Madikwe",
  desc: "Wild dog country on the Kalahari's edge.",
  price: "R 12,800",
  badge: "Malaria-Free",
  to: "reserve"
}, {
  eyebrow: "Tanzania",
  title: "Serengeti",
  desc: "The Great Migration and endless plains.",
  price: "R 24,600",
  badge: "Migration",
  to: "reserve"
}, {
  eyebrow: "Botswana",
  title: "Okavango Delta",
  desc: "Water-based safaris by mokoro and boat.",
  price: "R 28,400",
  badge: "Exclusive",
  to: "reserve"
}, {
  eyebrow: "Zambia",
  title: "South Luangwa",
  desc: "The home of the walking safari.",
  price: "R 16,900",
  badge: "Walking",
  to: "reserve"
}];
function EdDestinations({
  go
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    className: "hero hero--mid"
  }, /*#__PURE__*/React.createElement(PhotoSlot, {
    label: "Destinations hero \u2014 sweeping environmental landscape"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero__in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__crumbs"
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => go("home")
  }, "Home"), /*#__PURE__*/React.createElement("span", {
    className: "sep"
  }, "/"), /*#__PURE__*/React.createElement("span", null, "Destinations")), /*#__PURE__*/React.createElement("h1", null, "Where we go."), /*#__PURE__*/React.createElement("p", {
    className: "hero__lead"
  }, "Six countries, one standard. Every destination here is one we know first-hand \u2014 chosen for its wildlife, its light, and its lodges."))), /*#__PURE__*/React.createElement("section", {
    className: "band band--ivory",
    "data-theme": "light",
    "data-comment-anchor": "0dcc6c649a-section-129-7"
  }, /*#__PURE__*/React.createElement("div", {
    className: "band__in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Southern & East Africa"), /*#__PURE__*/React.createElement("h2", null, "Choose your ground."), /*#__PURE__*/React.createElement("hr", {
    className: "rule"
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid-3"
  }, DESTS.map(d => /*#__PURE__*/React.createElement(Card, {
    key: d.title,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go(d.to);
    },
    imageSlot: "Destination photography",
    badge: /*#__PURE__*/React.createElement(Badge, {
      variant: "solid"
    }, d.badge),
    eyebrow: d.eyebrow,
    title: d.title,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "asg-card__price"
    }, /*#__PURE__*/React.createElement("b", null, d.price), /*#__PURE__*/React.createElement("span", null, "from / pp night")), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--accent)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 20
    })))
  }, /*#__PURE__*/React.createElement("p", {
    className: "asg-card__desc"
  }, d.desc)))))), /*#__PURE__*/React.createElement("section", {
    className: "band band--dark"
  }, /*#__PURE__*/React.createElement("div", {
    className: "band__in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "feature feature--rev"
  }, /*#__PURE__*/React.createElement("div", {
    className: "feature__body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Not sure where to start?"), /*#__PURE__*/React.createElement("h2", null, "We'll match the ground to the trip you have in mind."), /*#__PURE__*/React.createElement("p", null, "First safari or fifth, malaria-free for the children, migration timing to the week \u2014 tell us the shape of the trip and we'll name the right reserve."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => go("enquire")
  }, "Ask a specialist"))), /*#__PURE__*/React.createElement("div", {
    className: "feature__media"
  }, /*#__PURE__*/React.createElement(PhotoSlot, {
    label: "Map / region imagery",
    style: {
      position: 'absolute',
      inset: 0
    }
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "band band--sand band--tight",
    "data-theme": "light"
  }, /*#__PURE__*/React.createElement("div", {
    className: "band__in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "statsrow"
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "6",
    label: "countries",
    center: true
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "40+",
    label: "reserves",
    center: true
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "200+",
    label: "lodges & camps",
    center: true
  })))));
}

/* ---------------- EXPERIENCES ---------------- */
const EXPERIENCES = [{
  icon: "binoculars",
  title: "Classic Big Five",
  desc: "Morning and afternoon game drives with a private ranger and tracker."
}, {
  icon: "leaf",
  title: "Walking safaris",
  desc: "On foot with an armed guide — the bush at eye level, tracks and detail."
}, {
  icon: "compass",
  title: "The Great Migration",
  desc: "Timed to the river crossings, in camps that move with the herds."
}, {
  icon: "users",
  title: "Family safaris",
  desc: "Malaria-free reserves, private vehicles, and rangers who love teaching."
}, {
  icon: "heart",
  title: "Honeymoons",
  desc: "Private decks, sleep-outs, and dinners under the stars."
}, {
  icon: "star",
  title: "Photographic",
  desc: "Hides, specialist vehicles, and guides who know the light."
}];
function EdExperiences({
  go
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    className: "hero hero--mid"
  }, /*#__PURE__*/React.createElement(PhotoSlot, {
    label: "Experiences hero \u2014 a defining safari moment"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero__in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__crumbs"
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => go("home")
  }, "Home"), /*#__PURE__*/React.createElement("span", {
    className: "sep"
  }, "/"), /*#__PURE__*/React.createElement("span", null, "Experiences")), /*#__PURE__*/React.createElement("h1", null, "How you'll experience it."), /*#__PURE__*/React.createElement("p", {
    className: "hero__lead"
  }, "The same reserves offer very different trips. Start from the experience you want, and we'll build the itinerary around it."))), /*#__PURE__*/React.createElement("section", {
    className: "band band--white",
    "data-theme": "light"
  }, /*#__PURE__*/React.createElement("div", {
    className: "band__in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Ways to travel"), /*#__PURE__*/React.createElement("h2", null, "Pick your kind of safari."), /*#__PURE__*/React.createElement("hr", {
    className: "rule"
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid-3"
  }, EXPERIENCES.map(x => /*#__PURE__*/React.createElement("div", {
    className: "tile",
    key: x.title,
    style: {
      padding: '28px',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      background: 'var(--asg-warm-ivory)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "tile__ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: x.icon,
    size: 26,
    strokeWidth: 1.5
  })), /*#__PURE__*/React.createElement("h4", null, x.title), /*#__PURE__*/React.createElement("p", null, x.desc)))))), /*#__PURE__*/React.createElement("section", {
    className: "band band--dark"
  }, /*#__PURE__*/React.createElement("div", {
    className: "band__in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "feature"
  }, /*#__PURE__*/React.createElement("div", {
    className: "feature__media"
  }, /*#__PURE__*/React.createElement(PhotoSlot, {
    label: "Signature experience \u2014 sundowner / sleep-out",
    style: {
      position: 'absolute',
      inset: 0
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "feature__body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Our signature"), /*#__PURE__*/React.createElement("h2", null, "The sleep-out: a night under the whole sky."), /*#__PURE__*/React.createElement("p", null, "A private platform, a bedroll, and a guide within call. Dinner at dusk, the Milky Way overhead, and the reserve waking around you at first light."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => go("enquire")
  }, "Enquire about this")))))), /*#__PURE__*/React.createElement("section", {
    className: "band band--sand",
    "data-theme": "light"
  }, /*#__PURE__*/React.createElement("div", {
    className: "band__in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "quote"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "When to go"), /*#__PURE__*/React.createElement("p", null, "\u201CMay to September for dry-season game viewing. November to March for newborn game, lush landscapes, and dramatic skies.\u201D")))));
}

/* ---------------- ACCOMMODATION ---------------- */
const STAYS = [{
  eyebrow: "Sabi Sand",
  title: "Londolozi Founders Camp",
  desc: "Founders-suite privacy on the Sand River.",
  price: "R 18,200",
  tag: "Relais & Châteaux",
  to: "lodge"
}, {
  eyebrow: "Sabi Sand",
  title: "Cheetah Plains",
  desc: "Solar-run contemporary private villas.",
  price: "R 22,900",
  tag: "Exclusive-use",
  to: "lodge"
}, {
  eyebrow: "Amakhala",
  title: "Hlosi Game Lodge",
  desc: "Malaria-free Big Five for families.",
  price: "R 9,400",
  tag: "Family",
  to: "lodge"
}, {
  eyebrow: "Serengeti",
  title: "Sanctuary Kichakani",
  desc: "A migration camp that moves with the herds.",
  price: "R 24,600",
  tag: "Tented",
  to: "lodge"
}, {
  eyebrow: "Okavango",
  title: "Mombo Camp",
  desc: "Botswana's legendary predator concession.",
  price: "R 34,800",
  tag: "Exclusive",
  to: "lodge"
}, {
  eyebrow: "Madikwe",
  title: "Jamala Royal",
  desc: "Palatial suites in wild-dog country.",
  price: "R 14,200",
  tag: "Malaria-free",
  to: "lodge"
}];
function EdAccommodation({
  go
}) {
  const [filter, setFilter] = React.useState("All");
  const filters = ["All", "Exclusive-use", "Family", "Tented"];
  const list = STAYS.filter(s => filter === "All" || s.tag === filter || filter === "Exclusive-use" && s.tag === "Exclusive");
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    className: "hero hero--mid"
  }, /*#__PURE__*/React.createElement(PhotoSlot, {
    label: "Accommodation hero \u2014 an iconic lodge deck at golden hour"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero__in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__crumbs"
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => go("home")
  }, "Home"), /*#__PURE__*/React.createElement("span", {
    className: "sep"
  }, "/"), /*#__PURE__*/React.createElement("span", null, "Accommodation")), /*#__PURE__*/React.createElement("h1", null, "Where you'll stay."), /*#__PURE__*/React.createElement("p", {
    className: "hero__lead"
  }, "We place guests in lodges and camps we have stayed in ourselves \u2014 a considered list, not a directory."))), /*#__PURE__*/React.createElement("section", {
    className: "band band--ivory",
    "data-theme": "light"
  }, /*#__PURE__*/React.createElement("div", {
    className: "band__in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Lodges & camps"), /*#__PURE__*/React.createElement("h2", null, "The places we return to.")), /*#__PURE__*/React.createElement("div", {
    className: "filters"
  }, filters.map(f => /*#__PURE__*/React.createElement(Tag, {
    key: f,
    selected: filter === f,
    onClick: () => setFilter(f)
  }, f))), /*#__PURE__*/React.createElement("div", {
    className: "grid-3"
  }, list.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.title,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go(s.to);
    },
    imageSlot: "Lodge photography",
    badge: /*#__PURE__*/React.createElement(Badge, {
      variant: "neutral"
    }, s.tag),
    eyebrow: s.eyebrow,
    title: s.title,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "asg-card__price"
    }, /*#__PURE__*/React.createElement("b", null, s.price), /*#__PURE__*/React.createElement("span", null, "pp / night")), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary",
      onLight: true
    }, "View lodge"))
  }, /*#__PURE__*/React.createElement("p", {
    className: "asg-card__desc"
  }, s.desc)))))), /*#__PURE__*/React.createElement("section", {
    className: "band band--dark"
  }, /*#__PURE__*/React.createElement("div", {
    className: "band__in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "feature feature--rev"
  }, /*#__PURE__*/React.createElement("div", {
    className: "feature__body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Exclusive-use"), /*#__PURE__*/React.createElement("h2", null, "Take the whole camp."), /*#__PURE__*/React.createElement("p", null, "For families and celebrations, several of our lodges can be booked on an exclusive-use basis \u2014 your own chef, guide, vehicle, and staff."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => go("enquire")
  }, "Enquire about exclusive-use"))), /*#__PURE__*/React.createElement("div", {
    className: "feature__media"
  }, /*#__PURE__*/React.createElement(PhotoSlot, {
    label: "Villa / exclusive-use imagery",
    style: {
      position: 'absolute',
      inset: 0
    }
  }))))));
}
Object.assign(window, {
  EdHome,
  EdDestinations,
  EdExperiences,
  EdAccommodation
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/flagship-website/editorial/EdPagesA.jsx", error: String((e && e.message) || e) }); }

// ui_kits/flagship-website/editorial/EdPagesB.jsx
try { (() => {
/* Flagship — Editorial (blend) · Pages B: Reserve, Lodge, About, Enquiry */
const {
  Button,
  Badge,
  Card,
  Stat,
  Tabs,
  Tag,
  Accordion,
  Avatar,
  Divider,
  Input,
  Textarea,
  Select,
  Checkbox,
  Toast,
  Icon
} = window.DesignSystem_e5ff94;
const {
  PhotoSlot
} = window;

/* ---------------- RESERVE (Sabi Sand) ---------------- */
const RSV_LODGES = [{
  eyebrow: "Founders Camp",
  title: "Londolozi",
  desc: "Founders-suite privacy on the Sand River.",
  price: "R 18,200",
  tag: "Leopards"
}, {
  eyebrow: "Family Camp",
  title: "Lion Sands",
  desc: "Treehouse sleep-outs and a wide river frontage.",
  price: "R 15,600",
  tag: "Families"
}, {
  eyebrow: "Tented",
  title: "Cheetah Plains",
  desc: "Solar-run, contemporary, fully private villas.",
  price: "R 22,900",
  tag: "Exclusive-use"
}];
function EdReserve({
  go
}) {
  const [tab, setTab] = React.useState("overview");
  const [filter, setFilter] = React.useState("All lodges");
  const filters = ["All lodges", "Leopards", "Families", "Exclusive-use"];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    className: "hero hero--mid"
  }, /*#__PURE__*/React.createElement(PhotoSlot, {
    label: "Reserve hero \u2014 wide environmental shot of Sabi Sand"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero__in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__crumbs"
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => go("destinations")
  }, "Destinations"), /*#__PURE__*/React.createElement("span", {
    className: "sep"
  }, "/"), /*#__PURE__*/React.createElement("span", null, "Sabi Sand")), /*#__PURE__*/React.createElement("h1", null, "Sabi Sand Game Reserve"), /*#__PURE__*/React.createElement("div", {
    className: "hero__meta"
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "solid"
  }, "Big Five"), /*#__PURE__*/React.createElement(Badge, {
    variant: "neutral",
    dot: true
  }, "Open all year"), /*#__PURE__*/React.createElement(Badge, {
    variant: "neutral"
  }, "Unfenced \xB7 bordering Kruger")))), /*#__PURE__*/React.createElement("section", {
    className: "band band--ivory",
    "data-theme": "light"
  }, /*#__PURE__*/React.createElement("div", {
    className: "band__in"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '34px'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    tabs: [{
      id: "overview",
      label: "Overview"
    }, {
      id: "lodges",
      label: "Lodges",
      icon: "map-pin"
    }, {
      id: "season",
      label: "Best Season",
      icon: "calendar"
    }, {
      id: "getting",
      label: "Getting There"
    }]
  })), /*#__PURE__*/React.createElement("div", {
    className: "article"
  }, /*#__PURE__*/React.createElement("div", {
    className: "prose"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "The reserve"), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: '10px'
    }
  }, "Where leopards are relaxed around vehicles."), /*#__PURE__*/React.createElement("p", null, "Sabi Sand shares an unfenced boundary with Kruger, so game moves freely while the traversing rights stay private \u2014 a handful of vehicles to a sighting, not a queue. Decades of respectful viewing have made its leopards the most relaxed on the continent."), /*#__PURE__*/React.createElement("p", null, "We hold space across the reserve's founding lodges. Three nights is our standard recommendation: enough for the unhurried mornings and the one sighting you will talk about for years.")), /*#__PURE__*/React.createElement("aside", {
    className: "aside"
  }, /*#__PURE__*/React.createElement("h4", null, "At a glance"), /*#__PURE__*/React.createElement("div", {
    className: "aside__row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 20,
    strokeWidth: 1.6
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Mpumalanga, South Africa"), /*#__PURE__*/React.createElement("span", null, "Greater Kruger, western edge"))), /*#__PURE__*/React.createElement("div", {
    className: "aside__row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar",
    size: 20,
    strokeWidth: 1.6
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "May \u2013 September"), /*#__PURE__*/React.createElement("span", null, "Best dry-season game viewing"))), /*#__PURE__*/React.createElement("div", {
    className: "aside__row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "binoculars",
    size: 20,
    strokeWidth: 1.6
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Big Five \xB7 Leopard"), /*#__PURE__*/React.createElement("span", null, "Highest sighting density in Africa"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '20px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    fullWidth: true,
    onClick: () => go("enquire")
  }, "Enquire about Sabi Sand")))))), /*#__PURE__*/React.createElement("section", {
    className: "band band--dark band--tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "band__in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "statsrow"
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "98%",
    label: "trips with a leopard sighting",
    center: true
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "6\u20137",
    label: "lodges we place guests in",
    center: true
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "3 nights",
    label: "recommended stay",
    brass: false,
    center: true
  })))), /*#__PURE__*/React.createElement("section", {
    className: "band band--white",
    "data-theme": "light"
  }, /*#__PURE__*/React.createElement("div", {
    className: "band__in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head",
    style: {
      marginBottom: '24px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "The lodges"), /*#__PURE__*/React.createElement("h2", null, "Where you will stay.")), /*#__PURE__*/React.createElement("div", {
    className: "filters"
  }, filters.map(f => /*#__PURE__*/React.createElement(Tag, {
    key: f,
    selected: filter === f,
    onClick: () => setFilter(f)
  }, f))), /*#__PURE__*/React.createElement("div", {
    className: "grid-3"
  }, RSV_LODGES.filter(l => filter === "All lodges" || l.tag === filter).map(l => /*#__PURE__*/React.createElement(Card, {
    key: l.title,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go("lodge");
    },
    imageSlot: "Lodge photography",
    badge: /*#__PURE__*/React.createElement(Badge, {
      variant: "neutral"
    }, l.tag),
    eyebrow: l.eyebrow,
    title: l.title,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "asg-card__price"
    }, /*#__PURE__*/React.createElement("b", null, l.price), /*#__PURE__*/React.createElement("span", null, "pp / night")), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary",
      onLight: true
    }, "View lodge"))
  }, /*#__PURE__*/React.createElement("p", {
    className: "asg-card__desc"
  }, l.desc)))))));
}

/* ---------------- LODGE (Londolozi) ---------------- */
function EdLodge({
  go
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    className: "hero hero--short"
  }, /*#__PURE__*/React.createElement(PhotoSlot, {
    label: "Lodge hero \u2014 suite & deck over the Sand River"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero__in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__crumbs"
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => go("reserve")
  }, "Sabi Sand"), /*#__PURE__*/React.createElement("span", {
    className: "sep"
  }, "/"), /*#__PURE__*/React.createElement("span", null, "Londolozi Founders Camp")), /*#__PURE__*/React.createElement("h1", null, "Londolozi Founders Camp"))), /*#__PURE__*/React.createElement("section", {
    className: "band band--ivory band--tight",
    "data-theme": "light"
  }, /*#__PURE__*/React.createElement("div", {
    className: "band__in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gallery"
  }, /*#__PURE__*/React.createElement(PhotoSlot, {
    className: "g0",
    label: "Suite & deck"
  }), /*#__PURE__*/React.createElement(PhotoSlot, {
    label: "The Sand River"
  }), /*#__PURE__*/React.createElement(PhotoSlot, {
    label: "Dining"
  }), /*#__PURE__*/React.createElement(PhotoSlot, {
    label: "Game drive"
  }), /*#__PURE__*/React.createElement(PhotoSlot, {
    label: "Pool"
  })))), /*#__PURE__*/React.createElement("section", {
    className: "band band--white",
    "data-theme": "light",
    style: {
      paddingTop: '40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "band__in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "article"
  }, /*#__PURE__*/React.createElement("div", {
    className: "prose"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Sabi Sand \xB7 Founders Camp"), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: '10px'
    }
  }, "Ten suites along the Sand River."), /*#__PURE__*/React.createElement("p", null, "Londolozi all but invented the relaxed-leopard sighting. Founders Camp is its most private address \u2014 ten suites along the Sand River, each with a plunge pool and a deck that looks straight into the riverine bush."), /*#__PURE__*/React.createElement("p", null, "Mornings begin before light with your ranger and tracker; afternoons end with a sundowner where the herds come to drink. Between drives, the camp is yours: unhurried, quiet, and entirely without schedule."), /*#__PURE__*/React.createElement("div", {
    className: "statsrow",
    style: {
      justifyContent: 'flex-start',
      gap: '48px',
      margin: '30px 0 8px'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "10",
    label: "riverside suites"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "2",
    label: "game drives daily"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "98%",
    label: "leopard sightings",
    brass: false
  }))), /*#__PURE__*/React.createElement("aside", {
    className: "rate"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rate__price"
  }, /*#__PURE__*/React.createElement("b", null, "R 18,200"), /*#__PURE__*/React.createElement("span", null, "pp / night sharing")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '16px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "rate__line"
  }, /*#__PURE__*/React.createElement("span", null, "Your dates"), /*#__PURE__*/React.createElement("span", null, "14\u201317 Oct 2026")), /*#__PURE__*/React.createElement("div", {
    className: "rate__line"
  }, /*#__PURE__*/React.createElement("span", null, "Guests"), /*#__PURE__*/React.createElement("span", null, "2 adults")), /*#__PURE__*/React.createElement("div", {
    className: "rate__line"
  }, /*#__PURE__*/React.createElement("span", null, "3 nights, full board"), /*#__PURE__*/React.createElement("span", null, "R 109,200")), /*#__PURE__*/React.createElement("div", {
    className: "rate__note"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info",
    size: 16
  })), "Real rates, real availability \u2014 a specialist confirms before you commit."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '20px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    fullWidth: true,
    onClick: () => go("enquire")
  }, "Enquire about these dates")))))), /*#__PURE__*/React.createElement("section", {
    className: "band band--dark"
  }, /*#__PURE__*/React.createElement("div", {
    className: "band__in band__in--text"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Good to know"), /*#__PURE__*/React.createElement("h2", null, "The detail.")), /*#__PURE__*/React.createElement(Accordion, {
    defaultOpen: [0],
    items: [{
      title: "What's included",
      content: "All game drives with a private ranger and tracker, all meals, house wines and spirits, laundry, conservation levies and transfers within the reserve."
    }, {
      title: "Best time to visit",
      content: "May to September for dry-season game viewing; November to March for lush landscapes, newborn game and dramatic skies."
    }, {
      title: "Getting there",
      content: "A 90-minute light-aircraft flight from Johannesburg to the reserve's private airstrip, then a 20-minute transfer."
    }, {
      title: "Children & families",
      content: "Children of all ages are welcome; private family vehicles and a dedicated ranger can be arranged on request."
    }]
  }))));
}

/* ---------------- ABOUT ---------------- */
const ABOUT_VALUES = [{
  icon: "compass",
  h: "First-hand knowledge",
  p: "We recommend only what we have seen, slept in, and stood beside."
}, {
  icon: "leaf",
  h: "Responsible by default",
  p: "Conservation record before marketing budget, every time."
}, {
  icon: "users",
  h: "One specialist per journey",
  p: "A single person owns your trip from first call to homecoming."
}];
function EdAbout({
  go
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    className: "hero hero--mid"
  }, /*#__PURE__*/React.createElement(PhotoSlot, {
    label: "About hero \u2014 the team in-field, or a defining landscape"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero__in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__crumbs"
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => go("home")
  }, "Home"), /*#__PURE__*/React.createElement("span", {
    className: "sep"
  }, "/"), /*#__PURE__*/React.createElement("span", null, "About")), /*#__PURE__*/React.createElement("h1", null, "We are the specialists you'd hope to find."))), /*#__PURE__*/React.createElement("section", {
    className: "band band--ivory",
    "data-theme": "light"
  }, /*#__PURE__*/React.createElement("div", {
    className: "band__in band__in--text"
  }, /*#__PURE__*/React.createElement("div", {
    className: "prose",
    style: {
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Our story"), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: '12px'
    }
  }, "Built by people who live in the bush."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 auto'
    }
  }, "African Safari Group began with a simple frustration: the gap between how safaris are sold and how they are actually experienced. We set out to close it \u2014 with specialists who have spent years in-field, and a promise to speak plainly. Specific over superlative. A person, not a funnel.")))), /*#__PURE__*/React.createElement("section", {
    className: "band band--dark"
  }, /*#__PURE__*/React.createElement("div", {
    className: "band__in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head sec-head--center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "What we hold to"), /*#__PURE__*/React.createElement("h2", null, "Three commitments.")), /*#__PURE__*/React.createElement("div", {
    className: "grid-3"
  }, ABOUT_VALUES.map(v => /*#__PURE__*/React.createElement("div", {
    className: "tile",
    key: v.h,
    style: {
      alignItems: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "tile__ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: v.icon,
    size: 28,
    strokeWidth: 1.5
  })), /*#__PURE__*/React.createElement("h4", null, v.h), /*#__PURE__*/React.createElement("p", null, v.p)))))), /*#__PURE__*/React.createElement("section", {
    className: "band band--sand",
    "data-theme": "light"
  }, /*#__PURE__*/React.createElement("div", {
    className: "band__in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head sec-head--center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "By the numbers"), /*#__PURE__*/React.createElement("h2", null, "A record, not a pitch.")), /*#__PURE__*/React.createElement("div", {
    className: "statsrow"
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "14 yrs",
    label: "average specialist experience",
    center: true
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "2,000+",
    label: "journeys designed",
    center: true
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "96%",
    label: "guests who return or refer",
    center: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '44px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => go("enquire"),
    iconRight: "arrow-right"
  }, "Plan your safari with us")))));
}

/* ---------------- ENQUIRY ---------------- */
function EdEnquire({
  go
}) {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    className: "hero hero--short"
  }, /*#__PURE__*/React.createElement(PhotoSlot, {
    label: "Enquiry hero \u2014 a warm, inviting camp at dusk"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero__in"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Plan my safari"), /*#__PURE__*/React.createElement("h1", null, "Let's start with a conversation."))), /*#__PURE__*/React.createElement("section", {
    className: "band band--ivory",
    "data-theme": "light"
  }, /*#__PURE__*/React.createElement("div", {
    className: "band__in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "enq"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "How it works"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 500,
      fontSize: 'clamp(1.8rem,1.4rem+1.4vw,2.4rem)',
      color: 'var(--text-primary)',
      margin: '12px 0 0',
      lineHeight: 1.14,
      letterSpacing: '-.01em'
    }
  }, "A specialist, not a call centre."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '16px',
      lineHeight: 1.7,
      color: 'var(--text-body)',
      maxWidth: '44ch',
      margin: '16px 0 0'
    }
  }, "Tell us who is travelling and roughly when. A specialist will reply within the hour with a considered first shortlist."), /*#__PURE__*/React.createElement("div", {
    className: "enq__steps"
  }, /*#__PURE__*/React.createElement("div", {
    className: "enq__step"
  }, /*#__PURE__*/React.createElement("span", {
    className: "n"
  }, "1"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "We listen"), /*#__PURE__*/React.createElement("span", null, "Your dates, your party, the kind of trip you have in mind."))), /*#__PURE__*/React.createElement("div", {
    className: "enq__step"
  }, /*#__PURE__*/React.createElement("span", {
    className: "n"
  }, "2"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "We shortlist"), /*#__PURE__*/React.createElement("span", null, "Three or four lodges we know first-hand, with real rates and availability."))), /*#__PURE__*/React.createElement("div", {
    className: "enq__step"
  }, /*#__PURE__*/React.createElement("span", {
    className: "n"
  }, "3"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "We hold & refine"), /*#__PURE__*/React.createElement("span", null, "We hold space while we tailor the itinerary with you, end to end."))))), /*#__PURE__*/React.createElement("form", {
    className: "enq__form",
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    }
  }, /*#__PURE__*/React.createElement("h3", null, "Your enquiry"), /*#__PURE__*/React.createElement("div", {
    className: "enq__row"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "First name",
    placeholder: "Sarah",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Last name",
    placeholder: "Kruger",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "enq__field"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    icon: "mail",
    placeholder: "you@example.com",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "enq__row"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Phone",
    icon: "phone",
    placeholder: "+27 \u2026"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Reserve of interest",
    placeholder: "Open to suggestions",
    options: ["Sabi Sand", "Amakhala", "Madikwe", "Serengeti", "Not sure yet"]
  })), /*#__PURE__*/React.createElement("div", {
    className: "enq__row"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Approx. travel dates",
    icon: "calendar",
    placeholder: "October 2026"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Guests",
    options: [{
      value: "2",
      label: "2 adults"
    }, {
      value: "4",
      label: "4 adults"
    }, {
      value: "family",
      label: "Family with children"
    }]
  })), /*#__PURE__*/React.createElement("div", {
    className: "enq__field"
  }, /*#__PURE__*/React.createElement(Textarea, {
    label: "Anything else?",
    rows: 3,
    placeholder: "First safari, special occasion, must-see species\u2026"
  })), /*#__PURE__*/React.createElement("div", {
    className: "enq__field"
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Malaria-free reserves only"
  })), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "primary",
    size: "lg",
    fullWidth: true,
    iconRight: "arrow-right"
  }, "Send my enquiry"))))), sent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      right: '24px',
      bottom: '74px',
      zIndex: 1200
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    variant: "success",
    title: "Enquiry received",
    onClose: () => setSent(false)
  }, "Thandi will reply within the hour. Check your inbox for a confirmation.")));
}
Object.assign(window, {
  EdReserve,
  EdLodge,
  EdAbout,
  EdEnquire
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/flagship-website/editorial/EdPagesB.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Drawer = __ds_scope.Drawer;

__ds_ns.AccreditationRow = __ds_scope.AccreditationRow;

__ds_ns.EnquiryChecklist = __ds_scope.EnquiryChecklist;

__ds_ns.FactPill = __ds_scope.FactPill;

__ds_ns.DEFAULT_MONTHS = __ds_scope.DEFAULT_MONTHS;

__ds_ns.MonthGrid = __ds_scope.MonthGrid;

__ds_ns.PriceCard = __ds_scope.PriceCard;

__ds_ns.SightingsBadge = __ds_scope.SightingsBadge;

__ds_ns.ValuePropBar = __ds_scope.ValuePropBar;

})();
