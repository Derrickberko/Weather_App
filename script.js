function Button(){
  // Get the id from the html input type and stoe it in the location
  let location = document.getElementById("location").value
  // Get the infomation from the api 
  axios.get(`https://api.weatherbit.io/v2.0/current?city=${location}&key=05e615f6d10443f680c48187f946f492`)
  .then(response => {
    //using the function displayWeather to display the response
    displayWeather(response.data)
})
//use catch to handle error
.catch(error => {
  console.error("Error fetching weather data:", error);
  alert("Error fetching weather data. Please try again later.");
});
}
//created a function to display the weather infor and it has a parimeter on information 
function displayWeather(information){
  //created a variable called weatherInfor to hold the values f the wather-info
 let weatherInfo = document.getElementById("weather-info")
 //used an if statement to check if the data is empty if it is put in an error if not do the following steps
 if(information.data && information.data.length > 0){
  let degreeCel = information.data[0].temp

  weatherInfo.innerHTML = `
  <h1>${information.data[0].city_name}, ${information.data[0].country_code}</h1>
  <p>Temperature in Degrees: ${degreeCel}°C </p>
  <p>Weather Description: ${information.data[0].weather.description}</p>
`;
} else {
weatherInfo.innerHTML = "<p>City not found or no weather data available.</p>";
}

 }
 
