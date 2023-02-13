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
  bars: Bar[];
  setBars: React.Dispatch<React.SetStateAction<Bar[]>>;
  speed: number;
  cleanup: (currBars: Bar[]) => Promise<void>;
}

export type SortingAlgorithmType =
  | "bubble" // done
  | "selection"
  | "insertion"
  | "quick" // done
  | "heap"
  | "radix";
