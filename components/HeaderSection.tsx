import { ReactNode } from "react";
import HeaderStripe from "./HeaderStripe";

interface Props {
  title: string;
  description?: ReactNode;
}

export default function HeaderSection({ title, description }: Props) {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:justify-between md:items-start">
      <HeaderStripe>{title}</HeaderStripe>
      <div className="md:max-w-[340px] leading-[1.5rem]">{description}</div>
    </div>
  );
}
