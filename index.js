let loadingScreen = document.querySelector(".card2")

const sendRequest = async(e)=>{
    if(!e) return
    loadingScreen.style.display = "block"    
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=d3309dcfba48b32fd6754c240df28345`
    const req = await fetch(api)
    const result = await req.json()
    console.log(result)

    let weatherIcon = document.querySelector("#weather-icon")
    let weatherMain = document.querySelector("#weather-main")


    switch(result.weather[0].main){
        case "Haze" : 
        weatherIcon.className = "bi-cloud-fog"
        weatherMain.textContent = result.weather[0].main
        break;

        case "Rain" :
        if(result.weather[0].description == "moderate rain"){
            weatherIcon.className = "bi-cloud-rain"
            weatherMain.textContent = result.weather[0].description
            break;
        }else{
            weatherIcon.className = "bi-cloud-rain"
            weatherMain.textContent = result.weather[0].main
            break;
        }     
        

        case "Clear" :
        weatherIcon.className = "bi-brightness-high";
        weatherMain.textContent = result.weather[0].main
        break;

        case "Thunderstorm" : 
        weatherIcon.className = "bi-cloud-lightning"
        weatherMain.textContent = result.weather[0].main
        break;

        case "Clouds" : 
        weatherIcon.className = "bi-clouds"
        weatherMain.textContent = result.weather[0].main
        break;
        
    }


    document.querySelector("#city-name").textContent = `${result.name}, ${result.sys.country}`
    document.querySelector("#date-time").textContent = new Date().toLocaleString()
    document.querySelector("#humidity").textContent = result.main.humidity
    document.querySelector("#wind").textContent = `${(result.wind.speed * 1.609).toFixed(2)} kmph`
    document.querySelector("#temp").textContent = `${convertTemp(result.main.temp)}° C`
    document.querySelector("#min-temp").textContent = `${convertTemp(result.main.temp_min)}° C`
    document.querySelector("#max-temp").textContent = `${convertTemp(result.main.temp_max)}° C`
    document.querySelector("#pressure").textContent = convertTemp(result.main.pressure)







    loadingScreen.style.display = "none"    

}

function convertTemp(temp){
    let temperature = (temp - 273.15).toFixed(2)
    return temperature
}
// console.log(convertTemp(301))
sendRequest("Nagpur")

