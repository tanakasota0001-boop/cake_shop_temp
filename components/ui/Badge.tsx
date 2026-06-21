import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "accent" | "secondary";
  children: React.ReactNode;
}

export const Badge = ({
  className = "",
  variant = "primary",
  children,
  ...props
}: BadgeProps) => {
  const baseStyles = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wider";
  
  const variants = {
    primary: "bg-primary/10 text-primary border border-primary/20",
    accent: "bg-accent/10 text-accent border border-accent/20",
    secondary: "bg-stone-100 text-stone-600 border border-stone-200",
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </span>
  );
};

export default Badge;
