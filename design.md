---
name: AmarBajar Design System (AB.ds)
description: >
  Production-grade design system and UI/UX specification for AmarBajar.
  Built on a strict 3-color hierarchy (60-30-10 senior rule), mobile-first
  architecture with Facebook/Instagram-inspired bottom navigation, crisp
  rounded-sm geometry, subtle shadows (shadow-sm resting, shadow-md max hover),
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
  semantic:
    destructive: "#DC2626"
    destructiveLight: "#FEF2F2"
    success: "#16A34A"
    warning: "#D97706"
typography:
  family: "Inter, system-ui, -apple-system, sans-serif"
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

# AmarBajar Design System (AB.ds)

> **Core Philosophy:** *Clarity Over Clutter. Speed Over Spectacle. Consistency Is King.*  
> AmarBajar is a modern, high-conversion e-commerce marketplace platform. Every layout, component, and interaction is engineered to direct the user's attention straight to what matters: finding, trusting, and buying products effortlessly.

---

## 1. System Identity & Core Tenets

AmarBajar follows visual cues from modern platforms like **Dribbble Minimalist Showcase**, **Pinterest Card Grids**, and top-tier consumer apps:

1. **Strict 3-Color Hierarchy**: No rainbow palettes. The eye immediately knows where to focus.
2. **Mobile-First Layout**: 70%+ of marketplace shopping happens on mobile screens. We design for mobile first, then progressively enhance for desktop.
3. **App-Like Mobile Navigation**: Instagram/Facebook-inspired bottom tab bar with recognizable icons, micro-labels, and intuitive visual cues before tapping.
4. **Architectural Geometry**: Strict `rounded-sm` (4px max) for cards, dialogs, inputs, and layout containers. Never bloated or bubble-rounded.
5. **Subtle Elevation**: Border-first design with `shadow-sm` at rest and `shadow-md` as the absolute hover maximum.
6. **Snappy Micro-Interactions**: Universal `150ms ease-out` transitions. Fast, predictable, and native-feeling.
7. **Clean Human-Friendly Code**: Modular, readable code blocks without unnecessary abstractions or AI-generated spaghetti.

---

## 2. The 3-Color Visual Hierarchy (60-30-10 Proven Senior Rule)

Too many colors overwhelm the customer and dilute conversion rates. AmarBajar strictly enforces the **60-30-10 rule**:

```
┌────────────────────────────────────────────────────────────────────────┐
│  60% Base Canvas (White & Muted Slate)                                 │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │  30% Structural Elements & Typography (Slate 900 & Slate 700)    │  │
│  │  ┌────────────────────────────────────────────────────────────┐  │  │
│  │  │  10% Brand Action Accent (Emerald #059669)                 │  │  │
│  │  │  [ CTAs • Active Tabs • Cart Counters • Key Badges ]       │  │  │
│  │  └────────────────────────────────────────────────────────────┘  │  │
│  └──────────────────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────────────┘
```

### 2.1 The Tri-Color Breakdown

| Proportion | Role | Hex Value | Tailwind Class | Usage Scope |
|:---:|---|---|---|---|
| **60%** | **Dominant Base** | `#FFFFFF` / `#F8FAFC` | `bg-white`, `bg-slate-50` | Main canvas background, product card backdrop, clean breathing space. |
| **30%** | **Structural Neutral** | `#0F172A` / `#334155` | `text-slate-900`, `text-slate-700`, `border-slate-200` | Headings, readable body text, structural borders, dividers, dark accents. |
| **10%** | **Brand Accent** | `#059669` (Hover: `#047857`) | `bg-emerald-600`, `text-emerald-600`, `border-emerald-600` | Primary buttons (Add to Cart, Buy Now), active bottom navigation icons, badge pills, focus rings. |

### 2.2 Semantic Feedback (Subdued & Controlled)

Alerts and validation states must **never** disrupt the primary 3-color hierarchy. They are used strictly for inline feedback:
- **Destructive/Error**: `#DC2626` (`text-red-600`, `bg-red-50`, `border-red-200`) — out of stock, price cut highlights, error toasts.
- **Success/Verified**: `#16A34A` (`text-green-600`, `bg-green-50`) — order confirmed, stock available.
- **Warning**: `#D97706` (`text-amber-600`, `bg-amber-50`) — limited quantity remaining.

---

## 3. Shapes & Border Radius Constraints

> [!IMPORTANT]
> **Strict Rule: `rounded-sm` (4px max) for all cards, panels, inputs, and layout blocks.**  
> Do not use `rounded-xl`, `rounded-2xl`, or `rounded-3xl` for layout cards. AmarBajar maintains a clean, crisp, editorial silhouette.

| Element Type | Allowed Radius Token | Tailwind Class | Notes |
|---|---|---|---|
| **Product Cards & Panels** | `sm` (4px) | `rounded-sm` | Crisp, clean card frame. |
| **Buttons & Inputs** | `sm` (4px) | `rounded-sm` | Professional, precise touch surfaces. |
| **Modals & Dialogs** | `sm` (4px) | `rounded-sm` | Architectural sheet appearance. |
| **Banners & Promo Tiles** | `sm` (4px) | `rounded-sm` | Uniform grid alignment. |
| **Badges & Dot Counters** | `pill` / `full` | `rounded-full` | Reserved exclusively for notification dots, cart count pills, and circular avatar photos. |

---

## 4. Elevation, Shadows & Border-First Styling

AmarBajar avoids heavy, dark drop-shadows. Depth is created primarily through **subtle 1px borders**, complemented by faint elevation:

- **Resting State**: `border border-slate-200/80` with optional `shadow-sm`.
- **Hover State (Max Allowed)**: `hover:shadow-md` and `hover:border-slate-300`.
- **Transitions**: Every hover shadow change **must** use `transition-all duration-150 ease-out`.

```css
/* Card Elevation Pattern */
.ab-card {
  @apply bg-white border border-slate-200/80 rounded-sm shadow-sm;
  @apply transition-all duration-150 ease-out;
}

.ab-card:hover {
  @apply border-slate-300 shadow-md;
}
```

---

## 5. Mobile-First Layout & Dual Navigation Architecture

AmarBajar treats mobile as the primary storefront. All features must be fully functional and ergonomically sound with single-thumb reach.

```
MOBILE VIEW (< 768px)
┌──────────────────────────────────────────────┐
│ [Logo: AmarBajar]        [Search] [Cart (2)] │  <- Sticky Top Bar (h-14)
├──────────────────────────────────────────────┤
│                                              │
│               Main Content                   │
│          (Scrollable Feed / Grid)            │
│                                              │
├──────────────────────────────────────────────┤
│  [🏠 Home] [📁 Categories] [🛍️ Bag(2)] [👤]  │  <- Sticky Bottom Bar (h-16, fixed)
└──────────────────────────────────────────────┘

DESKTOP VIEW (≥ 768px)
┌────────────────────────────────────────────────────────────────────────┐
│ [Logo: AmarBajar]  [🔍 Search all products...]  [Categories] [Cart] [Profile] │  <- Unified Desktop Nav
└────────────────────────────────────────────────────────────────────────┘
```

### 5.1 Mobile Sticky Top Bar (`h-14`)
- **Left**: Compact Brand Logo (`AmarBajar` in `font-bold text-slate-900 tracking-tight`).
- **Right**: Search trigger icon (`LuSearch`) and Cart counter pill (`LuShoppingBag` with 10% accent counter).
- **Styling**: `sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 flex items-center justify-between`.

### 5.2 Mobile Social-Style Sticky Bottom Navigation (`h-16`)
Inspired by Facebook and Instagram tab bars, this bar provides persistent navigation with clear visual context before clicking.

#### The 5 Core Tabs:
1. **Home** (`RiHome5Line` / `RiHome5Fill`) — Discover feed, featured deals, banners.
2. **Categories** (`RiApps2Line` / `RiApps2Fill`) — Browse departments and filtered collections.
3. **Cart / Bag** (`RiShoppingBag3Line` / `RiShoppingBag3Fill`) — Live numeric badge indicating item count.
4. **Wishlist / Saved** (`RiHeart3Line` / `RiHeart3Fill`) — Saved items for later purchase.
5. **Account** (`RiUser3Line` / `RiUser3Fill`) — Profile, order tracking, settings.

#### Tab Visual Feedback Rules:
- **Dual-State Icons**: Outline icon for inactive state; Solid/Filled icon for active state.
- **Micro-Labels**: 10px uppercase or medium text underneath (`text-[10px] font-medium tracking-wide`).
- **Active State Indicator**: Icon and label transition to `#059669` (`text-emerald-600`) with a subtle active dot or bar above the icon.
- **Inactive State**: Slate-500 (`text-slate-500 hover:text-slate-800`).
- **Touch Target**: Minimum `44px x 44px` clickable area for comfortable thumb navigation.
- **Safe Area**: Uses `pb-safe` to ensure full clearance on iOS Home Indicator.

### 5.3 Desktop Navigation (`≥ 768px`)
- The mobile bottom bar is hidden (`hidden md:block`).
- Top navbar expands into a full desktop navigation bar:
  - Global search bar with autocomplete suggestions (`w-full max-w-md`).
  - Categorized quick links.
  - Cart drawer trigger with hover price preview.
  - User authentication menu.

---

## 6. Typography Scale & Geometric Hierarchy

AmarBajar relies on a clean, modern geometric sans-serif font stack (**Inter** or high-performance `system-ui`).

### 6.1 Font Weight Rules
- **700 (Bold)**: Primary page titles, prominent product prices (`$49.00`).
- **600 (SemiBold)**: Card titles, section headings, active tab labels, button text.
- **500 (Medium)**: Input labels, secondary metadata, table headers.
- **400 (Regular)**: Body copy, product descriptions, secondary disclaimers.

### 6.2 Typography Tokens

| Token | Size | Line Height | Tailwind Class | Primary Application |
|---|:---:|:---:|---|---|
| `micro` | 10px | 14px | `text-[10px]` | Bottom navigation labels, timestamp micro-tags. |
| `caption` | 12px | 16px | `text-xs` | Badge labels, secondary ratings, helper text. |
| `body2` | 14px | 20px | `text-sm` | Product titles in mobile grid, form labels, filters. |
| `body1` | 16px | 24px | `text-base` | Desktop product titles, descriptions, standard inputs. |
| `subtitle`| 18px | 28px | `text-lg` | Product prices, card group headers. |
| `heading3`| 20px | 28px | `text-xl` | Carousel section headers, drawer titles. |
| `heading2`| 24px | 32px | `text-2xl` | Category landing headers, modal headings. |
| `heading1`| 30px | 36px | `text-3xl` | Hero banners, checkout titles. |

---

## 7. Spacing & Geometric Grid System (8-Point Grid)

To make layouts feel calm and exceptionally organized, all spacing derives from an **8px base unit** (with a 4px micro-increment):

```
4px (micro) → 8px (tiny) → 12px (compact) → 16px (standard) → 24px (medium) → 32px (large) → 48px (xlarge) → 64px (section)
```

### 7.1 Spacing Application Guide

| Location | Mobile (< 768px) | Desktop (≥ 768px) | Tailwind Classes |
|---|:---:|:---:|---|
| **Outer Page Margin** | 16px | 32px - 48px | `px-4 md:px-8 lg:px-12` |
| **Grid Gap (Products)** | 12px | 16px - 24px | `gap-3 md:gap-4 lg:gap-6` |
| **Card Internal Padding**| 12px | 16px | `p-3 md:p-4` |
| **Section Vertical Spacing** | 24px - 32px | 48px - 64px | `py-6 md:py-12` |
| **Max Page Width** | 100% | 1280px | `max-w-7xl mx-auto` |

---

## 8. Iconography Standard (Lucide & React Icons)

This project integrates both **`lucide-react`** and **`react-icons`** to deliver crisp, recognizable visuals.

### 8.1 Library Distribution Strategy
- **`lucide-react`**: Use for core UI utility controls (chevrons, close `X`, search, filters, sliders, external links, plus/minus steppers).
- **`react-icons` (Remix Icons `react-icons/ri` or Feather `react-icons/fi`)**: Use for:
  - Dual-state bottom navigation icons (outline vs. filled states).
  - Social login & sharing buttons (`RiFacebookFill`, `RiGoogleFill`, `RiInstagramLine`).
  - Region-specific marketplace payment icons (bKash, Nagad, Visa, Mastercard).

### 8.2 Icon Sizing Rules
- **Micro**: `14px` (`size-3.5`) — inline with metadata tags and ratings.
- **Button / Input**: `16px - 18px` (`size-4` / `size-[18px]`) — inside search bars and CTA buttons.
- **Navigation**: `20px - 22px` (`size-5`) — in headers and bottom navigation tabs.

---

## 9. Motion, Transitions & Micro-Interactions

> [!TIP]
> **Performance Rule: Minimal, ultra-fast transitions.**  
> Avoid slow animations or complex spring physics. We want the interface to feel instantaneous and buttery smooth.

- **Universal Timing**: `150ms` (`duration-150`).
- **Universal Easing**: `ease-out`.
- **Target Properties**: Only animate GPU-cheap properties: `opacity`, `transform`, `color`, `background-color`, `box-shadow`, `border-color`.
- **Hover Micro-interaction Formula**:
  ```tsx
  className="transition-colors duration-150 ease-out hover:text-emerald-600"
  ```

---

## 10. Core Component Specifications

### 10.1 Standard Product Card (`ProductCard`)
- **Structure**:
  1. Image Container: `aspect-square` or `aspect-[4/5]` with `overflow-hidden bg-slate-100 rounded-sm relative`.
  2. Wishlist Button: Top-right floating circular button (`size-8 bg-white/90 hover:bg-white text-slate-700 shadow-sm rounded-full`).
  3. Badge: Top-left discount or status badge (`bg-emerald-600 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded-sm`).
  4. Content:
     - Category / Brand: `text-[11px] uppercase tracking-wider text-slate-500 font-medium`.
     - Product Title: `text-sm font-medium text-slate-900 line-clamp-2 hover:text-emerald-600 transition-colors duration-150`.
     - Price Section: Current price (`text-base font-bold text-slate-900`) + original strikethrough price (`text-xs text-slate-400 line-through`).
  5. Action: Quick "Add" button with `150ms` color transition.

### 10.2 Buttons (`Button`)
Built on shadcn/ui with strict styling presets:
- **Primary (10% Accent)**: `bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm rounded-sm px-4 py-2 transition-colors duration-150`.
- **Secondary (Structural)**: `bg-slate-100 hover:bg-slate-200 text-slate-900 font-medium text-sm rounded-sm px-4 py-2 transition-colors duration-150`.
- **Outline**: `border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 font-medium text-sm rounded-sm px-4 py-2 transition-colors duration-150`.
- **Ghost**: `hover:bg-slate-100 text-slate-700 font-medium text-sm rounded-sm px-3 py-1.5 transition-colors duration-150`.

### 10.3 Form Inputs (`Input`)
- `h-10 px-3 py-2 bg-white border border-slate-200 rounded-sm text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-emerald-600 focus:border-emerald-600 transition-colors duration-150`.

---

## 11. AI Agent Code Generation Guardrails

When generating UI code for AmarBajar, AI agents and developers **must adhere to these human-friendly engineering rules**:

1. **Keep Code Human-Readable**:
   - Write clean, declarative components under 150 lines. Break complex screens into modular files (e.g. `ProductCard.tsx`, `MobileBottomNav.tsx`, `HeaderSearch.tsx`).
   - Avoid generating massive nested ternaries or convoluted hooks.
2. **Standard Tailwind Class Ordering**:
   - `[Layout & Display] -> [Sizing & Box Model] -> [Spacing] -> [Typography] -> [Borders & Backgrounds] -> [Effects & Transitions]`
   - Example: `flex items-center justify-between w-full p-4 text-sm font-medium text-slate-900 bg-white border border-slate-200 rounded-sm shadow-sm transition-all duration-150 hover:shadow-md`
3. **React Server Components (RSC) by Default**:
   - Only add `'use client'` when state, event handlers, or browser APIs are genuinely required.
4. **Accessible Touch Targets**:
   - Ensure all clickable mobile elements have at least `44px x 44px` hit areas (`min-h-[44px] min-w-[44px]` or adequate padding).
5. **Images**:
   - Always use Next.js `<Image />` with defined `sizes`, `aspect-ratio`, and `alt` tags.

---

## 12. Do's and Don'ts Checklist

| ✅ DO | ❌ DON'T |
|---|---|
| Use the 60-30-10 color hierarchy strictly. | Don't introduce arbitrary accent colors (purple, orange, cyan) into the core UI. |
| Use `rounded-sm` (4px max) for all cards and inputs. | Don't use `rounded-xl`, `rounded-2xl`, or `rounded-3xl` for layout containers. |
| Use `shadow-sm` at rest and `shadow-md` max on hover. | Don't use heavy blurry shadows (`shadow-xl`, `shadow-2xl`). |
| Keep transitions snappy at `150ms ease-out`. | Don't use slow (400ms+), bouncy, or distracting spring animations. |
| Design mobile screens first with sticky bottom navigation. | Don't build desktop-only layouts that squeeze awkwardly onto mobile. |
| Use dual-state icons (outline vs solid) with micro-labels. | Don't show unlabelled, mystery icons that confuse shoppers. |
| Maintain an 8px geometric grid rhythm. | Don't mix random pixel margins (`mt-[13px]`, `p-[7px]`). |
| Keep code blocks clean, modular, and human-friendly. | Don't output over-engineered, unmaintainable AI spaghetti code. |

---

*Document version: 2.0.0 — Updated for AmarBajar Modern Marketplace Architecture.*
