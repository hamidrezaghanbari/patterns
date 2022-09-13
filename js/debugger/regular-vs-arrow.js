function regularFunction() {
    console.log(arguments);
}

function wrapperArrowFunction() {
    const arrowFunction = () => {
        console.log(arguments);
    };

    return arrowFunction;
}

module.exports = { regularFunction, wrapperArrowFunction };
