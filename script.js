// Write your JavaScript code here!
const { myFetch } = require("./scriptHelper");

window.addEventListener("load", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        let list = document.querySelector("faultyItems");
       
        //DOM manipulations
        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoLevel = document.querySelector("input[name=cargoMass]").value;
        formSubmission(document,list,pilot,copilot,fuelLevel,cargoLevel);
        event.preventDefault();
    });

   // Set listedPlanetsResponse equal to the value returned by calling myFetch() 
    let listedPlanets =;
    let listedPlanetsResponse = myFetch();
    
    listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);   
    // Below this comment call the appropriate helper functions to pick a planet from the list of planets and add that information to your destination.
       let planet = pickPlanet(listedPlanets);
       let name = planet.name;
       let diameter = planet.diameter;
       let star = planet.star;
       let distance = planet.distance;
       let imageUrl = planet.image;
       let moons = planet.moons;
       addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);
    
    })
   
});

// In scriptHelper.js, you have three functions for this task: myFetch(), pickPlanet(), and addDestinationInfo(). First, review the 
// comments in addDestinationInfo(). This is the format of the innerHTML for the missionTarget div, which you can locate using the document
//  parameter of addDestinationInfo(). addDestinationInfo() does not need to return anything. pickPlanet() takes in one argument: a list 
//  of planets. Using Math.random(), return one planet from the list with a randomly-selected index. myFetch() has some of the code 
//  necessary for fetching planetary JSON, however, it is not complete. You need to add the URL and return response.json().
// Now it is time to make use of these helper functions in script.js. We provided some of the code necessary.
