function linearSearch(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) return i;
  }

  return -1;
}

console.log(linearSearch([10, 15, 20, 25, 30], 15)); // 1
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)); // 5
console.log(linearSearch([1, 2, 3, 4, 5], 6)); // -1
console.log(linearSearch(["timur", "yusuf", "ali", "haydar"], "ali"));

// Binary Search

// function binarySearch(array, value) {
//   let lPointer = 0;
//   let rPointer = array.length - 1;

//   while (lPointer < rPointer) {
//     let center = Math.floor((lPointer + rPointer) / 2);

//     if (value === array[center]) return center;

//     if (value > array[rPointer]) return -1;

//     if (value < array[center]) {
//       rPointer--;
//     } else {
//       rPointer++;
//     }
//   }

//   return -1;
// }

function binarySearch(array, value) {
  let leftPointer = 0;
  let rightPointer = array.length - 1;

  while (leftPointer <= rightPointer) {
    const middle = Math.floor((leftPointer + rightPointer) / 2);

    if (array[middle] === value) {
      return middle; // Found the value
    } else if (array[middle] < value) {
      leftPointer = middle + 1; // Adjust left pointer
    } else {
      rightPointer = middle - 1; // Adjust right pointer
    }
  }

  return -1; // Value not found
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 7)); // 4
console.log(binarySearch([1, 2, 3, 3, 4, 5], 3)); // -1
console.log(
  binarySearch(
    [5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98],
    10
  )
); // 2
console.log(
  binarySearch(
    [5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98],
    95
  )
); // 16

function findString(longStr, str) {
  let counter = 0;
  let tempStr = "";

  if (str.length > longStr.length) return -1;

  for (let i = 0; i < longStr.length; i++) {
    tempStr += longStr[i];

    for (let j = tempStr.length - 1; j < str.length; j++) {
      if (tempStr === str) {
        counter++;
        tempStr = "";
      }

      if (str[j] === longStr[i]) {
        break;
      }

      if (str[j] !== longStr[i]) {
        tempStr = "";
        break;
      }
    }
  }

  return counter;
}

console.log(findString("yusufad", "yusuf"));
console.log(findString("mehmet ali timur yu suf aliad", "ali"));
console.log(findString("al iadmehmet yusuf alimustafal", "ali"));
console.log(findString("lorie loled", "lol"));

function naiveSearch(long, short) {
  var count = 0;
  for (var i = 0; i < long.length; i++) {
    for (var j = 0; j < short.length; j++) {
      console.log(i + j);
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
}

console.log(naiveSearch("lorie loled", "lol"));
