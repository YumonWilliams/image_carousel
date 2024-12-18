
//This sets the initial Index that is displayed. In this case I want it to display empty as its first element. Once the array is irrated some conditional statements will keep it from showing empty until the clear button pressed. 
let currentIndex2 = [0];

//this stores the values in an array. This will be added onto as the buttons are preassed. For now the previous and next buttons will display not empty and empty. 
let ammoArray = ["Empty","Not empty"];





 //This where the current index value will be displayed.
const displayArray2 = document.getElementById("displayArray2");


//BUTTONS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//BUTTONS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//BUTTONS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//retrieves the Prev and Next buttons IDs "prevButton2 and NextButton2"
const prevButton2 = document.getElementById("prevButton2");
const nextButton2 = document.getElementById("nextButton2");

//retrieves the 9MM buttons ID "appendNine"
const appendNineButton = document.getElementById("appendNine");

//retrieves the .22 LR buttons ID "appendTwentyTwo"
const appendTwentyTwoButton = document.getElementById("appendTwentyTwo");

//retrieves the .38 Special buttons ID "appendThirtyEighty"
const appendThirtyEightButton = document.getElementById("appendThirtyEight");

//retrieves the 556 buttons ID "appendFiveSix"
const appendFiveSixButton = document.getElementById("appendFiveSix");

const appendSevenSixButton = document.getElementById("appendSevenSix");

//retrieves the 12 Guage buttons ID "appendTwelve"
const appendTwelveButton = document.getElementById("appendTwelve");

const ammoCollection = document.getElementById("ammoCollection");

//retrieves the Clear buttons ID "clearArray"
const clearArray = document.getElementById("clearArray");

const updateAmmo = document.getElementById("updateAmmo");

updateAmmo.addEventListener("click", () => {
    let ammoCountNine = 0;
    let ammoCountTwenty = 0;
    let ammoCountThirty = 0;
    let ammoCountFive = 0;
    let ammoCountSeven = 0;
    let ammoCountTwelve = 0;

    setAmmoCount();
});

let trueArray = [""];

//Ammo count:
let ammoCountNine = 0;
let ammoCountTwenty = 0;
let ammoCountThirty = 0;
let ammoCountFive = 0;
let ammoCountSeven = 0;
let ammoCountTwelve = 0;


//FUNCTIONS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//FUNCTIONS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//FUNCTIONS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//This function is called when the user clicks the respective button. It will display the contents/status of the array. I want it first display empty which will be the first element in the array. If there is more elements (handled by a conditional) in the array it will display/log into the console "Not Empty.."
function updateDisplay2() {
    displayArray2.textContent = ammoArray[currentIndex2];

    let ammunitionLog = "AMMUNITION: ";

    ammunitionLog += trueArray.join('');

    ammoCollection.textContent = ammunitionLog;
};



function setAmmoCount(){
    //When this function is called it merges the string "9MM: " with the value of ammoCountNine. 
    

    for (var i=0; i < trueArray.length; i++) {
        if(trueArray[i] === "9MM | "){
            ammoCountNine++;
            let tableNine = "9MM: ";
            nineCount = document.getElementById('nineCount');
            
            tableNine += ammoCountNine;

            nineCount.textContent = tableNine;
            console.log(tableNine);
        } else if(trueArray[i] === ".22 LR | ") {
            ammoCountTwenty++;
            let tableTwenty = ".22 LR: ";
            twentyCount = document.getElementById('twentyCount');

            tableTwenty += ammoCountTwenty;

            twentyCount.textContent = tableTwenty;
            console.log(tableTwenty);
        } else if(trueArray[i] === ".38 Special | ") {
            ammoCountThirty++;
            let tableThirty = ".38: ";
            thirtyCount = document.getElementById('thirtyCount');

            tableThirty += ammoCountThirty;

            thirtyCount.textContent = tableThirty;
            console.log(tableThirty);
        } else if(trueArray[i] === "5.56 | ") {
            ammoCountFive++;
            let tableFive = "5.56: ";
            fiveCount = document.getElementById('fiveCount');

            tableFive += ammoCountFive;
            
            fiveCount.textContent = tableFive;
        } else if(trueArray[i] === "7.62 | ") {
            ammoCountSeven++;
            let tableSeven = "7.62: ";
            sevenCount = document.getElementById('sevenCount');

            tableSeven += ammoCountSeven;

            sevenCount.textContent = tableSeven;
        } else if(trueArray[i] === "12 Guage | "){
            ammoCountTwelve++;
            let tableTwelve = "12 Guage: ";
            twelveCount = document.getElementById('twelveCount');

            tableTwelve += ammoCountTwelve;

            twelveCount.textContent = tableTwelve;
        };
    }; 

    trueArray=[];
}

setAmmoCount();

//EVENT LISTENERS>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//EVENT LISTENERS>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//EVENT LISTENERS>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//an event listener that is waiting for the user to click the preivous button to decrement in the array.
prevButton2.addEventListener("click", () => {
    currentIndex2 = (currentIndex2 - 1 + numbersArray.length) % numbersArray.length;
    updateDisplay2();

    console.log("previous" + currentIndex2)
});

//an event listener that is waiting for the user to click the next button to increment in the array.
nextButton2.addEventListener("click", () => {
    currentIndex2 = (currentIndex2 + 1) % numbersArray.length;
    updateDisplay2();

    console.log("Next" + currentIndex2)
});

//an event listener that is waiting for the user to click the 9MM button to append a new element to the back of the array.
appendNineButton.addEventListener("click", () => { 
    trueArray.push("9MM | ");
    updateDisplay2();

    console.log("9MM ammo added!");
});

//an event listener that is waiting for the user to click the 22 LR button to append a new element to the back of the array.
appendTwentyTwoButton.addEventListener("click", () => {
    trueArray.push(".22 LR | ");
    updateDisplay2();

    console.log(".22 LR ammo added!");
});

//an event listener that is waiting for the user to click the .38 Special button to append a new element to the back of the array.
appendThirtyEightButton.addEventListener("click", () => {
    trueArray.push(".38 Special | ")
    updateDisplay2();

    console.log(".38 Special ammo added!");
});

//an event listener that is waiting for the user to click the 556 button to append a new element to the back of the array.
appendFiveSixButton.addEventListener("click", () => {
    trueArray.push("5.56 | ");
    updateDisplay2();

    console.log("5.56 ammo added!");
});

//an event listener that is waiting for the user to click the 762 button to append a new element to the back of the array.
appendSevenSixButton.addEventListener("click", () => {
    trueArray.push("7.62 | ");
    updateDisplay2();

    console.log("7.62 ammo added!");
});

//an event listener that is waiting for the user to click the 12 Guage button to append a new element to the back of the array.
appendTwelveButton.addEventListener("click", () => {
    trueArray.push("12 Guage | ")
    updateDisplay2();

    console.log("12 Guage ammo added!")
});

//an event listener that is waiting for the user to click the Clear  button to append a new element to the back of the array.
clearArray.addEventListener("click", () => {
    trueArray = [];
    updateDisplay2(); 

    console.log("Clearing the array...")
});

//initally display "Empty" the first element in the array upon loading the page.
updateDisplay2();


