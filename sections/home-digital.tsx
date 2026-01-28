"use client";

import HeaderSection from "@/components/HeaderSection";
import HomeDigitalVisual from "./home-digital-visual";
import { useSeen } from "@/utils/useSeen";
import DigitalWordingDisplay from "@/components/DigitalWordingDisplay";

export default function HomeDigital() {
  const { ref, isSeen } = useSeen({ triggerOnce: true });
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
    <section id="workMethod" className="bg-white py-[60px] md:py-[120px]">
      <div
        className="max-w-7xl mx-auto px-4 flex flex-col gap-[72px]"
        ref={ref}
      >
        <HeaderSection
          title="La trasformazione digitale in azione"
          description="Dai processi manuali a quelli automatizzati: esempi concreti di come aiutiamo i nostri clienti a semplificare il lavoro quotidiano, ridurre gli errori e ottenere risultati misurabili."
        />
        <div className="grid md:grid-cols-[1fr_minmax(0,480px)_1fr] gap-10">
          <div className="order-2 md:order-1 flex flex-col gap-10 md:gap-[72px] justify-center">
            <DigitalWordingDisplay
              title={wordings.integration.title}
              description={wordings.integration.description}
              className={isSeen ? "scale-100 delay-300" : "scale-75 opacity-0"}
            />
            <DigitalWordingDisplay
              title={wordings.automation.title}
              description={wordings.automation.description}
              className={isSeen ? "scale-100 delay-600" : "scale-75 opacity-0"}
            />
            <div className="md:hidden">
              <DigitalWordingDisplay
                title={wordings.software.title}
                description={wordings.software.description}
                className={
                  isSeen ? "scale-100 delay-[900ms]" : "scale-75 opacity-0"
                }
              />
            </div>
          </div>
          <div className="order-1 md:order-2 flex flex-col justify-center w-full">
            <HomeDigitalVisual isSeen={isSeen} />
          </div>
          <div className="hidden md:block flex flex-col gap-10 md:gap-[72px] justify-center">
            <DigitalWordingDisplay
              title={wordings.software.title}
              description={wordings.software.description}
              className={
                isSeen ? "scale-100 delay-[900ms]" : "scale-75 opacity-0"
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
