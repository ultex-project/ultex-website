// components/SectorCard.tsx
import Image from "next/image";

interface SectorCardProps {
  title: string;
  imgSrc: string;
}

export default function SectorCard({ title, imgSrc }: SectorCardProps) {
  return (
    <div className="relative  rounded-xl p-[2px]">
      <div className="relative rounded-xl overflow-hidden shadow-lg">
        {/* Image */}
        <div className="overflow-hidden rounded-t-xl">
          <Image
            src={imgSrc}
            alt={title}
            width={200}
            height={90}
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
