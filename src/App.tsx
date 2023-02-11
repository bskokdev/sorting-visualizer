import MyButton from "./components/MyButton";
import MySelect from "./components/MySelect";
import { Sorter } from "./components/Sorter";
import SorterControls from "./components/SorterControls";
import { algorithmOptions, speedOptions } from "./constants";
import { useSorter } from "./hooks/useSorter";
import { SortingAlgorithmType } from "./types";

/**
 * Render the app
 */
function App() {
  const { changeAlgorithm, changeSpeed, bars, sort, isSorting, shuffle } =
    useSorter();

  return (
    <div className="p-10 flex flex-col items-center h-screen xl:justify-around">
      {/*  Title */}
      <h1 className="text-center text-4xl lg:text-8xl font-extrabold uppercase text-gray-700 py-3">
        Sorting visualizer
      </h1>
      {/* Sorting + controls */}
      <Sorter bars={bars}>
        <SorterControls isSorting={isSorting}>
          <MySelect
            label={"Algorithm"}
            options={algorithmOptions}
            onChange={(e) =>
              changeAlgorithm(e.target.value as SortingAlgorithmType)
            }
          />
          <MySelect
            defaultValue={speedOptions[1].value}
            label={"Speed"}
            options={speedOptions}
            onChange={(e) => changeSpeed(Number(e.target.value))}
          />
          <MyButton title="Shuffle" onClick={shuffle} />
          <MyButton title="Sort" onClick={sort} />
        </SorterControls>
      </Sorter>
    </div>
  );
}

export default App;
