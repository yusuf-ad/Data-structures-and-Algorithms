function printFactorial(number) {
  // base case
  console.log(number + " ");
  if (number === 1) return 1;
  // recursive case
  return number * printFactorial(number - 1);
}

console.log(printFactorial(6));

// ! helper method recursion
// * So helper method recursion is just a pattern where we
// * have an outer function that's not recursive,
// * which calls an inner function. Which is recursive.

function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    // base case(end point)
    if (helperInput.length === 0) return;
    // recursive case
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }
  helper(arr);

  return result;
}

collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]);

const isPalindrome = function (x) {
  if (x < 0) return false;

  const strInteger = x.toString();
  const strLength = strInteger.length;

  for (let i = 0; i < strLength; i++) {
    if (strInteger[i] !== strInteger[strLength - 1 - i]) return false;
  }
  return true;
};

console.log(isPalindrome(101));
console.log(isPalindrome(-101));
console.log(isPalindrome(201));
console.log(isPalindrome(200000002));
console.log(isPalindrome(19777777777791));
