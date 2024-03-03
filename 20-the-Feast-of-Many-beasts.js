// 20/366
// https://www.codewars.com/kata/5aa736a455f906981800360d

// cara 1
// function feast(beast, dish) {
//     return beast[0] == dish[0] && beast.slice(-1) === dish.slice(-1);
// }

// cara 2
function feast(beast, dish) {
    return beast.at(0) == dish.at(0) && beast.at(-1) === dish.at(-1);
}

console.log(feast("great blue heron", "garlic naan"));
