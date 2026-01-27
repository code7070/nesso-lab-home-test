"use client";

import { useSeen } from "@/utils/useSeen";
import { ReactNode } from "react";

export default function HeaderStripe({
  children,
  tag = "div",
}: {
  children: ReactNode;
  tag?: "div" | "h2";
}) {
  const { isSeen, ref } = useSeen({ triggerOnce: true });

  return (
    <h2 className="text-[2.25rem] font-bold relative" ref={ref}>
      {children}
      <div
        className={`bg-primary h-1.5 transition-all duration-500 ${isSeen ? "w-[169px] delay-200" : "w-0"} absolute left-0 bottom-1.5`}
      />
    </h2>
  );
}
