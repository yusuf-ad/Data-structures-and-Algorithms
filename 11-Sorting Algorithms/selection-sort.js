function selectionSort(array) {
  function swap(array, idx1, idx2) {
    [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
  }

  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    swap(array, i, minIndex);
  }
  return array;
}

console.log(selectionSort([5, 4, 3, 2, 1]));
console.log(selectionSort([5, -8, 3, 2, 1]));
console.log(selectionSort([33, 25, 9, 3, 2, 1]));
