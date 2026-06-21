import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  children: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", hoverEffect = true, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`bg-white rounded-2xl overflow-hidden border border-stone-100 shadow-sm transition-all duration-300 ${
          hoverEffect ? "hover:shadow-md hover:-translate-y-1" : ""
        } ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
export default Card;
