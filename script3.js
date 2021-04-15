/*var items = document.getElementsByClassName('items');*/
const items = document.querySelectorAll(".items");
var svg = document.getElementsByClassName("svg"); 
var info = document.getElementsByClassName("info");
var heads = document.getElementsByClassName("heads");

var deactivate = function () {
   for(var i = 0; i < items.length; i++) (function(i){
    items[i].style.height = "120px";
    items[i].style.width = "";
    svg[i].style.margin = "1px"; 
    returnSVG(i);
})(i);
}

function changeSVG(i){
  //New Viebox values
  var y = [
    /*Regular Triangle*/"135 -3 90 90",
           /*Regular Rectangle*/"145 5 90 90",
           /*Regular Pentagon*/"147 7 65 65",
           /*Regular Hexagon*/"142 4 75 75",
           /*Regular Heptagon*/"145 8 70 70", 
           /*Regular Octogon*/"140 0 80 80", 
           /*Irregular Triangle*/"140 0 80 80",
           /*Irregular Rectangle*/"138 0 82 82",
           /*Irregular Pentagon*/"140 5 80 80",
           /*Irregular Hexagon*/"140 5 80 80",
           /*Irregular Heptagon*/"140 2 80 80",
           /*Irregular Octagon*/"140 0 80 80",
           /*Concave Polygon*/"155 5 90 90",
           /*Convex Polygon*/"150 5 90 90",
           /*Complex*/"155 5 85 85",
           /*Circle*/"137 37 85 85",
           /*Shapes with Curves*/"140 5 80 80",
           /*Shapes Not Closed*/"130 0 100 100",
           /*3d Shapes*/"200 0 171 171"
  ];  
  var tl = gsap.timeline();
 tl.to(svg[i], {duration: 1.5,  attr:{viewBox: y[i]}}, 1.5)
   .to(info[i], {duration: 1, fill: "white"}, 3)
  // .to(info[i], {duration: .75, fill: "white"}, 3);
tl.play();
}

function returnSVG(i){
  //Original SVG Viewbox Values
  var x = [/*Regular Triangle*/"35 -3 90 90",
           /*Regular Rectangle*/"45 5 90 90",
           /*Regular Pentagon*/"47 7 65 65",
           /*Regular Hexagon*/"42 4 75 75",
           /*Regular Heptagon*/"45 8 70 70", 
           /*Regular Octogon*/"40 0 80 80", 
           /*Irregular Triangle*/"40 0 80 80",
           /*Irregular Rectangle*/"38 0 82 82",
           /*Irregular Pentagon*/"40 5 80 80",
           /*Irregular Hexagon*/"40 5 80 80",
           /*Irregular Heptagon*/"40 2 80 80",
           /*Irregular Octagon*/"40 0 80 80",
           /*Concave Polygon*/"35 5 90 90",
           /*Convex Polygon*/"30 5 90 90",
           /*Complex*/"35 5 85 85",
           /*Circle*/"37 37 85 85",
           /*Shapes with Curves*/"40 5 80 80",
           /*Shapes Not Closed*/"30 0 100 100",
           /*3d Shapes*/"0 0 171 171"];
  var move = gsap.timeline();
  move.to(svg[i], {duration: 1, attr:{viewBox: x[i]}}, .2)
  move.play();
}

//make items go back when leaving div
 items.forEach(item => {item.addEventListener('mouseleave', deactivate)});

//Items Click Event
for(var o = 0; o < items.length; o++) (function(o){
  items[o].onclick = function(){
    items[o].style.height = "200px";
    items[o].style.width = "200px";
    svg[o].style.margin = "40px";
    changeSVG(o);   
}
})(o);

//Row Effects from Hovering over head
//Regular Polygon Row Head Hover
const regularRow = document.getElementsByClassName("regular-items");
const regularSVG = document.getElementsByClassName("regular-svg");

heads[0].addEventListener("mouseenter", e => { 
  for(var a = 0; a < regularRow.length; a++) {
 regularRow[a].style.height = "150px";
 regularSVG[a].style.margin = "15px";
  }
})
heads[0].addEventListener("mouseleave", e => { 
 for(var a = 0; a < regularRow.length; a++) {
 regularRow[a].style.height = "120px";
 regularSVG[a].style.margin = "1px";
 }
})

//Irregular Polygon Row Head Hover
const irregularRow = document.getElementsByClassName("irregular-items");
const irregularSVG = document.getElementsByClassName("irregular-svg");


heads[1].addEventListener("mouseenter", e => { 
  for(var a = 0; a < irregularRow.length; a++) {
 irregularRow[a].style.height = "150px"; 
 irregularSVG[a].style.margin = "15px";
  }
})
heads[1].addEventListener("mouseleave", e => { 
 for(var a = 0; a < irregularRow.length; a++) {
 irregularRow[a].style.height = "120px"; 
 irregularSVG[a].style.margin = "1px";
 }
})

//Types Polygon Row Head Hover
const typePolygonRow = document.getElementsByClassName("type-items");
const typesPolygonSVG = document.getElementsByClassName("types-polygon-svg");

heads[2].addEventListener("mouseenter", e => { 
  for(var a = 0; a < typePolygonRow.length; a++) {
 typePolygonRow[a].style.height = "150px";
 typesPolygonSVG[a].style.margin = "15px";
  }
})

heads[2].addEventListener("mouseleave", e => { 
 for(var a = 0; a < typePolygonRow.length; a++) {
 typePolygonRow[a].style.height = "120px"; 
 typesPolygonSVG[a].style.margin = "1px";
 }
})

//Non Polygon Row Head Hover
const nonPolygonRow = document.getElementsByClassName("non-polygon-items");
const nonPolygonSVG = document.getElementsByClassName("non-polygon-svg");

heads[3].addEventListener("mouseenter", e => { 
  for(var a = 0; a < nonPolygonRow.length; a++) {
 nonPolygonRow[a].style.height = "150px";
 nonPolygonSVG[a].style.margin = "15px";
  }
})

heads[3].addEventListener("mouseleave", e => { 
 for(var a = 0; a < nonPolygonRow.length; a++) {
 nonPolygonRow[a].style.height = "120px";  
 nonPolygonSVG[a].style.margin = "1px";
 }
})
