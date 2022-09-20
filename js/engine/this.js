// ** this keyword
// ** this is refer to the object that function is property of that function
console.log(this)

function func() {
    // this refer to global object
    console.log(this)
}

function funcStrictMode() {
    'use strict'
    // this in strict mode is undefined
    console.log(this)
}

func()

funcStrictMode()

// ** TIP: ES Module by default use strict mode

// ** this is always says: who called the function, by that this is meaning
// ?? if you want to know what is this mean and what is this see which object call that function
// ?? obj.a() this is obj mean each object call the function this in function is that object
// ** this always say who called me(which object called me)
const a = function () {
    console.log(this, 'a')
    const b = function () {
        console.log(this, 'b')
        const c = {
            name: 'hamid',
            log: () => {
                console.log(this, 'c')
            },
            logF: function () {
                console.log(this, 'c log f')
            }
        }

        c.log() // this is equal to c
        c.logF() // this is equal to c
    }

    b() // is equal to window.a().b() mean this in b is equal to object that call a and b
}

a() // is equal to window.a()

const object = {
    name: 'object',
    getVal: function () {
        console.log('this in getVal', this)

        const innerGetVal = function () {
            console.log('this in innerGetVal', this)
        }

        const innerArrow = () => {
            console.log('this in arrow function', this)
        }

        const innerFuncWithBind = function () {
            console.log('this in function with bind method', this)
        }

        // this in innerGetVal is not refer to object because object is not call innerGetVal
        // in javascript this is by default refer to global object except when object is call that function
        // and in this case when we call innerGetVal function this is refer to global object by default
        innerGetVal()
        innerArrow()

        const innerBind = innerFuncWithBind.bind(this)

        innerBind()
    }
}

// this in getVal is refer to object object because object is call getVal function
object.getVal()

// !! very important note: every things in javascript is lexical scope except this keyword that is dynamic scope
// ?? to resolve this problem that this is dynamically scoped there are two ways 1- arrow function(introduced by es6) 2- use methods like bind, call, apply

// ** arrow function is lexically bound => mean when we use arrow function this is object that soround the arrow function
// ** bind method for example say hey function this inside you is refer to object that i passed to you 


// ** bind method is useful for function borrowing
const human = {
    name: 'Hamid',
    health: false,
    sayMyName: () => {
        return this.name
    },
    sayMyNameFunction: function () {
        return this.name
    },
    isHealthy: function (word) {
        return word + '  ' + this.health
    }
}

const dog = {
    name: 'Mike',
    health: true
}
// ** dog borrow function from human function
// ** bind return new function but call and apply imidiatly run that function 
// ?? call and bind use case is for borrowing function from another object
// ?? bind method is useful for call function in certain context this keyword, second use of bind method is for function currying
const dogHealthChecker = human.isHealthy.bind(dog)
console.log(dogHealthChecker())
console.log(human.isHealthy.call(dog, 'you are'))
console.log(human.isHealthy.apply(dog, ['you are']))

const m = human.sayMyName.bind(dog) // call, bind, apply, not work with arrow function
const c = human.sayMyNameFunction.bind(dog) // call, bind, apply, not work with arrow function

console.log(m())
console.log(c())



// ** example code for find max of array
const array = [4, 2, 3];

function getMaxNumber(arr) {
    let result = 'array is empty'
    arr.forEach((item, idx) => {
        idx !== 0 ? result = item > result ? item : result : result = item
    })
    return result
}

console.log(getMaxNumber(array))