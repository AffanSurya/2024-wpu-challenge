// 7/366
// https://www.codewars.com/kata/5513795bd3fafb56c200049e

// cara 1
// function countBy(x, n) {
//   let z = [];

//   for (let i = 0; i < n; i++) {
//     z.push(x * (i + 1));
//   }
//   return z;
// }

// cara 2
// function countBy(x, n) {
//   return [...Array(n)].map((el, i) => (i + 1) * x);
// }

// cara 3
const countBy = (x, n) => [...Array(n)].map((_, i) => (i + 1) * x);

console.log(countBy(2, 5));
