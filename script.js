var items = document.querySelectorAll(".items");
var svg = document.getElementsByClassName("svg"); 
var info = document.getElementsByClassName("info");
var heads = document.getElementsByClassName("heads");

var infoArray = [
  /*Regular Triangle*/[info[0], info[1]],
  /*Regular Rectangle*/[info[2], info[3]],
  /*Regular Pentagon*/[info[4], info[5]],
  /*Regular Hexagon*/[info[6], info[7]],
  /*Regular Heptagon*/[info[8], info[9]],
  /*Regular Ocatagon*/[info[10], info[11]],
  /*Irregular Triangle*/[info[12], info[13]],
  /*Irregular Rectangle*/[info[14], info[15]],
  /*Irregular Pentagon*/[info[16], info[17]],
  /*Irregular Hexagon*/[info[18], info[19]],
  /*Irregular Heptagon*/[info[20], info[21]],
  /*Irregular Octagon*/[info[22], info[23]],
  /*Concave*/[info[24], info[25]],
  /*Convex*/[info[26], info[27]],
  /*Complex*/[info[28], info[29]],
  /*Circle*/[info[30], info[31]],
  /*Shapes with Curves*/[info[32], info[33]],
  /*Shapes not Closed*/[info[34], info[35]],
  /*3d Shapes*/[info[36], info[37]],
  ];

function returnSVG(i){
  //Original SVG Viewbox Values
  var originalViewboxValues = [/*Regular Triangle*/"35 -3 90 90",
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
           /*Complex*/"35 8 85 85",
           /*Circle*/"37 42 85 85",
           /*Shapes with Curves*/"40 5 80 80",
           /*Shapes Not Closed*/"30 0 100 100",
           /*3d Shapes*/"0 0 171 171"];
  
  var moveBackSVG = gsap.timeline();
  moveBackSVG
    .to(svg[i], {duration: 1, attr:{viewBox: originalViewboxValues[i]}}, .2)
    .to(infoArray[i], {duration: 1, opacity: "0%"}, .1); 
  moveBackSVG.play();
}

var deactivateItem = function(){
   for(var i = 0; i < items.length; i++) (function(i){
     items[i].style.height = "120px";
     items[i].style.width = "";
     svg[i].style.margin = "1px"; 
     returnSVG(i);
   })(i);
}

items.forEach((item) => {
  item.addEventListener("mouseleave", deactivateItem);
});

//Item Hover
function changeSVGViewbox(i){
  //New Viebox values
  const newViewboxValues = [
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
     /*Complex*/"155 8 85 85",
     /*Circle*/"137 37 85 85",
     /*Shapes with Curves*/"140 5 80 80",
     /*Shapes Not Closed*/"130 0 100 100",
     /*3d Shapes*/"200 0 171 171"
  ]; 
  
  var slideSVG = gsap.timeline();
  slideSVG
     .to(svg[i], {duration: 1,  attr:{viewBox: newViewboxValues[i]}}, .5)
     .to(infoArray[i], {duration: 1, opacity: "100%"}, 1);
  slideSVG.play();
 
  items.forEach((item) => {
    item.addEventListener("mouseleave", function(){
      slideSVG.pause();
    });
  });
}

//Items Click Event
for(var a = 0; a < items.length; a++) 
  (function(a){
    items[a].onclick = function(){
      items[a].style.height = "200px";
      items[a].style.width = "200px";
      svg[a].style.margin = "40px";
      changeSVGViewbox(a);   
    };
})(a);
 
 
const regularRow = document.getElementsByClassName("regular-items");
const irregularRow = document.getElementsByClassName("irregular-items");
const typePolygonRow = document.getElementsByClassName("type-items");
const nonPolygonRow = document.getElementsByClassName("non-polygon-items");

const regularSVG = document.getElementsByClassName("regular-svg");
const irregularSVG = document.getElementsByClassName("irregular-svg");
const typesPolygonSVG = document.getElementsByClassName("types-polygon-svg");
const nonPolygonSVG = document.getElementsByClassName("non-polygon-svg");

var arrayOfRows = [
    [regularRow, regularSVG, heads[0]],
    [irregularRow, irregularSVG, heads[1]], 
    [typePolygonRow, typesPolygonSVG, heads[2]],
    [nonPolygonRow, nonPolygonSVG, heads[3]]
];

//Head Hover Effect
Array.prototype.forEach.call(arrayOfRows, function(rowParts) {
  rowParts[2].addEventListener('mouseenter', function(){
      for(var a = 0; a < rowParts[0].length; a++) {
        rowParts[0][a].style.height = "150px";
        rowParts[1][a].style.margin = "15px";
      }
  });
  rowParts[2].addEventListener('mouseleave', function(){
      for(var a = 0; a < rowParts[0].length; a++) {
        rowParts[0][a].style.height = "120px";
        rowParts[1][a].style.margin = "1px";
      }
  });
});
