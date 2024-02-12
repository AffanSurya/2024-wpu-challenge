// 13/366
// https://www.codewars.com/kata/5bb904724c47249b10000131

// cara 1
// function points(games) {
//   let point = 0;
//   for (let i = 0; i < games.length; i++) {
//     if (games[i].split(":")[0] > games[i].split(":")[1]) {
//       point += 3;
//     } else if (games[i].split(":")[0] < games[i].split(":")[1]) { // if else ini tidak perlu karena akan diitambah 0
// point += 0;
//     } else {
//       point += 1;
//     }
//   }
//   return point;
// }

// cara 2
function points(games) {
  return games.reduce((acc, [x, _, y]) => (x > y ? 3 : x < y ? 0 : 1) + acc, 0);
}

console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]));
