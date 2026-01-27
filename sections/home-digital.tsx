import HeaderSection from "@/components/HeaderSection";
import { ReactNode } from "react";

function DigitalWordingDisplay({
  title,
  description,
}: {
  title: string;
  description: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="text-xl font-bold leading-6">{title}</div>
      <div className="text-gray-neutral leading-4">{description}</div>
    </div>
  );
}

export default function HomeDigital() {
  const wordings = {
    integration: {
      title: "Integrazione sito web e CRM",
      description:
        "Sincronizzazione automatica dei lead e tempi di risposta ridotti da ore a pochi minuti.",
    },
    automation: {
      title: "Automazione dei report di vendita mensili",
      description:
        "Tempo di reporting ridotto del 70%, con un risparmio di circa 40 ore uomo al mese.",
    },
    software: {
      title: "Gestionale leggero su misura",
      description:
        "Processi centralizzati e attività amministrative quotidiane ridotte del 50%.",
    },
  };
  return (
    <section id="digital" className="bg-white py-[120px]">
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-[72px]">
        <HeaderSection
          title="La trasformazione digitale in azione"
          description="Dai processi manuali a quelli automatizzati: esempi concreti di come aiutiamo i nostri clienti a semplificare il lavoro quotidiano, ridurre gli errori e ottenere risultati misurabili."
        />
        <div className="grid md:grid-cols-3 gap-10">
          <div className="flex flex-col gap-[72px] justify-center">
            <DigitalWordingDisplay
              title={wordings.integration.title}
              description={wordings.integration.description}
            />
            <DigitalWordingDisplay
              title={wordings.automation.title}
              description={wordings.automation.description}
            />
          </div>
          <div className="flex flex-col justify-center">Image</div>
          <div className="flex flex-col gap-[72px] justify-center">
            <DigitalWordingDisplay
              title={wordings.automation.title}
              description={wordings.automation.description}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
