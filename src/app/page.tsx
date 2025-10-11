import { BenefitsSection } from "@/components/BenefitsSection/BenefitsSection";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { VisualDemoSection } from "@/components/VisualDemoSection/VisualDemoSection";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <BenefitsSection/>
      <VisualDemoSection/>
    </div>
  );
}
