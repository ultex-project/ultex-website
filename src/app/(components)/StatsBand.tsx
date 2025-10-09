// src/components/StatsBand.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type StatItem = {
    value: string | number;
    labelTop: string;
    bgImage?: string;
};

type Props = {
    stats: StatItem[];

    // Bande (contenant)
    bandClassName?: string;
    bandStyle?: React.CSSProperties;

    // Cartes
    defaultCardBg?: string;
    cardSize?: number;        // px (mobile)      - plus petit par défaut
    cardSizeMd?: number;      // px (>= md)       - plus petit par défaut
    frosted?: boolean;

    // Gaps compacts + effets hover
    tightGaps?: boolean;      // gaps proches
    cardHoverScale?: number;  // scale carte au hover
    cardHoverDurationMs?: number;
    cardHoverShadow?: boolean;

    // Effet groupe (scale de toute la grille au hover)
    groupHoverScale?: number;
    groupHoverDurationMs?: number;
};

export default function StatsBand({
                                      stats,
                                      bandClassName = 'mt-8 rounded-2xl p-6 md:p-8 bg-[#EFF3F6] border border-gray-200/70 relative overflow-hidden',
                                      bandStyle,
                                      defaultCardBg = '/images/stats-bg.svg',
                                      cardSize = 110,
                                      cardSizeMd = 130,
                                      frosted = false,

                                      tightGaps = true,
                                      cardHoverScale = 1.06,
                                      cardHoverDurationMs = 180,
                                      cardHoverShadow = true,

                                      groupHoverScale = 1.015,
                                      groupHoverDurationMs = 220,
                                  }: Props) {
    const [hovered, setHovered] = useState(false);

    return (
        <div className={bandClassName} style={bandStyle}>
            {/* Grille + léger scale du groupe au hover */}
            <div
                className="transition-transform will-change-transform origin-center"
                style={{
                    transform: hovered ? `scale(${groupHoverScale})` : 'scale(1)',
                    transitionDuration: `${groupHoverDurationMs}ms`,
                }}
            >
                <div
                    className={[
                        'grid grid-cols-2 md:grid-cols-4 place-items-center',
                        tightGaps ? 'gap-2 md:gap-3' : 'gap-5 md:gap-6',
                    ].join(' ')}
                    style={
                        {
                            ['--card' as any]: `${cardSize}px`,
                            ['--card-md' as any]: `${cardSizeMd}px`,
                            ['--card-scale' as any]: cardHoverScale,
                            ['--card-dur' as any]: `${cardHoverDurationMs}ms`,
                        } as React.CSSProperties
                    }
                >
                    {stats.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.45, delay: i * 0.05 }}
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                            className={[
                                'relative overflow-visible rounded-2xl border border-white/60 aspect-square group',
                                'w-[var(--card)] md:w-[var(--card-md)]',
                                'transform-gpu transition-transform ease-out',
                                'hover:scale-[var(--card-scale)]',
                                cardHoverShadow
                                    ? 'shadow-lg hover:shadow-2xl'
                                    : 'shadow-sm hover:shadow-md',
                                // z-index pour passer au-dessus des voisines pendant l’agrandissement
                                'z-0 hover:z-10',
                            ].join(' ')}
                            style={{ transitionDuration: 'var(--card-dur)' }}
                        >
                            {/* BG image */}
                            <Image
                                src={s.bgImage ?? defaultCardBg}
                                alt=""
                                fill
                                priority={i < 2}
                                className="object-cover rounded-2xl"
                            />

                            {/* (option) voile verre dépoli */}
                            {frosted && (
                                <div className="absolute inset-0 bg-white/70 backdrop-blur-md rounded-2xl" />
                            )}

                            {/* Contenu centré */}
                            <div className="absolute inset-0 z-10 p-3 md:p-4 flex flex-col items-center justify-center text-center">
                                <div className="text-2xl md:text-3xl font-extrabold text-gray-900 font-funnel-display">
                                    {s.value}
                                </div>
                                <div className="mt-1 text-xs md:text-sm text-gray-700 font-medium">
                                    {s.labelTop}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* petit motif décoratif (facultatif) */}
            <div
                className="pointer-events-none absolute right-2 bottom-2 w-40 md:w-48 h-20 md:h-24 rounded-xl"
                style={{
                    background:
                        'radial-gradient(circle at 2px 2px, rgba(148,163,184,.35) 1px, transparent 1.5px)',
                    backgroundSize: '12px 12px',
                }}
            />
        </div>
    );
}
