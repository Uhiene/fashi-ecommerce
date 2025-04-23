import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ children, className = "", onClick,   type = "button" }) => {
  return (
    <button
    type={type} 
      className={`uppercase p-2 sm:p-4 px-4 sm:px-8 text-sm ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
