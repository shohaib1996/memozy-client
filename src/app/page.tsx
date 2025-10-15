export const metadata = {
  title: "Memozy – Your AI Memory & Companion | Reviews, Features & FAQs",
  description:
    "Discover Memozy, the AI memory and productivity companion trusted by thousands. Explore its smart features, real user reviews, and FAQs that show how Memozy helps you stay organized, reflective, and focused every day.",
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
  },
};

import { HeroSection } from "@/components/HeroSection/HeroSection";
import dynamic from "next/dynamic";

const BenefitsSection = dynamic(() =>
  import("@/components/BenefitsSection/BenefitsSection").then(
    (mod) => mod.BenefitsSection
  )
);
const VisualDemoSection = dynamic(() =>
  import("@/components/VisualDemoSection/VisualDemoSection").then(
    (mod) => mod.VisualDemoSection
  )
);
const SmartFeaturesSection = dynamic(() =>
  import("@/components/SmartFeaturesSection/SmartFeaturesSection").then(
    (mod) => mod.SmartFeaturesSection
  )
);
const TestimonialsSection = dynamic(() =>
  import("@/components/TestimonialsSection/TestimonialsSection").then(
    (mod) => mod.TestimonialsSection
  )
);
const FaqSection = dynamic(() =>
  import("@/components/FaqSection/FaqSection").then((mod) => mod.FaqSection)
);
const SecondaryCTASection = dynamic(() =>
  import("@/components/SecondaryCTASection/SecondaryCTASection").then(
    (mod) => mod.SecondaryCTASection
  )
);

export default function Home() {
  return (
    <div>
      <HeroSection />
      <BenefitsSection />
      <VisualDemoSection />
      <SmartFeaturesSection />
      <TestimonialsSection />
      <FaqSection />
      <SecondaryCTASection />
    </div>
  );
}
