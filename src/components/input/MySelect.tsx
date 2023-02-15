import { useId } from "react";
import { SelectOption } from "../../types";

interface MySelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: Array<SelectOption>;
}

/**
 * A custom select component including a label, extending the default select element.
 * @param {MySelectProps} { options, label, ...props }
 */
export default function MySelect({ options, label, ...props }: MySelectProps) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="text-md pl-1.5 font-medium text-gray-700">
        {label}
      </label>
      <select
        {...props}
        id={id}
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
