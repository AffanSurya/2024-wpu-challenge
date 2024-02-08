// 11/366
// https://www.codewars.com/kata/5672a98bdbdd995fad00000f

// cara 1
// const rps = (p1, p2) => {
//   if (p1 === p2) {
//     return "Draw!";
//   } else if (
//     (p1 === "scissors" && p2 === "paper") ||
//     (p1 === "rock" && p2 === "scissors") ||
//     (p1 === "paper" && p2 === "rock")
//   ) {
//     return "Player 1 won!";
//   } else {
//     return "Player 2 won!";
//   }
// };

// cara 2
const rps = (p1, p2) => {
  const rule = {
    scissors: "paper",
    rock: "scissors",
    paper: "rock",
  };

  return p1 === p2 ? "Draw!" : `Player ${rule[p1] === p2 ? 1 : 2} won!`;
};

console.log(rps("rock", "rock"));
