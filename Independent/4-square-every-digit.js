// https://www.codewars.com/kata/546e2562b03326a88e000020

// cara 1
// function squareDigits(num) {
//   let n = [...(num + "")];
//   for (let i = 0; i < n.length; i++) {
//     n[i] = n[i] ** 2;
//   }

//   return Number(n.join(""));
// }

// cara 2
function squareDigits(num) {
  return Number(
    ("" + num)
      .split("")
      .map((val) => val * val)
      .join("")
  );
}

console.log(squareDigits(2172));
