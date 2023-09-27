class Student {
    constructor(firstName, lastName, dateBirth) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateBirth = dateBirth;
        this.marks = [];
        this.attendance = new Array(25);
    }
     addMark (mark){
        if (mark > 0 && mark < 100){
            this.marks.push(mark);
        } else {
            console.log('Оцінка повинна бути від 0 до 100');
        }
     }
     present() {
         const index = this.attendance.indexOf(null);
         if (index !== -1) {
             this.attendance[index] = true;
         } else {
             console.log('Масив відвідуваності вже заповнений');
         }
     }
     absent () {
        const index = this.attendance.indexOf(null);
        if (index !== -1) {
            this.attendance[index] = false;
        } else {
            console.log('Масив відвідуваності вже заповнений')
        }
     }
     age () {
        const today = new Date();
        return today.getFullYear() - this.dateBirth;
    }
    averageMark () {
        if(this.marks === 0) {
            return 0;
        }
        const sum = this.marks.reduce((total, mark) => total + mark, 0);
        return sum / this.marks.length;
    }
    summary() {
        const avgMark = this.averageMark();
        const avgAttendance = this.attendance.filter((status) => status === true).length / 25;
        if (avgMark > 90 && avgAttendance > 0.9){
            return 'Молодець!';
        } else if (avgMark < 90 || avgAttendance < 0.9) {
            return 'Добре, але можна краще!';
        } else {
            return 'Редиска!'
        }
    }
}
const student1 = new Student("Антон", "Задерейко", 1999);
const student2 = new Student("Бенджамін", "Франклін", 2000);

student1.addMark(95);
student1.addMark(88);
student2.addMark(99);
student2.addMark(97);



student1.present();
student1.absent();
student2.present();
student2.present();



console.log(`${student1.firstName} ${student1.lastName} (вік: ${student1.age()} років)`);
console.log(`Середній бал: ${student1.averageMark()}`);
console.log(`Підсумок: ${student1.summary()}`);

console.log(`${student2.firstName} ${student2.lastName} (вік: ${student2.age()} років)`);
console.log(`Середній бал: ${student2.averageMark()}`);
console.log(`Підсумок: ${student2.summary()}`);