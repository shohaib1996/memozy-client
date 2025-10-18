"use client";

import { useRef } from "react";
import { easeOut, motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Cake, Heart, Users, FileText } from "lucide-react";

export default function TrackPersonalInfo() {
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
    <div className="relative w-full bg-gradient-to-tr from-violet-300/50 via-emerald-300/15 to-pink-300/30 dark:from-violet-600/30 dark:via-emerald-600/30 dark:to-pink-600/30 overflow-hidden py-12 md:py-20">
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
                      src="https://res.cloudinary.com/dsn66l0iv/video/upload/v1760696292/Purple_Gradient_Coming_Soon_Mobile_Video_3_h5nid4.webm"
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
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-500/40 to-blue-500/40 rounded-3xl blur-xl -z-10" />
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-violet-800 to-blue-800 dark:from-violet-500 dark:to-blue-500 bg-clip-text text-transparent font-outfit">
                Track Personal Information 👨‍👩‍👦
              </h2>
              <p className="text-lg md:text-xl text-slate-800 dark:text-emerald-100 font-outfit">
                Store birthdays, preferences, and important personal details.
              </p>
            </motion.div>

            {/* Example */}
            <motion.div
              variants={isMobile ? {} : itemVariants}
              className="bg-violet-500/10 dark:bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-violet-400 dark:border-white/20 "
            >
              <p className="text-slate-800 dark:text-white font-outfit text-base md:text-lg">
                <span className="text-emerald-600 dark:text-emerald-200">
                  Example:
                </span>
                <br />
                <span className="">
                  🗣️ &quot;Memozy, save my mom&apos;s birthday on June 15th.&quot;
                </span>
              </p>
            </motion.div>

            {/* Features list */}
            <motion.div
              variants={isMobile ? {} : itemVariants}
              className="space-y-4"
            >
              <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white font-outfit">
                What Memozy Does:
              </h3>

              <div className="space-y-3">
                {[
                  {
                    icon: Cake,
                    title: "Birthday Reminders",
                    description:
                      "Never forget a birthday again with automatic reminders.",
                  },
                  {
                    icon: Heart,
                    title: "Personal Preferences",
                    description:
                      "Keep track of gift ideas, favorite foods, and other preferences.",
                  },
                  {
                    icon: Users,
                    title: "Contact Details",
                    description:
                      "Store important contact information for friends and family.",
                  },
                  {
                    icon: FileText,
                    title: "Important Documents",
                    description:
                      "Securely save copies of important documents and information.",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={isMobile ? {} : itemVariants}
                    className="flex gap-3 md:gap-4 bg-violet-500/10 dark:bg-white/5 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-violet-500 dark:border-white/10 hover:bg-violet-500/20 dark:hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-violet-500 dark:text-violet-300 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-slate-800 dark:text-white font-outfit text-sm md:text-base">
                        {feature.title}
                      </p>
                      <p className="text-slate-700 dark:text-emerald-100 font-outfit text-xs md:text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div variants={isMobile ? {} : itemVariants}>
              <p className="text-slate-700 dark:text-emerald-100 font-outfit text-sm md:text-base">
                Keep all your important personal information in one place, safe
                and secure.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
