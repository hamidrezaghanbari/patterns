// ** prevents thing that we should never use them in javascript
// ** in order to help javascript engine to optimize code

// ** 1- eval function 2- for in loop 3- arguments property 4- with 5- delete keyword

// !! 1- eval function ==> never use

// !! 2- arguments ==> use ...args for function instead

// !! 3- for in loop ==> use Object.keys instead

// !! 4- with ==>

// !! 4- delete keyword ==> because of hidden class issue

// ** things that make above functionality less optimize is 1- hidden classes 2- inline caching

// ** 1- inline caching is done by the compiler
// ** inline caching mean the method is executing repeatedly compiler can cache method to value of result
function doSomething(val) {
    return val ** val;
}

for (let i = 0; i < 1000; i++) {
    // doSomething(3);
    // ** inline caching mean javascript compiler replace above code to '27' value of method
}

// ** 2- hidden classes 
// ** hidden class in under the hood used by compiler  
// ** mean like this bellow when we assign in different order js confused and think maybe this two object is belong to
// ** different hidden class and even when we use delete keyword js think this object cant understand this is belong to 
// ** same hidden class
// !! one another thing is don't use delete keyword because of clean code
function Person(name, family) {
    this.name = name;
    this.family = family;
}

const mike = new Person('Mike', 'Person');
const john = new Person('John', 'Doe');

// ** this is less optimal because of hidden class
mike.age = 34;
mike.gender = 'male';

john.gender = 'male';
john.age = 44;

// ** this is difference between 4 line in above and bellow
// ** these bellow code is more optimal because of order
mike.age = 34;
mike.gender = 'male';

john.gender = 'male';
john.age = 44;

// ** web assembly is binary executable format
