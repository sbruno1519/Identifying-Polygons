# Identifying-Polygons

Link to the Project on [My Codepen](https://codepen.io/sbruno1519)<br> 
[Identifying Polygons](https://codepen.io/sbruno1519/pen/GRjzwer?editors=0100)

## Overview
This web app helps identify the differnet types of polygons. It was a part of an old Codepen challenge where you have to use polygons as your main inspiration. My personal goals for this challenge were use SVG's, and CSS Flexbox positioning for the first time. As well as use more advanced Javascript DOM methods.<br>

### DESIGN<br>

#### Inspiring Image for project
<img src = "https://www.skillsyouneed.com/images/geo/polygons.png" alt = "drawing" height = "450px"/>
Using the Codepen challenge of doing something inspired by Polygons I found this image when researching what I wanted to do and thought this would be a perfect oppurtunity to practice some basic SVG's and Flexbox. So I decided I wanted the project to be a responsive version of this image. I changed the color scheme and font up a bit to look more kid friendly. To find my color scheme I messed around a lot with [Coolors](https://coolors.co/) to find the right one. 

### SVG
All the SVG's in this project were coded by me except the 3d object. For the 3d object I used [Icons8](https://icons8.com/) for the SVG. The hardest part was making sure all the Regular Polygons were exactly the same angle and side length for each one.
### JAVASCRIPT
* I wanted all the individual boxes to be interactive so I gave them all hover effects. Some of the Hover Effects are in the CSS, and the more complicated part of the hover effects I put in Javascript.
* All the boxes are clickable except for the heads of each row
    * when an object is clicked an animation using the [GSAP](https://greensock.com/gsap/) library move the SVG over and display a brief description of the polygon
    * anytime the cursor leaves a box, even after it is clicked, the box will go back to normal size or the be shrunk to adjust to another hovered box in the same row
    

Resources used:<br>
* [Flexbox Froggy](https://flexboxfroggy.com/)
* [Icons8](https://icons8.com/) 
* [Coolors](https://coolors.co/)
* [GSAP](https://greensock.com/gsap/) 
