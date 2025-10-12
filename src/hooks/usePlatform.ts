"use client"

import { useEffect, useState } from "react"

export type PlatformType = "android" | "ios" | "desktop"

export function usePlatform(): PlatformType {
  const [platform, setPlatform] = useState<PlatformType>("desktop")

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase()

    if (/android/.test(userAgent)) {
      setPlatform("android")
    } else if (/iphone|ipad|ipod/.test(userAgent)) {
      setPlatform("ios")
    } else {
      setPlatform("desktop")
    }
  }, [])

  return platform
}
