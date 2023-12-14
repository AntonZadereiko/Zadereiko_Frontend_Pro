// function getWeather() {
//     const xhr = new XMLHttpRequest();
//     const city = "LVIV";
//     const apiKey = "5d066958a60d315387d9492393935c19";
//    // const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`;
//    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`;
//     xhr.open("GET", url, true);

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState == 4 && xhr.status == 200) {
//             var data = JSON.parse(xhr.responseText);

    
//             document.getElementById("temperature").innerHTML = `${data.main.temp}°C`;
//             document.getElementById("pressure").innerHTML = `${data.main.pressure} hPa`;
//             document.getElementById("description").innerHTML = `${data.weather[0].description}`;
//             document.getElementById("humidity").innerHTML = `${data.main.humidity}%`;
//             document.getElementById("wind-speed").innerHTML = `${data.wind.speed} м/с`;
//             document.getElementById("wind-direction").innerHTML = `${data.wind.deg}°`;
//             document.getElementById("weather-icon").src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
//         }
//     };
// // why problem in xhr.send() ?
//     xhr.send();
// }

// getWeather();
function getWeather() {
    const city = "LVIV";
    const apiKey = "5d066958a60d315387d9492393935c19";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById("temperature").innerHTML = `${data.main.temp}°C`;
            document.getElementById("pressure").innerHTML = ` ${data.main.pressure} hPa`;
            document.getElementById("description").innerHTML = `${data.weather[0].description}`;
            document.getElementById("humidity").innerHTML = ` ${data.main.humidity}%`;
            document.getElementById("wind-speed").innerHTML = ` ${data.wind.speed} м/с`;
            document.getElementById("wind-direction").innerHTML = ` ${data.wind.deg}°`;
            document.getElementById("weather-icon").src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        })
        .catch(error => console.error('Помилка при отриманні погоди:', error));
}

getWeather();