// 9/366
// https://www.codewars.com/kata/577a98a6ae28071780000989

// cara 1
// var min = function (list) {
//   return list.reduce((a, b) => Math.min(a, b));
// };

// var max = function (list) {
//   return list.reduce((a, b) => Math.max(a, b));
// };

// cara 2
var min = (list) => Math.min(...list);
var max = (list) => Math.max(...list);

console.log(min([-52, 56, 30, 29, -54, 0, -110]));
console.log(max([42, 54, 65, 87, 0]));
