// src/components/Header.tsx
'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: "Accueil", href: "/", active: true },
        { name: "À Propos", href: "/about" },
        { name: "Solutions", href: "/solutions" },
        { name: "Événements", href: "/events" },
        { name: "Ressources", href: "/resources" },
    ];

    return (
        <header className="relative z-50 ">
            {/* Top Navigation Bar */}
            <div className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <Image
                            src="/images/logo.svg"
                            alt="ULTEX Logo"
                            width={120}
                            height={30}
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`text-sm font-medium transition-colors duration-300 ${
                                    item.active
                                        ? "text-yellow-400"
                                        : "text-white hover:text-yellow-300"
                                } font-funnel-display`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Contact Button */}
                    <Link
                        href="#contact"
                        className="hidden md:block bg-transparent border border-white text-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 font-funnel-display"
                    >
                        CONTACT
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden flex flex-col space-y-1 p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span className={`w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-white transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: isMenuOpen ? "auto" : 0, opacity: isMenuOpen ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden bg-black/95 overflow-hidden"
            >
                <div className="container mx-auto px-6 py-4 space-y-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`block text-sm font-medium py-2 transition-colors font-funnel-display ${
                                item.active
                                    ? "text-yellow-400"
                                    : "text-white hover:text-yellow-300"
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className="block w-full text-center bg-white text-black px-6 py-2 rounded-full font-medium transition-all font-funnel-display"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        CONTACT
                    </Link>
                </div>
            </motion.div>
        </header>
    );
}