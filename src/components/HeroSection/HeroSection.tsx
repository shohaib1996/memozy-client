"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Star,
  Apple,
  Smartphone,
  MessageSquare,
  Drama,
  ImageIcon,
  Mic,
  Brain,
  Calendar,
  BookOpen,
  Bell,
  Sparkles,
  Wand2,
} from "lucide-react";
import React, { useState, useEffect } from "react";
import { AnimatedShinyText } from "../ui/animated-shiny-text";
import Link from "next/link";
import { ShinyButton } from "../ui/shiny-button";

function TypingSubheading() {
  const texts = React.useMemo(
    () => [
      "🗣️ Natural AI Conversations – Talk, journal, take notes, and organize tasks like you’re chatting with a thoughtful friend.",
      "🎭 AI Roleplay – Engage in playful, romantic, emotional, or fantasy chats tailored to your vibe.",
      "🖼️ Image Input & Interpretation – Upload pictures for outfit feedback, math help, text extraction, or creative AI insights.",
      "🔊 Voice Messages & Custom AI Voice – Hear Memozy reply in realistic voices that match your mood and style.",
      "🧠 Smart Organization – Let Memozy auto-tag and neatly organize your notes, reminders, and thoughts.",
      "📅 Calendar & Meeting Sync – Schedule meetings and sync them effortlessly to your phone’s calendar.",
      "📖 Weekly Journal Summaries – Get reflective, AI-generated recaps of your week every Sunday.",
      "⏰ Personalized Reminders – Stay on track with smart, friendly nudges just when you need them.",
      "💫 Customizable AI Vibes – Choose your vibe: Professional, Friendly, Romantic, or even bold “RoastMe” mode.",
      "🔮 Creative Tarot Decoder – Decode confusing situationships with playful tarot-style AI readings.",
    ],
    []
  );

  const [displayedText, setDisplayedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    const typingSpeed = 50;
    const deletingSpeed = 30;
    const pauseTime = 2000;

    if (!isDeleting && charIndex < currentText.length) {
      // Typing
      const timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else if (!isDeleting && charIndex === currentText.length) {
      // Pause after typing
      const timeout = setTimeout(() => {
        setIsDeleting(true);
        setCharIndex(currentText.length);
      }, pauseTime);
      return () => clearTimeout(timeout);
    } else if (isDeleting && charIndex > 0) {
      // Deleting
      const timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, deletingSpeed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && charIndex === 0) {
      // Move to next text
      const timeout = setTimeout(() => {
        const nextIndex = (currentTextIndex + 1) % texts.length;
        setCurrentTextIndex(nextIndex);
        setIsDeleting(false);
        setCharIndex(0);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, isDeleting, currentTextIndex, texts]);

  return (
    <div className="overflow-hidden">
      <motion.span
        className="text-xl md:text-2xl leading-relaxed text-pretty inline-block"
        initial={{ width: 0 }}
        animate={{ width: displayedText.length > 0 ? "100%" : 0 }}
        transition={{ duration: 0.1 }}
      >
        {displayedText}
        <span className="inline-block w-1 h-6 animate-pulse ml-1">|</span>
      </motion.span>
    </div>
  );
}

export function HeroSection() {
  const floatingIcons = [
    {
      Icon: MessageSquare,
      color: "text-violet-400",
      position: { top: "15%", left: "10%" },
      animation: { x: [-20, 20, -20], y: [0, -30, 0] },
      duration: 8,
    },
    {
      Icon: ImageIcon,
      color: "text-blue-400",
      position: { top: "15%", left: "50%" },
      animation: { x: [0, 30, 0], y: [-20, 20, -20] },
      duration: 9,
    },
    {
      Icon: MessageSquare,
      color: "text-violet-400",
      position: { top: "15%", left: "35%" },
      animation: { x: [-20, 20, -20], y: [0, -30, 0] },
      duration: 8,
    },
    {
      Icon: BookOpen,
      color: "text-indigo-400",
      position: { top: "30%", left: "25%" },
      animation: { x: [-20, 20, -20], y: [20, -20, 20] },
      duration: 9.5,
    },
    {
      Icon: Drama,
      color: "text-pink-400",
      position: { top: "25%", right: "15%" },
      animation: { x: [20, -20, 20], y: [0, 20, 0], rotate: [0, 10, 0] },
      duration: 7,
    },
    {
      Icon: Drama,
      color: "text-pink-400",
      position: { top: "25%", left: "15%" },
      animation: { x: [20, -20, 20], y: [0, 20, 0], rotate: [0, 10, 0] },
      duration: 7,
    },
    {
      Icon: ImageIcon,
      color: "text-blue-400",
      position: { top: "45%", left: "8%" },
      animation: { x: [0, 30, 0], y: [-20, 20, -20] },
      duration: 9,
    },
    {
      Icon: ImageIcon,
      color: "text-blue-400",
      position: { top: "45%", left: "48%" },
      animation: { x: [0, 30, 0], y: [-20, 20, -20] },
      duration: 9,
    },
    {
      Icon: Mic,
      color: "text-emerald-400",
      position: { top: "60%", right: "12%" },
      animation: { x: [-15, 15, -15], y: [20, -20, 20] },
      duration: 6.5,
    },
    {
      Icon: Mic,
      color: "text-emerald-400",
      position: { top: "60%", right: "40%" },
      animation: { x: [-15, 15, -15], y: [20, -20, 20] },
      duration: 6.5,
    },
    {
      Icon: Brain,
      color: "text-purple-400",
      position: { top: "35%", left: "50%" },
      animation: { x: [0, -25, 0], y: [15, -15, 15], rotate: [0, -5, 0] },
      duration: 8.5,
    },
    {
      Icon: Brain,
      color: "text-purple-400",
      position: { top: "85%", left: "50%" },
      animation: { x: [0, -25, 0], y: [15, -15, 15], rotate: [0, -5, 0] },
      duration: 8.5,
    },
    {
      Icon: Brain,
      color: "text-purple-400",
      position: { top: "85%", left: "15%" },
      animation: { x: [0, -25, 0], y: [15, -15, 15], rotate: [0, -5, 0] },
      duration: 8.5,
    },
    {
      Icon: Calendar,
      color: "text-cyan-400",
      position: { top: "70%", left: "15%" },
      animation: { x: [25, -25, 25], y: [0, 15, 0] },
      duration: 7.5,
    },
    {
      Icon: BookOpen,
      color: "text-indigo-400",
      position: { top: "20%", right: "25%" },
      animation: { x: [-20, 20, -20], y: [20, -20, 20] },
      duration: 9.5,
    },
    {
      Icon: BookOpen,
      color: "text-indigo-400",
      position: { top: "20%", right: "45%" },
      animation: { x: [-20, 20, -20], y: [20, -20, 20] },
      duration: 9.5,
    },
    {
      Icon: Bell,
      color: "text-yellow-400",
      position: { top: "55%", right: "20%" },
      animation: { x: [0, -30, 0], y: [-15, 15, -15], rotate: [0, 15, 0] },
      duration: 6,
    },
    {
      Icon: Bell,
      color: "text-yellow-400",
      position: { top: "55%", left: "30%" },
      animation: { x: [0, -30, 0], y: [-15, 15, -15], rotate: [0, 15, 0] },
      duration: 6,
    },
    {
      Icon: Sparkles,
      color: "text-fuchsia-400",
      position: { top: "80%", right: "30%" },
      animation: { x: [15, -15, 15], y: [-20, 20, -20] },
      duration: 8,
    },
    {
      Icon: Sparkles,
      color: "text-fuchsia-400",
      position: { top: "80%", left: "30%" },
      animation: { x: [15, -15, 15], y: [-20, 20, -20] },
      duration: 8,
    },
    {
      Icon: Wand2,
      color: "text-rose-400",
      position: { top: "40%", right: "8%" },
      animation: { x: [-25, 25, -25], y: [0, -25, 0], rotate: [0, -10, 0] },
      duration: 7,
    },
    {
      Icon: Wand2,
      color: "text-rose-400",
      position: { top: "50%", left: "38%" },
      animation: { x: [-25, 25, -25], y: [0, -25, 0], rotate: [0, -10, 0] },
      duration: 7,
    },
  ];

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden gradient-bg">
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute pointer-events-none z-0"
          style={item.position}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
            ...item.animation,
          }}
          transition={{
            duration: item.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: index * 0.3,
          }}
        >
          <div className="relative">
            <div
              className={`absolute inset-0 ${item.color} opacity-20 blur-xl`}
            />
            <item.Icon
              className={`h-8 w-8 ${item.color} relative z-10`}
              strokeWidth={1.5}
            />
          </div>
        </motion.div>
      ))}

      <motion.div
        className="absolute top-0 left-0 w-64 h-64 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
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

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
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
              className=" text-sm font-medium tracking-wider uppercase"
            >
              Memozy AI Companion
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-6xl font-bold leading-tight text-balance text-violet-500"
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
              className="flex flex-wrap gap-4"
            >
              <Link
                target="_blank"
                href="https://apps.apple.com/us/app/memozy-ai-memory-w-character/id6740183131"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white text-violet-600 hover:bg-white/90 font-semibold px-8 uppercase"
                >
                  <Apple className="mr-2 h-5 w-5" />
                  App Store
                </Button>
              </Link>
              <Link
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.memozy.memozy"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white text-violet-600 hover:bg-white/90 font-semibold px-8 uppercase"
                >
                  <Smartphone className="mr-2 h-5 w-5" />
                  Google Play
                </Button>
              </Link>
              <Link
                target="_blank"
                href="https://app.memozy.ai/?_gl=1*qodnzp*_gcl_au*MjAxMDA4MTc1My4xNzYwMDcyOTQ4*_ga*MTIwODMwOTMzNC4xNzYwMDcyOTQ4*_ga_EJ2RK3CM1T*czE3NjAxMjE2NDckbzgkZzEkdDE3NjAxMjIwNzMkajYwJGwwJGgw#/login"
              >
                <ShinyButton>Try on Web</ShinyButton>
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
              <span className="text-sm font-medium">
                <AnimatedShinyText>
                  Trusted by thousands across iOS & Android
                </AnimatedShinyText>
              </span>
            </motion.div>
          </motion.div>

          {/* Right side - Animated mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center pt-10"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="relative"
            >
              {/* Phone mockup placeholder */}
              <div className="relative w-[300px] h-[530px] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-[3rem] border-4 border-gray-400/40 shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black/50 rounded-b-3xl" />

                {/* Chat interface mockup */}
                <div className="p-6 pt-12 space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="bg-black/20 backdrop-blur-sm rounded-2xl p-4  text-sm"
                  >
                    Hey Memozy, remind me about my meeting tomorrow
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    className="bg-primary/80 backdrop-blur-sm rounded-2xl p-4 text-white text-sm ml-8"
                  >
                    Got it! I&apos;ll remind you about your meeting at 10 AM
                    tomorrow. Would you like me to add it to your calendar?
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2, duration: 0.5 }}
                    className="bg-black/20 backdrop-blur-sm rounded-2xl p-4 text-sm"
                  >
                    Yes please!
                  </motion.div>
                </div>
              </div>

              {/* Floating elements around phone */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute -top-8 -right-8 w-20 h-20 bg-accent/30 backdrop-blur-xl rounded-2xl border border-gray-600/40 dark:border-white/40 flex items-center justify-center"
              >
                <span className="text-3xl">🧠</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-8 -left-8 w-20 h-20 bg-secondary/30 backdrop-blur-xl rounded-2xl border border-gray-600/40 dark:border-white/40 flex items-center justify-center"
              >
                <span className="text-3xl">💫</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
