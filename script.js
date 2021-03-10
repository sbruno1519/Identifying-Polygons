//Regular Row Variables
var RegularHead = document.getElementById("regular-polygon-head");
var RegularTriangleBox = document.getElementById("reg-triangle-box");
var RegularQuadrillateralBox = document.getElementById("reg-quadrillateral-box");
var RegularPentagonBox = document.getElementById("reg-pentagon-box");
var RegularHexagonBox = document.getElementById("reg-hexagon-box");
var RegularHeptagonBox = document.getElementById("reg-heptagon-box");
var RegularOctagonBox = document.getElementById("reg-octagon-box");
//Irregular Row Variables
var IrregularHead = document.getElementById("irregular-polygon-head");
var IrregularTriangleBox = document.getElementById("irregular-triangle-box");
var IrregularQuadrillateralBox = document.getElementById("irregular-quadrillateral-box");
var IrregularPentagonBox = document.getElementById("irregular-pentagon-box");
var IrregularHexagonBox = document.getElementById("irregular-hexagon-box");
var IrregularHeptagonBox = document.getElementById("irregular-heptagon-box");
var IrregularOctagonBox = document.getElementById("irregular-octagon-box");
//Types of Polygon Row
var TypesPolygonHead = document.getElementById("type-polygon-head");
var ConcaveBox = document.getElementById("concave-box");
var ConvexBox = document.getElementById("convex-box");
var ComplexBox = document.getElementById("complex-box");
//Not Polygon Row
var NonPolygonHead = document.getElementById("non-polygon-head");
var CircleBox = document.getElementById("circle-box");
var CurvesBox = document.getElementById("curves-box");
var UnclosedShapesBox = document.getElementById("unclosed-shapes-box");
var ThreeDimensionalObjectsBox = document.getElementById("three-dimensional-objects-box");
//SVG
var RegularTriangleSVG = document.getElementById("regular-triangle");
var TriangleInfo = document.querySelectorAll(".triangle-info");
//Labels for Items
var NumberOfSides = document.querySelector(".number-of-sides");
var ShapeLabel = document.querySelector(".shape-label");

//GSAP
const tl = gsap.timeline();
 tl
    .to(RegularTriangleBox, {duration: 1, height:200}, 0)
    .to(RegularTriangleBox, {duration: 1, width:200}, 0)
    .to(RegularTriangleSVG, {duration: 1, width: 290}, 1)
    .to(RegularTriangleSVG, {duration: 1, margin: 40}, 0)
    .to(RegularTriangleSVG, {duration: 2, attr:{viewBox:"140 -3 90 90"}}, 2)
    .to(TriangleInfo, {duration: 1, attr:{x:"140"}}, 3);
tl.pause();



RegularTriangleBox.onclick = function(){ 
   
  if(RegularTriangleBox.style.height = "120px"){     
 tl.play()  
  } else {  
 tl.reverse()
  }
}

RegularQuadrillateralBox.onclick = function(){
  
  if(RegularQuadrillateralBox.style.height == "120px"){
    //Grow box
    RegularQuadrillateralBox.style.height = "300px";
    RegularQuadrillateralBox.style.width = "300px";
    
    //Add Text
    //increase size of svg
  } else{
    //bring box back to normal properties
    RegularQuadrillateralBox.style.height = "120px";
    RegularQuadrillateralBox.style.width = "";
    RegularQuadrillateralBox.style.flexGrow = "1";
  }
}

RegularPentagonBox.onclick = function(){
  
   if(RegularPentagonBox.style.height == "120px"){
    //Grow box
    RegularPentagonBox.style.height = "300px";
    RegularPentagonBox.style.width = "300px";
    //Add Text
    //increase size of svg
  } else{
    //bring box back to normal properties
    RegularPentagonBox.style.height = "120px";
    RegularPentagonBox.style.width = "";
    RegularPentagonBox.style.flexGrow = "1";
  }
}

RegularHexagonBox.onclick = function(){
  
  if(RegularHexagonBox.style.height == "120px"){
    //Grow box
    RegularHexagonBox.style.height = "300px";
    RegularHexagonBox.style.width = "300px";
    //Add Text
    //increase size of svg
  } else{
    //bring box back to normal properties
    RegularHexagonBox.style.height = "120px";
    RegularHexagonBox.style.width = "";
    RegularHexagonBox.style.flexGrow = "1";
  }
}

RegularHeptagonBox.onclick = function(){
  
  if(RegularHeptagonBox.style.height == "120px"){
    //Grow box
    RegularHeptagonBox.style.height = "300px";
    RegularHeptagonBox.style.width = "300px";
    //Add Text
    //increase size of svg
  } else{
    //bring box back to normal properties
    RegularHeptagonBox.style.height = "120px";
    RegularHeptagonBox.style.width = "";
    RegularHeptagonBox.style.flexGrow = "1";
  }
}

RegularOctagonBox.onclick = function(){
  
   if(RegularOctagonBox.style.height == "120px"){
    //Grow box
    RegularOctagonBox.style.height = "300px";
    RegularOctagonBox.style.width = "300px";
    //Add Text
    //increase size of svg
  } else{
    //bring box back to normal properties
    RegularOctagonBox.style.height = "120px";
    RegularOctagonBox.style.width = "";
    RegularOctagonBox.style.flexGrow = "1";
  }
}

//Irregular Polygons

IrregularTriangleBox.onclick = function(){
  
   if(IrregularTriangleBox.style.height == "120px"){
    //Grow box
    IrregularTriangleBox.style.height = "300px";
    IrregularTriangleBox.style.width = "300px";
    //Add Text
    //increase size of svg
  } else{
    //bring box back to normal properties
    IrregularTriangleBox.style.height = "120px";
    IrregularTriangleBox.style.width = "";
    IrregularTriangleBox.style.flexGrow = "1";
  }
}

IrregularQuadrillateralBox.onclick = function(){
  
  if(IrregularQuadrillateralBox.style.height == "120px"){
    //Grow box
    IrregularQuadrillateralBox.style.height = "300px";
    IrregularQuadrillateralBox.style.width = "300px";
    //Add Text
    //increase size of svg
  } else{
    //bring box back to normal properties
    IrregularQuadrillateralBox.style.height = "120px";
    IrregularQuadrillateralBox.style.width = "";
    IrregularQuadrillateralBox.style.flexGrow = "1";
  }
}

IrregularPentagonBox.onclick = function(){
  
  if(IrregularPentagonBox.style.height == "120px"){
    //Grow box
    IrregularPentagonBox.style.height = "300px";
    IrregularPentagonBox.style.width = "300px";
    //Add Text
    //increase size of svg
  } else{
    //bring box back to normal properties
    IrregularPentagonBox.style.height = "120px";
    IrregularPentagonBox.style.width = "";
    IrregularPentagonBox.style.flexGrow = "1";
  }
}

IrregularHexagonBox.onclick = function(){
  
 if(IrregularHexagonBox.style.height == "120px"){
    //Grow box
    IrregularHexagonBox.style.height = "300px";
    IrregularHexagonBox.style.width = "300px";
    //Add Text
    //increase size of svg
  } else{
    //bring box back to normal properties
    IrregularHexagonBox.style.height = "120px";
    IrregularHexagonBox.style.width = "";
    IrregularHexagonBox.style.flexGrow = "1";
  }
}

IrregularHeptagonBox.onclick = function(){
  
  if(IrregularHeptagonBox.style.height == "120px"){
    //Grow box
    IrregularHeptagonBox.style.height = "300px";
    IrregularHeptagonBox.style.width = "300px";
    //Add Text
    //increase size of svg
  } else{
    //bring box back to normal properties
    IrregularHeptagonBox.style.height = "120px";
    IrregularHeptagonBox.style.width = "";
    IrregularHeptagonBox.style.flexGrow = "1";
  }
}

IrregularOctagonBox.onclick = function(){
  
  if(IrregularOctagonBox.style.height == "120px"){
    //Grow box
    IrregularOctagonBox.style.height = "300px";
    IrregularOctagonBox.style.width = "300px";
    //Add Text
    //increase size of svg
  } else{
    //bring box back to normal properties
    IrregularOctagonBox.style.height = "120px";
    IrregularOctagonBox.style.width = "";
    IrregularOctagonBox.style.flexGrow = "1";
  }
}


ConcaveBox.onclick = function(){
  
  if(ConcaveBox.style.height == "120px"){
   //Grow box
    ConcaveBox.style.height = "300px";
    ConcaveBox.style.width = "300px";
    //Add Text
    //increase size of svg
  } else{
    //bring box back to normal properties
    ConcaveBox.style.height = "120px";
    ConcaveBox.style.width = "";
    ConcaveBox.style.flexGrow = "1";
  }
}

ConvexBox.onclick = function(){
  
    if(ConvexBox.style.height == "120px"){
   //Grow box
    ConvexBox.style.height = "300px";
    ConvexBox.style.width = "300px";
    //Add Text
    //increase size of svg
  } else{
    //bring box back to normal properties
    ConvexBox.style.height = "120px";
    ConvexBox.style.width = "";
    ConvexBox.style.flexGrow = "1";
  }
}

ComplexBox.onclick = function(){
  
    if(ComplexBox.style.height == "120px"){
   //Grow box
    ComplexBox.style.height = "300px";
    ComplexBox.style.width = "300px";
    //Add Text
    //increase size of svg
  } else{
    //bring box back to normal properties
    ComplexBox.style.height = "120px";
    ComplexBox.style.width = "";
    ComplexBox.style.flexGrow = "1";
  }
}

CircleBox.onclick = function(){
  
    if(CircleBox.style.height == "120px"){
   //Grow box
    CircleBox.style.height = "300px";
    CircleBox.style.width = "300px";
    //Add Text
    //increase size of svg
  } else{
    //bring box back to normal properties
    CircleBox.style.height = "120px";
    CircleBox.style.width = "";
    CircleBox.style.flexGrow = "1";
  }
}

CurvesBox.onclick = function(){
  
    if(CurvesBox.style.height == "120px"){
   //Grow box
    CurvesBox.style.height = "300px";
    CurvesBox.style.width = "300px";
    //Add Text
    //increase size of svg
  } else{
    //bring box back to normal properties
    CurvesBox.style.height = "120px";
    CurvesBox.style.width = "";
    CurvesBox.style.flexGrow = "1";
  }
}

UnclosedShapesBox.onclick = function(){
  
    if(UnclosedShapesBox.style.height == "120px"){
   //Grow box
    UnclosedShapesBox.style.height = "300px";
    UnclosedShapesBox.style.width = "300px";
    //Add Text
    //increase size of svg
  } else{
    //bring box back to normal properties
    UnclosedShapesBox.style.height = "120px";
    UnclosedShapesBox.style.width = "";
    UnclosedShapesBox.style.flexGrow = "1";
  }
}

ThreeDimensionalObjectsBox.onclick = function(){
  
    if(ThreeDimensionalObjectsBox.style.height == "120px"){
   //Grow box
    ThreeDimensionalObjectsBox.style.height = "300px";
    ThreeDimensionalObjectsBox.style.width = "300px";
    //Add Text
    //increase size of svg
  } else{
    //bring box back to normal properties
    ThreeDimensionalObjectsBox.style.height = "120px";
    ThreeDimensionalObjectsBox.style.width = "";
    ThreeDimensionalObjectsBox.style.flexGrow = "1";
  }
}

/*NumberOfSides.innerHTML = "3 sides triangle";
    ShapeLabel.style.opacity = "0";
    
    //GSAP animation
    tl.to(RegularTriangleBox, {duration: 1, height:200}, 0);
    tl.to(RegularTriangleBox, {duration: 1, width:200}, 0);
    tl.to(RegularTriangleSVG, {duration: 1, width: 290}, 1);
    tl.to(RegularTriangleSVG, {duration: 1, margin: 40}, 0);
    tl.to(RegularTriangleSVG, {duration: 2, attr:{viewBox:"140 -3 90 90"}}, 2);
    tl.to(TriangleInfo, {duration: 1, attr:{x:"140"}}, 3);
*/
