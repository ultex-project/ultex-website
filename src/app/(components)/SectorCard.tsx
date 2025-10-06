// components/SectorCard.tsx
import Image from "next/image";

interface SectorCardProps {
    title: string;
    imgSrc: string;
}

export default function SectorCard({ title, imgSrc }: SectorCardProps) {
    return (
        <div className="relative bg-gradient-to-b from-gray-900 to-black rounded-xl p-[2px] hover:scale-105 transition-transform duration-300">
            {/* Halo doré */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-yellow-500/40 via-transparent to-transparent blur-2xl opacity-70"></div>

            <div className="relative bg-black rounded-xl overflow-hidden shadow-lg">
                {/* Image */}
                <div className="overflow-hidden rounded-t-xl">
                    <Image
                        src={imgSrc}
                        alt={title}
                        width={400}
                        height={250}
                        className="rounded-t-xl object-cover transition-transform duration-500 hover:scale-105"
                    />
                </div>

                {/* Titre */}
                <div className="text-center py-4">
                    <h3 className="text-white text-lg font-semibold">{title}</h3>
                </div>
            </div>
        </div>
    );
}
