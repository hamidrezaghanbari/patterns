// ** outside of any function this is equal to undefined
var myThis = this;

function regularFunction() {
    myThis = this;

    function innerRegularFunction() {
        myThis = this;
        return myThis;
    }

    return { innerRegularFunction, thisValue: myThis };
}

function regularFunctionWithStrictMode() {
    'use strict';

    myThis = this;

    return myThis;
}

const personObj = {
    name: 'mike',
    run() {
        console.log('run');
    },
    method() {
        myThis = this;
        return myThis;
    },
};

function Person(name) {
    this.name = name;
    this.getThis = function () {
        myThis = this;

        return myThis;
    };
}

const objectOfArrowFunction = {
    name: 'object of arrow function',
    regularFunction() {
        const arrowFunction = () => {
            return this;
        };
        return arrowFunction;
    },
};

function simpleRegularFunction() {
    return arguments;
}

function simpleWrapperOfArrowFunction() {
    const arrowFunction = () => {
        return arguments;
    };

    return arrowFunction(2, 4, 5);
}

const PersonArrow = () => {};

class ClassWithFunctions {
    constructor(name) {
        this.name = name;
    }

    regularFunction() {
        return this;
    }

    arrowFunction = () => this;
}


module.exports = {
    regularFunction,
    regularFunctionWithStrictMode,
    personObj,
    Person,
    objectOfArrowFunction,
    simpleRegularFunction,
    simpleWrapperOfArrowFunction,
    PersonArrow,
    ClassWithFunctions,
};
