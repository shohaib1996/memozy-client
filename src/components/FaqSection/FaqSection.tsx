"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Lottie from "lottie-react";
import faqAnimation from "../../../public/FAQ.json";

export function FaqSection() {
  const faqs = [
    {
      question: "What is Memozy?",
      answer:
        "Memozy is not just another AI chatbot. It's your AI memory, productivity tool, and personal companion - built to help you stay organized, focused, and emotionally supported every day. Whether you need a smart AI assistant app for reminders and planning, or a friendly AI character chat for roleplay and conversation, Memozy adapts to your world.",
    },
    {
      question: "How does Memozy help with productivity?",
      answer:
        "Memozy acts as your second brain and AI productivity tool. It helps you track daily tasks, schedule events, and never miss important deadlines. Create to-do lists, organize priorities, set smart reminders, sync with your calendar, and capture quick thoughts instantly. From shopping lists to project deadlines, everything is stored in one place and easy to access.",
    },
    {
      question: "Can Memozy help with writing and journaling?",
      answer:
        "Yes! Memozy doubles as your AI writing partner and journaling app. It can help you brainstorm ideas, outline plots, and even roleplay characters to bring your stories alive. For personal growth, log your thoughts, reflect on your mood, and receive weekly summaries highlighting your wins, struggles, and insights. Journaling with AI gives you a clearer view of your progress and habits over time.",
    },
    {
      question: "What are the different AI vibes and modes?",
      answer:
        "Memozy adapts to your mood with different chat styles: Friendly (warm and supportive), Professional (structured and clear, like a work assistant), Romantic (roleplay as your AI companion), and RoastMe (playful teasing and witty comebacks). Switch modes anytime to enjoy conversations that feel real and match your current vibe.",
    },
    {
      question: "What features does Memozy offer?",
      answer:
        "Memozy offers smart reminders, notes & to-dos, task organization, image to notes conversion, calendar sync, home screen widgets, voice messages, custom AI voices, weekly journal summaries, and personalized chat experiences. It combines the practicality of an AI assistant with the personality of an AI companion, perfect for students, professionals, and anyone seeking both productivity and connection.",
    },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-500/20 via-blue-500/30 to-emerald-400/15 dark:from-violet-500/10 dark:via-blue-500/20" />

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
              width={400}
              height={400}
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
                ease: "easeInOut",
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
                ease: "easeInOut",
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
                  <AccordionTrigger className="text-left hover:no-underline py-4">
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
    </section>
  );
}
