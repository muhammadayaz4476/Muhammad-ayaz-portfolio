"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    const text = "Full-Stack & Mobile Developer".split(" ");

    return (
        <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

            {/* Soft Animated Gradient Glow */}
            <motion.div
                animate={{
                    opacity: [0.4, 0.6, 0.4],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[100px] rounded-full -z-10 pointer-events-none"
            />

            <div className="absolute inset-0 -z-10 opacity-[0.03] pointer-events-none bg-[url('/noise.png')]" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-4xl mx-auto space-y-8"
            >
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-primary font-medium tracking-wide text-sm md:text-base uppercase"
                >
                    Hi, I am Muhammad Ayaz
                </motion.h2>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground text-balance overflow-hidden">
                    {text.map((word, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.3 + i * 0.1,
                                duration: 0.6,
                                ease: "easeOut"
                            }}
                            className="inline-block mr-2 md:mr-4 last:mr-0"
                        >
                            {word === "Mobile" || word === "Developer" ? (
                                <span className={i >= text.length - 2 ? "text-muted-foreground" : ""}>
                                    {word}
                                </span>
                            ) : (
                                word
                            )}
                        </motion.span>
                    ))}
                </h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                >
                    An enthusiastic Software Engineering student skilled in Next.js, Tailwind CSS, Strapi, and Flutter.
                    Building scalable web and mobile applications with a focus on seamless user experiences.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
                >
                    <motion.a
                        href="#projects"
                        whileHover={{ y: -5, boxShadow: "0 10px 30px -10px var(--color-primary)" }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-primary px-8 font-medium text-primary-foreground transition-all duration-300"
                    >
                        <span className="mr-2">View Work</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </motion.a>
                    <motion.a
                        href="#contact"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex h-12 items-center justify-center rounded-full px-8 font-medium text-foreground transition-colors hover:text-primary"
                    >
                        Contact Me
                    </motion.a>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-muted-foreground/30 to-transparent" />
            </motion.div>
        </section>
    );
}
