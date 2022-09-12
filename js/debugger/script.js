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
module.exports = { regularFunction, regularFunctionWithStrictMode, personObj };
