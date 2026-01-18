"use client";

import { motion } from "framer-motion";
import FadeIn from "./ui/FadeIn";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
    {
        id: 1,
        type: "degree",
        title: "B.S. Software Engineering",
        institution: "Superior University",
        year: "2023 - 2027",
        details: "Focusing on Software Architecture, Algorithms, and Mobile Computing. maintained 3.8 GPA.",
        icon: <GraduationCap className="w-5 h-5 text-primary" />
    },
    {
        id: 2,
        type: "certification",
        title: "Flutter Development Bootcamp",
        institution: "Udemy / Google",
        year: "2024",
        details: "Comprehensive training on Dart, Flutter widgets, state management (BLoC), and API integration.",
        icon: <Award className="w-5 h-5 text-secondary" />
    },
    {
        id: 3,
        type: "course",
        title: "Full-Stack Web Development",
        institution: "Meta / Coursera",
        year: "2023",
        details: "Professional certificate covering React, Node.js, and Database management fundamentals.",
        icon: <BookOpen className="w-5 h-5 text-blue-400" />
    }
];

export default function Education() {
    return (
        <section id="experience" className="py-24 relative overflow-hidden">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6">
                <FadeIn className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                        Learning <span className="text-primary">Journey</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Continuous growth through academic excellence and specialized certifications.
                    </p>
                </FadeIn>

                <div className="relative max-w-3xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-secondary/50 to-transparent" />

                    <div className="space-y-12">
                        {education.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: index * 0.2 }}
                                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                            >
                                {/* Dot */}
                                <div className="absolute left-[19px] md:left-1/2 md:-translate-x-1/2 top-0 w-4 h-4 rounded-full bg-background border-2 border-primary z-10">
                                    <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                                </div>

                                {/* Content Card */}
                                <div className="ml-16 md:ml-0 md:w-1/2 md:px-8">
                                    <div className={`p-6 rounded-2xl bg-muted/10 border border-white/5 hover:border-primary/20 transition-all ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                                        <div className={`flex items-center gap-3 mb-2 ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}>
                                            <span className="text-sm font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                                                {item.year}
                                            </span>
                                            <div className={`p-1.5 rounded-lg bg-white/5 ${index % 2 === 0 ? "order-first" : "order-last"}`}>
                                                {item.icon}
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                                        <div className="text-sm font-medium text-muted-foreground mb-3">{item.institution}</div>
                                        <p className="text-sm text-muted-foreground/80 leading-relaxed">
                                            {item.details}
                                        </p>
                                    </div>
                                </div>

                                {/* Placeholder for balance */}
                                <div className="hidden md:block md:w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
