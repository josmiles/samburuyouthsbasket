import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ChallengeSection from "@/components/ChallengeSection";
import SolutionSection from "@/components/SolutionSection";
import MissionSection from "@/components/MissionSection";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import ImpactSection from "@/components/ImpactSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import GallerySection from "@/components/GallerySection";
import BusinessModelSection from "@/components/BusinessModelSection";
import FinancialSection from "@/components/FinancialSection";
import WomenSection from "@/components/WomenSection";
import InvestSection from "@/components/InvestSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <ChallengeSection />
        <SolutionSection />
        <MissionSection />
        <WhoWeAreSection />
        <ImpactSection />
        <BeforeAfterSection />
        <GallerySection />
        <BusinessModelSection />
        <FinancialSection />
        <WomenSection />
        <InvestSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
