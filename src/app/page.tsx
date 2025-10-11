import { BenefitsSection } from "@/components/BenefitsSection/BenefitsSection";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { FloatingNavbar } from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <FloatingNavbar />
      <HeroSection/>
      <BenefitsSection/>
    </div>
  );
}
