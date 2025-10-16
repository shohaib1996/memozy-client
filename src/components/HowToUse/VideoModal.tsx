"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

interface VideoModalProps {
  videoUrl: string;
  isMobile?: boolean;
}

export function VideoModal({ videoUrl }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <motion.div
      className="flex justify-center items-center w-full"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Mobile Phone Frame */}
      <div className="relative w-full max-w-sm">
        {/* Phone Bezel */}
        <div className="bg-gray-200 rounded-3xl p-1 shadow-2xl">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-3 bg-gray-200 rounded-b-3xl z-20" />

          {/* Screen */}
          <div className="relative bg-black rounded-2xl overflow-hidden aspect-[9.7/18]">
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={videoUrl} type="video/webm" />
            </video>

            {/* Shine Effect - Moved inside the screen for it to sweep only across the video/screen area */}
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

        {/* Phone Bottom Bezel */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gray-200 rounded-t-2xl" />
      </div>
    </motion.div>
  );
}
