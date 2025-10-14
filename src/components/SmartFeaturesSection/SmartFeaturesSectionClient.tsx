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
  LucideProps,
} from "lucide-react";
import { BorderBeam } from "../ui/border-beam";
import { AnimatedShinyText } from "../ui/animated-shiny-text";
import dynamic from "next/dynamic";
import organizedAnimation from "../../../public/organized-animation.json";
import toolsAnimation from "../../../public/tools-animation.json";
import vibeAnimation from "../../../public/vibe-animation.json";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import playStore from "../../../public/play-store.png";
import appStore from "../../../public/app-store.png";
import Image from "next/image";
import { usePlatform } from "@/hooks/usePlatform";
import { ReusableDialog } from "../ui/reusable-dialog";
import qrCode from "../../../public/qr-code.png";
import { useMediaQuery } from "@/hooks/use-media-query";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const iconMap: { [key: string]: React.ComponentType<LucideProps> } = {
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
};

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

const animationMap: { [key: string]: any } = {
  organized: organizedAnimation,
  vibe: vibeAnimation,
  tools: toolsAnimation,
};

function FeatureBlock({ feature, index }: { feature: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isReversed = index % 2 === 1;

  const startingGradientIndex = feature.subFeatures.reduce(() => {
    if (index === 0) return 0;
    if (index === 1) return 3;
    return 6;
  }, 0);

  const getAnimationData = (category: string) => {
    if (category === "Organization") return animationMap.organized;
    if (category === "Emotion & Vibe") return animationMap.vibe;
    if (category === "Utility") return animationMap.tools;
    return null;
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
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
            <span className="relative inline-block text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full overflow-visible font-outfit">
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
            className="text-3xl md:text-4xl font-bold text-balance font-outfit"
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
            className="text-muted-foreground text-lg text-pretty leading-relaxed font-outfit"
          >
            {feature.description}
          </motion.p>
        </div>

        {/* Sub-features */}
        <div className="space-y-4">
          {feature.subFeatures.map((subFeature: any, subIndex: number) => {
            const Icon = iconMap[subFeature.icon];
            return (
              <motion.div
                key={subIndex}
                initial={{ opacity: 0, x: isReversed ? 20 : -20 }}
                animate={
                  isInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: isReversed ? 20 : -20 }
                }
                transition={{ duration: 0.5, delay: 0.6 + subIndex * 0.1 }}
                className="flex items-start gap-3 group font-outfit"
              >
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${
                    iconGradients[startingGradientIndex + subIndex]
                  } group-hover:shadow-lg group-hover:scale-105 transition-all duration-300 flex items-center justify-center`}
                >
                  {Icon && (
                    <Icon className="w-5 h-5 text-white animate-pulse" />
                  )}
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
            );
          })}
        </div>
      </div>

      {/* Lottie Animation */}
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
        <div className="relative rounded-2xl overflow-hidden ">
          {/* Gradient overlay */}
          <div className="absolute inset-0 " />

          {/* Lottie Animation */}
          <Lottie
            animationData={getAnimationData(feature.category)}
            loop={true}
            className="w-full h-64 md:h-80 object-cover"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export function SmartFeaturesSectionClient({ features }: { features: any[] }) {
  const platform = usePlatform();
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      {/* Section Header */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 md:mb-24 space-y-4"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-600 bg-clip-text text-transparent font-outfit">
          Smart Features That <span>Understand You</span>
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed font-outfit">
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
              <Image src={playStore} alt="Play Store" width={24} height={24} />
              Play Store
              <BorderBeam borderWidth={2} isMobile={isMobile} />
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
              <BorderBeam borderWidth={2} isMobile={isMobile} />
            </Button>
          </Link>
          {platform === "desktop" && (
            <ReusableDialog
              trigger={
                <Button
                  size="lg"
                  className="relative cursor-pointer overflow-hidden text-sm md:text-sm bg-gradient-to-r from-violet-500 to-blue-500 lg:text-lg px-2 md:px-4 lg:px-5 lg:py-6 font-outfit text-white font-semibold flex items-center gap-2 hover:opacity-90 transition-all duration-300 cursor-pointert"
                >
                  <Image src={qrCode} alt="Qr Code" width={24} height={24} /> QR
                  Code
                  <BorderBeam borderWidth={2} />
                </Button>
              }
              title="Download by QR Code"
              description="This is a placeholder for IOS and Androild App download QR Code."
            />
          )}
        </div>
      </div>
    </>
  );
}
