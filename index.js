const apiKey = "2644a726eea69e6df3d0159678bb415f";
  
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
  
  const searchBox = document.querySelector(".search input");
  
  const searchBtn = document.querySelector(".search button");
  
  const weatherIcon = document.querySelector(".emoji");
  
  async function checkWeather(city) {
    const response = await fetch(apiUrl +city + "&appid=" + apiKey);
    var data = await response.json();
    
   document.querySelector(".city").innerHTML = data.name;
  
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  
  document.querySelector(".wind").innerHTML = data.wind.speed +" km/h";
  
     if(data.weather[0].main === "Clouds"){
       weatherIcon.innerHTML= " ☁️";
     }else if(data.weather[0].main === "Mist"){
       weatherIcon.innerHTML= "⛅";
     }else if(data.weather[0].main === "Rain"){
       weatherIcon.innerHTML= "🌧️";
     }else if(data.weather[0].main === "Snow"){
       weatherIcon.innerHTML= "🌨️"
     }else if(data.weather[0].main === "Clear"){
       weatherIcon.innerHTML= "☀️";
     }
     
         console.log(data);
     
  }
  
  
  searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
  })
  
