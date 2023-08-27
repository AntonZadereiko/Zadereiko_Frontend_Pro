// 1 Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).

let result = '';
for ( let i = 20; i <= 30; i += 0.5){
    result += i + ", ";
}
alert(result);

// 2 Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.

// let dollar = 27;
// let moreDollars = 0;
//
// for(let i = 10; i <= 100; i += 10 ){
//     moreDollars = dollar * i;
//     console.log(moreDollars);
// }

// 3 Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
//
// let number = 72;
// let n = '';
//
// for ( let i = 1; i <= 100; i++){
//     if ( i * i <= number){
//         n += i + ', ';
//     }
// }
// alert(n);

// 4 Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

// let integerNum = 13;
// let primeNum = true;
//         for (let i = 2; i < integerNum; i++) {
//             if (integerNum % i === 0) {
//                 primeNum = false;
//                 break;
//             }
//         }
// console.log(primeNum);

// 5 Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

// let number = 6561;
// let result = false;
//
// for ( let i = 1; i <= number; i++){
//     if ( 3 ** i === number ){
//         result = true;
//         break;
//     }
// }
// console.log(result);



