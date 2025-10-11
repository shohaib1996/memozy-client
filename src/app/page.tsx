import { BenefitsSection } from "@/components/BenefitsSection/BenefitsSection";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { FloatingNavbar } from "@/components/Navbar/Navbar";
import { VisualDemoSection } from "@/components/VisualDemoSection/VisualDemoSection";

export default function Home() {
  return (
    <div>
      <FloatingNavbar />
      <HeroSection/>
      <BenefitsSection/>
      <VisualDemoSection/>
    </div>
  );
}
