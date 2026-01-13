"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone } from "lucide-react";

export default function Contact() {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contact" className="py-24 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />

            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl mx-auto mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        Let's <span className="text-primary">Connect</span>
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                        I am currently seeking an internship or junior developer role to apply my skills in full-stack and mobile development.
                        Based in Lahore, Pakistan.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="mailto:muhammadayaz214476@gmail.com"
                            className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90"
                        >
                            <Mail className="mr-2 h-5 w-5" />
                            Email Me
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="tel:+923344214476"
                            className="inline-flex h-12 items-center justify-center rounded-full bg-muted px-8 font-medium text-foreground border border-white/10 hover:border-primary/50 transition-all"
                        >
                            <Phone className="mr-2 h-5 w-5" />
                            +92 334 421 4476
                        </motion.a>
                    </div>
                </motion.div>

                <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-muted-foreground text-sm">
                        © {currentYear} Muhammad Ayaz. All rights reserved.
                    </div>

                    <div className="flex items-center space-x-6">
                        <a
                            href="https://github.com/muhammadayaz4476"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                            title="GitHub"
                        >
                            <Github size={24} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/muhammad-ayaz-49bb54270/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                            title="LinkedIn"
                        >
                            <Linkedin size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
