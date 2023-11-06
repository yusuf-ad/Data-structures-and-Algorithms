function getDigit(number, place) {
  if (place === 0) return String(number).slice(-1);

  return String(number).slice(-1 - place, -place);
}

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

console.log(getDigit(12345, 0));
console.log(getDigit(12345, 1));

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function digitCount(number) {
  return number.toString().length;
}

console.log(digitCount(1));
console.log(digitCount(12));
console.log(digitCount(133));

function mostDigits(arr) {
  let maxDigit = digitCount(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    if (digitCount(arr[i]) > maxDigit) maxDigit = digitCount(arr[i]);
  }

  return maxDigit;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

console.log(mostDigits([1234, 54, 33337, 123, 543543]));
