"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Star,
  HeartHandshake,
  Apple,
  Flame,
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
  SmilePlus,
  Feather,
} from "lucide-react"
import React, { useState, useEffect } from "react"
import { AnimatedShinyText } from "../ui/animated-shiny-text"
import Link from "next/link"
import { ShinyButton } from "../ui/shiny-button"
import Image from "next/image"
import { BorderBeam } from "../ui/border-beam"
import { useMediaQuery } from "@/hooks/use-media-query"

function TypingSubheading() {
  const texts = React.useMemo(
    () => [
      "🗣️ Natural AI Conversations – Talk, journal, take notes, and organize tasks like you're chatting with a thoughtful friend.",
      "🎭 AI Roleplay – Engage in playful, romantic, emotional, or fantasy chats tailored to your vibe.",
      "🖼️ Image Input & Interpretation – Upload pictures for outfit feedback, math help, text extraction, or creative AI insights.",
      "🔊 Voice Messages & Custom AI Voice – Hear Memozy reply in realistic voices that match your mood and style.",
      "🧠 Smart Organization – Let Memozy auto-tag and neatly organize your notes, reminders, and thoughts.",
    ],
    [],
  )

  const [displayedText, setDisplayedText] = useState("")
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  const isMobile = useMediaQuery("(max-width: 768px)")

  useEffect(() => {
    if (isMobile) {
      setDisplayedText(texts[0])
      return
    }

    const currentText = texts[currentTextIndex]
    const typingSpeed = 50
    const deletingSpeed = 30
    const pauseTime = 2000

    if (!isDeleting && charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      }, typingSpeed)
      return () => clearTimeout(timeout)
    } else if (!isDeleting && charIndex === currentText.length) {
      const timeout = setTimeout(() => {
        setIsDeleting(true)
        setCharIndex(currentText.length)
      }, pauseTime)
      return () => clearTimeout(timeout)
    } else if (isDeleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      }, deletingSpeed)
      return () => clearTimeout(timeout)
    } else if (isDeleting && charIndex === 0) {
      const timeout = setTimeout(() => {
        const nextIndex = (currentTextIndex + 1) % texts.length
        setCurrentTextIndex(nextIndex)
        setIsDeleting(false)
        setCharIndex(0)
      }, 500)
      return () => clearTimeout(timeout)
    }
  }, [charIndex, isDeleting, currentTextIndex, texts, isMobile])

  return (
    <div className="overflow-hidden min-h-[8rem] sm:min-h-[6.5rem] md:min-h-[5.5rem] lg:min-h-[4.75rem]">
      <motion.span
        className="text-xl md:text-2xl leading-relaxed text-pretty block"
        initial={{ width: 0 }}
        animate={{ width: displayedText.length > 0 ? "100%" : 0 }}
        transition={{ duration: 0.1 }}
      >
        {displayedText}
        {!isMobile && <span className="inline-block w-1 h-6 animate-pulse ml-1">|</span>}
      </motion.span>
    </div>
  )
}

export function HeroSection() {
  const isMobile = useMediaQuery("(max-width: 768px)")
  const isTablet = useMediaQuery("(max-width: 1024px)")

  const mobileFloatingIcons = [
    {
      Icon: MessageSquare,
      color: "text-violet-400",
      position: { top: "15%", left: "10%" },
      animation: { x: [-10, 10, -10], y: [0, -15, 0] },
      duration: 10,
    },
    {
      Icon: Drama,
      color: "text-pink-400",
      position: { top: "25%", right: "15%" },
      animation: { x: [10, -10, 10], y: [0, 10, 0] },
      duration: 11,
    },
    {
      Icon: Brain,
      color: "text-purple-400",
      position: { top: "45%", left: "8%" },
      animation: { x: [0, -12, 0], y: [8, -8, 8] },
      duration: 12,
    },
    {
      Icon: Sparkles,
      color: "text-fuchsia-400",
      position: { top: "60%", right: "12%" },
      animation: { x: [8, -8, 8], y: [-10, 10, -10] },
      duration: 10,
    },
    {
      Icon: HeartHandshake,
      color: "text-violet-400",
      position: { top: "75%", left: "15%" },
      animation: { x: [-10, 10, -10], y: [0, -15, 0] },
      duration: 11,
    },
    {
      Icon: Flame,
      color: "text-violet-400",
      position: { top: "35%", right: "20%" },
      animation: { x: [-10, 10, -10], y: [0, -15, 0] },
      duration: 10,
    },
  ]

  const desktopFloatingIcons = [
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
      Icon: HeartHandshake,
      color: "text-violet-400",
      position: { top: "15%", left: "35%" },
      animation: { x: [-20, 20, -20], y: [0, -30, 0] },
      duration: 8,
    },
    {
      Icon: Flame,
      color: "text-violet-400",
      position: { top: "35%", left: "45%" },
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
      Icon: Feather,
      color: "text-blue-400",
      position: { top: "45%", left: "48%" },
      animation: { x: [0, 30, 0], y: [-20, 20, -20] },
      duration: 9,
    },
    {
      Icon: Feather,
      color: "text-blue-400",
      position: { top: "70%", left: "48%" },
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
      Icon: SmilePlus,
      color: "text-emerald-400",
      position: { top: "60%", right: "40%" },
      animation: { x: [-15, 15, -15], y: [20, -20, 20] },
      duration: 6.5,
    },
    {
      Icon: SmilePlus,
      color: "text-emerald-400",
      position: { top: "85%", left: "30%" },
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
      position: { top: "80%", right: "10%" },
      animation: { x: [15, -15, 15], y: [-20, 20, -20] },
      duration: 8,
    },
    {
      Icon: Flame,
      color: "text-violet-400",
      position: { top: "75%", right: "15%" },
      animation: { x: [-20, 20, -20], y: [0, -30, 0] },
      duration: 8,
    },
    {
      Icon: Feather,
      color: "text-blue-400",
      position: { top: "70%", right: "10%" },
      animation: { x: [0, 30, 0], y: [-20, 20, -20] },
      duration: 9,
    },
    {
      Icon: SmilePlus,
      color: "text-emerald-400",
      position: { top: "75%", left: "40%" },
      animation: { x: [-15, 15, -15], y: [20, -20, 20] },
      duration: 6.5,
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
  ]

  const floatingIcons = isMobile || isTablet ? mobileFloatingIcons : desktopFloatingIcons

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden gradient-bg">
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute pointer-events-none z-0"
          style={{ ...item.position, willChange: "transform" }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.05, 1],
            ...item.animation,
          }}
          transition={{
            duration: isMobile || isTablet ? item.duration * 1.5 : item.duration, // Slower on mobile
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: index * 0.2,
          }}
        >
          <div className="relative">
            <div className={`absolute inset-0 ${item.color} opacity-20 ${isMobile ? "blur-sm" : "blur-xl"}`} />
            <item.Icon
              className={`${isMobile ? "h-6 w-6" : "h-8 w-8"} ${item.color} relative z-10`}
              strokeWidth={1.5}
            />
          </div>
        </motion.div>
      ))}

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

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <TypingSubheading />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://apps.apple.com/us/app/memozy-ai-memory-w-character/id6740183131"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="relative overflow-hidden bg-white text-violet-600 hover:bg-white/90 font-semibold px-8 uppercase rounded-lg"
                >
                  <Apple className="mr-2 h-5 w-5" />
                  App Store
                  <BorderBeam />
                </Button>
              </Link>
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.memozy.memozy"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="relative overflow-hidden bg-white text-violet-600 hover:bg-white/90 font-semibold px-8 uppercase rounded-lg"
                >
                  <Smartphone className="mr-2 h-5 w-5" />
                  Google Play
                  <BorderBeam />
                </Button>
              </Link>
              <Link
                rel="noopener noreferrer"
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
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-medium">
                <AnimatedShinyText>Trusted by thousands across iOS & Android</AnimatedShinyText>
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
              {/* === Glowing Radiations (Behind the phone) === */}
              {!(isMobile || isTablet) && (
                <motion.div className="absolute inset-0 pointer-events-none z-0">
                  {/* Top Glow */}
                  <motion.div
                    className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full"
                    animate={{
                      opacity: [0.4, 0.8, 0.4],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="w-full h-full bg-blue-600/50 blur-[80px] rounded-full" />
                  </motion.div>

                  {/* Bottom Glow */}
                  <motion.div
                    className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full"
                    animate={{
                      opacity: [0.4, 0.8, 0.4],
                      scale: [1.1, 1.3, 1.1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="w-full h-full bg-blue-600/50 blur-[80px] rounded-full" />
                  </motion.div>

                  {/* Left Glow */}
                  <motion.div
                    className="absolute top-1/2 -left-20 -translate-y-1/2 w-72 h-72 rounded-full"
                    animate={{
                      opacity: [0.3, 0.7, 0.3],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="w-full h-full bg-blue-600 blur-[80px] rounded-full" />
                  </motion.div>

                  {/* Right Glow */}
                  <motion.div
                    className="absolute top-1/2 -right-20 -translate-y-1/2 w-72 h-72 rounded-full"
                    animate={{
                      opacity: [0.3, 0.7, 0.3],
                      scale: [1.1, 1.3, 1.1],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  >
                    <div className="w-full h-full bg-blue-600/50 blur-[80px] rounded-full" />
                  </motion.div>
                </motion.div>
              )}

              {/* === Phone Mockup (Above Glows) === */}
              <div className="relative z-10 w-[300px] h-[530px] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-[3rem] border-4 border-gray-400/40 shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black/50 rounded-b-3xl" />

                {/* Chat interface with captured image */}
                <div className="flex items-center justify-center">
                  <Image
                    src="https://i.imgur.com/gFkfwTH.jpeg"
                    alt="A screenshot of the Memozy app showing a chat interface with an AI companion."
                    className="object-contain rounded-2xl shadow-lg"
                    width={300}
                    height={530}
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
  )
}