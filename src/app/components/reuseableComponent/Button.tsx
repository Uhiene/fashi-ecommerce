import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, className = "", onClick }) => {
  return (
    <button
      className={`uppercase p-2 sm:p-4 px-4 sm:px-8 text-sm ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
