// 8/366
// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077

// var countSheep = function (num) {
//   return [...Array(num)].map((_, i) => `${i + 1} sheep...`).join("");
// };

var countSheep = (num) =>[...Array(num)].map((_, i) => `${i + 1} sheep...`).join("");

console.log(countSheep(3));
