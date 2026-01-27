import HeaderSection from "@/components/HeaderSection";
import HeaderStripe from "@/components/HeaderStripe";
import ServiceCard from "@/components/ServiceCard";

export default function HomeService() {
  const services = [
    {
      title: "Progetti su misura",
      description:
        "Progettiamo e sviluppiamo applicazioni web e gestionali personalizzate, costruite sulle reali esigenze del tuo business.",
    },
    {
      title: "Team on-demand",
      description:
        "Rafforza il tuo team con sviluppatori e DevOps esperti, pronti a integrarsi rapidamente nei tuoi processi.",
    },
  ];
  return (
    <section id="service" className="bg-white">
      <div className="max-w-7xl px-4 mx-auto py-[140px] flex flex-col gap-20">
        <HeaderSection
          title="I nostri servizi"
          description="Questi servizi sono progettati per aiutare i clienti a costruire e far crescere il proprio brand attraverso strategie creative e soluzioni digitali innovative."
        />
        <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {services.map((item, i) => (
            <ServiceCard key={`$item.title}-${i}`} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
