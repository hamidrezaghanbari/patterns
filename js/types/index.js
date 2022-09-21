// ** we have 7 types in javascript
// ** primitive type ==> the data that show the simple value in memory we just save value of these variables
// number like 2
// string like 'mike'
// boolean like true
// undefined // undefined is absence of definition
// null // null is absence of value
// Symbol like Symbol('name') is used for object properties because it is unique

// ** non-primitive type ==> reference type does not save actual value in memory it save reference to them
// object like {name: 'mike'} ['array'] function(){}
// ** typeof null is object
console.log(typeof null)
console.log(typeof [])
console.log(typeof function () { })
// ** array and function is type of object
function makeSomething() {
    return null;
}

// ** we can add properties to the function it mean function is object
makeSomething.name = 'name of the function'

console.log(makeSomething.name)

// ** standard build in objects
// ** Infinity
// ** NaN
// ** null
// ** globalThis

// ** every thing in javascript is an object
// ** for example if i write true ==> it convert to Boolean(true) Boolean is a built in object of javascript
// ** and because of that we can write true.toString() 
// ** all primitive has object wrapper 'name' ==> String('name') and because of that we can write 'name'.length
// ** Number(44) 44.toString()
// ** wrapper objects are help us to use methods like toString()


// ** primitive type is imutable we can change them for change them for example we can really modify them
// ** it mean we have something like bellow
var value = 10
var reference = { name: 'reference' }
// because object is pass by reference reference and referenceCopy is point to same location in memory
var referenceCopy = reference
referenceCopy.family = 'family '
// by modify referenceCopy reference is change because this two variables are point to same location in memory
console.log(reference)
var valueCopy = value
// because primitive types are pass by value ==> valueCopy and value are point to different location in memory

function changeParam(val) {
    // !! its big mistake to modify of function param
    val = null
}

changeParam(value)
console.log(value)
changeParam(reference)
console.log(reference)

// ** for copy new object from existing object 
const newObj = Object.assign({}, reference)
const newObj2 = { ...reference }