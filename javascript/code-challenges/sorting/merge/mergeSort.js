function mergeSort(arr) {
  const n = arr.length;

  // If the array is longer than one element, we need to split it and sort each half
  if (n > 1) {
    // Find the middle of the array
    const mid = Math.floor(n / 2);
    // Split the array into two halves
    const left = arr.slice(0, mid);
    const right = arr.slice(mid, n);

    // Recursively sort each half
    mergeSort(left);
    mergeSort(right);

    // Merge the sorted halves back together
    merge(left, right, arr);
  }
}

// This helper function is responsible for merging two sorted arrays together
function merge(left, right, arr) {
  let i = 0;
  let j = 0;
  let k = 0;

  // As long as there are unprocessed elements in both arrays
  while (i < left.length && j < right.length) {
    // If the current element of the left array is smaller, put it in the result array
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      // Otherwise, put the current element of the right array in the result array
      arr[k] = right[j];
      j++;
    }
    // Move to the next position in the merged array
    k++;
  }

  // If we've exhausted one of the arrays, copy all remaining elements from the other array
  while (i < left.length) {
    arr[k] = left[i];
    i++;
    k++;
  }

  while (j < right.length) {
    arr[k] = right[j];
    j++;
    k++;
  }
}

module.exports = mergeSort;
