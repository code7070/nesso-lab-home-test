"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function HeaderNavigation() {
  const t = useTranslations("navigation");
  const [activeSection, setActiveSection] = useState("home");

  const navigationMap = [
    { name: t("home"), url: "#home" },
    { name: t("service"), url: "#service" },
    { name: t("sector"), url: "#sector" },
    { name: t("workMethod"), url: "#workMethod" },
    { name: t("whoUs"), url: "#whoUs" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px", // Section aktif ketika di tengah viewport
      },
    );

    // Observe semua section
    navigationMap.forEach((item) => {
      const sectionId = item.url.replace("#", "");
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <ul className="flex items-center justify-center gap-[54px] ">
      {navigationMap.map((item, index) => {
        const sectionId = item.url.replace("#", "");
        const isActive = activeSection === sectionId;

        return (
          <li
            key={`${item.url}-${index}`}
            className="flex items-center gap-1.5"
          >
            <div
              key={sectionId}
              className={`h-6 ${isActive ? "w-6" : "w-0"} flex items-center justify-center transition-all`}
            >
              {isActive && (
                <div className="size-1.5 rounded-full bg-black pop-out-bounce" />
              )}
            </div>
            <Link
              href={item.url}
              className={`font-secondary transition-colors ${isActive ? "text-black" : "text-gray"} hover:text-primary font-normal`}
              onClick={() => setActiveSection(item.url.replace("#", ""))}
            >
              {item.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
