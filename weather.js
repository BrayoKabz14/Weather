const apiKey = "a9f3c05abd7fd72d2deb722254241d71"
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
let cityEL = document.querySelector(".city")
let tempEL = document.querySelector(".temp")
let humidityEL = document.querySelector(".humidity")
let windEl = document.querySelector(".wind-speed")
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
let wicon = document.querySelector(".w-icon")
let weatherEl = document.querySelector(".weather")
let err = document.querySelector(".error")

async function checkWeather(city) {
    const response = await fetch(apiURL + city +`&appid=${apiKey}`)
    if(response.status === 404){
        err.style.display = "block"
        weatherEl.style.display = "none"
    }else{
        let data = await response.json()
    console.log(data)

    cityEL.innerHTML = data.name
    tempEL.innerHTML =Math.round (data.main.temp) + "°c"
    humidityEL.innerHTML = data.main.humidity + "%"
    windEl.innerHTML =Math.round (data.wind.speed) + " km/h"

    if(data.weather[0].main === "Clouds"){
        wicon.src = "images/clouds.png"
    }
    else if(data.weather[0].main === "Rain"){
        wicon.src = "images/rain.png"
    }
    else if(data.weather[0].main === "Drizzle"){
        wicon.src = "images/drizzle.png"
    }
    else if(data.weather[0].main === "Mist"){
        wicon.src = "images/mist.png"
    }
    else if(data.weather[0].main === "Clear"){
        wicon.src = "images/sunny.png"
    }

    weatherEl.style.display = "block"
    err.style.display = "none"
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value)
})
checkWeather()