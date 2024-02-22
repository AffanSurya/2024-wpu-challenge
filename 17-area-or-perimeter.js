// 17/366
// https://www.codewars.com/kata/5ab6538b379d20ad880000ab

const areaOrPerimeter = (l, w) => (l === w ? l * w : l + l + w + w);

console.log(areaOrPerimeter(6, 10));
