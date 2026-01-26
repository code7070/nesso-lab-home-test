import { useTranslations } from "next-intl";
import HeaderNavigation from "./navigation";
import LanguageSwitcher from "./language-switcher";
import Button from "../button";
import { NessoDigitalLogo } from "../icons/nesso-digital-logo";

export default function Header() {
  const t = useTranslations("navigation");

  return (
    <header className="py-[33px] z-10 sticky top-0 bg-white">
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
        <div>
          <NessoDigitalLogo />
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center py-3 px-[31px] bg-gray-lighter rounded-full">
            <HeaderNavigation />
          </div>
          <LanguageSwitcher />
        </div>
        <div>
          <Button>{t("contact")}</Button>
        </div>
      </div>
    </header>
  );
}
