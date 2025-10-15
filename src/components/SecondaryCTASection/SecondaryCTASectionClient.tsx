'use client';

import { motion } from 'framer-motion';
import {
  Globe,
  Brain,
  MessageSquare,
  Calendar,
  Sparkles,
  Heart,
  Mic,
  BookOpen,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import playStore from '../../../public/play-store.png';
import appStore from '../../../public/app-store.png';
import { BorderBeam } from '../ui/border-beam';
import { useMediaQuery } from '@/hooks/use-media-query';

export function SecondaryCTASectionClient({ children }: { children: React.ReactNode }) {
  const isMobile = useMediaQuery('(max-width: 768px)');

  const floatingIcons = [
    { Icon: Brain, color: 'text-violet-500', x: '10%', y: '20%', delay: 0 },
    {
      Icon: MessageSquare,
      color: 'text-blue-500',
      x: '85%',
      y: '15%',
      delay: 0.5,
    },
    { Icon: Calendar, color: 'text-purple-500', x: '15%', y: '70%', delay: 1 },
    {
      Icon: Sparkles,
      color: 'text-violet-400',
      x: '80%',
      y: '75%',
      delay: 1.5,
    },
    { Icon: Heart, color: 'text-pink-500', x: '5%', y: '45%', delay: 2 },
    { Icon: Mic, color: 'text-blue-400', x: '90%', y: '45%', delay: 2.5 },
    { Icon: BookOpen, color: 'text-purple-400', x: '50%', y: '10%', delay: 3 },
  ];

  return (
    <>
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-blue-500/10 to-purple-500/10 dark:from-violet-500/20 dark:via-blue-500/20 dark:to-purple-500/20" />

      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute ${item.color} opacity-20 hidden md:block`}
          style={{ left: item.x, top: item.y }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [0, 10, -10, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
            delay: item.delay,
          }}
        >
          <item.Icon className="w-12 h-12 md:w-16 md:h-16" />
        </motion.div>
      ))}

      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        {!isMobile && (
          <>
            <motion.path
              d="M0,100 Q250,50 500,100 T1000,100 T1500,100 T2000,100"
              stroke="url(#gradient1)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{
                pathLength: {
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: 'linear',
                },
                opacity: { duration: 1 },
              }}
            />
            <motion.path
              d="M0,200 Q250,150 500,200 T1000,200 T1500,200 T2000,200"
              stroke="url(#gradient2)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{
                pathLength: {
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: 'linear',
                  delay: 0.5,
                },
                opacity: { duration: 1 },
              }}
            />
            <motion.path
              d="M0,300 Q250,250 500,300 T1000,300 T1500,300 T2000,300"
              stroke="url(#gradient3)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{
                pathLength: {
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: 'linear',
                  delay: 1,
                },
                opacity: { duration: 1 },
              }}
            />
          </>
        )}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>

      {/* Animated Gradient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut',
        }}
        className="absolute top-1/12 lg:top-1/4 left-1/4 w-64 lg:w-96 h-64 lg:h-96 bg-violet-500/30 rounded-full blur-lg "
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute bottom-1/12 lg:bottom-1/4 right-1/4 w-64 lg:w-96 h-64 lg:h-96 bg-blue-500/30 rounded-full blur-xl "
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* The static children (h2, p) from the server component are rendered here */}
          {children}

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Google Play Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                rel="noopener noreferrer external nofollow"
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.memozy.memozy"
              >
                <Button
                  size="lg"
                  className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm md:text-sm lg:text-lg px-2 md:px-4 lg:px-5 lg:py-6 font-semibold rounded-full shadow-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] flex items-center gap-2"
                >
                  <Image
                    src={playStore}
                    alt="Play Store"
                    width={24}
                    height={24}
                  />
                  <BorderBeam borderWidth={2} isMobile={isMobile} />
                  Google Play
                </Button>
              </Link>
            </motion.div>

            {/* App Store Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                rel="noopener noreferrer external nofollow"
                target="_blank"
                href="https://apps.apple.com/us/app/memozy-ai-memory-w-character/id6740183131"
              >
                <Button
                  size="lg"
                  className="group relative bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white text-sm md:text-sm lg:text-lg px-2 md:px-4 lg:px-5 lg:py-6 font-semibold rounded-full shadow-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] flex items-center gap-2"
                >
                  <Image
                    src={appStore}
                    alt="App Store"
                    width={24}
                    height={24}
                  />
                  <BorderBeam borderWidth={2} isMobile={isMobile} />
                  App Store
                </Button>
              </Link>
            </motion.div>

            {/* Try on Web Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                rel="noopener noreferrer external nofollow"
                target="_blank"
                href="https://app.memozy.ai/?_gl=1*qodnzp*_gcl_au*MjAxMDA4MTc1My4xNzYwMDcyOTQ4*_ga*MTIwODMwOTMzNC4xNzYwMDcyOTQ4*_ga_EJ2RK3CM1T*czE3NjAxMjE2NDckbzgkZzEkdDE3NjAxMjIwNzMkajYwJGwwJGgw#/login"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="group relative border-2 border-violet-600 dark:border-violet-400 text-violet-600 dark:text-violet-400 hover:bg-violet-600 hover:text-white dark:hover:bg-violet-400 dark:hover:text-black text-sm md:text-sm lg:text-lg px-2 md:px-4 lg:px-5 lg:py-6 font-semibold rounded-full shadow-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] bg-transparent flex items-center gap-2"
                >
                  <Globe className="h-5 w-5" />
                  Try on Webs
                  <BorderBeam borderWidth={2} isMobile={isMobile} />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex items-center justify-center gap-2 text-sm text-muted-foreground"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                  className="text-yellow-500"
                >
                  ★
                </motion.span>
              ))}
            </div>
            <span>Trusted by 10,000+ users worldwide</span>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}