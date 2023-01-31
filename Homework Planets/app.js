// Create an html page with a table and a button. When the button is clicked show results for the first 10 planets from the Star Wars api. The information in the table are:

// Planet Name
// Population
// Climate
// Gravity
// There should be a function that makes the call to the api for the planets ( should have URL for a parameter ) There should be a function that prints planets in to the table **API URL: ** https://swapi.dev/api/planets/?page=1

// Task 2
// After the user clicks the button to get the first 10 planets, a button should be shown below the table that says: NEXT 10. When the button is clicked you should make another call and get the next 10 planets and change the table contents with information about the next 10 planets. After the next 10 planets are shown the button NEXT 10 should disapear and a new button PREVIOUS 10 should appear. The previous button should return the first 10 planets in the table and hide the PREVIOUS 10 button and show the NEXT 10 button.

// **API URL: ** https://swapi.dev/api/planets/?page=2


let currentPage = 1;
function showPlanets(url) {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        printPlanets(data.results);
      })
      .catch(error => console.error(error));
  }

  //main function shto ke printa planeti 
  function printPlanets(planets) {
    let table = document.getElementById("planetTable");
    table.innerHTML = "";

    let headerRow = table.insertRow(-1);//(-1) argument bidejki ova ni e headerrow i so stavanje -1 znaci deka dodavame red na kraj na tabelata nizata ili listata  iako vo meguvreme se dodavaat novi redovi//special index bidejki so insert row i cell se dodavaat istite na specificna pozicija vo tabelata.
    headerRow.style.backgroundColor = "lightgray";
    headerRow.style.fontWeight = "bold";
    let nameHeader = headerRow.insertCell(0);
    let populationHeader = headerRow.insertCell(1);
    let climateHeader = headerRow.insertCell(2);
    let gravityHeader = headerRow.insertCell(3);
    nameHeader.innerHTML = "Planet Name";
    populationHeader.innerHTML = "Population";
    climateHeader.innerHTML = "Climate";
    gravityHeader.innerHTML = "Gravity";
  
    for (let i = 0; i < planets.length; i++) {//vrtime vo povikaniot planets za sekoj element od planets.length dodavame rows and cells so svoite vrednosti
        let dataRow = table.insertRow (-1);
        let name = dataRow.insertCell(0);
        let population = dataRow.insertCell(1);
        let climate = dataRow.insertCell(2);
        let gravity = dataRow.insertCell(3);
      name.innerHTML = planets[i].name;
      population.innerHTML = planets[i].population;
      climate.innerHTML = planets[i].climate;
      gravity.innerHTML = planets[i].gravity;
    }
  }

// let button = document.createElement("button");
// button.innerHTML = "Next Ten";
// button.addEventListener("click", function(){
//   showPlanets("https://swapi.dev/api/planets/?page=2");
// });
// document.body.appendChild(button);

//ovde samo mozev da gi smenam gore i dole ako stisnam bez da iscezne kopceto odnosno smeni

let button = document.createElement("button");
button.innerHTML = "Click me";
button.addEventListener("click", function() {
  
  if (currentPage === 1) {
    showPlanets("https://swapi.dev/api/planets/?page=2");
    currentPage = 2;
    button.innerHTML = "Previous Ten";
  } else {
    showPlanets("https://swapi.dev/api/planets/");
    currentPage = 1;
    button.innerHTML = "First Ten";
  }
});
document.body.appendChild(button);



  