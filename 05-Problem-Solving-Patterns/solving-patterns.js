// ! 1) Frequency counter pattern
// Write a function called same which accepts two arrays.
// Function should return true if every value in the array
// has it's corresponding value squared in the secondary array.
// The frequency of values must be the same.

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};
  for (const val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (const val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  for (const key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));

/*
// for of loop
const cars = ["BMW", "Volvo", "Mini"];

for (const car of cars) {
  console.log(car);
}

// Looping over a String
const name = "yusuf";

for (const letter of name) {
  console.log(letter.toLocaleUpperCase());
}

// for in loop

const person = { fname: "John", lname: "Doe", age: 25 };

let text = "";
for (let x in person) {
  text += person[x];
}

console.log(text)
*/

// ! Anagram Challenge
// Given two strings, write a function to determine if the second string
// is an anagram of the first. An anagram is a word, phrase, or name
// formed by rearranging the letters of another, such as cinema, formed from iceman.

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  for (const letter of str1) {
    frequencyCounter1[letter] = (frequencyCounter1[letter] || 0) + 1;
  }
  console.log(frequencyCounter1);

  for (const letter of str2) {
    frequencyCounter2[letter] = (frequencyCounter2[letter] || 0) + 1;
  }
  console.log(frequencyCounter2);

  for (const key in frequencyCounter1) {
    // todo burası önemli baba
    if (!(key in frequencyCounter2)) return false;

    if (frequencyCounter1[key] !== frequencyCounter2[key]) return false;
  }

  return true;
}

console.log(isAnagram("yusuf", "fusuf"));
console.log(isAnagram("cinema", "amenic"));
console.log(isAnagram("pide", "edip"));
console.log(isAnagram("ankara", "kanara"));
console.log(isAnagram("yusus", "uusyf"));

// ! 2) Multiple Pointers - countUniqueValues
// Implement a function called countUniqueValues, which accepts a sorted array,
// and counts the unique values in the array. There can be negative numbers
// in the array, but it will always be sorted.

function countUniqueValues(array) {
  let counter = 0;

  if (array.length === 0) return 0;

  for (let j = 1; j < array.length; j++) {
    if (array[counter] === array[j]) {
    } else {
      array[++counter] = array[j];
    }
  }

  return counter + 1;
}

function countUniqueValues(array) {
  // Handle empty array
  if (array.length === 0) return 0;

  let uniqueCount = 1; // Initialize with the first element
  let current = array[0]; // Keep track of the current unique value

  for (let j = 1; j < array.length; j++) {
    if (array[j] !== current) {
      current = array[j]; // Update the current unique value
      uniqueCount++; // Increment the unique count
    }
  }

  return uniqueCount;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
console.log(countUniqueValues([1, 1, 1, 2])); // 2
console.log(countUniqueValues([-1, -1, 1, 1, 1, 2, 3, 4, 5])); // 6

// ! 3) Sliding Window

// Write a function called maxSubarraySum which accepts
// an array of ints and a number called n. The function
// should calculate the max sum of n consecutive elements in array.

const maxSubarraySum = function (array, num) {
  let maxSum = 0;
  let tempSum = 0;

  // edge case
  if (array.length < num) return 0;

  for (let i = 0; i < num; i++) {
    maxSum += array[i];
  }
  tempSum = maxSum;
  for (let i = num; i < array.length; i++) {
    tempSum = tempSum - array[i - num] + array[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
};

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

// ! 4) Divide and Conquer
