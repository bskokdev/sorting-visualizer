/**
 * @fileoverview Types for the project
 */
export type Bar = {
  weight: number;
  color: string;
};

export type SelectOption = {
  value: string | number;
  label: string;
};

export interface SortingAlgorithmProps {
  bars: Array<Bar>;
  setBars: React.Dispatch<React.SetStateAction<Bar[]>>;
  speed: number;
}

export type SortingAlgorithmType =
  | "bubble"
  | "selection"
  | "insertion"
  | "merge"
  | "quick"
  | "heap"
  | "radix";
