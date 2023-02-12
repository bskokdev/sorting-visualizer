import { Bar } from "../types";

/**
 * This file contains utility functions that are used in multiple places
 */

/**
 * Sets the color of the bars to the given color and updates the state
 * @param bars - array of bars
 * @param color - hex color
 * @param speed - in ms
 * @param setBars - function to update the state
 */
export async function setBarArrayColor(
  bars: Array<Bar>,
  color: string,
  speed: number,
  setBars: React.Dispatch<React.SetStateAction<Bar[]>>
) {
  for (let i = 0; i < bars.length; ++i) {
    bars[i].color = color;
    setBars([...bars]);
    await sleep(speed);
  }
}

/**
 * Sleeps for the given amount of milliseconds
 * @param milliseconds - in ms
 * @returns Promise<void>
 */
export function sleep(milliseconds: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

export function getRandomNumber(from: number, to: number): number {
  return Math.floor(Math.random() * (to - from + 1) + from);
}

/**
 * Returns the number of bars to be displayed on the screen based on the screen size
 */
export function getBarCountForScreenSize(): number {
  const width = window.innerWidth;
  if (width < 768) return 18;
  if (width < 1024) return 40;
  if (width < 1440) return 70;
  if (width < 1920) return 100;
  return 140;
}
