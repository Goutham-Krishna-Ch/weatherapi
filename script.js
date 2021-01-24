var button = document.querySelector('.button')
var inputvalue = document.querySelector('.inputvalue')
var namee = document.querySelector('.name')
var desc = document.querySelector('.desc')
var temp = document.querySelector('.temp')

//fetching api from open source
button.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid=2ad548826c035894a5970b5b82d560c3')
.then(response => response.json())
.then(data => {
    var namevalue = data['name'];
    var tempvalue = data['main']['temp'];
    var descvalue = data['weather'][0]['description'];

    namee.innerHTML = namevalue;
    temp.innerHTML = "Temperature: "+tempvalue;
    desc.innerHTML = "Description: "+descvalue;
})

.catch(err => alert("Wrong city name"))
})