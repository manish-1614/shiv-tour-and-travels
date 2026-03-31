# CURSOR_INSTRUCTIONS.md
# Shiv Tour & Travels — Web Application

> Read this file before generating ANY code, component, or file in this project.
> The full product specification is in `PRD.md`. The quick reference is in `CONTEXT.md`.

---

## 1. Project Identity

| Key | Value |
|-----|-------|
| Project | Shiv Tour & Travels — travel booking web application |
| Business Phone | +91 9991224102 |
| WhatsApp Number | 919991224102 (no + prefix for wa.me links) |
| GitHub Repo | https://github.com/manish-1614/shiv-tour-and-travels |
| Domain (target) | shivourtravels.com |

---

## 2. Mandatory Tech Stack

| Layer | Technology | Notes |
|-------|-----------|-------|
| Framework | **Next.js 14** — App Router only | Never use Pages Router |
| Language | **TypeScript** — `strict: true` | No `any`, no type suppression |
| Styling | **Tailwind CSS v3** — JIT | No CSS modules, no styled-components |
| Package Manager | **pnpm** | Never use npm or yarn |
| Lead Storage | **Firebase Firestore** — client SDK | No custom backend or API routes |
| Analytics | GA4 via `@next/third-parties` + MS Clarity | Via `<Script>` in layout.tsx |
| i18n | **next-i18next** | English default + Hindi/Hinglish toggle |
| Images | **Next.js `<Image>`** component | Never use `<img>` tags directly |
| Hosting | **Vercel** | Zero-config, automatic HTTPS |

---

## 3. Absolute Rules (Never Violate)

### Code Quality
- **TypeScript strict mode is mandatory.** Every component, function, and hook must be fully typed.
- **Define interfaces BEFORE writing components.** All types live in `src/types/`.
- **No `any` type.** If you don't know the type, define a proper interface.
- **No inline styles.** Use Tailwind utility classes only.
- **No `<img>` tags.** Always use Next.js `<Image>` component with `alt` text.
- **No Powershell commands** Always use windows command prompt terminal commands instead of powershell commands.

### Business Logic
- **The phone number `+91 9991224102` must NEVER be hardcoded in a component.** Import it from `src/lib/constants.ts` — always.
- **The WhatsApp URL must always be constructed from constants.** Never write `wa.me/...` inline.
- **Every form submission must SIMULTANEOUSLY:** open WhatsApp AND write to Firestore. Never one without the other.
- **If WhatsApp open fails,** the fallback modal (`WhatsAppFallback.tsx`) must trigger. Never silently fail.

### Architecture
- **No custom API routes** (`src/app/api/`) unless explicitly specified. Firebase client SDK handles all data.
- **All static data** (pricing, routes, driver profiles) lives in `src/data/` as typed TypeScript constants.
- **All magic strings** (phone, URLs, copy) live in `src/lib/constants.ts` only.
- **All environment variables** are prefixed `NEXT_PUBLIC_` and defined in `.env.example`.

### UX / Mobile
- **Design mobile-first.** Write base Tailwind classes for 320px, then `sm:`, `md:`, `lg:` overrides.
- **All tap targets >= 44px height** on mobile — CTAs, buttons, nav items.
- **The floating CTA bar** (Call + WhatsApp) must be present on every page on mobile.
- **The exit intent modal** checks `sessionStorage` before showing — never show twice per session.

---

## 4. Folder Structure (Strict — Do Not Deviate)

```
src/
├── app/
│   ├── layout.tsx          # Root — fonts, GA4, Clarity, i18n provider
│   ├── page.tsx            # Homepage — imports section components
│   └── routes/
│       └── [slug]/
│           └── page.tsx    # SEO landing pages
├── components/             # One component per file, PascalCase
│   ├── HeroSection.tsx
│   ├── ValueStrip.tsx
│   ├── FleetSection.tsx
│   ├── CoverageSection.tsx
│   ├── DriverGuideSection.tsx
│   ├── BudgetPlanningSection.tsx
│   ├── TrustSection.tsx
│   ├── DriverProfileCard.tsx
│   ├── PricingSection.tsx
│   ├── InquiryForm.tsx
│   ├── ExitIntentModal.tsx
│   ├── WhatsAppFallback.tsx
│   ├── CallbackBadge.tsx
│   ├── FloatingCTABar.tsx
│   └── Footer.tsx
├── lib/
│   ├── constants.ts        # ALL business constants — single source of truth
│   ├── whatsapp.ts         # buildWhatsAppMessage() — message construction only
│   └── firebase.ts         # saveLead() — Firestore write only
├── types/
│   ├── inquiry.ts          # InquiryFormData, TripType, BudgetRange
│   └── driver.ts           # Driver, Review interfaces
└── data/
    ├── routes.ts           # SEO route page static data
    ├── drivers.ts          # Driver profiles array
    └── pricing.ts          # Sample pricing table data
```

---

## 5. Naming Conventions

| Type | Convention | Example |
|------|-----------|---------|
| Components | PascalCase, `.tsx` | `HeroSection.tsx` |
| Utilities / lib | camelCase, `.ts` | `whatsapp.ts` |
| Types / interfaces | PascalCase in `types/` | `InquiryFormData` |
| Data constants | camelCase exports | `export const pricingData = [...]` |
| CSS classes | Tailwind only, no custom class names unless needed | `className="flex items-center gap-4"` |
| Event handlers | `handle` prefix | `handleSubmit`, `handleCallClick` |
| Boolean props | `is` or `has` prefix | `isLoading`, `hasError` |

---

## 6. Component Template

Every new component must follow this structure:

```typescript
// src/components/ComponentName.tsx
'use client'; // only if needed — prefer server components

import type { FC } from 'react';

interface ComponentNameProps {
  // Always define props interface, even if empty
}

const ComponentName: FC<ComponentNameProps> = ({ ...props }) => {
  return (
    <section>
      {/* content */}
    </section>
  );
};

export default ComponentName;
```

---

## 7. Constants File (src/lib/constants.ts)

This is the FIRST file that must exist. All components import from here.

```typescript
// src/lib/constants.ts

// Business
export const BUSINESS_NAME      = 'Shiv Tour & Travels';
export const BUSINESS_PHONE     = '+91 9991224102';
export const WHATSAPP_NUMBER    = '919991224102';
export const WHATSAPP_BASE_URL  = `https://wa.me/${WHATSAPP_NUMBER}`;
export const CALL_LINK          = 'tel:+919991224102';
export const WEBSITE_URL        = 'https://shivourtravels.com';

// Brand copy
export const HERO_HEADLINE      = 'Your Journey, Our Responsibility — Across All of India';
export const RESPONSE_PROMISE   = '30 minutes';
export const TRUST_TAGLINE      = 'Zero Hidden Charges Guarantee';

// WhatsApp general greeting (not form-generated)
export const WA_GENERAL_LINK    = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent('Hello, I want to book a cab with Shiv Tour & Travels.')}`;
```

---

## 8. WhatsApp Message Builder (src/lib/whatsapp.ts)

```typescript
// src/lib/whatsapp.ts
import type { InquiryFormData } from '@/types/inquiry';
import { WHATSAPP_BASE_URL } from './constants';

export function buildWhatsAppMessage(data: InquiryFormData): string {
  const lines = [
    'New Booking Inquiry — Shiv Tour & Travels',
    '-----------------------------------------',
    `Travelers  : ${data.numberOfTravelers}`,
    `Start Date : ${data.journeyStartDate}`,
    `Duration   : ${data.durationDays} Day(s)`,
    `Pickup     : ${data.pickupLocation}`,
    `Drop       : ${data.dropLocation}`,
    `Trip Type  : ${data.tripType}`,
    `Budget     : ${data.budgetRange ?? 'Not specified'}`,
    '-----------------------------------------',
    `Name       : ${data.customerName ?? 'Not provided'}`,
    `Contact    : ${data.customerPhone ?? 'Not provided'}`,
    '-----------------------------------------',
    'Sent from: shivourtravels.com',
  ];
  return lines.join('\n');
}

export function buildWhatsAppURL(data: InquiryFormData): string {
  const message = buildWhatsAppMessage(data);
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
}
```

---

## 9. Firestore Lead Persistence (src/lib/firebase.ts)

```typescript
// src/lib/firebase.ts
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import type { InquiryFormData } from '@/types/inquiry';

const firebaseConfig = {
  apiKey:     process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId:  process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  appId:      process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db  = getFirestore(app);

export async function saveLead(
  data: InquiryFormData,
  meta: { source: string; language: string; whatsappStatus: string; routeSlug?: string }
): Promise<void> {
  await addDoc(collection(db, 'leads'), {
    ...data,
    ...meta,
    submittedAt: serverTimestamp(),
  });
}
```

---

## 10. Form Submission Pattern (InquiryForm.tsx)

The form submit handler must always follow this exact pattern:

```typescript
const handleSubmit = async (data: InquiryFormData) => {
  setIsLoading(true);
  try {
    const waURL = buildWhatsAppURL(data);
    // STEP 1: Open WhatsApp
    const waWindow = window.open(waURL, '_blank');
    // STEP 2: Save to Firestore regardless
    await saveLead(data, {
      source: 'form',
      language: locale,
      whatsappStatus: waWindow ? 'sent' : 'fallback',
    });
    // STEP 3: Show fallback if WhatsApp failed
    if (!waWindow) setShowFallback(true);
    else setShowSuccess(true);
  } catch (error) {
    console.error('Lead save failed:', error);
    setShowFallback(true);
  } finally {
    setIsLoading(false);
  }
};
```

---

## 11. Tailwind Design Tokens

Add these to `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      brand: {
        saffron:  '#E8690A',
        blue:     '#1A3A5C',
        gold:     '#C9A84C',
        wa:       '#25D366', // WhatsApp green
      }
    },
    screens: {
      xs: '320px', // Add extra small breakpoint
    },
    fontFamily: {
      heading: ['var(--font-heading)', 'sans-serif'],
      body:    ['var(--font-body)',    'sans-serif'],
    }
  }
}
```

Use `bg-brand-saffron`, `text-brand-blue`, `bg-brand-wa` etc. throughout.

---

## 12. SEO Pattern for Route Pages

Each `src/app/routes/[slug]/page.tsx` must export metadata:

```typescript
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const route = routesData.find(r => r.slug === params.slug);
  return {
    title: `${route?.title} — Shiv Tour & Travels | +91 9991224102`,
    description: route?.metaDescription,
    openGraph: { ... }
  };
}
```

---

## 13. Accessibility Rules
- All `<Image>` must have descriptive `alt` text — never empty or "image"
- All form fields must have associated `<label>` — not just placeholder
- Error messages must use `role="alert"` for screen reader announcement
- Minimum contrast ratio: 4.5:1 for body text, 3:1 for large text
- Interactive elements: minimum `h-11` (44px) on mobile

---

## 14. What NOT to Generate

- ❌ No custom API routes (`src/app/api/`) — Firebase client SDK handles everything
- ❌ No `<img>` tags — always `<Image>` from `next/image`
- ❌ No hardcoded phone numbers, WhatsApp URLs, or business names in components
- ❌ No CSS modules or styled-components
- ❌ No `npm install` or `yarn add` commands — always `pnpm add`
- ❌ No Pages Router (`src/pages/`) — App Router only
- ❌ No `any` type — define proper interfaces
- ❌ No stock photography references — all images from `/public/images/` with real photos
