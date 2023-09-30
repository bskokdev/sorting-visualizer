import React, {useEffect, useReducer} from "react";
import {bubbleSort} from "../algorithms/bubbleSort";
import {heapSort} from "../algorithms/heapSort";
import {insertionSort} from "../algorithms/insertionSort";
import {quickSort} from "../algorithms/quickSort";
import {selectionSort} from "../algorithms/selectionSort";
import {INITIAL_STATE, sorterReducer} from "../reducers/sorterReducer";
import {Bar, SortingAlgorithm, SortingAlgorithmProps, SortingAlgorithmType,} from "../types";
import {getRandomNumber, setBarArrayColor} from "../utils";

/**
 * Custom hook to handle sorting logic
 * @returns {object} { sorter - current state, handleInputChange, sort, shuffle }
 */
export function useSorter() {
  const [state, dispatch] = useReducer(sorterReducer, INITIAL_STATE);

  // generate an array of bars on first render and when input size changes
  useEffect(() => {
    generateRandomBars();
  }, [state.currInputSize]);

  // generate bars with random weights
  function generateRandomBars(): void {
    if (state.isSorting) return;
    let bars: Array<Bar> = [];

    for (let i = 0; i < state.currInputSize; i++) {
      const weight = getRandomNumber(10, 100);
      bars = [...bars, { weight, color: "coral" }];
    }

    dispatch({ type: "SET_BARS", payload: bars });
  }

  // takes a field name and returns a function that updates the state with the value of the input
  function handleInputChange(field: string, numeric: boolean = false) {
    return (e: React.ChangeEvent<any>) => {
      let { value } = e.target;
      if (numeric) {
        value = Number(value);
      }
      dispatch({ type: "HANDLE_INPUT_CHANGE", payload: { field, value } });
    };
  }

  // calls the selected sorting algorithm with the current state
  async function sort() {
    if (state.isSorting) return;
    dispatch({ type: "SET_IS_SORTING", payload: true });

    // props to be passed to sorting algorithms
    const algoProps: SortingAlgorithmProps = {
      bars: state.bars,
      updateBars: (newBars: Bar[]) =>
        dispatch({ type: "SET_BARS", payload: newBars }),

      speed: state.speed,
      cleanup: (currBars: Bar[]) =>
        setBarArrayColor(currBars, "green", state.speed, () =>
          dispatch({ type: "SET_BARS", payload: currBars }),
        ),
    };

    // map sorting algorithms to their names and call the selected one
    const algos: Record<SortingAlgorithmType, SortingAlgorithm> = {
      bubble: (props) => bubbleSort(props),
      selection: (props) => selectionSort(props),
      insertion: (props) => insertionSort(props),
      quick: (props) => quickSort(props),
      heap: (props) => heapSort(props),
    };

    await algos[state.algo]({ ...algoProps });
    dispatch({ type: "SET_IS_SORTING", payload: false });
  }

  return {
    sorter: state,
    shuffle: generateRandomBars,
    handleInputChange,
    sort,
  };
}
