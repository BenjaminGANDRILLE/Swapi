import fetch from "node-fetch";

var requestOptions = {
    method: 'GET',
  };

  
  fetch("https://swapi.dev/api/")
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));