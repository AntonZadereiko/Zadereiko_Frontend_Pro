
const length = parseInt(prompt("Введіть довжину масиву:"));
let array = [];

for (let i = 0; i < length; i++) {
    let element = prompt("Введіть елемент масиву #" + (i + 1) + ":");
    array.push(element);
}
console.log("Створений масив:", array);

let sortedArray = array.slice().sort(function(a, b) {
    return a - b;
});
console.log("Відсортований масив:", sortedArray);

if ( sortedArray.length >= 4) {
     sortedArray.splice(1, 3);
    console.log(sortedArray);
} else {
    console.log('Введіть довжину масиву більшу ніж 3');
}
