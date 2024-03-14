const inputEl = $('#search');
const buttonEl = $('#button');
const apiKey = "8711bd59c68c354f16fbda5d3363ba0f";

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
                for(let i = 0; i < 5; i++){
                    setWeatherForecast(data,i);
                }
                console.log(data);
            })
        }
    })
}


function setWeather(data){
    $('#name-date').text(data.name + " right now");
    determineWeatherIcon(data.weather[0].icon,"");
    $('#temp').text("Tempurature: "+ data.main.temp + "F");
    $('#wind').text("Wind: " + data.wind.speed + "mph");
    $('#humidity').text("Humidity: " + data.main.humidity + "%");
}

function setWeatherForecast(data, a){
    b = (a*8)+4;
    $(`#date${a}`).text(dayjs(data.list[b].dt_txt).format("M-D"));
    determineWeatherIcon(data.list[b].weather[0].icon, a);
    $(`#temp${a}`).text("Tempurature: "+data.list[b].main.temp +"F");
    $(`#wind${a}`).text("Wind: "+data.list[b].wind.speed+"mph");
    $(`#humidity${a}`).text("Humidity: "+data.list[b].main.humidity+"%");
}
function determineWeatherIcon(data,a){
    const currentIcon = $(`#icon${a}`);
    if(data === "11d"){
        currentIcon.attr("src", "./assets/images/11d@2x.png");
    }else if(data === "11n"){
        currentIcon.attr("src", "./assets/images/11d@2x.png");
    } else if(data === "09d"){
        currentIcon.attr("src", "./assets/images/09d@2x.png");
    } else if(data === "09n"){
        currentIcon.attr("src", "./assets/images/09d@2x.png");
    } else if(data === "10n"){
        currentIcon.attr("src", "./assets/images/10n@2x.png");
    } else if(data === "10d"){
        currentIcon.attr("src", "./assets/images/10d@2x.png");
    } else if(data === "13d"){
        currentIcon.attr("src", "./assets/images/13d@2x.png");
    } else if(data === "13n"){
        currentIcon.attr("src", "./assets/images/13d@2x.png");
    } else if(data === "50d"){
        currentIcon.attr("src", "./assets/images/50d@2x.png");
    } else if(data === "50n"){
        currentIcon.attr("src", "./assets/images/50d@2x.png");
    } else if(data === "01d"){
        currentIcon.attr("src", "./assets/images/01d@2x.png");
    } else if(data === "01n"){
        currentIcon.attr("src", "./assets/images/01n@2x.png");
    } else if(data === "02d"){
        currentIcon.attr("src", "./assets/images/02d@2x.png");
    } else if(data === "02n"){
        currentIcon.attr("src", "./assets/images/02n@2x.png");
    } else if(data === "03d"){
        currentIcon.attr("src", "./assets/images/03d@2x.png");
    } else if(data === "03n"){
        currentIcon.attr("src", "./assets/images/03d@2x.png");
    } else if(data === "04d"){
        currentIcon.attr("src", "./assets/images/04d@2x.png");
    } else if(data === "04n"){
        currentIcon.attr("src", "./assets/images/04d@2x.png");
    } else {
        currentIcon.attr("src", function() {
            return "./assets/images/images.png" })
    }
}



buttonEl.on('click', searchWeather);
buttonEl.on('click', searchWeatherForecast);