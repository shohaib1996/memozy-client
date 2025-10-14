"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import React, { useState, useEffect } from "react";
import { AnimatedShinyText } from "../ui/animated-shiny-text";
import Link from "next/link";
import { ShinyButton } from "../ui/shiny-button";
import Image from "next/image";
import { BorderBeam } from "../ui/border-beam";
import { useMediaQuery } from "@/hooks/use-media-query";
import playStore from "../../../public/play-store.png";
import appStore from "../../../public/app-store.png";
import qrCodeAll from "../../../public/qrcode-all.png";
import heroMockup from "../../../public/hero-mockup.jpeg";


function TypingSubheading() {
  const texts = React.useMemo(
    () => [
      "🗣️ Natural AI Conversations – Talk, journal, take notes, and organize tasks like you're chatting with a thoughtful friend.",
      "🎭 AI Roleplay – Engage in playful, romantic, emotional, or fantasy chats tailored to your vibe.",
      "🖼️ Image Input & Interpretation – Upload pictures for outfit feedback, math help, text extraction, or creative AI insights.",
      "🔊 Voice Messages & Custom AI Voice – Hear Memozy reply in realistic voices that match your mood and style.",
      "🧠 Smart Organization – Let Memozy auto-tag and neatly organize your notes, reminders, and thoughts.",
    ],
    []
  );

  const [displayedText, setDisplayedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    if (isMobile) {
      setDisplayedText(texts[0]);
      return;
    }

    const currentText = texts[currentTextIndex];
    const typingSpeed = 50;
    const deletingSpeed = 30;
    const pauseTime = 2000;

    if (!isDeleting && charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else if (!isDeleting && charIndex === currentText.length) {
      const timeout = setTimeout(() => {
        setIsDeleting(true);
        setCharIndex(currentText.length);
      }, pauseTime);
      return () => clearTimeout(timeout);
    } else if (isDeleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, deletingSpeed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && charIndex === 0) {
      const timeout = setTimeout(() => {
        const nextIndex = (currentTextIndex + 1) % texts.length;
        setCurrentTextIndex(nextIndex);
        setIsDeleting(false);
        setCharIndex(0);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, isDeleting, currentTextIndex, texts, isMobile]);
  return (
    <div className="overflow-hidden min-h-[8rem] sm:min-h-[6.5rem] md:min-h-[5.5rem] lg:min-h-[4.75rem]">
      <motion.span
        className="text-xl md:text-2xl leading-relaxed text-pretty block font-outfit"
        initial={{ width: 0 }}
        animate={{ width: displayedText.length > 0 ? "100%" : 0 }}
        transition={{ duration: 0.1 }}
      >
        {displayedText}
        {!isMobile && (
          <span className="inline-block w-1 h-6 animate-pulse ml-1">|</span>
        )}
      </motion.span>
    </div>
  );
}

export function HeroSection() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");

  const sectionBgClass =
    isMobile || isTablet
      ? "bg-gradient-to-b from-blue-400/30 via-blue-700/30 to-violet-400/40"
      : "gradient-bg";

  return (
    <section
      className={`relative min-h-[85vh] flex items-center justify-center overflow-hidden ${sectionBgClass}`}
    >
      {!isMobile && (
        <>
          <motion.div
            className="absolute top-0 left-0 w-64 h-64 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ willChange: "transform, opacity" }}
          >
            <motion.div
              className="absolute top-0 left-0 w-64 h-64 rounded-full bg-violet-700/40 blur-3xl"
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute top-8 left-8 w-48 h-48 rounded-full bg-emerald-500/40 blur-2xl"
              animate={{
                opacity: [0.4, 1, 0.4],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
          </motion.div>

          <motion.div
            className="absolute bottom-0 right-0 w-64 h-64 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ willChange: "transform, opacity" }}
          >
            <motion.div
              className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-emerald-500/40 blur-3xl"
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2.2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-8 right-8 w-48 h-48 rounded-full bg-violet-700/40 blur-2xl"
              animate={{
                opacity: [0.4, 1, 0.4],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 2.7,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 0.7,
              }}
            />
          </motion.div>
        </>
      )}

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Text content */}
          {isMobile ? (
            <div className="space-y-8 flex items-center flex-col text-center lg:text-left lg:items-start">
              <p className=" text-sm font-medium tracking-wider uppercase font-outfit">
                Memozy AI Companion
              </p>
              <h1 className="text-5xl font-outfit leading-tight md:text-6xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-700 via-purple-500 to-blue-600">
                Your AI Memory & Companion
              </h1>
              <div>
                <p className="text-xl md:text-2xl leading-relaxed text-pretty block font-outfit min-h-[8rem] sm:min-h-[6.5rem]">
                  🗣️ Natural AI Conversations – Talk, journal, take notes, and organize tasks like you&apos;re chatting with a thoughtful friend.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 items-center justify-center lg:justify-start">
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
                      alt="Play Store"
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
                      alt="App Store"
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
                    <ShinyButton isMobile={isMobile} className=" py-2 md:py-2 lg:py-3 px-3 md:px-5 lg:px-6 rounded-xl bg-white dark:bg-neutral-900 text-primary font-semibold hover:bg-gradient-to-r hover:from-blue-500 hover:to-violet-500 hover:text-white transition-all duration-300 font-outfit">
                      Try on Web
                    </ShinyButton>
                  </div>
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-sm font-medium font-outfit">
                  <AnimatedShinyText isMobile={isMobile}>
                    Trusted by thousands across iOS & Android
                  </AnimatedShinyText>
                </span>
              </div>
              <Image
                className="hidden lg:flex rounded-xl"
                src={qrCodeAll}
                alt="qrcode"
                width={160}
                height={160}
              />
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 flex items-center flex-col text-center lg:text-left lg:items-start"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className=" text-sm font-medium tracking-wider uppercase font-outfit"
              >
                Memozy AI Companion
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl font-outfit leading-tight md:text-6xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-700 via-purple-500 to-blue-600"
              >
                Your AI Memory & Companion
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <TypingSubheading />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4 items-center justify-center lg:justify-start"
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
                      alt="Play Store"
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
                      alt="App Store"
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
                    <ShinyButton isMobile={isMobile} className=" py-2 md:py-2 lg:py-3 px-3 md:px-5 lg:px-6 rounded-xl bg-white dark:bg-neutral-900 text-primary font-semibold hover:bg-gradient-to-r hover:from-blue-500 hover:to-violet-500 hover:text-white transition-all duration-300 font-outfit">
                      Try on Web
                    </ShinyButton>
                  </div>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-2"
              >
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-sm font-medium font-outfit">
                  <AnimatedShinyText isMobile={isMobile}>
                    Trusted by thousands across iOS & Android
                  </AnimatedShinyText>
                </span>
              </motion.div>
              <Image
                className="hidden lg:flex rounded-xl"
                src={qrCodeAll}
                alt="qrcode"
                width={160}
                height={160}
              />
            </motion.div>
          )}

          {/* Right side - Animated mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center pt-10"
          >
            <motion.div
              animate={isMobile || isTablet ? {} : { y: [0, -20, 0] }}
              transition={
                isMobile || isTablet
                  ? {}
                  : {
                      duration: 6,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }
              }
              className="relative"
            >
              {/* === Phone Mockup (Above Glows) === */}
              <div className="relative z-10 w-[300px] h-[530px] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-[3rem] border-4 border-gray-400/40 shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black/50 rounded-b-3xl" />

                {/* Chat interface with captured image */}
                <div className="flex items-center justify-center">
                  <Image
                    src={heroMockup}
                    alt="A screenshot of the Memozy app showing a chat interface with an AI companion."
                    className="object-contain rounded-2xl shadow-lg"
                    width={300}
                    height={530}
                    priority
                  />
                </div>
              </div>

              {/* === Floating elements (Above everything) === */}
              <motion.div
                animate={
                  isMobile || isTablet
                    ? {} // No animation on mobile/tablet
                    : { y: [0, -15, 0], rotate: [0, 5, 0] }
                }
                transition={
                  isMobile || isTablet
                    ? {}
                    : {
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }
                }
                className="absolute -top-8 -right-8 z-20 w-20 h-20 backdrop-blur-xl rounded-2xl border border-gray-600/40 dark:border-white/40 flex items-center justify-center"
              >
                <span className="text-3xl">🧠</span>
              </motion.div>

              <motion.div
                animate={
                  isMobile || isTablet
                    ? {} // No animation on mobile/tablet
                    : { y: [0, 15, 0], rotate: [0, -5, 0] }
                }
                transition={
                  isMobile || isTablet
                    ? {}
                    : {
                        duration: 5,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: 1,
                      }
                }
                className="absolute -bottom-8 -left-8 z-20 w-20 h-20 backdrop-blur-xl rounded-2xl border border-gray-600/40 dark:border-white/40 flex items-center justify-center"
              >
                <span className="text-3xl">❤️</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}