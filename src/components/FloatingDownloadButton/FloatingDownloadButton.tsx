"use client";

import Link from "next/link";
import { Apple, Smartphone, Monitor } from "lucide-react";
import { usePlatform } from "@/hooks/usePlatform";
import { motion } from "framer-motion";

export function FloatingDownloadButton() {
  const platform = usePlatform();

  if (!platform) {
    return null;
  }

  const downloadLinks = {
    android: "https://play.google.com/store/apps/details?id=com.memozy.memozy",
    ios: "https://apps.apple.com/us/app/memozy-ai-memory-w-character/id6740183131",
    desktop:
      "https://app.memozy.ai/?_gl=1*qodnzp*_gcl_au*MjAxMDA4MTc1My4xNzYwMDcyOTQ4*_ga*MTIwODMwOTMzNC4xNzYwMDcyOTQ4*_ga_EJ2RK3CM1T*czE3NjAxMjE2NDckbzgkZzEkdDE3NjAxMjIwNzMkajYwJGwwJGgw#/login",
  };

  const config = {
    android: {
      icon: Smartphone,
      label: "Get Android App",
      gradient: "from-purple-500 to-pink-600",
    },
    ios: {
      icon: Apple,
      label: "Get iOS App",
      gradient: "from-purple-500 to-pink-600",
    },
    desktop: {
      icon: Monitor,
      label: "Open Web App",
      gradient: "from-purple-500 to-pink-600",
    },
  };

  const { icon: Icon, label, gradient } = config[platform];

  return (
    <Link
      href={downloadLinks[platform]}
      target="_blank"
      rel="noopener noreferrer external nofollow"
      className={`group fixed ${
        platform === "desktop"
          ? "top-4 left-1/2 -translate-x-1/2" // top center for desktop
          : "bottom-6 left-5" // bottom-left for mobile
      } bg-gradient-to-r ${gradient} text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center gap-1 px-2 py-2 hover:scale-105 active:scale-95`}
    >
      <Icon className="w-5 h-5 flex-shrink-0" />
      <span className="text-xs font-medium whitespace-nowrap font-outfit">
        {label}
      </span>
      {/* Floating Free Badge at Top-Right Corner */}
      <motion.span
        className="absolute -top-2 -right-2 bg-green-700 dark:bg-white/10 text-white text-[10px] font-bold px-2 py-1 rounded-full ring-1 ring-white/30 shadow-lg z-10"
        initial={{ scale: 0.8, opacity: 0, y: -10 }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: 1,
          y: [0, -5, 0],
        }}
        transition={{
          scale: { duration: 0.6, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 0.3 },
        }}
        whileHover={{ scale: 1.1, y: -8 }} // Extra "pull" on hover
      >
        Free!
      </motion.span>
    </Link>
  );
}
