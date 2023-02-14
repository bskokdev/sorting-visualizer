import { useMemo } from "react";
import MyButton from "./components/input/MyButton";
import MyRange from "./components/input/MyRange";
import MySelect from "./components/input/MySelect";
import SorterControls from "./components/input/SorterControls";
import { Sorter } from "./components/Sorter";
import { algorithmOptions, speedOptions } from "./constants";
import { useSorter } from "./hooks/useSorter";
import { SortingAlgorithmType } from "./types";
import { getMaxBarsForScreen } from "./utils";

/**
 * Render the app
 */
function App() {
  const maxInputSize = useMemo(() => {
    return getMaxBarsForScreen();
  }, []);
  const {
    bars,
    currInputSize,
    isSorting,
    changeAlgorithm,
    changeSpeed,
    changeInputSize,
    sort,
    shuffle,
  } = useSorter(maxInputSize);

  return (
    <div className="p-10 flex flex-col items-center h-screen xl:justify-around">
      {/*  Title */}
      <h1 className="text-center text-4xl xl:text-8xl font-extrabold uppercase text-gray-700 py-3">
        Sorting visualizer
      </h1>
      {/* Sorting + controls */}
      <Sorter bars={bars}>
        <SorterControls isSorting={isSorting}>
          <MySelect
            label={"Algorithm"}
            options={algorithmOptions}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              changeAlgorithm(e.target.value as SortingAlgorithmType)
            }
          />
          <MySelect
            defaultValue={speedOptions[1].value}
            label={"Speed"}
            options={speedOptions}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              changeSpeed(Number(e.target.value))
            }
          />
          <MyButton title="Shuffle" onClick={shuffle} />
          <MyButton title="Sort" onClick={sort} />
          <MyRange
            currSize={currInputSize}
            maxSize={maxInputSize}
            label="Input size"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              changeInputSize(Number(e.target.value))
            }
          />
        </SorterControls>
      </Sorter>
    </div>
  );
}

export default App;
