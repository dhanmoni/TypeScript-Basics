// const anchor = document.querySelector('a');

// console.log(anchor.href) // warning- Object is possibly null

// const anchor = document.querySelector('a');
// if(anchor) {
//   console.log(anchor.href)
// }
const anchor = document.querySelector("a")!;

console.log(anchor.href); // warning goes away by putting the ! mark

//Type casting--

const formOne = document.querySelector("form")!;

const form = document.querySelector(".new-item-form") as HTMLFormElement;
//console.log(form.children)

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
