// src/components/HeroSection.tsx
'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Header from "@/app/(components)/Header";

export default function HeroSection() {
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => setIsLoaded(true), []);

    return (
        <section className="relative bg-black text-white overflow-hidden min-h-screen flex flex-col">
            <Header/>

            {/* Main content container */}
            <div
                className="container mx-auto px-6 xl:px-24 py-16 relative z-10
                   flex-1 flex flex-col lg:flex-row items-center lg:items-stretch gap-12"
            >
                {/* Left Text Content */}
                <div className="lg:w-1/2 space-y-6 lg:pr-8">
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8}}
                        className="space-y-4"
                    >
                        <h1 className="text-4xl md:text-5xl leading-tight font-funnel-display">
                            <span className="text-yellow-400 font-bold">ULTEx</span> - Your<br/>
                            <span className="text-blue-400">E-Logistics</span> gateway
                        </h1>
                        <p className="text-lg text-white max-w-md font-funnel-display">
                            L&apos;Expertise Logistique qui Traverse <br/> les Frontières
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, x: -50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{delay: 0.3, duration: 0.6}}
                        className="space-y-4"
                    >
                        <h3 className="text-sm uppercase tracking-wider text-white font-funnel-display">
                            CONTACT US
                        </h3>
                        <Link
                            href="/contact"
                            className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 px-6 py-3 rounded-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 font-funnel-display"
                        >
                            MORE INFO
                        </Link>
                    </motion.div>
                </div>

                {/* Right Container Image — bottom-right anchored */}
                <div className="lg:w-1/2 relative flex items-end justify-end">
                    <motion.div
                        initial={{scale: 0.9, opacity: 0}}
                        animate={{scale: 1, opacity: 1}}
                        transition={{delay: 0.5, duration: 0.8, type: "spring", stiffness: 100}}
                        className="relative -mb-16 lg:-mb-20"
                    >
                        <Image
                            src="/images/container-glow.svg"
                            alt="ULTEX Shipping Container with Glow Effect"
                            width={1400}
                            height={900}
                            priority
                            className="relative z-10 select-none pointer-events-none h-auto w-auto
                         max-h-[62vh]           /* large but contained in viewport */
                         max-w-[60vw] sm:max-w-[66vw] lg:max-w-[58vw] xl:max-w-[52vw]"
                        />
                    </motion.div>
                </div>
            </div>
            {/* Bottom trapezoid tab */}
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20">
                <div
                    className="
                              mx-auto
                              w-[min(35%,1100px)]
                              h-8
                              bg-white
                              rounded-t-[50px]
                              [clip-path:polygon(2%_100%,8%_18%,92%_18%,98%_100%)]
                            "
                />
            </div>

        </section>
    );
}
