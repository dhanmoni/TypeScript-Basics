var character = "mario";
var age = 20;
var isBlackBelt = true;
//age = '20' --cannot do this
age = 30; //--can do this.
//character = 20 -- cannot do this;
character = "luigi"; //--can do this;
//isBlackBelt = 'yes' --cannot do this
isBlackBelt = false; //-- can do this
var circ1 = function (diameter) {
    return diameter * Math.PI; //Math is build into javascript, so TS inherits it as TS is superset of JS
};
console.log(circ1("hello")); //doesnot give error directly.
var circ2 = function (diameter) {
    return diameter * Math.PI; //Math is build into javascript, so TS inherits it as TS is superset of JS
};
//console.log(circ2("hello")); //now gives an error.
console.log(circ2(7.5)); //now it works as expected!
