# Insertion Sort

This repository contains an implementation of the insertion sort algorithm in JavaScript, along with test cases.

## Algorithm Description

The insertion sort algorithm sorts an array by repeatedly taking an element from the input array and inserting it into the correct position in an initially empty sorted array. The process works as follows:

### Pseudocode

Insert(int[] sorted, int value)
  initialize i to 0
  WHILE value > sorted[i]
    set i to i + 1
  WHILE i < sorted.length
    set temp to sorted[i]
    set sorted[i] to value
    set value to temp
    set i to i + 1
  append value to sorted

InsertionSort(int[] input)
  LET sorted = New Empty Array
  sorted[0] = input[0]
  FOR i from 1 up to input.length
    Insert(sorted, input[i])
  return sorted

### Step-by-step process

For the input array [8,4,23,42,16,15], the insertionSort function would operate as follows:

Initialize the sorted array with the first element of the input array: sorted = [8]
For i=1, insert 4 into the sorted array: sorted = [4,8]
For i=2, insert 23 into the sorted array: sorted = [4,8,23]
For i=3, insert 42 into the sorted array: sorted = [4,8,23,42]
For i=4, insert 16 into the sorted array: sorted = [4,8,16,23,42]
For i=5, insert 15 into the sorted array: sorted = [4,8,15,16,23,42]
Test Cases
The test suite includes the following cases:

Test that the function correctly sorts a sample array: [8,4,23,42,16,15]
Test that the function correctly sorts a reverse-sorted array: [20,18,12,8,5,-2]
Test that the function correctly sorts an array with few unique elements: [5,12,7,5,5,7]
Test that the function correctly sorts a nearly sorted array: [2,3,5,7,13,11]

### Complexity Analysis
The time complexity of the insertionSort function is O(n^2), where n is the length of the input array. This is because for each element in the array, the function may have to shift all the previously sorted elements.

The space complexity is O(1), as the function sorts the array in place without needing any additional space.
