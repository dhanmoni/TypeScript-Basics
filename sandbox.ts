let age: any;
//let age: any = 25;

age = true; //works;
age = "hello"; //works;
age = {
  name: "mario",
  age: 20,
}; //works

let mixed: any[] = [];
mixed.push(10);
mixed.push("mario");
mixed.push(true);
//[10, mario, true]

let ninja: {
  name: any;
  age: any;
};
ninja = { name: "yoshi", age: 25 }; //works
ninja = { name: 25, age: "yoshi" }; //works too
