"use strict";
var Invoice = /** @class */ (function () {
    // readonly client: string; //readonly allows only to read the value outside or inside the class but not change it.
    // private details: string; //private only allows to read and write value within the class but not outside the class
    // public amount: number; //can read and write anywhere.
    // constructor(c: string, d: string, a: number) {
    //   this.client = c;
    //   this.details = d;
    //   this.amount = a;
    // }
    //---SHORTHAND--- WHEN USING ACCESS MODIFIERS
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    //---SHORTHAND---
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
invoices.forEach(function (inv) {
    console.log(inv.client, inv.amount, inv.format());
});
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
