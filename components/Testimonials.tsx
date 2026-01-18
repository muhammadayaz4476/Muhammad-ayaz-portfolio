"use client";

import { motion } from "framer-motion";
import FadeIn from "./ui/FadeIn";
import { Quote } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Dr. Sarah Ahmed",
        role: "Professor, Superior University",
        text: "Ayaz consistently demonstrates a deep understanding of software architecture. His final year project was among the most technically impressive in the cohort."
    },
    {
        id: 2,
        name: "Ali Raza",
        role: "Senior Developer (Mentor)",
        text: "One of the most dedicated learners I've mentored. He picks up complex concepts like Clean Architecture and State Management incredibly fast."
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <FadeIn className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">What Others Say</h2>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {testimonials.map((t, i) => (
                        <FadeIn key={t.id} delay={i * 0.2}>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="p-8 rounded-2xl bg-muted/20 border border-white/5 relative"
                            >
                                <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
                                <p className="text-lg text-muted-foreground italic mb-6 relative z-10">"{t.text}"</p>
                                <div>
                                    <div className="font-bold text-foreground">{t.name}</div>
                                    <div className="text-sm text-primary">{t.role}</div>
                                </div>
                            </motion.div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
