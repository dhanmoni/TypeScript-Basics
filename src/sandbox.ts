let greet: Function;

greet = () => {
  console.log("hello world");
};
// greet = 'hello' --doesnot work;

const add = (a: number, b: number, c: number | string = 10) => {
  console.log(a + b);
  console.log(c);
};
//c is optional if it has '?' infront of it -- c?:number| string;
//we can send default paremeter by using = sign -- c: number | string = 10

add(5, 20); // 25
// add('helo', 29) -- doesnot work

const minus = (a: number, b: number) => {
  return a - b;
};
let result = minus(10, 8);
// result = 'helo' --doesnot work

//using explicit return type on function
const multilpy = (a: number, b: number): number => {
  return a * b;
};
let result2 = multilpy(10, 8);
