function merge(arr1, arr2) {
  let leftPtr = 0;
  let rightPtr = 0;

  const mergedArray = [];

  while (leftPtr < arr1.length || rightPtr < arr2.length) {
    if (arr1[leftPtr] < arr2[rightPtr]) {
      console.log("hi");
      mergedArray.push(arr1[leftPtr]);
      leftPtr++;
    } else {
      console.log("hi");
      mergedArray.push(arr2[rightPtr]);
      rightPtr++;
    }

    if (leftPtr === arr1.length) {
      console.log("hi");
      return [...mergedArray, arr2.slice(rightPtr)].flat();
    }

    if (rightPtr === arr2.length) {
      console.log("hi");
      return [...mergedArray, arr1.slice(leftPtr)].flat();
    }
  }

  return mergedArray;
}

console.log(merge([2, 14, 99, 100], [1, 10, 50]));
console.log(merge([100, 200], [1, 2, 3, 5, 6]));
console.log(merge([], [1, 2, 3]));

// Merges two already sorted arrays
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

console.log(merge([100, 200], [1, 2, 3, 5, 6]));

// Recrusive Merge Sort
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  console.log(left);
  let right = mergeSort(arr.slice(mid));
  console.log(right);
  return merge(left, right);
}

mergeSort([23, 34, 12, 45, 1]);
