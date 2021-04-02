
var items = document.getElementsByClassName('items');
var svg = document.getElementsByClassName("svg");
var info = document.getElementsByClassName("info");
var heads = document.getElementsByClassName("heads");

//Regular and Irregular Click Event
for(var i = 0; i <= 11; i++) (function(i){
  const tl = gsap.timeline();
 tl
    .to(svg[i], {duration: .1, width: 290}, 1)
    .to(svg[i], {duration: 1.5,  attr:{viewBox:"140 -3 90 90"}}, 1.5)
    .to(info[i], {duration: 1, attr:{x:"140"}}, 2.5);
tl.pause();
  
  items[i].onclick = function(){
    if(items[i].style.height == "120px"){
    items[i].style.height = "200px";
    items[i].style.width = "200px";
    svg[i].style.margin = "40px";
    tl.play()  
  } else{ 
    items[i].style.height = "120px";
    items[i].style.width = "";
    svg[i].style.margin = "1px";
    tl.reverse()
  }
}
})(i);

//Types of Polygon Click Event
for(var o = 0; o < items.length; o++) (function(o){
  const tl = gsap.timeline();
 tl
    .to(svg[o], {duration: .1, width: 400}, 1)
    .to(svg[o], {duration: 1.5,  attr:{viewBox:"140 5 90 90"}}, 1.5)
    .to(info[o], {duration: 1, attr:{x:"140"}}, 2.5);
tl.pause();
  
  items[o].onclick = function(){
    if(items[o].style.height == "120px"){
    items[o].style.height = "200px";
    items[o].style.width = "200px";
    svg[o].style.margin = "40px";
    tl.play()  
  } else{ 
    items[o].style.height = "120px";
    items[o].style.width = "";
    svg[o].style.margin = "1px";
    tl.reverse()
  }
}
})(o);

//Regular Polygon Row Head Hover
const regularRow = document.getElementsByClassName("regular-items");

heads[0].addEventListener("mouseenter", e => { 
  for(var a = 0; a < regularRow.length; a++) {
 regularRow[a].style.height = "150px";  
  }
})
heads[0].addEventListener("mouseleave", e => { 
 for(var a = 0; a < regularRow.length; a++) {
 regularRow[a].style.height = "120px";  
 }
})

//Irregular Polygon Row Head Hover
const irregularRow = document.getElementsByClassName("irregular-items");

heads[1].addEventListener("mouseenter", e => { 
  for(var a = 0; a < irregularRow.length; a++) {
 irregularRow[a].style.height = "150px";  
  }
})
heads[1].addEventListener("mouseleave", e => { 
 for(var a = 0; a < irregularRow.length; a++) {
 irregularRow[a].style.height = "120px";  
 }
})

//Types Polygon Row Head Hover
const typePolygonRow = document.getElementsByClassName("type-items");

heads[2].addEventListener("mouseenter", e => { 
  for(var a = 0; a < typePolygonRow.length; a++) {
 typePolygonRow[a].style.height = "150px";  
  }
})

heads[2].addEventListener("mouseleave", e => { 
 for(var a = 0; a < typePolygonRow.length; a++) {
 typePolygonRow[a].style.height = "120px";  
 }
})

//Non Polygon Row Head Hover
const nonPolygonRow = document.getElementsByClassName("non-polygon-items");

heads[3].addEventListener("mouseenter", e => { 
  for(var a = 0; a < nonPolygonRow.length; a++) {
 nonPolygonRow[a].style.height = "150px";  
  }
})

heads[3].addEventListener("mouseleave", e => { 
 for(var a = 0; a < nonPolygonRow.length; a++) {
 nonPolygonRow[a].style.height = "120px";  
 }
})
