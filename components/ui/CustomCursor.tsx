"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false);
    const [isPointer, setIsPointer] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Spring configuration for the trailing ring
    const springConfig = { damping: 25, stiffness: 400 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);

            // Only show cursor after first movement to avoid initial flash
            if (!isVisible) setIsVisible(true);
        };

        const updateCursorType = () => {
            const target = document.elementFromPoint(cursorX.get(), cursorY.get());
            if (target) {
                const computedStyle = window.getComputedStyle(target);
                setIsPointer(computedStyle.cursor === 'pointer' || target.tagName === 'A' || target.tagName === 'BUTTON');
            }
        };

        // Check for clickables more efficiently or use event delegation if needed in future
        // For now, let's use global mouseover/out to detect pointers
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isClickable =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                window.getComputedStyle(target).cursor === 'pointer';

            setIsPointer(!!isClickable);
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [cursorX, cursorY, isVisible]);

    // Hide on mobile/touch devices via CSS media query helper or simple logic
    // (This is a simplified check; reliable reduced-motion/touch detection usually done via CSS)

    if (!isVisible) return null;

    return (
        <div className="hidden lg:block pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
            {/* Inner Dot - follows directly */}
            <motion.div
                className="absolute top-0 left-0 w-2 h-2 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
                style={{
                    x: cursorX,
                    y: cursorY,
                }}
            />

            {/* Outer Ring - springs/trails */}
            <motion.div
                className="absolute top-0 left-0 w-8 h-8 border border-primary/50 rounded-full -translate-x-1/2 -translate-y-1/2 mix-blend-difference box-border"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                }}
                animate={{
                    scale: isPointer ? 1.5 : 1,
                    opacity: isPointer ? 0.8 : 0.4,
                    backgroundColor: isPointer ? "rgba(var(--color-primary), 0.1)" : "transparent"
                }}
            />
        </div>
    );
}
