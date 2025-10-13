"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import { motion } from "framer-motion"
import { Download, Star, X } from "lucide-react"
import Image from "next/image"
import qrcodeAll from "../../../public/qrcode-all.png"
import type React from "react"

interface ReusableDialogProps {
  trigger: React.ReactNode
  title: string
  description: string
  children?: React.ReactNode
}

export function ReusableDialog({ trigger, title, description, children }: ReusableDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[80vh] p-0 overflow-hidden border-violet-500/20 font-outfit">
        {/* Top-left corner light */}
        <motion.div
          className="absolute -top-20 -left-20 w-40 h-40 bg-violet-500/70 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -top-16 -left-16 w-32 h-32 bg-violet-400/70 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -top-8 -left-8 w-16 h-16 bg-violet-500/60 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        {/* Bottom-right corner light */}
        <motion.div
          className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-500/70 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />
        <motion.div
          className="absolute -bottom-16 -right-16 w-32 h-32 bg-blue-500/70 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />
        <motion.div
          className="absolute -bottom-8 -right-8 w-16 h-16 bg-blue-500/70 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />

        <div className="relative z-10 bg-gradient-to-br from-violet-500/5 via-transparent to-blue-500/5 p-4">
          {/* Custom Close Button */}
          <DialogClose asChild>
            <motion.button
              className="absolute top-3 right-3 w-8 h-8 rounded-full cursor-pointer bg-red-500/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-red-400 transition-colors duration-200"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
            >
              <X className="w-4 h-4" />
            </motion.button>
          </DialogClose>

          <DialogHeader className="space-y-2 pt-4">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: "easeOut" }}>
              <DialogTitle className="text-xl font-bold text-center bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
                {title}
              </DialogTitle>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}>
              <DialogDescription className="text-center text-muted-foreground text-sm">{description}</DialogDescription>
            </motion.div>
          </DialogHeader>

          <div className="mt-4 relative flex-1 flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="flex flex-col items-center w-full"
            >
              <motion.div
                className="relative p-3 bg-white rounded-xl shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2, type: "spring", stiffness: 400 }}
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-blue-600 rounded-xl blur-xs opacity-40" />
                <div className="relative bg-white rounded-lg p-1.5">
                  <Image
                    src={qrcodeAll || "/placeholder.svg"}
                    alt="QR Code"
                    width={180}
                    height={180}
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
              <p className="mt-3 text-xs text-muted-foreground flex items-center gap-1">
                <Download className="w-3 h-3" />
                Scan to download
              </p>
            </motion.div>
          </div>

          <motion.div
            className="mt-4 flex items-center justify-center gap-1 text-xs text-muted-foreground pb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span>Trusted by 10k+ users</span>
          </motion.div>

          {children}
        </div>
      </DialogContent>
    </Dialog>
  )
}