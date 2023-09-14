
function createSum () {
    let sum = 0;
    function addNumber (value) {
        sum += value;
        return sum;
    }
    return addNumber;
}

const sum = createSum();

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));