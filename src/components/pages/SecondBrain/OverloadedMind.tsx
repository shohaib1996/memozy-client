"use client";

import { useEffect, useState } from "react";
import { easeOut, motion } from "framer-motion";
import Lottie from "lottie-react";
import brain from "../../../../public/Brain.json";
import { ShinyButton } from "@/components/ui/shiny-button";
import Link from "next/link";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { usePlatform } from "@/hooks/usePlatform";
import { VideoModal } from "../HowToUse/VideoModal";
import { Play } from "lucide-react";

export default function OverloadedMind() {
  const [isMobile, setIsMobile] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
    <section className="relative w-full py-16 md:py-24 px-4 md:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0  bg-gradient-to-br from-blue-300/70 via-violet-300/20 to-purple-300/40 dark:from-blue-600/30 dark:via-violet-600/30 dark:to-purple-600/30" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-200 dark:bg-indigo-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

      <div className="relative container mx-auto px-3 lg:px-5">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left side - Text */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <div className="space-y-4">
              <motion.h2
                className="text-4xl md:text-5xl font-bold font-outfit leading-tight bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent dark:from-violet-400 dark:to-cyan-400
  "
                variants={itemVariants}
              >
                Why Memozy Exists
              </motion.h2>

              <motion.p
                className="text-lg md:text-xl text-slate-600 dark:text-slate-300 font-outfit"
                variants={itemVariants}
              >
                The Overloaded Mind
              </motion.p>
            </div>

            <motion.div className="space-y-4" variants={itemVariants}>
              <p className="text-base md:text-lg text-slate-700 dark:text-slate-200 font-outfit leading-relaxed">
                Your brain wasn&apos;t built to remember everything.
              </p>
              <p className="text-base md:text-lg text-slate-700 dark:text-slate-200 font-outfit leading-relaxed">
                In today&apos;s world, we&apos;re constantly juggling tasks, ideas,
                meetings, and reminders. Your mind gets cluttered. Important
                thoughts slip away. Deadlines get missed.
              </p>
              <p className="text-base md:text-lg text-slate-700 dark:text-slate-200 font-outfit leading-relaxed">
                Memozy helps you offload thoughts, tasks, and ideas into one
                trusted space — your personal AI second brain. Stop trying to
                remember everything. Start focusing on what truly matters.
              </p>
            </motion.div>

            <motion.div
              className="flex gap-3 flex-wrap"
              variants={itemVariants}
            >
              <Button
                size="lg"
                onClick={() => setShowVideoModal(true)}
                className="relative overflow-hidden text-sm md:text-sm lg:text-lg px-2 md:px-4 lg:px-5 lg:py-6 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 text-white font-semibold flex items-center gap-2 hover:opacity-90 transition-all duration-300 cursor-pointer font-outfit"
              >
                <Play className="w-4 sm:w-5 h-4 sm:h-5" />
                Watch How It Works
                <BorderBeam borderWidth={2} isMobile={isMobile} />
              </Button>
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
          </motion.div>

          {/* Right side - Illustration */}
          <motion.div
            className="flex justify-center items-center"
            variants={itemVariants}
          >
            <Lottie animationData={brain} loop={true} />
          </motion.div>
        </motion.div>
      </div>
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
    </section>
  );
}
