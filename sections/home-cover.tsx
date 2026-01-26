import Button from "@/components/button";
import { ArrowRight } from "@/components/icons/arrow-right";

export default function HomeCover() {
  return (
    <section
      id="home"
      className="h-dvh bg-white flex items-center justify-center"
    >
      <div className="h-[509px] w-full flex items-center max-w-7xl px-4 mx-auto">
        <div className="w-2/3 flex flex-col items-start gap-8">
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
              <ArrowRight size={12} />
            </div>
          </Button>
        </div>
        <div>Right</div>
      </div>
    </section>
  );
}
