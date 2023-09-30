import {Bar, SortingAlgorithm, SortingAlgorithmProps} from "../types";
import {sleep, swapBars} from "../utils";

/**
 * Quick Sort - O(n log n) time complexity
 * @param {SortingAlgorithmProps} { bars, setBars, speed, cleanup }
 */
export const quickSort: SortingAlgorithm = async ({
  bars,
  updateBars,
  speed,
  cleanup,
}: SortingAlgorithmProps): Promise<void> => {
  const currArray = [...bars];
  await sortHelper(currArray, 0, currArray.length - 1, speed, updateBars);
  await cleanup(currArray);
};

async function sortHelper(
  array: Bar[],
  lowIdx: number,
  highIdx: number,
  speed: number,
  setBars: (bars: Bar[]) => void,
): Promise<void> {
  if (lowIdx >= highIdx) return;
  // last element as pivot
  const pivot = array[highIdx];
  let left = lowIdx;
  let right = highIdx;

  while (left < right) {
    pivot.color = "green";
    setBars([...array]);

    while (array[left].weight <= pivot.weight && left < right) {
      left++;

      // highlight left pointer
      array[left].color = "#b91c1c";
      setBars([...array]);
      await sleep(speed * 5);

      // reset left pointer color
      array[left].color = "coral";
      setBars([...array]);
    }
    while (array[right].weight >= pivot.weight && left < right) {
      right--;

      // highlight right pointer
      array[right].color = "#0369a1";
      setBars([...array]);
      await sleep(speed * 5);

      // reset right pointer color
      array[right].color = "coral";
      setBars([...array]);
    }

    swapBars(array, left, right);

    // resets pivot color
    pivot.color = "coral";
    setBars([...array]);
  }
  swapBars(array, left, highIdx);

  // recursively sort left and right arrays
  await sortHelper(array, lowIdx, left - 1, speed, setBars);
  await sortHelper(array, left + 1, highIdx, speed, setBars);
}
