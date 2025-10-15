"use client";

import { motion, useInView } from "framer-motion";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Download,
  TrendingUp,
} from "lucide-react";
import { useRef, useState, useEffect } from "react";

import testimonials from "../../../public/review.json";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { BorderBeam } from "../ui/border-beam";
import playStore from "../../../public/play-store.png";
import appStore from "../../../public/app-store.png";
import qrCode from "../../../public/qr-code.png";
import { usePlatform } from "@/hooks/usePlatform";
import { ReusableDialog } from "@/components/ui/reusable-dialog";
import { useMediaQuery } from "@/hooks/use-media-query";

const featuredLogos = [
  { name: "TechCrunch", color: "text-green-500" },
  { name: "Product Hunt", color: "text-orange-500" },
  { name: "The Verge", color: "text-purple-500" },
  { name: "Wired", color: "text-blue-500" },
];

export function TestimonialsSectionClient() {
  const platform = usePlatform();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const [autoPlay, setAutoPlay] = useState(true);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const totalSlides = testimonials.length - visibleCount + 1;

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width < 640) setVisibleCount(1);
      else if (width < 768) setVisibleCount(2);
      else if (width < 1024) setVisibleCount(3);
      else setVisibleCount(4);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    if (autoPlay) {
      interval = setInterval(() => {
        paginate(1, true);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [autoPlay]);

  useEffect(() => {
    setCurrentIndex((prev) => {
      const max = testimonials.length - visibleCount;
      return Math.min(prev, max);
    });
  }, [visibleCount]);

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number, isAuto: boolean = false) => {
    if (!isAuto) setAutoPlay(false);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      const maxIndex = testimonials.length - visibleCount;
      if (nextIndex < 0) nextIndex = maxIndex;
      if (nextIndex > maxIndex) nextIndex = 0;
      return nextIndex;
    });
  };

  const cardWidth = 100 / visibleCount;

  return (
    <section
      id="memozy-testimonials"
      aria-label="MemoZy user reviews and testimonials"
      ref={ref}
      className="relative py-16 px-4 bg-gradient-to-tl from-violet-500/30 via-cyan-400/30 to-emerald-400/30"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 font-outfit"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-violet-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
            What Our Users Say About MemoZy
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join our community of happy users who have transformed their
            productivity and emotional well-being
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-violet-500/10 via-blue-500/10 to-cyan-500/10 border-2 border-violet-500/30 backdrop-blur-sm"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 3,
              }}
            >
              <Download className="w-6 h-6 text-violet-500" />
            </motion.div>
            <div className="flex items-center gap-2">
              <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                10k+
              </span>
              <span className="text-sm md:text-base text-muted-foreground">
                downloads on Play Store
              </span>
            </div>
            <motion.div
              animate={{
                y: [-2, 2, -2],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <TrendingUp className="w-5 h-5 text-green-500" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Testimonials Carousel */}
        <div
          className="relative max-w-[1400px] mx-auto mb-10"
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
          {/* Carousel Container */}
          <div className="relative overflow-hidden">
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              animate={{
                x: `-${currentIndex * cardWidth}%`,
              }}
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
              }}
              className="flex h-full cursor-grab active:cursor-grabbing"
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-none"
                  style={{ width: `${cardWidth}%` }}
                >
                  {/* Testimonial Card */}
                  <div
                    className="group relative p-4"
                    onMouseEnter={() => setAutoPlay(false)}
                    onMouseLeave={() => setAutoPlay(true)}
                  >
                    <div className="relative h-[220px] p-6 rounded-2xl bg-card/50 backdrop-blur-sm border-2 border-border hover:border-violet-500/50 transition-all duration-300 shadow-lg hover:shadow-violet-500/20 overflow-hidden">
                      {/* Corner Glow Effect - Layer 1 (Outer) */}
                      <motion.div
                        className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-violet-500/30 to-blue-500/20 rounded-full  -mr-16 -mt-16"
                        animate={{
                          scale: [1, 1.15, 1],
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />

                      {/* Corner Glow Effect - Layer 2 (Middle) */}
                      <motion.div
                        className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/35 to-cyan-500/25 rounded-full -mr-14 -mt-14"
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.6, 0.9, 0.6],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.5,
                        }}
                      />

                      {/* Corner Glow Effect - Layer 3 (Inner) */}
                      <motion.div
                        className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-violet-500/40 to-blue-500/30 rounded-full  -mr-12 -mt-12"
                        animate={{
                          scale: [1, 1.05, 1],
                          opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1,
                        }}
                      />

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/5 via-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Content */}
                      <div className="relative z-10 font-outfit">
                        {/* Avatar and Name */}
                        <div className="flex items-center gap-3 mb-4">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            width={40}
                            height={40}
                            className="w-10 h-10 rounded-full object-cover"
                            loading="lazy"
                          />
                          <div>
                            <h3 className="font-semibold text-base text-foreground">
                              {testimonial.name}
                            </h3>
                            <p className="text-xs text-muted-foreground">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>

                        {/* Quote */}
                        <blockquote className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                          &quot;{testimonial.quote}&quot;
                        </blockquote>

                        {/* Star Rating */}
                        <div className="flex gap-1">
                          {Array.from({ length: testimonial.rating }).map(
                            (_, i) => (
                              <Star
                                key={i}
                                className="w-4 h-4 fill-yellow-500 text-yellow-500"
                              />
                            )
                          )}
                        </div>
                      </div>

                      {/* Border Beam - ✅ now correctly positioned */}
                      <BorderBeam
                        borderWidth={2}
                        className="from-violet-500 via-emerald-500 to-transparent"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => paginate(-1)}
            className="hidden lg:flex absolute left-3 bg-gradient-to-r from-violet-500 to-blue-500 top-[43%] -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 hover:border-violet-500/50 hover:bg-violet-500/10 transition-all duration-300 items-center justify-center group shadow-lg z-20"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:text-white transition-colors" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="hidden lg:flex absolute right-3 bg-gradient-to-r from-violet-500 to-blue-500 top-[43%] -translate-y-1/2 translate-x-1/2 w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 hover:border-violet-500/50 hover:bg-violet-500/10 transition-all duration-300 items-center justify-center group shadow-lg z-20"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:text-white transition-colors" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8 items-center">
            {(() => {
              const elements = [];

              // First dot
              elements.push(
                <button
                  key="first"
                  onClick={() => setCurrentIndex(0)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    0 === currentIndex
                      ? "bg-violet-500 w-8"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label="Go to slide 1"
                />
              );

              // First ellipsis
              if (totalSlides > 5 && currentIndex > 2) {
                elements.push(
                  <span
                    key="ellipsis1"
                    className="text-muted-foreground text-sm mx-1"
                  >
                    ...
                  </span>
                );
              }

              // Middle dots
              const start = Math.max(1, currentIndex - 1);
              const end = Math.min(totalSlides - 2, currentIndex + 1);
              for (let i = start; i <= end; i++) {
                elements.push(
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === currentIndex
                        ? "bg-violet-500 w-8"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                );
              }

              // Second ellipsis
              if (totalSlides > 5 && currentIndex < totalSlides - 3) {
                elements.push(
                  <span
                    key="ellipsis2"
                    className="text-muted-foreground text-sm mx-1"
                  >
                    ...
                  </span>
                );
              }

              // Last dot (only if totalSlides > 1 and not already included)
              if (totalSlides > 1) {
                elements.push(
                  <button
                    key="last"
                    onClick={() => setCurrentIndex(totalSlides - 1)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      totalSlides - 1 === currentIndex
                        ? "bg-violet-500 w-8"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    aria-label={`Go to slide ${totalSlides}`}
                  />
                );
              }

              return elements;
            })()}
          </div>
        </div>

        {/* Featured On Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground mb-6 uppercase tracking-wider font-outfit">
            As Featured On
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {featuredLogos.map((logo, index) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="cursor-pointer"
              >
                <span
                  className={`text-xl md:text-2xl font-bold ${logo.color} opacity-60 hover:opacity-100 transition-opacity`}
                >
                  {logo.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <div className="text-center mt-16 md:mt-8 flex items-center justify-center gap-2 flex-wrap">
          <div className="flex flex-wrap gap-4">
            <Link
              rel="noopener noreferrer external nofollow "
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.memozy.memozy"
            >
              <Button
                size="lg"
                className="relative overflow-hidden text-sm md:text-sm lg:text-lg px-2 md:px-4 lg:px-5 lg:py-6 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 text-white font-semibold flex items-center gap-2 hover:opacity-90 transition-all duration-300 cursor-pointer font-outfit"
              >
                <Image
                  src={playStore}
                  alt="Play Store"
                  width={24}
                  height={24}
                />
                Play Store
                <BorderBeam borderWidth={2} isMobile={isMobile} />
              </Button>
            </Link>
            <Link
              rel="noopener noreferrer external nofollow"
              target="_blank"
              href="https://apps.apple.com/us/app/memozy-ai-memory-w-character/id6740183131"
            >
              <Button
                size="lg"
                className="relative overflow-hidden text-sm md:text-sm lg:text-lg px-2 md:px-4 lg:px-5 lg:py-6 bg-gradient-to-r from-violet-500 via-indigo-500 to-blue-500 text-white font-semibold flex items-center gap-2 hover:opacity-90 transition-all duration-300 cursor-pointer font-outfit"
              >
                <Image src={appStore} alt="App Store" width={24} height={24} />
                App Store
                <BorderBeam borderWidth={2} isMobile={isMobile} />
              </Button>
            </Link>
            {platform === "desktop" && (
              <ReusableDialog
                trigger={
                  <Button
                    size="lg"
                    className="relative cursor-pointer overflow-hidden text-sm md:text-sm bg-gradient-to-r from-violet-500 to-blue-500 lg:text-lg px-2 md:px-4 lg:px-5 lg:py-6 font-outfit text-white font-semibold flex items-center gap-2 hover:opacity-90 transition-all duration-300 cursor-pointert"
                  >
                    <Image src={qrCode} alt="Qr Code" width={24} height={24} />
                    QR Code
                    <BorderBeam borderWidth={2} />
                  </Button>
                }
                title="Download by QR Code"
                description="This is a placeholder for IOS and Androild App download QR Code."
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
