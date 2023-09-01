// 1 Знайти суму та кількість позитивних елементів.
// let arr =  [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let sum = 0;
// let evenNum = 0;
//
// for (let element of arr) {
//     if (element > 0) {
//         sum += element;
//         evenNum++;
//     }
// }
//
// console.log("Сума позитивних елементів: " + sum);
// console.log("Кількість позитивних елементів: " + evenNum);

// 2 Знайти мінімальний елемент масиву та його порядковий номер.
// let arr =  [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let minElement = arr[0];
// let ordinalNumber = 0;
// for ( let i = 0; i < arr.length; i++){
//     if (arr[i] < minElement) {
//         minElement = arr[i];
//         ordinalNumber = i;
//     }
// }
// console.log("Мінімальний елемент: " + minElement);
// console.log("Порядковий номер мінімального елемента: " + ordinalNumber);

// 3 Знайти максимальний елемент масиву та його порядковий номер.
// let arr =  [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let maxElement = arr[0];
// let ordinalNumber = 0;
// for ( let i = 0; i < arr.length; i++){
//     if (arr[i] > maxElement) {
//         maxElement = arr[i];
//         ordinalNumber = i;
//     }
// }
// console.log("Максимальний елемент: " + maxElement);
// console.log("Порядковий номер максимального елемента: " + ordinalNumber);

// 4 Визначити кількість негативних елементів.
// let arr =  [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let negativeNum = 0;
// for ( let element of arr){
//     if ( element < 0) {
//         negativeNum++;
//     }
// }
// console.log( 'Кількість негативних елементів : ' + negativeNum);

// 5 Знайти кількість непарних позитивних елементів.
// let arr =  [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let positiveNumber = 0;
//
// for ( let element of arr) {
//     if ( element > 0 && element % 2 !== 0){
//         positiveNumber++;
//     }
// }
// console.log('Кількість непарних позитивних елементів : ' + positiveNumber + ';');

// 6 Знайти кількість парних позитивних елементів.
// let arr =  [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let evenNumber = 0;
//
// for ( let element of arr) {
//     if ( element > 0 && element % 2 === 0){
//         evenNumber++;
//     }
// }
// console.log('Кількість парних позитивних елементів : ' + evenNumber + ';');

// 7 Знайти суму парних позитивних елементів.
// let arr =  [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let sumEven = 0;
// for ( let element of arr) {
//     if ( element > 0 && element % 2 === 0) {
//         sumEven += element;
//     }
// }
// console.log("Сума парних позитивних елементів: " + sumEven);

// 8 Знайти суму непарних позитивних елементів.
// let arr =  [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let sumOdd = 0;
// for ( let element of arr) {
//     if ( element > 0 && element % 2 !== 0) {
//         sumOdd += element;
//     }
// }
// console.log("Сума непарних позитивних елементів: " + sumOdd);

// 9 Знайти добуток позитивних елементів.
// let arr =  [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let divPositive = 1;
// for ( let element of arr) {
//     if ( element > 0) {
//         divPositive *= element;
//     }
// }
// console.log( 'Добуток позитивних елементів : ' + divPositive);

// 10 Знайти найбільший серед елементів масиву, остальні обнулити.
// let arr =  [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let maxElement = arr[0];
// for (let element of arr) {
//     if (element > maxElement) {
//         maxElement = element;
//     }
// }
// console.log('Найбільший серед елементів масиву : ' + maxElement);
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== maxElement) {
//         arr[i] = 0;
//     }
// }
// console.log("Масив після обнулення : " + arr);


