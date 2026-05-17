import { calcCircleCircumference } from "./circle-calc.js";
import { calcCircleArea } from "./circle-calc.js";
import { calcArcLength } from "./circle-calc.js";
import { calcSectorArea } from "./circle-calc.js";
import { calcSegmentArea} from "./circle-calc.js";


const circumferenceCalc = document.querySelector("#circle-circumference").innerHTML;
const areaCalc = document.querySelector("#circle-area").innerHTML;
const arcCalc = document.querySelector("#circle-arc-length").innerHTML;
const sectorCalc = document.querySelector("#circle-sector-area").innerHTML;
const segmentCalc = document.querySelector("#circle-segment-area").innerHTML;


let shapeSelector = document.querySelector("#shape-selector");
let mainView = document.querySelector("#main-view");

shapeSelector.addEventListener("change" , () => {
  const selectedShape = shapeSelector.value;
  switch (selectedShape) {
    case "circumference":
      mainView.innerHTML = circumferenceCalc;
      const circumferenceButton = document.querySelector(".js-circumference-button");
        if(circumferenceButton) {
          circumferenceButton.addEventListener("click", calcCircleCircumference);
        }
    break; 
    case "area":
      mainView.innerHTML = areaCalc;
      const areaButton = document.querySelector(".js-area-button");
        if(areaButton) {
          areaButton.addEventListener("click", calcCircleArea);
        }
    break;
    case "arc":
      mainView.innerHTML = arcCalc;
      const arcButton = document.querySelector(".js-arc-button");
        if(arcButton) {
          arcButton.addEventListener("click", calcArcLength);
        }
    break;
    case "sector":
      mainView.innerHTML = sectorCalc;
      const sectorButton = document.querySelector(".js-sector-button");
        if(sectorButton) {
          sectorButton.addEventListener("click", calcSectorArea);
        }
    break;
    case "segment":
      mainView.innerHTML = segmentCalc;
      const segmentButton = document.querySelector(".js-segment-button");
        if(segmentButton) {
          segmentButton.addEventListener("click", calcSegmentArea);
        }
    break; 
    
  }
})