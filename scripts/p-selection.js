import { calcTrianglePerimeter } from "./perimeter-calc.js";
import { calcSquarePerimeter } from "./perimeter-calc.js";
import { calcRectanglePerimeter } from "./perimeter-calc.js";
import { calcCirclePerimeter } from "./perimeter-calc.js";
import { calcParallelogramPerimeter } from "./perimeter-calc.js";
import { calcPolygonPerimeter } from "./perimeter-calc.js";


const triangleCalc = document.querySelector("#triangle-perimeter").innerHTML;
const squareCalc = document.querySelector("#square-perimeter").innerHTML;
const rectangleCalc = document.querySelector("#rectangle-perimeter").innerHTML;
const circleCalc = document.querySelector("#circle-perimeter").innerHTML;
const parallelogramCalc= document.querySelector("#parallelogram-perimeter").innerHTML;
const polygonCalc = document.querySelector
("#polygon-perimeter").innerHTML;


let shapeSelector = document.querySelector("#shape-selector");
let mainView = document.querySelector("#main-view");

shapeSelector.addEventListener("change" , () => {
  const selectedShape = shapeSelector.value;
  switch (selectedShape) {
    case "triangle":
      mainView.innerHTML = triangleCalc;
      const triangleButton = document.querySelector(".js-triangle-button");
        if(triangleButton) {
          triangleButton.addEventListener("click", calcTrianglePerimeter);
        }
    break; 
    case "square":
      mainView.innerHTML = squareCalc;
      const squareButton = document.querySelector(".js-square-button");
        if(squareButton) {
          squareButton.addEventListener("click", calcSquarePerimeter);
        }
    break;
    case "rectangle":
      mainView.innerHTML = rectangleCalc;
      const rectangleButton = document.querySelector(".js-rectangle-button");
        if(rectangleButton) {
          rectangleButton.addEventListener("click", calcRectanglePerimeter);
        }
    break;
    case "circle":
      mainView.innerHTML = circleCalc;
      const circleButton = document.querySelector(".js-circle-button");
        if(circleButton) {
          circleButton.addEventListener("click", calcCirclePerimeter);
        }
    break;
    case "parallelogram":
      mainView.innerHTML = parallelogramCalc;
      const parallelogramButton = document.querySelector(".js-parallelogram-button");
        if(parallelogramButton) {
          parallelogramButton.addEventListener("click", calcParallelogramPerimeter);
        }
    break; 
    case "polygon":
      mainView.innerHTML = polygonCalc ;
      const polygonButton = document.querySelector(".js-polygon-button");
        if(polygonButton) {
          polygonButton.addEventListener("click", calcPolygonPerimeter);
        }
    break; 
    
  }
})