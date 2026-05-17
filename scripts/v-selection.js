import { calcCubeVolume } from "./volume-calc.js";
import { calcCuboidVolume } from "./volume-calc.js";
import { calcCylinderVolume } from "./volume-calc.js";
import { calcConeVolume } from "./volume-calc.js";
import { calcSphereVolume } from "./volume-calc.js";


const cubeCalc = document.querySelector("#cube-volume").innerHTML;
const cuboidCalc = document.querySelector("#cuboid-volume").innerHTML;
const cylinderCalc = document.querySelector("#cylinder-volume").innerHTML;
const coneCalc = document.querySelector("#cone-volume").innerHTML;
const sphereCalc= document.querySelector("#sphere-volume").innerHTML;


let shapeSelector = document.querySelector("#shape-selector");
let mainView = document.querySelector("#main-view");

shapeSelector.addEventListener("change" , () => {
  const selectedShape = shapeSelector.value;
  switch (selectedShape) {
    case "cube":
      mainView.innerHTML = cubeCalc;
      const cubeButton = document.querySelector(".js-cube-button");
        if(cubeButton) {
          cubeButton.addEventListener("click", calcCubeVolume);
        }
    break; 
    case "cuboid":
      mainView.innerHTML = cuboidCalc;
      const cuboidButton = document.querySelector(".js-cuboid-button");
        if(cuboidButton) {
          cuboidButton.addEventListener("click", calcCuboidVolume);
        }
    break;
    case "cylinder":
      mainView.innerHTML = cylinderCalc;
      const cylinderButton = document.querySelector(".js-cylinder-button");
        if(cylinderButton) {
          cylinderButton.addEventListener("click", calcCylinderVolume);
        }
    break;
    case "cone":
      mainView.innerHTML = coneCalc;
      const coneButton = document.querySelector(".js-cone-button");
        if(coneButton) {
          coneButton.addEventListener("click", calcConeVolume);
        }
    break;
    case "sphere":
      mainView.innerHTML = sphereCalc;
      const sphereButton = document.querySelector(".js-sphere-vol-button");
        if(sphereButton) {
          sphereButton.addEventListener("click", calcSphereVolume);
        }
    break;
    
  }
})