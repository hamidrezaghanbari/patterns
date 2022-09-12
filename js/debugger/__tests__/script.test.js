const { regularFunction, regularFunctionWithStrictMode, personObj, Person } = require('../script');

describe('Regular function(function declaration and function expression)', () => {
    describe('When call during simple invocation', () => {
        test('and strict mode is off, Then `this` should be global object (globalThis)', () => {
            // ** this even in any depth of function this is equal to global object
            const { thisValue, innerRegularFunction } = regularFunction();
            expect(thisValue).toMatchObject(globalThis);
            expect(innerRegularFunction()).toMatchObject(globalThis);
        });
        test('and strict mode is on, Then `this` should be undefined', () => {
            expect(regularFunctionWithStrictMode()).toBe(undefined);
        });
    });

    describe('When call during method invocation, ', () => {
        test('Then `this` should object that own the method', () => {
            expect(personObj.method()).toMatchObject(personObj);
        });
    });

    describe('When call during methods like apply, call, bind, ', () => {
        test('Then `this` should object that we pass to those methods', () => {
            const regularFunctionBindByPersonObj = regularFunction.bind(personObj);
            expect(regularFunctionBindByPersonObj().thisValue).toMatchObject(personObj);
        });
    });

    describe('When call during constructor function (function that call with new keyword)', () => {
        test('Then `this` should be instance object that we create with constructor function', () => {
            const person = new Person('Mike');

            expect(person.getThis()).toMatchObject(person);
        });
    });
});
