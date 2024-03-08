var inputvalue = document.querySelector("#cityinput")
var btn = document.querySelector("#add")
var city = document.querySelector("#cityoutput")
var desc = document.querySelector("#description")
var temp = document.querySelector("#temp")
var wind = document.querySelector("#wind")
apik="fd1320040f15c3efd1f9e68f5ba2a7c0"
function convertion(val)
{
    return (val -273).toFixed(3)
}
btn.addEventListener('click', function()
{
    fetch('https://api.openweathermap.org/data/2.5/weather?lat='+inputvalue.value+'&appid='+apik)
    .then(res => res.json())
    .then(data =>
        {
            var nameval = data['name']
            var descrip = data['weather'][0]['description']
            var tempature = data['main']['temp']
            var windspeed = data['wind']['speed']

            city.innerHtml = 'Weather of <span>${nameval}<span>'
            temp.innerHTML = 'Temperture: <span>${condition(tempature)} C</span>'
            description.innerHTML = 'Sky Condition: <span>${descrip}<span>'
            wind.innerHTML = 'Wind Speed: <span>${windspeed}km/h<span>'

        })

    .catch(err => alert('Please check city name.'))
})