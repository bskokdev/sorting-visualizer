import { SortingAlgorithmProps } from "../types";
import { sleep } from "../utils";

/**
 * Bubble sort - O(n^2) time complexity
 * @param {SortingAlgorithmProps} { bars, setBars, speed
 */
export async function bubbleSort({
  bars,
  setBars,
  speed,
  cleanup,
}: SortingAlgorithmProps): Promise<void> {
  const sortedArray = bars;
  for (let i = 0; i < sortedArray.length; ++i) {
    for (let j = 0; j < sortedArray.length - 1; ++j) {
      if (sortedArray[j].weight > sortedArray[j + 1].weight) {
        // compare two bars and swap them and update the state
        const temp = sortedArray[j];
        sortedArray[j] = sortedArray[j + 1];
        sortedArray[j + 1] = temp;
        setBars([...sortedArray]);

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
  cleanup(sortedArray);
}
