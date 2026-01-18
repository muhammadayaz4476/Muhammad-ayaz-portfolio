"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import FadeIn from "@/components/ui/FadeIn";
import ImageGallery from "@/components/ui/ImageGallery";
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
        fullDescription: "Zee-Sasta-Store is a modern e-commerce solution designed to handle high traffic and complex product data. The goal was to create a seamless shopping experience with instant page loads and real-time inventory management. The platform features an intuitive interface with product browsing, detailed item views with related products, advanced search capabilities, multiple payment methods, and real-time customer support via chatbot.",
        tags: ["Next.js 15", "Tailwind CSS", "Strapi CMS", "Framer Motion"],
        image: "/images/web images/home page.jpeg",
        screenshots: [
            "/images/web images/home page.jpeg",
            "/images/web images/categories section.jpeg",
            "/images/web images/products section.jpeg",
            "/images/web images/detailed item & related products.jpeg",
            "/images/web images/cart & payement methods.jpeg",
            "/images/web images/search result.jpeg",
            "/images/web images/for you section.jpeg",
            "/images/web images/signup & login page.jpeg",
            "/images/web images/real time Chatbot.jpeg"
        ],
        challenges: [
            "Optimizing image delivery for thousands of products across multiple categories.",
            "Implementing secure Stripe payment integration with multiple payment methods.",
            "Handling state management for a persistent shopping cart without a backend database for guest users.",
            "Building real-time search functionality with debouncing for optimal performance."
        ],
        stack: ["Next.js", "Strapi", "Tailwind", "PostgreSQL", "Stripe", "Socket.io"],
        features: [
            "Real-time Inventory Sync",
            "JWT Authentication",
            "Advanced Search & Filters",
            "Product Categories",
            "Detailed Item Pages with Related Products",
            "Shopping Cart Management",
            "Multiple Payment Methods",
            "Real-time Chatbot Support",
            "Order Tracking"
        ]
    },
    // Add placeholders for others to prevent errors if clicked
    "mobile-store-app": {
        title: "Mobile Store App",
        category: "Cross-Platform Mobile",
        description: "High-performance Flutter application with Material Design 3.",
        fullDescription: "A native-feel mobile application built with Flutter to provide an accessible shopping experience on Android and iOS. The app features a beautiful welcome screen, comprehensive product catalog, order management, and user profile sections.",
        tags: ["Flutter", "Dart", "Material Design", "BLoC"],
        image: "/images/welcome screens.png",
        screenshots: [
            "/images/welcome screens.png",
            "/images/home screens.png",
            "/images/products screen.png",
            "/images/orders and ratings sreen.png",
            "/images/profile and setting screens.png",
            "/images/admin screens.png"
        ],
        challenges: ["Efficient list rendering for thousands of products", "Seamless image caching and offline support", "Complex navigation patterns with nested stacks"],
        stack: ["Flutter", "Dart", "Firebase", "BLoC", "Material Design 3"],
        features: ["Welcome Onboarding", "Product Browsing", "Order Management", "User Ratings & Reviews", "Profile Settings", "Admin Dashboard", "Push Notifications"]
    },
    "developer-portfolio": {
        title: "Developer Portfolio",
        category: "Personal Brand",
        description: "Interactive portfolio showcasing technical skills and projects.",
        fullDescription: "A premium personal website designed to impress recruiters and showcase ability to build complex UI animations.",
        tags: ["Next.js", "Framer Motion", "Tailwind"],
        image: "/images/html& css portfolio.png",
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

                        {project.screenshots && project.screenshots.length > 0 && (
                            <FadeIn delay={0.1}>
                                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                    <Smartphone className="text-primary w-6 h-6" /> App Screenshots
                                </h2>
                                <ImageGallery images={project.screenshots} title={project.title} />
                            </FadeIn>
                        )}

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
