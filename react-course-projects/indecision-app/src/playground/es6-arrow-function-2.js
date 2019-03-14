// const add = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// console.log(add(55, 1));

const user = {
  name: "Vivi",
  cities: ["New York", "Taipei"],
  printPlaceLived() {
    // const that = this;
    return this.cities.map(city => this.name + " has lived in " + city);

    // this.cities.forEach(function(city) {
    //   console.log(that.name + "has lived in " + city);
    // });
  }
};
console.log(user.printPlaceLived());

const multiplier = {
  numbers: [1, 3, 5, 7],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map(number => number * this.multiplyBy);
  }
};
console.log(multiplier.multiply());
