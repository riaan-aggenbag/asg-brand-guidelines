#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""ASG Brand Quick Reference — v1.3.  Marker: ASG-QR-V13-20260816-R1
Single landscape card. Same palette/fonts as the brand book generator."""
import os
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

HERE=os.path.dirname(os.path.abspath(__file__))
LOGO=os.path.join(HERE,"..","assets","logos")
if not os.path.isdir(LOGO): LOGO="/home/claude/assets/logos"
OUT=os.path.join(HERE,"ASG_Brand_Quick_Reference_v1.3.pdf")
MARKER="ASG-QR-V13-20260816-R1"

G="/usr/share/fonts/truetype/google-fonts/"
pdfmetrics.registerFont(TTFont("Poppins-Light",G+"Poppins-Light.ttf"))
pdfmetrics.registerFont(TTFont("Poppins",G+"Poppins-Regular.ttf"))
pdfmetrics.registerFont(TTFont("Poppins-Medium",G+"Poppins-Medium.ttf"))
pdfmetrics.registerFont(TTFont("Poppins-Bold",G+"Poppins-Bold.ttf"))
pdfmetrics.registerFont(TTFont("Lora",G+"Lora-Variable.ttf"))

INK=HexColor("#171411"); CHARCOAL=HexColor("#2B2622"); SOFTCHAR=HexColor("#4A443C")
BRASS=HexColor("#A8794B"); DEEPBRASS=HexColor("#8E6238"); SAND=HexColor("#C39F77")
IVORY=HexColor("#F6F1EA"); BONE=HexColor("#B9AFA2"); GREEN=HexColor("#4F6B51")
WHITE=HexColor("#FFFFFF"); MUT=HexColor("#8A8175"); MUT_L=HexColor("#A89D8C")
PW,PH=1280,720; LM=64; RM=PW-64

def _caph(f,s):
    try: ch=pdfmetrics.getFont(f).face.capHeight
    except Exception: ch=700
    return ch/1000.0*s
def T(c,x,y,s,f,sz,col,al="l"):
    c.setFont(f,sz); c.setFillColor(col)
    (c.drawCentredString if al=="c" else c.drawRightString if al=="r" else c.drawString)(x,y,s)
def VT(c,x,cy,s,f,sz,col,al="l"): T(c,x,cy-_caph(f,sz)/2,s,f,sz,col,al)
def TR(c,x,y,s,f,sz,tr,col,al="l"):
    w=sum(pdfmetrics.stringWidth(ch,f,sz)+tr for ch in s)-tr if s else 0
    if al=="c": x-=w/2
    elif al=="r": x-=w
    c.setFont(f,sz); c.setFillColor(col); cx=x
    for ch in s: c.drawString(cx,y,ch); cx+=pdfmetrics.stringWidth(ch,f,sz)+tr
def wrap(c,x,y,s,f,sz,col,ld,mw):
    c.setFont(f,sz); c.setFillColor(col); line=""
    for wd in s.split():
        t=(line+" "+wd).strip()
        if pdfmetrics.stringWidth(t,f,sz)<=mw: line=t
        else: c.drawString(x,y,line); line=wd; y-=ld
    if line: c.drawString(x,y,line); y-=ld
    return y
def eyebrow(c,x,y,s): TR(c,x,y,s,"Poppins-Medium",9,2.2,BRASS)

def build():
    c=canvas.Canvas(OUT,pagesize=(PW,PH))
    c.setTitle("ASG Brand Quick Reference v1.3"); c.setAuthor("African Safari Group")
    c.setKeywords(MARKER)
    c.setFillColor(IVORY); c.rect(0,0,PW,PH,fill=1,stroke=0)
    # header band (ink)
    c.setFillColor(INK); c.rect(0,PH-96,PW,96,fill=1,stroke=0)
    c.drawImage(ImageReader(LOGO+"/logo-horizontal-white.png"),LM,PH-70,150,30,
                mask="auto",preserveAspectRatio=True,anchor="w")
    T(c,LM,PH-88,"Brand Quick Reference","Poppins-Light",10.5,MUT_L,"l")
    T(c,RM,PH-58,"v1.3 · August 2026","Poppins-Medium",11,SAND,"r")
    T(c,RM,PH-76,"Full guidelines: ASG_Brand_Guidelines_v1.3.pdf","Poppins-Light",9.5,MUT_L,"r")

    col2=PW/2+16; top=PH-128
    # BRAND ESSENCE
    eyebrow(c,LM,top,"BRAND ESSENCE")
    y=wrap(c,LM,top-20,"Luxury inbound safari specialists across Southern & East Africa. "
      "Consultation-led, not a booking platform. The identity should read as authority, craft and "
      "restraint — closer to Aman or Singita than a travel agency.","Poppins-Light",10.5,SOFTCHAR,15,PW/2-LM-24)
    # COLOUR SYSTEM
    eyebrow(c,LM,y-6,"COLOUR SYSTEM")
    sw=[("#171411",INK,"Ink"),("#2B2622",CHARCOAL,"Charcoal"),("#4A443C",SOFTCHAR,"Soft Charcoal"),
        ("#A8794B",BRASS,"Safari Brass"),("#8E6238",DEEPBRASS,"Deep Brass"),("#4F6B51",GREEN,"Badge Green"),
        ("#C39F77",SAND,"Heritage Sand"),("#F6F1EA",IVORY,"Warm Ivory"),("#B9AFA2",BONE,"Bone")]
    sy=y-30; swx=LM; cw=(PW/2-LM-24-8*8)/9
    for i,(hx,cl,nm) in enumerate(sw):
        x=swx+i*(cw+8); c.setFillColor(cl)
        if cl in (IVORY,): c.setStrokeColor(BONE); c.setLineWidth(1); c.roundRect(x,sy-46,cw,46,3,fill=1,stroke=1)
        else: c.roundRect(x,sy-46,cw,46,3,fill=1,stroke=0)
        T(c,x+cw/2,sy-58,nm.split()[0],"Poppins",6.3,MUT,"c")
    T(c,LM,sy-74,"Ratio 60 / 30 / 10 — Ink/Charcoal · Ivory/White · Brass (signal only). Brass always takes white text.",
      "Poppins-Light",9.5,SOFTCHAR,"l")
    T(c,LM,sy-90,"Retired: pale gold #C8A96E. No new accent colours, ever.","Poppins-Light",9.5,MUT,"l")
    # TYPOGRAPHY
    ty=sy-116
    eyebrow(c,LM,ty,"TYPOGRAPHY")
    T(c,LM,ty-26,"Aa","Lora",26,INK,"l"); T(c,LM+44,ty-20,"Lora","Poppins-Medium",11,INK,"l")
    T(c,LM+44,ty-34,"Display & headlines","Poppins-Light",9,MUT,"l")
    T(c,LM+180,ty-26,"Aa","Poppins-Light",26,BRASS,"l"); T(c,LM+230,ty-20,"Poppins","Poppins-Medium",11,INK,"l")
    T(c,LM+230,ty-34,"Body, UI, all numerals","Poppins-Light",9,MUT,"l")
    T(c,LM+360,ty-20,"H1 26–38pt · H2 20–22pt · Body 12–13.5pt","Poppins-Light",9.5,SOFTCHAR,"l")
    T(c,LM+360,ty-34,"Eyebrows: Poppins-Medium tracked caps, brass","Poppins-Light",9.5,SOFTCHAR,"l")

    # RIGHT COLUMN
    eyebrow(c,col2,top,"LOGO SYSTEM")
    wrap(c,col2,top-20,"Stacked · Horizontal (preferred for headers) · Icon-only. The crest is fixed — "
      "never redrawn or recoloured outside Ink / Ivory / Brass / Heritage Sand / White. Clear space = "
      "icon height. Min 32px stacked, 20px icon.","Poppins-Light",10.5,SOFTCHAR,15,RM-col2)
    T(c,col2,top-84,"Sub-brands: same crest & serif setting — only the wordmark changes. Every one carries",
      "Poppins-Light",9.5,MUT,"l")
    T(c,col2,top-98,"\u201cPart of African Safari Group\u201d.","Poppins-Light",9.5,MUT,"l")
    vy=top-124
    eyebrow(c,col2,vy,"VOICE & TONE")
    for i,ln in enumerate([
        "Authoritative, warm, never salesy. Specific beats superlative.",
        "Declarative sentences. No exclamation points. No emoji.",
        "Speak as \u201cwe\u201d; lead with what the guest experiences.",
        "Rate claims — only: best price guarantee · contracted rates · no booking fees.",
        "Cross-promo label is fixed: \u201cMore of the Reserve\u201d. Never \u201ccross-sell\u201d.",
        "Temperatures dual-unit, Celsius first: 8\u201322 \u00b0C (46\u201372 \u00b0F). Prices: R 14,500."]):
        T(c,col2,vy-20-i*15,"—","Poppins",9,BRASS,"l")
        T(c,col2+14,vy-20-i*15,ln,"Poppins-Light",9.7,SOFTCHAR,"l")
    py=vy-128
    eyebrow(c,col2,py,"PHOTOGRAPHY DIRECTION")
    T(c,col2,py-20,"Seek: golden hour · one clear subject · wide negative space · warm desaturated grade.",
      "Poppins-Light",9.7,SOFTCHAR,"l")
    T(c,col2,py-35,"Avoid: flat midday light · stock grids · oversaturated HDR · text on busy detail.",
      "Poppins-Light",9.7,SOFTCHAR,"l")
    T(c,col2,py-50,"Source: pim.africansafarigroup.com · amakhala.com.","Poppins-Light",9.7,MUT,"l")

    # footer
    c.setStrokeColor(BONE); c.setLineWidth(1); c.line(LM,54,RM,54)
    TR(c,LM,38,"AFRICAN SAFARI GROUP","Poppins-Medium",8,2,MUT_L)
    T(c,RM,38,"Brand custodian: Riaan Aggenbag, CEO · bookings@africansafarigroup.com","Poppins-Light",9,MUT_L,"r")
    c.save(); print("wrote",OUT,"marker",MARKER)

if __name__=="__main__": build()
