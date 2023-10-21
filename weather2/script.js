const apiKey = "49502698a3a15530372072602c3acc82"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const weatherIcon = document.querySelector('.weather__img')
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".disclose").style.display = "none";
    }
    else {
        var data = await response.json()

      const yy =  document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
        document.querySelector('.realfeel').innerHTML = Math.round(data.main.feels_like)   + "°c";    
        document.querySelector('.pressure').innerHTML = data.main.pressure + "psi";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = './assests/clouds.png'
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = './assests//clear.png'
        } else if (data.weather[0].main == 'Rain') {
            weatherIcon.src = 'rain.png'
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = './assests//drizzle.png'
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = './assests//mist.png'
        } else if (data.weather[0].main == "Snow") {
            weatherIcon.src = './assests//snow.png'
        }

        document.querySelector(".error").style.display = "none";
        document.querySelector(".disclose").style.display = "block";

    }



}
searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
})



