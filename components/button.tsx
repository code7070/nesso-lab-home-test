import { ComponentProps } from "react";

type Props = ComponentProps<"button"> & {
  variant?: "outline" | "shade" | "icon-round";
};

const basicClassName =
  "rounded-full border py-3 px-6 transition-all duration-250";
const variantStyles = {
  outline: `${basicClassName} text-black border-primary hover:bg-primary hover:text-white`,
  shade: `${basicClassName} bg-gray-light hover:bg-gray-dark`,
  "icon-round": "text-black border-primary hover:bg-primary hover:text-white",
};

export default function Button({
  children,
  variant = "outline",
  className,
  ...props
}: Props) {
  const baseClassName = variantStyles[variant];
  const combinedClassName = className
    ? `${baseClassName} ${className}`
    : baseClassName;

  return (
    <button
      type={props.type || "button"}
      {...props}
      className={combinedClassName}
    >
      {children}
    </button>
  );
}
