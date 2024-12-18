
//Sets what element the array dsiplays upon loading the page. In this case it will start on the first element and dispaly "10"
let currentIndex = 0;

//The array is set to a const. In this instant the array does need to be changed and only incremented through and displayed. Would I need to use [let = myArray] instead if I need to change the array?
const numbersArray = [10, 20, 30];

//This grabs the id of the previous button. 
const prevButton  =  document.getElementById("prevButton");

//This grabs the id of the next button. 
const nextButton  = document.getElementById("nextButton");

//This grabs the id of the <p> elemenet that is receiving the array as its text. Which is changed by the updateDisplay function every time the buttons are clicked.
const displayArray = document.getElementById("displayArray");


//This function when called displays the currentIndex calue as text with the <p> tag with the displayArray id. 
function updateDisplay() {
    displayArray.textContent = numbersArray[currentIndex];
}; 

//This is an event listener for the previous button. When it is clicked it will decrement the currentIndex by one element within the array. When it reaches the the first array it will loop around to the last and continue to decrement the currentIndex.
prevButton.addEventListener("click", () => {

    //the currentIndex is decremented by one element within the array.
    currentIndex = (currentIndex - 1 + numbersArray.length) % numbersArray.length;
    
    //Then updateDisplay() function is called which displays the value of the currentIndex after the button has been clicked. 
    updateDisplay();
});

//This an event listener for the next button. When it is clicked it will increment the currentIndex by one element within the array. When it reaches the last array it will loop around to the first and 
nextButton.addEventListener("click", () => {

    //the currentIndex is incremented by one element within the array.
    currentIndex = (currentIndex + 1) % numbersArray.length;
    
    //The updateDisplay() function is called which displays the value of the currentIndex after the button has been clicked.
    updateDisplay();
});


//This displays the current index when the page loads initally. 
updateDisplay();

 