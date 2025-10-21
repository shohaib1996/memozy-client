"use client";

import React from "react";
import { easeOut, motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useState, useEffect } from "react";

import { BookOpen, Clock, Zap, Sparkles, Bot, Lightbulb } from "lucide-react";

export const features = [
  {
    icon: BookOpen,
    title: "AI Journaling & Reflection",
    description:
      "Capture your thoughts, reflections, and insights effortlessly. Memozy learns your writing style and helps you express with clarity and depth.",
    gradient: "from-blue-500/20 to-cyan-500/20",
    borderGradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Clock,
    title: "Smart Reminders & Appointments",
    description:
      "Set intelligent reminders for tasks, meetings, or personal habits. Memozy automatically prioritizes and groups them by urgency and context.",
    gradient: "from-purple-500/20 to-pink-500/20",
    borderGradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "Auto Categorization & Context AI",
    description:
      "Memozy analyzes each entry to detect context — like mood, topic, or intent — and organizes your thoughts automatically, so you stay in flow.",
    gradient: "from-amber-500/20 to-orange-500/20",
    borderGradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Sparkles,
    title: "Prompt Explorer & Writing Assistant",
    description:
      "Discover creative prompts and AI writing suggestions to overcome writer’s block, reflect deeply, or brainstorm ideas for personal growth.",
    gradient: "from-violet-500/20 to-indigo-500/20",
    borderGradient: "from-violet-500 to-indigo-500",
  },
  {
    icon: Lightbulb,
    title: "Learning & Discovery Mode",
    description:
      "Memozy curates insights from your journal and recommends learning topics, books, or articles that align with your interests and mood.",
    gradient: "from-sky-500/20 to-teal-500/20",
    borderGradient: "from-sky-500 to-teal-500",
  },
  {
    icon: Bot,
    title: "Personal AI Companion",
    description:
      "Your AI co-pilot that remembers your routines, understands your tone, and adapts its responses — making every interaction uniquely yours.",
    gradient: "from-pink-500/20 to-fuchsia-500/20",
    borderGradient: "from-pink-500 to-fuchsia-500",
  },
];

export default function CoreFeaturesGrid() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 3000); // Auto-advance every 3 seconds

    return () => clearInterval(interval);
  }, [isMobile]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: easeOut },
    },
  };

  const cardVariants = {
    hover: isMobile
      ? {}
      : {
          scale: 1.05,
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
        },
  };

  interface Feature {
    icon: (props?: any) => any;
    title: string;
    description: string;
    gradient: string;
    borderGradient: string;
  }

  const renderFeatureCard = (
    feature: Feature,
    index: number
  ): React.ReactElement => {
    const Icon = feature.icon;
    return (
      <motion.div
        key={index}
        variants={itemVariants}
        whileHover={isMobile ? {} : "hover"}
        className="group relative cursor-pointer flex-shrink-0 w-full"
      >
        {/* Card background with gradient border */}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${feature.borderGradient} rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-xl cursor-pointer`}
        />

        {/* Card content */}
        <motion.div
          variants={cardVariants}
          className={`relative bg-gradient-to-br ${feature.gradient} backdrop-blur-xl border border-white/10 rounded-2xl p-8 h-full flex flex-col transition-all duration-300`}
        >
          {/* Icon container */}
          <div className="mb-6 inline-flex">
            <div
              className={`bg-gradient-to-br ${feature.borderGradient} p-3 rounded-xl`}
            >
              <Icon className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold font-outfit text-foreground mb-3">
            {feature.title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground font-outfit text-sm leading-relaxed flex-grow">
            {feature.description}
          </p>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/50 dark:from-violet-500/30 dark:via-blue-500/30 dark:to-pink-500/20 pointer-events-none" />
      <div className="relative container px-3 lg:px-5 mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-outfit bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
            Core Features
          </h2>
          <p className="text-lg text-muted-foreground font-outfit max-w-2xl mx-auto">
            Everything you need to organize your mind and boost productivity
          </p>
        </motion.div>

        {/* Features display: Slider on mobile, Grid on larger screens */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={
            isMobile
              ? "w-full"
              : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          }
        >
          {isMobile ? (
            <>
              {/* Slider container */}
              <div className="overflow-hidden rounded-lg mb-8">
                <motion.div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                  }}
                >
                  {features.map(renderFeatureCard)}
                </motion.div>
              </div>

              {/* Indicator dots */}
              <div className="flex justify-center space-x-2">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex
                        ? "bg-sky-500"
                        : "bg-gray-300 dark:bg-gray-600"
                    }`}
                  />
                ))}
              </div>
            </>
          ) : (
            features.map(renderFeatureCard)
          )}
        </motion.div>
      </div>
    </section>
  );
}
