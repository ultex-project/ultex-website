"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Accueil", href: "/" },
    { name: "À Propos", href: "/about" },
    { name: "Solutions", href: "/solutions" },
    { name: "Événements", href: "/events" },
    { name: "Ressources", href: "/resources" },
  ];

  // Active when exact match, or when current path starts with the link (for sub-pages)
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const linkBase =
    "text-sm font-medium transition-colors duration-300 font-funnel-display relative";
  const activeCls =
    "text-yellow-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-yellow-400/80";
  const idleCls = "text-white hover:text-yellow-300";

  return (
    <header className="relative z-50 w-full">
      {/* Top bar */}
      <div className="container mx-auto px-6 xl:px-24 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo + Desktop nav */}
          <div className="flex items-center gap-8 lg:gap-20 flex-1 min-w-0">
            <Link href="/" className="flex items-center space-x-2 shrink-0">
              <Image
                src="/images/logo.svg"
                alt="ULTEX Logo"
                width={115}
                height={30}
                priority
                className="object-contain"
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 overflow-hidden">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`${linkBase} ${
                    isActive(item.href) ? activeCls : idleCls
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* CONTACT (desktop) */}
          <Link
            href="/contact"
            className="hidden lg:inline-flex whitespace-nowrap bg-transparent border border-white text-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 font-funnel-display"
            aria-current={pathname.startsWith("/contact") ? "page" : undefined}
          >
            CONTACT
          </Link>

          {/* Mobile menu button */}
          <button
            className="lg:hidden flex flex-col space-y-1 p-2"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span
              className={`w-6 h-0.5 bg-white transition-transform ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-opacity ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-transform ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isMenuOpen ? "auto" : 0,
          opacity: isMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="lg:hidden bg-black/95 overflow-hidden"
      >
        <div className="container mx-auto px-6 py-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`${linkBase} block py-2 ${
                isActive(item.href)
                  ? "text-yellow-400"
                  : "text-white hover:text-yellow-300"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block w-full text-center bg-white text-black px-6 py-2 rounded-full font-medium transition-all font-funnel-display"
            onClick={() => setIsMenuOpen(false)}
            aria-current={pathname.startsWith("/contact") ? "page" : undefined}
          >
            CONTACT
          </Link>
        </div>
      </motion.div>
    </header>
  );
}
