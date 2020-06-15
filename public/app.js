"use strict";
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes \u20B9" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice("mario", "work on mario website", 1000);
var invTwo = new Invoice("luigi", "work on luigi website", 1500);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
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
