// ** memoized function
function memoizedFunction() {
    let cache = {};

    return function (val) {
        if (val in cache) {
            return cache[val];
        }

        console.log('Do something that take too long time!');
        for (let i = 0; i < 10000; i++) {}
        cache[val] = val ** 8;
        return cache[val];
    };
}

const somethingTakeTooMuchTime = memoizedFunction();

let startTimeWithoutCache = performance.now();
somethingTakeTooMuchTime(2);
let endTimeWithoutCache = performance.now();

let startTimeWithCache = performance.now();
somethingTakeTooMuchTime(2);
let endTimeWithCache = performance.now();


console.log(`without cache => ${endTimeWithoutCache - startTimeWithoutCache} milliseconds`);
console.log(`with cache => ${endTimeWithCache - startTimeWithCache} milliseconds`);
