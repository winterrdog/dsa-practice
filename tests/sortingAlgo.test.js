const mergeSort = require("../merge-sort");
const bubbleSort = require("../bubble-sort");
const quickSort = require("../quick-sort");

describe("testing all sorting algorithms", function () {
  // unsorted arrays
  const unsortedArr1 = [12, 4, 64, 24, 9, 37];
  const unsortedArr2 = [1, 3, 4, 4, 5, 2];
  const unsortedArr3 = [32, 244, 364, 244, 37, 37];
  const unsortedArr4 = [32, 244, 364, 244, 37, -37];
  const unsortedArr5 = [4];
  const unsortedArr6 = [87, -12, 54, -9, 112, 19];
  const unsortedArr7 = [35, 12, -67, 24, 78, -98];
  const unsortedArr8 = [123, 45, -76, 45, -234, 0];
  const unsortedArr9 = [-987, 32, -123, 123, -111, 5];
  const unsortedArr10 = [56, -87, 99, -112, 2, -37];
  const unsortedArr11 = [-89, 32, 7, 21, -90, 45];
  const unsortedArr12 = [43, -17, 87, -8, 21, 65];
  const unsortedArr13 = [54, 76, -12, -99, 4, 8];

  // sorted arrays
  const sortedArr1 = [4, 9, 12, 24, 37, 64];
  const sortedArr2 = [1, 2, 3, 4, 4, 5];
  const sortedArr3 = [32, 37, 37, 244, 244, 364];
  const sortedArr4 = [-37, 32, 37, 244, 244, 364];
  const sortedArr5 = [4];
  const sortedArr6 = [-12, -9, 19, 54, 87, 112];
  const sortedArr7 = [-98, -67, 12, 24, 35, 78];
  const sortedArr8 = [-234, -76, 0, 45, 45, 123];
  const sortedArr9 = [-987, -123, -111, 5, 32, 123];
  const sortedArr10 = [-112, -87, -37, 2, 56, 99];
  const sortedArr11 = [-90, -89, 7, 21, 32, 45];
  const sortedArr12 = [-17, -8, 21, 43, 65, 87];
  const sortedArr13 = [-99, -12, 4, 8, 54, 76];

  it("-- merge sort algorithm", function () {
    expect(mergeSort(unsortedArr1)).toEqual(sortedArr1);
    expect(mergeSort(unsortedArr2)).toEqual(sortedArr2);
    expect(mergeSort(unsortedArr3)).toEqual(sortedArr3);
    expect(mergeSort(unsortedArr4)).toEqual(sortedArr4);
    expect(mergeSort(unsortedArr5)).toEqual(sortedArr5);
    expect(mergeSort(unsortedArr6)).toEqual(sortedArr6);
    expect(mergeSort(unsortedArr7)).toEqual(sortedArr7);
    expect(mergeSort(unsortedArr8)).toEqual(sortedArr8);
    expect(mergeSort(unsortedArr9)).toEqual(sortedArr9);
    expect(mergeSort(unsortedArr10)).toEqual(sortedArr10);
    expect(mergeSort(unsortedArr11)).toEqual(sortedArr11);
    expect(mergeSort(unsortedArr12)).toEqual(sortedArr12);
    expect(mergeSort(unsortedArr13)).toEqual(sortedArr13);
  });

  it("-- quick sort algorithm", function () {
    expect(quickSort(unsortedArr1)).toEqual(sortedArr1);
    expect(quickSort(unsortedArr2)).toEqual(sortedArr2);
    expect(quickSort(unsortedArr3)).toEqual(sortedArr3);
    expect(quickSort(unsortedArr4)).toEqual(sortedArr4);
    expect(quickSort(unsortedArr5)).toEqual(sortedArr5);
    expect(quickSort(unsortedArr6)).toEqual(sortedArr6);
    expect(quickSort(unsortedArr7)).toEqual(sortedArr7);
    expect(quickSort(unsortedArr8)).toEqual(sortedArr8);
    expect(quickSort(unsortedArr9)).toEqual(sortedArr9);
    expect(quickSort(unsortedArr10)).toEqual(sortedArr10);
    expect(quickSort(unsortedArr11)).toEqual(sortedArr11);
    expect(quickSort(unsortedArr12)).toEqual(sortedArr12);
    expect(quickSort(unsortedArr13)).toEqual(sortedArr13);
  });

  it("-- bubble sort algorithm", function () {
    expect(bubbleSort(unsortedArr1)).toEqual(sortedArr1);
    expect(bubbleSort(unsortedArr2)).toEqual(sortedArr2);
    expect(bubbleSort(unsortedArr3)).toEqual(sortedArr3);
    expect(bubbleSort(unsortedArr4)).toEqual(sortedArr4);
    expect(bubbleSort(unsortedArr5)).toEqual(sortedArr5);
    expect(bubbleSort(unsortedArr6)).toEqual(sortedArr6);
    expect(bubbleSort(unsortedArr7)).toEqual(sortedArr7);
    expect(bubbleSort(unsortedArr8)).toEqual(sortedArr8);
    expect(bubbleSort(unsortedArr9)).toEqual(sortedArr9);
    expect(bubbleSort(unsortedArr10)).toEqual(sortedArr10);
    expect(bubbleSort(unsortedArr11)).toEqual(sortedArr11);
    expect(bubbleSort(unsortedArr12)).toEqual(sortedArr12);
    expect(bubbleSort(unsortedArr13)).toEqual(sortedArr13);
  });
});
