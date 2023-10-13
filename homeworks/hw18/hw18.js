
let tableBody = document.getElementById('table-body');

// Лічильник для заповнення числами
let counter = 1;

// Зовнішній цикл для рядків (10 рядків)
for (let i = 0; i < 10; i++) {
    let row = document.createElement('tr');

    // Внутрішній цикл для стовпців (10 стовпців)
    for (let j = 0; j < 10; j++) {
        let cell = document.createElement('td');
        cell.textContent = counter;
        row.appendChild(cell);
        counter++;
    }

    tableBody.appendChild(row);
}