'use client';
import Image from "next/image";

export default function InfoButton({ text }: { text: string }) {
    return (
        <button
            className="group relative overflow-hidden flex items-center justify-center gap-2
                 border border-[#0159A3] text-[#0159A3] font-medium px-6 py-2 rounded-md
                 transition-all duration-500 ease-in-out"
        >
            {/* --- Expanding Arrow Background --- */}
            <span className="absolute left-0 top-0 h-full bg-[#0159A3] clip-path-arrow
                   transition-all duration-500 ease-in-out
                   group-hover:w-full"
            />

            {/* --- Arrow Icon --- */}
            <Image
                src="/icons/arrow.svg"
                alt="arrow"
                width={18}
                height={18}
                className="absolute left-4 z-10 transition-all duration-500 ease-in-out
                   group-hover:scale-[7] group-hover:opacity-0"
            />

            {/* --- Button Text --- */}
            <span
                className="relative z-10 font-medium transition-all duration-500 ease-in-out
                   group-hover:text-white group-hover:font-semibold"
            >
        {text}
      </span>
        </button>
    );
}
