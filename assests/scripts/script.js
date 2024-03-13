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
    $('#temp').text("Tempurature: "+ data.main.temp + "F");
    $('#wind').text("Wind: " + data.wind.speed + "mph");
    $('#humidity').text("Humidity: " + data.main.humidity + "%");
}

function setWeatherForecast(data, a){
    b = (a*8)+4;
    $(`#date${a}`).text(dayjs(data.list[b].dt_txt).format("M-D"));
    $(`#temp${a}`).text("Tempurature: "+data.list[b].main.temp +"F");
    $(`#wind${a}`).text("Wind: "+data.list[b].wind.speed+"mph");
    $(`#humidity${a}`).text("Humidity: "+data.list[b].main.humidity+"%");
}


buttonEl.on('click', searchWeather);
buttonEl.on('click', searchWeatherForecast);