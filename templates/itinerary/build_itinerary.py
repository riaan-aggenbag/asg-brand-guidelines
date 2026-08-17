#!/usr/bin/env python3
"""ASG-ITIN-OPT4INK-20260817-R1 — build the self-contained Wetu itinerary reference (Option 4 · Ink Edition).

Inputs : itinerary_template.html (clean template, <img data-asset="key"> slots)
         assets/*.png (crops from the live Wetu itinerary + brand-book logo rasters)
Output : asg_itinerary_option4_ink_edition.html (single file, assets inlined as data URIs)

Photos are re-encoded as JPEG (sRGB) at the widths below; logos stay PNG (alpha).
"""
import base64, io, json, os, re, sys
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
TEMPLATE = os.path.join(HERE, 'itinerary_template.html')
ASSETS = os.path.join(HERE, 'assets')
OUT = os.path.join(HERE, 'asg_itinerary_option4_ink_edition.html')

# key -> (max_width, jpeg_quality) ; None width = keep
PHOTOS = {
    'hero_moditlo': (1600, 76),
    'ov_moditlo_elephants': (984, 80), 'ov_chest_buffalo': (984, 80),
    'ac_moditlo_main': (970, 80), 'ac_chest_main': (970, 80),
    'ac_moditlo_room': (566, 80), 'ac_chest_room': (638, 80),
    'ov_moditlo_pool': (322, 82), 'ov_moditlo_gate': (323, 82), 'ov_moditlo_welcome': (322, 82),
    'ov_chest_pool': (322, 82), 'ov_chest_garden': (323, 82), 'ov_chest_lounge': (322, 82),
    'ds_kudu': (318, 82), 'ds_waterhole': (319, 82), 'ds_wildebeest': (318, 82),
    'ds_lion': (318, 82), 'ds_elephants': (319, 82), 'ds_potholes': (318, 82),
}
LOGOS = ['logo_h_white', 'logo_stacked_white', 'crest_white', 'logo_h_ink']

def enc_photo(key, maxw, q):
    im = Image.open(os.path.join(ASSETS, key + '.png')).convert('RGB')
    if maxw and im.width > maxw:
        im = im.resize((maxw, round(im.height * maxw / im.width)), Image.LANCZOS)
    buf = io.BytesIO(); im.save(buf, 'JPEG', quality=q, optimize=True, progressive=True)
    return 'data:image/jpeg;base64,' + base64.b64encode(buf.getvalue()).decode('ascii'), len(buf.getvalue())

def enc_png(key):
    data = open(os.path.join(ASSETS, key + '.png'), 'rb').read()
    return 'data:image/png;base64,' + base64.b64encode(data).decode('ascii'), len(data)

def main():
    tpl = open(TEMPLATE, encoding='utf-8').read()
    amap, report = {}, []
    for k, (w, q) in PHOTOS.items():
        amap[k], n = enc_photo(k, w, q); report.append((k, n))
    for k in LOGOS:
        amap[k], n = enc_png(k); report.append((k, n))
    # every slot in the template must exist in the map
    slots = set(re.findall(r'data-asset="([^"]+)"', tpl))
    missing = slots - set(amap)
    assert not missing, 'missing assets: %s' % missing
    marker_open, marker_close = '/*ASSET_MAP*/', '/*END_ASSET_MAP*/'
    assert tpl.count(marker_open) == 1 and tpl.count(marker_close) == 1
    pre, rest = tpl.split(marker_open); _, post = rest.split(marker_close)
    out = pre + marker_open + json.dumps(amap, separators=(',', ':')) + marker_close + post
    open(OUT, 'w', encoding='utf-8').write(out)
    total = sum(n for _, n in report)
    print('assets: %d  raw bytes: %d  output: %s (%d bytes)' % (len(report), total, os.path.basename(OUT), len(out.encode('utf-8'))))
    for k, n in sorted(report, key=lambda x: -x[1])[:6]:
        print('  %-24s %7d' % (k, n))

if __name__ == '__main__':
    main()
