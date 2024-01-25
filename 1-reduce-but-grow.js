// function grow(x) {
//   let result = 1;
//   //   cara 1
//   //   x.forEach((element) => {
//   //     result *= element;
//   //   });

//   //   cara 2
//   for (const element of x) {
//     result = result * element;
//   }
//   return result;
// }

// function grow(x) {
//   const result = x.reduce((acc, crr) => acc * crr, 1);

//   return result;
// }

const grow = (x) => x.reduce((acc, crr) => acc * crr, 1);

console.log(grow([4, 1, 1, 1, 4]));
