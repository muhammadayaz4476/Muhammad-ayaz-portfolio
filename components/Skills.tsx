"use client";

import { motion } from "framer-motion";
import FadeIn from "./ui/FadeIn";
import {
    Database,
    Layout,
    Smartphone,
    Terminal,
    Code2,
    Cpu,
    GitBranch,
    Server,
} from "lucide-react";

const skills = [
    {
        category: "Languages & Core",
        icon: <Terminal className="w-6 h-6" />,
        items: ["JavaScript (ES6+)", "Dart", "Python", "C++", "SQL", "HTML5/CSS3"],
        color: "text-blue-400",
        bg: "bg-blue-400/10",
        border: "hover:border-blue-400/50"
    },
    {
        category: "Frontend Engineering",
        icon: <Layout className="w-6 h-6" />,
        items: ["Next.js 15", "React 19", "Tailwind CSS", "Framer Motion", "ShadCN UI", "Redux Toolkit"],
        color: "text-teal-400",
        bg: "bg-teal-400/10",
        border: "hover:border-teal-400/50"
    },
    {
        category: "Mobile Development",
        icon: <Smartphone className="w-6 h-6" />,
        items: ["Flutter", "Dart", "Clean Architecture", "BLoC/Cubit", "Method Channels", "App Store Deploy"],
        color: "text-sky-400",
        bg: "bg-sky-400/10",
        border: "hover:border-sky-400/50"
    },
    {
        category: "Backend & Tools",
        icon: <Database className="w-6 h-6" />,
        items: ["Strapi CMS", "Node.js", "Firebase", "REST APIs", "Postman", "Git/GitHub Actions"],
        color: "text-purple-400",
        bg: "bg-purple-400/10",
        border: "hover:border-purple-400/50"
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 relative bg-background/50">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] pointer-events-none" />

            <div className="container mx-auto px-6 relative">
                <FadeIn className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                        Technical <span className="text-primary">Competence</span>
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        A robust arsenal of modern technologies enabling the creation of scalable, high-performance web and mobile applications.
                    </p>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {skills.map((skill, index) => (
                        <FadeIn key={skill.category} delay={index * 0.1}>
                            <motion.div
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                className={`p-8 rounded-2xl bg-muted/20 border border-white/5 backdrop-blur-sm transition-all duration-300 ${skill.border} hover:shadow-2xl hover:shadow-${skill.color}/10 group`}
                            >
                                <div className="flex items-start justify-between mb-6">
                                    <div className={`p-3 rounded-xl ${skill.bg} ${skill.color} ring-1 ring-inset ring-white/10`}>
                                        {skill.icon}
                                    </div>
                                    <Cpu className={`w-8 h-8 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${skill.color}`} />
                                </div>

                                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                                    {skill.category}
                                </h3>

                                <div className="flex flex-wrap gap-2">
                                    {skill.items.map((item) => (
                                        <div
                                            key={item}
                                            className="px-3 py-1.5 rounded-md bg-background/50 border border-white/5 text-sm text-muted-foreground group-hover:text-foreground group-hover:border-white/10 transition-colors"
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
