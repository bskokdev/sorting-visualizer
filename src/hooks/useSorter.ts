import { useEffect, useState } from "react";
import { bubbleSort } from "../algorithms/bubbleSort";
import { heapSort } from "../algorithms/heapSort";
import { insertionSort } from "../algorithms/insertionSort";
import { quickSort } from "../algorithms/quickSort";
import { radixSort } from "../algorithms/radixSort";
import { selectionSort } from "../algorithms/selectionSort";
import { speedOptions } from "../constants";
import { Bar, SortingAlgorithmType } from "../types";
import { getRandomNumber, setBarArrayColor } from "../utils";
import { SortingAlgorithmProps } from "./../types/index";

/**
 * Custom hook to handle sorting logic
 * functions: shuffle, changeAlgorithm, changeSpeed, sort
 * states: bars, isSorting
 */
export function useSorter(defaultInputSize: number) {
  const [algo, setAlgo] = useState<SortingAlgorithmType>("bubble");
  const [speed, setSpeed] = useState<number>(speedOptions[1].value as number); // in ms
  const [bars, setBars] = useState<Bar[]>([]);
  const [currInputSize, setCurrInputSize] = useState<number>(defaultInputSize);
  const [isSorting, setIsSorting] = useState<boolean>(false);

  // generate array of bars on first render and when input size changes
  useEffect(() => {
    generateRandomBars();
  }, [currInputSize]);

  // generate bars with random weights
  function generateRandomBars(): void {
    if (isSorting) return;
    let bars: Array<Bar> = [];
    for (let i = 0; i < currInputSize; i++) {
      const weight = getRandomNumber(10, 100);
      bars = [...bars, { weight, color: "coral" }];
    }
    setBars(bars);
  }

  function changeAlgorithm(algorithm: SortingAlgorithmType): void {
    setAlgo(algorithm);
  }

  function changeSpeed(speed: number): void {
    setSpeed(speed);
  }

  function changeInputSize(size: number): void {
    setCurrInputSize(size);
  }

  async function sort() {
    if (isSorting) return;
    setIsSorting(true);
    // props to be passed to sorting algorithms
    const algoProps: SortingAlgorithmProps = {
      bars,
      setBars,
      speed,
      cleanup: (currBars: Bar[]) =>
        setBarArrayColor(currBars, "green", speed, setBars),
    };
    // map sorting algorithms to their names and call the selected one
    const algos = {
      bubble: () => bubbleSort({ ...algoProps }),
      selection: () => selectionSort({ ...algoProps }),
      insertion: () => insertionSort({ ...algoProps }),
      quick: () => quickSort({ ...algoProps }),
      heap: () => heapSort({ ...algoProps }),
      radix: () => radixSort({ ...algoProps }),
    };
    await algos[algo]();
    setIsSorting(false);
  }

  return {
    bars,
    isSorting,
    currInputSize,
    shuffle: generateRandomBars,
    changeAlgorithm,
    changeSpeed,
    changeInputSize,
    sort,
  };
}
