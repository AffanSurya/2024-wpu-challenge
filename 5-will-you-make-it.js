// 5/366
// https://www.codewars.com/kata/5861d28f124b35723e00005e

// cara 1
// const zeroFuel = (distanceToPump, mpg, fuelLeft) =>  mpg * fuelLeft >= distanceToPump ? true : false;

// cara 2
const zeroFuel = (distanceToPump, mpg, fuelLeft) =>
  mpg * fuelLeft >= distanceToPump;

console.log(zeroFuel(50, 25, 2));
console.log(zeroFuel(100, 50, 1));
