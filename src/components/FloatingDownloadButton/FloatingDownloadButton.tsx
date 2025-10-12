"use client"


import Link from "next/link"
import { Apple, Smartphone, Monitor } from "lucide-react"
import { usePlatform } from "@/hooks/usePlatform"

export function FloatingDownloadButton() {
  const platform = usePlatform()

  const downloadLinks = {
    android: "https://play.google.com/store/apps/details?id=com.memozy",
    ios: "https://apps.apple.com/app/memozy/id123456789",
    desktop: "https://memozy.ai/web",
  }

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
  }

  const { icon: Icon, label, gradient } = config[platform]

  return (
    <Link
      href={downloadLinks[platform]}
      target="_blank"
      rel="noopener noreferrer"
      className={`group fixed bottom-6 left-6 bg-gradient-to-r ${gradient} text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center gap-2 px-4 py-3 hover:scale-105 active:scale-95`}
    >
      <Icon className="w-5 h-5 flex-shrink-0" />
      <span className="text-xs font-medium whitespace-nowrap font-outfit">{label}</span>
    </Link>
  )
}
