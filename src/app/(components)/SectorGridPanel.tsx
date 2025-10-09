// src/components/SectorGridPanel.tsx
'use client';

import Image from 'next/image';
import SectorCard from '@/app/(components)/SectorCard';
import React from 'react';

type Sector = { title: string; imgSrc: string };

type Props = {
    sectors: Sector[];
    bgImage: string;
    minHeight?: number;           // px (default 560)
    bottomSpace?: number;         // px padding-bottom (default 96)
    gradientBottom?: boolean;     // default true
    glowTopRight?: boolean;       // default true
    gridClassName?: string;       // default 'grid grid-cols-2 sm:grid-cols-3 gap-6'
    className?: string;           // extra classes
    priority?: boolean;           // Next/Image priority

    // NEW — hover zoom options
    hoverZoom?: boolean;          // enable/disable (default true)
    hoverScale?: number;          // e.g. 1.08 = +8% (default 1.08)
    hoverDurationMs?: number;     // transition duration (default 700)
};

export default function SectorGridPanel({
                                            sectors,
                                            bgImage,
                                            minHeight = 560,
                                            bottomSpace = 96,
                                            gradientBottom = true,
                                            glowTopRight = true,
                                            gridClassName = 'grid grid-cols-2 sm:grid-cols-3 gap-6',
                                            className = '',
                                            priority = false,

                                            hoverZoom = true,
                                            hoverScale = 1.08,
                                            hoverDurationMs = 700,
                                        }: Props) {
    return (
        <div
            className={`relative rounded-xl overflow-hidden group ${className}`}
            style={{ minHeight }}
        >
            {/* Background image with hover zoom */}
            <Image
                src={bgImage}
                alt=""
                fill
                priority={priority}
                className={`object-cover transform-gpu scale-100
          ${hoverZoom ? 'transition-transform ease-out will-change-transform origin-center motion-safe:group-hover:scale-[var(--bg-scale)]' : ''}`}
                style={{
                    // Tailwind accepte les valeurs arbitraires avec var()
                    ['--bg-scale' as any]: hoverScale,
                    transitionDuration: `${hoverDurationMs}ms`,
                }}
            />

            {/* FX layers (restent fixes pendant le zoom du BG) */}
            <div className="absolute inset-0 pointer-events-none">
                {glowTopRight && (
                    <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[#2fb0ff]/30 blur-3xl" />
                )}
                {gradientBottom && (
                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 to-transparent" />
                )}
            </div>

            {/* Content */}
            <div
                className="relative p-6 sm:p-8 lg:p-10"
                style={{ paddingBottom: bottomSpace }}
            >
                <div className={gridClassName}>
                    {sectors.map((s, i) => (
                        <SectorCard key={i} title={s.title} imgSrc={s.imgSrc} />
                    ))}
                </div>
            </div>
        </div>
    );
}
