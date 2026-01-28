import Button from "../button";
import { ArrowRight } from "../icons/arrow-right";

export default function FooterContact() {
  return (
    <div className="md:px-5 md:py-8 overflow-hidden border border-primary rounded-4xl bg-white relative">
      <div className="relative rounded-3xl bg-gray-lighter p-10 md:p-20  flex flex-col items-center justify-center">
        <div className="flex flex-col justify-center gap-1 max-w-[712px]">
          <div className="flex flex-col gap-3">
            <div className="text-center">
              Attualmente disponibili per nuovi progetti
            </div>
            <div className="text-center text-3xl md:text-[2.625em] text-primary leading-[1em] tracking-[-0.03em]">
              Interessato a collaborare con noi?
            </div>
          </div>
          <div className="text-sm md:text-base font-light text-gray-dark/60 text-center">
            Aiutiamo aziende e team a progettare e sviluppare soluzioni digitali
            efficaci. Raccontaci il tuo progetto e scopriamo insieme come
            possiamo trasformare le tue idee in risultati concreti.
          </div>
          <div className="mt-8 flex justify-center">
            <Button className="max-h-[42px]">
              <div className="leading-[0.9em]">Prenota una Consulenza</div>
              <div className="size-3 flex items-center justify-center text-primary group-hover:text-white">
                <ArrowRight
                  size={8}
                  className="transition-all group-hover:translate-x-0.5 group-hover:-translate-y-1"
                />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
