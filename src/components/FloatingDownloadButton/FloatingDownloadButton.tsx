"use client";

import Link from "next/link";
import { Apple, Smartphone, Monitor } from "lucide-react";
import { usePlatform } from "@/hooks/usePlatform";

export function FloatingDownloadButton() {
  const platform = usePlatform();

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
          ? "top-2 left-1/2 -translate-x-1/2" // top center for desktop
          : "bottom-6 left-5" // bottom-left for mobile
      } bg-gradient-to-r ${gradient} text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center gap-1 px-2 py-2 hover:scale-105 active:scale-95`}
    >
      <Icon className="w-5 h-5 flex-shrink-0" />
      <span className="text-xs font-medium whitespace-nowrap font-outfit">
        {label}
      </span>
    </Link>
  );
}
