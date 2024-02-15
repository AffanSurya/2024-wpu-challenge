// 16
// https://www.codewars.com/kata/563e320cee5dddcf77000158

function getAverage(marks) {
  return Math.floor(marks.reduce((acc, cur) => acc + cur) / marks.length);
}

console.log(getAverage([1, 2, 4, 5, 2, 6, 2, 3, 4, 3]));
