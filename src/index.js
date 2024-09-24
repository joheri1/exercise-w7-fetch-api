// To continue on with the pokemon theme, we've found a
// pokemon API for you to practice on --> https://pokeapi.co/.
// If you go to this page --> https://pokeapi.co/api/v2/,
// you can see all of the endpoints available.
// We will start with the endpoint named pokemon.

// The goal is to change the content of our mystery table in
// HTML to contain info about one specific pokemon. To get you
// started, we've created some variables for you to use later on:

const image = document.getElementById("image")
const name = document.getElementById("name")
const weight = document.getElementById("weight")
const height = document.getElementById("height")
const types = document.getElementById("types")
const ability = document.getElementById("ability")

const BASE_URL = `https://pokeapi.co/api/v2/pokemon/`
let word = "charmander"
const URL = `${BASE_URL}/${word}`

// 1) Start with updating the fetchPokemons function so that
//    it's fetching the pokemons from the pokemon endpoint and
//    logs the results in the console.
//    HINT --> Don't forget to invoke the function

const fetchPokemons = () => {
   /*Fetch all pokemons here*/
  fetch('https://pokeapi.co/api/v2/pokemon/?limit=10')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      data.results.forEach((pokemon) => console.log(pokemon.name))
    })
}
fetchPokemons()

// 2) a) As you can see, we get some metadata as well as
//    the results of the fetch. Change the console.log so
//    that you only log the array of pokemon objects.
//    Answer: console.log(data.results)

//    b) Log only the name of the first pokemon in the
//    pokemon objects array
//    Answer: console.log(data.results[0].name) 

//    c) Log the names of all pokemons in the array
//    Answer: data.results.forEach((pokemon) => console.log(pokemon.name))

// 3) You might know that there are more than 20 pokemons
//    in the pokedex. Add a query parameter
//    called "limit" to the URL, and set it to a number of your
//    choice, like this: https://pokeapi.co/api/v2/pokemon/?limit=151
//    and pick a pokemon that you would like to continue
//    working with. Copy the pokemon's URL.
//    Answer: Limit, fetch('https://pokeapi.co/api/v2/pokemon/?limit=10'). I pick Charmander

// 4) Now that we've picked a pokemon, we will do a new fetch
//    to the URL we copied. Since that's another endpoint,
//    we will create a new fetch inside the fetchBulbasaurData
//    function (change the function's name to fit your pokemon).
//    Log the data in the console and see what you find.
//    Answer: A lot of data... so I changed to console.log(data.name)
//            to see only Charmander's name. 

const fetchCharmanderDataAsync = async () => {
  /*Fetch Charmander here*/
  try {
    const response = await fetch(URL)

    //Convert the response to JSON 
    const data = await response.json()

    //Log Charmander data
    console.log(data.name)

    //Add image id.source = endpoint 
    image.src = data.sprites.front_default

    name.innerHTML = data.name
    weight.innerHTML = data.weight
    height.innerHTML = data.height
    //Display only the first name in the array
    types.innerHTML = data.types[0].type.name

    //Display multiple types/names: 
    const typeNames = data.types.map(typeObj => typeObj.type.name);  // Map the whole array
    types.innerHTML = typeNames.join(", ")
    
    ability.innerHTML = data.abilities[0].ability.name
    console.log(data)

  } catch (error) {
    //Handle any errors 
    console.error("Error when fetching Charmander", error)
  }
}
fetchCharmanderDataAsync()

const fetchData = async () => {
  const response = await fetch(URL);
  const data = await response.json();

  // Logga hela data-objektet
  console.log(data);
}
fetchData()

// 5) After familiarizing with the data, we will use the data
//    to change our table. We will give you the image as a start.
//    If you named the data something else than json, you change the
//    word json below so it corresponds with your code. Here goes:
//    image.src = json.sprites.front_default;
//    Copy that line into the fetchBulbasaurData and hopefully
//    the image in the HTML updates.
//    Answer: //Add image id.source = endpoint 
//            image.src = data.sprites.front_default

// 6) Update the innerHTML of the other rows as well after
//    you've found the correct path in the json.
//    HINT --> Log stuff in the console to try things out
//    HINT --> If it's an array - map over the array
//    Answer: 
//    Display only the first name in the array
//    types.innerHTML = data.types[0].type.name
//    Display multiple types/names:
//    const typeNames = data.types.map(typeObj => typeObj.type.name);  
//    Map the whole array
//    types.innerHTML = typeNames.join(", ")

// ***BONUS***
// Check out the API's documentation and try to fetch from another
// endpoint! There are many - as you can see in the first link
// Answer: Want to add "Ability"
