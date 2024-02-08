// https://www.codewars.com/kata/52fba66badcd10859f00097e

// cara 1
// function disemvowel(str) {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     str[i].match(/[aiueoAIUEO]/g) ? "" : (result += str[i]);
//   }
//   return result;
// }

// cara 2
function disemvowel(str) {
  return str.replace(/[aiueo]/gi, "");
}

console.log(disemvowel("This website is for losers LOL!"));
