var namevar = "Andrew";
var namevar = "cool";
console.log("nameVar", namevar);

let nameLet = "Jen";
nameLet = "Julie";
console.log("nameLet", nameLet);

const nameConst = "Frank";
console.log("nameConst", nameConst);

// Block scoping
var fullName = "vivv C";
let firstName;
if (fullName) {
  firstName = fullName.split(" ")[0];
}
console.log(firstName);
