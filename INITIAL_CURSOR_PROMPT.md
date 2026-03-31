# INITIAL_CURSOR_PROMPT.md
# Copy-paste this as your FIRST message to Cursor after placing the 3 files.

---

## PROMPT — PASTE THIS INTO CURSOR CHAT

```
Read @CURSOR_INSTRUCTIONS.md and @CONTEXT.md fully before proceeding.
Also read @PRD.md — specifically Section 6.1 (folder structure), Section 4.2 (TypeScript interfaces), and Section 11 (constants).

This is the project bootstrap task. Do NOT create any UI components yet.
Execute ONLY the following steps in this exact order:

---

STEP 1 — Install dependencies
Run:
  pnpm add firebase next-i18next @next/third-parties
  pnpm add -D @types/node

---

STEP 2 — Configure TypeScript
Ensure tsconfig.json has:
  "strict": true
  "baseUrl": "."
  "paths": { "@/*": ["./src/*"] }

---

STEP 3 — Configure Tailwind
Update tailwind.config.ts to add:
  - Brand color tokens: brand.saffron (#E8690A), brand.blue (#1A3A5C), brand.gold (#C9A84C), brand.wa (#25D366)
  - Extra screen: xs: '320px'
  - Font family slots: heading and body (using CSS variables)
  - Content paths covering src/app and src/components

---

STEP 4 — Create environment variable template
Create .env.example at repo root:
  NEXT_PUBLIC_FIREBASE_API_KEY=
  NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
  NEXT_PUBLIC_FIREBASE_PROJECT_ID=
  NEXT_PUBLIC_FIREBASE_APP_ID=
  NEXT_PUBLIC_GA4_MEASUREMENT_ID=

Also create .env.local with the same keys (I will fill in values manually).
Add .env.local to .gitignore if not already present.

---

STEP 5 — Create all TypeScript type files

Create src/types/inquiry.ts:
  export interface InquiryFormData { ... }
  export type TripType = 'one-way' | 'round-trip' | 'tour-package'
  export type BudgetRange = '5k-10k' | '10k-25k' | '25k-plus'
(Use the exact interface from CURSOR_INSTRUCTIONS.md Section 9 / PRD.md Section 4.2)

Create src/types/driver.ts:
  export interface Driver { name, photo, experience, states, specialty, languages }
  export interface Review { name, rating, text, date, route? }

---

STEP 6 — Create src/lib/constants.ts
Use the exact values from CURSOR_INSTRUCTIONS.md Section 7.
This file must export: BUSINESS_NAME, BUSINESS_PHONE, WHATSAPP_NUMBER, WHATSAPP_BASE_URL, CALL_LINK, WEBSITE_URL, HERO_HEADLINE, RESPONSE_PROMISE, TRUST_TAGLINE, WA_GENERAL_LINK

---

STEP 7 — Create src/lib/whatsapp.ts
Implement buildWhatsAppMessage(data: InquiryFormData): string
Implement buildWhatsAppURL(data: InquiryFormData): string
Use the exact implementation from CURSOR_INSTRUCTIONS.md Section 8.

---

STEP 8 — Create src/lib/firebase.ts
Implement saveLead(data: InquiryFormData, meta: {...}): Promise<void>
Use the exact implementation from CURSOR_INSTRUCTIONS.md Section 9.
Use getApps() guard to prevent duplicate initialization.

---

STEP 9 — Create stub data files

Create src/data/pricing.ts — export pricingData array using the 8-route table from PRD.md Section FR-09.
Each entry: { route, fourSeater, sevenSeater, duration, type }

Create src/data/drivers.ts — export driversData array with 3 stub driver objects matching the Driver interface.
Use placeholder image paths: '/images/drivers/driver-1.webp' etc.

Create src/data/routes.ts — export routesData array with all 10 SEO route slugs, titles, and meta descriptions from PRD.md Section 6.4.

---

STEP 10 — Create placeholder i18n locale files

Create public/locales/en/common.json with keys for: hero.headline, hero.subheadline, cta.call, cta.whatsapp, form.title, form.submit, trust.badge
Create public/locales/hi/common.json with the Hindi/Hinglish equivalents from PRD.md Section 8.4.

---

STEP 11 — Run a type check
Run: pnpm tsc --noEmit
Fix any TypeScript errors before stopping.

---

STEP 12 — Confirm completion
List all created files and confirm:
  - Zero TypeScript errors
  - Zero ESLint errors
  - All imports resolve correctly
  - constants.ts is the only file containing the phone number string
```

---

## WHAT TO DO AFTER THIS PROMPT SUCCEEDS

Once the bootstrap is complete and `pnpm tsc --noEmit` is clean, use these follow-up prompts **one at a time**, in order:

### Prompt 2 — Root Layout & Global Styles
```
Read @CONTEXT.md.
Create src/app/layout.tsx with:
- Google Fonts loaded via next/font (pick a clean heading + body pair, e.g. Poppins + Inter)
- GA4 via @next/third-parties/google GoogleAnalytics component, using NEXT_PUBLIC_GA4_MEASUREMENT_ID
- Microsoft Clarity script via next/script with Strategy="afterInteractive"
- next-i18next appWithTranslation wrapper
- Base HTML metadata: title, description, og:tags using constants from src/lib/constants.ts
- Tailwind base classes on <body>: font-body, text-brand-blue, bg-white
Do not create any page content yet.
```

### Prompt 3 — Homepage Shell
```
Read @CONTEXT.md.
Create src/app/page.tsx as a clean shell that:
- Imports all 10 section components (they don't exist yet — use placeholder divs with the component name as text)
- Has the correct top-to-bottom section order from CONTEXT.md
- Renders <FloatingCTABar /> and <ExitIntentModal /> outside the main flow
Do not implement any component yet — just the shell with TODO placeholders.
```

### Prompt 4 — HeroSection Component
```
Read @CONTEXT.md and @CURSOR_INSTRUCTIONS.md Section 3 and 7.
Build src/components/HeroSection.tsx:
- Full-width hero, mobile-first
- Headline from HERO_HEADLINE constant, sub-headline as specified in FR-01
- CTA Button 1: saffron bg, "Call Now" with phone icon, uses CALL_LINK from constants
- CTA Button 2: brand-wa bg, "WhatsApp Us" with WA icon, uses WA_GENERAL_LINK from constants
- <CallbackBadge /> component inline (create it: green badge + phone icon + animate-ping ring + "We pick up in 30 seconds")
- Background: Next.js <Image> with priority prop, placeholder blur, alt text
- Fully responsive: stacked on mobile, split layout on lg:
- Fire GA4 events: hero_call_click and hero_whatsapp_click on respective CTA clicks
```

### Prompt 5 — FloatingCTABar
```
Read @CONTEXT.md.
Build src/components/FloatingCTABar.tsx:
- Fixed bottom bar, full width, visible ONLY on mobile (hidden md:)
- z-50, flex row
- Left 50%: WhatsApp button — brand-wa bg, white text, WA icon, uses WA_GENERAL_LINK
- Right 50%: Call button — brand-saffron bg, white text, phone icon, uses CALL_LINK
- Both buttons h-14 minimum
- Fire GA4: floating_bar_whatsapp and floating_bar_call on click
- Must not overlap the form submit button — add pb-16 to main content on mobile
```

> Continue with one component prompt per session. Always start with `Read @CONTEXT.md` in every prompt. For complex components like InquiryForm, also add `Read @PRD.md Section 4`.

---

## TIPS FOR WORKING WITH CURSOR ON THIS PROJECT

1. **One component per prompt.** Cursor produces better output with focused scope.

2. **Always start prompts with `Read @CONTEXT.md`** — this keeps Cursor anchored to your stack and conventions.

3. **For the InquiryForm,** explicitly say: *"Read @PRD.md Section 4 fully before starting."* The form is the most complex component and needs full PRD context.

4. **For SEO route pages,** say: *"Read @PRD.md Section 6.4 and 6.5."* These pages need structured data and pre-filled form logic.

5. **When Cursor drifts** (uses `npm`, uses `<img>`, hardcodes phone number), stop and say: *"Violation: [what it did]. Refer to CURSOR_INSTRUCTIONS.md Rule [#]. Fix this."*

6. **After every 3–4 components,** run `pnpm tsc --noEmit` and paste any errors back to Cursor to fix.

7. **Never let Cursor generate data and components in the same prompt.** Data first, component second.
