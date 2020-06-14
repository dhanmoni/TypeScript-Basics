//explicit types--
var character;
var age;
var isLoggedIn;
// age = 'luigi' --doesnot work
age = 30; //fine
// isLoggedIn = 26 --doesnot work
isLoggedIn = true; //fine
//Arrays--
var ninjas;
//initialize with something--
var numbers = [];
// ninjas = [10, 20] --doesnot work;
ninjas = ["yoshi", "mario"];
numbers.push(10); //works
//union types--
var mixed = [];
mixed.push(10);
mixed.push("hello");
mixed.push(true);
console.log(mixed); //[10, "hello", true]
var uid;
uid = 1033; //works
uid = "1099"; //works
//objects--
var ninjaOne;
ninjaOne = {
    name: "mario",
    age: 20
};
// ninjaOne = 'hello' --doesnot work
// ninjaOne = [] --this.work for type object
var ninjaTwo;
ninjaTwo = {
    name: "mario",
    age: 20
};
