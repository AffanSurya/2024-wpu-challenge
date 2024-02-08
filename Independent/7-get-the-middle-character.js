// https://www.codewars.com/kata/56747fd5cb988479af000028

// function getMiddle(s) {
//   let position;
//   let len;

//   if (s.length % 2 == 1) {
//     position = s.length / 2;
//     len = 1;
//   } else {
//     position = Math.ceil(s.length / 2 - 1);
//     len = 2;
//   }

//   return s.substring(position, len + position);
// }

function getMiddle(s) {
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 1 ? 1 : 2);
}

console.log(getMiddle("test"));
