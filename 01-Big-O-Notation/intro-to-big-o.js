// Write a function that accepts a string input and returns a reversed copy

const reverseString = function (string) {
  console.log(string.split("").reverse().join(""));
};

reverseString("ali cengiz");

function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

console.log(addUpTo(100));
