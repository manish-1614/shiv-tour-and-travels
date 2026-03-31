# CONTEXT.md — Shiv Tour & Travels
> Quick reference for Cursor. Use `@CONTEXT.md` for routine tasks.
> Use `@PRD.md` when starting a new major feature or section.

---

## Project in One Line
**A Next.js 14 + TypeScript + Tailwind + pnpm web app for an Indian cab company that converts visitors via WhatsApp inquiry forms and Click-to-Call CTAs.**

---

## Business Essentials
| Key | Value |
|-----|-------|
| Business | Shiv Tour & Travels |
| Phone | +91 9991224102 |
| Call Link | `tel:+919991224102` |
| WhatsApp Link | `https://wa.me/919991224102` |
| Repo | github.com/manish-1614/shiv-tour-and-travels |

> ⚠️ Never hardcode these in components. Import from `src/lib/constants.ts`.

---

## Stack at a Glance
```
Next.js 14 (App Router) · TypeScript strict · Tailwind CSS v3 · pnpm
Firebase Firestore (leads) · GA4 + MS Clarity · next-i18next (EN + HI)
Hosting: Vercel
```

---

## The Golden Rule of This Project
Every form submission must do **two things simultaneously:**
1. Open `wa.me` WhatsApp deep link with pre-filled message
2. Write lead to Firebase Firestore

If WhatsApp fails → show `<WhatsAppFallback />` modal. Firestore write always happens.

---

## Key Files
| File | Purpose |
|------|---------|
| `src/lib/constants.ts` | ALL business strings — phone, URLs, copy. Single source of truth. |
| `src/lib/whatsapp.ts` | `buildWhatsAppURL(data)` — constructs WA message from form data |
| `src/lib/firebase.ts` | `saveLead(data, meta)` — writes to Firestore `leads` collection |
| `src/types/inquiry.ts` | `InquiryFormData`, `TripType`, `BudgetRange` interfaces |
| `src/types/driver.ts` | `Driver`, `Review` interfaces |
| `src/data/pricing.ts` | Sample pricing table data |
| `src/data/drivers.ts` | Driver profile stubs |
| `src/data/routes.ts` | SEO route landing page data |

---

## Components Map (Page Order)
```
Homepage (page.tsx) renders these sections top-to-bottom:

1.  <HeroSection />            — Headline + dual CTAs + urgency badge
2.  <ValueStrip />             — 5 value proposition cards
3.  <FleetSection />           — 4-seater + 7-seater cards
4.  <CoverageSection />        — All-India permit + map
5.  <DriverGuideSection />     — Driver-as-guide storytelling
6.  <BudgetPlanningSection />  — 4-step journey planning flow
7.  <TrustSection />           — Reviews + real photos + driver cards  ← BEFORE FORM
8.  <PricingSection />         — Sample pricing table
9.  <InquiryForm />            — Main lead capture form  ← CONVERSION POINT
10. <Footer />                 — Contact, links, copyright

Always present (all pages):
- <FloatingCTABar />    — Fixed bottom bar: WhatsApp | Call (mobile only)
- <ExitIntentModal />   — Exit intent popup (once per session)
- <WhatsAppFallback />  — Fallback if WhatsApp link fails
```

---

## Form Fields (9 total)
| Field | Required | Type |
|-------|----------|------|
| numberOfTravelers | Yes | Stepper 1–7 |
| journeyStartDate | Yes | Date (future only) |
| durationDays | Yes | Stepper 1–30 |
| pickupLocation | Yes | Text |
| dropLocation | Yes | Text |
| tripType | Yes | `'one-way' \| 'round-trip' \| 'tour-package'` |
| budgetRange | No | `'5k-10k' \| '10k-25k' \| '25k-plus'` |
| customerName | No | Text |
| customerPhone | No | Tel (10-digit Indian) |

---

## Brand Colors (Tailwind tokens)
| Token | Hex | Usage |
|-------|-----|-------|
| `brand-saffron` | `#E8690A` | Primary CTAs, call buttons, accents |
| `brand-blue` | `#1A3A5C` | Headlines, nav, trust elements |
| `brand-gold` | `#C9A84C` | Highlights, badges, dividers |
| `brand-wa` | `#25D366` | WhatsApp buttons only |

---

## Tailwind Mobile-First Rules
- Write base classes for 320px first, always
- Use `sm:` (640px) → `md:` (768px) → `lg:` (1024px) → `xl:` (1280px) for overrides
- All tap targets: minimum `h-11` (44px) on mobile
- Floating CTA bar: `fixed bottom-0 left-0 right-0 z-50 flex md:hidden`

---

## SEO Route Pages
10 static pages at `/routes/[slug]/`. Slugs:
`delhi-to-manali-cab` · `jaipur-to-udaipur-taxi` · `delhi-to-agra-cab` ·
`varanasi-bodh-gaya-cab` · `mumbai-shirdi-cab` · `delhi-to-shimla-taxi` ·
`jaipur-pushkar-taxi` · `delhi-haridwar-rishikesh` · `agra-jaipur-cab` · `all-india-cab-service`

Each page: unique H1 + meta + TouristTrip schema + pre-filled form + route pricing.

---

## GA4 Events to Fire
`hero_call_click` · `hero_whatsapp_click` · `form_view` · `form_start` ·
`form_field_complete` · `form_submit_click` · `form_submit_success` ·
`form_submit_fallback` · `exit_intent_shown` · `exit_intent_whatsapp` ·
`floating_bar_call` · `floating_bar_whatsapp` · `pricing_section_view` ·
`driver_profile_view` · `route_page_visit` · `language_toggle`

---

## Environment Variables (.env.local)
```
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_GA4_MEASUREMENT_ID=
```

---

## Performance Targets
| Metric | Target |
|--------|--------|
| PageSpeed Mobile | >= 90 |
| LCP | < 2.5s |
| CLS | < 0.1 |
| JS Bundle (gzipped) | < 120 KB |

---

## pnpm Commands
```bash
pnpm dev          # local development
pnpm build        # production build
pnpm lint         # ESLint check
pnpm type-check   # tsc --noEmit
```
