//let greet: Function;

//Function Signature--

//example 1
let greet: (a: string, b: string) => void;

greet = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
};

//example 2

let calc: (a: number, b: number, c: string) => number;

calc = (num1: number, num2: number, action: string) => {
  if (action === "add") return num1 + num2;
  else return num1 - num2;
};
//this fn must match the function signature,
//that is why we need an extra else so that we return a number even if
//the 'if block' is not executed.

//example 3

let logDetails: (obj: { name: string; age: number }) => void;

logDetails = (ninja: { name: string; age: number }) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
};
// USING TYPE ALIASES
type person = { name: string; age: number };
let logDetailsWithAlias: (obj: person) => void;

logDetailsWithAlias = (ninja: person) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
};

logDetails({ name: "luigi", age: 30 });
logDetailsWithAlias({ name: "mario", age: 10 });
