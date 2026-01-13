"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
    {
        title: "Zee-Sasta-Store",
        description: "Full-stack e-commerce platform featuring dynamic product routing, persistent shopping cart, and secure user authentication. Managed via Strapi Headless CMS.",
        tags: ["Next.js 15", "Tailwind CSS", "Strapi CMS", "Framer Motion"],
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2664&auto=format&fit=crop", // Placeholder
        demoUrl: "#",
        repoUrl: "#",
    },
    {
        title: "Mobile Store App",
        description: "Cross-platform mobile e-commerce application built with Flutter. Features interactive product cards, navigation drawer, and seamless cart management.",
        tags: ["Flutter", "Dart", "Material Design", "State Management"],
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2674&auto=format&fit=crop", // Placeholder
        demoUrl: "#",
        repoUrl: "#",
    },
    {
        title: "Developer Portfolio",
        description: "Personal portfolio website designed to showcase projects and technical skills. Built with a focus on mobile-first design and clean responsiveness.",
        tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2655&auto=format&fit=crop", // Placeholder
        demoUrl: "#",
        repoUrl: "#",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 md:py-32 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        Featured <span className="text-primary">Projects</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Highlights of my recent work in full-stack web and mobile development.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} {...project} index={index} />
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a href="https://github.com/muhammadayaz4476" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors">
                        View All on GitHub <span className="ml-2">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
