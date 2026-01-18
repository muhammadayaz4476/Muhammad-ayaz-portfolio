"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import FadeIn from "@/components/ui/FadeIn";
import { ArrowLeft, CheckCircle2, Code, Cpu, Globe, Layout, Smartphone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// In a real app, you might fetch this data. For now, we replicate or import the data object.
// Duplicated for simplicity in this demo.
const projectsData = {
    "zee-sasta-store": {
        title: "Zee-Sasta-Store",
        category: "Full-Stack E-Commerce",
        description: "A robust scalable e-commerce platform built with Next.js and Strapi. Features dynamic product routing, persistent shopping cart utilizing local storage strategies, and secure JWT-based user authentication.",
        fullDescription: "Zee-Sasta-Store is a modern e-commerce solution designed to handle high traffic and complex product data. The goal was to create a seamless shopping experience with instant page loads and real-time inventory management.",
        tags: ["Next.js 15", "Tailwind CSS", "Strapi CMS", "Framer Motion"],
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2664&auto=format&fit=crop",
        challenges: [
            "Optimizing image delivery for thousands of products.",
            "Implementing secure stripe payment integration.",
            "Handling state management for a persistent shopping cart without a backend database for guest users."
        ],
        stack: ["Next.js", "Strapi", "Tailwind", "PostgreSQL", "Stripe"],
        features: [
            "Real-time Inventory Sync",
            "JWT Authentication",
            "Admin Dashboard",
            "Order Tracking"
        ]
    },
    // Add placeholders for others to prevent errors if clicked
    "mobile-store-app": {
        title: "Mobile Store App",
        category: "Cross-Platform Mobile",
        description: "High-performance Flutter application with Material Design 3.",
        fullDescription: "A native-feel mobile application built with Flutter to provide an accessible shopping experience on Android and iOS.",
        tags: ["Flutter", "Dart", "Material Design", "BLoC"],
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2674&auto=format&fit=crop",
        challenges: ["Efficient list rendering", "Offline mode support"],
        stack: ["Flutter", "Dart", "Firebase"],
        features: ["Push Notifications", "Offline Cart", "Biometric Login"]
    },
    "developer-portfolio": {
        title: "Developer Portfolio",
        category: "Personal Brand",
        description: "Interactive portfolio showcasing technical skills and projects.",
        fullDescription: "A premium personal website designed to impress recruiters and showcase ability to build complex UI animations.",
        tags: ["Next.js", "Framer Motion", "Tailwind"],
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2655&auto=format&fit=crop",
        challenges: ["Performance optimization", "Accessibility"],
        stack: ["Next.js", "React", "TypeScript"],
        features: ["Dev Mode", "Scroll Animations", "Dark Mode"]
    }
};

export default function ProjectPage() {
    const params = useParams();
    const id = params.id as string;
    const project = projectsData[id as keyof typeof projectsData];

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center text-muted-foreground">
                <Navbar />
                Project not found.
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Banner */}
            <div className="relative h-[50vh] w-full">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />

                <div className="absolute bottom-0 left-0 w-full p-6 pb-12">
                    <div className="container mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Link href="/#projects" className="inline-flex items-center text-primary mb-4 hover:underline">
                                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
                            </Link>
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">{project.title}</h1>
                            <div className="flex flex-wrap gap-3">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-white/10 rounded-full text-sm border border-white/10">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        <FadeIn>
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <Layout className="text-primary w-6 h-6" /> Overview
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {project.fullDescription}
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <Cpu className="text-primary w-6 h-6" /> Technical Challenges
                            </h2>
                            <ul className="space-y-4">
                                {project.challenges.map((challenge, i) => (
                                    <li key={i} className="flex items-start gap-3 bg-muted/10 p-4 rounded-xl border border-white/5">
                                        <div className="mt-1 w-2 h-2 rounded-full bg-red-400 shrink-0" />
                                        <span className="text-muted-foreground">{challenge}</span>
                                    </li>
                                ))}
                            </ul>
                        </FadeIn>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-8">
                        <FadeIn delay={0.3}>
                            <div className="p-6 rounded-2xl bg-muted/10 border border-white/10">
                                <h3 className="font-bold mb-6 flex items-center gap-2">
                                    <Code className="text-primary w-5 h-5" /> Tech Stack
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.stack.map(tech => (
                                        <span key={tech} className="px-3 py-1.5 bg-background border border-white/5 rounded-md text-sm text-muted-foreground">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.4}>
                            <div className="p-6 rounded-2xl bg-muted/10 border border-white/10">
                                <h3 className="font-bold mb-6 flex items-center gap-2">
                                    <Smartphone className="text-primary w-5 h-5" /> Key Features
                                </h3>
                                <ul className="space-y-3">
                                    {project.features.map(feature => (
                                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <CheckCircle2 className="w-4 h-4 text-green-400" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </main>
    );
}
