// ** IIFE imidiatly invoke function
// ** by IIFE we can place all variable in local scope that we can not pollute global scope (namespace collision problem is solve) 
// ** IIFE is function expression because it not start by function keyword it start by ()()
// ** all variables are inside IIFE are scoped local in IIFE function
const prototypeName = 'prototype name';


(function () {
    var name = 'IIFE function'
})()

// ** Aliasing global variables
// ** Creating private variables and functions
// ** Asynchronous functions in loops



















