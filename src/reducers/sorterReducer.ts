import { speedOptions } from "../constants";
import { Bar, Sorter, SortingAlgorithmType } from "../types";
import { getMaxBarsForScreen } from "../utils";

export const INITIAL_STATE: Sorter = {
  algo: "bubble",
  bars: [],
  speed: speedOptions[1].value as number,
  isSorting: false,
  currInputSize: getMaxBarsForScreen(),
};

export interface SorterAction {
  type: SorterActionType;
  payload: any;
}

export type SorterActionType =
  | "SET_ALGO"
  | "SET_BARS"
  | "SET_IS_SORTING"
  | "HANDLE_INPUT_CHANGE";

export function sorterReducer(state: Sorter, action: SorterAction) {
  const { type, payload } = action;
  switch (type) {
    case "SET_ALGO":
      return { ...state, algo: payload as SortingAlgorithmType };
    case "SET_IS_SORTING":
      return { ...state, isSorting: payload as boolean };
    case "SET_BARS":
      return { ...state, bars: payload as Bar[] };
    case "HANDLE_INPUT_CHANGE":
      return {
        ...state,
        [payload.field]: payload.value,
      };
  }
  return state;
}
