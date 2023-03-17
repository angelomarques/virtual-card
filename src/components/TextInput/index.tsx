import { forwardRef, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const TextInput = forwardRef<HTMLInputElement, Props>(function TextInput(
  { label, className = "", ...props }: Props,
  ref
) {
  return (
    <label className="flex border border-gray-300 rounded-lg overflow-hidden">
      <span className="p-3 bg-gray-200 w-52 text-center text-gray-500">
        {label}
      </span>
      <input
        className={"p-3 text-sm w-full outline-0 " + className}
        ref={ref}
        {...props}
      />
    </label>
  );
});
