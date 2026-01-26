import { useTranslations } from "next-intl";
import HeaderNavigation from "./navigation";
import LanguageSwitcher from "./language-switcher";
import Button from "../button";
import { NessoDigitalLogo } from "../icons/nesso-digital-logo";
import { Link } from "@/src/i18n/navigation";

export default function Header() {
  const t = useTranslations("navigation");

  return (
    <header className="py-[33px] z-10 fixed left-0 top-0 ring-0 w-full bg-white">
      <div className="flex justify-between items-center w-full max-w-7xl px-4 mx-auto">
        <Link href="/#home">
          <NessoDigitalLogo />
        </Link>
        <div className="flex items-center gap-4">
          <HeaderNavigation />
          <div className="hidden lg:block">
            <LanguageSwitcher />
          </div>
        </div>
        <div className="hidden lg:block">
          <Button className="w-[141px]">{t("contact")}</Button>
        </div>
      </div>
    </header>
  );
}
