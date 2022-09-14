// ** unMemoized function
function doSomethingHeavy(val) {
    for (let i = 0; i < 10000; i++) {}
    return val ** 8;
}

function unMemoizedFunction(val) {
    for (let i = 0; i < 20; i++) {
        console.time(i+ ' try');
        doSomethingHeavy(val);
        console.timeEnd(i+ ' try');
    }
}

unMemoizedFunction(4)

