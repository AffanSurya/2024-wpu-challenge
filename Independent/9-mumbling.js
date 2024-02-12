// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

function accum(s) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < i + 1; j++) {
      if (j === 0) {
        result += s[i].toUpperCase();
      } else {
        result += s[i].toLowerCase();
      }
    }

    if (i < s.length - 1) {
      result += "-";
    }
  }

  return result;
}

// function accum(s) {
//   return s
//     .split("")
//     .map((val, i) => val.toUpperCase() + val.toLowerCase().repeat(i))
//     .join("-");
// }

console.log(accum("abcd"));
