function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(number) {
  return number.toString().length;
}

function mostDigits(arr) {
  let maxDigit = digitCount(arr[0]);

  for (let i = 1; i < arr.length; i++)
    if (digitCount(arr[i]) > maxDigit) maxDigit = digitCount(arr[i]);

  return maxDigit;
}

function RadixSort(arr) {
  // 1) find out how many digits the largest number has
  const maxDigit = mostDigits(arr);

  for (let i = 0; i < maxDigit; i++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      let digit = getDigit(arr[j], i);
      digitBuckets[digit].push(arr[j]);
    }

    arr = [].concat(...digitBuckets);
  }
  return arr;
}

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }

    console.log(digitBuckets);
    nums = [].concat(...digitBuckets);
  }

  return nums;
}

console.log(RadixSort([24, 3, 444, 5555]));
console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));

/*
In JavaScript, [...digitBuckets] is used to create a shallow copy of an array. It spreads the elements of digitBuckets into a new array. However, if digitBuckets is a nested array (an array of arrays), spreading it using [...digitBuckets] will only create a shallow copy of the outer array, not the inner arrays. This means that changes made to the inner arrays in the copied array will still affect the original inner arrays.

On the other hand, [].concat(...digitBuckets) is a way to create a new array by concatenating the inner arrays within digitBuckets. The spread operator ... is used to spread the elements of digitBuckets (which are arrays) into the concat method. This approach creates a new array with the elements of the inner arrays, effectively flattening the nested array structure.

So, if you want to flatten a nested array structure, using [].concat(...digitBuckets) or [...[].concat(...digitBuckets)] would work to create a new flat array.
*/
