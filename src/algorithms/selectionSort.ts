import {SortingAlgorithm, SortingAlgorithmProps} from "../types";
import {sleep, swapBars} from "../utils";

/**
 * Selection Sort - O(n^2) time complexity
 * @param {SortingAlgorithmProps} { bars, setBars, speed, cleanup }
 */
export const selectionSort: SortingAlgorithm = async ({
  bars,
  updateBars,
  speed,
  cleanup,
}: SortingAlgorithmProps): Promise<void> => {
  const sortedBars = [...bars];

  for (let i = 0; i < sortedBars.length; ++i) {
    let minIndex = i;
    sortedBars[i].color = "#b91c1c";

    updateBars(sortedBars);
    await sleep(speed);

    // find the minimum element in the unsorted array
    for (let j = i + 1; j < sortedBars.length; ++j) {
      sortedBars[j].color = "#0369a1";
      updateBars(sortedBars);
      await sleep(speed);
      sortedBars[j].color = "coral";
      updateBars(sortedBars);
      if (sortedBars[j].weight < sortedBars[minIndex].weight) {
        minIndex = j;
      }
    }

    sortedBars[minIndex].color = "green";
    updateBars(sortedBars);
    await sleep(speed);

    sortedBars[i].color = "coral";
    sortedBars[minIndex].color = "coral";
    updateBars(sortedBars);

    await sleep(speed);
    swapBars(sortedBars, i, minIndex);
  }
  await cleanup(sortedBars);
};
