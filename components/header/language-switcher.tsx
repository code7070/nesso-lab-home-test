"use client";

import { usePathname, useRouter } from "@/src/i18n/navigation";
import { useLocale } from "next-intl";
import { useState, useTransition } from "react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const languages = [
    { code: "en", label: "EN", flag: "🇬🇧" },
    { code: "it", label: "IT", flag: "🇮🇹" },
  ];

  const currentLanguage =
    languages.find((lang) => lang.code === currentLocale) || languages[0];

  const handleLanguageChange = (langCode: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: langCode });
    });
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-lighter hover:bg-gray-light transition-colors"
        aria-label="Switch language"
      >
        <span>{currentLanguage.flag}</span>
        <span className="font-secondary font-medium">
          {currentLanguage.label}
        </span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-light transition-colors ${
                lang.code === currentLocale ? "bg-gray-lighter" : ""
              }`}
            >
              <span>{lang.flag}</span>
              <span className="font-secondary font-medium">{lang.label}</span>
              {lang.code === currentLocale && (
                <svg
                  className="w-4 h-4 ml-auto text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
