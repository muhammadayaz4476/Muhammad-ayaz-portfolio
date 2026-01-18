"use client";

import { motion, HTMLMotionProps } from "framer-motion";

export default function Skeleton({ className = "", ...props }: HTMLMotionProps<"div">) {
    return (
        <motion.div
            initial={{ opacity: 0.5 }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            className={`bg-muted/50 rounded-md ${className}`}
            {...props}
        />
    );
}
