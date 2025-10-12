"use client"

import { usePlatform } from "@/hooks/usePlatform"
import Link from "next/link"

export function FloatingDownloadButton() {
  const platform = usePlatform()

  const downloadLinks = {
    android: "https://play.google.com/store/apps/details?id=com.memozy",
    ios: "https://apps.apple.com/app/memozy/id123456789",
    desktop: "https://memozy.ai/web",
  }

  const label =
    platform === "android"
      ? "Download for Android"
      : platform === "ios"
      ? "Download for iOS"
      : "Open Web App"

  return (
    <Link
      href={downloadLinks[platform]}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 left-1/2 -translate-x-1/2 text-xs bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-all duration-300 z-50"
    >
      {label}
    </Link>
  )
}
