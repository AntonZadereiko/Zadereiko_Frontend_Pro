// 1 Вивести на сторінку в один рядок через кому числа від 10 до 20.
// let result = '';
// for ( let i = 10; i < 21; i++){
//     result += i + ", ";
// }
// alert(result);

// 2 Вивести квадрати чисел від 10 до 20.
// let square = '';
// for ( let i = 10; i < 21; i++) {
//     square += i * i + ', ';
// }
// alert(square);

// 3 Вивести таблицю множення на 7.
//
// let table = '';
// for (let i = 1; i <= 10; i++){
//     table += i * 7 + ', ';
// }
// alert(table);

// 4 Знайти суму всіх цілих чисел від 1 до 15.

// let sum = 0;
// for (let i = 1; i <= 15; i++){
//     sum += i;
// }
// alert(sum);

// 5 Знайти добуток усіх цілих чисел від 15 до 35.

// let product = 1;
// for (let i = 15; i <= 35; i++) {
//     product *= i;
// }
// alert(product);

// 6 Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

// let middle = 0;
// for (let i = 1; i <= 500; i++) {
//     middle += i / 500;
// }
// alert(middle);

// 7 Вивести суму лише парних чисел в діапазоні від 30 до 80.

// let sumEven = 0;
// for (let i = 30; i <= 80; i++){
//     if (i % 2 !== 0) continue;
//     sumEven += i;
// }
// alert(sumEven);

// 8 Вивести всі числа в діапазоні від 100 до 200 кратні 3.

// for (let i = 102; i <= 200; i += 3){
//     console.log(i);
// }


// 9 Дано натуральне число. Знайти та вивести на сторінку всі його дільники.

let nums = 0;
let j = 0;

label:
for ( let i = 1; i <= j; i++) {
    for (let j = 1; j < i; j++ ){
        if (i % j === 0) {
            continue label;
        }
    }
}
alert(j);