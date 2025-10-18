"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";
import Image from "next/image";
import { BorderBeam } from "../ui/border-beam";
import { ShinyButton } from "../ui/shiny-button";
import playStore from "../../../public/play-store.png";
import appStore from "../../../public/app-store.png";

export const WhyUseMemozy = () => {
  const [isMobile, setIsMobile] = useState(false);
  const isTablet = useMediaQuery("(max-width: 1024px)");

  useEffect(() => {
    setIsMobile(isTablet);
  }, [isTablet]);

  const features = [
    {
      icon: "📌",
      title: "Quickly Capture Notes",
      description: "Save ideas, meeting notes, and daily reflections instantly",
    },
    {
      icon: "⏰",
      title: "Smart Reminders",
      description: "Set up tasks and get notified at the right time",
    },
    {
      icon: "📅",
      title: "Appointment Management",
      description: "Keep track of schedules and deadlines effortlessly",
    },
    {
      icon: "🔍",
      title: "Instant Retrieval",
      description: "Find notes and reminders with a simple search",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="relative w-full py-4 md:py-6 lg:py-8 overflow-hidden font-outfit">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-900 dark:via-indigo-900 dark:to-violet-900 rounded-2xl" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-6 md:mb-8"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 text-balance">
            Why Use Memozy? 🤔
          </h2>
          <p className="text-base md:text-lg text-white/90 max-w-xl mx-auto text-balance">
            Memozy is your AI-powered second brain and productivity hub, helping
            you organize thoughts, set reminders, and track tasks effortlessly.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-xl p-2 md:p-4 border border-white/20 hover:bg-white/15 dark:hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl mb-2">
                <span role="img" aria-label={feature.title}>{feature.icon}</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                {feature.title}
              </h3>
              <p className="text-white/80 text-xs md:text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-4 items-center justify-center"
        >
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://play.google.com/store/apps/details?id=com.memozy.memozy"
          >
            <Button
              size="lg"
              className="relative overflow-hidden text-sm md:text-sm lg:text-lg px-2 md:px-4 lg:px-5 lg:py-6 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 text-white font-semibold flex items-center gap-2 hover:opacity-90 transition-all duration-300 cursor-pointer uppercase font-outfit"
            >
              <Image src={playStore} alt="Get it on Google Play" width={24} height={24} />
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
              className="relative overflow-hidden text-sm md:text-sm lg:text-lg px-2 md:px-4 lg:px-5 lg:py-6 bg-gradient-to-r from-violet-500 via-indigo-500 to-blue-500 text-white font-semibold flex items-center gap-2 hover:opacity-90 transition-all duration-300 cursor-pointer uppercase font-outfit"
            >
              <Image src={appStore} alt="Download on the App Store" width={24} height={24} />
              App Store
              <BorderBeam borderWidth={2} isMobile={isMobile} />
            </Button>
          </Link>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://app.memozy.ai/?_gl=1*qodnzp*_gcl_au*MjAxMDA4MTc1My4xNzYwMDcyOTQ4*_ga*MTIwODMwOTMzNC4xNzYwMDcyOTQ4*_ga_EJ2RK3CM1T*czE3NjAxMjE2NDckbzgkZzEkdDE3NjAxMjIwNzMkajYwJGwwJGgw#/login"
          >
            <div className="relative inline-block rounded-xl p-[1.5px] bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 hover:from-violet-500 hover:to-blue-500 transition-all duration-300">
              <ShinyButton
                isMobile={isMobile}
                className="py-2 md:py-2 lg:py-3 px-3 md:px-5 lg:px-6 rounded-xl bg-white dark:bg-neutral-900 text-primary font-semibold hover:bg-gradient-to-r hover:from-blue-500 hover:to-violet-500 hover:text-white transition-all duration-300 font-outfit"
              >
                Try on Web
              </ShinyButton>
            </div>
          </Link>
        </motion.div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-6 md:mt-8"
        >
          <p className="text-white/70 text-xs md:text-sm">
            🚀 Memozy – Your AI Memory & Companion for Productivity
          </p>
        </motion.div>
      </div>
    </div>
  );
};
