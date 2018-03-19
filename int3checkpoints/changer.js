//creates and stores the DOM elements to each 
var newBGColor = document.getElementById("newBGColor"); 
var colorChangeButton = document.getElementById("colorChangeButton");

/*  event listener for the button 
    It sets the background color to the user provided value*/
colorChangeButton.addEventListener("click", function(){
    document.body.style.backgroundColor = newBGColor.value;
})