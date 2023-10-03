

// 1 Знайти суму та кількість позитивних елементів.
let arr =  [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
const isPositive = (n) => n > 0;
const isEven = (n) => n % 2 === 0;
const sumReducer = (acc, n) => acc + n;
const posNums = arr.filter(isPositive);
const posSum = posNums.reduce(sumReducer);

const positiveNumbers = arr.filter((n) => n > 0);
const sum = positiveNumbers.reduce((sum, n) => sum + n, 0);
const result = arr.filter((n) => n > 0)
    .reduce((acc, n) => {
        acc.sum += n;
        acc.count += 1;
        return acc;
    }, {sum: 0, count: 0});

console.log("Сума позитивних елементів: ", result.sum);
console.log("Кількість позитивних елементів: ", result.count);


// 2 Знайти мінімальний елемент масиву та його порядковий номер.
const min = Math.min.apply(null, arr);
const indexOfMinElement = arr.indexOf(min);

console.log("Мінімальний елемент: " + min);
console.log("Порядковий номер мінімального елемента: " + indexOfMinElement);


// 3 Знайти максимальний елемент масиву та його порядковий номер.
const max = Math.max.apply(null, arr);
const indexOfMaxElement = arr.indexOf(max);
console.log("Максимальний елемент: " + max);
console.log("Порядковий номер максимального елемента: " + indexOfMaxElement);


// 4 Визначити кількість негативних елементів.


const negativeElsNumber = arr.filter((n) => n < 0).length;
console.log( 'Кількість негативних елементів : ' + negativeElsNumber);


// 5 Знайти кількість непарних позитивних елементів.

const countPositive = posNums.filter((n) =>!isEven(n)).length;
console.log('Кількість непарних позитивних елементів : ' + countPositive);


// 6 Знайти кількість парних позитивних елементів.

const posEvenNums = posNums.filter((isEven));
const posEvenNumsLength = posEvenNums.length;
console.log('Кількість парних позитивних елементів : ' + posEvenNumsLength);

// 7 Знайти суму парних позитивних елементів.

const sumPosEven = posEvenNums.reduce(sumReducer);
console.log("Сума парних позитивних елементів: " + sumPosEven);

// 8 Знайти суму непарних позитивних елементів.

const sumNegOdd = arr.filter(n => !isPositive(n) && !isEven(n)).reduce(sumReducer);
console.log("Сума непарних позитивних елементів: " + sumNegOdd);

// 9 Знайти добуток позитивних елементів.

const posProduct = posNums.reduce((product, n) => product * n);
console.log( 'Добуток позитивних елементів : ' + posProduct);

// 10 Знайти найбільший серед елементів масиву, остальні обнулити.

const maxAndDelete = arr.map((n) => (n === max ? n : 0 ));
console.log('Найбільший серед елементів масиву і інші обнулив : ',maxAndDelete);


