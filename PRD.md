# PRD v2.0 — Shiv Tour & Travels Web Application
> **Status:** Active · **Version:** 2.0 · **Stack:** Next.js 14 · TypeScript · Tailwind CSS · pnpm  
> **Repo:** https://github.com/manish-1614/shiv-tour-and-travels  
> **Business Phone:** +91 9991224102  
> **Tagline:** *"Journey with Trust. Arrive with Confidence."*

---

## Section 0 — V2.0 Revision Summary

V1.0 scored 8.5/10. V2.0 addresses 14 gaps identified in a post-audit review. All gaps are now resolved.

| # | Gap | Resolution in v2.0 | Status |
|---|-----|--------------------|--------|
| 1 | Trust & Social Proof | Added FR-07: Quick Confidence Boost section — reviews, real photos, driver cards | NEW |
| 2 | Pricing Anchors | Added FR-09: Sample Pricing Section — popular route estimates | NEW |
| 3 | SEO Depth | Added 10 SEO route landing pages (Section 6.5) | NEW |
| 4 | Lead Qualification | Form +2 fields: Trip Type + Budget Range | UPDATED |
| 5 | Exit Intent | Added FR-12: Exit Intent WhatsApp Popup | NEW |
| 6 | Lead Persistence | Added Firebase Firestore lead storage (Section 7) | NEW |
| 7 | WhatsApp Fail-Safe | Added FR-13: Fallback modal if WhatsApp unavailable | NEW |
| 8 | Analytics Depth | GA4 expanded to 16 events + Microsoft Clarity heatmaps | UPDATED |
| 9 | WhatsApp Automation | Phase 2 WhatsApp Business API roadmap (Section 9) | NEW |
| 10 | Emotional Copy | Fear-reduction copy + emotional hooks added (Section 8) | UPDATED |
| 11 | Driver Profiles | Added FR-08: Driver Profile Cards | NEW |
| 12 | Multi-language | Hindi/Hinglish toggle promoted to P0 priority | UPDATED |
| 13 | Tech Stack | Confirmed: Next.js 14 + TypeScript + Tailwind + pnpm | UPDATED |
| 14 | 30-Sec Call Promise | Added FR-14: Urgency callback badge component | NEW |

---

## Section 1 — Executive Summary

### 1.1 Business Overview
Shiv Tour & Travels is a full-service cab and tourism company offering **4-seater and 7-seater taxi services across all of India** under a comprehensive all-India permit. Core differentiators:
- Friendly, polite, calm, and composed staff
- Spotlessly clean vehicles — inspected before every trip
- Drivers who function as knowledgeable local guides
- Advance budget planning and transparent pricing
- WhatsApp-first communication culture

### 1.2 Confirmed Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 — App Router, TypeScript strict mode |
| Styling | Tailwind CSS v3 — JIT, mobile-first |
| Package Manager | pnpm |
| Lead Storage | Firebase Firestore (client SDK only, no backend) |
| Analytics | Google Analytics 4 + Microsoft Clarity |
| i18n | next-i18next — English + Hindi/Hinglish |
| Images | Next.js `<Image>` — WebP auto-conversion, lazy load |
| Hosting | Vercel — zero-config Next.js, global CDN |

### 1.3 KPIs

| Metric | Target |
|--------|--------|
| WhatsApp Inquiries / Week | 80+ |
| Click-to-Call Rate | >= 10% of visitors |
| Form Submission Rate | >= 9% of visitors |
| Lead Quality Score | >= 70% qualified |
| Mobile Bounce Rate | < 35% |
| Google PageSpeed Mobile | >= 90 |
| Organic Traffic (90 days) | 500+ sessions/month |
| Leads Stored in Firestore | 100% of submissions |

---

## Section 2 — User Personas

### Persona A — Family Vacation Planner
- Age 30–50, married with children, Tier-1/Tier-2 cities
- 7-seater for families of 5–6, journeys of 4–7 days
- Primary fear: driver behavior near children/elders, hidden costs
- Conversion hook: social proof + budget transparency
- Trip type: Round Trip / Tour Package

### Persona B — Corporate / Business Traveler
- Age 25–45, professional, metro cities
- 4-seater, intercity transfers and airport drops, 1–3 days
- Primary fear: unreliability, unprofessional appearance
- Conversion hook: 30-second callback promise, verified driver badge
- Trip type: One-Way

### Persona C — Adventure / Tourist Explorer
- Age 22–40, solo or small group, travel enthusiast
- Multi-destination road trips, temple circuits, Himalayan routes
- Primary fear: missing hidden gems, all-India coverage gaps
- Conversion hook: driver-as-guide, popular route pages, Hindi toggle
- Trip type: Tour Package / Multi-day

---

## Section 3 — Feature Requirements

### FR-01 — Hero Section `[P0]`
- **Headline:** "Your Journey, Our Responsibility — Across All of India"
- **Sub-headline:** Friendly Drivers | Spotless Cabs | Guide-Like Expertise | All-India Coverage
- **CTA Button 1:** "Call Now: +91 9991224102" — `tel:+919991224102`, saffron bg, >= 52px mobile height
- **CTA Button 2:** "WhatsApp Us" — `https://wa.me/919991224102`, WhatsApp green, WA icon
- **Background:** Real cab photo (no stock), WebP, Next.js `<Image priority>`
- **Urgency Badge:** "We pick up in 30 seconds" — animated pulse ring (FR-14)

### FR-02 — Value Proposition Strip `[P0]`
5 icon + headline + description cards. Responsive: 5-col desktop → 2-col tablet → 1-col mobile.

| # | Icon | Headline | Description |
|---|------|----------|-------------|
| 1 | Map pin | All-India Permit | Travel anywhere, no boundaries |
| 2 | Star | Friendly Staff | Polite, calm, and composed always |
| 3 | Sparkle | Spotless Vehicles | Hygiene-first, inspected every trip |
| 4 | Compass | Driver as Guide | Local expertise for every destination |
| 5 | Wallet | Budget Planning | Know your costs before you go |

### FR-03 — Fleet Showcase `[P1]`
Two cards side-by-side (desktop), stacked (mobile):
- **4-Seater Card:** Sedan, AC, intercity-ready, individuals/small groups. "Get Quote" CTA → scrolls to form.
- **7-Seater Card:** MUV/SUV, family trips, ample boot space. "Get Quote" CTA → scrolls to form.
- Each card: real vehicle photo (WebP) + passenger badge + features list + CTA.

### FR-04 — All-India Coverage Section `[P1]`
- **Headline:** "From Kashmir to Kanyakumari — We Go Where You Go"
- India SVG map (inline, no external image) or popular routes text list
- Copy: "Licensed to operate across all Indian states. Any pickup, any drop, no restrictions."

### FR-05 — Driver-Guide Experience Section `[P1]`
- **Headline:** "Your Driver Knows the Stories Behind Every Temple, Market & Mountain"
- Three icon blocks: Local Knowledge | Hidden Gems | Safe Navigation
- **Emotional hook:** "Travel with your family like it's our own."

### FR-06 — Journey Planning & Budget Transparency `[P0]`
- **Headline:** "Plan Your Dream Trip — Know Every Rupee Before You Travel"
- 4-step flow: Share Details → Journey Plan → Budget Breakdown → Confirm via WhatsApp
- Trust badge: "Zero Hidden Charges Guarantee"
- Fear-reduction: "Verified drivers. Transparent billing. 24x7 support."

### FR-07 — Quick Confidence Boost Section `[P0 — NEW]`
**Placement: Directly BEFORE the inquiry form.**
- **Component A:** Google Reviews widget (star rating + count) — manual initially, real embed later
- **Component B:** Real cab photo gallery — 4–6 WebP images, lazy-loaded, captions
- **Component C:** Driver Profile Cards (see FR-08)
- **Trust Badges Row:** "Verified Drivers" | "Transparent Billing" | "24x7 Support" | "Zero Hidden Charges"
- **Headline:** "Real People. Real Journeys. Real Reviews."

```typescript
interface Review {
  name: string;
  rating: number; // 1–5
  text: string;
  date: string;
  route?: string; // e.g. "Delhi → Manali"
}
```

### FR-08 — Driver Profile Cards `[P1 — NEW]`
- **Headline:** "Meet Your Trusted Drivers — Experienced, Verified, and Ready to Guide You"
- Layout: horizontal scroll on mobile, 3-col grid on desktop
- Each card: photo, name, years of experience, states covered, specialty, languages spoken
- CTA on each card: "Book with [Name]" — pre-fills WhatsApp message with driver name

```typescript
interface Driver {
  name: string;
  photo: string;       // WebP path in /public/images/drivers/
  experience: number;  // years
  states: string[];
  specialty: string;   // e.g. "Himachal hill routes"
  languages: string[];
}
```

### FR-09 — Sample Pricing Section `[P0 — NEW]`
- **Headline:** "Popular Routes — Starting Fares at a Glance"
- Disclaimer: "Indicative ranges only. Request your free quote for exact pricing."
- Trust anchor: "Zero Hidden Charges Guarantee — what we quote is what you pay."
- CTA: "Get Your Exact Quote" → scrolls to form

| Route | 4-Seater | 7-Seater | Duration | Type |
|-------|----------|----------|----------|------|
| Delhi → Manali | ₹14,000–₹18,000 | ₹18,000–₹24,000 | 3 days | Tour |
| Jaipur → Udaipur | ₹6,000–₹9,000 | ₹9,000–₹13,000 | 1 day | One-way |
| Delhi → Agra | ₹3,500–₹5,500 | ₹5,500–₹8,000 | 1 day | Round trip |
| Varanasi → Bodh Gaya | ₹5,000–₹7,500 | ₹7,500–₹11,000 | 1 day | One-way |
| Mumbai → Shirdi | ₹5,000–₹7,000 | ₹7,500–₹10,500 | 1 day | Round trip |
| Delhi → Shimla | ₹8,000–₹11,000 | ₹12,000–₹16,000 | 2 days | Tour |
| Jaipur → Pushkar | ₹2,500–₹4,000 | ₹4,000–₹6,500 | 1 day | Round trip |
| Delhi → Haridwar | ₹5,000–₹7,000 | ₹7,500–₹11,000 | 1 day | Round trip |

---

## Section 4 — Inquiry Form Specification

### 4.1 Form Fields

| Status | Field | Type | Validation |
|--------|-------|------|------------|
| CORE | Number of Travelers | Stepper (1–7) | Min 1, Max 7, required |
| CORE | Journey Start Date | Date Picker | Future dates only, required |
| CORE | Duration (Days) | Stepper (1–30) | Min 1, Max 30, required |
| CORE | Pickup Location | Text + Autocomplete | Required, min 3 chars |
| CORE | Drop Location | Text + Autocomplete | Required, min 3 chars |
| NEW | Trip Type | Radio / Pill Select | One-Way \| Round Trip \| Tour Package, required |
| NEW | Budget Range | Segmented (Optional) | ~₹5k–10k \| ₹10k–25k \| ₹25k+, optional |
| OPT | Customer Name | Text | Optional, min 2 chars |
| OPT | Customer Phone | Tel | Optional, 10-digit Indian mobile |

### 4.2 TypeScript Interface

```typescript
// src/types/inquiry.ts
export interface InquiryFormData {
  numberOfTravelers:  number;
  journeyStartDate:   string;     // ISO date string
  durationDays:       number;
  pickupLocation:     string;
  dropLocation:       string;
  tripType:           TripType;   // NEW v2.0
  budgetRange?:       BudgetRange; // NEW v2.0
  customerName?:      string;
  customerPhone?:     string;
}

export type TripType    = 'one-way' | 'round-trip' | 'tour-package';
export type BudgetRange = '5k-10k'  | '10k-25k'   | '25k-plus';
```

### 4.3 WhatsApp Message Template

When form is submitted, construct this message, `encodeURIComponent()` it, and open:
`https://wa.me/919991224102?text=[encoded_message]`

```
New Booking Inquiry — Shiv Tour & Travels
-----------------------------------------
Travelers  : [numberOfTravelers]
Start Date : [journeyStartDate]
Duration   : [durationDays] Day(s)
Pickup     : [pickupLocation]
Drop       : [dropLocation]
Trip Type  : [tripType]
Budget     : [budgetRange or "Not specified"]
-----------------------------------------
Name       : [customerName or "Not provided"]
Contact    : [customerPhone or "Not provided"]
-----------------------------------------
Sent from: shivourtravels.com
```

### 4.4 Form Submission Flow

1. Client-side TypeScript validation on all required fields
2. Loading state on submit button: "Preparing your inquiry..."
3. **Simultaneously:** open WhatsApp deep link + write to Firestore
4. If WhatsApp open fails → trigger fallback modal (FR-13)
5. Success state: "Inquiry sent! We respond within 30 minutes."
6. Form resets after 5 seconds

### 4.5 Form UX Rules
- Submit button label: "Get My Free Quote on WhatsApp"
- Below button micro-copy: "Free quote. 30-min response. Zero spam."
- Inline errors — no page reload, red text below field
- Date picker blocks past dates, touch-optimized for iOS/Android
- Steppers have + / − buttons for mobile

---

## Section 5 — CTA & Contact Integration

### 5.1 Click-to-Call Placements
All instances use `tel:+919991224102`.
- Hero section — primary CTA, saffron background
- Sticky bottom-right floating button (mobile only, persists on scroll)
- Top-right nav icon (mobile only)
- Footer — full number as link
- After form submission success state

### 5.2 WhatsApp CTA Placements
All instances use `https://wa.me/919991224102`.
- Hero section — secondary CTA, WhatsApp green
- Bottom-left floating bubble, 60px, mobile only
- Each fleet card — "Get Quote on WhatsApp"
- Footer — "Chat With Us on WhatsApp"

### FR-12 — Exit Intent WhatsApp Popup `[P1 — NEW]`
- **Trigger:** `mouseleave` on `document` (desktop) OR 30-second inactivity (mobile)
- **Frequency:** Once per session — `sessionStorage.setItem('exitShown', 'true')`
- **Headline:** "Planning a trip? Chat with us instantly on WhatsApp!"
- **Sub-copy:** "We respond in 30 minutes. No spam. Just your perfect journey quote."
- **CTA:** "Chat on WhatsApp" → `wa.me` link | Secondary: "Call Now: +91 9991224102"
- **Dismiss:** X button or click-outside. Sets sessionStorage flag.

```typescript
// Component: src/components/ExitIntentModal.tsx
// Use useEffect to attach mouseleave listener on document
// Check sessionStorage before showing
// Cleanup listener on unmount
```

### FR-13 — WhatsApp Failure Fallback `[P1 — NEW]`
Triggers if WhatsApp deep link fails to open within 3 seconds.
- Option 1: "Retry WhatsApp" — retry the wa.me link
- Option 2: "Call Now: +91 9991224102" — `tel:` link
- Option 3: "Copy Number" → clipboard → button changes to "Copied ✓" for 2 seconds

### FR-14 — 30-Second Callback Badge `[P1 — NEW]`
- Badge text: "We pick up in 30 seconds."
- Visual: green badge, phone icon, animated Tailwind `animate-ping` outer ring
- Placement: adjacent to Call CTA in hero + near form submit

### 5.3 Floating Mobile CTA Bar
Fixed bottom bar, full width, mobile only:
- Left half (50%): WhatsApp icon + "WhatsApp Us" — green bg
- Right half (50%): Phone icon + "Call Now" — saffron bg
- z-index above all content, does not overlap form submit button

---

## Section 6 — Technical Architecture

### 6.1 Project Folder Structure

```
shiv-tour-and-travels/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── page.tsx                  # Homepage
│   │   ├── layout.tsx                # Root layout (SEO, fonts, analytics)
│   │   └── routes/
│   │       └── [slug]/
│   │           └── page.tsx          # SEO route landing pages
│   ├── components/
│   │   ├── HeroSection.tsx
│   │   ├── ValueStrip.tsx
│   │   ├── FleetSection.tsx
│   │   ├── CoverageSection.tsx
│   │   ├── DriverGuideSection.tsx
│   │   ├── BudgetPlanningSection.tsx
│   │   ├── TrustSection.tsx          # FR-07 Quick Confidence Boost
│   │   ├── DriverProfileCard.tsx     # FR-08
│   │   ├── PricingSection.tsx        # FR-09
│   │   ├── InquiryForm.tsx           # Main form
│   │   ├── ExitIntentModal.tsx       # FR-12
│   │   ├── WhatsAppFallback.tsx      # FR-13
│   │   ├── CallbackBadge.tsx         # FR-14
│   │   ├── FloatingCTABar.tsx
│   │   └── Footer.tsx
│   ├── lib/
│   │   ├── constants.ts              # ALL magic strings live here only
│   │   ├── whatsapp.ts               # buildWhatsAppMessage() utility
│   │   └── firebase.ts               # Firestore lead persistence
│   ├── types/
│   │   ├── inquiry.ts                # InquiryFormData, TripType, BudgetRange
│   │   └── driver.ts                 # Driver interface
│   └── data/
│       ├── routes.ts                 # SEO route pages static data
│       ├── drivers.ts                # Driver profiles (stub data)
│       └── pricing.ts                # Sample pricing table data
├── public/
│   ├── images/
│   │   ├── fleet/                    # Real cab photos — WebP
│   │   └── drivers/                  # Driver headshots — WebP
│   └── locales/
│       ├── en/common.json            # English strings
│       └── hi/common.json            # Hindi/Hinglish strings
├── .env.local                        # Firebase keys, GA4 ID (gitignored)
├── .env.example                      # Template with key names, empty values
├── tailwind.config.ts
├── tsconfig.json                     # strict: true
├── next.config.ts
└── pnpm-lock.yaml
```

### 6.2 Performance Targets

| Metric | Target |
|--------|--------|
| First Contentful Paint (FCP) | < 1.5s |
| Largest Contentful Paint (LCP) | < 2.5s |
| Cumulative Layout Shift (CLS) | < 0.1 |
| Google PageSpeed Mobile | >= 90 |
| JS Bundle (gzipped) | < 120 KB |
| Time to Interactive | < 3.5s |

### 6.3 Mobile-First Breakpoints (Tailwind)

| Breakpoint | px | Usage |
|------------|----|-------|
| *(default)* | 320px | Base — all layouts designed here first |
| `sm:` | 640px | Wider CTAs, nav adjustments |
| `md:` | 768px | 2-col value strip, fleet cards |
| `lg:` | 1024px | 5-col value strip, 3-col driver cards |
| `xl:` | 1280px | Max-width container, centred layout |

### 6.4 SEO Route Landing Pages

10 static pages under `/routes/[slug]/`. Each page must include:
- Unique H1 with route name
- Meta description containing phone number
- `TouristTrip` structured data schema
- Sample pricing for that route
- Inquiry form pre-filled with pickup/drop
- Real photos

| Slug | Target Query |
|------|-------------|
| `delhi-to-manali-cab` | delhi to manali cab booking |
| `jaipur-to-udaipur-taxi` | jaipur udaipur taxi price |
| `delhi-to-agra-cab` | delhi agra cab one day trip |
| `varanasi-bodh-gaya-cab` | varanasi bodh gaya taxi |
| `mumbai-shirdi-cab` | mumbai shirdi cab service |
| `delhi-to-shimla-taxi` | delhi shimla cab booking |
| `jaipur-pushkar-taxi` | jaipur pushkar taxi fare |
| `delhi-haridwar-rishikesh` | delhi haridwar rishikesh cab |
| `agra-jaipur-cab` | agra jaipur cab golden triangle |
| `all-india-cab-service` | all india cab service permit |

### 6.5 GA4 Event Map (All 16 Events)

| Event Name | Trigger | Category |
|------------|---------|----------|
| `hero_call_click` | Call CTA in hero | Conversion |
| `hero_whatsapp_click` | WhatsApp CTA in hero | Conversion |
| `form_view` | Form scrolled into viewport | Funnel |
| `form_start` | User focuses first field | Funnel |
| `form_field_complete` | Each field completed | Funnel |
| `form_submit_click` | Submit button clicked | Funnel |
| `form_submit_success` | WhatsApp deep link opened | Lead |
| `form_submit_fallback` | Fallback modal triggered | Lead |
| `exit_intent_shown` | Exit popup displayed | Retention |
| `exit_intent_whatsapp` | WA click from exit popup | Conversion |
| `floating_bar_call` | Floating bar Call tap | Conversion |
| `floating_bar_whatsapp` | Floating bar WA tap | Conversion |
| `pricing_section_view` | Pricing section in viewport | Engagement |
| `driver_profile_view` | Driver section in viewport | Engagement |
| `route_page_visit` | SEO route page visited | SEO Traffic |
| `language_toggle` | EN ↔ HI switch | UX |

### 6.6 Hindi / Hinglish Toggle `[P0]`

- Package: `next-i18next`
- Default: English. Toggle: `EN | HI` pill in top nav
- Scope: all headlines, CTAs, value props, form labels, micro-copy
- WhatsApp message sent in user's active language
- Hinglish tone (not formal Hindi): e.g. *"Apna safar shuru karein — koi chinta nahi"*

---

## Section 7 — Lead Persistence (Firebase Firestore)

### 7.1 Architecture
- Client-side Firebase SDK only — no backend server, no API routes
- Free tier: 50k reads/day, 20k writes/day — sufficient for launch phase
- Collection name: `leads`

### 7.2 Firestore Document Schema

```typescript
// src/lib/firebase.ts
interface LeadDocument {
  // Trip Details
  numberOfTravelers:  number;
  journeyStartDate:   string;
  durationDays:       number;
  pickupLocation:     string;
  dropLocation:       string;
  tripType:           string;
  budgetRange?:       string;
  // Customer
  customerName?:      string;
  customerPhone?:     string;
  // System Metadata — set automatically, never from form
  submittedAt:        Timestamp;  // serverTimestamp()
  source:             string;     // 'form' | 'exit-intent' | 'route-page'
  language:           string;     // 'en' | 'hi'
  whatsappStatus:     string;     // 'sent' | 'fallback' | 'unknown'
  routeSlug?:         string;     // populated if submitted from SEO route page
}
```

### 7.3 Security Rules (Firestore)
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /leads/{leadId} {
      allow read: if false;           // No public reads ever
      allow create: if isValidLead(); // Schema-validated writes only
    }
  }
}
```

---

## Section 8 — Content Strategy

### 8.1 Fear-Reduction Copy

| User Fear | Copy to Use |
|-----------|-------------|
| Driver behavior | "Our drivers are background-verified, trained to be polite, and treat every passenger like family." |
| Overcharging | "What we quote is what you pay. No surge, no hidden extras, no surprises." |
| Cleanliness | "Every cab is cleaned and sanitized before every trip — you'll see it the moment you step in." |
| Unreliability | "We confirm 24 hours before pickup and call you 30 minutes before arrival." |
| Coverage gaps | "Our permit covers every state and union territory in India. No exceptions." |

### 8.2 Emotional Hook Lines
Place these within section body copy — not as headings:
- *"Travel with your family like it's our own."* — Driver-guide section
- *"No hidden charges. No last-minute surprises. Just your journey, planned with care."* — Budget section
- *"Because every journey has a story — and we want yours to be perfect."* — Footer
- *"Your mother's safety on that hill road matters to us as much as it matters to you."* — Trust section

### 8.3 Trust Micro-Copy Placements

| Location | Copy |
|----------|------|
| Below form submit button | "Free quote. 30-min response. Zero spam." |
| Next to Call CTA | "We pick up in 30 seconds." |
| Form section header | "Real pricing. No commitment. Just your journey, planned." |
| Fleet cards | "Every cab cleaned and checked before your trip." |
| Driver cards | "Verified. Trained. Local knowledge. Ready." |
| Footer trust row | "Verified Drivers \| Transparent Billing \| 24x7 Support \| All-India Permit" |

### 8.4 Hindi/Hinglish Key Strings

| Element | Hindi/Hinglish |
|---------|----------------|
| Hero Headline | Aapka Safar, Hamari Zimmedari — Poore India Mein |
| Call CTA | Abhi Call Karein: +91 9991224102 |
| WA CTA | WhatsApp Par Poochein |
| Budget Section | Budget Pehle Janiye — Safar Bina Tension Kariye |
| Form Headline | Free Quote Paaye WhatsApp Par |
| Submit Button | WhatsApp Par Quote Maangein |
| Trust Badge | 30 Minute Mein Reply. Bilkul Free. |

---

## Section 9 — WhatsApp Business API Roadmap (Phase 2)

Phase 1 (launch): manual `wa.me` links. Phase 2 (post-launch):
- **Provider:** Wati.io (India-focused, affordable) or Meta Cloud API
- **Auto-reply on inquiry:** "Namaste! Aapki inquiry mili. 30 min mein quote bhejte hain — Shiv Tour & Travels"
- **Pre-approved templates:** Booking Confirmation | Trip Reminder | Festival Offers | Review Request
- **Lead linking:** WhatsApp conversation linked to Firestore lead via phone number

---

## Section 10 — Implementation Roadmap

| Phase | Timeline | Deliverables |
|-------|----------|-------------|
| 1 | Week 1–2 | Project init, design tokens, folder structure, constants.ts, types, .env setup |
| 2 | Week 3–4 | Homepage sections: Hero, Value Strip, Fleet, Coverage, Driver-Guide, Budget Planning |
| 3 | Week 5 | Trust section (FR-07), Driver Cards (FR-08), Pricing (FR-09), Hindi toggle (FR-15) |
| 4 | Week 6 | Inquiry form — all 9 fields, WhatsApp builder, Firestore persistence, fallback modal |
| 5 | Week 7 | Exit intent (FR-12), callback badge (FR-14), floating bar, all GA4 events wired |
| 6 | Week 8 | 10 SEO route pages, structured data, sitemap.xml, performance optimization |
| 7 | Week 9 | Cross-device QA, accessibility audit, content review with business owner |
| 8 | Week 10 | Production deploy to Vercel, DNS, analytics verification, go-live |

### Go-Live Checklist
- [ ] All CTAs tested on iOS Safari + Android Chrome (real devices)
- [ ] WhatsApp deep link delivers correctly formatted message to +91 9991224102
- [ ] Firebase Firestore receiving leads with correct schema
- [ ] GA4 DebugView confirms all 16 events firing
- [ ] Microsoft Clarity recording sessions
- [ ] PageSpeed Mobile >= 90
- [ ] All 10 SEO route pages submitted to Google Search Console
- [ ] Hindi toggle working for all copy
- [ ] Exit intent popup — once per session only
- [ ] Fallback modal triggers correctly on WhatsApp failure
- [ ] Zero console errors on mobile and desktop
- [ ] Form blocks past dates and invalid input

---

## Section 11 — Reference

### Constants (all defined in `src/lib/constants.ts`)
```typescript
export const BUSINESS_PHONE     = '+91 9991224102';
export const WHATSAPP_NUMBER    = '919991224102';
export const WHATSAPP_BASE_URL  = `https://wa.me/${WHATSAPP_NUMBER}`;
export const CALL_LINK          = 'tel:+919991224102';
export const BUSINESS_NAME      = 'Shiv Tour & Travels';
export const WEBSITE_URL        = 'https://shivourtravels.com';
export const RESPONSE_PROMISE   = '30 minutes';
```

### pnpm Setup
```bash
git clone https://github.com/manish-1614/shiv-tour-and-travels.git
cd shiv-tour-and-travels
pnpm install

# New v2.0 dependencies
pnpm add firebase next-i18next @next/third-parties

# Dev
pnpm dev

# Build + check
pnpm build && pnpm start
```

### .env.example (commit this, never commit .env.local)
```
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_GA4_MEASUREMENT_ID=
```
