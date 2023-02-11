import { Bar } from "../types";

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
