const place = prompt('Привіт, звідки ви родом?');
const name = prompt('Як вас звати?');
const age = prompt('Скільки вам років?');
alert('Вітаю ' + name + ' ! \nВаш вік '  + age + ' ! Чудове місце ' + place + '!'   );



// 2 task

const number = window.prompt("Введіть 5-значне число :");
if (number.length !==5) {
    alert("Шкода, але ви ввели не 5-значне число. Спробуйте знову")
} else {
    const numbers = number.split("").join(" ");
    alert("Ваше число : " + numbers)
}
