export function swap(array: any, a: number, b: number): void {
    const temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}