// ** anonymous function and named function

// ?? named function is like bellow
// ** there are three types of functions
// ** function declaration and function expression is regular function

// ** function declaration
function addDeclaration(a, b) {
  return a + b;
}

addDeclaration(4, 5);

// ** function expression
const addExpression = function (a, b) {
  return a + b;
};

addExpression(4, 5);

// ** arrow function (introduced in es6)
const addArrow = (a, b) => a + b;

addArrow(5, 6);

// ** difference between regular and arrow function
// ** 1------------------------ this keyword ----------------------------
// ** in regular javascript function this is depend on where function is invoke
// ** 1-  in simple invocation value of this is equal to global object (in strict mode this equal to undefined)
function logThis() {
  console.log(this);
}
logThis();

function logThisInStrictMode() {
  "use strict";
  console.log(this);
}

logThisInStrictMode();

// ** 2- During a method invocation the value of this is the object owning the method
const obj = {
  name: "owner object",
  method() {
    console.log(this);
  },
};

obj.method();

// ** 3- during indirect call like call , apply this is equal to object that we pass to call or apply or bind method
const person = {
  name: "mike",
};
function logThisWithCall() {
  console.log(this);
}

logThisWithCall.call(person);

// ** 4- during constructor function invocation with new keyword:
// ** During a constructor invocation using new keyword this equals to the newly created instance:
function Ball(name) {
  this.name = name;
  console.log(this);
}

const ball = new Ball("Euro 2023 ball");

// ?? arrow function does not create own execution context (unlike regular function that create own execution context)
// ** no matter how and where we call arrow function this in arrow function is always equal to this in parent(outer) function
// ** this resolved lexically is one of the great features of arrow functions. When using callbacks inside methods you are sure
// ** the arrow function doesn't define its own this: no more const self = this or callback.bind(this) workarounds.
const newPlayer = {
  name: "Jack",
  run() {
    console.log(this);

    const play = () => console.log(this);
    return play;
  },
};

console.log(newPlayer.run()());
// ?? call and apply and bind not affect to this of arrow function, arrow function this is always resolved lexically
// ** Contrary to a regular function, the indirect invocation of an arrow function using myArrowFunc.call(thisVal)
// ** or myArrowFunc.apply(thisVal) doesn't change the value of this: the context value is always resolved lexically.

// ** 2-------------------------- construct object--------------------------
// ** the regular function can easily construct objects.
// ** when we invoke new with regular function new instance is create
// ** we can not create new instance with arrow function

function Car(color) {
  this.color = color;
}

const myCar = new Car('red')
