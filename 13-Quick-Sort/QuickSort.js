const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

// function pivot(array, index = 0, endIndex = array.length - 1) {
//   let pivot = index;

//   for (let i = 1; i < array.length; i++) {
//     if (array[pivot] > array[i]) {
//       ++pivot;
//       swap(array, i, pivot);
//     }
//   }

//   swap(array, 0, pivot);
//   console.log(array);

//   return pivot;
// }

function pivot(array, start = 0, end = array.length - 1) {
  let pivot = array[start];
  let swapId = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > array[i]) {
      ++swapId;
      console.log(swapId);
      swap(array, swapId, i);
    }
  }

  console.log(array);
  swap(array, start, swapId);
  console.log(array);

  return swapId;
}

const array = [5, 4, 2, 3, 6, 1];
console.log(pivot(array));
console.log(array);

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right); //3
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]));

// [4,6,9,1,2,5,3]
// [3,2,1,4,6,9,5]
//        4
//  3,2,1    6,9,5
//      3      6
//  2,1      5  9
//    2
//  1
