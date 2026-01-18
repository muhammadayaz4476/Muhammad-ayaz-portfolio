"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
    children: ReactNode;
    delay?: number;
    className?: string;
    direction?: "up" | "down" | "left" | "right";
    fullWidth?: boolean;
}

export default function FadeIn({
    children,
    delay = 0,
    className = "",
    direction = "up",
    fullWidth = false
}: FadeInProps) {
    const shouldReduceMotion = useReducedMotion();

    const directions = {
        up: { y: 20, x: 0 },
        down: { y: -20, x: 0 },
        left: { x: 20, y: 0 },
        right: { x: -20, y: 0 },
    };

    const initial = shouldReduceMotion ? { opacity: 0 } : { opacity: 0, ...directions[direction] };
    const animate = shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, x: 0 };

    return (
        <motion.div
            initial={initial}
            whileInView={animate}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.6,
                delay: delay,
                ease: "easeOut"
            }}
            className={`${className} ${fullWidth ? "w-full" : ""}`}
        >
            {children}
        </motion.div>
    );
}
