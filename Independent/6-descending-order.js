// https://www.codewars.com/kata/5467e4d82edf8bbf40000155

function descendingOrder(n) {
  return Number(
    String(n)
      .split("")
      .map((num) => Number(num))
      .sort((a, b) => b - a)
      .join("")
  );
}

console.log(descendingOrder(123456789));
