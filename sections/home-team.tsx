"use client";

import HeaderSection from "@/components/HeaderSection";
import TeamTextGroup from "@/components/TeamTextGroup";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HomeTeam() {
  const briefs = [
    {
      title: "Due servizi, un solo partner",
      description:
        "Sviluppiamo software su misura e forniamo sviluppatori e DevOps on-demand per rafforzare il tuo team.",
      image: "/assets/nesso-team_compressed.jpg",
    },
    {
      title: "Qualità da software house, flessibilità globale",
      description:
        "Un approccio ibrido che unisce standard da software house e una rete internazionale di talenti.",
      image: "/assets/nesso-team-2_compressed.jpg",
    },
    {
      title: "Focus totale sul tuo business",
      description:
        "Un referente locale e un team globale lavorano insieme per trasformare le esigenze in soluzioni.",
      image: "/assets/nesso-team-3_compressed.jpg",
    },
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const intr = setInterval(
      () => setActive((curr) => (curr + 1) % briefs.length),
      3000,
    );
    return () => clearInterval(intr);
  }, []);

  return (
    <section className="bg-gray-lighter">
      <div className="max-w-7xl mx-auto px-4 py-[42px] flex flex-col gap-8 justify-start">
        <HeaderSection title="Nesso Digitale" />
        <div className="w-full grid md:grid-cols-2 gap-9">
          <div className="relative max-h-[316px]">
            {briefs.map((b, i) => (
              <Image
                key={i}
                className={`object-cover size-full grayscale-100  absolute left-0 top-0 transition-all duration-500 ${active === i ? "opacity-100 scale-100 delay-500" : "opacity-0 scale-90"}`}
                alt="Nesso Lab Logo"
                src={b.image}
                fill
              />
            ))}
          </div>
          <div className="flex flex-col gap-5">
            {briefs.map((brief, index) => {
              return (
                <TeamTextGroup
                  key={index}
                  {...brief}
                  isActive={active === index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
