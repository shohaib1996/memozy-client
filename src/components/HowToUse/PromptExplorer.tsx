"use client";

import { useRef } from "react";
import { easeOut, motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-media-query";
import { ImageIcon, Heart, Moon, Users, PenSquare } from "lucide-react";
import { WhyUseMemozy } from "./WhyUseMemozy";

export default function PromptExplorer() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const containerRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  const videoVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: easeOut },
    },
  };

  return (
    <div className="relative w-full bg-gradient-to-tr from-violet-700/30 via-blue-500/40 to-pink-400/40 overflow-hidden py-12 md:py-20">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={containerRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center"
          variants={isMobile ? {} : containerVariants}
          initial={isMobile ? "visible" : "visible"}
          whileInView={isMobile ? "visible" : "visible"}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left side - Video */}
          <motion.div
            className="flex justify-center lg:justify-start order-2 lg:order-1"
            variants={isMobile ? {} : videoVariants}
          >
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
              {/* Phone frame */}
              <div className="relative bg-black rounded-3xl shadow-2xl overflow-hidden border-5 border-gray-200">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-3 bg-gray-200 rounded-b-3xl z-20" />

                {/* Video container */}
                <div className="relative w-full aspect-[9/16] bg-black overflow-hidden">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source
                      src="https://res.cloudinary.com/dsn66l0iv/video/upload/v1760705682/Purple_Gradient_Coming_Soon_Mobile_Video_5_qiadh3.webm"
                      type="video/webm"
                    />
                  </video>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    animate={{ x: ["100%", "-100%"] }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 blur-xl -z-10 group-hover:opacity-50 transition-opacity duration-300" />
            </div>
          </motion.div>

          {/* Right side - Text content */}
          <motion.div
            className="space-y-6 md:space-y-8 order-1 lg:order-2"
            variants={isMobile ? {} : containerVariants}
            initial={isMobile ? "visible" : "visible"}
            whileInView={isMobile ? "visible" : "visible"}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Header */}
            <motion.div
              variants={isMobile ? {} : itemVariants}
              className="space-y-3"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-800 to-pink-800 dark:from-purple-500 dark:to-pink-500 bg-clip-text text-transparent font-outfit">
                Prompt Explorer
              </h2>
              <p className="text-lg md:text-xl text-slate-800 dark:text-pink-100 font-outfit">
                Unlock your creativity with a universe of prompts.
              </p>
            </motion.div>

            {/* Example */}
            <motion.div
              variants={isMobile ? {} : itemVariants}
              className="bg-purple-500/10 dark:bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-purple-400 dark:border-white/20"
            >
              <p className="text-slate-800 dark:text-white font-outfit text-base md:text-lg">
                <span className="text-pink-600 dark:text-pink-200">
                  Example:
                </span>
                <br />
                <span className="text-purple-600 dark:text-purple-200">
                  🗣️ &quot;Give me a tarot reading for my current situation.&quot;
                </span>
              </p>
            </motion.div>

            {/* Features list */}
            <motion.div
              variants={isMobile ? {} : itemVariants}
              className="space-y-4"
            >
              <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white font-outfit">
                Explore Prompts For:
              </h3>

              <div className="space-y-3">
                {[
                  {
                    icon: ImageIcon,
                    title: "Image Insights",
                    description:
                      "Get creative insights and stories from your images.",
                  },
                  {
                    icon: Heart,
                    title: "Situationship",
                    description:
                      "Navigate complex relationship dynamics with thoughtful prompts.",
                  },
                  {
                    icon: Moon,
                    title: "Tarot",
                    description:
                      "Explore your inner world with tarot card readings and interpretations.",
                  },
                  {
                    icon: Users,
                    title: "Relationship",
                    description:
                      "Deepen your connections with prompts for meaningful conversations.",
                  },
                  {
                    icon: PenSquare,
                    title: "Flirting Writing Assistant",
                    description:
                      "Craft the perfect message with a little help from your AI assistant.",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={isMobile ? {} : itemVariants}
                    className="flex gap-3 md:gap-4 dark:bg-white/5 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-purple-500 dark:border-white/10 hover:bg-purple-500/10 dark:hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-purple-500 dark:text-purple-300 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-slate-800 dark:text-white font-outfit text-sm md:text-base">
                        {feature.title}
                      </p>
                      <p className="text-slate-700 dark:text-pink-100 font-outfit text-xs md:text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div variants={isMobile ? {} : itemVariants}>
              <p className="text-slate-700 dark:text-pink-100 font-outfit text-sm md:text-base">
                Whatever you need, there&apos;s a prompt for that.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
        <div className="pt-20">
          <WhyUseMemozy />
        </div>
      </div>
    </div>
  );
}
