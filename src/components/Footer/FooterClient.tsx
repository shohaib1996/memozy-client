"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, Music2, Mail } from "lucide-react";
import qrCodeAll from "../../../public/qrcode-all.png";
import logo from "../../../public/logo.png";

interface QuickLink {
  name: string;
  href: string;
}

// interface SocialLink {
//   name: string;
//   icon: LucideIcon;
//   href: string;
// }

interface FooterClientProps {
  quickLinks: QuickLink[];
  features: string[];
}

export function FooterClient({ quickLinks, features }: FooterClientProps) {
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/memozy_ai/",
    },
    { name: "TikTok", icon: Music2, href: "https://www.tiktok.com/@memozy87" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-black dark:from-slate-950 dark:via-slate-900 dark:to-black text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Logo and tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative">
                <Image
                  src={logo}
                  alt="logo"
                  width={32}
                  height={32}
                  className="animate-pulse"
                />
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-violet-500/20 rounded-full blur-md"
                />
              </div>
              <span className="text-2xl font-bold">Memozy</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Memozy — Your AI Memory.
              <br />
              Stay organized, feel supported, and never forget an idea again.
            </p>
            <div className="flex gap-2 pt-2">
              <div className="px-3 py-1 bg-violet-500/10 border border-violet-500/20 rounded-full text-xs text-violet-400">
                AI Powered
              </div>
              <div className="px-3 py-1 bg-blue-500/10 border-blue-500/20 rounded-full text-xs text-blue-400">
                10K+ Users 
              </div>
            </div>

            {/* QR Code */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className=""
            >
              <div className="">
                <div className="inline-flex flex-col gap-2 p-2 rounded-lg bg-slate-800/50 border border-slate-700/50">
                  <Image
                    src={qrCodeAll}
                    alt="Scan QR code for Memozy"
                    width={120}
                    height={120}
                    className="light:filter dark:filter dark:invert rounded-xl "
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    rel="noopener noreferrer external nofollow"
                    target="_blank"
                    className="text-slate-400 hover:text-violet-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-violet-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Features</h3>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="text-slate-400 text-sm flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-blue-500 rounded-full" />
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white">
              Connect With Us
            </h3>
            <div className="space-y-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  rel="noopener noreferrer external nofollow"
                  target="_blank"
                  aria-label={`Follow us on ${social.name}`}
                  className="flex items-center gap-3 text-slate-400 hover:text-violet-400 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center group-hover:bg-violet-500/10 group-hover:border-violet-500/30 transition-all">
                    <social.icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm">{social.name}</span>
                </Link>
              ))}
            </div>

            {/* Contact */}
            <div className="mt-6 pt-6 border-t border-slate-800">
              <Link
                href="https://www.memozy.ai/app-feedback.html"
                rel="noopener noreferrer external nofollow"
                target="_blank"
                className="flex items-center gap-3 text-slate-400 hover:text-blue-400 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-sm">Contact Support</span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-8 border-t border-slate-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Memozy. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span>Made with</span>
              <motion.span
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="text-red-500"
              >
                ♥
              </motion.span>
              <span>for better productivity</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient line */}
      <div className="h-1 bg-gradient-to-r from-violet-600 via-blue-600 to-violet-600" />
    </footer>
  );
}
