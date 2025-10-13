import { BenefitsSection } from "@/components/BenefitsSection/BenefitsSection";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { SmartFeaturesSection } from "@/components/SmartFeaturesSection/SmartFeaturesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection/TestimonialsSection";
import { VisualDemoSection } from "@/components/VisualDemoSection/VisualDemoSection";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <BenefitsSection/>
      <VisualDemoSection/>
      <SmartFeaturesSection/>
      <TestimonialsSection/>
    </div>
  );
}
