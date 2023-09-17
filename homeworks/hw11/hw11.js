

const sum = (function () {
    let startingValue = 0;

    return function (value) {
        startingValue += value;
        return startingValue;
    };
})();

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));