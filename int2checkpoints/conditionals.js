/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400,400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//
var counter = 0;
var acolor = 0;
var bcolor = 0;
var ccolor= 0;
draw = function() {
    
    noStroke();
     if (counter > 0) {
        acolor = 0;
        bcolor= 255;
        ccolor=0;
    }
    if (counter > 15) {
        acolor = 238;
        bcolor = 130;
        ccolor = 238;
    }
    if (counter > 30) {
        acolor = 131;
        bcolor = 234;
        ccolor = 234;
    }
    if (counter > 45) {
        acolor = 252;
        bcolor = 210;
        ccolor = 2;
    }
    if (counter > 60) {
        acolor = 239;
        bcolor= 9;
        ccolor= 9;
    }
    if (counter === 75) {
        counter = 0
        acolor = 0
        bcolor = 0
        ccolor = 0
    }
    fill(acolor, bcolor, ccolor)
    ellipse(mouseX, mouseY, 100,100);
    counter++;

};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
