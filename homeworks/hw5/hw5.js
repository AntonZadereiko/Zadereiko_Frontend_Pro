
const birth= prompt('Який у вас рік народження?');
const city = prompt('В якому місті ви живете?');
const sport = prompt('Який у вас улюблений вид спорту?');

const age = (2023 - birth);
let userCity = '';
let userSport = '';

if (city === 'Київ'){
    userCity = 'Ви живете в Україні!';
} else if ( city === 'Вашингтон') {
   userCity = 'Ви живете в США!';
} else if ( city === 'Лондон'){
   userCity = 'Ви живете у Великобританії!';
} else {
    userCity = 'Ви живете у місті ' + city;
}

if (sport === 'футбол'){
    userSport = 'Круто! Хочеш стати як Мессі?';
} else if ( sport === 'тенніс') {
    userSport = 'Круто! Хочеш стати як Джокович?';
} else if ( sport === 'бокс'){
    userSport = 'Круто! Хочеш стати як Усик?';
} else {
    userSport = 'Чудовий вибір!';
}

alert(`Ваш вік ${age}. \n${userCity} \n${userSport}`);

if (birth == null){
    alert(`Шкода, що Ви не захотіли ввести свою дату народження(`);
} else if (city == null){
    alert(`Шкода, що Ви не захотіли ввести своє місце проживання(`);
}  else if (sport == null){
    alert(`Шкода, що Ви не захотіли ввести свій улюблений вид спорту(`);
}