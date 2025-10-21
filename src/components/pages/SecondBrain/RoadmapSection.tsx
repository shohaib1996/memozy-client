"use client";

import { easeOut, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { BorderBeam } from "@/components/ui/border-beam";

export function RoadmapSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const roadmapItems = [
    {
      icon: "🌐",
      title: "Social Connections",
      description:
        "Connect with like-minded individuals who share your goals and routines. Share progress, insights, and motivation securely.",
      coming: "Q2 2026",
    },
    {
      icon: "📊",
      title: "Habit & Activity Tracking",
      description:
        "Turn your reflections into data. Track your daily habits, moods, and growth patterns to stay consistent and aware.",
      coming: "Q2 2026",
    },
    {
      icon: "💡",
      title: "AI Coaching Mode",
      description:
        "Get personalized guidance, mental wellness tips, and learning suggestions from your AI companion based on your journal patterns.",
      coming: "Q3 2026",
    },
  ];

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

  return (
    <section
      ref={ref}
      className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-800/15 via-blue-500/5 to-violet-500/10 dark:to-violet-500/10 -z-10" />

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/10 rounded-full blur-2xl -z-10" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-2xl -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            The Future of Your Second Brain
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We&apos;re continuously expanding Memozy to be more than a
            productivity app — it&apos;s your evolving mental companion.
            Here&apos;s a glimpse of what&apos;s coming next:
          </p>
        </motion.div>

        {/* Roadmap Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid sm:grid-cols-3 gap-6 mb-12"
        >
          {roadmapItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 cursor-pointer"
            >
              {/* Gradient border on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              {/* Icon */}
              <div className="text-4xl mb-4">{item.icon}</div>
              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {item.title}
              </h3>
              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {item.description}
              </p>
              {/* Coming Soon Tag */}
              <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-violet-500/20 to-blue-500/20 border border-violet-500/30 text-xs font-medium text-violet-600 dark:text-violet-400">
                Coming {item.coming}
              </div>
              <BorderBeam
                duration={6}
                size={450}
                borderWidth={2}
                className="from-transparent via-emerald-500 to-transparent"
              />
              <BorderBeam
                duration={6}
                size={450}
                delay={3}
                borderWidth={2}
                className="from-transparent via-blue-500 to-transparent"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-6">
            Your feedback directly shapes Memozy&apos;s roadmap — our mission is
            to make your mind lighter, sharper, and calmer with every update.
          </p>
          <Link
            href="https://www.memozy.ai/app-feedback.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 text-white font-medium hover:shadow-lg hover:shadow-violet-500/50 transition-all duration-300 group"
          >
            We&apos;re Building Together (Give Feedback)
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
