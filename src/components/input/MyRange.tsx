interface MyRangeProps extends React.HTMLAttributes<HTMLInputElement> {
  currSize: number;
  maxSize: number;
  label: string;
}

export default function MyRange({
  currSize,
  maxSize,
  label,
  ...props
}: MyRangeProps) {
  return (
    <div>
      <label
        htmlFor="range-input"
        className="flex flex-col text-center text-md pl-1.5 font-medium text-gray-700"
      >
        {label}: {currSize}
      </label>
      <input
        {...props}
        id="range-input"
        type="range"
        value={currSize}
        min="1"
        max={maxSize}
        className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
      />
    </div>
  );
}
