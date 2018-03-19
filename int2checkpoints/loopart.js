/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(2000,2000);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//
//loop
draw = function() {
background(188,242,218);
for (var i = 0; i < width; i += 30){
    for (var j = 0; j < height; j += 30){
         var size= random(80);
        
         fill(80,size,10, 35)
          ellipse(i, j,size, size);
    }
}
 



};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
