// loop thru all elements
// compare with neighbor and swap the smaller one for the bigger more to the right
// repeat the steps excluding the largest one

function bubbleSort(arr) {
  const n = arr.length;

  if (n <= 1) return arr;

  let i, j;
  for (i = 0; i < n; i++) {
    for (j = 0; j < n - (i + 1); ++j) {
      if (arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }

  return arr;
}

module.exports = bubbleSort;
