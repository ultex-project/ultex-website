// src/components/HeroSection.tsx
'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Header from "@/app/(components)/Header";

export default function HeroSection() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <section className="relative bg-black text-white overflow-hidden">
            <Header/>
            {/* Background with subtle grid pattern */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-black to-black"></div>
                {/* Optional: Add subtle dot grid pattern */}
                <div className="absolute inset-0 opacity-20">
                    <div className="w-full h-full" style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
                        backgroundSize: '20px 20px'
                    }}></div>
                </div>
            </div>

            {/* Main content container */}
            <div className="container mx-auto px-6 py-20 relative z-10 flex flex-col lg:flex-row items-center gap-12">
                {/* Left Text Content */}
                <div className="lg:w-1/2 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-4"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight font-funnel-display">
                            <span className="text-yellow-400">ULTEx</span> - Your<br />
                            <span className="text-blue-400">E-Logistics</span> gateway
                        </h1>
                        <p className="text-lg text-gray-300 max-w-md font-funnel-display">
                            L'Expertise Logistique qui Traverse les Frontières
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="space-y-4"
                    >
                        <h3 className="text-sm uppercase tracking-wider text-gray-400 font-funnel-display">CONTACT US</h3>
                        <Link
                            href="#contact"
                            className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 px-6 py-3 rounded-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 font-funnel-display"
                        >
                            MORE INFO
                        </Link>
                    </motion.div>
                </div>

                {/* Right Container Image */}
                <div className="lg:w-1/2 relative">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8, type: "spring", stiffness: 100 }}
                        className="relative"
                    >
                        {/* Glowing Effect */}
                        <div className="absolute inset-0 bg-blue-500 rounded-lg blur-xl opacity-30 animate-pulse"></div>
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-20 bg-yellow-400 blur-sm"></div>

                        {/* Container Image */}
                        <Image
                            src="/images/container-glow.svg"
                            alt="ULTEX Shipping Container with Glow Effect"
                            width={600}
                            height={400}
                            priority
                            className="mx-auto relative z-10 drop-shadow-2xl"
                        />

                        {/* Overlay ULTEX Logo */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold opacity-70 pointer-events-none font-funnel-display">
                            <span className="block">ULTEx</span>
                            <span className="text-xs opacity-50">One way</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Curved Bottom Edge */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-16 fill-black">
                    <path d="M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,128C672,128,768,160,864,170.7C960,181,1056,171,1152,154.7C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>
        </section>
    );
}