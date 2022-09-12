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

const myCar = new Car("red");

// ** 3-------------------------- argument object ---------------------------
// ** in regular object arguments is special array like object that show input of functions when it called
function regularFunction() {
  console.log(arguments);
}

regularFunction(4, 5, 34);
// ?? in arrow function arguments object is like this keyword that resolved lexically and arguments is arguments of parent function
function anotherRegularFunction() {
  const arrowFunction = () => {
    console.log(arguments);
  };

  return arrowFunction("first", "second");
}

anotherRegularFunction(1, 23, 4423);

// ** 4------------------------ implicit return --------------------------------
// arrow function can return without return keyword
const simpleOneLineArrowFunction = () => "arrow function without return keyword";

simpleOneLineArrowFunction();

// ** 5 ----------------------- function as method of object -------------------
class FunctionClass {
  constructor(name) {
    this.name = name;
  }

  logThis() {
    console.log(this);
  }

  logThisArrow = () => {
    console.log(this);
  };
}

const instanceOfFunctionClass = new FunctionClass("mike");
console.log(instanceOfFunctionClass.logThis());

setTimeout(instanceOfFunctionClass.logThis, 1000); // when we pass regular function of class in another function this is not this of class
// ** for this we must bind that regular method to object of class like bellow
// setTimeout(instanceOfRegularFunctionClass.logThis.bind(instanceOfRegularFunctionClass), 1000)
// ** but in arrow function this is always refer to the parent function (this of class(syntax sugar of constructor function))
setTimeout(instanceOfFunctionClass.logThisArrow, 100)