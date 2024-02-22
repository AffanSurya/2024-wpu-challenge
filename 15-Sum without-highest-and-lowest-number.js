// 15/366
//https://www.codewars.com/kata/576b93db1129fcf2200001e6

// cara 1
// function sumArray(array) {
//   if (array == null || array == []) return 0;

//   let result = 0;
//   let arrSort = array.sort((a, b) => a - b);

//   for (let i = 1; i < arrSort.length - 1; i++) {
//     result += arrSort[i];
//   }

//   return result;
// }

// cara 2
function sumArray(array) {
  if (array == null || array == []) return 0;

  return array
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((acc, cur) => acc + cur);
}

console.log(sumArray([6, 2, 1, 8, 10]));
