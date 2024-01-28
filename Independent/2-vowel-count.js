// https://www.codewars.com/kata/54ff3102c1bad923760001f3

// function getCount(str) {
//   return str.match(/[a,e,i,o,u]/g) ? str.match(/[a,e,i,o,u]/g).length:0;
// }

function getCount(str) {
  return (str.match(/[aeiou]/g) || []).length;
}

console.log(getCount("mnxmxnxbc"));
// console.log(getCount("o a kak ushakov lil vo kashu kakao"));
