"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUp } from "lucide-react"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -10, 0], // Floating up and down animation
          }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{
            opacity: { duration: 0.3 },
            scale: { duration: 0.3 },
            y: {
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            },
          }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 30px rgba(139, 92, 246, 0.6)",
          }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-5 right-8 z-50 p-3 rounded-full bg-gradient-to-br from-violet-600 to-blue-600 text-white shadow-lg hover:shadow-violet-500/50 transition-shadow duration-300 group"
          aria-label="Scroll to top"
        >
          {/* Animated gradient border */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-400 to-blue-400 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />

          {/* Icon */}
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="relative z-10"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.div>

          {/* Pulse ring effect */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-violet-400"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
