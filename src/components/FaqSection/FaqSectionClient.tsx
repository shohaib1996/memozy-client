'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Lottie from 'lottie-react';
import faqAnimation from '../../../public/FAQ.json';

interface Faq {
  question: string;
  answer: string;
}

export function FaqSectionClient({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="container mx-auto relative z-10">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-violet-600 to-blue-600 dark:from-violet-400 dark:to-blue-400 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Everything you need to know about Memozy
        </p>
      </motion.div>

      {/* Two column layout */}
      <div className="grid lg:grid-cols-2 gap-12 items-center ">
        {/* Left side - Animation placeholder */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <Lottie
            animationData={faqAnimation}
            loop={true}
            width={300}
            height={300}
          />
          {/* Decorative elements */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
            }}
            className="absolute -top-10 -left-2 md:-left-5 lg:-left-10 w-16 md:w-28 lg:w-36 h-16 md:h-28 lg:h-36 bg-violet-500/20 rounded-full"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
              delay: 2,
            }}
            className="absolute -bottom-10 -right-2 md:-right-5 lg:-right-10 w-16 md:w-28 lg:w-36 h-16 md:h-28 lg:h-36 bg-blue-500/20 rounded-full"
          />
        </motion.div>

        {/* Right side - Accordion */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion
            type="single"
            collapsible
            defaultValue="item-0"
            className="space-y-4 font-outfit"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-violet-500/40 dark:border-violet-500/30 rounded-lg px-6 bg-background/50 backdrop-blur-sm hover:border-violet-500/40 dark:hover:border-violet-500/50 transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4 cursor-pointer">
                  <span className="font-semibold text-foreground text-base lg:text-lg">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </div>
  );
}
