/* +\    i want to produce 10 circles with different colour everytime it refreshes 
+\   i am also testing whether i can add id to js for it to work  */

var red;
var green;
var blue;
var rgb;
var html = "";

for (var i = 1; i <= 10; i += 1) {
	red = Math.floor( Math.random() * 256 );
	green = Math.floor( Math.random() * 256 );
	blue = Math.floor( Math.random() * 256 );
	document.write("<div id="jsdiv" style="background-color: rgb(255; 255; 255);
}
	
	
	
	
	
	
	/* +\    rgb says 255 colours but ther is a total of 256 because the 0 is added too 
	+\    in the Math.random , you do not need the + 1 because you want to include the 0 at rgb so just type the total unit which is 256 */