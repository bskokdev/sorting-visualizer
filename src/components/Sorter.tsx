import { Bar } from "../types";
import BarRender from "./BarRender";

interface SorterProps {
  bars: Array<Bar>;
  children?: React.ReactNode;
}

export function Sorter({ bars, children }: SorterProps) {
  return (
    <div className="flex flex-col gap-y-4">
      <div>{children}</div>
      {/* Render bars */}
      <div className="flex items-end justify-center bg-red-100 shadow-md rounded-2xl pt-5 px-10 h-[550px]">
        {bars.map((bar, idx) => (
          <BarRender key={idx} {...bar} />
        ))}
      </div>
    </div>
  );
}
