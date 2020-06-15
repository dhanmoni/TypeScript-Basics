class Invoice {
  // readonly client: string; //readonly allows only to read the value outside or inside the class but not change it.
  // private details: string; //private only allows to read and write value within the class but not outside the class
  // public amount: number; //can read and write anywhere.

  // constructor(c: string, d: string, a: number) {
  //   this.client = c;
  //   this.details = d;
  //   this.amount = a;
  // }

  //---SHORTHAND--- WHEN USING ACCESS MODIFIERS

  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}
  //---SHORTHAND---

  format() {
    return `${this.client} owes ₹${this.amount} for ${this.details}`;
  }
}

const invOne = new Invoice("mario", "work on mario website", 1000);
const invTwo = new Invoice("luigi", "work on luigi website", 1500);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach((inv) => {
  console.log(inv.client, inv.amount, inv.format());
});

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
