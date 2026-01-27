import Button from "@/components/button";
import { ArrowRight } from "@/components/icons/arrow-right";
import { BrandBokingLogo } from "@/components/icons/brand-boking-logo";
import { BrandIeaLogo } from "@/components/icons/brand-iea-logo";
import { BrandNisalaIo } from "@/components/icons/brand-nisala-io-logo";
import { BrandSamtivLogo } from "@/components/icons/brand-samtiv-logo";
import { BrandSlavicaLogo } from "@/components/icons/brand-slavica-logo";
import { BrandUnicaLogo } from "@/components/icons/brand-unica-logo";
import Image from "next/image";

export default function HomeCover() {
  return (
    <section
      id="home"
      className="h-dvh flex items-center justify-center  hero-cover"
    >
      <div className="h-[509px] w-full flex items-center max-w-7xl px-4 mx-auto">
        <div className="flex flex-col gap-[54px] w-2/3 ">
          <div className="flex flex-col items-start gap-8">
            <h1 className="hidden">Nesso Digitale Lab</h1>
            <div className="text-[85.78px]">
              <span className="font-extrabold">NESSO DIGITALE</span>
              <br />
              <span className="font-light">LAB</span>
            </div>
            <div className="w-full h-px bg-gray-light" />
            <Button>
              <div className="font-bold leading-[0.9em]">
                Prenota una Consulenza
              </div>
              <div className="size-6 flex items-center justify-center text-primary group-hover:text-white">
                <ArrowRight
                  size={12}
                  className="transition-all group-hover:translate-x-0.5 group-hover:-translate-y-1"
                />
              </div>
            </Button>
          </div>
          <div className="max-w-[360px] flex flex-col gap-6">
            <h2 className="text-[1.25rem] font-bold">
              Brand that works with us
            </h2>
            <div className="flex items-center flex-wrap gap-2.5">
              <Button variant="shade">
                <BrandNisalaIo />
              </Button>
              <Button variant="shade">
                <BrandSamtivLogo />
              </Button>
              <Button variant="shade">
                <BrandIeaLogo />
              </Button>
              <Button variant="shade">
                <BrandSlavicaLogo />
              </Button>
              <Button variant="shade">
                <BrandUnicaLogo />
              </Button>
              <Button variant="shade">
                <BrandBokingLogo />
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[5%] right-[5%] xl:bottom-[6%] xl:right-[3%]">
          <Image
            width={599}
            height={518}
            className="object-contain aspect-[599/518px]  circum-shown"
            alt="circum"
            src="/assets/circum.webp"
          />
        </div>
      </div>
    </section>
  );
}
