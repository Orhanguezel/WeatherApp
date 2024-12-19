import WeatherAPI from "./weatherAPI.js";

const container = document.querySelector(".container");
const searchInput = document.querySelector("#searchInput");
const cityName = document.querySelector(".cityName");
const degree = document.querySelector(".degree");
const desc = document.querySelector(".desc");
const icon = document.querySelector(".icon img");

const weatherApi = new WeatherAPI();

searchInput.addEventListener("keypress", findWeatherInfo);

function findWeatherInfo(e) {
    if (e.keyCode == '13') {
        const searchedCity = searchInput.value.trim();
        weatherApi.getWeatherInfo(searchedCity)
            .then((data) => {
                if (data.cod === "404") {  
                    alert("City not found");
                } else {
                    displayInfos(data);
                }
            })
            .catch((error) => {
                console.log(error);
                alert("An error occurred while fetching the weather data.");
            });
    }
}

function displayInfos(data) {
    cityName.textContent = data.name;
    degree.textContent = `${Math.round(data.main.temp)}°`;
    desc.textContent = data.weather[0].description;
    icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    clearInputs();
}


function clearInputs() {
    searchInput.value = "";
}
