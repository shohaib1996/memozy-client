"use client";

import { motion, useScroll } from "framer-motion";
import {
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
} from "lucide-react";
import { useRef } from "react";
import { AnimatedShinyText } from "../ui/animated-shiny-text";
import { BorderBeam } from "../ui/border-beam";

const iconMap = {
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
};

export function BenefitsSectionClient({ benefits }: { benefits: any[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const {} = useScroll({
    container: containerRef,
  });

  return (
    <>
      {/* Horizontally Scrollable Cards */}
      <div
        ref={containerRef}
        className="overflow-x-auto overflow-y-hidden scrollbar-hide pb-8 -mx-4 px-4 py-4"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <motion.div
          className="flex gap-6 w-max"
          drag="x"
          dragConstraints={containerRef}
          dragElastic={0.1}
        >
          {benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="w-80 flex-shrink-0 cursor-pointer"
              >
                <div className="h-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-gray-800/50 shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Icon with gradient background */}
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4 shadow-lg pulse-glow`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                  <BorderBeam
                    duration={6}
                    size={400}
                    borderWidth={2}
                    className="from-transparent via-emerald-500 to-transparent"
                  />
                  <BorderBeam
                    duration={6}
                    delay={3}
                    size={400}
                    borderWidth={2}
                    className="from-transparent via-blue-500 to-transparent"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-8"
      >
        <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
          <motion.span
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          >
            ←
          </motion.span>
          <span>
            <AnimatedShinyText>Swipe to explore all features</AnimatedShinyText>
          </span>
          <motion.span
            animate={{ x: [0, 10, 0] }}
            // transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          >
            →
          </motion.span>
        </p>
      </motion.div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}
