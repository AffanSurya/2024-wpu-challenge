// 6/366
// https://www.codewars.com/kata/5556282156230d0e5e000089

// cara 1
// function DNAtoRNA(dna) {
//   const arr = dna.split("");
//   let rna = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == "T") {
//       arr[i] = "U";
//     }
//     rna.push(arr[i]);
//   }

//   return rna.join("");
// }

// cara 2
const DNAtoRNA = (dna) => dna.split("T").join("U");

// cara 3
// function DNAtoRNA(dna) {
//   return dna.replace(/T/g, "U");
// }

console.log(DNAtoRNA("TTT"));
