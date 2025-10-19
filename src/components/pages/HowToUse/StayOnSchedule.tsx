"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { easeOut, motion } from "framer-motion";
import { Calendar, Bell, Clock, Zap } from "lucide-react";

export default function StayOnSchedule() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  const features = [
    {
      icon: Calendar,
      title: "Easy Appointment Viewing",
      description:
        "See all your appointments at a glance with a clean, organized calendar interface.",
    },
    {
      icon: Clock,
      title: "Weekly Overview",
      description:
        "Get a comprehensive view of your entire week to plan ahead and stay organized.",
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description:
        "Receive timely reminders before your appointments so you never miss anything.",
    },
    {
      icon: Zap,
      title: "Seamless Integration",
      description:
        "Sync with your calendar apps for a unified scheduling experience.",
    },
  ];

  return (
    <section id="stay-on-schedule" className="relative w-full overflow-hidden py-12 md:py-20 font-outfit">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-300/70 via-blue-300/30 to-purple-300/30 dark:from-violet-600/30 dark:via-blue-600/50 dark:to-purple-700/30 opacity-90" />
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            className="flex flex-col justify-center space-y-6 md:space-y-8"
            variants={!isMobile ? containerVariants : {}}
            initial={!isMobile ? "visible" : "visible"}
            whileInView={!isMobile ? "visible" : "visible"}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Header */}
            <motion.div
              variants={!isMobile ? itemVariants : {}}
              className="space-y-4"
            >
              <h2 className="py-2 text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-800  to-violet-800 dark:from-blue-500 dark:to-violet-500 bg-clip-text text-transparent font-outfit">
                Stay on Top of Your Schedule
              </h2>
              <p className="text-lg md:text-xl">Stay on top of your busy schedule with Memozy. View and manage your appointments, meetings, and events in one place. Never miss an important deadline or event again.</p>
            </motion.div>

            {/* Example */}
            <motion.div
              variants={!isMobile ? itemVariants : {}}
              className="bg-emerald-500/5 backdrop-blur-md rounded-lg p-4 md:p-6 border border-emerald-500/50"
            >
              <p className="text-sm md:text-base ">
                <span className="font-semibold ">Example:</span>
              </p>
              <p className="text-base md:text-lg mt-2">
                &quot;What appointments do I have this week?&quot;
              </p>
              <p className="text-sm md:text-base mt-3">
                Memozy instantly shows your entire week&apos;s schedule, helping you
                stay organized and prepared.
              </p>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              variants={!isMobile ? containerVariants : {}}
              initial={!isMobile ? "visible" : "visible"}
              whileInView={!isMobile ? "visible" : "visible"}
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-3"
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    variants={!isMobile ? itemVariants : {}}
                    className="hover:bg-emerald-500/10 dark:bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-emerald-500/50 dark:border-white/10 dark:hover:bg-white/10 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <Icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm md:text-base">
                          {feature.title}
                        </h3>
                        <p className="text-xs md:text-sm mt-1">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Side - Video */}
          <motion.div
            className="flex justify-center lg:justify-end items-center"
            initial={isMobile ? "visible" : "visible"}
            whileInView={!isMobile ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
              {/* Phone Frame */}
              <div className="relative bg-black rounded-3xl shadow-2xl overflow-hidden border-5 border-gray-200">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-3 bg-gray-200 rounded-b-3xl z-10" />

                {/* Video Container */}
                <div className="relative w-full aspect-[9/16] bg-black overflow-hidden">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    src="https://res.cloudinary.com/dsn66l0iv/video/upload/v1760801690/Purple_Gradient_Coming_Soon_Mobile_Video_10_hshss9.webm"
                  />
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

              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-500/40 to-blue-500/40 rounded-3xl blur-xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
