import { BenefitsSectionClient } from "./BenefitsSectionClient";

//   {
//     icon: "Drama",
//     title: "AI Roleplay",
//     description:
//       "Engage in playful, romantic, emotional, or fantasy chats tailored to your vibe.",
//     color: "from-purple-500 to-pink-500",
//   },

const benefits = [
  {
    icon: "MessageSquare",
    title: "Natural AI conversations",
    description:
      "Talk, journal, take notes, and organize tasks like you're chatting with a thoughtful friend.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: "Drama",
    title: "AI Roleplay",
    description:
      "Engage in playful, romantic, emotional, or fantasy chats tailored to your vibe.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: "ImageIcon",
    title: "Image Input & Interpretation",
    description:
      "Upload pictures for outfit feedback, math help, text extraction, or creative AI insights.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: "Mic",
    title: "Voice Messages & Custom AI Voice",
    description:
      "Hear Memozy reply in realistic voices that match your mood and style.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: "Brain",
    title: "Smart Organization",
    description:
      "Let Memozy auto-tag and neatly organize your notes, reminders, and thoughts.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: "Calendar",
    title: "Calendar & Meeting Sync",
    description:
      "Schedule meetings and sync them effortlessly to your phone's calendar.",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: "BookOpen",
    title: "Weekly Journal Summaries",
    description:
      "Get reflective, AI-generated recaps of your week every Sunday.",
    color: "from-amber-500 to-yellow-500",
  },
  {
    icon: "Bell",
    title: "Personalized Reminders",
    description:
      "Stay on track with smart, friendly nudges just when you need them.",
    color: "from-rose-500 to-pink-500",
  },
  {
    icon: "Sparkles",
    title: "Customizable AI Vibes",
    description:
      "Choose your vibe: Professional, Friendly, Romantic, or even bold 'RoastMe' mode.",
    color: "from-fuchsia-500 to-purple-500",
  },
  {
    icon: "Wand2",
    title: "Creative Tarot Decoder",
    description:
      "Decode confusing situationships with playful tarot-style AI readings.",
    color: "from-cyan-500 to-blue-500",
  },
];

export function BenefitsSection() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-violet-50 via-blue-50 to-cyan-50 dark:from-violet-950/30 dark:via-blue-950/30 dark:to-cyan-950/30">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 via-blue-500/5 to-cyan-500/5 dark:from-violet-500/10 dark:via-blue-500/10 dark:to-cyan-500/10" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Why People Fall in Love with Memozy
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the features that make Memozy your perfect AI companion
          </p>
        </div>

        <BenefitsSectionClient benefits={benefits} />
      </div>
    </section>
  );
}
