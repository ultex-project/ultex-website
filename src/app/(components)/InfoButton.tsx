"use client";

import type { ComponentPropsWithoutRef } from "react";

import Image from "next/image";
import { useLocale } from "next-intl";

import { Link } from "@/i18n";

type InfoButtonBaseProps = {
  text?: string;
  className?: string;
};

type InfoButtonAsLinkProps = {
  href: string;
} & InfoButtonBaseProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "children">;

type InfoButtonAsButtonProps = InfoButtonBaseProps &
  Omit<ComponentPropsWithoutRef<"button">, "children"> & {
    href?: undefined;
  };

type InfoButtonProps = InfoButtonAsLinkProps | InfoButtonAsButtonProps;

export default function InfoButton(props: InfoButtonProps) {
  const { text = "More info", className, ...restProps } = props;
  const locale = useLocale();
  const isRtl = locale === "ar";

  const baseClassName = [
    "group relative inline-flex items-center justify-center gap-3 overflow-hidden",
    "border-2 border-[#0159A3] text-[#0159A3] font-semibold",
    "px-6 py-2 rounded-md uppercase tracking-wide",
    "transition-all duration-500 ease-in-out",
    isRtl ? "flex-row-reverse" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  const backgroundClassName = [
    "absolute inset-0 bg-[#0159A3]",
    "transform scale-x-0",
    isRtl ? "origin-right" : "origin-left",
    "transition-transform duration-500 ease-in-out",
    "group-hover:scale-x-100",
  ].join(" ");

  const arrowClassName = [
    "relative z-10 transition-all duration-500 ease-in-out",
    isRtl ? "rotate-180" : "",
    "group-hover:-translate-x-2 group-hover:opacity-0",
  ]
    .filter(Boolean)
    .join(" ");

  const textClassName =
    "relative z-10 transition-all duration-500 ease-in-out group-hover:text-white group-hover:-translate-x-2";

  const content = (
    <>
      <span className={backgroundClassName} />
      <Image
        src="/icons/arrow.svg"
        alt="arrow"
        width={16}
        height={16}
        className={arrowClassName}
      />
      <span className={textClassName}>{text}</span>
    </>
  );

  if ("href" in restProps && restProps.href) {
    const { href, ...linkProps } = restProps;

    return (
      <Link href={href} {...linkProps} className={baseClassName}>
        {content}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = restProps as InfoButtonAsButtonProps;

  return (
    <button type={type} {...buttonProps} className={baseClassName}>
      {content}
    </button>
  );
}
