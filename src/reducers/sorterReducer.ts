import {speedOptions} from "../constants";
import {Bar, Sorter, SortingAlgorithmType} from "../types";
import {getMaxBarsForScreen} from "../utils";

/**
 * This file contains reducer for the sorter state and corresponding types
 */

export const INITIAL_STATE: Sorter = {
  algo: "bubble",
  bars: [],
  speed: speedOptions[1].value as number,
  isSorting: false,
  currInputSize: getMaxBarsForScreen(),
};

type SorterPayload =
  | SortingAlgorithmType
  | Bar[]
  | boolean
  | { field: string; value: string | number };

export interface SorterAction {
  type: SorterActionType;
  payload: SorterPayload;
}

export type SorterActionType =
  | "SET_ALGO"
  | "SET_BARS"
  | "SET_IS_SORTING"
  | "HANDLE_INPUT_CHANGE";

type UpdateSorterState = (state: Sorter, payload: any) => Sorter;

// reducer for the sorter state which takes the current state and an action and returns the new state based on the action type
export function sorterReducer(state: Sorter, action: SorterAction) {
  const { type, payload } = action;
  const actions: Record<SorterActionType, UpdateSorterState> = {
    SET_ALGO: (state, payload) => ({ ...state, algo: payload }),
    SET_BARS: (state, payload) => ({ ...state, bars: payload }),
    SET_IS_SORTING: (state, payload) => ({ ...state, isSorting: payload }),
    HANDLE_INPUT_CHANGE: (state, payload) => ({
      ...state,
      [payload.field]: payload.value,
    }),
  };
  return actions[type](state, payload);
}
