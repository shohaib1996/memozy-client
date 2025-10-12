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
  ChevronRight,
} from "lucide-react";
import { useRef, useState, useEffect } from "react";
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
  const [hasSwiped, setHasSwiped] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !isMobile) return;

    const handleScroll = () => {
      if (container.scrollLeft > 10) {
        setHasSwiped(true);
      }
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  return (
    <>
      {/* Horizontally Scrollable Cards */}
      <div
        ref={containerRef}
        className="overflow-x-auto overflow-y-hidden scrollbar-hide pb-8 -mx-4 px-4 py-4 scroll-smooth relative"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <div
          className={`flex gap-${isMobile ? "4" : "6"} w-max ${
            isMobile ? "snap-x snap-mandatory" : ""
          }`}
          {...(!isMobile && {
            drag: "x" as const,
            dragConstraints: { ref: containerRef },
            dragElastic: 0.1,
          })}
        >
          {benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.icon as keyof typeof iconMap];
            const cardSize = isMobile ? 300 : 350;
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
                className={`flex-shrink-0 cursor-pointer ${
                  isMobile ? "w-72 snap-center" : "w-80"
                }`}
              >
                <div
                  className={`h-full relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-${
                    isMobile ? "md" : "xl"
                  } rounded-2xl p-6 bodrder border-gray-200/50 dark:border-gray-800/50 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                    isMobile ? "shadow-md hover:shadow-lg" : ""
                  }`}
                >
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
                  {!isMobile ? (
                    <>
                      <BorderBeam
                        duration={6}
                        size={cardSize}
                        borderWidth={2}
                        className="from-transparent via-emerald-500 to-transparent"
                      />
                      <BorderBeam
                        duration={6}
                        delay={3}
                        size={cardSize}
                        borderWidth={2}
                        className="from-transparent via-blue-500 to-transparent"
                      />
                    </>
                  ) : (
                    <BorderBeam
                      duration={12}
                      size={cardSize}
                      borderWidth={2}
                      className="from-transparent via-emerald-500/50 to-transparent"
                    />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Floating Right Arrow Indicator for Mobile */}
        {isMobile && (
          <motion.div
            className="absolute right-0 top-1/2 flex items-center -translate-y-1/2 z-20 bg-white/90 dark:bg-gray-900/90 rounded-full p-3 shadow-lg border border-gray-200/50 dark:border-gray-800/50"
            initial={{ opacity: 1, scale: 1 }}
            animate={
              hasSwiped ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }
            }
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <span> Swipe</span>
            <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </motion.div>
        )}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-8"
      >
        <p
          className={`text-sm text-muted-foreground flex items-center justify-center gap-2 ${
            isMobile ? "text-base font-medium" : ""
          }`}
        >
          ←
          <span className="whitespace-nowrap">
            <AnimatedShinyText>Swipe to explore</AnimatedShinyText>
          </span>
          →
        </p>
        {isMobile && !hasSwiped && (
          <p className="text-xs text-muted-foreground mt-1">
            Swipe left or right
          </p>
        )}
      </motion.div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .pulse-glow-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .scroll-smooth {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
}
