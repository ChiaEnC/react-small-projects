// object destructuring
// const person = {
//   name: "Vivian",
//   age: 24,
//   location: {
//     city: "Taipei",
//     temp: 93
//   }
// };
// const { name: firstName = "Anonymous", age } = person;
// const { city, temp: temperature } = person.location;
// console.log(`${city} is ${temperature}`);
// console.log(`${firstName} is ${age}`);
// const book = {
//   title: "Ego is the Enemy",
//   author: "Vivian",
//   publisher: {
//     name: "Penguine"
//   }
// };
// const { name: publisherName } = book.publisher;
// console.log(publisherName);

// array destructuring

const address = [];
const [, state = "America", place, country] = address;
console.log(`state = ${state} `);
