// function insertionSort(array) {
//   function swap(array, idx1, idx2) {
//     [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
//   }

//   let sortedPortion = [array[0]];
//   for (let i = 1; i < array.length; i++) {
//     sortedPortion = [...sortedPortion, array[i]];
//     console.log(sortedPortion);
//     for (let j = 0; j < sortedPortion.length; j++) {
//       if (array[i] < sortedPortion[j]) {
//         swap(sortedPortion, i, j);
//         console.log(sortedPortion);
//       }
//     }
//   }

//   return sortedPortion;
// }

// console.log(insertionSort([5, 4, 2, 1]));
// console.log(insertionSort([5, 31, 4, 2, 99, 1]));
// console.log(insertionSort([5, 4, 47, 2, 1]));
// console.log(insertionSort([5, 4, 2, -70, 1]));

function insertionSort(arr) {
  var currentVal;
  for (var i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4]));
