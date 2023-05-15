'use strict';

function insert(sorted, value) {
  let i = 0;

  // Find the correct position for the value in the sorted array
  while (value > sorted[i]) {
    i++;
  }

  // Shift all larger values to the right and insert the value
  while (i < sorted.length) {
    let temp = sorted[i];
    sorted[i] = value;
    value = temp;
    i++;
  }

  // Append the last value to the sorted array
  sorted.push(value);
}

function insertionSort(input) {
  let sorted = [];
  sorted[0] = input[0];

  // Insert each value from the input array into the sorted array
  for (let i = 1; i < input.length; i++) {
    insert(sorted, input[i]);
  }

  return sorted;
}

module.exports = insertionSort;
