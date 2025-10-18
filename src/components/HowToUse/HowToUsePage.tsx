"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { BorderBeam } from "../ui/border-beam";
import { Play, ChevronDown } from "lucide-react";
import { usePlatform } from "@/hooks/usePlatform";
import Image from "next/image";
import { ReusableDialog } from "../ui/reusable-dialog";
import qrCode from "../../../public/qr-code.png";
import { ShinyButton } from "../ui/shiny-button";
import Link from "next/link";
import { VideoModal } from "./VideoModal"; // Adjust the import path as needed
import { NoteTaking } from "./NoteTaking";
import SmartReminders from "./SmartReminders";
import StayOnSchedule from "./StayOnSchedule";
import TrackPersonalInfo from "./TrackPersonalInfo";
import FindAnything from "./FindAnything";
import PromptExplorer from "./PromptExplorer";
import Script from "next/script";

export const HowToUsePage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const platform = usePlatform();

  useEffect(() => {
    const checkMobile = window.innerWidth < 768;
    setIsMobile(checkMobile);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.1 : 0.2, // Faster stagger on mobile
        delayChildren: isMobile ? 0 : 0.3, // No delay on mobile
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: isMobile ? 0.4 : 0.8 }, // Shorter duration on mobile
    },
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to use Memozy",
    description:
      "Learn how to use Memozy to capture ideas, set reminders, manage your schedule, and much more.",
    step: [
      {
        "@type": "HowToStep",
        name: "Capture Ideas & Notes Instantly",
        text: "With Memozy, you can save notes anytime using voice or text. For example, say 'Memozy, save a note: Brainstorm ideas for my next project.'",
        url: "https://www.memozy.ai/how-to-use-memozy.html#note-taking",
      },
      {
        "@type": "HowToStep",
        name: "Set Smart Reminders & Never Forget Tasks",
        text: "Memozy helps you set reminders effortlessly, so you never miss important moments. For example, say 'Remind me tomorrow at 10 AM to call Mr. Smith.'",
        url: "https://www.memozy.ai/how-to-use-memozy.html#smart-reminders",
      },
      {
        "@type": "HowToStep",
        name: "Stay on Top of Your Schedule",
        text: "View and manage appointments with ease. Never miss an important meeting or event again. For example, ask 'What appointments do I have this week?'",
        url: "https://www.memozy.ai/how-to-use-memozy.html#stay-on-schedule",
      },
      {
        "@type": "HowToStep",
        name: "Track Personal Information",
        text: "Store birthdays, preferences, and important personal details. For example, say 'Memozy, save my mom's birthday on June 15th.'",
        url: "https://www.memozy.ai/how-to-use-memozy.html#track-personal-info",
      },
      {
        "@type": "HowToStep",
        name: "Find Anything Instantly",
        text: "Need to find a note or task? Just ask! For example, say 'Show me my notes about marketing.'",
        url: "https://www.memozy.ai/how-to-use-memozy.html#find-anything",
      },
      {
        "@type": "HowToStep",
        name: "Prompt Explorer",
        text: "Unlock your creativity with a universe of prompts. For example, say 'Give me a tarot reading for my current situation.'",
        url: "https://www.memozy.ai/how-to-use-memozy.html#prompt-explorer",
      },
    ],
  };

  return (
    <main>
      <Script
        id="howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <div className="relative w-full h-[70vh] md:h-[85vh] lg:h-[90vh] overflow-hidden font-outfit">
        {/* Video Background */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://res.cloudinary.com/dsn66l0iv/video/upload/v1760589083/Blue_and_White_Animated_Get_Ready_Video_k76ede.webm"
            type="video/webm"
          />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-violet-600/20 via-blue-600/20 to-violet-900/20 dark:from-violet-950/70 dark:via-blue-950/60 dark:to-slate-950/70" />

        {/* Content */}
        <motion.div
          className="relative z-10 flex flex-col items-center min-h-full justify-center px-2 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 overflow-visible"
          variants={containerVariants}
          initial={isMobile ? "visible" : "hidden"}
          animate="visible"
        >
          <motion.div
            className="text-center w-full max-w-2xl sm:max-w-3xl px-2"
            variants={itemVariants}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-500 to-blue-400 drop-shadow-lg mb-2 sm:mb-4 md:mb-6 text-balance leading-tight tracking-tight">
              Meet Memozy — Your AI Memory & Companion
            </h1>
          </motion.div>

          <motion.div
            className="mt-2 sm:mt-3 md:mt-5 mb-6 sm:mb-8 md:mb-10 w-full px-2"
            variants={itemVariants}
          >
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-center text-white/95 drop-shadow-md text-balance font-light leading-relaxed">
              Capture. Remember. Reflect.
            </p>
          </motion.div>

          <motion.div className="flex gap-3 flex-wrap" variants={itemVariants}>
            <Button
              size="lg"
              onClick={() => setShowVideoModal(true)}
              className="relative overflow-hidden text-sm md:text-sm lg:text-lg px-2 md:px-4 lg:px-5 lg:py-6 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 text-white font-semibold flex items-center gap-2 hover:opacity-90 transition-all duration-300 cursor-pointer font-outfit"
            >
              <Play className="w-4 sm:w-5 h-4 sm:h-5" />
              Watch How It Works
              <BorderBeam borderWidth={2} isMobile={isMobile} />
            </Button>
            {platform === "desktop" && (
              <ReusableDialog
                trigger={
                  <Button
                    size="lg"
                    className="relative cursor-pointer overflow-visible text-sm md:text-sm bg-gradient-to-r from-violet-500 to-blue-500 lg:text-lg px-2 md:px-4 lg:px-5 lg:py-6 font-outfit text-white font-semibold flex items-center gap-2 hover:opacity-90 transition-all duration-300"
                  >
                    <Image src={qrCode} alt="QR code to download the Memozy app" width={24} height={24} />{" "}
                    Get The App
                    <BorderBeam borderWidth={2} />
                    {/* Floating Free Badge at Top-Right Corner */}
                    <motion.span
                      className="absolute -top-2 -right-2 bg-white/20 text-white text-xs font-bold px-2 py-1 rounded-full ring-1 ring-white/30 shadow-lg z-10"
                      initial={{ scale: 0.8, opacity: 0, y: -10 }}
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: 1,
                        y: [0, -5, 0],
                      }}
                      transition={{
                        scale: {
                          duration: 0.9,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                        y: { duration: 1, repeat: Infinity, ease: "easeInOut" },
                        opacity: { duration: 0.5 },
                      }}
                      whileHover={{ scale: 1.2, y: -5 }} // Extra "pull" on button hover
                    >
                      Free!
                    </motion.span>
                  </Button>
                }
                title="Download by QR Code"
                description="Scan to Get Memozy on Your Phone 📱Download Memozy instantly — available for iOS & Android."
              />
            )}
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href="https://app.memozy.ai/?_gl=1*qodnzp*_gcl_au*MjAxMDA4MTc1My4xNzYwMDcyOTQ4*_ga*MTIwODMwOTMzNC4xNzYwMDcyOTQ4*_ga_EJ2RK3CM1T*czE3NjAxMjE2NDckbzgkZzEkdDE3NjAxMjIwNzMkajYwJGwwJGgw#/login"
            >
              <div className="relative inline-block rounded-xl p-[1.5px] bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 hover:from-violet-500 hover:to-blue-500 transition-all duration-300">
                <ShinyButton
                  isMobile={isMobile}
                  className=" py-2 md:py-2 lg:py-3 px-3 md:px-5 lg:px-6 rounded-xl bg-white dark:bg-neutral-900 text-primary font-semibold hover:bg-gradient-to-r hover:from-blue-500 hover:to-violet-500 hover:text-white transition-all duration-300 font-outfit"
                >
                  Try on Web
                </ShinyButton>
              </div>
            </Link>
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.div
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/70"
            variants={itemVariants}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5 mb-1 animate-bounce" />
            <span className="text-xs font-light">Scroll down</span>
          </motion.div>
        </motion.div>

        {/* Video Modal */}
        {showVideoModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            onClick={() => setShowVideoModal(false)}
          >
            <div
              className="relative max-w-md w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowVideoModal(false)}
                className="absolute -top-6 -right-3 text-white text-xl font-bold z-10 bg-red-500/50 rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-500/70 transition-colors"
              >
                ×
              </button>
              <VideoModal videoUrl="https://res.cloudinary.com/dsn66l0iv/video/upload/v1760611102/Fashion_Promo_Instagram_Reel_in_Minimal_Style_hvmy7t.webm" />
            </div>
          </div>
        )}
      </div>
      <NoteTaking/>
      <SmartReminders/>
      <StayOnSchedule/>
      <TrackPersonalInfo/>
      <FindAnything/>
      <PromptExplorer/>
    </main>
  );
};
