"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    image: string;
    demoUrl?: string;
    repoUrl?: string;
    index: number;
}

export default function ProjectCard({
    title,
    description,
    tags,
    image,
    demoUrl,
    repoUrl,
    index,
}: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative rounded-2xl bg-muted/20 border border-white/5 overflow-hidden hover:border-primary/20 transition-all duration-500"
        >
            {/* Image Container */}
            <div className="relative h-64 md:h-72 overflow-hidden">
                <div className="absolute inset-0 bg-background/20 group-hover:bg-background/0 transition-colors duration-500 z-10" />
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Overlay Links */}
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/60 backdrop-blur-sm gap-4">
                    {demoUrl && (
                        <a
                            href={demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform duration-200"
                            title="View Demo"
                        >
                            <ExternalLink size={20} />
                        </a>
                    )}
                    {repoUrl && (
                        <a
                            href={repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-foreground text-background hover:scale-110 transition-transform duration-200"
                            title="View Code"
                        >
                            <Github size={20} />
                        </a>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {title}
                    </h3>
                    {demoUrl && (
                        <a href={demoUrl} className="text-muted-foreground group-hover:text-primary transition-colors">
                            <ArrowUpRight size={20} />
                        </a>
                    )}
                </div>

                <p className="text-muted-foreground mb-6 line-clamp-3">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/10"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
