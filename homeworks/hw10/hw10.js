// 1 Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

// function calcAverage(arr) {
//     const numElements = arr.filter(item => typeof item === 'number');
//
//     if (numElements.length === 0) {
//         return 0;
//     }
//     const sum = numElements.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
//     const averageNum = sum / numElements.length;
//
//     return averageNum;
// }
// const arr = [4, 'Ukraine', 12, 'football', 8];
// const averageNum = calcAverage(arr);
// console.log('Середнє арифметичне числових елементів:', averageNum);

// 2 Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.
const x = prompt("Введіть перше число:");
const znak = prompt("Введіть операцію (+, -, *, /, % або ^):");
const y = prompt("Введіть друге число:");

doMath(x, znak, y);
function doMath (x, znak, y) {
    x = parseFloat(x);
    y = parseFloat(y);
  if (isNaN(x) || isNaN(y)) {
      console.log('Введіть коректні числа');
      return;
  }
  let result = 0;
  switch (znak){
      case '+' :
          result = x + y;
          break;
      case '-':
          result = x - y;
          break;
      case '*':
          result = x * y;
          break;
      case '/':
          if (y === 0) {
              console.log("Ділити на нуль не можна.");
              return;
          }
          result = x / y;
          break;
      case '%':
          result = x % y;
          break;
      case '^':
          result = Math.pow(x, y);
          break;
      default:
          console.log("Невідомий оператор. Введіть + , - , * , / , % або ^.");
          return;
  }
    console.log(`Результат ${x} ${znak} ${y} = ${result}`);
}