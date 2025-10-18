import Head from "next/head";
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
  const featureJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Memozy Smart Features",
    itemListElement: features.map((feature, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: feature.title,
      description: feature.description,
    })),
  };
  return (
    <section className="py-14 md:py-20 px-4 relative overflow-hidden">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(featureJsonLd) }}
        />
      </Head>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-400/30 via-blue-400/30 to-emerald-500/30 dark:from-violet-600/30 dark:via-blue-500/50 dark:to-emerald-600/40 -z-10" />

      <div className="container mx-auto">
        <SmartFeaturesSectionClient features={features} />
      </div>
    </section>
  );
}
