"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, Award } from "lucide-react";

interface ExperienceItemProps {
    title: string;
    subtitle: string;
    period: string;
    description: string;
    index: number;
}

function ExperienceItem({ title, subtitle, period, description, index }: ExperienceItemProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="relative pl-8 md:pl-12 py-6 border-l border-white/10 last:border-0"
        >
            <div className="absolute left-[-5px] top-8 w-2.5 h-2.5 rounded-full bg-primary" />
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-foreground">{title}</h3>
                <div className="flex items-center text-muted-foreground text-sm mt-1 sm:mt-0">
                    <Calendar className="w-4 h-4 mr-2" />
                    {period}
                </div>
            </div>
            <div className="text-primary font-medium mb-4">{subtitle}</div>
            <p className="text-muted-foreground leading-relaxed max-w-2xl">
                {description}
            </p>
        </motion.div>
    );
}

const education = [
    {
        title: "BS in Software Engineering",
        subtitle: "Superior University Gold Campus, Lahore",
        period: "2023 - 2027",
        description: "Currently pursuing a Bachelor's degree with a focus on core engineering principles and modern software development. CGPA: 3.0. Relevant coursework includes Data Structures, Algorithms, and Mobile Development.",
    },
];

const certifications = [
    {
        title: "Certified Ethical Hacker (CEH)",
        subtitle: "pFTP",
        period: "2024",
        description: "Gained knowledge in penetration testing and network security protocols.",
    },
    {
        title: "SQL Certificate",
        subtitle: "SoloLearn",
        period: "2024",
        description: "Validated proficiency in database management and complex SQL queries.",
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-24 md:py-32 bg-background/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-center">
                        Education & <span className="text-primary">Certifications</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
                    {/* Education */}
                    <div>
                        <div className="flex items-center mb-8">
                            <div className="p-3 bg-primary/10 rounded-lg text-primary mr-4">
                                <GraduationCap size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground">Education</h3>
                        </div>
                        <div className="border-l border-white/5 ml-3 space-y-0">
                            {education.map((edu, index) => (
                                <ExperienceItem key={index} {...edu} index={index} />
                            ))}
                        </div>
                    </div>

                    {/* Certifications */}
                    <div>
                        <div className="flex items-center mb-8">
                            <div className="p-3 bg-secondary/10 rounded-lg text-secondary mr-4">
                                <Award size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground">Certifications</h3>
                        </div>
                        <div className="border-l border-white/5 ml-3 space-y-0">
                            {certifications.map((cert, index) => (
                                <ExperienceItem key={index} {...cert} index={index + 3} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
