"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { easeOut, motion } from "framer-motion";
import { Mic, Search, Share2 } from "lucide-react";

export function NoteTaking() {
  const isMobile = useMediaQuery("(max-width: 768px)");

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

  const slideInVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: easeOut },
    },
  };

  return (
    <div id="note-taking" className="relative w-full overflow-hidden font-outfit">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-300/70 via-violet-300/20 to-purple-300/40 dark:from-blue-600/30 dark:via-violet-600/30 dark:to-purple-600/30" />
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            variants={isMobile ? {} : containerVariants}
            initial="visible"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6 md:space-y-8"
          >
            <motion.div
              variants={isMobile ? {} : itemVariants}
              initial="visible"
              whileInView="visible"
              className="space-y-3 text-center lg:text-start "
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-blue-800 to-violet-800 dark:from-blue-500 dark:to-violet-500 bg-clip-text text-transparent">
                Capture Ideas & Notes Instantly
              </h2>

              <p className="text-lg md:text-xl">Memozy makes it easy to capture your thoughts and ideas on the go. Save notes, memos, and other important information anytime, anywhere, using voice or text.</p>
            </motion.div>

            <motion.div
              variants={isMobile ? {} : itemVariants}
              className="bg-violet-500/10 dark:bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-blue-400 dark:border-white/20"
            >
              <p className=" text-base md:text-lg leading-relaxed">
                <span className=" font-semibold">Example:</span> 🗣️ &quot;Memozy,
                save a note: Brainstorm ideas for my next project.&quot;
              </p>
            </motion.div>

            <motion.div
              variants={isMobile ? {} : itemVariants}
              className="space-y-4"
            >
              <h3 className="text-xl md:text-2xl font-bold ">
                📌 What Memozy Does:
              </h3>
              <div className="space-y-3">
                {[
                  {
                    icon: Mic,
                    title: "Voice Notes",
                    description: "Quickly capture your thoughts with voice-to-text transcription.",
                  },
                  {
                    icon: Search,
                    title: "Smart Search",
                    description: "Find your notes instantly with powerful keyword search.",
                  },
                  {
                    icon: Share2,
                    title: "Easy Sharing",
                    description: "Share your notes with friends and colleagues with a single tap.",
                  },
                  {
                    icon: Share2, // Replace with a more appropriate icon if available
                    title: "Effortless Organization",
                    description: "Organize your notes with tags and categories for easy retrieval.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={isMobile ? {} : itemVariants}
                    className="flex items-start gap-4 cursor-pointer bg-violet-500/10 dark:bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-blue-500 dark:border-white/10 hover:bg-blue-500/10 dark:hover:bg-white/10 transition-colors"
                  >
                    <div className="flex-shrink-0 mt-1 text-blue-500">
                      <item.icon className="w-6 h-6 " />
                    </div>
                    <div>
                      <p className="font-bold text-base md:text-lg">{item.title}</p>
                      <p className="text-sm md:text-base">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.p
              variants={isMobile ? {} : itemVariants}
              className="text-sm md:text-base  italic"
            >
              Never lose a thought again. Memozy keeps your ideas safe and
              organized.
            </motion.p>
          </motion.div>

          {/* Right Side - Video in Mobile Frame */}
          <motion.div
            variants={isMobile ? {} : slideInVariants}
            initial="visible"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex justify-center lg:justify-end items-center"
          >
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md ">
              {/* Phone Frame */}
              <div className="relative bg-black rounded-3xl shadow-2xl overflow-hidden border-5 border-gray-200">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-3 bg-gray-200 rounded-b-3xl z-20" />

                {/* Video Container */}
                <div className="relative w-full aspect-[9/16] bg-black">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source
                      src="https://res.cloudinary.com/dsn66l0iv/video/upload/v1760619026/Purple_Gradient_Coming_Soon_Mobile_Video_efnuz9.webm"
                      type="video/webm"
                    />
                  </video>
                </div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  animate={{ x: ["100%", "-100%"] }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                />
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-500/40 to-blue-500/40 rounded-3xl blur-xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
