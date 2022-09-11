// ** call
// ** Call is a function that helps you change the context of the invoking function.
// ** In layperson's terms, it helps you replace the value of this inside a function
// ** with whatever value you want.
const person = {
  name: "mike",
  play() {
    console.log("he can play");
  },
};

function runner(speed, location) {
  console.log(`${this.name} run ${speed} fast in ${location}`);
  console.log(this);
}

function Person(name) {
  this.name = name;
  runner.call(this, 100, "Paris");
}

runner.call(person, 200, "london");

// ** by newing constructor function new context is created
const me = new Person("John");

// ?? if we invoke function with call() without thisObj javascript refer global object to that

// ** apply function
// ** apply is just like call method just in one difference
// ** second argument is array of function argument
runner.apply(person, [200, "london"]); // it is similar to line 22

// ** bind method
// ** The bind function creates a copy of a function with a new value to
// ** the this present inside the calling function
const newRunner = runner.bind(person, 30, "Barcelona");
console.log(newRunner);
