import { useEffect, useState } from "react";
import { bubbleSort } from "../algorithms/bubblesort";
import { speedOptions } from "../constants";
import { Bar, SortingAlgorithmType } from "../types";
import { getBarCountForScreenSize, getRandomNumber } from "../utils";
import { SortingAlgorithmProps } from "./../types/index";

/**
 * Custom hook to handle sorting logic
 * functions: shuffle, changeAlgorithm, changeSpeed, sort
 * states: bars, isSorting
 */
export function useSorter(algorithmDefault: SortingAlgorithmType) {
  const [algo, setAlgo] = useState<SortingAlgorithmType>(algorithmDefault);
  const [speed, setSpeed] = useState<number>(speedOptions[1].value as number); // in ms
  const [bars, setBars] = useState<Array<Bar>>([]);
  const [isSorting, setIsSorting] = useState<boolean>(false);

  // generate array of bars on first render
  useEffect(() => {
    generateRandomBars();
  }, []);

  // generate bars with random weights
  function generateRandomBars(): void {
    if (isSorting) return;
    let bars: Array<Bar> = [];
    const barCount = getBarCountForScreenSize();
    for (let i = 0; i < barCount; i++) {
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

  async function sort() {
    if (isSorting) return;
    setIsSorting(true);
    const algoProps: SortingAlgorithmProps = { bars, setBars, speed };
    //todo: implement other sorting algorithms
    const algos = {
      bubble: () => bubbleSort({ ...algoProps }),
      selection: () => {},
      insertion: () => {},
      merge: () => {},
      quick: () => {},
      heap: () => {},
      radix: () => {},
    };
    await algos[algo]();
    setIsSorting(false);
  }

  return {
    bars,
    shuffle: generateRandomBars,
    changeAlgorithm,
    changeSpeed,
    sort,
    isSorting,
  };
}
