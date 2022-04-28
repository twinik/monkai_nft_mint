import React from "react";

interface ButtonProps {
  onClick?: any;
  children: React.ReactNode;
  disabled?: boolean;
}

export default function Button({ onClick, children, disabled }: ButtonProps) {
  return (
    <div className="button-container">
      <button
        className="font-openSea bg-gray-300/95 w-full mt-2"
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}
