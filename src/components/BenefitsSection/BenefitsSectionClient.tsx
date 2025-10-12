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
import { useMediaQuery } from "@/hooks/use-media-query";

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

  const isMobile = useMediaQuery("(max-width: 768px)");

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
        <div
          className="flex gap-6 w-max"
          {...(!isMobile && {
            drag: "x" as const,
            dragConstraints: { ref: containerRef },
            dragElastic: 0.1,
          })}
        >
          {benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={index}
                initial={
                  isMobile ? { opacity: 0, x: 20 } : { opacity: 0, x: 50 }
                }
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: isMobile ? 0.5 : 0.3,
                  delay: isMobile ? index * 0.05 : index * 0.1,
                }}
                whileHover={isMobile ? undefined : { scale: 1.02, y: -5 }}
                className="w-80 flex-shrink-0 cursor-pointer"
              >
                <div className="h-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-gray-800/50 shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Icon with gradient background */}
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${
                      benefit.color
                    } flex items-center justify-center mb-4 shadow-lg ${
                      isMobile ? "pulse-glow-slow" : "pulse-glow"
                    }`}
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
                    duration={isMobile ? 12 : 6}
                    size={400}
                    borderWidth={isMobile ? 1 : 2}
                    className="from-transparent via-emerald-500 to-transparent"
                  />
                  <BorderBeam
                    duration={isMobile ? 12 : 6}
                    delay={isMobile ? 6 : 3}
                    size={400}
                    borderWidth={isMobile ? 1 : 2}
                    className="from-transparent via-blue-500 to-transparent"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-8"
      >
        <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
          ←
          <span>
            <AnimatedShinyText>Swipe to explore all features</AnimatedShinyText>
          </span>
          →
        </p>
      </motion.div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .pulse-glow-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </>
  );
}
