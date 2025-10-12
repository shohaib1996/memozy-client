import { Button } from "@/components/ui/button";
import { BorderBeam } from "../ui/border-beam";
import Link from "next/link";
import playStore from "../../../public/play-store.png";
import appStore from "../../../public/app-store.png";
import Image from "next/image";
import { SmartFeaturesSectionClient } from "./SmartFeaturesSectionClient";

const features = [
  {
    category: "Organization",
    title: "Stay Organized Effortlessly",
    description:
      "Let Memozy handle the mental load. From auto-tagging notes to sending timely reminders, your thoughts are always organized and accessible.",
    subFeatures: [
      {
        icon: "Brain",
        title: "Smart Organization",
        description: "Auto-tag and organize your notes intelligently",
      },
      {
        icon: "Bell",
        title: "Personalized Reminders",
        description: "Get friendly nudges exactly when you need them",
      },
      {
        icon: "BookOpen",
        title: "Weekly Journal Summaries",
        description: "Reflective AI-generated recaps every Sunday",
      },
    ],
  },
  {
    category: "Emotion & Vibe",
    title: "Your AI Companion, Your Way",
    description:
      "Whether you need a professional assistant, a romantic chat partner, or someone to roast you — Memozy adapts to your mood and style with realistic AI voices.",
    subFeatures: [
      {
        icon: "Drama",
        title: "AI Roleplay",
        description: "Playful, romantic, or fantasy chats tailored to you",
      },
      {
        icon: "Mic",
        title: "Custom AI Voice",
        description: "Hear Memozy reply in realistic, mood-matching voices",
      },
      {
        icon: "Sparkles",
        title: "Customizable Vibes",
        description: "Professional, Friendly, Romantic, or RoastMe mode",
      },
    ],
  },
  {
    category: "Utility",
    title: "Powerful Tools for Everyday Life",
    description:
      "From syncing meetings to your calendar, interpreting images, to decoding confusing situations with tarot-style readings — Memozy is your all-in-one AI toolkit.",
    subFeatures: [
      {
        icon: "Calendar",
        title: "Calendar & Meeting Sync",
        description: "Schedule and sync meetings effortlessly",
      },
      {
        icon: "ImageIcon",
        title: "Image Interpretation",
        description: "Get outfit feedback, math help, or text extraction",
      },
      {
        icon: "Wand2",
        title: "Creative Tarot Decoder",
        description: "Decode situationships with playful AI readings",
      },
      {
        icon: "MessageSquare",
        title: "Natural Conversations",
        description: "Chat like you're talking to a thoughtful friend",
      },
    ],
  },
];

export function SmartFeaturesSection() {
  return (
    <section className="py-14 md:py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-500/30 via-blue-400/60 to-emerald-500/50 dark:from-violet-600/30 dark:via-blue-500/50 dark:to-emerald-600/40 -z-10" />

      <div className="container mx-auto">
        <SmartFeaturesSectionClient features={features} />

        {/* Bottom CTA */}
        <div className="text-center mt-20 md:mt-24 flex items-center justify-center gap-2 flex-wrap">
          <div className="flex flex-wrap gap-4">
            <Link
              rel="noopener noreferrer "
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.memozy.memozy"
            >
              <Button
                size="lg"
                className="relative overflow-hidden text-sm md:text-sm lg:text-lg px-2 md:px-4 lg:px-5 lg:py-6 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 text-white font-semibold flex items-center gap-2 hover:opacity-90 transition-all duration-300 cursor-pointer font-outfit"
              >
                <Image
                  src={playStore}
                  alt="Play Store"
                  width={24}
                  height={24}
                />
                Play Store
                <BorderBeam borderWidth={2} />
              </Button>
            </Link>
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href="https://apps.apple.com/us/app/memozy-ai-memory-w-character/id6740183131"
            >
              <Button
                size="lg"
                className="relative overflow-hidden text-sm md:text-sm lg:text-lg px-2 md:px-4 lg:px-5 lg:py-6 bg-gradient-to-r from-violet-500 via-indigo-500 to-blue-500 text-white font-semibold flex items-center gap-2 hover:opacity-90 transition-all duration-300 cursor-pointer font-outfit"
              >
                <Image src={appStore} alt="App Store" width={24} height={24} />
                App Store
                <BorderBeam borderWidth={2} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}