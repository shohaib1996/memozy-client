"use client";

import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { ShinyButton } from "@/components/ui/shiny-button";
import { easeOut, motion } from "framer-motion";
import Image from "next/image";
import playStore from "../../../../public/play-store.png";
import appStore from "../../../../public/app-store.png";
import Link from "next/link";

import { useMediaQuery } from "@/hooks/use-media-query";
import { useEffect, useState } from "react";

export function JoinMovementSection() {
  const [isMobile, setIsMobile] = useState(false);
  const isTablet = useMediaQuery("(max-width: 1024px)");

  useEffect(() => {
    setIsMobile(isTablet);
  }, [isTablet]);
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
      transition: { duration: 0.8, ease: easeOut },
    },
  };

  return (
    <section className="relative py-16 md:py-16 px-4 sm:px-6 lg:px-8 flex justify-center bg-transparent dark:bg-gradient-to-br from-violet-900/20 to-blue-900/30">
      <motion.div
        className="relative w-full container overflow-hidden rounded-2xl text-center py-16 sm:py-20 px-6 sm:px-10 shadow-2xl bg-gradient-to-br from-purple-700 via-blue-700 to-blue-900 dark:from-purple-900 dark:via-blue-900 dark:to-blue-800"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Left layered pulsing rings (→ Top Left on mobile) */}
        <div
          className="absolute top-0 left-0 sm:inset-y-0 sm:-left-24 flex items-center justify-center pointer-events-none
                     translate-x-[-20%] sm:translate-x-0 translate-y-[-20%] sm:translate-y-0"
        >
          {/* Outer layer */}
          <motion.div
            className="absolute rounded-full w-[600px] h-[600px] max-sm:w-[260px] max-sm:h-[260px]"
            style={{
              background:
                "radial-gradient(circle at center, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.25) 50%, transparent 100%)",
            }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Middle layer */}
          <motion.div
            className="absolute rounded-full w-[500px] h-[500px] max-sm:w-[220px] max-sm:h-[220px]"
            style={{
              background:
                "radial-gradient(circle at center, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.3) 50%, transparent 100%)",
            }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3,
            }}
          />
          {/* Inner layer */}
          <motion.div
            className="absolute rounded-full w-[380px] h-[380px] max-sm:w-[180px] max-sm:h-[180px]"
            style={{
              background:
                "radial-gradient(circle at center, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
            }}
            animate={{ scale: [1, 1.15, 1] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.6,
            }}
          />
        </div>

        {/* Right layered pulsing rings (→ Bottom Right on mobile) */}
        <div
          className="absolute bottom-0 right-0 sm:inset-y-0 sm:-right-24 flex items-center justify-center pointer-events-none
                     translate-x-[20%] sm:translate-x-0 translate-y-[20%] sm:translate-y-0"
        >
          {/* Outer layer */}
          <motion.div
            className="absolute rounded-full w-[600px] h-[600px] max-sm:w-[260px] max-sm:h-[260px]"
            style={{
              background:
                "radial-gradient(circle at center, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.25) 50%, transparent 100%)",
            }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Middle layer */}
          <motion.div
            className="absolute rounded-full w-[500px] h-[500px] max-sm:w-[220px] max-sm:h-[220px]"
            style={{
              background:
                "radial-gradient(circle at center, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.3) 50%, transparent 100%)",
            }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3,
            }}
          />
          {/* Inner layer */}
          <motion.div
            className="absolute rounded-full w-[380px] h-[380px] max-sm:w-[180px] max-sm:h-[180px]"
            style={{
              background:
                "radial-gradient(circle at center, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
            }}
            animate={{ scale: [1, 1.15, 1] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.6,
            }}
          />
        </div>

        {/* Headline */}
        <motion.h2
          className="text-3xl sm:text-5xl font-bold text-white mb-4 sm:mb-6 font-outfit"
          variants={itemVariants}
        >
          Join the Memozy Movement
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="text-base sm:text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Over <span className="font-semibold text-yellow-400">10,000+</span>{" "}
          people are already building their second brain with Memozy. Start
          today — and give your mind the space it deserves.
        </motion.p>

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
              <Image
                src={playStore}
                alt="Get it on Google Play"
                width={24}
                height={24}
              />
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
              <Image
                src={appStore}
                alt="Download on the App Store"
                width={24}
                height={24}
              />
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
        {/* Trust Badge */}
        <motion.div
          className="mt-10 flex justify-center items-center gap-2 text-white/80 text-sm"
          variants={itemVariants}
        >
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400">
                ★
              </span>
            ))}
          </div>
          <span>Trusted by 10,000+ users worldwide</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
