// 14/366
// https://www.codewars.com/kata/55cbd4ba903825f7970000f5

function getGrade(s1, s2, s3) {
  const score = (s1 + s2 + s3) / 3;
  return score < 60 ? "F" : score < 70 ? "D" : score < 80 ? "C" : score < 90 ? "B" : score <= 100 ? "A" : "";
}

console.log(getGrade(70, 70, 100));
