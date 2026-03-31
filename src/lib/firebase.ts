import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import type { InquiryFormData } from '@/types/inquiry';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

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
