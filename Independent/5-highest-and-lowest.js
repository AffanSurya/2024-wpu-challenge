// https://www.codewars.com/kata/554b4ac871d6813a03000035

// cara 1
// function highAndLow(numbers) {
//   const arr = numbers.split(" ").sort((a, b) => a - b);
//   return `${arr[arr.length - 1]} ${arr[0]}`;
// }

// cara 2
function highAndLow(numbers) {
  const arr = numbers.split(" ");

  return `${Math.max(...arr)} ${Math.min(...arr)}`;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
