import HeroSection from '@/components/HeroSection';
import ValueStrip from '@/components/ValueStrip';
import FleetSection from '@/components/FleetSection';
import CoverageSection from '@/components/CoverageSection';
import DriverGuideSection from '@/components/DriverGuideSection';
import BudgetPlanningSection from '@/components/BudgetPlanningSection';
import TrustSection from '@/components/TrustSection';
import PricingSection from '@/components/PricingSection';
import InquiryForm from '@/components/InquiryForm';
import Footer from '@/components/Footer';
import FloatingCTABar from '@/components/FloatingCTABar';
import ExitIntentModal from '@/components/ExitIntentModal';

export default function HomePage() {
  return (
    <>
      <main className="pb-16 md:pb-0">
        <HeroSection />
        <ValueStrip />
        <FleetSection />
        <CoverageSection />
        <DriverGuideSection />
        <BudgetPlanningSection />
        <TrustSection />
        <PricingSection />
        <InquiryForm />
      </main>
      <Footer />
      <FloatingCTABar />
      <ExitIntentModal />
    </>
  );
}
