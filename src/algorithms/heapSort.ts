import { sleep } from "../utils";
import { Bar, SortingAlgorithm, SortingAlgorithmProps } from "./../types/index";

/**
 * Heap sort algorithm - O(nlogn)
 * @param {SortingAlgorithmProps} { bars, updateBars, speed, cleanup }
 */
export const heapSort: SortingAlgorithm = async ({
  bars,
  updateBars,
  speed,
  cleanup,
}: SortingAlgorithmProps) => {
  // implement heap sort here
  // create a max heap
  // swap the popped element from max heap with the last element in the array
  // call heapify on the reduced array
  // repeat until array is sorted
  const sortedBars = [...bars];
  let n = sortedBars.length;
  let lastPNodeIdx = Math.floor(n / 2) - 1;
  let lastChildIdx = n - 1;

  while (lastPNodeIdx >= 0) {
    heapify(sortedBars, n, lastPNodeIdx);
    lastPNodeIdx--;

    if (lastPNodeIdx >= 0) {
      sortedBars[0].color = "#b91c1c";
      sortedBars[lastPNodeIdx + 1].color = "#0369a1";
      updateBars(sortedBars);
      await sleep(speed * 5);
      // reset colors
      sortedBars[0].color = "coral";
      sortedBars[lastPNodeIdx + 1].color = "coral";
    } else {
      await sleep(speed * 5);
    }
  }

  while (lastChildIdx >= 0) {
    // swap the first and last element
    [sortedBars[0], sortedBars[lastChildIdx]] = [
      sortedBars[lastChildIdx],
      sortedBars[0],
    ];
    heapify(sortedBars, lastChildIdx, 0);
    lastChildIdx--;

    if (lastChildIdx >= 0) {
      sortedBars[lastChildIdx].color = "#b91c1c";
      sortedBars[0].color = "#0369a1";
      updateBars(sortedBars);
      await sleep(speed * 5);
      // reset colors
      sortedBars[lastChildIdx].color = "coral";
      sortedBars[0].color = "coral";
    } else {
      await sleep(speed * 5);
    }
  }
  cleanup(sortedBars);
};

function heapify(bars: Bar[], length: number, pIdx: number) {
  let largest = pIdx;
  let lIdx = 2 * pIdx + 1;
  let rIdx = 2 * pIdx + 2;

  if (lIdx < length && bars[lIdx].weight > bars[largest].weight) {
    largest = lIdx;
  }

  if (rIdx < length && bars[rIdx].weight > bars[largest].weight) {
    largest = rIdx;
  }

  if (largest !== pIdx) {
    // swap the parent and largest child
    [bars[pIdx], bars[largest]] = [bars[largest], bars[pIdx]];
    heapify(bars, length, largest);
  }
}
