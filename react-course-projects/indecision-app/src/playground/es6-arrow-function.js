function square(x) {
  return x * x;
}
console.log(square(8));

// const squareArrow = x => {
//   return x * x;
// };
// console.log(squareArrow(8));

const squareArrow = x => x * x;
console.log(squareArrow(8));

const getFirstName = x => x.split(" ")[0];

console.log(getFirstName("Vivian Chiang"));
