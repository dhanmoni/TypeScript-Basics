"use strict";
// const anchor = document.querySelector('a');
// console.log(anchor.href) // warning- Object is possibly null
// const anchor = document.querySelector('a');
// if(anchor) {
//   console.log(anchor.href)
// }
var anchor = document.querySelector("a");
console.log(anchor.href); // warning goes away by putting the ! mark
//Type casting--
var formOne = document.querySelector("form");
var form = document.querySelector(".new-item-form");
//console.log(form.children)
var type = document.querySelector("#type");
var tofrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
