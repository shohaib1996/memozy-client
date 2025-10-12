import { BenefitsSection } from "@/components/BenefitsSection/BenefitsSection";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { SmartFeaturesSection } from "@/components/SmartFeaturesSection/SmartFeaturesSection";
import { VisualDemoSection } from "@/components/VisualDemoSection/VisualDemoSection";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <BenefitsSection/>
      <VisualDemoSection/>
      {/* <SmartFeaturesSection/> */}
    </div>
  );
}
