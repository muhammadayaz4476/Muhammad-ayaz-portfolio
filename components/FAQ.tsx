"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./ui/FadeIn";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "Are you available for full-time roles?",
        answer: "Yes, I am currently open to full-time Internship and Junior/Associate Developer roles. I am available to start immediately."
    },
    {
        question: "Are you willing to relocate?",
        answer: "Absolutely. I am open to relocation for the right opportunity and am also comfortable working remotely."
    },
    {
        question: "What is your strongest tech stack?",
        answer: "My strongest stack is the MERN stack (MongoDB, Express, React, Node.js) + Next.js for web, and Flutter (Dart) for mobile development."
    },
    {
        question: "How do you handle debugging?",
        answer: "I follow a systematic approach: reproducing the issue, isolating the cause using breakpoints/logs, fixing it, and writing tests to prevent regression."
    }
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-muted/5">
            <div className="container mx-auto px-6 max-w-3xl">
                <FadeIn className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground">Common questions for recruiters and hiring managers.</p>
                </FadeIn>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FadeIn key={index} delay={index * 0.1}>
                            <div className="border border-white/10 rounded-xl bg-background overflow-hidden">
                                <button
                                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                >
                                    <span className="font-semibold text-lg">{faq.question}</span>
                                    {activeIndex === index ? (
                                        <Minus className="w-5 h-5 text-primary" />
                                    ) : (
                                        <Plus className="w-5 h-5 text-muted-foreground" />
                                    )}
                                </button>
                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-6 pb-6 text-muted-foreground leading-relaxed border-t border-white/5 pt-4">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
