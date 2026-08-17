#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
ASG Brand Guidelines — v1.3 generator.
Marker: ASG-BOOK-V13-20260816-R1

Committed to the repo (brand-books/build/) so future bumps never require
archaeology. Faithful reproduction of the 17 canonical v1.2 pages, plus the
v1.3 fold-ins. Run modes:

    python3 build_brandbook_v13.py --faithful   # 17 pages, exact v1.2 (checkpoint A)
    python3 build_brandbook_v13.py               # full v1.3 (28 pages, checkpoint B)

Page size 1280x720pt, matching the source. Fonts: Lora + Poppins (system TTF).
Crest lockups from ../assets/logos (the ASG_Design_System_Assets.zip payload).
Source of every value: ASG_Brand_Guidelines_v1.2.pdf + themes/ package.
"""
import os, sys
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

# ---------------------------------------------------------------- setup
FAITHFUL = "--faithful" in sys.argv
def EY(faith, v13):
    return faith if FAITHFUL else v13
HERE   = os.path.dirname(os.path.abspath(__file__))
LOGO   = os.path.join(HERE, "..", "assets", "logos")
if not os.path.isdir(LOGO):
    LOGO = "/home/claude/assets/logos"      # sandbox fallback
OUT    = os.path.join(HERE, ("ASG_Brand_Guidelines_v1.3_faithful.pdf"
                             if FAITHFUL else "ASG_Brand_Guidelines_v1.3.pdf"))
MARKER = "ASG-BOOK-V13-20260816-R1"

G = "/usr/share/fonts/truetype/google-fonts/"
pdfmetrics.registerFont(TTFont("Poppins-Light",  G+"Poppins-Light.ttf"))
pdfmetrics.registerFont(TTFont("Poppins",        G+"Poppins-Regular.ttf"))
pdfmetrics.registerFont(TTFont("Poppins-Medium", G+"Poppins-Medium.ttf"))
pdfmetrics.registerFont(TTFont("Poppins-Bold",   G+"Poppins-Bold.ttf"))
pdfmetrics.registerFont(TTFont("Lora",           G+"Lora-Variable.ttf"))
pdfmetrics.registerFont(TTFont("Lora-Italic",    G+"Lora-Italic-Variable.ttf"))

# ---------------------------------------------------------------- palette
INK      = HexColor("#171411")
CHARCOAL = HexColor("#2B2622")
SOFTCHAR = HexColor("#4A443C")
BRASS    = HexColor("#A8794B")
DEEPBRASS= HexColor("#8E6238")
SAND     = HexColor("#C39F77")
IVORY    = HexColor("#F6F1EA")
IVORYDIM = HexColor("#EFE7DB")
BONE     = HexColor("#B9AFA2")
GREEN    = HexColor("#4F6B51")
WHITE    = HexColor("#FFFFFF")
# muted chrome
MUT_L    = HexColor("#A89D8C")   # footer / faint on light
SUB_L    = SOFTCHAR              # sub-paragraph on light
MUT_D    = HexColor("#7A7164")   # footer on dark
SUB_D    = HexColor("#9A9085")   # sub-paragraph on dark
CARD_D   = HexColor("#1F1C17")   # raised card on ink
LINE_D   = HexColor("#2E2A24")   # hairline on dark

PW, PH = 1280, 720
LM     = 80                      # left margin
RM     = PW - 80                 # right edge

# ---------------------------------------------------------------- helpers
def tracked_width(text, font, size, tracking):
    w = 0.0
    for ch in text:
        w += pdfmetrics.stringWidth(ch, font, size) + tracking
    return w - tracking if text else 0.0

def tracked(c, x, y, text, font, size, tracking, color, align="l"):
    if align == "c":
        x -= tracked_width(text, font, size, tracking) / 2.0
    elif align == "r":
        x -= tracked_width(text, font, size, tracking)
    c.setFont(font, size); c.setFillColor(color)
    cx = x
    for ch in text:
        c.drawString(cx, y, ch)
        cx += pdfmetrics.stringWidth(ch, font, size) + tracking
    return x

def text(c, x, y, s, font, size, color, align="l"):
    c.setFont(font, size); c.setFillColor(color)
    if align == "c":   c.drawCentredString(x, y, s)
    elif align == "r": c.drawRightString(x, y, s)
    else:              c.drawString(x, y, s)

def _caph(font, size):
    try:    ch = pdfmetrics.getFont(font).face.capHeight
    except Exception: ch = 700
    return ch / 1000.0 * size

def vtext(c, x, cy, s, font, size, color, align="l"):
    """Draw text optically centred on vertical midline cy."""
    text(c, x, cy - _caph(font, size) / 2.0, s, font, size, color, align)

def vtracked(c, x, cy, s, font, size, tracking, color, align="l"):
    tracked(c, x, cy - _caph(font, size) / 2.0, s, font, size, tracking, color, align)

def wrap(c, x, y, s, font, size, color, leading, maxw, align="l"):
    c.setFont(font, size); c.setFillColor(color)
    words, line = s.split(), ""
    for w in words:
        t = (line + " " + w).strip()
        if pdfmetrics.stringWidth(t, font, size) <= maxw:
            line = t
        else:
            if align == "c":   c.drawCentredString(x, y, line)
            elif align == "r": c.drawRightString(x, y, line)
            else:              c.drawString(x, y, line)
            line = w; y -= leading
    if line:
        if align == "c":   c.drawCentredString(x, y, line)
        elif align == "r": c.drawRightString(x, y, line)
        else:              c.drawString(x, y, line)
    return y - leading

def img(c, path, x, y, w, h):
    c.drawImage(ImageReader(path), x, y, w, h, mask="auto",
                preserveAspectRatio=True, anchor="c")

import math
def draw_star4(c, cx, cy, s, color):
    c.setFillColor(color); r=s*0.5; ir=s*0.17
    p=c.beginPath(); pts=[]
    for k in range(8):
        ang=math.pi/2 - k*math.pi/4
        rad=r if k%2==0 else ir
        pts.append((cx+rad*math.cos(ang), cy+rad*math.sin(ang)))
    p.moveTo(*pts[0])
    for pt in pts[1:]: p.lineTo(*pt)
    p.close(); c.drawPath(p, fill=1, stroke=0)

def draw_check(c, cx, cy, s, color, w=1.7):
    c.setStrokeColor(color); c.setLineWidth(w); c.setLineCap(1); c.setLineJoin(1)
    p=c.beginPath()
    p.moveTo(cx-0.36*s, cy+0.02*s); p.lineTo(cx-0.08*s, cy-0.26*s); p.lineTo(cx+0.42*s, cy+0.30*s)
    c.drawPath(p, stroke=1, fill=0)

def draw_cross(c, cx, cy, s, color, w=1.7):
    c.setStrokeColor(color); c.setLineWidth(w); c.setLineCap(1)
    c.line(cx-0.30*s, cy-0.30*s, cx+0.30*s, cy+0.30*s)
    c.line(cx-0.30*s, cy+0.30*s, cx+0.30*s, cy-0.30*s)

_PG = {"n": 0}
def footer(c, section, dark):
    col = MUT_D if dark else MUT_L
    tracked(c, LM, 33, "AFRICAN SAFARI GROUP", "Poppins", 7.5, 2.2, col, "l")
    tracked(c, PW/2, 33, section, "Poppins", 7.5, 2.2, col, "c")
    text(c, RM, 33, f"{_PG['n']:02d} / {TOTAL}", "Poppins", 8, col, "r")

def light_header(c, eyebrow, title, sub=None, sub_w=1000):
    tracked(c, LM, PH-75, eyebrow, "Poppins-Medium", 11, 2.6, BRASS, "l")
    text(c, LM, PH-128, title, "Lora", 34, INK, "l")
    if sub:
        wrap(c, LM, PH-165, sub, "Poppins-Light", 12.5, SUB_L, 19, sub_w)

def dark_header(c, eyebrow, title, sub=None, sub_w=1000, title2=None):
    tracked(c, LM, PH-75, eyebrow, "Poppins-Medium", 11, 2.6, BRASS, "l")
    text(c, LM, PH-128, title, "Lora", 34, IVORY, "l")
    ty = PH-128
    if title2:
        ty -= 46
        text(c, LM, ty, title2, "Lora", 34, BRASS, "l")
    if sub:
        wrap(c, LM, ty-37, sub, "Poppins-Light", 12.5, SUB_D, 19, sub_w)

def page_bg(c, dark):
    c.setFillColor(INK if dark else IVORY)
    c.rect(0, 0, PW, PH, fill=1, stroke=0)

# ================================================================ PAGES
def p01_cover(c):
    page_bg(c, True)
    img(c, LOGO+"/logo-stacked-white.png", PW/2-100, 338, 200, 168)
    tracked(c, PW/2, 300, "BRAND GUIDELINES", "Poppins-Medium", 21, 7, BRASS, "c")
    c.setStrokeColor(HexColor("#4A4038")); c.setLineWidth(1)
    c.line(PW/2-118, 280, PW/2+118, 280)
    ver = "Version 1.0 · 2026" if FAITHFUL else "Version 1.3 · August 2026"
    text(c, PW/2, 256, ver, "Poppins-Light", 13, SUB_D, "c")
    footer(c, "COVER", True)

def p02_contents(c):
    page_bg(c, False)
    tracked(c, LM, PH-72, "AFRICAN SAFARI GROUP · BRAND GUIDELINES",
            "Poppins-Medium", 10, 2.4, BRASS, "l")
    text(c, LM, PH-118, "Contents", "Lora", 38, INK, "l")
    if FAITHFUL:
        items = [
            ("01","Brand Essence","Who we are, and why this matters"),
            ("02","Logo System","Primary lockup, clear space, minimum size"),
            ("03","Logo — Colour & Usage","Approved variations and misuse"),
            ("04","Sub-Brand Architecture","How property & PPC sites inherit the mark"),
            ("05","Colour Palette","Primary, accent and neutral system"),
            ("06","Colour in Practice","Ratios and application"),
            ("07","Typography","Lora & Poppins — hierarchy and rules"),
            ("08","Voice & Tone","How African Safari Group writes"),
            ("09","Photography Direction","What the lens should capture, and avoid"),
            ("10","Applications","Web, email, social, print in practice"),
        ]
    else:
        items = [
            ("01","Brand Essence","Who we are, and why this matters"),
            ("02","Logo System","Primary lockup, clear space, minimum size"),
            ("03","Logo — Colour & Usage","Approved variations and misuse"),
            ("04","Sub-Brand Architecture","How property & PPC sites inherit the mark"),
            ("05","Colour System","Palette, extended tones, contrast, ratios"),
            ("06","Typography","Lora & Poppins — hierarchy and rules"),
            ("07","Voice & Tone","How we write — words and formats"),
            ("08","Photography Direction","What the lens should capture, and avoid"),
            ("09","Applications","Web, email, social, print in practice"),
            ("10","Web & CMS System","Option 4 · Ink — patterns and lodge template"),
            ("11","Governance","Decisions of record & the pointer package"),
        ]
    half = (len(items) + 1) // 2
    colx = [LM, PW/2+10]; top = PH-225; rowh = 72
    for i,(n,t,s) in enumerate(items):
        col = 0 if i < half else 1
        x = colx[col]; y = top - (i % half) * rowh
        text(c, x, y, n, "Poppins-Light", 17, BRASS, "l")
        text(c, x+56, y, t, "Poppins-Medium", 14.5, INK, "l")
        text(c, x+56, y-20, s, "Poppins-Light", 11, MUT_L, "l")
    footer(c, "CONTENTS", False)

def p03_essence(c):
    page_bg(c, True)
    tracked(c, LM, PH-75, "01 · BRAND ESSENCE", "Poppins-Medium", 11, 2.6, BRASS, "l")
    text(c, LM, PH-130, "We are not a booking", "Lora", 40, IVORY, "l")
    text(c, LM, PH-178, "platform. We are the", "Lora", 40, IVORY, "l")
    text(c, LM, PH-226, "authority.", "Lora", 40, IVORY, "l")
    wrap(c, LM, PH-272,
         "African Safari Group exists to make the most consequential journey our "
         "clients will ever book feel inevitable, considered, and flawlessly executed "
         "— and every page they read should carry that same quiet confidence.",
         "Poppins-Light", 12.5, SUB_D, 19, 1040)
    pills = [
        ("01","Authority","Deep, reserve-level expertise. We know which lodge, which season, which guide — and say so plainly."),
        ("02","Craft","Every detail considered. Nothing default, nothing templated, nothing left to a stock theme."),
        ("03","Restraint","Confidence does not shout. Space, silence and precision do more than ornament ever could."),
        ("04","Trust","Consultation-led, never transactional. The brand should feel like a person, not a funnel."),
    ]
    cw = (RM - LM - 3*28) / 4.0; y = 150
    for i,(n,t,d) in enumerate(pills):
        x = LM + i*(cw+28)
        text(c, x, y+60, n, "Lora", 20, BRASS, "l")
        text(c, x, y+34, t, "Poppins-Medium", 14, IVORY, "l")
        wrap(c, x, y+12, d, "Poppins-Light", 10.5, SUB_D, 15.5, cw-4)
    footer(c, "BRAND ESSENCE", True)

def _logo_card(c, x, y, w, h, label, sub, dark_card=False):
    c.setStrokeColor(BONE if not dark_card else LINE_D); c.setLineWidth(1)
    c.setFillColor(WHITE if not dark_card else CARD_D)
    c.roundRect(x, y, w, h, 6, fill=1, stroke=1)
    tracked(c, x+w/2, y+52, label, "Poppins-Medium", 9.5, 2.2, MUT_L, "c")
    text(c, x+w/2, y+34, sub, "Poppins-Light", 10, MUT_L, "c")

def p04_mark(c):
    page_bg(c, False)
    light_header(c, "02 · LOGO SYSTEM", "The Mark",
        "Our crest — a single, abstracted lion mane rendered as radiating lines — is fixed. "
        "It is never redrawn, recoloured outside this system, or replaced. Two lockups cover every use case.",
        1080)
    y=60; h=440
    w1=330; x1=LM
    _logo_card(c, x1, y, w1, h, "STACKED", "Square formats, social avatars, covers")
    img(c, LOGO+"/logo-stacked-black.png", x1+w1/2-70, y+150, 140, 120)
    x2=x1+w1+28; w2=RM-x2
    _logo_card(c, x2, y, w2, h, "HORIZONTAL",
               "Website headers, email headers, wide formats — the preferred lockup for site navigation")
    img(c, LOGO+"/logo-horizontal-black.png", x2+w2/2-190, y+185, 380, 70)
    footer(c, "LOGO SYSTEM", False)

def p05_clearspace(c):
    page_bg(c, False)
    light_header(c, "02 · LOGO SYSTEM", "Clear Space & Minimum Size",
        "Maintain clear space equal to the height of the lion mark (x) on every side, for both "
        "lockups. No text or competing graphic may enter this zone.", 1040)
    y=60; h=330
    w1=430
    c.setStrokeColor(BONE); c.setLineWidth(1); c.setFillColor(WHITE)
    c.roundRect(LM, y, w1, h, 6, fill=1, stroke=1)
    # dashed clear-space box + stacked mark
    c.setDash(3,3); c.setStrokeColor(BONE)
    c.rect(LM+150, y+110, 130, 150, fill=0, stroke=1); c.setDash()
    img(c, LOGO+"/logo-stacked-black.png", LM+165, y+135, 100, 90)
    text(c, LM+215, y+92, "x", "Lora-Italic", 12, BRASS, "c")
    tracked(c, LM+w1/2, y+40, "STACKED — CLEAR SPACE", "Poppins-Medium", 9, 2, MUT_L, "c")
    x2=LM+w1+28; w2=760-w1  # matches source proportions roughly
    w2=430
    c.setStrokeColor(BONE); c.setFillColor(WHITE)
    c.roundRect(x2, y, w2, h, 6, fill=1, stroke=1)
    c.setDash(3,3); c.rect(x2+70, y+150, 290, 70, fill=0, stroke=1); c.setDash()
    img(c, LOGO+"/logo-horizontal-black.png", x2+90, y+168, 250, 46)
    text(c, x2+90, y+128, "x", "Lora-Italic", 12, BRASS, "c")
    tracked(c, x2+w2/2, y+40, "HORIZONTAL — CLEAR SPACE", "Poppins-Medium", 9, 2, MUT_L, "c")
    # right column min size
    rx = x2+w2+40
    text(c, rx, PH-290+120, "Minimum Size", "Poppins-Medium", 15, INK, "l")
    text(c, rx, PH-330+120, "32px digital", "Poppins-Medium", 12, INK, "l")
    text(c, rx, PH-350+120, "15mm print", "Poppins-Light", 11, MUT_L, "l")
    text(c, rx, PH-388+120, "20px digital", "Poppins-Medium", 12, INK, "l")
    text(c, rx, PH-408+120, "10mm print  (icon alone)", "Poppins-Light", 11, MUT_L, "l")
    c.setStrokeColor(BONE); c.setLineWidth(1); c.line(rx, PH-432+120, RM, PH-432+120)
    wrap(c, rx, PH-455+120, "Always export at 2x for digital and vector (SVG/EPS) for print.",
         "Poppins-Light", 11, SUB_L, 15, RM-rx)
    footer(c, "LOGO SYSTEM", False)

def p06_variations(c):
    page_bg(c, False)
    tracked(c, LM, PH-75, "03 · LOGO — COLOUR & USAGE", "Poppins-Medium", 11, 2.6, BRASS, "l")
    text(c, LM, PH-128, "Approved Variations", "Lora", 34, INK, "l")
    grounds = [("ON INK", INK, "white"), ("ON IVORY", IVORY, "black"),
               ("ON BRASS", BRASS, "white"), ("ON HERITAGE SAND", SAND, "white")]
    y=250; h=220; cw=170; gap=40; x0=LM
    for i,(lab,bg,mark) in enumerate(grounds):
        x=x0+i*(cw+gap)
        c.setFillColor(bg)
        if bg==IVORY: c.setStrokeColor(BONE); c.setLineWidth(1)
        else: c.setStrokeColor(bg)
        c.roundRect(x,y,cw,h,6,fill=1,stroke=1)
        img(c, LOGO+f"/logo-stacked-{mark}.png", x+cw/2-45, y+70, 90, 78)
        lc = WHITE if mark=="white" else INK
        if bg==SAND: lc=WHITE
        tracked(c, x+cw/2, y+22, lab, "Poppins-Medium", 8, 1.6, lc, "c")
    # icon-only, right
    ix=RM-260
    text(c, ix, PH-128, "Icon-Only Mark", "Poppins-Medium", 15, INK, "l")
    wrap(c, ix, PH-160, "Used alone — favicon, app icon, social avatar — where the brand is already established by context.",
         "Poppins-Light", 11, SUB_L, 15, 250)
    c.setFillColor(INK); c.roundRect(ix, y+40, 90, 90, 10, fill=1, stroke=0)
    img(c, LOGO+"/icon-only-white.png", ix+18, y+62, 54, 46)
    c.setFillColor(IVORY); c.setStrokeColor(BONE); c.setLineWidth(1)
    c.roundRect(ix+110, y+40, 90, 90, 10, fill=1, stroke=1)
    img(c, LOGO+"/icon-only-black.png", ix+128, y+62, 54, 46)
    # Never list
    ny=195
    text(c, LM, ny, "Never", "Poppins-Bold", 13, INK, "l")
    nevers = [
        "Recolour the mark outside Ink, Ivory, Brass, Heritage Sand or White",
        "Place it on a busy photograph without a dark scrim behind it",
        "Stretch, skew, rotate, or add shadows / bevels / outlines",
        "Reproduce the stacked lockup below 32px — use the icon alone",
    ]
    yy=ny-26
    for n in nevers:
        text(c, LM, yy, "—", "Poppins", 11, BRASS, "l")
        text(c, LM+20, yy, n, "Poppins-Light", 11, SOFTCHAR, "l")
        yy-=23
    footer(c, "LOGO USAGE", False)

def p07_subbrand(c):
    page_bg(c, True)
    tracked(c, LM, PH-75, "04 · SUB-BRAND ARCHITECTURE", "Poppins-Medium", 11, 2.6, BRASS, "l")
    text(c, LM, PH-128, "One Mark, Many Domains", "Lora", 34, IVORY, "l")
    wrap(c, LM, PH-165,
         "Reserve sites, PPC properties and direct-booking platforms keep the same icon, the same "
         "serif setting and the same rule-line treatment as the master lockup. Only the name beneath "
         "the icon changes, to match the domain — this is the only approved way to create a new lockup.",
         "Poppins-Light", 12.5, SUB_D, 19, 1120)
    cards=[("AFRICAN SAFARI","GROUP"),("SABI SAND GAME","RESERVE"),
           ("AMAKHALA","GAME RESERVE"),("SAFARIBOOKNOW","DIRECT BOOKING")]
    y=90; h=250; cw=(RM-LM-3*30)/4.0
    for i,(nm,sub) in enumerate(cards):
        x=LM+i*(cw+30)
        c.setFillColor(CARD_D); c.setStrokeColor(LINE_D); c.setLineWidth(1)
        c.roundRect(x,y,cw,h,6,fill=1,stroke=1)
        img(c, LOGO+"/icon-only-white.png", x+cw/2-26, y+150, 52, 44)
        text(c, x+cw/2, y+105, nm, "Lora", 15, IVORY, "c")
        c.setStrokeColor(BRASS); c.setLineWidth(1); c.line(x+cw/2-24, y+95, x+cw/2+24, y+95)
        tracked(c, x+cw/2, y+72, sub, "Poppins-Medium", 9, 2.2, SAND, "c")
    text(c, LM, 60, EY("Every sub-brand carries a small \u201cPart of African Safari Group\u201d endorsement line in its footer.","Every sub-brand carries a small \u201cPart of African Safari Group\u201d endorsement line in its footer \u2014 the CMS included."),
         "Poppins-Light", 11, SUB_D, "l")
    footer(c, "SUB-BRAND ARCHITECTURE", True)

def p08_palette(c):
    page_bg(c, False)
    light_header(c, "05 · COLOUR PALETTE", "A Darker, Richer System",
        "We are retiring the green / gold / grey set inherited from template defaults, in favour of "
        "one deep, near-black ground and a single refined brass accent — used the way a lodge uses "
        "brass fittings: with restraint.", 1080)
    sw=[("#171411",INK,"ASG Ink","Primary ground — heroes, headers, footers."),
        ("#2B2622",CHARCOAL,"Charcoal","Dark UI elements, secondary dark ground."),
        ("#4A443C",SOFTCHAR,"Soft Charcoal","Body copy on light backgrounds — easier long-form reading."),
        ("#A8794B",BRASS,"Safari Brass","Primary accent — CTAs, links, used sparingly."),
        ("#C39F77",SAND,"Heritage Sand","Legacy tone — tints & secondary accents only."),
        ("#F6F1EA",IVORY,"Warm Ivory","Light ground — editorial pages, email backgrounds."),
        ("#B9AFA2",BONE,"Bone","Borders & dividers on light ground.")]
    n=len(sw); gap=18; cw=(RM-LM-(n-1)*gap)/n; y=150; h=250
    for i,(hexv,col,name,desc) in enumerate(sw):
        x=LM+i*(cw+gap)
        c.setFillColor(col)
        if col==IVORY: c.setStrokeColor(BONE); c.setLineWidth(1)
        else: c.setStrokeColor(col)
        c.roundRect(x,y,cw,h,4,fill=1,stroke=1)
        lc = WHITE if col in (INK,CHARCOAL,SOFTCHAR,BRASS) else INK
        tracked(c, x+12, y+h-24, hexv, "Poppins-Medium", 9.5, 0.5, lc, "l")
        text(c, x, y-18, name, "Poppins-Medium", 12, INK, "l")
        wrap(c, x, y-38, desc, "Poppins-Light", 9.5, MUT_L, 13, cw+6)
    footer(c, "COLOUR PALETTE", False)

def p09_practice(c):
    page_bg(c, False)
    light_header(c, EY("06 · COLOUR IN PRACTICE","05 · COLOUR IN PRACTICE"), "Use Brass Like Brass Fittings",
        "If brass is everywhere it reads as cheap gold rather than a refined accent. This ratio "
        "governs every layout — website, email, slide or brochure.", 620)
    # ratio bar
    bx=LM; by=250; bw=620; bh=54
    segs=[("60%",0.60,INK,WHITE),("30%",0.30,IVORYDIM,INK),("10%",0.10,BRASS,WHITE)]
    x=bx
    for lab,frac,col,tc in segs:
        w=bw*frac
        c.setFillColor(col)
        if col==IVORYDIM: c.setStrokeColor(BONE); c.setLineWidth(1); c.rect(x,by,w,bh,fill=1,stroke=1)
        else: c.rect(x,by,w,bh,fill=1,stroke=0)
        text(c, x+w/2, by+bh/2-4, lab, "Poppins-Medium", 11, tc, "c")
        x+=w
    rows=[("Ink / Charcoal — 60%","Dominant ground: nav, headers, backgrounds, body copy."),
          ("Ivory / White — 30%","Breathing room: editorial sections, cards, negative space."),
          ("Brass — 10%","Signal only: primary CTA, key numerals, active states, dividers.")]
    yy=by-40
    for t,d in rows:
        text(c, bx, yy, t, "Poppins-Medium", 12, INK, "l")
        text(c, bx, yy-16, d, "Poppins-Light", 10.5, MUT_L, "l"); yy-=52
    # In Practice right
    rx=760
    text(c, rx, PH-215, "In Practice", "Poppins-Medium", 13, INK, "l")
    # correct card (dark)
    cy=PH-370
    c.setFillColor(INK); c.roundRect(rx, cy, 320, 110, 6, fill=1, stroke=0)
    text(c, rx+22, cy+70, "Plan My Safari", "Lora", 16, IVORY, "l")
    c.setFillColor(BRASS); c.roundRect(rx+22, cy+26, 120, 30, 4, fill=1, stroke=0)
    vtracked(c, rx+82, cy+41, "ENQUIRE NOW", "Poppins-Medium", 8.5, 1.2, WHITE, "c")
    text(c, rx, cy-18, "Correct — one brass call-to-action against ink.", "Poppins-Light", 10, MUT_L, "l")
    # incorrect card (brass ground)
    cy2=cy-160
    c.setFillColor(BRASS); c.roundRect(rx, cy2, 320, 110, 6, fill=1, stroke=0)
    text(c, rx+22, cy2+70, "Plan My Safari", "Lora", 16, WHITE, "l")
    c.setFillColor(INK); c.roundRect(rx+22, cy2+26, 120, 30, 4, fill=1, stroke=0)
    vtracked(c, rx+82, cy2+41, "ENQUIRE NOW", "Poppins-Medium", 8.5, 1.2, WHITE, "c")
    text(c, rx, cy2-18, "Incorrect — brass as a dominant ground reads dated.", "Poppins-Light", 10, DEEPBRASS, "l")
    footer(c, "COLOUR IN PRACTICE", False)

def p10_type(c):
    page_bg(c, False)
    light_header(c, EY("07 · TYPOGRAPHY","06 · TYPOGRAPHY"), "Lora & Poppins",
        "We are retiring Roboto / Barlow. Lora is a refined serif that echoes the warmth of the "
        "wordmark for headlines; Poppins is a clean geometric sans for body copy, navigation and UI.",
        1080)
    # specimens
    text(c, LM, 300, "Aa", "Lora", 72, INK, "l")
    text(c, LM, 268, "Lora — Display & Headlines", "Poppins-Medium", 12, INK, "l")
    text(c, LM, 250, "H1/H2, pull quotes, lodge & destination names", "Poppins-Light", 10.5, MUT_L, "l")
    text(c, 460, 300, "Aa", "Poppins-Light", 72, BRASS, "l")
    text(c, 460, 268, "Poppins — Body & UI", "Poppins-Medium", 12, INK, "l")
    text(c, 460, 250, "Body copy, navigation, buttons, forms, captions", "Poppins-Light", 10.5, MUT_L, "l")
    # specimen block
    c.setStrokeColor(BONE); c.setLineWidth(1); c.line(LM, 210, RM, 210)
    rows=[("H1","Your Africa, Considered.","Lora",22,INK),
          ("EYEBROW","BIG FIVE · MALARIA-FREE","tracked",11,BRASS),
          ("BODY",EY("Real rates, real availability — no quote cycle, no markup at checkout.","Best price guarantee on contracted rates, with no booking fees."),"Poppins",12,SOFTCHAR),
          ("CAPTION","From R 14,500 pp / night · 5 lodges available","Poppins-Light",11,MUT_L)]
    yy=180
    for lab,val,font,size,col in rows:
        tracked(c, LM, yy, lab, "Poppins-Medium", 8.5, 1.6, MUT_L, "l")
        if font=="tracked":
            tracked(c, LM+120, yy, val, "Poppins-Medium", size, 2, col, "l")
        else:
            text(c, LM+120, yy, val, font, size, col, "l")
        yy-=34
    footer(c, "TYPOGRAPHY", False)

def p11_typerules(c):
    page_bg(c, True)
    tracked(c, LM, PH-75, EY("07 · TYPOGRAPHY — RULES","06 · TYPOGRAPHY — RULES"), "Poppins-Medium", 11, 2.6, BRASS, "l")
    text(c, LM, PH-128, "How the Hierarchy Behaves", "Lora", 34, IVORY, "l")
    rules=[("Headlines stay short.","Six to nine words. If it needs more, it's body copy, not a headline."),
           ("Never set Poppins in all-caps below 9pt.","Tracked caps work for eyebrows and labels — not body text."),
           ("One serif moment per screen.","A single Lora headline or pull quote per view keeps it editorial."),
           ("Line length: 60–75 characters.","Body copy never spans the full width of a layout."),
           ("Numerals are always Poppins.","Prices, dates and stats stay Poppins-Medium, even inside serif paragraphs.")]
    if not FAITHFUL:
        rules.append(("The PriceCard From-price is the one exception.",
                      "A lodge page's hero From-price may set its numeral in Lora — the system's sole serif-numeral moment. Nowhere else."))
    rowstep = 66 if FAITHFUL else 56
    yy=PH-215
    for t,d in rules:
        text(c, LM, yy, "—", "Poppins", 13, BRASS, "l")
        text(c, LM+30, yy, t, "Poppins-Medium", 15, IVORY, "l")
        wrap(c, LM+30, yy-22, d, "Poppins-Light", 11, SUB_D, 15, 900); yy-=rowstep
    footer(c, "TYPOGRAPHY RULES", True)

def p12_voice(c):
    page_bg(c, False)
    tracked(c, LM, PH-75, EY("08 · VOICE & TONE","07 · VOICE & TONE"), "Poppins-Medium", 11, 2.6, BRASS, "l")
    text(c, LM, PH-128, "Authoritative, Warm,", "Lora", 34, INK, "l")
    salesy = "Never Salesy." if FAITHFUL else "Never Salesy."
    text(c, LM, PH-170, salesy, "Lora", 34, BRASS, "l")
    wrap(c, LM, PH-208,
         "We write like the specialist a client is grateful to have found — confident because we "
         "know the reserves personally, warm because this is the trip of their life, restrained "
         "because real authority never needs to shout.", "Poppins-Light", 12, SUB_L, 18, 640)
    bullets = [
        "Specific beats superlative — name the lodge, the season, the sighting odds, not \u201cunforgettable.\u201d",
        "Declarative sentences. Confidence reads in short, certain statements.",
        EY("Earn exclamation points rarely, if ever. Calm confidence outperforms enthusiasm.","No exclamation points. No emoji. Calm confidence outperforms enthusiasm."),
        "Speak as \u201cwe\u201d, not in the third person, in client-facing copy.",
        "Lead with what the guest will experience, then support it with our expertise.",
    ]
    yy=PH-290
    for b in bullets:
        text(c, LM, yy, "—", "Poppins", 11, BRASS, "l")
        yy = wrap(c, LM+20, yy, b, "Poppins-Light", 11, SOFTCHAR, 15, 600) - 6
    # card
    cx=780; cy=120; cwid=RM-cx; cht=300
    c.setFillColor(WHITE); c.setStrokeColor(BONE); c.setLineWidth(1)
    c.roundRect(cx, cy, cwid, cht, 6, fill=1, stroke=1)
    text(c, cx+26, cy+cht-40, "Instead of...", "Poppins-Medium", 10.5, MUT_L, "l")
    wrap(c, cx+26, cy+cht-66, "\u201cExperience the adventure of a lifetime on this dream safari!\u201d",
         "Lora-Italic", 14, SOFTCHAR, 20, cwid-52)
    c.setStrokeColor(BRASS); c.setLineWidth(1); c.line(cx+26, cy+130, cx+80, cy+130)
    text(c, cx+26, cy+108, "Write...", "Poppins-Medium", 10.5, MUT_L, "l")
    wrap(c, cx+26, cy+84, "\u201cSabi Sand offers the highest leopard-sighting density in Africa. "
         "Three nights gives you the best odds.\u201d", "Poppins-Medium", 13, INK, 19, cwid-52)
    footer(c, "VOICE & TONE", False)

def p13_photo(c):
    page_bg(c, True)
    dark_header(c, EY("09 · PHOTOGRAPHY DIRECTION","08 · PHOTOGRAPHY DIRECTION"), "Cinematic. Restrained.",
        "Photography carries more of this brand than any single design element. It should feel "
        "closer to Aman or Singita than a generic OTA carousel — vast landscapes, deliberate light, "
        "one clear subject, room to breathe.", 1120, title2="Never a Stock Grid.")
    seek=["Golden hour & dramatic natural light","One clear subject — animal, lodge, or guest moment",
          "Wide environmental shots with real negative space","Authentic guest moments, genuine emotion",
          "Consistent warm, slightly desaturated grade"]
    avoid=["Bright, flat midday lighting","Crowded collage / grid layouts of many small images",
           "Visible stock-site watermarks or generic agency stock","Oversaturated neon-green grass or orange HDR",
           "Text crammed on top of busy image detail"]
    y0 = 185 if FAITHFUL else 430
    tracked(c, LM, y0, "SEEK", "Poppins-Medium", 10, 2.4, BRASS, "l")
    yy=y0-28
    for s in seek:
        text(c, LM, yy, "+", "Poppins", 11, GREEN, "l")
        text(c, LM+20, yy, s, "Poppins-Light", 11, SUB_D, "l"); yy-=25
    rx=PW/2
    tracked(c, rx, y0, "AVOID", "Poppins-Medium", 10, 2.4, BRASS, "l")
    yy=y0-28
    for s in avoid:
        text(c, rx, yy, "–", "Poppins", 11, DEEPBRASS, "l")
        text(c, rx+20, yy, s, "Poppins-Light", 11, SUB_D, "l"); yy-=25
    if not FAITHFUL:
        c.setStrokeColor(LINE_D); c.setLineWidth(1); c.line(LM, 118, RM, 118)
        tracked(c, LM, 96, "SOURCING", "Poppins-Medium", 9, 2.4, BRASS, "l")
        wrap(c, LM, 74, "All production photography comes from ASG's Pimcore infrastructure "
             "(pim.africansafarigroup.com, amakhala.com). The brand book carries no photography; "
             "real imagery must be supplied to finish any kit or page.",
             "Poppins-Light", 10.5, MUT_D, 15, RM-LM)
    footer(c, "PHOTOGRAPHY DIRECTION", True)

def p14_web(c):
    page_bg(c, False)
    tracked(c, LM, PH-75, EY("10 · APPLICATIONS","09 · APPLICATIONS"), "Poppins-Medium", 11, 2.6, BRASS, "l")
    text(c, LM, PH-128, "Web Hero", "Lora", 34, INK, "l")
    # dark hero mock
    hx=LM; hy=90; hw=RM-LM; hh=430
    c.setFillColor(INK); c.roundRect(hx,hy,hw,hh,8,fill=1,stroke=0)
    img(c, LOGO+"/logo-horizontal-white.png", hx+30, hy+hh-60, 150, 28)
    nav=["DESTINATIONS","EXPERIENCES","ACCOMMODATION","ABOUT"]
    nxx=hx+hw-40
    for item in reversed(nav):
        nxx-=tracked_width(item,"Poppins-Medium",8.5,1.4)+34
        tracked(c, nxx, hy+hh-52, item, "Poppins-Medium", 8.5, 1.4, HexColor("#CFC7BB"), "l")
    text(c, hx+40, hy+230, "Your Africa,", "Lora", 46, IVORY, "l")
    text(c, hx+40, hy+180, "Considered.", "Lora", 46, IVORY, "l")
    wrap(c, hx+40, hy+140, "Tailor-made five-star safaris across Southern & East Africa, designed by "
         "specialists who have stayed at every lodge they recommend.", "Poppins-Light", 13, HexColor("#CFC7BB"), 19, 560)
    c.setFillColor(BRASS); c.roundRect(hx+40, hy+70, 150, 34, 4, fill=1, stroke=0)
    vtracked(c, hx+115, hy+87, "PLAN MY SAFARI", "Poppins-Medium", 9, 1.4, WHITE, "c")
    footer(c, "APPLICATIONS — WEB", False)

def p15_email(c):
    page_bg(c, False)
    tracked(c, LM, PH-75, EY("10 · APPLICATIONS","09 · APPLICATIONS"), "Poppins-Medium", 11, 2.6, BRASS, "l")
    text(c, LM, PH-128, "Email & Social", "Lora", 34, INK, "l")
    # email card
    ex=LM; ey=90; ew=560; eh=440
    c.setFillColor(WHITE); c.setStrokeColor(BONE); c.setLineWidth(1)
    c.roundRect(ex,ey,ew,eh,6,fill=1,stroke=1)
    c.setFillColor(INK); c.roundRect(ex,ey+eh-90,ew,90,6,fill=1,stroke=0)
    c.setFillColor(INK); c.rect(ex,ey+eh-90,ew,40,fill=1,stroke=0)
    img(c, LOGO+"/logo-stacked-white.png", ex+ew/2-30, ey+eh-80, 60, 52)
    text(c, ex+30, ey+eh-140, "Your Sabi Sand Itinerary", "Lora", 20, INK, "l")
    text(c, ex+30, ey+eh-166, "Hi Sarah — based on our call, I've shortlisted three lodges for your October dates.",
         "Poppins-Light", 11, SOFTCHAR, "l")
    c.setFillColor(IVORYDIM); c.roundRect(ex+30, ey+120, ew-60, 130, 4, fill=1, stroke=0)
    text(c, ex+50, ey+210, "Londolozi Founders Camp", "Poppins-Medium", 13, INK, "l")
    text(c, ex+50, ey+190, "From R 18,200 pp / night", "Poppins-Light", 11, MUT_L, "l")
    c.setFillColor(BRASS); c.roundRect(ex+30, ey+40, 150, 34, 4, fill=1, stroke=0)
    vtracked(c, ex+105, ey+57, "VIEW ITINERARY", "Poppins-Medium", 9, 1.2, WHITE, "c")
    # social card (dark)
    sx=ex+ew+40; sw=RM-sx
    c.setFillColor(INK); c.roundRect(sx,ey,sw,eh,6,fill=1,stroke=0)
    img(c, LOGO+"/icon-only-white.png", sx+30, ey+eh-95, 60, 50)
    tracked(c, sx+30, ey+195, "LEOPARD CAPITAL", "Poppins-Medium", 10, 2.2, BRASS, "l")
    text(c, sx+30, ey+165, "OF AFRICA", "Lora", 28, IVORY, "l")
    text(c, sx+30, ey+70, "@africansafarigroup", "Poppins-Light", 11, SUB_D, "l")
    footer(c, "APPLICATIONS — EMAIL & SOCIAL", False)

def p16_print(c):
    page_bg(c, True)
    tracked(c, LM, PH-75, EY("10 · APPLICATIONS","09 · APPLICATIONS"), "Poppins-Medium", 11, 2.6, BRASS, "l")
    text(c, LM, PH-128, "Brochure & Stationery", "Lora", 34, IVORY, "l")
    # business card (light)
    bx=LM; by=230; bw=380; bh=200
    c.setFillColor(IVORY); c.roundRect(bx,by,bw,bh,6,fill=1,stroke=0)
    img(c, LOGO+"/logo-stacked-black.png", bx+30, by+bh-70, 60, 52)
    text(c, bx+30, by+90, "RIAAN AGGENBAG", "Poppins-Bold", 12, INK, "l")
    text(c, bx+30, by+72, "Chief Executive Officer", "Poppins-Light", 10.5, SOFTCHAR, "l")
    c.setStrokeColor(BONE); c.setLineWidth(1); c.line(bx+30, by+52, bx+bw-30, by+52)
    text(c, bx+30, by+32, "+27 21 200 5960 · africansafarigroup.com", "Poppins-Light", 10, MUT_L, "l")
    text(c, bx, by-24, "Business Card", "Poppins-Medium", 11, IVORY, "l")
    # brochure cover (dark, bordered)
    cx=560; cw=280; cy=110; ch=380
    c.setFillColor(CARD_D); c.setStrokeColor(LINE_D); c.setLineWidth(1)
    c.roundRect(cx,cy,cw,ch,6,fill=1,stroke=1)
    img(c, LOGO+"/logo-stacked-white.png", cx+cw/2-35, cy+ch-90, 70, 60)
    text(c, cx+cw/2, cy+ch-140, "SABI SAND", "Lora", 22, IVORY, "c")
    tracked(c, cx+cw/2, cy+ch-168, "A GUEST JOURNAL", "Poppins-Medium", 9, 2.4, BRASS, "c")
    c.setStrokeColor(HexColor("#4A4038")); c.line(cx+cw/2-60, cy+50, cx+cw/2+60, cy+50)
    tracked(c, cx+cw/2, cy+30, "AFRICAN SAFARI GROUP", "Poppins-Medium", 7.5, 2, MUT_D, "c")
    text(c, cx, cy-24, "Brochure Cover", "Poppins-Medium", 11, IVORY, "l")
    # right note
    nx=880
    wrap(c, nx, PH-215, "Print follows the same rules as digital: ink ground, one brass signal, "
         "generous margins, and the mark exactly as specified.", "Poppins-Light", 12, SUB_D, 18, RM-nx)
    wrap(c, nx, PH-300, "Any designer — internal or external — should be able to build a correct piece "
         + EY("from this book alone, without needing to ask what's allowed.",
              "from this book and the /themes/ package, without needing to ask what's allowed."),
         "Poppins-Light", 11, MUT_D, 16, RM-nx)
    footer(c, "APPLICATIONS — PRINT", True)

def p17_closing(c):
    page_bg(c, True)
    img(c, LOGO+"/logo-stacked-white.png", PW/2-90, 430, 180, 155)
    text(c, PW/2, 410, "AFRICAN SAFARI GROUP", "Lora", 26, IVORY, "c")
    c.setStrokeColor(HexColor("#4A4038")); c.setLineWidth(1); c.line(PW/2-115, 388, PW/2+115, 388)
    text(c, PW/2, 362, "Brand custodian: Riaan Aggenbag, CEO", "Poppins-Light", 12, SUB_D, "c")
    text(c, PW/2, 340, "Brand questions or asset requests: bookings@africansafarigroup.com",
         "Poppins-Light", 12, SUB_D, "c")
    if not FAITHFUL:
        tracked(c, PW/2, 250, "VERSION HISTORY", "Poppins-Medium", 9, 2.6, BRASS, "c")
        hist=[("v1.0 · 2026","Initial Ink Edition — 17 pages."),
              ("v1.1 / v1.2 · Aug 2026","Soft Charcoal body tone; crest crop fixed; canonical."),
              ("v1.3 · August 2026","Option 4 formalised; extended colour, contrast, voice and the Web & CMS system folded in; pale gold retired.")]
        yy=228
        for v,d in hist:
            text(c, PW/2-300, yy, v, "Poppins-Medium", 10.5, IVORY, "l")
            text(c, PW/2-90, yy, d, "Poppins-Light", 10, SUB_D, "l"); yy-=22
        text(c, PW/2, 150, "Reflects design-tokens.json + THEME-SPEC.md · /themes/ package",
             "Poppins-Light", 9.5, MUT_D, "c")
        tracked(c, PW/2, 128, "ASG-BOOK-V13-20260816-R1", "Poppins", 8, 1.4, MUT_D, "c")
    footer(c, "CLOSING", True)

# ================================================================ NEW v1.3 PAGES

def n_colour_extended(c):
    page_bg(c, False)
    light_header(c, "05 · COLOUR SYSTEM", "Extended System & Retired Tones",
        "Beyond the seven core tones, the system carries a small set of derived values — and one "
        "retirement. Every value here also lives in design-tokens.json.", 1080)
    sw=[("#8E6238",DEEPBRASS,"Deep Brass","Press/active state; the sub-12px solid-fill exception.",WHITE),
        ("#4F6B51",GREEN,"Badge Green","Status + savings — 'Most drives', 'Included', SAVE chips. White text.",WHITE),
        ("#EFE7DB",IVORYDIM,"Ivory Dim","Secondary light surface, hairlines on ivory.",INK),
        ("#FFFFFF",WHITE,"White","Raised light surface; text on brass / green / ink.",INK)]
    n=len(sw); gap=22; cw=(720-(n-1)*gap)/n; y=250; h=210
    for i,(hexv,col,name,desc,tc) in enumerate(sw):
        x=LM+i*(cw+gap)
        c.setFillColor(col)
        if col in (IVORYDIM,WHITE): c.setStrokeColor(BONE); c.setLineWidth(1)
        else: c.setStrokeColor(col)
        c.roundRect(x,y,cw,h,4,fill=1,stroke=1)
        tracked(c, x+12, y+h-24, hexv, "Poppins-Medium", 9.5, 0.5, tc, "l")
        text(c, x, y-18, name, "Poppins-Medium", 12, INK, "l")
        wrap(c, x, y-38, desc, "Poppins-Light", 9.5, MUT_L, 13, cw+8)
    # right column: retired + rules
    rx=880
    tracked(c, rx, PH-215, "RETIRED", "Poppins-Medium", 10, 2.4, BRASS, "l")
    # dead swatch with strike
    c.setFillColor(HexColor("#C8A96E")); c.roundRect(rx, PH-300, 60, 60, 4, fill=1, stroke=0)
    c.setStrokeColor(HexColor("#B5524A")); c.setLineWidth(2); c.line(rx, PH-300, rx+60, PH-240)
    text(c, rx+76, PH-258, "#C8A96E  Pale gold", "Poppins-Medium", 11, INK, "l")
    wrap(c, rx+76, PH-276, "Retired 13 Aug 2026 with Option 3. Never used, any surface, any size. Its dark-text rule died with it.",
         "Poppins-Light", 9.5, MUT_L, 13, RM-rx-76)
    c.setStrokeColor(BONE); c.setLineWidth(1); c.line(rx, PH-330, RM, PH-330)
    for i,ln in enumerate(["No new accent colours, ever — Safari Brass is the only accent.",
                           "Feedback tones stay warm and muted, never neon.",
                           "One colour system across brand book, web and email."]):
        text(c, rx, PH-356-i*22, "—", "Poppins", 10, BRASS, "l")
        text(c, rx+18, PH-356-i*22, ln, "Poppins-Light", 10, SOFTCHAR, "l")
    footer(c, "COLOUR SYSTEM", False)

def n_colour_contrast(c):
    page_bg(c, False)
    light_header(c, "05 · COLOUR SYSTEM", "Contrast Rules",
        "Hard-won and non-negotiable. These preserve legibility and keep the brass reading as a "
        "fitting, not a flood.", 760)
    rules=[("Brass takes white text — always.","In both themes. No exceptions."),
           ("Sub-12px brass fills step to Deep Brass #8E6238.","The fill adapts to hold white-text contrast; the text stays white."),
           ("Hover lighter, press darker.","Brass-400 on hover, Brass-600 on press. No shrink on press."),
           ("Sand & pale tones take dark/ink text.","Never white on Heritage Sand at small sizes."),
           ("Links on light grounds use Deep Brass.","Base brass is too weak on ivory for a link."),
           ("Muted #A89D8C-family is never body text on light.","Decorative captions only; body uses #7A7166 or stronger.")]
    yy=PH-205
    for t,d in rules:
        text(c, LM, yy, "—", "Poppins", 12, BRASS, "l")
        text(c, LM+28, yy, t, "Poppins-Medium", 13.5, INK, "l")
        text(c, LM+28, yy-19, d, "Poppins-Light", 10.5, SUB_L, "l"); yy-=58
    # right: pairings chips
    rx=760
    tracked(c, rx, PH-205, "APPROVED PAIRINGS", "Poppins-Medium", 10, 2.4, BRASS, "l")
    pairs=[("Brass",BRASS,WHITE,"White"),("Deep Brass",DEEPBRASS,WHITE,"White (sub-12px)"),
           ("Badge Green",GREEN,WHITE,"White"),("Heritage Sand",SAND,INK,"Ink"),
           ("Ink",INK,IVORY,"Warm Ivory"),("Warm Ivory",IVORY,SOFTCHAR,"Soft Charcoal")]
    yy=PH-238
    for name,bg,tc,tlab in pairs:
        c.setFillColor(bg)
        if bg==IVORY: c.setStrokeColor(BONE); c.setLineWidth(1); c.roundRect(rx,yy-20,150,30,4,fill=1,stroke=1)
        else: c.roundRect(rx,yy-20,150,30,4,fill=1,stroke=0)
        text(c, rx+12, yy-12, "Aa "+name, "Poppins-Medium", 10.5, tc, "l")
        text(c, rx+165, yy-12, tlab+" text", "Poppins-Light", 10, SOFTCHAR, "l"); yy-=44
    footer(c, "COLOUR SYSTEM", False)

def _pill(c, x, y, w, h, bg, border, label, tc, tracking=1.4, size=8.5, radius=22, blur=False):
    c.setFillColor(bg)
    if border: c.setStrokeColor(border); c.setLineWidth(1); c.roundRect(x,y,w,h,radius,fill=1,stroke=1)
    else: c.roundRect(x,y,w,h,radius,fill=1,stroke=0)
    vtracked(c, x+w/2, y+h/2, label, "Poppins-Medium", size, tracking, tc, "c")

def n_patterns_1(c):
    page_bg(c, True)
    dark_header(c, "10 · WEB & CMS SYSTEM", "Components — Hero & Signal",
        "Option 4 · Ink Edition ships seven web patterns. Each lives in the design-system export "
        "with a card, JSX, a types contract and a usage prompt. Four of them here.", 1120)
    # FactPill
    tracked(c, LM, PH-215, "FACTPILL", "Poppins-Medium", 9, 2.2, BRASS, "l")
    text(c, LM, PH-234, "Frosted hero stat badges — never bare text on photos.", "Poppins-Light", 10, SUB_D, "l")
    for i,lab in enumerate(["BIG FIVE","MALARIA-FREE","4 LODGES"]):
        px=LM+i*150
        _pill(c, px, PH-290, 138, 34, HexColor("#26221D"), HexColor("#4A4038"), "    "+lab, IVORY, 1.2, 8.5, 17)
        draw_star4(c, px+24, PH-290+17, 9, BRASS)
    # SightingsBadge
    tracked(c, LM, PH-330, "SIGHTINGSBADGE", "Poppins-Medium", 9, 2.2, BRASS, "l")
    text(c, LM, PH-349, "Honest probability levels — never a promise.", "Poppins-Light", 10, SUB_D, "l")
    sb=[("MOST DRIVES",GREEN,WHITE),("VERY OFTEN",BRASS,WHITE),("OFTEN",SAND,INK),("RARELY",CHARCOAL,IVORY)]
    for i,(lab,bg,tc) in enumerate(sb):
        _pill(c, LM+i*128, PH-400, 118, 30, bg, None, lab, tc, 1.2, 8, 4)
    # MonthGrid
    tracked(c, LM, PH-440, "MONTHGRID", "Poppins-Medium", 9, 2.2, BRASS, "l")
    text(c, LM, PH-459, "Peak = brass+white · Good = sand+ink · Fair = bone+ink.", "Poppins-Light", 10, SUB_D, "l")
    months=["J","F","M","A","M","J","J","A","S","O","N","D"]
    states=[2,2,1,1,0,0,0,0,1,1,2,2]  # 0 fair 1 good 2 peak
    cellw=44
    for i,(m,st) in enumerate(zip(months,states)):
        x=LM+i*(cellw+6); y=PH-515
        bg=[BONE,SAND,BRASS][st]; tc=[INK,INK,WHITE][st]
        c.setFillColor(bg); c.roundRect(x,y,cellw,40,3,fill=1,stroke=0)
        text(c, x+cellw/2, y+14, m, "Poppins-Medium", 12, tc, "c")
    # ValuePropBar
    tracked(c, LM, PH-560, "VALUEPROPBAR", "Poppins-Medium", 9, 2.2, BRASS, "l")
    vy=PH-620; vw=(RM-LM)/4.0
    c.setFillColor(CHARCOAL); c.roundRect(LM,vy,RM-LM,44,4,fill=1,stroke=0)
    for i,lab in enumerate(["CURRENT SPECIALS","BEST PRICE","PLAN WITH A CONSULTANT","EXPERT SUPPORT"]):
        vtracked(c, LM+i*vw+vw/2, vy+22, lab, "Poppins-Medium", 8.5, 1.6, BRASS, "c")
    footer(c, "WEB & CMS SYSTEM", True)

def n_patterns_2(c):
    page_bg(c, True)
    dark_header(c, "10 · WEB & CMS SYSTEM", "Components — Booking & Proof",
        "The remaining core patterns, plus the two page behaviours the CMS depends on.", 1120)
    # PriceCard
    tracked(c, LM, PH-215, "PRICECARD", "Poppins-Medium", 9, 2.2, BRASS, "l")
    c.setFillColor(CARD_D); c.setStrokeColor(LINE_D); c.setLineWidth(1)
    c.roundRect(LM, PH-390, 300, 150, 6, fill=1, stroke=1)
    tracked(c, LM+22, PH-262, "FROM", "Poppins-Medium", 8, 2, SAND, "l")
    text(c, LM+22, PH-300, "R 14,500", "Lora", 30, IVORY, "l")   # the serif-numeral moment
    text(c, LM+150, PH-296, "pp / night", "Poppins-Light", 10, SUB_D, "l")
    c.setFillColor(BRASS); c.roundRect(LM+22, PH-345, 256, 34, 4, fill=1, stroke=0)
    vtracked(c, LM+150, PH-328, "PLAN WITH A CONSULTANT", "Poppins-Medium", 8.5, 1.4, WHITE, "c")
    text(c, LM+22, PH-372, "No payment taken online.", "Poppins-Light", 9.5, MUT_D, "l")
    text(c, LM, PH-410, "Hero booking sidebar. The From-price is the one serif-numeral exception.",
         "Poppins-Light", 10, SUB_D, "l")
    # EnquiryChecklist
    ex=470
    tracked(c, ex, PH-215, "ENQUIRYCHECKLIST", "Poppins-Medium", 9, 2.2, BRASS, "l")
    for i,ln in enumerate(["Best price guarantee on contracted rates","No booking fees, ever",
                           "A specialist who has stayed at the lodge"]):
        cy=PH-250-i*30
        c.setStrokeColor(BRASS); c.setLineWidth(1.4); c.circle(ex+8, cy+4, 8, fill=0, stroke=1)
        draw_check(c, ex+8, cy+4, 11, BRASS)
        text(c, ex+26, cy, ln, "Poppins-Light", 11, IVORY, "l")
    text(c, ex, PH-360, "The why-enquire-direct panel — brass check circles.", "Poppins-Light", 10, SUB_D, "l")
    # AccreditationRow
    tracked(c, ex, PH-400, "ACCREDITATIONROW", "Poppins-Medium", 9, 2.2, BRASS, "l")
    accr=["SATSA MEMBER 3099","ATTA","CAPE TOWN TOURISM","TRIPADVISOR"]
    for i,a in enumerate(accr):
        _pill(c, ex+i*135, PH-440, 125, 28, INK, HexColor("#4A4038"), a, HexColor("#CFC7BB"), 1.0, 7.5, 14)
    # Behaviours
    c.setStrokeColor(LINE_D); c.setLineWidth(1); c.line(LM, PH-475, RM, PH-475)
    tracked(c, LM, PH-500, "BEHAVIOURS", "Poppins-Medium", 9, 2.4, BRASS, "l")
    beh=[("Nav handoff","Main nav is sticky until the sub-nav meets it, then slides away (0.28s) and the sub-nav owns the top. Reverses on scroll-up; hidden on cold deep-link load."),
         ("Scrollspy","A brass underline follows the section in view. Bare href=\"#\" links are excluded so the querySelector never throws."),
         ("Breadcrumbs","Top-left of the hero, no background. Links in Sand with brass hover; the current page is plain text, never a link.")]
    yy=PH-524; cw=(RM-LM-2*30)/3.0
    for i,(t,d) in enumerate(beh):
        x=LM+i*(cw+30)
        text(c, x, yy, t, "Poppins-Medium", 12, IVORY, "l")
        wrap(c, x, yy-20, d, "Poppins-Light", 9.5, SUB_D, 14, cw)
    footer(c, "WEB & CMS SYSTEM", True)

def n_patterns_3(c):
    page_bg(c, True)
    dark_header(c, "10 · WEB & CMS SYSTEM", "Specials, Gallery & FAQ",
        "Three patterns unique to the lodge template — and the schema rule the CMS must honour.", 1120)
    # SaveChip
    tracked(c, LM, PH-215, "SAVECHIP", "Poppins-Medium", 9, 2.2, BRASS, "l")
    _pill(c, LM, PH-262, 96, 30, GREEN, None, "SAVE 33%", WHITE, 1.2, 9, 4)
    wrap(c, LM, PH-300, "Solid Badge Green, white text (hero price card, card headers) — OR a green top-rule "
         "with a ~5% tint wash on cells. Nothing else. In-cell links on the special cell use soft green "
         "#9FBFA3, not brass.", "Poppins-Light", 10, SUB_D, 15, 340)
    # Lightbox
    lx=470
    tracked(c, lx, PH-215, "LIGHTBOX", "Poppins-Medium", 9, 2.2, BRASS, "l")
    # 5-tile mini diagram
    gx=lx; gy=PH-360; 
    c.setFillColor(CARD_D); c.roundRect(gx, gy, 96, 118, 4, fill=1, stroke=0)  # tall
    for i in range(4):
        cxx=gx+108+(i%2)*62; cyy=gy+62-(i//2)*62
        c.setFillColor(CARD_D); c.roundRect(cxx, cyy, 56, 52, 4, fill=1, stroke=0)
        if i==3:
            c.setFillColor(HexColor("#000000")); 
            c.saveState(); c.setFillAlpha(0.55); c.roundRect(cxx, cyy, 56, 52, 4, fill=1, stroke=0); c.restoreState()
            tracked(c, cxx+28, cyy+24, "VIEW ALL", "Poppins-Medium", 6.5, 0.8, WHITE, "c")
    wrap(c, lx, PH-390, "Exactly five tiles (one tall + four), overlay on the fifth. Ink scrim .94, brass circular "
         "prev/next, counter, Esc / arrows / scrim-close, scroll lock. Room photos are a separate set via a "
         "corner badge — never a full scrim over the room image.", "Poppins-Light", 10, SUB_D, 15, RM-lx)
    # FAQ accordion
    c.setStrokeColor(LINE_D); c.setLineWidth(1); c.line(LM, PH-470, RM, PH-470)
    tracked(c, LM, PH-495, "FAQ ACCORDION", "Poppins-Medium", 9, 2.2, BRASS, "l")
    for i,q in enumerate(["Is the reserve malaria-free?","How many nights do you recommend?"]):
        ay=PH-525-i*40
        c.setFillColor(CARD_D); c.setStrokeColor(LINE_D); c.setLineWidth(1)
        c.roundRect(LM, ay-8, 560, 32, 4, fill=1, stroke=1)
        mid=ay-8+16
        vtext(c, LM+16, mid, q, "Poppins-Medium", 11, IVORY, "l")
        vtext(c, LM+540, mid, "+", "Poppins", 14, BRASS, "l")
    wrap(c, 660, PH-520, "Good to Know + FAQ are required on every lodge page. Answers are unique per page — "
         "zero identical strings across pages, verified programmatically. FAQPage JSON-LD in the head is "
         "mandatory; the CMS auto-generates it from the FAQ content.", "Poppins-Light", 10, SUB_D, 15, RM-660)
    footer(c, "WEB & CMS SYSTEM", True)

def n_lodge_anatomy(c):
    page_bg(c, False)
    light_header(c, "10 · WEB & CMS SYSTEM", "The Lodge Page — Anatomy",
        "Every lodge page is built on one frozen template. The order and the counts are canon.", 900)
    blocks=[("Hero","Ink, bottom-up scrim · breadcrumbs top-left · one serif headline · PriceCard in the hero"),
            ("Value-prop bar","Four cells, fixed order: Current Specials › Best Price › Plan With a Consultant › Expert Support"),
            ("Overview + Gallery","Exactly five tiles (one tall + four), 'View all' overlay on the fifth · ink-scrim lightbox"),
            ("Rooms","Two-column grid, one column below 1000px · each card binds its own hero image + photo set"),
            ("Good to Know + FAQ","Policies + specials conditions · 12 unique GEO FAQs + FAQPage JSON-LD"),
            ("More of the Reserve","Sister-lodge cross-promotion — the fixed label; never 'cross-sell'"),
            ("Footer","Accreditation row + 'Part of African Safari Group' endorsement line")]
    y=PH-205; bh=44
    for i,(t,d) in enumerate(blocks):
        c.setFillColor(IVORYDIM if i%2 else WHITE); c.setStrokeColor(BONE); c.setLineWidth(1)
        c.roundRect(LM, y-bh, RM-LM, bh, 4, fill=1, stroke=1)
        c.setFillColor(BRASS); c.rect(LM, y-bh, 3, bh, fill=1, stroke=0)
        mid=y-bh/2
        vtext(c, LM+20, mid, t, "Poppins-Medium", 12.5, INK, "l")
        vtext(c, LM+300, mid, d, "Poppins-Light", 10.5, SOFTCHAR, "l")
        y-=bh+8
    footer(c, "WEB & CMS SYSTEM", False)

def n_lodge_rules(c):
    page_bg(c, True)
    dark_header(c, "10 · WEB & CMS SYSTEM", "The Lodge Page — Rules",
        "The non-negotiables that keep the template honest, legal, and on-brand in production.", 1120)
    rules=[("Rate-claim hygiene","Only 'best price guarantee', 'contracted rates', 'no booking fees'. Any other assurance is removed unless T&Cs back it and it carries a footnote. ASG sells under STO agreements and is not the lodge."),
           ("Prices are always bound","Pimcore holds ZAR base rates; the site converts at render by visitor IP. Mockup prices are placeholder snapshots — the price field is never hardcoded in production."),
           ("No feedback widget on guest-facing deploys","The Replit feedback widget and 'Made with Replit' badge stay OFF (Publishing › Engagement tools). Checked on every republish."),
           ("Pull-quotes are never fabricated","Each lodge's interlude quote comes from the lodge's own copy — never an invented guest quote."),
           ("Image hosts","pim.africansafarigroup.com / amakhala.com only. Judge imagery in a real browser — sandboxed previews block external requests.")]
    yy=PH-205
    for t,d in rules:
        text(c, LM, yy, "—", "Poppins", 12, BRASS, "l")
        text(c, LM+28, yy, t, "Poppins-Medium", 13.5, IVORY, "l")
        yy=wrap(c, LM+28, yy-20, d, "Poppins-Light", 10.5, SUB_D, 15, 1050)-14
    footer(c, "WEB & CMS SYSTEM", True)

def n_governance(c):
    page_bg(c, False)
    light_header(c, "11 · GOVERNANCE", "Decisions of Record",
        "Settled. Not open for reinterpretation per project. The machine-readable mirror is design-tokens.json.",
        1000)
    rows=[("13 Aug 2026","Option 4 (CMS × Ink) is the official ASG web/CMS system. All other options retired."),
          ("13 Aug 2026","Pale gold #C8A96E retired with Option 3 — its dark-text contrast rule retired with it."),
          ("13 Aug 2026","Banned rate claims: never 'book direct', 'the lodge's own rate', 'no markup'."),
          ("Aug 2026","Brass small-fill exception: solid brass fills under 12px step the fill to Deep Brass #8E6238."),
          ("Aug 2026","Badge Green #4F6B51 role extended from sightings/inclusion to savings signals (SAVE chips)."),
          ("Standing","No new accent colours, ever. Safari Brass is the only accent."),
          ("Standing","Canonical brand book is v1.3; every export stamps 'Reflects ASG Brand Guidelines v1.3'.")]
    y=PH-205; rh=52
    for i,(d,t) in enumerate(rows):
        band_bottom=y-rh+6; mid=band_bottom+rh/2
        if i%2: c.setFillColor(IVORYDIM); c.rect(LM, band_bottom, RM-LM, rh, fill=1, stroke=0)
        vtext(c, LM+6, mid, d, "Poppins-Medium", 10.5, DEEPBRASS, "l")
        vtext(c, LM+150, mid, t, "Poppins-Light", 11, SOFTCHAR, "l")
        y-=rh
    footer(c, "GOVERNANCE", False)

def n_pointer(c):
    page_bg(c, True)
    dark_header(c, "11 · GOVERNANCE", "The Pointer Package",
        "What to hand any designer, developer, agency or printer briefed on ASG work. If it isn't in "
        "these, it isn't on-brand.", 1120)
    cards=[("This brand book","ASG_Brand_Guidelines_v1.3.pdf — the why and the rules, in human form."),
           ("THEME-SPEC.md","The single pointer spec — colour, type, voice, components, application by surface."),
           ("design-tokens.json","Machine-readable — hexes, CSS vars, scales, themes, component values, email/print maps.")]
    cw=(RM-LM-2*28)/3.0; y=PH-370; h=180
    for i,(t,d) in enumerate(cards):
        x=LM+i*(cw+28)
        c.setFillColor(CARD_D); c.setStrokeColor(LINE_D); c.setLineWidth(1)
        c.roundRect(x, y, cw, h, 6, fill=1, stroke=1)
        c.setFillColor(BRASS); c.rect(x, y+h-3, cw, 3, fill=1, stroke=0)
        text(c, x+20, y+h-40, t, "Poppins-Medium", 14, IVORY, "l")
        wrap(c, x+20, y+h-66, d, "Poppins-Light", 10.5, SUB_D, 15, cw-36)
    c.setStrokeColor(LINE_D); c.setLineWidth(1); c.line(LM, y-30, RM, y-30)
    wrap(c, LM, y-56, "Consumption: web projects link the export's compiled styles.css and read tokens as CSS "
         "variables; email and print consume raw values from design-tokens.json. When this book and a downstream "
         "file disagree, the book and the /themes/ package win — and the downstream file gets fixed.",
         "Poppins-Light", 11, SUB_D, 17, RM-LM)
    text(c, LM, y-130, "Custodian: Riaan Aggenbag, CEO · github.com/riaan-aggenbag/asg-brand-guidelines",
         "Poppins-Light", 10, MUT_D, "l")
    footer(c, "GOVERNANCE", True)

def n_voice_words(c):
    page_bg(c, False)
    light_header(c, "07 · VOICE & TONE", "Words & Formats",
        "The voice made operational — the words we never use, the claims we may, and the formats that "
        "stay fixed everywhere ASG writes.", 1000)
    # left: banned words
    tracked(c, LM, PH-205, "NEVER, GUEST-FACING", "Poppins-Medium", 9.5, 2.2, BRASS, "l")
    banned=["cross-sell · upsell · any sales-mechanics jargon",
            "dream · unforgettable · incredible · amazing",
            "adventure of a lifetime",
            "book direct · the lodge's own rate · no markup",
            "exclamation points · emoji"]
    yy=PH-234
    for b in banned:
        draw_cross(c, LM+5, yy+3, 9, HexColor("#B5524A"))
        text(c, LM+20, yy, b, "Poppins-Light", 11, SOFTCHAR, "l"); yy-=26
    # rate claims
    tracked(c, LM, yy-14, "RATE CLAIMS — ONLY THESE", "Poppins-Medium", 9.5, 2.2, BRASS, "l")
    yy-=42
    for a in ["best price guarantee","contracted rates","no booking fees"]:
        draw_check(c, LM+5, yy+3, 11, GREEN)
        text(c, LM+20, yy, a, "Poppins-Light", 11, SOFTCHAR, "l"); yy-=24
    # right: fixed formats
    rx=680
    tracked(c, rx, PH-205, "FIXED FORMATS", "Poppins-Medium", 9.5, 2.2, BRASS, "l")
    fmts=[("Cross-promotion label","\u201cMore of the Reserve\u201d (e.g. \u201cOther lodges in Amakhala\u201d). Fixed."),
          ("Temperatures","Dual-unit, Celsius first: 8\u201322 \u00b0C (46\u201372 \u00b0F). Panels and running copy alike."),
          ("Sightings","Plain probability — \u201cLeopard \u2014 Rarely \u00b7 elusive\u201d. Never promise a sighting."),
          ("Prices in Rand","R 14,500 — space after R, thousands comma. Numerals always Poppins.")]
    yy=PH-234
    for t,d in fmts:
        text(c, rx, yy, t, "Poppins-Medium", 12, INK, "l")
        yy=wrap(c, rx, yy-19, d, "Poppins-Light", 10.5, SUB_L, 15, RM-rx)-14
    # worked example strip
    c.setStrokeColor(BONE); c.setLineWidth(1); c.line(rx, yy+4, RM, yy+4)
    draw_cross(c, rx+5, yy-15, 9, HexColor("#8A5A50"))
    text(c, rx+20, yy-18, "\u201cExperience the adventure of a lifetime on this dream safari!\u201d",
         "Poppins-Light", 10.5, HexColor("#8A5A50"), "l")
    draw_check(c, rx+5, yy-37, 11, GREEN)
    wrap(c, rx+20, yy-40, "\u201cSabi Sand has the highest leopard-sighting density in Africa. "
         "Three nights gives you the best odds.\u201d", "Poppins-Medium", 10.5, INK, 15, RM-rx-20)
    footer(c, "VOICE & TONE", False)


V13_PAGES = [
    p01_cover, p02_contents, p03_essence,
    p04_mark, p05_clearspace, p06_variations, p07_subbrand,
    p08_palette, n_colour_extended, n_colour_contrast, p09_practice,
    p10_type, p11_typerules,
    p12_voice, n_voice_words,
    p13_photo,
    p14_web, p15_email, p16_print,
    n_patterns_1, n_patterns_2, n_patterns_3, n_lodge_anatomy, n_lodge_rules,
    n_governance, n_pointer,
    p17_closing,
]

FAITHFUL_PAGES = [p01_cover,p02_contents,p03_essence,p04_mark,p05_clearspace,
    p06_variations,p07_subbrand,p08_palette,p09_practice,p10_type,p11_typerules,
    p12_voice,p13_photo,p14_web,p15_email,p16_print,p17_closing]

TOTAL = 17 if FAITHFUL else len(V13_PAGES)

def main():
    c = canvas.Canvas(OUT, pagesize=(PW, PH))
    c.setTitle("African Safari Group — Brand Guidelines "
               + ("v1.2 (faithful rebuild)" if FAITHFUL else "v1.3"))
    c.setAuthor("African Safari Group")
    c.setSubject("Brand & Design System")
    c.setKeywords(MARKER)
    pages = FAITHFUL_PAGES if FAITHFUL else V13_PAGES
    for fn in pages:
        _PG["n"] += 1
        fn(c); c.showPage()
    c.save()
    print("wrote", OUT, "pages", _PG["n"], "marker", MARKER)

if __name__ == "__main__":
    main()
