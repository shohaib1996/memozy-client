"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-media-query";
import { ReusableDialog } from "@/components/ui/reusable-dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { BorderBeam } from "@/components/ui/border-beam";
import qrCode from "../../../../public/qr-code.png";
import { usePlatform } from "@/hooks/usePlatform";
import Link from "next/link";
import playStore from "../../../../public/play-store.png";
import appStore from "../../../../public/app-store.png";

export const MemozySecondBrainPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const isTablet = useMediaQuery("(max-width: 1024px)");
  const platform = usePlatform();

  useEffect(() => {
    setIsMobile(isTablet);
  }, [isTablet]);

  return (
    <div className="relative min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] w-full flex items-center justify-center overflow-hidden py-20 px-4 md:px-8">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/secondbrain.webp')",
        }}
      />

      {/* Overlay - adjust opacity for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-purple-900/60 to-slate-900/80 dark:from-slate-950/90 dark:via-purple-950/70 dark:to-slate-950/90" />

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        {/* Gradient Headline */}
        <motion.h1
          className="
            text-3xl md:text-5xl lg:text-6xl 
            font-bold font-outfit mb-6 
            bg-gradient-to-r from-violet-500 to-blue-500 
            bg-clip-text text-transparent 
            drop-shadow-lg
            dark:from-violet-400 dark:to-cyan-400
          "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Your Mind, Organized Effortlessly
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-lg md:text-xl text-purple-100 mb-12 max-w-2xl mx-auto font-outfit drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Let Memozy remember everything, so you can focus on what matters.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 items-center justify-center lg:justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {platform === "desktop" && (
            <ReusableDialog
              trigger={
                <Button
                  size="lg"
                  className="relative cursor-pointer overflow-visible text-sm md:text-sm bg-gradient-to-r from-violet-500 to-blue-500 lg:text-lg px-2 md:px-4 lg:px-5 lg:py-6 font-outfit text-white font-semibold flex items-center gap-2 hover:opacity-90 transition-all duration-300"
                >
                  <Image
                    src={qrCode}
                    alt="QR code to download the Memozy app"
                    width={24}
                    height={24}
                  />{" "}
                  Get The App
                  <BorderBeam borderWidth={2} />
                  {/* Floating Free Badge at Top-Right Corner */}
                  <motion.span
                    className="absolute -top-2 -right-2 bg-white/20 text-white text-xs font-bold px-2 py-1 rounded-full ring-1 ring-white/30 shadow-lg z-10"
                    initial={{ scale: 0.8, opacity: 0, y: -10 }}
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: 1,
                      y: [0, -5, 0],
                    }}
                    transition={{
                      scale: {
                        duration: 0.9,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                      y: { duration: 1, repeat: Infinity, ease: "easeInOut" },
                      opacity: { duration: 0.5 },
                    }}
                    whileHover={{ scale: 1.2, y: -5 }} // Extra "pull" on button hover
                  >
                    Free!
                  </motion.span>
                </Button>
              }
              title="Download by QR Code"
              description="Scan to Get Memozy on Your Phone 📱Download Memozy instantly — available for iOS & Android."
            />
          )}
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://play.google.com/store/apps/details?id=com.memozy.memozy"
          >
            <Button
              size="lg"
              className="relative overflow-hidden text-sm md:text-sm lg:text-lg px-2 md:px-4 lg:px-5 lg:py-6 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 text-white font-semibold flex items-center gap-2 hover:opacity-90 transition-all duration-300 cursor-pointer uppercase font-outfit"
            >
              <Image src={playStore} alt="Play Store" width={24} height={24} />
              Play Store
              <BorderBeam borderWidth={2} isMobile={isMobile} />
            </Button>
          </Link>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://apps.apple.com/us/app/memozy-ai-memory-w-character/id6740183131"
          >
            <Button
              size="lg"
              className="relative overflow-hidden text-sm md:text-sm lg:text-lg px-2 md:px-4 lg:px-5 lg:py-6 bg-gradient-to-r from-violet-500 via-indigo-500 to-blue-500 text-white font-semibold flex items-center gap-2 hover:opacity-90 transition-all duration-300 cursor-pointer uppercase font-outfit"
            >
              <Image src={appStore} alt="App Store" width={24} height={24} />
              App Store
              <BorderBeam borderWidth={2} isMobile={isMobile} />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
