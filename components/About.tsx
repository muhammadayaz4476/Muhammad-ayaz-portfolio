"use client";

import { motion } from "framer-motion";
import FadeIn from "./ui/FadeIn";
import { BadgeCheck, MapPin, Globe, Sparkles } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl opacity-50" />

            <div className="container mx-auto px-6">
                <FadeIn className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Left: Narrative */}
                    <div className="space-y-8">
                        <div className="space-y-2">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm font-medium border border-green-500/20"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                <span>Open to Work</span>
                            </motion.div>
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                                More Than Just <br /> <span className="text-primary">Code</span>
                            </h2>
                        </div>

                        <div className="prose prose-lg prose-invert text-muted-foreground">
                            <p>
                                My journey into software engineering started with a simple curiosity:
                                <span className="text-foreground font-medium italic"> "How do things work?"</span>.
                                That curiosity quickly turned into a passion for building digital experiences that solve real-world problems.
                            </p>
                            <p>
                                I don't just write code; I build <span className="text-primary">products</span>.
                                Whether it's a complex e-commerce platform or a sleek mobile app,
                                I focus on scalability, performance, and user-centric design.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-6 text-sm font-medium text-foreground/80">
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-primary" />
                                Lahore, Pakistan (Remote Ready)
                            </div>
                            <div className="flex items-center gap-2">
                                <Globe className="w-4 h-4 text-primary" />
                                Available for Relocation
                            </div>
                            <div className="flex items-center gap-2">
                                <BadgeCheck className="w-4 h-4 text-primary" />
                                B.S. Software Engineering (2027)
                            </div>
                        </div>
                    </div>

                    {/* Right: Personal Touch & Philosophy */}
                    <div className="relative">
                        <div className="relative z-10 grid gap-6">
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="p-6 rounded-2xl bg-muted/20 border border-white/5 backdrop-blur-sm"
                            >
                                <div className="flex items-center gap-3 mb-3 text-secondary">
                                    <Sparkles className="w-5 h-5" />
                                    <h3 className="font-semibold text-foreground">Currently Learning</h3>
                                </div>
                                <p className="text-muted-foreground">
                                    Exploring <span className="text-foreground">Advanced System Design</span> and <span className="text-foreground">Cloud Architecture</span> (AWS).
                                </p>
                            </motion.div>

                            <motion.div
                                whileHover={{ y: -5 }}
                                className="p-6 rounded-2xl bg-muted/20 border border-white/5 backdrop-blur-sm"
                            >
                                <h3 className="font-semibold text-foreground mb-3">Engineering Philosophy</h3>
                                <blockquote className="text-muted-foreground border-l-2 border-primary pl-4 italic">
                                    "Clean code is not just about readability; it's about maintainability and respect for the future developer (which is often me)."
                                </blockquote>
                            </motion.div>
                        </div>

                        {/* Visual Blob */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-primary/10 to-secondary/10 blur-[100px] -z-10" />
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
