const inputEl = $('#search');
const buttonEl = $('#button');
const apiKey = "";

function searchWeather(event){
    event.preventDefault();
    const cityText = inputEl.val();

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityText}&appid=${apiKey}&units=metric`

    fetch(url).then(function(response){
        if(response.ok) {
            response.json().then(function(data) {
                console.log(data)
                setWeather(data);
            })
        }
    })
}
function searchWeatherForecast(event){
    event.preventDefault();
    const cityText = inputEl.val();
    
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityText}&appid=${apiKey}&units=metric`

    fetch(url).then(function(response){
        if(response.ok) {
            response.json().then(function(data) {
                console.log(data);
            })
        }
    })
}


function setWeather(data){
    $('#name-date').text(data.name + " right now");
    $('#temp').text("Tempurature: "+ data.main.temp + " degrees");
    $('#wind').text("Wind: " + data.wind.speed + "mph");
    $('#humidity').text("Humidity: " + data.main.humidity + "%");
}



buttonEl.on('click', searchWeather);
buttonEl.on('click', )