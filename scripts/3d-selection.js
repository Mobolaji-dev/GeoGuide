import { calcCubeArea } from "./area-calc.js";
import { calcCuboidArea } from "./area-calc.js";
import { calcCylinderArea } from "./area-calc.js";
import { calcConeArea } from "./area-calc.js";
import { calcSphereArea } from "./area-calc.js";


const cubeAreaCalc = document.querySelector("#cube-area-calculator").innerHTML;
const cuboidAreaCalc = document.querySelector("#cuboid-area-calculator").innerHTML;
const cylinderAreaCalc = document.querySelector("#cylinder-area-calculator").innerHTML;
const coneAreaCalc = document.querySelector("#cone-area-calculator").innerHTML;
const sphereAreaCalc = document.querySelector("#sphere-area-calculator").innerHTML;


let shapeSelector = document.querySelector("#shape-selector");
let mainView = document.querySelector("#main-view");

shapeSelector.addEventListener("change" , () => {
  const selectedShape = shapeSelector.value;
  switch (selectedShape) {
    case "cube":
      mainView.innerHTML = cubeAreaCalc;
      const cubeButton = document.querySelector(".js-cube-button");
        if(cubeButton) {
          cubeButton.addEventListener("click", calcCubeArea);
        }
    break; 
    case "cuboid":
      mainView.innerHTML = cuboidAreaCalc;
      const cuboidButton = document.querySelector(".js-cuboid-button");
        if(cuboidButton) {
          cuboidButton.addEventListener("click", calcCuboidArea);
        }
    break;
    case "cylinder":
      mainView.innerHTML = cylinderAreaCalc;
      const cylinderButton = document.querySelector(".js-cylinder-button");
        if(cylinderButton) {
          cylinderButton.addEventListener("click", calcCylinderArea);
        }
    break;
    case "cone":
      mainView.innerHTML = coneAreaCalc;
      const coneButton = document.querySelector(".js-cone-button");
        if(coneButton) {
          coneButton.addEventListener("click", calcConeArea);
        }
    break;
    case "sphere":
      mainView.innerHTML = sphereAreaCalc;
      const sphereButton = document.querySelector(".js-sphere-button");
        if(sphereButton) {
          sphereButton.addEventListener("click", calcSphereArea);
        }
    break; 
    
  }
})