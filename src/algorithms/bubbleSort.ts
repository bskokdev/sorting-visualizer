import {SortingAlgorithm, SortingAlgorithmProps} from "../types";
import {sleep, swapBars} from "../utils";

/**
 * Bubble sort - O(n^2) time complexity
 * @param {SortingAlgorithmProps} { bars, setBars, speed
 */
export const bubbleSort: SortingAlgorithm = async ({
  bars,
  updateBars,
  speed,
  cleanup,
}: SortingAlgorithmProps): Promise<void> => {
  const sortedArray = bars;
  for (let i = 0; i < sortedArray.length; ++i) {
    for (let j = 0; j < sortedArray.length - 1; ++j) {
      if (sortedArray[j].weight > sortedArray[j + 1].weight) {
        swapBars(sortedArray, j, j + 1);
        updateBars([...sortedArray]);

        // we change the color of the bars that are being compared
        sortedArray[j].color = "#b91c1c";
        sortedArray[j + 1].color = "#0369a1";
        await sleep(speed);

        // and then we change them back to their original color after sleep
        sortedArray[j].color = "coral";
        sortedArray[j + 1].color = "coral";
      }
    }
  }
  await cleanup(sortedArray);
};
