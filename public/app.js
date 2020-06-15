// //Interface---
// interface IsPerson {
//   name: string;
//   age: number;
//   speak(a: string): void;
//   spend(a: number): number;
// }
// const me: IsPerson = {
//   name: "Dhan",
//   age: 19,
//   speak(text: string): void {
//     console.log(text);
//   },
//   spend(amount: number): number {
//     console.log("I spent", amount);
//     return amount;
//   },
//   //skills: [] --cannot do this;
// };
// console.log(me);
// let someone: IsPerson;
// const greetPerson = (person: IsPerson) => {
//   console.log("hello", person.name);
// };
// greetPerson(me);
import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payments.js";
import { ListTemplate } from "./classes/ListTemplate.js";
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice("yoshi", "web work", 2000);
// docTwo = new Payment("mario", "plumbing work", 500);
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);
// const invOne = new Invoice("mario", "work on mario website", 1000);
// const invTwo = new Invoice("luigi", "work on luigi website", 1500);
// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// invoices.forEach((inv) => {
//   console.log(inv.client, inv.amount, inv.format());
// });
const form = document.querySelector(".new-item-form");
//console.log(form.children)
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
//list template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    // if (type.value === "invoice") {
    //   doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    // } else {
    //   doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    // }
    //USING TUPLES----
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    //----------------
    list.render(doc, type.value, "end");
});
//TUPLES --
let tup = ["ryu", 25, true];
tup[0] = "ken"; //can do this
// tup[0] = true --cannot do this
//GENERICS-----
// const addUID = <T extends object>(obj: T) => {
//   let uid = Math.floor(Math.random() * 100);
//   return { ...obj, uid };
// };
// const addUID = <T extends { name: string }>(obj: T) => {
//   let uid = Math.floor(Math.random() * 100);
//   return { ...obj, uid };
// };
// let docOne = addUID({ name: "mario", age: 30 });
// console.log(docOne);
//with interfaces
// interface Resource<T> {
//   uid: number;
//   resourceName: string;
//   data: T;
// }
// const docThree: Resource<object> = {
//   uid: 1,
//   resourceName: "person",
//   data: { name: "dhan" },
// };
// const docFour: Resource<string[]> = {
//   uid: 1,
//   resourceName: "shoppingList",
//   data: ["bread", "milk"],
// };
// console.log(docThree, docFour);
//ENUMS-----
// enum ResourceType {
//   BOOK,
//   AUTHOR,
//   FILM,
//   DIRECTOR,
//   PERSON,
// }
// interface Resource<T> {
//   uid: number;
//   resourceType: ResourceType;
//   data: T;
// }
// const docOne: Resource<object> = {
//   uid: 1,
//   resourceType: ResourceType.BOOK,
//   data: { title: "name of the wind" },
// };
// const docTwo: Resource<object> = {
//   uid: 10,
//   resourceType: ResourceType.PERSON,
//   data: { name: "Yoshi" },
// };
// console.log(docOne, docTwo);
