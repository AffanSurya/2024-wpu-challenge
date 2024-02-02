// 8/366
// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077

// cara 1
// var countSheep = function (num) {
//   return [...Array(num)].map((_, i) => `${i + 1} sheep...`).join("");
// };

// cara 2
var countSheep = (num) =>
  [...Array(num)].map((_, i) => `${i + 1} sheep...`).join("");

console.log(countSheep(3));
