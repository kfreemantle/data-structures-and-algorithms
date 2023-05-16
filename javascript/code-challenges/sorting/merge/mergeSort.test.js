const mergeSort = require('./mergeSort');

describe('mergeSort', () => {
  it('sorts an array of numbers in ascending order', () => {
    const array = [8, 4, 23, 42, 16, 15];
    mergeSort(array);
    expect(array).toEqual([4, 8, 15, 16, 23, 42]);
  });

  it('sorts an array of numbers with few uniques', () => {
    const array = [5, 12, 7, 5, 5, 7];
    mergeSort(array);
    expect(array).toEqual([5, 5, 5, 7, 7, 12]);
  });

  it('sorts an array of numbers that are reverse sorted', () => {
    const array = [20, 18, 12, 8, 5, -2];
    mergeSort(array);
    expect(array).toEqual([-2, 5, 8, 12, 18, 20]);
  });

  it('sorts an array of numbers that are nearly sorted', () => {
    const array = [2, 3, 5, 7, 13, 11];
    mergeSort(array);
    expect(array).toEqual([2, 3, 5, 7, 11, 13]);
  });
});
