// Movies renting App Create a movie renting app There should be an array of movie names There should be an input and a search button When the person enters a name of a movie it should search the array If the name exists it should show an H1 element that says: "The movie can be rented" in green text If the name does not exist it should show an H1 element that says: "The movie can't be rented" in red text The input should not be case sensitive ( it should find the movie regardless of capital or small letters )




let movieArr = ["Vikings","Split","Glass","Shutter Island","Lord of The Rings","Equalizer","Salt","Black Hawk Down",];


let Input = document.getElementById("Input");
let searchBtn = document.getElementById("searchBtn");
let resultHeaderOne = document.getElementById("result-movies");

searchBtn.addEventListener("click", showMovies);


function showMovies() {
    resultHeaderOne.innerText = "";
    resultHeaderOne.style.color = "blue";
// ----------------Negativno scenario prazno pole i greshen input na film -----
    if(!Input.value) {
        resultHeaderOne.innerText = "You must enter the name of the movie";
    }
    else {
        let searchResult = findMovie();
        if(!searchResult) {
            resultHeaderOne.innerText = "The movie can't be rented because it does not exist";
            resultHeaderOne.style.color = "red";
        }
        else {
            resultHeaderOne.innerText = "The movie is available for renting";
            resultHeaderOne.style.color = "green";
        }
    }

    Input.value = "";
}

//pravime nova funkcija so koja kje izlistame ako za sekoj film od movieArr so mali bukvi go ima(includes) inputot.value so mali bukvi ,vrati mi go toj  film
function findMovie() {
    for (let movie of movieArr) {
        if(movie.toLowerCase().includes(Input.value.toLowerCase())){
            return movie
        }
    }
    
}

