"use client";

import { motion } from "framer-motion";
import FadeIn from "./ui/FadeIn";
import { PenTool, Code, TestTube, Rocket, CheckCircle2 } from "lucide-react";

const processSteps = [
    {
        id: 1,
        title: "Plan & Design",
        icon: <PenTool className="w-6 h-6" />,
        description: "Understanding requirements, sketching wireframes, and planning architecture."
    },
    {
        id: 2,
        title: "Development",
        icon: <Code className="w-6 h-6" />,
        description: "Writing clean, scalable code using modern frameworks and best practices."
    },
    {
        id: 3,
        title: "Testing & QA",
        icon: <TestTube className="w-6 h-6" />,
        description: " rigorous manual and automated testing to ensure bug-free performance."
    },
    {
        id: 4,
        title: "Deployment",
        icon: <Rocket className="w-6 h-6" />,
        description: "CI/CD pipelines, Vercel/Netlify hosting, and performance optimization."
    },
];

const tools = [
    { name: "VS Code", type: "IDE" },
    { name: "Figma", type: "Design" },
    { name: "Postman", type: "API Testing" },
    { name: "Git", type: "Version Control" },
    { name: "GitHub", type: "Collaboration" },
    { name: "Vercel", type: "Deployment" },
    { name: "Firebase", type: "Backend" },
    { name: "Android Studio", type: "Mobile" },
];

export default function Workflow() {
    return (
        <section className="py-24 bg-background border-t border-white/5">
            <div className="container mx-auto px-6">
                {/* Workflow Section */}
                <FadeIn className="mb-20">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                            How I <span className="text-primary">Build</span>
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            My product development lifecycle focuses on clarity, quality, and user-centricity.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="relative p-6 rounded-2xl bg-muted/10 border border-white/5 group hover:border-primary/20 transition-all"
                            >
                                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-muted border border-white/10 flex items-center justify-center text-sm font-bold text-muted-foreground">
                                    0{step.id}
                                </div>
                                <div className="mb-4 text-primary bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                                    {step.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                                <p className="text-sm text-muted-foreground">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </FadeIn>

                {/* Tools & Quality */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-24">
                    {/* Tool Stack */}
                    <FadeIn delay={0.2}>
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                            <Code className="text-primary w-6 h-6" /> Tools of Trade
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {tools.map((tool) => (
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    key={tool.name}
                                    className="p-4 rounded-xl bg-muted/20 border border-white/5 text-center hover:bg-muted/40 transition-colors"
                                >
                                    <div className="font-semibold text-sm">{tool.name}</div>
                                    <div className="text-xs text-muted-foreground mt-1">{tool.type}</div>
                                </motion.div>
                            ))}
                        </div>
                    </FadeIn>

                    {/* Quality Assurance */}
                    <FadeIn delay={0.4}>
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                            <CheckCircle2 className="text-green-400 w-6 h-6" /> Quality Assurance
                        </h3>
                        <div className="space-y-4">
                            <div className="p-4 rounded-xl bg-green-500/5 border border-green-500/10">
                                <h4 className="font-semibold text-green-400 mb-1">Manual & Automated Testing</h4>
                                <p className="text-sm text-muted-foreground">Rigorous testing of user flows, edge cases, and cross-browser compatibility.</p>
                            </div>
                            <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/10">
                                <h4 className="font-semibold text-blue-400 mb-1">Performance Optimization</h4>
                                <p className="text-sm text-muted-foreground">Ensuring high Lighthouse scores, fast load times, and smooth 60fps animations.</p>
                            </div>
                            <div className="p-4 rounded-xl bg-orange-500/5 border border-orange-500/10">
                                <h4 className="font-semibold text-orange-400 mb-1">Error Handling</h4>
                                <p className="text-sm text-muted-foreground">Graceful degradation and meaningful error messages for a better UX.</p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
