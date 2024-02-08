// 12/366
// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151

// cara 1
// function arrayPlusArray(arr1, arr2) {
//   let result = 0;

//   for (let i = 0; i < arr1.length; i++) {
//     result += arr1[i] + arr2[i];
//   }
//   return result;
// }

// cara 2
// function arrayPlusArray(arr1, arr2) {
//   let result = 0;

//   for (let i = 0; i < arguments.length; i++) {
//     for (let j = 0; j < arguments[i].length; j++) {
//       result += arguments[i][j];
//     }
//   }
//   return result;
// }

// cara 3
function arrayPlusArray(arr1, arr2) {
  return [...arr1, ...arr2].reduce((acc, curr) => acc + curr);
}
console.log(arrayPlusArray([100, 200, 300], [400, 500, 600]));
