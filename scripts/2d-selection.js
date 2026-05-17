import { calcTriangleArea } from "./area-calc.js"; 
import { calcSquareArea } from "./area-calc.js";
import { calcRectangleArea } from "./area-calc.js";
import { calcCircleArea } from "./area-calc.js";
import { calcTrapezoidArea } from "./area-calc.js";
import { calcParallelogramArea } from "./area-calc.js";


const triangleAreaCalc = document.querySelector("#triangle-area-calculator").innerHTML;
const squareAreaCalc = document.querySelector("#square-area-calculator").innerHTML;
const rectangleAreaCalc = document.querySelector("#rectangle-area-calculator").innerHTML;
const circleAreaCalc = document.querySelector("#circle-area-calculator").innerHTML;
const trapezoidAreaCalc = document.querySelector("#trapezoid-area-calculator").innerHTML;
const parallelogramAreaCalc = document.querySelector("#parallelogram-area-calculator").innerHTML;


let shapeSelector = document.querySelector("#shape-selector");
let mainView = document.querySelector("#main-view");

shapeSelector.addEventListener("change" , () => {
  const selectedShape = shapeSelector.value;
  switch (selectedShape) {
    case "triangle":
      mainView.innerHTML = triangleAreaCalc;
      const triangleButton = document.querySelector(".js-triangle-button");
      if (triangleButton) {
        triangleButton.addEventListener("click", calcTriangleArea);
      }
    break;
    case "square":
      mainView.innerHTML = squareAreaCalc;
      const squareButton = document.querySelector(".js-square-button");
      if (squareButton) {
        squareButton.addEventListener("click", calcSquareArea);
      }
    break;
    case "rectangle":
      mainView.innerHTML = rectangleAreaCalc;
      const rectangleButton = document.querySelector(".js-rectangle-button");
      if(rectangleButton) {
        rectangleButton.addEventListener("click", calcRectangleArea);
      }
    break;
    case "circle":
      mainView.innerHTML = circleAreaCalc;
      const circleButton = document.querySelector(".js-circle-button");
      if(circleButton) {
        circleButton.addEventListener("click", calcCircleArea);
      }
    break;
    case "trapezoid":
      mainView.innerHTML = trapezoidAreaCalc;
      const trapezoidButton = document.querySelector(".js-trapezoid-button");
      if(trapezoidButton) {
        trapezoidButton.addEventListener("click", calcTrapezoidArea);
      }
    break;
    case "parallelogram":
      mainView.innerHTML = parallelogramAreaCalc;
      const parallelogramButton = document.querySelector(".js-parallelogram-button");
      if(parallelogramButton) {
        parallelogramButton.addEventListener("click", calcParallelogramArea);
      }
    break;
    
  }
})