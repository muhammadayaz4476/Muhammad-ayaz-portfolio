"use client";

import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./ui/FadeIn";
import { ArrowRight, Code, Server, Smartphone, Zap, Eye, Terminal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useDeveloperMode } from "@/context/DeveloperModeContext";

const projects = [
    {
        id: "zee-sasta-store",
        title: "Zee-Sasta-Store",
        category: "Full-Stack E-Commerce",
        description: "A robust scalable e-commerce platform built with Next.js and Strapi. Features dynamic product routing, persistent shopping cart utilizing local storage strategies, and secure JWT-based user authentication.",
        tags: ["Next.js 15", "Tailwind CSS", "Strapi CMS", "Framer Motion"],
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2664&auto=format&fit=crop",
        metrics: {
            performance: "98/100 Lighthouse",
            users: "500+ Monthly Active",
            uptime: "99.9% SLI"
        },
        devDetails: {
            architecture: "Monorepo structure with decoupled frontend and headless CMS backend.",
            challenge: "Handling real-time inventory updates during high traffic.",
            solution: "Optimistic UI updates + Server Actions for efficient state mutation."
        }
    },
    {
        id: "mobile-store-app",
        title: "Mobile Store App",
        category: "Cross-Platform Mobile",
        description: "High-performance Flutter application with Material Design 3. Features complex animated product cards, custom navigation drawer, and seamless cart state management via BLoC pattern.",
        tags: ["Flutter", "Dart", "Material Design", "BLoC"],
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2674&auto=format&fit=crop",
        metrics: {
            performance: "60 FPS Animations",
            users: "1k+ Downloads",
            size: "< 15MB Bundle"
        },
        devDetails: {
            architecture: "Clean Architecture (Domain, Data, Presentation layers).",
            challenge: "Optimizing list rendering for 1000+ items.",
            solution: "Implemented lazy loading and cached network images."
        }
    },
    {
        id: "developer-portfolio",
        title: "Developer Portfolio",
        category: "Personal Brand",
        description: "Interactive portfolio showcasing technical skills and projects. Built with a focus on buttery smooth animations, accessibility, and high performance scores.",
        tags: ["Next.js", "Framer Motion", "Tailwind", "TypeScript"],
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2655&auto=format&fit=crop",
        metrics: {
            performance: "100/100 SEO",
            accessibility: "WCAG 2.1 AA",
            speed: "0.4s FCP"
        },
        devDetails: {
            architecture: "Component-based architecture with reusable UI primitives.",
            challenge: "Implementing complex scroll-based animations without layout thrashing.",
            solution: "Used Framer Motion properties that utilize hardware acceleration (transform/opacity)."
        }
    },
];

export default function Projects() {
    const { isDevMode } = useDeveloperMode();

    return (
        <section id="projects" className="py-24 relative">
            <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-30" />

            <div className="container mx-auto px-6">
                <FadeIn className="mb-20">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                                Featured <span className="text-primary">Work</span>
                            </h2>
                            <p className="text-muted-foreground text-lg">
                                A curated selection of projects demonstrating full-stack capabilities and mobile engineering excellence.
                            </p>
                        </div>
                        <AnimatePresence>
                            {isDevMode && (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary font-mono flex items-center gap-2"
                                >
                                    <Terminal className="w-4 h-4" />
                                    <span>DEV MODE ACTIVE: Viewing Architecture Notes</span>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <FadeIn key={project.id} delay={index * 0.1}>
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    className="group relative flex flex-col h-full bg-muted/10 border border-white/5 rounded-2xl overflow-hidden backdrop-blur-sm"
                                >
                                    {/* Image Container */}
                                    <div className="relative h-64 overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />

                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                                            <Link
                                                href={`/projects/${project.id}`}
                                                className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                                            >
                                                View Case Study {/* <ArrowRight className="ml-2 w-4 h-4" /> */}
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 p-6 flex flex-col">
                                        <div className="mb-4">
                                            <span className="text-xs font-medium text-primary mb-2 block">{project.category}</span>
                                            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                            <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                                                {project.description}
                                            </p>
                                        </div>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="px-2 py-1 text-xs rounded-md bg-white/5 text-muted-foreground border border-white/5">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="mt-auto">
                                            {/* Metrics Row */}
                                            <div className="grid grid-cols-3 gap-2 py-4 border-t border-white/5">
                                                {Object.entries(project.metrics).map(([key, value]) => (
                                                    <div key={key} className="text-center">
                                                        <div className="text-xs text-muted-foreground capitalize">{key}</div>
                                                        <div className="font-bold text-sm text-foreground">{value.split(" ")[0]}</div>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Dev Mode Content */}
                                            <AnimatePresence>
                                                {isDevMode && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="mt-4 pt-4 border-t border-dashed border-primary/30 text-sm font-mono text-muted-foreground bg-primary/5 p-4 rounded-lg">
                                                            <div className="mb-2">
                                                                <span className="text-primary font-bold">Architecture:</span> {project.devDetails.architecture}
                                                            </div>
                                                            <div className="mb-2">
                                                                <span className="text-primary font-bold">Challenge:</span> {project.devDetails.challenge}
                                                            </div>
                                                            <div>
                                                                <span className="text-primary font-bold">Solution:</span> {project.devDetails.solution}
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                </motion.div>
                            </FadeIn>
                        ))}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
