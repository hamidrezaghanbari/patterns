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