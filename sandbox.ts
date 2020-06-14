//explicit types--
let character: string;
let age: number;
let isLoggedIn: boolean;

// age = 'luigi' --doesnot work
age = 30; //fine

// isLoggedIn = 26 --doesnot work
isLoggedIn = true; //fine

//Arrays--
let ninjas: string[];
//initialize with something--
let numbers: number[] = [];

// ninjas = [10, 20] --doesnot work;
ninjas = ["yoshi", "mario"];
numbers.push(10); //works

//union types--
let mixed: (string | number | boolean)[] = [];

mixed.push(10);
mixed.push("hello");
mixed.push(true);
console.log(mixed); //[10, "hello", true]

let uid: string | number;
uid = 1033; //works
uid = "1099"; //works

//objects--
let ninjaOne: object;

ninjaOne = {
  name: "mario",
  age: 20,
};
// ninjaOne = 'hello' --doesnot work
// ninjaOne = [] --this.work for type object

let ninjaTwo: {
  name: string;
  age: number;
};

ninjaTwo = {
  name: "mario",
  age: 20,
};
