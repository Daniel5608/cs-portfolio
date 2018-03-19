/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(1000, 1000);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

//variables

//star variables 

//these variables are here to make the stars look spread out by having each variable be the height of three stars but each of the stars have different x positions so it looks like the spaceship is moving
var d = -1000;
var n = -750;
var c = -550;
var b = -350;
var a = -150;
var f = -10;6 
var missilesArray = [];

//spaceship
drawSpaceship = function(x, y) {
    
    //white
    fill(255, 255, 255);
    noStroke();
    rect(x, y, 8, 30);
    rect(x - 25, y, 60, 10);
    rect(x - 8, y - 25, 24, 40);
    rect(x - 25, y + 6, 17, -15);
    rect(x + 16, y + 6, 18.5, -15);
    rect(x - 4, y - 15, 15, -43);
    rect(x - 0.5, y - 25, 7, -73);

    //red
    fill(249, 35, 35);
    rect(x - 25, y + 6, 15, 15);
    rect(x + 20, y + 6, 15, 15);
    rect(x - 14, y, 8, 15);
    rect(x + 14, y, 8, 15);

    //blue
    fill(21,28,203);
    rect(x + .4, y - 71, 6.5, -10);
    rect(x, y - 10, 7, 7);
    rect(x - 6, y - 4, 7, 7);
    rect(x + 7, y - 4, 7, 7);
};

//Shooting Missiles
mouseClicked = function(){
    
    missilesArray.push({
        xPos: mouseX,
        yPos: mouseY-100,
        move: function(){
            this.yPos -= 10;
        },
        draw: function(){
            fill(255,7,73);
            rect(this.xPos, this.yPos, 6, 50);
        }
        
    });
};
 
// spaceship and missile movement 
draw = function() {
    background(0,0,0); 
    
    //stars
    fill(255,255,255);
    ellipse(85,f,5,21);
    ellipse(900,f,8,23);
    ellipse(160,f,8,25);
    ellipse(643,c,5,21);
    ellipse(130,c,8,23);
    ellipse(710,c,8,25);
    ellipse(810,a,8,24);
    ellipse(300,a,8,22);
    ellipse(600,a,8,26);
    ellipse(900,d,8,24);
    ellipse(150,d,8,22);
    ellipse(432,d,8,26);
    ellipse(730,b,8,23);
    ellipse(130,b,8,20);
    ellipse(800,b,5,24);
    ellipse(630,n,8,23);
    ellipse(100,n,8,20);
    ellipse(720,n,5,24);
    c = c + 20;
    a = a + 20;
    b = b + 20;
    f = f + 20;
    d = d + 20;
    n = n + 20;
    
    //resets
    if (c>1000){
        c = -550;
        
    }
    
    if (f>1000){
        f = -10;
        
    }
    
    if (a>1000){
        a = -150;
    }
    
    if (b>1000){
        b = -350;
    
    }
        
    if (n>1000){
        n = -750;
        
    }
    
    if (d>1000){
        d = -1000;
        
    }
    
    //missile movement
    for(var i = 0; i < missilesArray.length; i++) {
        missilesArray[i].move();
        missilesArray[i].draw();
        if (missilesArray[i].yPos < 0){
            missilesArray.splice(i,1);
        }
    }

    //spaceship movement
    drawSpaceship(mouseX, mouseY);
};



// °º¤ø,¸¸,ø¤º°d`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);

