const form = document.getElementById("registrationForm");
form.addEventListener('submit', function (event){
    event.preventDefault();
    const firstName = document.getElementById("first_name").value;
    const lastName = document.getElementById("last_name").value;
    const birthDate = document.getElementById("birthdate").value;
    const gender = document.querySelector('input[name = "gender"]:checked').value;
    const city = document.getElementById("city").value;
    const address = document.getElementById("address").value;
    let languages = [];
    const languageCheckboxes = document.querySelectorAll('input[name="languages[]"]:checked');

    for (let i = 0; i < languageCheckboxes.length; i++) {
        languages.push(languageCheckboxes[i].value);
    }

    const table = document.createElement('table');
    const tbody = document.createElement('tbody');


    const data = [
        { label: "First Name: ", value: firstName },
        { label: "Last Name: ", value: lastName },
        { label: "Date of Birth: ", value: birthDate },
        { label: "Gender: ", value: gender },
        { label: "City: ", value: city },
        { label: "Address: ", value: address },
        { label: "Languages: ", value: languages.join(", ") },
    ];

    data.forEach(function (item) {
        const row = tbody.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.textContent = item.label;
        cell2.textContent = item.value;
    });

    table.appendChild(tbody);

    const userDataDiv = document.getElementById('userData');
    userDataDiv.innerHTML = '';

    userDataDiv.appendChild(table);
});
