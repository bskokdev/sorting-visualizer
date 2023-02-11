import { SelectOption } from "../types";

interface MySelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: Array<SelectOption>;
}

export default function MySelect({ options, label, ...props }: MySelectProps) {
  return (
    <div>
      <label
        htmlFor={`select-${label}`}
        className="text-md pl-1.5 font-medium text-gray-700"
      >
        {label}
      </label>
      <select
        {...props}
        id={`select-${label}`}
        className="mt-1 py-3 px-4 block w-full border-sky-600 border-2 rounded-xl text-md hover:cursor-pointer"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
