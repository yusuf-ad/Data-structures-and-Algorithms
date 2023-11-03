function power(base, exponent = 0) {
  // base case
  if (exponent === 0) return 1;

  // recursive case
  return base * power(base, exponent - 1);
}

console.log(power(2, 0));
console.log(power(4, 2));
console.log(power(6, 3));

function factorial(number) {
  // base case
  if (number === 0) return 1;

  // recursive case
  return number * factorial(number - 1);
}

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(4));
console.log(factorial(7));

function productOfArray(array) {
  // base case
  if (array.length === 0) return 1;

  // recursive case
  return array[0] * productOfArray(array.slice(1));
}

console.log(productOfArray([1, 2, 3]));
console.log(productOfArray([1, 2, 3, 12]));
console.log(productOfArray([1, 2, 3, 12, 15]));

function recursiveRange(number) {
  // base case
  if (number === 0) return 0;

  // recursive case
  return number + recursiveRange(number - 1);
}

console.log(recursiveRange(6));
console.log(recursiveRange(16));

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

// 1, 1, 2, 3, 5, 8, 13 ,21

// function fib(number) {
//   // base case
//   if (number === 1 || number === 0) return 1;

//   // recursive case
//   return fib(number - 1) + fib(number - 2);
// }

function fib(n) {
  // base case
  if (n <= 2) return 1;

  // recursive case
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(4));
console.log(fib(10));
console.log(fib(28));
console.log(fib(35));

// ! Recursion means a function that call itself
