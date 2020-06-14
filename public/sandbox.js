"use strict";
var greet;
greet = function () {
    console.log("hello world");
};
// greet = 'hello' --doesnot work;
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
//c is optional if it has '?' infront of it -- c?:number| string;
//we can send default paremeter by using = sign -- c: number | string = 10
add(5, 20); // 25
// add('helo', 29) -- doesnot work
var minus = function (a, b) {
    return a - b;
};
var result = minus(10, 8);
// result = 'helo' --doesnot work
//using explicit return type on function
var multilpy = function (a, b) {
    return a * b;
};
var result2 = multilpy(10, 8);
