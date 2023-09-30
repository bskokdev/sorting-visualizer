/**
 * @fileoverview Types for the project
 */
export interface Bar {
  weight: number;
  color: string;
}

export type SelectOption = {
  value: string | number;
  label: string;
};

type SortingCleanup = (currBars: Bar[]) => Promise<void>;
type UpdateBars = (newBars: Bar[]) => void;

export interface Sorter {
  algo: SortingAlgorithmType;
  bars: Bar[];
  speed: number;
  isSorting: boolean;
  currInputSize: number;
}

export type SortingAlgorithm = (
    props: SortingAlgorithmProps
) => Promise<void> | void | Bar[];

export type SortingAlgorithmProps = Pick<Sorter, "bars" | "speed"> & {
  updateBars: UpdateBars;
  cleanup: SortingCleanup;
};

export type SortingAlgorithmType =
    | "bubble"
    | "selection"
    | "insertion"
    | "quick"
    | "heap";
