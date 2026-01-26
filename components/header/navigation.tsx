"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "../button";
import LanguageSwitcher from "./language-switcher";

export default function HeaderNavigation() {
  const t = useTranslations("navigation");
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      },
    );

    // Observe semua section berdasarkan ID yang sudah fix
    const sectionIds = ["home", "service", "sector", "workMethod", "whoUs"];
    sectionIds.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleNavigationClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false); // Close menu on navigation
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Button
        className="lg:hidden relative z-[60]"
        variant="outline"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 5h16M4 12h16M4 19h16" />
          </svg>
        )}
      </Button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 h-screen bg-white shadow-lg transition-transform duration-300 ease-in-out lg:hidden z-50 ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-4 py-6 h-full flex flex-col justify-center">
          <ul className="flex flex-col gap-6 items-end">
            {navigationMap.map((item, index) => {
              const sectionId = item.url.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <li
                  key={`${item.url}-${index}`}
                  className="flex items-center gap-1.5"
                >
                  <div
                    className={`h-6 ${isActive ? "w-6" : "w-0"} flex items-center justify-center transition-all`}
                  >
                    {isActive && (
                      <div className="size-1.5 rounded-full bg-black pop-out-bounce" />
                    )}
                  </div>
                  <Link
                    href={item.url}
                    onClick={() => handleNavigationClick(sectionId)}
                    className={`active:scale-95 active:duration-150 font-secondary transition-all ${isActive ? "text-black" : "text-gray"} hover:text-primary font-normal text-lg`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Contact Button and Language Switcher */}
          <div className="flex flex-col items-end gap-4 mt-8">
            <Button className="w-[141px]">{t("contact")}</Button>
            <div className="h-10" />
            <LanguageSwitcher />
          </div>
        </div>
      </div>
      <div className="flex items-center py-3 px-[31px] bg-gray-lighter rounded-full hidden lg:block">
        <ul className="flex items-center justify-center gap-[54px]">
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
                  onClick={() => handleNavigationClick(sectionId)}
                  className={`active:scale-95 active:duration-150 font-secondary transition-all ${isActive ? "text-black" : "text-gray"} hover:text-primary font-normal`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
