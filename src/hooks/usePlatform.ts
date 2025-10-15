"use client"

import { useEffect, useState } from "react"

type Platform = "android" | "ios" | "desktop"

export function usePlatform(): Platform | null {
  const [platform, setPlatform] = useState<Platform | null>(null)

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera

    // Check for iOS devices
    if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
      setPlatform("ios")
    }
    // Check for Android devices
    else if (/android/i.test(userAgent)) {
      setPlatform("android")
    }
    // Default to desktop
    else {
      setPlatform("desktop")
    }
  }, [])

  return platform
}