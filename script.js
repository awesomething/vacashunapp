'use strict'
let API_KEY = "UFkBhHFWhf2QD5truy6IsvborSLXFv7sZ7OqdNDr";

function makeRequest(stateCodes, limit) {
  const myHeaders = new Headers();
  myHeaders.append("X-Api-Key", API_KEY);

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${stateCodes}&limit=${limit}`, requestOptions)
    .then(response => response.json())
    .then(result => {
      displayResults(result)
    })
    .catch(error => console.log('error', error));
}

function displayResults(responseJson){
  console.log(responseJson)
  const data=responseJson.data
  $("#results").empty()
  for (let i = 0; i < data.length; i++){
    //write dollar and curly brackets inside the back ticks
    $("#results").append(`
    <div>
      <h2>${data[i].name}</h2>
      <p>${data[i].description}</p>
      <p>${data[i].url}</p>
      <p>${data[i].directionsInfo}</p>
    </div>
    `)
  }
}

function watchForm() {
    $('#form').submit(event => {
    event.preventDefault();
    const park_name= event.target.park_name.value
    const number= event.target.number.value
    console.log(name);
    console.log(number);
    makeRequest(park_name, number);
  });
  }

  $(watchForm);