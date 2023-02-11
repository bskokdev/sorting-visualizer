import { Bar } from "../types";

/**
 * View of a single bar
 * @param {Bar} { weight, color }
 */
export default function BarRender({ weight, color }: Bar) {
  return (
    <div
      className="w-4 mx-0.5 rounded-t-2xl"
      style={{
        height: weight * 5,
        backgroundColor: color,
      }}
    ></div>
  );
}
