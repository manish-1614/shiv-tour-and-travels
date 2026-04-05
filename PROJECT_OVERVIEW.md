# Project Overview: Shiv Tour & Travels

Shiv Tour & Travels is a premier cab and tourism service provider operating across India. This document provides a comprehensive overview of the project's architecture, features, and the visual assets required to deliver a premium user experience.

---

## 1. Project Essence
- **Business Name:** Shiv Tour & Travels
- **Tagline:** "Journey with Trust. Arrive with Confidence."
- **Core Service:** 4-seater and 7-seater taxi services with an all-India permit.
- **Key Differentiators:** 
    - Spotlessly clean vehicles.
    - Drivers as knowledgeable local guides.
    - Transparent pricing with no hidden costs.
    - WhatsApp-first communication for instant quotes.

---

## 2. Technical Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database/Persistence:** Firebase Firestore (Lead storage)
- **Analytics:** GA4 + Microsoft Clarity
- **i18n:** next-i18next (English & Hindi/Hinglish support)
- **Deployment:** Vercel / GitHub Pages

---

## 3. Core Features & User Journey
1.  **Hero Section:** High-impact visual (video/image) with immediate Call and WhatsApp CTAs.
2.  **Value Propositions:** Highlight All-India Permit, Friendly Staff, Clean Cars, Driver-Guides, and Budget Planning.
3.  **Fleet Showcase:** Detailed cards for 4-Seater Sedans and 7-Seater MUVs/SUVs with price estimators.
4.  **Trust & Social Proof:** Real-time booking stats, Google reviews, and a gallery of real trip photos.
5.  **Driver Profiles:** Dedicated section to "Meet Your Drivers," showcasing their experience and specialties.
6.  **Interactive Inquiry Form:** Simplified 9-field form that triggers a WhatsApp deep link and saves leads to Firestore.
7.  **SEO Landing Pages:** 10+ dedicated routes (e.g., Delhi to Manali) to capture organic search traffic.

---

## 4. Expected Image Repository
This section defines the "expected scenes" for the project. These descriptions are designed to guide an AI image generation tool to create high-quality, brand-consistent assets.

### A. Hero & Banners
- **Hero Background (Video/Image):**
    - *Scene:* A POV shot from the passenger seat of a clean, modern white sedan driving through a scenic, sun-drenched winding road in the Himalayas (Manali/Shimla area). The dashboard is visible and dust-free. The focus is on the breathtaking mountains ahead through the windshield.
    - *Vibe:* Aspirational, safe, and adventurous.
- **Hero Fallback (Static):**
    - *Scene:* A professional, high-angle shot of a white Toyota Innova Crysta parked at a scenic viewpoint in Rajasthan, with an ancient fort or palace in the soft-focus background at sunset. The car is gleaming and positioned heroically.

### B. Fleet Showcase
- **4-Seater Sedan:**
    - *Scene:* A clean, white Maruti Suzuki Dzire or Honda Amaze parked on a modern city street in Delhi. Soft morning light, highlighting the car's polished exterior and "All India Permit" sticker on the windshield. No people visible.
- **7-Seater MUV/SUV:**
    - *Scene:* A powerful, white Toyota Innova Crysta or Mahindra XUV700 on a highway. The rear hatch is open to show ample, organized luggage space. High-end, premium feel.

### C. Trust & Gallery Section
- **Gallery 1: Interior Hygiene**
    - *Scene:* A close-up, wide-angle shot of the interior of a 4-seater sedan. The seats have plush, clean white covers. A small mineral water bottle and a box of tissues are neatly placed in the center armrest or door pocket.
- **Gallery 2: Highway Journey**
    - *Scene:* A long-exposure shot of a cab (white sedan) moving smoothly along the Yamuna Expressway at dusk, with the lights of the Taj Mahal appearing in the far distance. 
- **Gallery 3: Human Connection**
    - *Scene:* A middle-aged, friendly-looking Indian driver in a neat uniform (light blue shirt), smiling as he helps an elderly couple and a small child get into a spacious white SUV parked in front of a residential house.
- **Gallery 4: Scenic Destination**
    - *Scene:* A white SUV parked at the edge of the blue Pangong Lake in Ladakh. The reflection of the car is visible in the water. The snow-capped mountains are in the background.

### D. Driver Profiles
- **Driver 1 (Rajesh Kumar):**
    - *Character:* A friendly, professional Indian man in his late 40s. He has a warm, wrinkled smile and salt-and-pepper hair. Wearing a clean, pressed light-blue formal shirt.
    - *Background:* Soft-focus Himalayan mountain pass.
- **Driver 2 (Sunil Sharma):**
    - *Character:* An energetic, younger Indian man in his early 30s. He looks tech-savvy and enthusiastic. Wearing a neat polo shirt.
    - *Background:* Soft-focus temple architecture (Varanasi/Haridwar).
- **Driver 3 (Vikram Singh):**
    - *Character:* A strong, reliable-looking Indian man in his 50s. He looks experienced and calm. 
    - *Background:* Soft-focus desert dunes of Rajasthan.

### E. Destination Icons (for SEO Pages)
- **Delhi:** Red Fort silhouette at sunrise.
- **Manali:** Snow-covered pine trees and a wooden cottage.
- **Jaipur:** The Hawa Mahal with a colorful morning sky.
- **Varanasi:** A glowing lamp (Diya) on the Ganges river at night.
- **Agra:** A cinematic, side-view of the Taj Mahal through a stone archway.

---

## 5. Visual Guidelines for AI Generation
- **Vehicle Color:** Always use **White** for vehicles (standard for premium commercial cabs in India).
- **Style:** Photorealistic, high dynamic range (HDR), 8k resolution.
- **Lighting:** Golden hour (sunrise/sunset) for outdoor shots; bright, clean daylight for interiors.
- **Safety Emphasis:** Always include visible seatbelts; drivers should look alert and professional.
- **Permit:** Where applicable, show a small "All India Permit" text or badge in the corner of the windshield.
