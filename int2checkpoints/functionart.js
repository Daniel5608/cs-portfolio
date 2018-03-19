/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(1000, 1000);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

background(255,182,193)
//variables
var counter = 0;
//function 
var drawBear = function(x,y){
    //head 
    fill(255,255,0)
    ellipse(x + 5, y + 5, 350, 350);
    ellipse(x-80, y-40, 60, 60);
    ellipse(x+60, y-40, 60, 60);
    
    //eyes
    fill(0,0,0)
    rect(x+60, y-40, 10, 10);
    ellipse(x-80, y-40, 10, 10);
    
    //mouth
    fill(255,160,122);
    rect(x, y,80,10);
    
    // cheeks
    fill(233,150,122);
    ellipse(x-100,y+30,50,50);
    ellipse(x+100,y+30,50,50);
}
mouseClicked = function(){
    drawBear(xPos, yPos);
    counter++;
    if (counter === 10){
        background(255,182,193);
        counter=0;
    }
};
 fill (0,0,140)
    rect(500,500-90,10,n);
    n++;
    if (n === 20){
        n = 0;
    }

    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
