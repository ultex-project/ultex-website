"use client";

// src/components/Footer.tsx
import Image from "next/image";
import { useTranslations } from "next-intl";

import ContactBridgeCTA from "@/app/(components)/ContactBridgeCTA";
import { Link } from "@/i18n";

const navLinks = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "solutions", href: "/solutions" },
  { key: "events", href: "/events" },
  { key: "resources", href: "/resources" },
  { key: "contact", href: "/contact" },
] as const;

const serviceLocations = [
  { key: "casablanca", phone: "(+212) 522-862135" },
  { key: "marrakech", phone: "(+212) 674-755993" },
  { key: "tanger", phone: "(+212) 524-304462" },
  { key: "rabat", phone: "(+212) 774-004544" },
] as const;

export default function Footer() {
  const tNav = useTranslations("nav");
  const tFooter = useTranslations("footer");

  return (
    <footer className="relative overflow-hidden bg-[#11131A] w-full text-white pt-12 pb-6">
      {/* Centered background image */}
      <div className=" absolute inset-0 z-0 flex items-center justify-center">
        <Image
          src="/images/footer-bg.svg" // <-- your centered bg image
          alt=""
          width={900} // size you want (scales down on small screens)
          height={900}
          sizes="(min-width:1024px) 900px, 80vw"
          className="rotate-90 object-contain max-w-[50vw] md:max-w-[40vw]"
          priority={false}
        />
      </div>

      {/* All content above the background */}
      <div className="relative z-10">
        <ContactBridgeCTA />

        <div className="container mx-auto mt-[150px] px-6 xl:px-24">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/images/logo.svg"
                alt="ULTEX Logo"
                width={150}
                height={50}
              />
              <p className="mt-4 text-sm text-gray-400">
                {tFooter("intro")}
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">{tFooter("quickLinks")}</h4>
              <ul className="space-y-2 text-sm">
                {navLinks.map((item) => (
                  <li key={item.key}>
                    <Link href={item.href}>{tNav(item.key)}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">{tFooter("social")}</h4>
              <p className="text-sm text-gray-400">
                {tFooter("socialDescription")}
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">{tFooter("customerService")}</h4>
              <div className="space-y-2 text-sm">
                {serviceLocations.map((location) => (
                  <div key={location.key}>
                    {tFooter(`locations.${location.key}`)}
                    <br />
                    {location.phone}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-[200px] pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              {tFooter("rights")}
            </p>
            <p className="text-sm text-gray-400 mt-2 md:mt-0">
              {tFooter("madeBy")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
