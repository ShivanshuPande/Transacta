"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick : ()=> void ;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {children}
    </button>
  );
};
