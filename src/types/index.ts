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
  updateBars: (newBars: Bar[]) => void;
  speed: number;
  cleanup: (currBars: Bar[]) => Promise<void>;
}

export interface Sorter {
  algo: SortingAlgorithmType;
  bars: Bar[];
  speed: number;
  isSorting: boolean;
  currInputSize: number;
}

export type SortingAlgorithmType =
  | "bubble" // done
  | "selection"
  | "insertion"
  | "quick" // done
  | "heap"
  | "radix";
