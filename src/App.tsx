import { useMemo } from "react";
import MyButton from "./components/input/MyButton";
import MyRange from "./components/input/MyRange";
import MySelect from "./components/input/MySelect";
import SorterControls from "./components/input/SorterControls";
import { Sorter } from "./components/Sorter";
import { algorithmOptions, speedOptions } from "./constants";
import { useSorter } from "./hooks/useSorter";
import { getMaxBarsForScreen } from "./utils";

/**
 * Render the app
 */
function App() {
  const maxInputSize = useMemo(() => {
    return getMaxBarsForScreen();
  }, []);

  const { sorter, sort, shuffle, handleInputChange } = useSorter();

  return (
    <div className="p-10 flex flex-col items-center min-h-screen xl:justify-around">
      {/*  Title */}
      <h1 className="text-center text-4xl xl:text-8xl font-extrabold uppercase text-gray-700 pt-1 pb-5">
        Sorting visualizer
      </h1>
      {/* Sorting + controls */}
      <Sorter bars={sorter.bars}>
        <SorterControls isSorting={sorter.isSorting}>
          <MySelect
            label={"Algorithm"}
            options={algorithmOptions}
            onChange={handleInputChange("algo")}
          />
          <MySelect
            defaultValue={speedOptions[1].value}
            label={"Speed"}
            options={speedOptions}
            onChange={handleInputChange("speed")}
          />
          <MyButton title="Shuffle" onClick={shuffle} />
          <MyButton title="Sort" onClick={sort} />
          <MyRange
            currSize={sorter.currInputSize}
            maxSize={maxInputSize}
            label="Input size"
            onChange={handleInputChange("currInputSize", true)}
          />
        </SorterControls>
      </Sorter>
      <footer className="text-center text-gray-500 text-sm font-bold py-10">
        Made with ❤️ by{" "}
        <a href="https://github.com/bskokdev" className="text-blue-500">
          @bskokdev
        </a>
      </footer>
    </div>
  );
}

export default App;
