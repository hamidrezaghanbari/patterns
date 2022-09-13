const {
    regularFunction,
    regularFunctionWithStrictMode,
    personObj,
    Person,
    objectOfArrowFunction,
    simpleRegularFunction,
    PersonArrow,
    simpleWrapperOfArrowFunction,
    ClassWithFunctions,
} = require('../this');

describe('[this keyword] Regular function(function declaration and function expression)', () => {
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

describe('[this keyword] Arrow function', () => {
    describe('When call during simple invocation', () => {
        test('Then `this` should be refer to the this of parent function', () => {
            expect(objectOfArrowFunction.regularFunction()()).toMatchObject(objectOfArrowFunction);
        });
    });
});

describe('[arguments object] Regular function(function declaration and function expression)', () => {
    describe('When call regular function in any situation', () => {
        test('Then `arguments` should be object of arguments of function when it called', () => {
            expect(simpleRegularFunction(3, 4, 'another')).toMatchObject({
                0: 3,
                1: 4,
                2: 'another',
            });
        });
    });
});

describe('[arguments object] Arrow function', () => {
    describe('When call arrow function in any situation', () => {
        test('Then `arguments` should be arguments of parent function', () => {
            expect(simpleWrapperOfArrowFunction(3, 4, 'another')).toMatchObject({
                0: 3,
                1: 4,
                2: 'another',
            });
        });
    });
});

describe('[instantiation object of construction] Regular function', () => {
    describe('When call with new keyword', () => {
        test('Then new object is create', () => {
            expect(() => new Person('Mike')).not.toThrow();
        });
    });
});

describe('[instantiation object of construction] Arrow function', () => {
    describe('When call with new keyword', () => {
        test('Then error must thrown', () => {
            expect(() => new PersonArrow('Mike')).toThrow(Error);
        });
    });
});

describe('[method of class] Regular function', () => {
    describe('When we call method of class by object.method like that method is concat to object not separate it from that', () => {
        test('Then this is refer to object of method', () => {
            const obj = new ClassWithFunctions('regular function');
            expect(obj.regularFunction()).toMatchObject(obj);
        });
    });
    describe('When we call method of class by separate it from object mean pass method of object to variable', () => {
        test('Then this is refer global object or undefined in strict mode', () => {
            const obj = new ClassWithFunctions('regular function');
            const method = obj.regularFunction;
            // to prevent of this we must bind method of class to class object
            // ** const method = obj.regularFunction.bind(obj)
            expect(method()).toBe(undefined);
        });
    });
});

describe('[method of class] Arrow function', () => {
    describe('When we call method of class in any kind of invocation', () => {
        test('Then this is parent function(class instance) this', () => {
            const obj = new ClassWithFunctions('regular function');
            expect(obj.arrowFunction()).toMatchObject(obj);
        });
    });
});
