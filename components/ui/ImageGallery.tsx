"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ImageGalleryProps {
    images: string[];
    title: string;
}

export default function ImageGallery({ images, title }: ImageGalleryProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const goToSlide = (index: number) => {
        setCurrentIndex((index + images.length) % images.length);
    };

    const nextSlide = () => {
        goToSlide(currentIndex + 1);
    };

    const prevSlide = () => {
        goToSlide(currentIndex - 1);
    };

    // Auto-scroll effect
    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    return (
        <div className="w-full">
            <div className="relative h-96 md:h-[500px] w-full rounded-2xl overflow-hidden bg-muted/20 border border-white/5">
                {/* Image Container */}
                <div className="relative w-full h-full">
                    {images.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{
                                opacity: index === currentIndex ? 1 : 0,
                                x: index === currentIndex ? 0 : 100,
                            }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={image}
                                alt={`${title} - Screen ${index + 1}`}
                                fill
                                className="object-contain md:object-cover"
                                priority={index === 0}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-primary/80 hover:bg-primary text-primary-foreground transition-colors duration-200"
                    aria-label="Previous image"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-primary/80 hover:bg-primary text-primary-foreground transition-colors duration-200"
                    aria-label="Next image"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>

                {/* Dot Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                index === currentIndex
                                    ? "bg-primary w-8"
                                    : "bg-white/30 hover:bg-white/50"
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Image Counter */}
            <div className="mt-4 text-center text-sm text-muted-foreground">
                Image {currentIndex + 1} of {images.length}
            </div>
        </div>
    );
}
