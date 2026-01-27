import HomeCover from "@/sections/home-cover";
import HomeDigital from "@/sections/home-digital";
import HomeProject from "@/sections/home-project";
import HomeService from "@/sections/home-service";
import HomeTeam from "@/sections/home-team";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HomeContent />;
}

function HomeContent() {
  const t = useTranslations("home");

  return (
    <div>
      <HomeCover />
      <HomeTeam />
      <HomeService />
      <HomeProject />
      <HomeDigital />
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
    </div>
  );
}
