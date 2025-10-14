"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BorderBeam } from "../ui/border-beam";
import Link from "next/link";
import { useMediaQuery } from "@/hooks/use-media-query";
import playStore from "../../../public/play-store.png";
import appStore from "../../../public/app-store.png";
import Image from "next/image";
import { usePlatform } from "@/hooks/usePlatform";
import qrCode from "../../../public/qr-code.png";
import { ReusableDialog } from "../ui/reusable-dialog";

export function VisualDemoSectionClient() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");
  const isSmallScreen = isMobile || isTablet;
  const platform = usePlatform();


  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-center">
      {/* Left Side - Mobile Mockup with Video */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex justify-center lg:justify-start"
      >
        <div className="relative">
          {/* Top-right floating icon */}
          <motion.div
            animate={
              isSmallScreen ? {} : { y: [0, -15, 0], rotate: [0, 10, 0] }
            }
            transition={
              isSmallScreen
                ? {}
                : {
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }
            }
            className="absolute -top-8 -right-8 z-20"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500 dark:from-blue-400 dark:to-violet-400 flex items-center justify-center shadow-lg backdrop-blur-sm">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
          </motion.div>

          {/* Bottom-left floating icon */}
          <motion.div
            animate={
              isSmallScreen ? {} : { y: [0, 15, 0], rotate: [0, -10, 0] }
            }
            transition={
              isSmallScreen
                ? {}
                : {
                    duration: 3.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 0.5,
                  }
            }
            className="absolute -bottom-8 -left-8 z-20"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 dark:from-violet-400 dark:to-purple-400 flex items-center justify-center shadow-lg backdrop-blur-sm">
              <Brain className="w-8 h-8 text-white" />
            </div>
          </motion.div>

          {/* Phone Frame */}
          <div className="relative w-[280px] sm:w-[340px] md:w-[450px] aspect-[9/15] md:aspect-[9/16] lg:aspect-[9/14] bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 rounded-[3rem] p-3 shadow-2xl">
            {/* Screen */}
            <div className="relative w-full h-full bg-black rounded-[2.5rem] overflow-hidden">
              {/* Video */}
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                title="A demo of Memozy, an AI assistant for meeting setup, smart notes, and AI conversations."
              >
                <source src="/loop-video.mp4" type="video/mp4" />
                Your browser does not support the video tag. See a demo of
                Memozi, your AI assistant for meeting setup, smart notes, and AI
                conversations.
              </video>
            </div>

            {/* Phone Buttons */}
            <div className="absolute right-0 top-24 w-1 h-12 bg-gray-700 dark:bg-gray-600 rounded-l-lg"></div>
            <div className="absolute right-0 top-40 w-1 h-16 bg-gray-700 dark:bg-gray-600 rounded-l-lg"></div>
            <div className="absolute left-0 top-32 w-1 h-10 bg-gray-700 dark:bg-gray-600 rounded-r-lg"></div>
          </div>

          {/* Glow Effect behind phone */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-violet-700 blur-3xl opacity-50 -z-10 scale-115"></div>
        </div>
      </motion.div>

      {/* Right Side - Text Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-6 text-center lg:text-left relative"
      >
        {/* Bubble 1 */}
        <motion.div
          animate={isSmallScreen ? {} : { y: [0, -20, 0], x: [0, 10, 0] }}
          transition={
            isSmallScreen
              ? {}
              : {
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }
          }
          className="absolute top-0 right-10 w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 rounded-full -z-10"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(147, 197, 253, 0.4), rgba(59, 130, 246, 0.2))",
            border: "1px solid rgba(147, 197, 253, 0.3)",
            boxShadow:
              "inset -2px -2px 8px rgba(59, 130, 246, 0.3), inset 2px 2px 8px rgba(255, 255, 255, 0.2)",
          }}
        />

        {/* Bubble 2 */}
        <motion.div
          animate={isSmallScreen ? {} : { y: [0, 15, 0], x: [0, -10, 0] }}
          transition={
            isSmallScreen
              ? {}
              : {
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.5,
                }
          }
          className="absolute top-20 right-15 w-8 h-8 md:w-10 md:h-10 lg:w-16 lg:h-16 rounded-full -z-10"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(196, 181, 253, 0.4), rgba(139, 92, 246, 0.2))",
            border: "1px solid rgba(196, 181, 253, 0.3)",
            boxShadow:
              "inset -2px -2px 10px rgba(139, 92, 246, 0.3), inset 2px 2px 10px rgba(255, 255, 255, 0.2)",
          }}
        />

        {/* Bubble 3 */}
        <motion.div
          animate={isSmallScreen ? {} : { y: [0, -15, 0], x: [0, 15, 0] }}
          transition={
            isSmallScreen
              ? {}
              : {
                  duration: 7,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }
          }
          className="absolute top-40 right-30 w-5 h-5 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full -z-10"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(216, 180, 254, 0.4), rgba(168, 85, 247, 0.2))",
            border: "1px solid rgba(216, 180, 254, 0.3)",
            boxShadow:
              "inset -2px -2px 8px rgba(168, 85, 247, 0.3), inset 2px 2px 8px rgba(255, 255, 255, 0.2)",
          }}
        />

        {/* Bubble 4 */}
        <motion.div
          animate={isSmallScreen ? {} : { y: [0, 20, 0], x: [0, -15, 0] }}
          transition={
            isSmallScreen
              ? {}
              : {
                  duration: 5.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1.5,
                }
          }
          className="absolute bottom-40 right-5 w-7 h-7 md:w-10 md:h-10 lg:w-14 lg:h-14 rounded-full -z-10"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(147, 197, 253, 0.4), rgba(59, 130, 246, 0.2))",
            border: "1px solid rgba(147, 197, 253, 0.3)",
            boxShadow:
              "inset -2px -2px 9px rgba(59, 130, 246, 0.3), inset 2px 2px 9px rgba(255, 255, 255, 0.2)",
          }}
        />

        {/* Bubble 5 */}
        <motion.div
          animate={isSmallScreen ? {} : { y: [0, -10, 0], x: [0, 10, 0] }}
          transition={
            isSmallScreen
              ? {}
              : {
                  duration: 6.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 2,
                }
          }
          className="absolute bottom-20 right-16 w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 rounded-full -z-10"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(196, 181, 253, 0.4), rgba(139, 92, 246, 0.2))",
            border: "1px solid rgba(196, 181, 253, 0.3)",
            boxShadow:
              "inset -2px -2px 8px rgba(139, 92, 246, 0.3), inset 2px 2px 8px rgba(255, 255, 255, 0.2)",
          }}
        />

        {/* Bubble 6 */}
        <motion.div
          animate={isSmallScreen ? {} : { y: [0, 15, 0], x: [0, -10, 0] }}
          transition={
            isSmallScreen
              ? {}
              : {
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 2.5,
                }
          }
          className="absolute bottom-0 right-8 w-8 h-8 md:w-10 md:h-10 lg:w-16 lg:h-16 rounded-full -z-10"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(216, 180, 254, 0.4), rgba(168, 85, 247, 0.2))",
            border: "1px solid rgba(216, 180, 254, 0.3)",
            boxShadow:
              "inset -2px -2px 10px rgba(168, 85, 247, 0.3), inset 2px 2px 10px rgba(255, 255, 255, 0.2)",
          }}
        />

        {/* Bubble 7 */}
        <motion.div
          animate={isSmallScreen ? {} : { y: [0, -20, 0], x: [0, 15, 0] }}
          transition={
            isSmallScreen
              ? {}
              : {
                  duration: 7,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 3,
                }
          }
          className="absolute top-1/2 right-2 w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full -z-10"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(251, 207, 232, 0.4), rgba(236, 72, 153, 0.2))",
            border: "1px solid rgba(251, 207, 232, 0.3)",
            boxShadow:
              "inset -2px -2px 8px rgba(236, 72, 153, 0.3), inset 2px 2px 8px rgba(255, 255, 255, 0.2)",
          }}
        />

        {/* Bubble 8 */}
        <motion.div
          animate={isSmallScreen ? {} : { y: [0, 10, 0], x: [0, -15, 0] }}
          transition={
            isSmallScreen
              ? {}
              : {
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 3.5,
                }
          }
          className="absolute top-1/3 right-12 w-7 h-7 md:w-10 md:h-10 lg:w-14 lg:h-14 rounded-full -z-10"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(165, 243, 252, 0.4), rgba(6, 182, 212, 0.2))",
            border: "1px solid rgba(165, 243, 252, 0.3)",
            boxShadow:
              "inset -2px -2px 9px rgba(6, 182, 212, 0.3), inset 2px 2px 9px rgba(255, 255, 255, 0.2)",
          }}
        />

        <h2 className="text-3xl font-outfit md:text-4xl lg:text-5xl font-bold text-balance bg-gradient-to-r from-violet-800 via-purple-500 to-blue-500 dark:from-blue-500 dark:via-purple-400 dark:to-violet-700 bg-clip-text text-transparent ">
          Chat, Reflect, and Stay Organized — All in One AI Companion.
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0 font-outfit">
          Experience the future of personal AI assistance. Memozy combines
          intelligent conversations, emotional support, and smart organization
          to help you navigate life with clarity and confidence.
        </p>

        <div className="pt-4 flex items-center gap-3 flex-wrap justify-center lg:justify-start">
          <Link
            href="https://app.memozy.ai/?_gl=1*1bn9gnb*_gcl_au*MjAxMDA4MTc1My4xNzYwMDcyOTQ4*_ga*MTIwODMwOTMzNC4xNzYwMDcyOTQ4*_ga_EJ2RK3CM1T*czE3NjAxNTcwNjkkbzExJGcwJHQxNzYwMTU3MDcwJGo1OSRsMCRoMA..#/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="lg"
              className="relative overflow-hidden group text-violet-500 shadow-lg hover:shadow-xl hover:text-blue-500 transition-all duration-300 px-5 font-outfit"
            >
              Try Memozy on Web
              <ArrowRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              {/* Border beam effect */}
              <BorderBeam isMobile={isMobile} />
            </Button>
          </Link>
          <span>Or</span>
          <div className="flex gap-3">
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.memozy.memozy"
            >
              <Button
                size="lg"
                className="relative overflow-hidden text-sm md:text-sm lg:text-lg px-1 md:px-3 lg:px-3 lg:py-3 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 text-white font-semibold flex items-center gap-2 hover:opacity-90 transition-all duration-300 cursor-pointer"
              >
                <Image
                  src={playStore}
                  alt="Play Store"
                  width={32}
                  height={32}
                />
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
                className="relative overflow-hidden text-sm md:text-sm lg:text-lg px-1 md:px-3 lg:px-3 lg:py-3 bg-gradient-to-r from-violet-500 via-indigo-500 to-blue-500 text-white font-semibold flex items-center gap-2 hover:opacity-90 transition-all duration-300 cursor-pointer"
              >
                <Image src={appStore} alt="App Store" width={32} height={32} />
                <BorderBeam borderWidth={2} isMobile={isMobile} />
              </Button>
            </Link>
            {platform === "desktop" && (
              <ReusableDialog
                trigger={
                  <Button
                    size="lg"
                    className="relative cursor-pointer overflow-hidden text-sm px-1 md:px-3 lg:px-4 lg:py-3 md:text-sm bg-gradient-to-r from-violet-500 to-blue-500 lg:text-lg font-outfit text-white font-semibold flex items-center gap-2 hover:opacity-90 transition-all duration-300"
                  >
                    <Image src={qrCode} alt="Qr Code" width={24} height={24} />
                    <BorderBeam borderWidth={2}/>
                  </Button>
                }
                title="Download by QR Code"
                description="This is a placeholder for iOS and Android App download QR Codes."
              />
            )}
          </div>
        </div>
        {/* Feature Pills */}
        <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-4 font-outfit">
          <span className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium">
            AI Conversations
          </span>
          <span className="px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-sm font-medium">
            Smart Notes
          </span>
          <span className="px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium">
            Voice Messages
          </span>
        </div>
      </motion.div>
    </div>
  );
}
