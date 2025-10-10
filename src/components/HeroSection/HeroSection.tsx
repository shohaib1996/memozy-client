"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Star, Apple, Smartphone } from "lucide-react"
import { FloatingParticles } from "./FloatingParticles"

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <FloatingParticles />

      <motion.div
        className="absolute top-0 left-0 w-64 h-64 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          className="absolute top-0 left-0 w-72 h-72 rounded-full bg-violet-800/30 blur-3xl"
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-8 left-8 w-32 h-32 rounded-full bg-emerald-400/40 blur-2xl"
          animate={{
            opacity: [0.4, 1, 0.4],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </motion.div>

      <motion.div
        className="absolute bottom-0 right-0 w-64 h-64 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-emerald-500/30 blur-3xl"
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2.2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-8 right-8 w-32 h-32 rounded-full bg-violet-800/40 blur-2xl"
          animate={{
            opacity: [0.4, 1, 0.4],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 2.7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0.7,
          }}
        />
      </motion.div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className=" text-sm font-medium tracking-wider uppercase"
            >
              Memozy AI Companion
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance text-violet-500"
            >
              Your AI Memory & Companion
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl leading-relaxed text-pretty"
            >
              Boost productivity, stay emotionally supported, and never forget an idea again.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="bg-white text-violet-600 hover:bg-white/90 font-semibold px-8">
                <Apple className="mr-2 h-5 w-5" />
                App Store
              </Button>
              <Button size="lg" className="bg-white text-violet-600 hover:bg-white/90 font-semibold px-8">
                <Smartphone className="mr-2 h-5 w-5" />
                Google Play
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white  hover:bg-white/10 font-semibold px-8 bg-transparent"
              >
                Try on Web
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-2"
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-medium">Trusted by thousands across iOS & Android</span>
            </motion.div>
          </motion.div>

          {/* Right side - Animated mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="relative"
            >
              {/* Phone mockup placeholder */}
              <div className="relative w-[300px] h-[600px] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-[3rem] border-4 border-white/20 shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black/50 rounded-b-3xl" />

                {/* Chat interface mockup */}
                <div className="p-6 pt-12 space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="bg-gray-800/20 backdrop-blur-sm rounded-2xl p-4 text-sm"
                  >
                    Hey Memozy, remind me about my meeting tomorrow
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    className="bg-primary/80 backdrop-blur-sm rounded-2xl p-4 text-white  text-sm ml-8"
                  >
                    Got it! I'll remind you about your meeting at 10 AM tomorrow. Would you like me to add it to your
                    calendar?
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2, duration: 0.5 }}
                    className="bg-gray-800/20 backdrop-blur-sm rounded-2xl p-4  text-sm"
                  >
                    Yes please!
                  </motion.div>
                </div>
              </div>

              {/* Floating elements around phone */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute -top-8 -right-8 w-20 h-20 bg-accent/30 backdrop-blur-xl rounded-2xl border border-white/20 flex items-center justify-center"
              >
                <span className="text-3xl">🧠</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-8 -left-8 w-20 h-20 bg-secondary/30 backdrop-blur-xl rounded-2xl border border-white/20 flex items-center justify-center"
              >
                <span className="text-3xl">💫</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
