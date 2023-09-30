import {SortingAlgorithm, SortingAlgorithmProps} from "../types";
import {sleep} from "../utils";

// Insertion sort algorithm - O(n^2)
export const insertionSort: SortingAlgorithm = async ({
  bars,
  updateBars,
  speed,
  cleanup,
}: SortingAlgorithmProps): Promise<void> => {
  const sortedBars = [...bars];
  for (let i = 1; i < sortedBars.length; ++i) {
    let j = i - 1;
    const curItem = sortedBars[i];
    curItem.color = "#b91c1c";
    updateBars(sortedBars);

    await sleep(speed * 5);

    while (j >= 0 && sortedBars[j].weight > curItem.weight) {
      sortedBars[j + 1] = sortedBars[j];
      j--;
    }

    sortedBars[j + 1] = curItem;
    curItem.color = "coral";
    updateBars(sortedBars);

    await sleep(speed * 5);
  }
  await cleanup(sortedBars);
};
