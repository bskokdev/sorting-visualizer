import { SelectOption } from "../types";

export const algorithmOptions: Array<SelectOption> = [
  { value: "bubble", label: "Bubble sort" },
  { value: "insertion", label: "Insertion sort" },
  { value: "selection", label: "Selection sort" },
  { value: "merge", label: "Merge sort" },
  { value: "quick", label: "Quick sort" },
  { value: "heap", label: "Heap sort" },
  { value: "radix", label: "Radix sort" },
];

// values are in ms
export const speedOptions: Array<SelectOption> = [
  { value: 10, label: "Slow" },
  { value: 5, label: "Medium" },
  { value: 1, label: "Fast" },
];
