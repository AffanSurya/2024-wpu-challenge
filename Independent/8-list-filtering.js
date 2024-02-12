// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd

// function filter_list(l) {
//   let arr = [];

//   l.map((val) => (Number.isInteger(val) ? arr.push(val) : ""));

//   return arr;
// }

function filter_list(l) {
  return l.filter((v) => typeof v == "number");
}

console.log(filter_list([1, 2, "aasf", "1", "123", 123]));
