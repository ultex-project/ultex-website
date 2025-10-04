// src/components/ReputationCard.tsx
'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function ReputationCard() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 max-w-sm"
        >
            {/* Card Image */}
            <div className="relative h-64 w-full">
                <Image
                    src="/images/reputation.jpg" // handshake image
                    alt="Handshake representing solid reputation"
                    fill
                    className="object-cover"
                    priority
                />

                {/* Floating Icon Badge */}
                <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
                    <div className="w-8 h-8 flex items-center justify-center">
                        <Image
                            src="/icons/reputation-icon.png" // small badge icon (crescent + star)
                            alt="Reputation badge"
                            width={24}
                            height={24}
                            className="filter drop-shadow-sm"
                        />
                    </div>
                </div>
            </div>

            {/* Card Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 font-funnel-display">Réputation Solide</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                    Une réputation fondée sur des partenariats durables, des résultats concrets et une confiance mutuelle.
                </p>
            </div>
        </motion.div>
    );
}