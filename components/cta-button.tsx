import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type CTAButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "light" | "outlineLight";
  href?: string;
  className?: string;
};

export function CTAButton({ children, variant = "primary", href, className = "", ...props }: CTAButtonProps) {
  const styles = variant === "primary" ? "bg-navy text-white hover:bg-slate-800" : variant === "secondary" ? "border border-navy bg-white text-navy hover:bg-navy hover:text-white" : variant === "light" ? "border border-white bg-white hover:bg-slate-100" : "border border-white bg-transparent hover:bg-white/10";
  const classes = `inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-base font-semibold leading-none transition-[color,background-color,border-color,transform,box-shadow] hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2 ${styles} ${className}`;
  const style = variant === "light" ? { color: "#1B3A63" } : variant === "outlineLight" ? { color: "#FFFFFF" } : undefined;

  if (href) return <Link href={href} className={classes} style={style}>{children}</Link>;
  return <button className={classes} style={style} {...props}>{children}</button>;
}
