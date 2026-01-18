"use client";

import { motion } from "framer-motion";
import FadeIn from "./ui/FadeIn";
import { Github, Star, GitFork } from "lucide-react";
import Link from "next/link";

export default function GitHubSection() {
    return (
        <section className="py-24 bg-background border-t border-white/5">
            <div className="container mx-auto px-6 text-center">
                <FadeIn>
                    <div className="inline-block p-3 rounded-full bg-white/5 mb-6">
                        <Github className="w-8 h-8 text-foreground" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Code that Speaks</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
                        My code is open source and available for review. Check out my repositories to see my coding style, commit history, and documentation.
                    </p>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            href="https://github.com/muhammadayaz4476"
                            target="_blank"
                            className="inline-flex items-center px-8 py-4 rounded-full bg-foreground text-background font-bold text-lg hover:bg-foreground/90 transition-colors"
                        >
                            <Github className="w-5 h-5 mr-2" />
                            Visit GitHub Profile
                        </Link>
                    </motion.div>
                </FadeIn>
            </div>
        </section>
    );
}
