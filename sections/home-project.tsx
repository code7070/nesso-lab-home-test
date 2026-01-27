import HeaderSection from "@/components/HeaderSection";
import HomeProjectSlider from "./home-project-slider";

export default function HomeProject() {
  return (
    <section id="project" className="bg-gray-lightest py-11">
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-16">
        <HeaderSection
          title="Progetti digitali di cui siamo orgogliosi"
          description="Piattaforma e-commerce scalabile, progettata per offrire un’esperienza utente fluida e pagamenti sicuri."
        />
        <HomeProjectSlider />
      </div>
    </section>
  );
}
