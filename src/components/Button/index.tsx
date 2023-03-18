import { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = ({ children, className = "", ...props }: Props) => {
  return (
    <button
      className={"border border-gray-800 rounded-lg py-2 px-6 text-xl opacity-90 " + className}
      {...props}
    >
      {children}
    </button>
  );
};
