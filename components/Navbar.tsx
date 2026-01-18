"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useDeveloperMode } from "@/context/DeveloperModeContext";

const navLinks = [
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const pathname = usePathname();
    const isHome = pathname === "/";
    const { isDevMode, toggleDevMode } = useDeveloperMode();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Simple scroll spy logic
            const sections = navLinks.map(link => link.href.substring(1));
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(`#${section}`);
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-nav py-4" : "bg-transparent py-6"
                    }`}
            >
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <Link href="/" className="text-2xl font-bold tracking-tighter text-foreground group">
                        <motion.div whileHover={{ scale: 1.05, rotate: -2 }} className="inline-block">
                            MA<span className="text-primary group-hover:text-secondary transition-colors">.</span>
                        </motion.div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {isHome && navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="relative text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 py-1"
                                onClick={() => setActiveSection(link.href)}
                            >
                                {link.name}
                                {activeSection === link.href && (
                                    <motion.div
                                        layoutId="activeSection"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </Link>
                        ))}

                        {/* Dev Mode Toggle */}
                        <div className="flex items-center space-x-2 border-l border-white/10 pl-6 ml-2">
                            <span className={`text-xs font-mono transition-colors ${isDevMode ? "text-primary" : "text-muted-foreground opacity-50"}`}>
                                DEV MODE
                            </span>
                            <button
                                onClick={toggleDevMode}
                                className={`w-10 h-5 rounded-full relative transition-colors duration-300 focus:outline-none ${isDevMode ? "bg-primary" : "bg-muted"}`}
                            >
                                <motion.div
                                    className="absolute top-1 w-3 h-3 bg-white rounded-full shadow-sm"
                                    animate={{ left: isDevMode ? "1.5rem" : "0.25rem" }}
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            </button>
                        </div>

                        <Link
                            href="#contact"
                            className="px-5 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-full hover:bg-primary/90 transition-colors duration-200"
                        >
                            Hire Me
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-foreground focus:outline-none"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md pt-24 px-6 md:hidden"
                    >
                        <div className="flex flex-col space-y-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-2xl font-semibold text-foreground hover:text-primary"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="#contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="inline-block px-5 py-3 text-center text-lg font-medium text-primary-foreground bg-primary rounded-full hover:bg-primary/90"
                            >
                                Hire Me
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
