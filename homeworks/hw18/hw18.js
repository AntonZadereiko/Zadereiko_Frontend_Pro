
let tableBody = document.getElementById('table-body');

let counter = 1;

for (let i = 0; i < 10; i++) {
    let row = document.createElement('tr');
    for (let j = 0; j < 10; j++) {
        let cell = document.createElement('td');
        cell.textContent = counter;
        row.appendChild(cell);
        counter++;
    }

    tableBody.appendChild(row);
}