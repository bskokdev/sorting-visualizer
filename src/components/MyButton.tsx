import React from "react";

interface MyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

/**
 * Custom implementation of a html button, extending the default button props
 * @param {MyButtonProps} { title, ...htmlButtonProps}
 */
export default function MyButton({ title, ...rest }: MyButtonProps) {
  return (
    <button
      {...rest}
      className="py-2 px-6 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-sky-600 text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-lg"
    >
      {title}
    </button>
  );
}
