// get input array and choose pivot
// move all elements smaller than pivot to its left and larger ones 2 its right
// repeat the same steps for the sub-arrays on the left and right of pivot

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (arr.length <= 1 || left > right) return arr;

  // get pivot & move all elements smaller than pivot to its left and larger ones to its right
  const pivot = partition(arr, left, right);

  quickSort(arr, left, pivot - 1); // sort left sub array
  quickSort(arr, pivot + 1, right); // sort right sub array

  return arr;
}

// function to partition array
function partition(arr, left, right) {
  let partitionIdx = left;

  // rearrange elements
  for (let i = left, pivotValue = arr[right]; i < right; ++i) {
    if (arr[i] < pivotValue) {
      if (arr[i] !== arr[partitionIdx]) {
        [arr[i], arr[partitionIdx]] = [arr[partitionIdx], arr[i]];
      }

      partitionIdx++;
    }
  }

  // place pivot in its correct spot
  [arr[right], arr[partitionIdx]] = [arr[partitionIdx], arr[right]];
  return partitionIdx;
}

module.exports = quickSort;
