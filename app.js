const icon = document.getElementById("icon");
const temp = document.getElementById("temp");
const place = document.getElementById("place");
const time = document.getElementById("time");
const name = document.getElementById("name");
const input = document.getElementById("input_name");

function showTime(){
    const now = new Date();
    time.innerText= now.toLocaleTimeString().slice(3);
}

setInterval(showTime,1000); //1초에 한번씩 실행

input.onchange = function (){
    console.log(input.value);
    localStorage.setItem("name", input.value); //입력한 이름 저장해놓기
    showName();
} 

function showName(){
    name.innerText= localStorage.getItem("name");
    input.style.display= "none";
    name.style.display="inline-block"; 
}

name.onclick = function(){
    input.style.display= "inline-block";
    input.value= name.innerText;
    name.style.display="none";
}

function showWeather(){
    
                                             
   
}

navigator.geolocation.getCurrentPosition(position=>getWeather(position.coords), e=>console.log(e.message)); //(성공, 실패)
async function getWeather({latitude, longitude}){
    const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=2313f72f528ba9b181f713691469a1df&units=metric`);
    console.log(result);
    const data= await result.json();
    console.log(data);
    temp.innerText= data.main.temp + '℃';
    place.innerText= data.name;
    weather=data.weather[0].main;
    console.log(weather);

    switch(weather){
        case 'Mist': icon.classList.add("mdi-weather-fog");
    }
}

showWeather();
