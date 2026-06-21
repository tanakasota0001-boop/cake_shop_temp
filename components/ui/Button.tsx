"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "accent" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-full font-medium tracking-[0.1em] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

    const variants = {
      primary:
        "bg-primary text-white hover:bg-primary/90 shadow-[0_4px_20px_rgba(178,130,92,0.35)] hover:shadow-[0_6px_28px_rgba(178,130,92,0.45)] active:scale-[0.97]",
      accent:
        "bg-accent text-white hover:bg-accent/90 shadow-[0_4px_20px_rgba(217,119,6,0.3)] hover:shadow-[0_6px_28px_rgba(217,119,6,0.4)] active:scale-[0.97]",
      outline:
        "border border-primary text-primary bg-transparent hover:bg-primary hover:text-white active:scale-[0.97]",
      ghost:
        "text-primary hover:bg-primary/8 active:scale-[0.97]",
    };

    const sizes = {
      sm: "px-5 py-2 text-xs",
      md: "px-7 py-2.5 text-sm",
      lg: "px-9 py-3.5 text-sm",
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
