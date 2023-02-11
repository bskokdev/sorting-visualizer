interface SorterControlsProps {
  children: React.ReactNode;
  isSorting: boolean;
}

/**
 * Controls for the Sorter component, which disables the controls when sorting is in progress.
 * @param children
 * @param isSorting
 */
export default function SorterControls({
  children,
  isSorting,
}: SorterControlsProps) {
  return (
    <div
      className="flex justify-center gap-x-3 items-end"
      style={{ pointerEvents: isSorting ? "none" : "auto" }}
    >
      {children}
    </div>
  );
}
