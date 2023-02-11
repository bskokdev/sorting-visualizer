interface SorterControlsProps {
  children: React.ReactNode;
  isSorting: boolean;
}

/**
 * Controls for the Sorter component, which disables the controls when sorting is in progress.
 * @param {SorterControlsProps} { children, isSorting }
 */
export default function SorterControls({
  children,
  isSorting,
}: SorterControlsProps) {
  return (
    <div
      className="flex flex-col lg:flex-row lg:items-end justify-center gap-y-3 lg:gap-x-3"
      style={{ pointerEvents: isSorting ? "none" : "auto" }}
    >
      {children}
    </div>
  );
}
