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
  ChevronLeft,
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
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollPosition = () => {
    const container = containerRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;

    // Check if we can scroll left (not at the start)
    setCanScrollLeft(scrollLeft > 10);

    // Check if we can scroll right (not at the end)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scrollLeft = () => {
    const container = containerRef.current;
    if (!container) return;

    const cardWidth = isMobile ? 300 : 350;
    const gap = isMobile ? 16 : 24;
    const scrollAmount = cardWidth + gap;

    container.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    const container = containerRef.current;
    if (!container) return;

    const cardWidth = isMobile ? 300 : 350;
    const gap = isMobile ? 16 : 24;
    const scrollAmount = cardWidth + gap;

    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check initial position
    checkScrollPosition();

    // Add scroll listener
    container.addEventListener("scroll", checkScrollPosition, {
      passive: true,
    });

    // Check on resize
    window.addEventListener("resize", checkScrollPosition);

    return () => {
      container.removeEventListener("scroll", checkScrollPosition);
      window.removeEventListener("resize", checkScrollPosition);
    };
  }, [isMobile]);

  return (
    <>
      <div className="relative">
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
                    <h3 className="text-xl font-bold text-foreground mb-3 font-outfit">
                      {benefit.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed font-outfit">
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
        </div>

        {!isMobile && canScrollLeft && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollLeft}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-violet-500 to-blue-500 hover:from-violet-600 hover:to-blue-600 text-white rounded-full p-3 shadow-xl border border-transparent transition-all duration-200 hover:scale-110 active:scale-95"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </motion.button>
        )}

        {!isMobile && canScrollRight && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollRight}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-violet-500 to-blue-500 hover:from-violet-600 hover:to-blue-600 text-white rounded-full p-3 shadow-xl border border-transparent transition-all duration-200 hover:scale-110 active:scale-95"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </motion.button>
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
          {isMobile ? (
            <>
              ←
              <span className="whitespace-nowrap font-outfit">
                <AnimatedShinyText>Swipe to explore</AnimatedShinyText>
              </span>
              →
            </>
          ) : (
            <>
              ←
              <span className="whitespace-nowrap font-outfit">
                <AnimatedShinyText>Use arrows to explore</AnimatedShinyText>
              </span>
              →
            </>
          )}
        </p>
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
