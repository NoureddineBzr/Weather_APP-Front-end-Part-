const apiKey = "64883c757aaf4a62ffc79b081b638c4b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".searchCity input");
const searchBtn = document.querySelector(".searchCity button");
const wicon = document.querySelector(".w-icon");

// Define the default city
const defaultCity = "Beni Mellal";

// Function to fetch weather data
async function checkWeather(city) {
    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        const data = await response.json();

        // Update UI with weather data
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
        document.querySelector(".feels-like").innerHTML = "Feels like " + data.main.feels_like + "°C";

        // Update weather icon based on weather condition
        const weather = data.weather[0].main;
        if (weather == "Clouds") {
            wicon.src = "images/clouds.png";
        } else if (weather == "Clear") {
            wicon.src = "images/clear.png";
        } else if (weather == "Rain") {
            wicon.src = "images/rain.png";
        } else if (weather == "Drizzle") {
            wicon.src = "images/drizzle.png";
        } else if (weather == "Mist") {
            wicon.src = "images/mist.png";
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

// Event listener for search button click
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

// Load weather for default city on page load
checkWeather(defaultCity);
