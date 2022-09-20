// ** every time we call function javascript create something named execution context
function sayMyName() {
    return 'Hamidreza Ghanbari';
}

function innerFunction() {
    function nestedFunction() {}
    return sayMyName();
}

function outerFunction() {
    return innerFunction();
}

outerFunction();
// **[global] it is the first execution context that runs (initially the javascript create execution context named global) global()
// ** when last line of javascript code is run and finish global execution context is pop up from stack
// **[outerFunction] javascript see the () crate execution context and push it onto the stack(call stack)
// **[innerFunction] after that when javascript see another () it create another execution context and push it onto the stack
// **[sayMyName] after that again when javascript see another () it create another execution context and push it onto the stack
// ** after all function call are returned value stack pop that execution context
// ** it mean in the stack we see

// ** sayMyName()
// ** innerFunction()
// ** outerFunction()
// ** global()

// ?? whenever we say code is run in javascript we better say code is run inside execution context
// ** these two things that we talk about are done in the creation phase
// ** first thing that javascript engine does is to create global execution context
// ** and give us two things 1- Global Object (in the browser it is window and in the node js it is global) 2- this
// ** and javascript assign global object to the this keyword
// ** NOTE: when we create new variable or function in the global execution context it assign to the global object and we can access to it by global object

// !! we have two phase in javascript 1- creation phase 2- execution phase

// ** lexical environment is simply mean where you write code (where we write code is important in javascript)
// ** we can think of lexical environment as little universes that created every time we create an execution context
// ?? when we say compiler lexical analysis mean checking to see where the words(codes variables, functions) are written and location.
// ?? and those words are belong to which universe
// !! in above codes lexical environment mean where each function is written (what part of universe is it?)
// !! outerFunction is written to global execution context, same as sayMyName same as innerFunction
// !! but nestedFunction is written in the another universe

// ****************************************** NOTE: lexical mean at compile time where is code written **************************************
// ** we say nestedFunction is lexically inside innerFunction (innerFunction world)
// ** by lexical environment compiler can know that function access to what things
// ** in javascript every time we write function we create lexical environment(universe)
// ************************** execution context tell you which lexical environment is currently running *************************************

// ************* SOOOOOOOOOOOOOOOOO important ********************************
// ** in javascript our lexical scope(available data + variables where the function was defined) determines our available variables.
// ** not where the function is called (dynamic scope)

// ** one thing that missing in creation phase is Hoisting
// ** Hoisting mean moving variable and function declaration to the top of environment that they are defined
// ** during creation phase javascript engine allocating memory for the variables and function that it sees in your code before it execute it
// ** variables are partially hoisted for example var a = 44 ==> var a = undefined is hoisted
// ** but function declaration is fully hoisted function func() {console.log('f')} is fully hoisted and can run and return value before it defined
// ?? nice tip for always remembering hoisting in javascript is when javascript see [var or function] in start of line it decide to hoist it
// ?? other things are not hoisted like them for example let or const hoisted by value of uninitialized mean we cant call them before definitaion of them
// ?? we occur error
// !! **************** anytime we call function there is creation phase and execution phase *******************
// ** advice : never use hoisting because code not predictable ==> instead of use var use let and const and instead of use function declaration use function
// ** expression

// ** NOTE: in global execution context we have global object and this (refer to global object) but in function execution context
// ** we have this and arguments(special object that hold arguments properties like {0: 'arg1', 1: 'arg2'})

// ** arguments

// ** scope chain ==> each context(each world has link to outside context (outer world) link to its parent)
// ** the word lexically mean where the function or word written
// ** each function has variable environment, and that function with scope chain connect to parent scope and again and again 


// ** IIFE : the function in the IIFE is function expression not function declaration because not started by function started by (
// ** benefit of IIFE is when function inside IIFE is function expression and not function declaration is not assign to global object
// ** and all properties declared inside of it are scoped inside that and remove concern of name collision and only all variables are
// ** accessible inside that but not outside
(function() {

})()