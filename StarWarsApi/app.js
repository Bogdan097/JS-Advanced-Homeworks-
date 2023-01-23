// Exercise 2
// Create a button When the button is clicked, call the StarWars api for the first person.
// Print the person name in an h1 tag.
// Print the person stats in a table:

// Height
// Weight
// Eye color
// Hair color
// URL: https://swapi.dev/api/people/1


let button = document.getElementById("myButton");
button.addEventListener("click", function() {
  fetch("https://swapi.dev/api/people/1")
    .then((response) => response.json())
    .then((data) => {
      let name = document.getElementById("name");
      name.innerHTML = data.name;
   
      let height = document.getElementById("height");
      height.innerHTML = data.height;

      let weight = document.getElementById("weight");
      weight.innerHTML = data.mass;

      let eyeColor = document.getElementById("eye-color");
      eyeColor.innerHTML = data.eye_color;

      let hairColor = document.getElementById("hair-color");
      hairColor.innerHTML = data.hair_color;
    });
});




