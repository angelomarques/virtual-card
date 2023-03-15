import { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = ({ children, className = "", ...props }: Props) => {
  return (
    <button
      className={"border border-gray-800 rounded-lg p-2 text-xl " + className}
      {...props}
    >
      {children}
    </button>
  );
};
