// Write your helper functions here!

require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    //HTML formatting for mission target div.
    let missionTarget = document.getElementById('missionTarget');
    missionTarget.innerHTML = 
     `<h2>Mission Destination</h2>
        <ol>
            <li>${name} </li>
            <li>${diameter} </li>
            <li>Star: ${star} </li>
            <li>Distance from Earth: ${distance} </li>
            <li>Number of Moons: ${moons} </li>
        </ol>
        <img src= ${imageUrl}>`;

};

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a number";
    } else {
        return "Is a number";
    }
}


/////////////OR//////////
// if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
//     alert("All fields are required");
// } else if ((validateInput(fuelLevel) === "Not a number") || validateInput(cargoLevel) === "Not a number") {
//     alert("Values must contain numbers.");
// } else if ((validateInput(pilot) === "Is a number") || validateInput(copilot) === "Is a number") {
//     alert("Values must contain letters.");    
// }
//////////////////////
// function validateInput(testInput) {
//     if (testInput === "" || testInput === null || testInput === 0) {
//         return `Empty`
//     } else if ((!isNaN(Number(testInput)))) {
//         return `Is a Number`
//     } else {
//         return 'Not a Number'
//    }
// }
///////////////////////////////

//DOM manipulations 
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
        list = document.querySelector("#faultyItems");
        pilot= document.querySelector("input[name=pilotName]").value;
        copilot = document.querySelector("input[name=copilotName]").value;
        fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        cargoLevel = document.querySelector("input[name=cargoMass]").value;
        let pilotStatus = document.getElementById("pilotStatus");
        let copilotStatus = document.getElementById("copilotStatus");
        let fuelStatus = document.getElementById("fuelStatus");
        let launchStatus = document.getElementById("launchStatus");
        let cargoStatus = document.getElementById("cargoStatus");
        let liftOff = true;
        //check all fields are filled
        //validates if fuelLevel and cargoLevel are numbers, and pilot and copilot are strings 
        if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
            alert("All fields are required");
        } else if ((validateInput(fuelLevel) === "Not a number") || validateInput(cargoLevel) === "Not a number") {
            alert("Values must contain numbers.");
        } else if ((validateInput(pilot) === "Is a number") || validateInput(copilot) === "Is a number") {
            alert("Values must contain letters.");    
        }

        function readyToLaunch() {
            list.style.visibility = "visible";
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
            copilotStatus.innerHTML = `Copilot ${copilot} is ready for launch`;
        };
        
       if (fuelLevel < 10000) {
            liftOff = false
            fuelStatus.innerHTML = "There is not enough fuel for the journey";
       } else {
           fuelStatus.innerHTML = "There is enough fuel for the journey";   
       }
    
       if (cargoLevel > 10000) {
            liftOff = false;
            cargoStatus.innerHTML = "There is too much mass for the shuttle to take off";
       } else {
            cargoStatus.innerHTML = "Mass is low enough for the shuttle to take off";
       };
    
       if (liftOff) {
        launchStatus.innerHTML =  "Shuttle is ready for launch";
        launchStatus.style.color = "green";
        readyToLaunch();
       } else {
        launchStatus.innerHTML =  "Shuttle is not ready for launch";
        launchStatus.style.color = "red";
        readyToLaunch();
       }
    }; 
                 
async function myFetch() {
    const planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json()
       
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random() * planets.length);
    return planets[index];
}


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;



        // else if (validateInput(fuelLevel) === 'Not a Number' || validateInput(cargoLevel) === 'Not a Number') {
        //     alert(`Please enter numerical values for Fuel Level and Cargo Mass`);
        // } else if (validateInput(pilot)===`Is a Number`||validateInput(copilot)===`Is a Number`) {
        //     alert('Please do not enter numbers for name of pilot or co-pilot');
        // } else {

       
            //         fuelStatus.innerHTML = `Not enough fuel for journey`;
            //         list.style.visibility = 'visible';
            //         launchStatus.innerHTML = `Shuttle not ready for launch`;
            //         launchStatus.style.color = `red`;
            //     } else if (Number(cargoLevel) > 10000) {
            //         cargoStatus.innerHTML = `Cargo too heavy for takeoff`;
            //         list.style.visibility = `visible`;
            //         launchStatus.innerHTML = `Shuttle not ready for launch`;
            //         launchStatus.style.color = `red`;
            //     } else if (Number(cargoLevel) < 10000 && Number(fuelLevel) > 10000) {
            //         list.style.visibility = `visible`;
            //         fuelStatus.innerHTML = `Enough fuel for journey`;
            //         cargoStatus.innerHTML = `Cargo light enough for takeoff`;
            //         launchStatus.innerHTML = `Shuttle ready for launch`;
            //         launchStatus.style.color = `green`;
            //     }
            // }
            



// You also want to make sure that the user entered valid info for each of the fields. Valid information for the 
// fields means that the user submits a value that is easily converted to the correct data type for our fellow engineers. 
// The pilot and co-pilot names should be strings and the fuel level and cargo mass should be numbers. To do this, complete 
// the helper function in your scriptHelper.js called validateInput(). validateInput() should take in a string as a parameter
//  and return "Empty", "Not a Number", or "Is a Number" as appropriate. In scriptHelper.js, you will use validateInput() 
//  to complete the formSubmission() function. formSubmission() will take in a document parameter and strings representing 
//  the pilot, co-pilot, fuel level, and cargo mass. Using the values in those strings and the document parameter for your 
//  document, update the shuttle requirements as described below. Make sure to call your formSubmission() function at the appropriate 
//  time in your script.js file!

// // The list of shuttle requirements, the div with the id faultyItems, should be updated if something is not ready for launch. Using template literals, 
// //update the li elements pilotStatus and copilotStatus to include the pilot's name and the co-pilot's name. If the user submits a fuel level that is 
// too low (less than 10,000 liters), change faultyItems to visible with an updated fuel status stating that there is not enough fuel for the journey. 
// The text of the h2 element, launchStatus, should also change to "Shuttle not ready for launch" and the color should change to red. If the user submits a 
// cargo mass that is too large (more than 10,000 kilograms), change the list to visible with an updated cargo status stating that there is too much mass 
// for the shuttle to take off. The text of launchStatus should also change to "Shuttle not ready for launch" and the color should change to red. If the 
// shuttle is ready to launch, change the text of launchStatus to green and display "Shuttle is ready for launch".
// 
