"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Brain,
  Bell,
  BookOpen,
  Drama,
  Mic,
  Sparkles,
  Calendar,
  ImageIcon,
  Wand2,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BorderBeam } from "../ui/border-beam";
import { AnimatedShinyText } from "../ui/animated-shiny-text";
import Image from "next/image";
import playStore from "../../../public/play-store.png";
import appStore from "../../../public/app-store.png";
import Link from "next/link";

const iconGradients = [
  // Organization features
  "from-purple-500 to-pink-500", // Brain - Smart Organization
  "from-blue-500 to-cyan-500", // Bell - Personalized Reminders
  "from-amber-500 to-orange-500", // BookOpen - Weekly Journal Summaries
  // Emotion & Vibe features
  "from-rose-500 to-red-500", // Drama - AI Roleplay
  "from-indigo-500 to-purple-500", // Mic - Custom AI Voice
  "from-fuchsia-500 to-pink-500", // Sparkles - Customizable Vibes
  // Utility features
  "from-green-500 to-emerald-500", // Calendar - Calendar & Meeting Sync
  "from-violet-500 to-purple-500", // ImageIcon - Image Interpretation
  "from-teal-500 to-cyan-500", // Wand2 - Creative Tarot Decoder
  "from-sky-500 to-blue-500", // MessageSquare - Natural Conversations
];

const features = [
  {
    category: "Organization",
    title: "Stay Organized Effortlessly",
    description:
      "Let Memozy handle the mental load. From auto-tagging notes to sending timely reminders, your thoughts are always organized and accessible.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/organized-notes-and-reminders-interface-GzztELoldFpaQo3bWJpT8Qc931WvnZ.jpg",
    subFeatures: [
      {
        icon: Brain,
        title: "Smart Organization",
        description: "Auto-tag and organize your notes intelligently",
      },
      {
        icon: Bell,
        title: "Personalized Reminders",
        description: "Get friendly nudges exactly when you need them",
      },
      {
        icon: BookOpen,
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
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/ai-chat-interface-with-different-personality-modes-j2RQrliB5jLAMwaJ3hnuUAMBbuRZiy.jpg",
    subFeatures: [
      {
        icon: Drama,
        title: "AI Roleplay",
        description: "Playful, romantic, or fantasy chats tailored to you",
      },
      {
        icon: Mic,
        title: "Custom AI Voice",
        description: "Hear Memozy reply in realistic, mood-matching voices",
      },
      {
        icon: Sparkles,
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
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/ai-utility-tools-calendar-and-image-analysis-DyUeWzoOwRW3IylVdm1Ei0DbraKB0y.jpg",
    subFeatures: [
      {
        icon: Calendar,
        title: "Calendar & Meeting Sync",
        description: "Schedule and sync meetings effortlessly",
      },
      {
        icon: ImageIcon,
        title: "Image Interpretation",
        description: "Get outfit feedback, math help, or text extraction",
      },
      {
        icon: Wand2,
        title: "Creative Tarot Decoder",
        description: "Decode situationships with playful AI readings",
      },
      {
        icon: MessageSquare,
        title: "Natural Conversations",
        description: "Chat like you're talking to a thoughtful friend",
      },
    ],
  },
];

function FeatureBlock({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isReversed = index % 2 === 1;

  const startingGradientIndex = feature.subFeatures.reduce((acc, _, idx) => {
    if (index === 0) return 0;
    if (index === 1) return 3;
    return 6;
  }, 0);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center  ${
        isReversed ? "md:grid-flow-dense" : ""
      }`}
    >
      {/* Text Content */}
      <div className={`space-y-6 ${isReversed ? "md:col-start-2" : ""}`}>
        <div className="space-y-3">
          <motion.div
            initial={{ opacity: 0, x: isReversed ? 20 : -20 }}
            animate={
              isInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: isReversed ? 20 : -20 }
            }
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-block"
          >
            <span className="relative inline-block text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full overflow-visible">
              <AnimatedShinyText>{feature.category}</AnimatedShinyText>
              <BorderBeam />
            </span>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, x: isReversed ? 20 : -20 }}
            animate={
              isInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: isReversed ? 20 : -20 }
            }
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-3xl md:text-4xl font-bold text-balance"
          >
            {feature.title}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, x: isReversed ? 20 : -20 }}
            animate={
              isInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: isReversed ? 20 : -20 }
            }
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-muted-foreground text-lg text-pretty leading-relaxed"
          >
            {feature.description}
          </motion.p>
        </div>

        {/* Sub-features */}
        <div className="space-y-4">
          {feature.subFeatures.map((subFeature, subIndex) => (
            <motion.div
              key={subIndex}
              initial={{ opacity: 0, x: isReversed ? 20 : -20 }}
              animate={
                isInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: isReversed ? 20 : -20 }
              }
              transition={{ duration: 0.5, delay: 0.6 + subIndex * 0.1 }}
              className="flex items-start gap-3 group"
            >
              <div
                className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${
                  iconGradients[startingGradientIndex + subIndex]
                } group-hover:shadow-lg group-hover:scale-105 transition-all duration-300 flex items-center justify-center`}
              >
                <subFeature.icon className="w-5 h-5 text-white animate-pulse" />
              </div>
              <div className="flex-1 space-y-1">
                <h4 className="font-semibold text-foreground">
                  {subFeature.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {subFeature.description}
                </p>
              </div>
              <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image/Visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
        }
        transition={{ duration: 0.6, delay: 0.4 }}
        className={`relative ${
          isReversed ? "md:col-start-1 md:row-start-1" : ""
        }`}
      >
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-card">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 z-10" />

          {/* Image */}
          <img
            src={feature.image || "/placeholder.svg"}
            alt={feature.title}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl -z-10" />
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
      </motion.div>
    </motion.div>
  );
}

export function SmartFeaturesSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-32 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-500/30 via-blue-400/60 to-emerald-500/50 dark:from-violet-600/30 dark:via-blue-500/50 dark:to-emerald-600/40 -z-10" />

      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={
            isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-600 bg-clip-text text-transparent">
            Smart Features That <span className="">Understand You</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Dive deeper into how Memozy combines cutting-edge AI with intuitive
            design to become your perfect digital companion.
          </p>
        </motion.div>

        {/* Feature Blocks */}
        <div className="space-y-24 md:space-y-32">
          {features.map((feature, index) => (
            <FeatureBlock key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20 md:mt-24 flex items-center justify-center gap-2 flex-wrap"
        >
          <div className="flex flex-wrap gap-4">
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.memozy.memozy"
            >
              <Button
                size="lg"
                className="relative overflow-hidden text-lg px-5 py-6 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 text-white font-semibold flex items-center gap-2 hover:opacity-90 transition-all duration-300 cursor-pointer"
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
                className="relative overflow-hidden text-lg px-5 py-6 bg-gradient-to-r from-violet-500 via-indigo-500 to-blue-500 text-white font-semibold flex items-center gap-2 hover:opacity-90 transition-all duration-300 cursor-pointer"
              >
                <Image src={appStore} alt="App Store" width={24} height={24} />
                App Store
                <BorderBeam borderWidth={2} />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
