"use client";

import { easeOut, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Brain, Network } from "lucide-react";
import Link from "next/link";

export function WhySecondBrainMatters() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  // Floating brain icons
  const floatingBrains = [
    { id: 1, x: "10%", y: "20%", delay: 0 },
    { id: 2, x: "85%", y: "20%", delay: 0.5 },
    { id: 3, x: "15%", y: "70%", delay: 1 },
    { id: 4, x: "80%", y: "70%", delay: 1.5 },
  ];

  return (
    <section
      ref={ref}
      className="relative py-16 overflow-hidden bg-gradient-to-br from-violet-500/10 via-blue-500/10 to-pink-400/10 dark:from-violet-800/20 dark:via-blue-900/25 dark:to-pink-950"
    >
      {/* Animated background elements (hidden on mobile & tablet) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
        {/* Floating brain icons */}
        {floatingBrains.map((brain) => (
          <motion.div
            key={brain.id}
            className="absolute"
            style={{ left: brain.x, top: brain.y }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 6,
              delay: brain.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <Brain className="w-16 h-16 text-black dark:text-white" />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center"
        >
          {/* Headline */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-500 via-blue-500 to-violet-500 bg-clip-text text-transparent"
          >
            Why a Second Brain Matters
          </motion.h2>

          {/* Main description */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto"
          >
            Your brain wasn&apos;t designed to store everything — it was designed to
            think, create, and connect. Memozy takes the mental load off your
            mind, giving you space to focus on what truly matters.
          </motion.p>

          {/* Quote cards grid */}
          <motion.div
            variants={containerVariants}
            className="grid sm:grid-cols-2 gap-5 mb-8"
          >
            {/* Quote 1 */}
            <motion.div
              variants={itemVariants}
              className="p-6 sm:p-8 rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-500/5 to-blue-500/5 backdrop-blur-sm hover:border-violet-500/40 hover:bg-gradient-to-br hover:from-violet-500/10 hover:to-blue-500/10 transition-all duration-300"
            >
              <p className="text-foreground/80 italic text-sm sm:text-base leading-relaxed mb-4">
                &qout;Systems like Memozy can help you process, organize, and
                remember information more effectively — a key to sustainable
                creativity.&qout;
              </p>
              <p className="font-semibold text-foreground">
                — Harvard Business Review
              </p>
            </motion.div>

            {/* Quote 2 */}
            <motion.div
              variants={itemVariants}
              className="p-6 sm:p-8 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-violet-500/5 backdrop-blur-sm hover:border-blue-500/40 hover:bg-gradient-to-br hover:from-blue-500/10 hover:to-violet-500/10 transition-all duration-300"
            >
              <p className="text-foreground/80 italic text-sm sm:text-base leading-relaxed mb-4">
                &qout;Externalizing your thoughts reduces mental clutter, improves
                clarity, and enhances long-term focus.&qout;
              </p>
              <p className="font-semibold text-foreground">
                — Tiago Forte, Building a Second Brain
              </p>
            </motion.div>
          </motion.div>

          {/* Research note */}
          <motion.p
            variants={itemVariants}
            className="text-sm text-muted-foreground/70 flex items-center justify-center gap-2 mb-8"
          >
            <Network className="w-4 h-4 text-violet-500/60" />
            Reflection strengthens focus and mental clarity.
          </motion.p>

          {/* References & Further Reading section */}
          <motion.div
            variants={itemVariants}
            className="mt-8 pt-8 border-t border-violet-500/20"
          >
            <h3 className="text-xl font-semibold text-foreground mb-8">
              References & Further Reading
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
              <Link
                href="https://fortelabs.com/blog/basboverview/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-lg border border-violet-500/20 hover:border-violet-500/40 hover:bg-violet-500/5 transition-all duration-300 group"
              >
                <p className="font-semibold text-foreground group-hover:text-violet-500 transition-colors">
                  Building a Second Brain
                </p>
                <p className="text-sm text-muted-foreground">by Tiago Forte</p>
              </Link>

              <Link
                href="https://hbr.org/2015/12/4-ways-to-become-a-better-learner"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-lg border border-blue-500/20 hover:border-blue-500/40 hover:bg-blue-500/5 transition-all duration-300 group"
              >
                <p className="font-semibold text-foreground group-hover:text-blue-500 transition-colors">
                  4 Ways to Become a Better Learner
                </p>
                <p className="text-sm text-muted-foreground">
                  Harvard Business Review
                </p>
              </Link>

              <Link
                href="https://www.apa.org/topics/stress"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-lg border border-violet-500/20 hover:border-violet-500/40 hover:bg-violet-500/5 transition-all duration-300 group"
              >
                <p className="font-semibold text-foreground group-hover:text-violet-500 transition-colors">
                  Stress Management
                </p>
                <p className="text-sm text-muted-foreground">
                  American Psychological Association
                </p>
              </Link>

              <Link
                href="https://www.msn.com/en-us/money/smallbusiness/how-wordle-and-other-games-can-improve-your-leadership-skills/ar-AA1p4oOW?ocid=BingNewsVerp"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-lg border border-blue-500/20 hover:border-blue-500/40 hover:bg-blue-500/5 transition-all duration-300 group"
              >
                <p className="font-semibold text-foreground group-hover:text-blue-500 transition-colors">
                  7 Benefits of Word Games for Leaders
                </p>
                <p className="text-sm text-muted-foreground">MSN Money</p>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
