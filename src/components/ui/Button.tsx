import { ReactNode } from "react";
import Link from "next/link";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "outline" | "inverse" | "inverse-outline";
  className?: string;
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md px-5 py-3 text-base font-medium transition-colors";

  const variantStyles = {
    primary: "bg-primary text-background hover:bg-primary-hover",
    outline:
      "border border-primary text-primary hover:bg-primary hover:text-background",
       inverse: "bg-background text-primary hover:bg-card",
  "inverse-outline":
    "border border-background text-background hover:bg-background hover:text-primary",
  };

  return (
    <Link href={href} className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </Link>
  );
}