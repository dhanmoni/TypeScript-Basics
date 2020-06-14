"use strict";
//let greet: Function;
//Function Signature--
//example 1
var greet;
greet = function (name, greeting) {
    console.log(name + " says " + greeting);
};
//example 2
var calc;
calc = function (num1, num2, action) {
    if (action === "add")
        return num1 + num2;
    else
        return num1 - num2;
};
//this fn must match the function signature,
//that is why we need an extra else so that we return a number even if
//the 'if block' is not executed.
//example 3
var logDetails;
logDetails = function (ninja) {
    console.log(ninja.name + " is " + ninja.age + " years old");
};
var logDetailsWithAlias;
logDetailsWithAlias = function (ninja) {
    console.log(ninja.name + " is " + ninja.age + " years old");
};
logDetails({ name: "luigi", age: 30 });
logDetailsWithAlias({ name: "mario", age: 10 });
