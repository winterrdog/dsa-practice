// recursively split input into 2 halves
// compare and merge each half into one sorted array

// function to split array
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  // split array
  const mid = Math.floor(arr.length / 2);

  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

// function to merge array halves
function merge(left, right) {
  const res = [];

  let [leftIdx, rightIdx] = [0, 0];
  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] < right[rightIdx]) {
      res.push(left[leftIdx]);
      leftIdx++;
    } else {
      res.push(right[rightIdx]);
      rightIdx++;
    }
  }

  // add the remaining elements to result
  return res.concat(left.slice(leftIdx)).concat(right.slice(rightIdx));
}

module.exports = mergeSort;
