---
name: AmarBajar Design System (AB.ds)
description: >
  Production-grade design system and UI/UX specification for AmarBajar —
  a Hyperlocal Multi-Category E-Commerce & Delivery Platform.
  Built on a strict 3-color hierarchy (60-30-10 senior rule), a Two-Track
  Fulfillment Architecture (Combined Grocery + Medicine vs. Standalone LP Gas),
  mobile-first app-like ergonomics, crisp rounded-sm geometry (4px max),
  and fast 150ms transitions. Integrated with Tailwind CSS v4, shadcn/ui,
  Lucide React, and React Icons.
colors:
  hierarchy:
    dominant_60:
      canvas: "#FFFFFF"
      canvasMuted: "#F8FAFC"
      canvasBorder: "#E2E8F0"
    structural_30:
      heading: "#0F172A"
      body: "#334155"
      mutedText: "#64748B"
      darkSurface: "#0F172A"
    accent_10:
      primary: "#059669"
      primaryHover: "#047857"
      primaryLight: "#ECFDF5"
      primaryForeground: "#FFFFFF"
  vertical_accents:
    grocery: "#059669" # Emerald
    pharmacy: "#0284C7" # Sky/Medical Blue (subdued accent)
    lpgas: "#EA580C" # Flame Orange (alert/express accent)
  semantic:
    destructive: "#DC2626"
    destructiveLight: "#FEF2F2"
    success: "#16A34A"
    warning: "#D97706"
typography:
  family: "'Noto Serif Bengali', serif"
  weights:
    regular: 400
    medium: 500
    semibold: 600
    bold: 700
  scale:
    micro: 10
    caption: 12
    body2: 14
    body1: 16
    subtitle: 18
    heading3: 20
    heading2: 24
    heading1: 30
    display: 36
rounded:
  none: 0
  sm: 4px
  maxCardRadius: 4px
  maxLayoutRadius: 4px
  pill: 9999px
elevation:
  none: "none"
  resting: "0 1px 2px 0 rgba(0, 0, 0, 0.05)"
  hoverMax: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"
motion:
  timing: "150ms"
  easing: "cubic-bezier(0, 0, 0.2, 1)"
  transition: "all 150ms ease-out"
---

# AmarBajar Design System (AB.ds) & Platform Architecture

> **Core Philosophy:** *Clarity Over Clutter. Speed Over Spectacle. Utility Over Noise.*  
> AmarBajar is NOT a generic lifestyle or fashion marketplace. It is a **hyperlocal everyday lifeline platform** for households to procure their daily essentials, emergency healthcare, and cooking fuel with absolute speed and zero cognitive friction.

---

## 1. Platform Identity, Core Purpose & High-Level Goal

### 1.1 What is AmarBajar?
AmarBajar is a **Hyperlocal Multi-Category E-Commerce & Delivery Platform** engineered specifically for the practical daily needs of Bangladeshi households.

The platform provides 3 mission-critical service verticals:
1. **Grocery & Household Essentials (প্রতিদিনের বাজার ও নিত্যপ্রয়োজনীয় পণ্য)**: Fresh vegetables (কাঁচা বাজার), fish (মাছ), meat (মাংস), cooking staples (চাল, ডাল, তেল, মশলা), frozen food, dairy, personal care, and essential kitchenware.
2. **Medicine & Pharmacy (জরুরি ওষুধ ও ফার্মেসি)**: Prescription medications, OTC relief (fever, pain, gastric), first-aid kits, baby care essentials, and chronic disease maintenance drugs.
3. **LP Gas Cylinder Delivery (এলপি গ্যাস সিলিন্ডার)**: Instant refill and new cylinder delivery across all major certified brands (Bashundhara, Omera, Beximco, BM, Jamuna, TotalGaz, etc.) with empty cylinder exchange at doorstep.

### 1.2 Main High-Level Goal (মুল লক্ষ্য)
* **Zero Visual Clutter:** No generic, bloated e-commerce banners, distracting countdown spam, or irrelevant fashion/electronics widgets.
* **Minimum Clicks & Lightning Speed:** The user must be able to sit at home and effortlessly order their **daily grocery bazar (প্রতিদিনের বাজার)** and **emergency medicine (জরুরি ওষুধ)** together in the minimum possible time and taps.
* **Instant LP Gas Lifeline:** When the kitchen gas runs out in the middle of cooking, the user can place an express LP Gas Cylinder order in under 30 seconds with clear empty cylinder exchange options.
* **Hyperlocal Context & Bilingual Empathy:** Clear English UI backed by warm Bengali micro-cues (`প্রতিদিনের বাজার`, `জরুরি ওষুধ`, `গ্যাস সিলিন্ডার`, `খালি সিলিন্ডার বদল`) so every customer instantly understands what to do.

---

## 2. Core Order Logic: The Two-Track Fulfillment Architecture

Because of the physical nature of goods and logistics, AmarBajar operates on a **strict Two-Track Fulfillment System**. All UI and cart interactions must respect this operational reality:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        AMARBAJAR ORDER LOGIC                           │
├────────────────────────────────────────┬───────────────────────────────┤
│    TRACK 1: COMBINED ORDER TRACK       │  TRACK 2: STANDALONE GAS TRACK│
│    [ 🥦 Grocery ] + [ 💊 Medicine ]    │  [ 🛢️ LP Gas Cylinder ]       │
├────────────────────────────────────────┼───────────────────────────────┤
│ • Unified Cart: User adds fresh        │ • Independent Checkout: Never │
│   vegetables, fish, cooking oil, and   │   mixed with grocery/medicine │
│   paracetamol into the SAME cart.      │   due to vehicle & safety constraints│
│ • One Delivery Fee / Consolidated Drop │ • Doorstep Empty Exchange:    │
│ • Handled by lightweight delivery      │   Requires user to specify    │
│   riders (bike/cycle bag).             │   empty cylinder brand to swap│
│ • Standard doorstep dispatch.          │ • Heavy vehicle / van dispatch│
└────────────────────────────────────────┴───────────────────────────────┘
```

### 2.1 Track 1: Combined Order (Grocery + Medicine)
* **User Experience:** Shoppers can browse fresh bazar items and pharmacy products simultaneously and add them to a single unified shopping bag.
* **Checkout Flow:** One address confirmation, one delivery slot selection, one combined invoice, and one consolidated delivery trip.
* **Prescription Flow:** If prescription medicine is in the cart, a clean inline "Upload Prescription (প্রেসক্রিপশন আপলোড)" step appears before checkout completion.

### 2.2 Track 2: Standalone Order (LP Gas Cylinder Express)
* **Why Standalone?** LP Gas Cylinders weigh 20kg–30kg, involve heavy transport logistics (vans, pickups, or specialized cargo racks), and require a mandatory physical **"Empty Cylinder Exchange (খালি সিলিন্ডার বদল)"** protocol at the customer's doorstep.
* **User Experience:**
  - Selecting an LP Gas Cylinder presents an instant **"1-Click Direct Order / Express Checkout"** flow.
  - The UI prompts two clear radio options:
    1. **Refill / Exchange (রিফিল - খালি সিলিন্ডার আছে)**: Standard refill price with exchange of an existing empty cylinder.
    2. **New Cylinder with Gas (নতুন প্যাকেজ - সিলিন্ডারসহ)**: Higher price for purchasing both cylinder body and gas.
  - Gas orders are kept cleanly separated from the everyday grocery bag to prevent dispatch delays and rider confusion.

---

## 3. The 3 Core Service Verticals & UI Guidelines

Every page layout, navigation bar, and feed must clearly orient the user into one of these 3 pillars:

| Vertical | Bengali Title | Core Items Covered | Accent Cue | Delivery SLA |
|---|---|---|:---:|:---:|
| **1. Grocery Bazar** | প্রতিদিনের বাজার ও নিত্যপণ্য | Fresh veggies, fish, meat, rice, lentils, oil, spices, dairy, frozen foods, cleaning & kitchenware. | `#059669` (Emerald) | 30–60 mins |
| **2. Pharmacy** | জরুরি ওষুধ ও হেলথকেয়ার | Prescription medicines, OTC fever/pain relief, gastric care, diabetic care, baby foods, antiseptics. | `#0284C7` (Sky Blue) | 30–45 mins |
| **3. LP Gas** | এলপি গ্যাস সিলিন্ডার | 12kg, 25kg, 35kg cylinders (Bashundhara, Omera, Beximco, BM, Jamuna, TotalGaz). Refill & new package. | `#EA580C` (Flame Orange) | Express (within 30 mins) |

---

## 4. Visual Hierarchy & 3-Color Senior Rule (60-30-10)

AmarBajar strictly forbids chaotic rainbow palettes. The platform is designed like an ultra-reliable utility tool (such as Linear, Instacart, or Apple Maps):

```
┌────────────────────────────────────────────────────────────────────────┐
│  60% Base Canvas (Clean White & Slate-50)                              │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │  30% Structural Elements & Typography (Slate 900 & Slate 700)    │  │
│  │  ┌────────────────────────────────────────────────────────────┐  │  │
│  │  │  10% Brand Action Accent (Emerald #059669)                 │  │  │
│  │  │  [ CTAs • Active Navigation • Cart Badges • Key Buttons ]  │  │  │
│  │  └────────────────────────────────────────────────────────────┘  │  │
│  └──────────────────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────────────┘
```

### 4.1 Strict Color Tokens
* **60% Dominant Canvas:** `#FFFFFF` (pure white background, card backdrops) and `#F8FAFC` (`bg-slate-50` for secondary utility sections).
* **30% Structural Neutrals:** `#0F172A` (`text-slate-900` for bold titles), `#334155` (`text-slate-700` for crisp body text), and `#E2E8F0` (`border-slate-200` for 1px structural framing).
* **10% Brand Accent:** `#059669` (Emerald-600) for primary actions, active tab highlights, and checkout triggers.
* **Controlled Vertical Micro-Pills (Subdued Only):**
  - Pharmacy pill tag: `#0284C7` / `bg-sky-50 text-sky-700 border-sky-200`
  - LP Gas pill tag: `#EA580C` / `bg-orange-50 text-orange-700 border-orange-200`
  - Grocery pill tag: `#059669` / `bg-emerald-50 text-emerald-700 border-emerald-200`

---

## 5. Mobile-First Layout & Hyperlocal Navigation Architecture

75%+ of daily household shopping in Bangladesh is completed on smartphones by homemakers and busy professionals. The navigation must feel like a native app.

```
MOBILE VIEW (< 768px)
┌──────────────────────────────────────────────┐
│ [📍 Dhanmondi, Dhaka ▾]  [🔍 Search] [🛍️ (3)] │  <- Hyperlocal Top Bar (h-14)
├──────────────────────────────────────────────┤
│ [ 🥦 কাঁচাবাজার ]  [ 💊 জরুরি ওষুধ ]  [ 🛢️ গ্যাস ]   │  <- 3-Vertical Quick Rail
├──────────────────────────────────────────────┤
│                                              │
│             Daily Essentials Feed            │
│         (Veggies, Fish, Medicine, Gas)       │
│                                              │
├──────────────────────────────────────────────┤
│ [🏠 Home] [🥦 Bazar] [💊 Meds] [🛢️ Gas] [👤]  │  <- Sticky Bottom Bar (h-16, fixed)
└──────────────────────────────────────────────┘
```

### 5.1 Hyperlocal Header Components
1. **Area / Location Selector:** Prominently placed at the top (e.g. `📍 Mirpur-10, Dhaka ▾` or `📍 Dhanmondi 27 ▾`) so customers always know delivery availability and delivery time for their specific neighborhood.
2. **Unified Search with Category Filter:** Search bar capable of instant matching:
   - Grocery: "আলু", "রুই মাছ", "Soyabean Oil", "Eggs"
   - Medicine: "Napa Extra", "Seclo 20", "Paracetamol", "Savlon"
   - LP Gas: "Bashundhara Gas", "12kg Refill", "Omera LP Gas"
3. **Two-Track Cart Visual Indicator:**
   - Standard Cart Bag: Shows item count for Grocery + Medicine combined.
   - Active LP Gas Order Tracker (when a gas cylinder order is active): Floating pill showing cylinder dispatch status.

### 5.2 Mobile Social-Style Sticky Bottom Bar (`h-16`)
The bottom navigation bar has 5 thumb-friendly tabs:
1. **Home (`RiHome5Line` / `RiHome5Fill`)**: Hyperlocal daily hub, quick vertical jump cards, featured daily deals.
2. **Bazar (`RiStore2Line` / `RiStore2Fill`)**: Dedicated grocery, fresh vegetables, fish, meat, cooking oil, spices.
3. **Pharmacy (`RiHeartPulseLine` / `RiHeartPulseFill`)**: Quick medicine search, OTC categories, prescription upload.
4. **LP Gas (`RiFireLine` / `RiFireFill`)**: 1-click gas cylinder refill & new booking with empty cylinder exchange options.
5. **Account / Orders (`RiUser3Line` / `RiUser3Fill`)**: Live order tracking, order history, saved addresses.

---

## 6. Shapes, Geometry & Elevation Rules

> [!IMPORTANT]
> **Strict Rule: `rounded-sm` (4px max) across cards, inputs, buttons, and layout panels.**  
> Never use bubble-rounded `rounded-xl`, `rounded-2xl`, or `rounded-3xl` for layout frames. AmarBajar maintains an architectural, precision-engineered silhouette.

| Element | Radius | Tailwind Class | Notes |
|---|---|---|---|
| **Product & Service Cards** | 4px | `rounded-sm` | Crisp, editorial border-first card. |
| **Buttons & Search Inputs** | 4px | `rounded-sm` | Professional, high-accuracy touch surface. |
| **Prescription Upload Dropzone** | 4px | `rounded-sm` | Dashed border utility box. |
| **Gas Exchange Radio Panels** | 4px | `rounded-sm` | Structured option selector. |
| **Notification & Counter Badges** | Pill | `rounded-full` | Numeric badges only (`cartCount`, status dot). |

---

## 7. Component Specifications for the 3 Verticals

### 7.1 Grocery Product Card (`BazarCard`)
- **Visuals:** High-contrast fresh product photography/illustration on neutral `#F8FAFC`.
- **Badges:** Freshness tag (`আজকের তাজা`, `অর্গানিক`), unit spec (`১ কেজি`, `৫০০ গ্রাম`, `১ ডজন`).
- **Action:** Quantity stepper (`- [ 1 ] +`) for instant multi-quantity additions without opening product page.

### 7.2 Medicine Card (`MedicineCard`)
- **Visuals:** Clean packaging or generic strip illustration with manufacturer name (e.g. `Square Pharmaceuticals`, `Beximco Pharma`).
- **Details:** Generic name in subtitle (`Paracetamol 500mg`, `Omeprazole 20mg`), unit packaging (`১০ টি ট্যাবলেট / পাতা`, `১০০ মি.লি. সিরাপ`).
- **Prescription Notice:** Subdued pill tag (`প্রেসক্রিপশন আবশ্যক` or `OTC / প্রেসক্রিপশন ছাড়া`).
- **Action:** Direct Add to the unified Grocery + Medicine Cart.

### 7.3 LP Gas Booking Card (`GasCylinderCard`)
- **Visuals:** Brand cylinder rendering (Bashundhara, Omera, Beximco, BM, TotalGaz) with net weight tag (`১২ কেজি`).
- **Exchange Radio:** 
  - Option A: **Refill with Exchange (খালি সিলিন্ডার দিয়ে রিফিল)** — Primary price (e.g. ৳1,450).
  - Option B: **New Cylinder Package (নতুন সিলিন্ডারসহ)** — Full price (e.g. ৳3,650).
- **Direct Action:** Standalone CTA button: **"Express Order Now (তাৎক্ষণিক অর্ডার)"** linking straight to Gas Express Checkout.

---

## 8. AI Agent Code Generation Guardrails

When modifying or generating code for AmarBajar, agents **must strictly follow these context rules**:

1. **Keep the Context Relevant:**
   - NEVER introduce fashion clothes, sneakers, random gadgets, or mechanical keyboards into the core UI.
   - The platform is strictly **Grocery & Bazar**, **Medicine/Pharmacy**, and **LP Gas Cylinder Delivery**.
2. **Respect the Two-Track Fulfillment Logic:**
   - Never force an LP Gas cylinder into the standard grocery bag without explicit user-selected exchange options.
   - Keep Grocery + Medicine combined in the main bag.
3. **Clean Human-Readable Code:**
   - Modular components under 150 lines (`Navbar.tsx`, `MobileBottomNav.tsx`, `GasBookingSection.tsx`, `BazarGrid.tsx`, `PharmacySection.tsx`).
4. **Standard Tailwind Class Ordering:**
   - `[Layout & Display] -> [Sizing & Box Model] -> [Spacing] -> [Typography] -> [Borders & Backgrounds] -> [Effects & Transitions]`
5. **Universal Snappy Transitions:**
   - Universal `150ms ease-out` timing (`transition-all duration-150 ease-out`).

---

## 9. Do's and Don'ts Checklist

| ✅ DO | ❌ DON'T |
|---|---|
| Focus 100% on Grocery, Pharmacy, and LP Gas Cylinder Delivery. | Don't build generic Amazon/Daraz fashion, shoe, or electronics marketplaces. |
| Support combined ordering for Grocery + Medicine in one unified cart. | Don't force users into separate carts for vegetables and medicines. |
| Treat LP Gas Cylinder as a standalone express order with empty exchange flow. | Don't mix 30kg gas cylinders silently into a grocery basket without exchange logic. |
| Use bilingual Bengali micro-cues (`প্রতিদিনের বাজার`, `জরুরি ওষুধ`, `গ্যাস সিলিন্ডার`). | Don't create culturally alien English-only boilerplate layouts. |
| Use crisp `rounded-sm` (4px) and subtle 1px borders with 60-30-10 palette. | Don't use bubbly `rounded-2xl` cards or dark heavy drop shadows. |
| Keep interactions fast at `150ms ease-out` with mobile thumb reach. | Don't use slow, bouncy 400ms animations. |

---

*Document version: 3.0.0 — Updated for AmarBajar Hyperlocal Multi-Category Platform (Grocery, Pharmacy & LP Gas Two-Track Architecture).*
