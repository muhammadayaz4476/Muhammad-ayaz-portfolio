"use client";

import { motion } from "framer-motion";
import {
    Database,
    Layout,
    Smartphone,
    Terminal
} from "lucide-react";

const skills = [
    {
        category: "Languages & Core",
        icon: <Terminal className="w-6 h-6" />,
        items: ["JavaScript", "Dart", "Python", "C++", "SQL", "HTML/CSS3"],
    },
    {
        category: "Frontend",
        icon: <Layout className="w-6 h-6" />,
        items: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "ShadCN UI"],
    },
    {
        category: "Mobile App Dev",
        icon: <Smartphone className="w-6 h-6" />,
        items: ["Flutter", "Dart", "Android Studio", "Responsive Material Design"],
    },
    {
        category: "Backend & Tools",
        icon: <Database className="w-6 h-6" />,
        items: ["Strapi (Headless CMS)", "Node.js (Basic)", "REST APIs", "Git/GitHub", "Postman", "Figma"],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 md:py-32 relative bg-background/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        Technical <span className="text-primary">Skills</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        A comprehensive toolset for building scalable cross-platform applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="p-6 rounded-2xl bg-muted/30 border border-white/5 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                                {skill.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-foreground">{skill.category}</h3>
                            <ul className="space-y-2">
                                {skill.items.map((item) => (
                                    <li key={item} className="flex items-center text-muted-foreground">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-2" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
