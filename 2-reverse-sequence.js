// 2/366
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d

// cara 1
// const reverseSeq = (n) => {
//   const arr = [];
//   for (let i = n; i > 0; i--) {
//     arr.push(i);
//   }
//   return arr;
// };

// cara 2
// const reverseSeq = (n) => {
//   return Array(n)
//     .fill()
//     .map((el, i) => i + 1)
//     .reverse();
// };

// cara 3
const reverseSeq = (n) => [...Array(n)].map((el, i) => i + 1).reverse();
console.log(reverseSeq(5));
