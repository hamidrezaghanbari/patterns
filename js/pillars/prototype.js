// ** inheritance is an object getting access to the properties and methods of another object
const array = []
// ** we know that an Array is wrapped by an Array object and an Array object has lots of properties and methods that exist in 
// ** __proto__

console.log(array.__proto__) // ** this is the base array that every array is create from

console.log(array.__proto__.__proto__) // ** prototype chain === javascript object prototype

console.log(array.__proto__.__proto__.__proto__) // ** prototype of object prototype is null and null has not any prototype

// ** inheritad

function func() {

}

console.log(func.__proto__) // ** this is the base function that all functions are create from

console.log(func.__proto__.__proto__) // ** object prototype 



const obj = {}

console.log(obj.__proto__) // ** this is base object that every object come from that


console.log(obj.__proto__.__proto__) // ** its null


// ** we can manipulate the prototype chain of object

const animal = {
    eat() {
        console.log('animal can eat')
    }
}

const bird = {
    fly() {
        console.log('bird can fly')
    }
}


bird.__proto__ = animal


bird.eat()

// ** now bird prototype chain is like bellow
console.log(bird.__proto__)
console.log(bird.__proto__.__proto__)
console.log(bird.__proto__.__proto__.__proto__)


// ** you should never use __proto__ to change prototype of object because of bad performance (performance reason)
// ** there are another ways for inheritance
// ** one way is liek bellow
const human = {
    name: 'name of me'
}

const me = Object.create(human)
console.log(me.__proto__ === human)


// ?? very important note: each object has the special property name prototype that has some properties
// ?? and prototype property of each object has one special property named __proto__ this property is a pointer
// ?? to the top level inhertance prototype property
// ?? for example: multiply.__proto__ === Function.prototype
// ?? for example: Function.__proto__ === Object.prototype
// ?? for example: Object.__proto__ === null
// ?? for example: array.__proto__ === Array.prototype

// ** native function is Function
function multiply() {

}


console.log(multiply.__proto__) // ** its  equal to Function.prototype
/*  */

// ?? Object is standard built in object (it is Object constructor )

// !! only functions have the prototype property
// !! other objects has not prototype property and it mean obj.__proto__ refer to the top level object if top level of object
// !! is object/*  */
// !! we never use prototype property of function only when we use constructor function we use it



// ** exercise method 1
Date.prototype.lastYear = function () {
    return this.getFullYear() - 1
}

console.log(new Date('1900-10-10').lastYear())


// ** exercise method 2
Array.prototype.map = function (cb) {
    const result = []
    for (let i = 0; i < this.length; i++) {
        result.push(this[i] + ' hahahaaaa it change it')
    }
    return result
}

[5, 4, 6]?.map()