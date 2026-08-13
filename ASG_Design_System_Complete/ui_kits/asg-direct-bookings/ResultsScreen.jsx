/* ASG Direct Bookings · Search results */
const { Button, Badge, Tag, Switch, Checkbox, Icon, Divider } = window.DesignSystem_e5ff94;
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
(function(){ const s=document.createElement('style'); s.textContent=resCss; document.head.appendChild(s); })();

const PROPS = [
  { eyebrow:"Sabi Sand", title:"Londolozi Founders Camp", stars:"5.0", desc:"Founders-suite privacy on the Sand River; the relaxed-leopard original.", price:"R 18,200", left:"2 suites left", amen:["binoculars","leaf","users"], fav:true },
  { eyebrow:"Sabi Sand", title:"Cheetah Plains", stars:"4.9", desc:"Solar-run contemporary villas, exclusive-use available for families.", price:"R 22,900", left:"Good availability", amen:["leaf","users","compass"] },
  { eyebrow:"Amakhala", title:"Hlosi Game Lodge", stars:"4.7", desc:"Malaria-free Big Five in the Eastern Cape — ideal for first safaris.", price:"R 9,400", left:"4 rooms left", amen:["binoculars","users"] },
];
const AMEN_LABEL = { binoculars:"Game drives", leaf:"Eco-certified", users:"Family-friendly", compass:"Guided walks" };

function ResultsScreen({ go }) {
  const [malaria, setMalaria] = React.useState(false);
  const [price, setPrice] = React.useState(25000);
  const [filtersOpen, setFiltersOpen] = React.useState(false);
  const count = malaria ? 1 : 3;
  const filterControls = (
    <React.Fragment>
      <div>
        <h4>Price · per night</h4>
        <div className="sbn-price">
          <input type="range" min="5000" max="30000" step="500" value={price} onChange={(e)=>setPrice(+e.target.value)} />
        </div>
        <div style={{fontFamily:'var(--font-numeric)',fontSize:13,color:'var(--text-body)',marginTop:8}}>Up to R {price.toLocaleString()}</div>
      </div>
      <Divider />
      <div>
        <h4>Reserve</h4>
        <div className="sbn-fgroup">
          <Checkbox label="Sabi Sand" defaultChecked />
          <Checkbox label="Amakhala" />
          <Checkbox label="Madikwe" />
          <Checkbox label="Timbavati" />
        </div>
      </div>
      <Divider />
      <div>
        <h4>Experience</h4>
        <div className="sbn-fgroup">
          <Checkbox label="Big Five" defaultChecked />
          <Checkbox label="Exclusive-use" />
          <Checkbox label="Family-friendly" />
        </div>
      </div>
      <Divider />
      <Switch label="Malaria-free only" checked={malaria} onChange={(e)=>setMalaria(e.target.checked)} />
    </React.Fragment>
  );
  return (
    <React.Fragment>
      <div className="sbn-searchbar">
        <div className="sbn-searchbar__in">
          <div className="sbn-sb-field"><span className="ic"><Icon name="map-pin" size={18} /></span><div><span>Destination</span><b>Sabi Sand &amp; nearby</b></div></div>
          <div className="sbn-sb-field"><span className="ic"><Icon name="calendar" size={18} /></span><div><span>Dates</span><b>14 – 17 Oct 2026</b></div></div>
          <div className="sbn-sb-field"><span className="ic"><Icon name="user" size={18} /></span><div><span>Guests</span><b>2 adults</b></div></div>
          <Button variant="secondary" size="sm" icon="search">Edit search</Button>
        </div>
      </div>

      <div className="sbn-layout">
        <aside className="sbn-filters">
          {filterControls}
        </aside>

        <main>
          <div className="sbn-results__head">
            <h2>{count} lodges available</h2>
            <span className="sbn-filters-btn"><Button variant="secondary" size="sm" icon="sliders" onClick={()=>setFiltersOpen(true)}>Filters</Button></span>
            <span>Sorted by relevance · real-time availability</span>
          </div>
          <SbnDrawer open={filtersOpen} onClose={()=>setFiltersOpen(false)} title="Filters" side="left"
            footer={<Button variant="primary" style={{width:'100%'}} onClick={()=>setFiltersOpen(false)}>Show {count} lodges</Button>}>
            <div className="sbn-fdrawer">{filterControls}</div>
          </SbnDrawer>
          <div className="sbn-reslist">
            {PROPS.filter(p => !malaria || p.eyebrow==="Amakhala").map((p) => (
              <article className="sbn-prop" key={p.title}>
                <div className="sbn-prop__media">
                  <SbnPhoto label="Lodge photo" style={{position:'absolute',inset:0}} />
                  {p.fav && <span className="sbn-prop__fav"><Badge variant="solid">2 left</Badge></span>}
                </div>
                <div className="sbn-prop__body">
                  <span className="sbn-prop__eyebrow">{p.eyebrow}</span>
                  <h3 className="sbn-prop__title">{p.title}<span className="sbn-prop__rate-stars"><Icon name="star" size={14} color="var(--accent)" />{p.stars}</span></h3>
                  <p className="sbn-prop__desc">{p.desc}</p>
                  <div className="sbn-prop__amen">
                    {p.amen.map(a => <span key={a}><span className="ic"><Icon name={a} size={15} /></span>{AMEN_LABEL[a]}</span>)}
                  </div>
                </div>
                <div className="sbn-prop__rate">
                  <span className="sbn-prop__avail"><Icon name="check" size={14} strokeWidth={2.4} />{p.left}</span>
                  <div>
                    <div className="sbn-prop__price"><b>{p.price}</b><span>pp / night · incl. all drives</span></div>
                    <div style={{marginTop:12}}><Button variant="primary" onClick={() => go("property")}>View &amp; book</Button></div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </main>
      </div>
    </React.Fragment>
  );
}

Object.assign(window, { ResultsScreen });
