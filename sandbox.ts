//ARRAYS--
let names = ["mario", "luigi", "yoshi"];

// names = 'hello' -- doesnot work

names.push("toad"); // works;
//names.push(20) --doesnot work
// names[0] = 3 --doesnot work;

let numbers = [10, 20, 30, 40];
numbers.push(24); //works;
//numbers.push('dhan')-- doesnot work

let mixed = ["ken", 4, "chun-li", 10];

mixed.push("hello"); //works;
mixed.push(10); //works too;
mixed[2] = "ryu";

//OBJECTS---
let ninja = {
  name: "mario",
  belt: "black",
  age: 30,
};

// ninja.age = '30' --doesnot work;
ninja.age = 40; //works
// ninja.skills = ['fighting', 'sneaking'] --doesnot work--cannot add additional properties..

ninja = {
  name: "yoshi",
  belt: "orange",
  age: 30,
};

//this doesnot work --
// ninja = {
//   name:'yoshi',
//   belt: 'orange',
//   //age : 30
//    skills: []
// }
