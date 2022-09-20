// ** one of the use of bind method is function currying
// ** TODO: function currying is use for 

function doSomething(base, depend) {
    return base * depend
}

const doSomethingWith10 = doSomething.bind(this, 10)
const doSomethingWith20 = doSomething.bind(this, 20)


doSomethingWith10(30)
doSomethingWith20(40)


// ** context vs scope
// ** scope is function based thing (visibility of the variables)
// ** scope is the variable access of the function when it is invoked
// ** context is other hand is more about object based thing
// ** context is what is the value of this keyword which reference to the object that owns that current executing code

