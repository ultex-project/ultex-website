"use client";

import Image from "next/image";

type HoverArrowTextProps = {
  text: string;
  className?: string;
};

export default function HoverArrowText({
  text,
  className,
}: HoverArrowTextProps) {
  const wrapperClassName = [
    "group inline-flex items-center",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={wrapperClassName}>
      <span
        aria-hidden="true"
        className="flex w-0 overflow-hidden transition-all duration-200 ease-out group-hover:w-6"
      >
        <Image
          src="/icons/arrow-before.svg"
          alt=""
          width={20}
          height={20}
          className="min-w-[20px]"
        />
      </span>
      <span className="pl-0 transition-[padding,transform] font-bold duration-200 ease-out group-hover:pl-1 group-hover:translate-x-1">
        {text}
      </span>
    </span>
  );
}
