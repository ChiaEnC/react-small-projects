import ReactDOM from "react-dom";
import React from "react";
import IndecisionApp from "./components/IndecisionApp";

ReactDOM.render(<IndecisionApp options={[]} />, document.getElementById("app"));

// class OldSyntax {
//   constructor() {
//     this.name = "Mike";
//     this.getGreeting = this.getGreeting.bind(this);
//   }
//   getGreeting() {
//     return `hi I'm ${this.name}`;
//   }
//   getHi() {
//     return "hi";
//   }
// }
// const oldSyntax = new OldSyntax();
// const getHi = oldSyntax.getHi;
// const getGreeting = oldSyntax.getGreeting;

// console.log(getHi());
// console.log(getGreeting());

// ---- newSyntax ----
// class NewSyntax {
//   name = "Jen";
//   getGreeting = () => {
//     return `Hi. My name is ${this.name}`;
//   };
// }
// const newSyntax = new NewSyntax();
// const getGreeting = newSyntax.getGreeting;
// console.log(getGreeting());
