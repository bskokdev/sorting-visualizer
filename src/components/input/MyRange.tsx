import { useId } from "react";

interface MyRangeProps extends React.HTMLAttributes<HTMLInputElement> {
  currSize: number;
  maxSize: number;
  label: string;
}

/**
 * Custom range input extending HTMLInputElement and adding label, currSize, and maxSize props
 * @param {MyRangeProps} { currSize, maxSize, label, html props}
 */
export default function MyRange({
  currSize,
  maxSize,
  label,
  ...props
}: MyRangeProps) {
  const id = useId();
  return (
    <div>
      <label
        htmlFor={id}
        className="flex flex-col text-center text-md pl-1.5 font-medium text-gray-700"
      >
        {label}: {currSize}
      </label>
      <input
        {...props}
        id={id}
        type="range"
        value={currSize}
        min="1"
        max={maxSize}
        className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
      />
    </div>
  );
}
