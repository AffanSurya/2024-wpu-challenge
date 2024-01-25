// 3/366
// https://www.codewars.com/kata/59ca8246d751df55cc00014c

// cara 1
// function hero(bullets, dragons) {
//   if (dragons * 2 <= bullets ) {
//     return true;
//   } else {
//     return false;
//   }
// }

// cara 2
// function hero(bullets, dragons) {
//   return dragons * 2 <= bullets ? true : false;
// }

// cara 3
const hero = (bullets, dragons) => (dragons * 2 <= bullets ? true : false);
console.log(hero(100, 40));
