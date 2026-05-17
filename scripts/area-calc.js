// Triangle Area
const triangleButton = document.querySelector(".js-triangle-button");

export function calcTriangleArea () {
  let triangleBase = document.querySelector(".js-triangle-base");
  let triangleHeight = document.querySelector(".js-triangle-height");
  let triangleArea = document.querySelector(".js-triangle-area");

  let base = triangleBase.value;
  let height = triangleHeight.value;
  let area = triangleArea.value;

  let result;

  if (!area) {
    result = (0.5 * base * height).toFixed(2) ;
    triangleArea.value = result;
  } else if (!base) {
    result = ((2 * area)/height).toFixed(2);
    triangleBase.value = result
  } else if (!height) {
    result = ((2 * area)/base).toFixed(2);
    triangleHeight.value = result
  }  
}

if (triangleButton) {
  triangleButton.addEventListener("click", calcTriangleArea);
}



// Sqauare Area
const squareButton = document.querySelector(".js-square-button");

export function calcSquareArea () {
  let squareLength = document.querySelector(".js-square-length");
  let squareArea = document.querySelector(".js-square-area");

  let length = squareLength.value;
  let area = squareArea.value;

  let result;

  if (!area) {
    result = (length**2).toFixed(2) ;
    squareArea.value = result;
  } else if (!length) {
    result = (Math.sqrt(area)).toFixed(2);
    squareLength.value = result
  } 
}

if (squareButton) {
  squareButton.addEventListener("click", calcSquareArea);
}

// Rectangle Area
const rectangleButton = document.querySelector(".js-rectangle-button");

export function calcRectangleArea () {
  let rectangleLength = document.querySelector(".js-rectangle-length");
  let rectangleWidth = document.querySelector(".js-rectangle-width");
  let rectangleArea = document.querySelector(".js-rectangle-area");

  let length = rectangleLength.value;
  let width = rectangleWidth.value;
  let area = rectangleArea.value;

  let result;

  if (!area) {
    result = (length * width).toFixed(2);
    rectangleArea.value = result;
  } else if (!length) {
    result = (area / width).toFixed(2);
    rectangleLength.value = result;
  } else if (!width) {
    result = (area / length).toFixed(2);
    rectangleWidth.value = result;
  }
}

if (rectangleButton) {
  rectangleButton.addEventListener("click", calcRectangleArea);
}


// Circle Area
const circleButton = document.querySelector(".js-circle-button");

export function calcCircleArea () {
  let circleRadius = document.querySelector(".js-circle-radius");
  let circleArea = document.querySelector(".js-circle-area");

  let radius = circleRadius.value;
  let area = circleArea.value;

  let result;

  if (!area) {
    result = (Math.PI * (radius**2)).toFixed(2);
    circleArea.value = result;
  } else if (!radius) {
    result = (Math.sqrt(area / Math.PI)).toFixed(2);
    circleRadius.value = result;
  }
}

if (circleButton) {
  circleButton.addEventListener("click", calcCircleArea);
}


// Trapezoid Area
const trapezoidButton = document.querySelector(".js-trapezoid-button");

export function calcTrapezoidArea () {
  let trapezoidBaseA = document.querySelector(".js-trapezoid-base-a");
  let trapezoidBaseB = document.querySelector(".js-trapezoid-base-b");
  let trapezoidHeight = document.querySelector(".js-trapezoid-height");
  let trapezoidArea = document.querySelector(".js-trapezoid-area");

  let baseA = Number(trapezoidBaseA.value);
  let baseB = Number(trapezoidBaseB.value);
  let height = Number(trapezoidHeight.value);
  let area = Number(trapezoidArea.value);

  let result;

  if (!area) {
    result = (((baseA + baseB) / 2) * height).toFixed(2);
    trapezoidArea.value = result;
  } else if (!height) {
    result = ((2 * area) / (baseA + baseB)).toFixed(2);
    trapezoidHeight.value = result;
  } else if (!baseA) {
    result = (((2 * area) / height) - baseB).toFixed(2);
    trapezoidBaseA.value = result;
  } else if (!baseB) {
    result = (((2 * area) / height) - baseA).toFixed(2);
    trapezoidBaseB.value = result;
  }
}

if (trapezoidButton) {
  trapezoidButton.addEventListener("click", calcTrapezoidArea);
}

// Parallelogram Area
const parallelogramButton = document.querySelector(".js-parallelogram-button");

export function calcParallelogramArea () {
  let parallelogramBase = document.querySelector(".js-parallelogram-base");
  let parallelogramHeight = document.querySelector(".js-parallelogram-height");
  let parallelogramArea = document.querySelector(".js-parallelogram-area");

  let base = parallelogramBase.value;
  let height = parallelogramHeight.value;
  let area = parallelogramArea.value;

  let result;

  if (!area) {
    result = (base * height).toFixed(2);
    parallelogramArea.value = result;
  } else if (!base) {
    result = (area / height).toFixed(2);
    parallelogramBase.value = result;
  } else if (!height) {
    result = (area / base).toFixed(2);
    parallelogramHeight.value = result;
  }
}

if (parallelogramButton) {
  parallelogramButton.addEventListener("click", calcParallelogramArea);
}

//3D
// Cube Area
const cubeButton = document.querySelector(".js-cube-button");

export function calcCubeArea () {
  let cubeSide = document.querySelector(".js-cube-side");
  let cubeArea = document.querySelector(".js-cube-area");

  let side = cubeSide.value;
  let area = cubeArea.value;

  let result;

  if (!area) {
    result = (6 * (side ** 2)).toFixed(2);
    cubeArea.value = result;
  } else if (!side) {
    result = (Math.sqrt(area / 6)).toFixed(2);
    cubeSide.value = result;
  }
}

if (cubeButton) {
  cubeButton.addEventListener("click", calcCubeArea);
}

// Cuboid Area
const cuboidButton = document.querySelector(".js-cuboid-button");

export function calcCuboidArea () {
  let cuboidLength = document.querySelector(".js-cuboid-length");
  let cuboidWidth = document.querySelector(".js-cuboid-width");
  let cuboidHeight = document.querySelector(".js-cuboid-height");
  let cuboidArea = document.querySelector(".js-cuboid-area");

  let l = Number(cuboidLength.value);
  let w = Number(cuboidWidth.value);
  let h = Number(cuboidHeight.value);
  let area = Number(cuboidArea.value);

  let result;

  if (!area) {
    result = (2 * (l * w + l * h + w * h)).toFixed(2);
    cuboidArea.value = result;
  } else if (!l) {
    result = ((area / 2 - w * h) / (w + h)).toFixed(2);
    cuboidLength.value = result;
  } else if (!w) {
    result = ((area / 2 - l * h) / (l + h)).toFixed(2);
    cuboidWidth.value = result;
  } else if (!h) {
    result = ((area / 2 - l * w) / (l + w)).toFixed(2);
    cuboidHeight.value = result;
  }
}

if (cuboidButton) {
  cuboidButton.addEventListener("click", calcCuboidArea);
}

// Cylinder Area
const cylinderButton = document.querySelector(".js-cylinder-button");

export function calcCylinderArea () {
  let cylinderRadius = document.querySelector(".js-cylinder-radius");
  let cylinderHeight = document.querySelector(".js-cylinder-height");
  let cylinderArea = document.querySelector(".js-cylinder-area");

  let r = Number(cylinderRadius.value);
  let h = Number(cylinderHeight.value);
  let area = Number(cylinderArea.value);

  let result;

  if (!area) {
    result = (2 * Math.PI * r * (r + h)).toFixed(2);
    cylinderArea.value = result;
  } else if (!h) {
    result = ((area / (2 * Math.PI * r)) - r).toFixed(2);
    cylinderHeight.value = result;
  } else if (!r) {
    // Note: Finding r from area and h requires solving a quadratic equation.
    // result = (-2πh + sqrt((2πh)² + 8πA)) / 4π
    result = ((- (2 * Math.PI * h) + Math.sqrt(Math.pow(2 * Math.PI * h, 2) + 8 * Math.PI * area)) / (4 * Math.PI)).toFixed(2);
    cylinderRadius.value = result;
  }
}

if (cylinderButton) {
  cylinderButton.addEventListener("click", calcCylinderArea);
}


// Cone Area
const coneButton = document.querySelector(".js-cone-button");

export function calcConeArea () {
  let coneRadius = document.querySelector(".js-cone-radius");
  let coneSlant = document.querySelector(".js-cone-slant");
  let coneArea = document.querySelector(".js-cone-area");

  let r = Number(coneRadius.value);
  let s = Number(coneSlant.value);
  let area = Number(coneArea.value);

  let result;

  if (!area) {
    result = (Math.PI * r * (r + s)).toFixed(2);
    coneArea.value = result;
  } else if (!s) {
    result = ((area / (Math.PI * r)) - r).toFixed(2);
    coneSlant.value = result;
  } else if (!r) {
    // result = (-πs + sqrt((πs)² + 4πA)) / 2π
    result = ((- (Math.PI * s) + Math.sqrt(Math.pow(Math.PI * s, 2) + 4 * Math.PI * area)) / (2 * Math.PI)).toFixed(2);
    coneRadius.value = result;
  }
}

if (coneButton) {
  coneButton.addEventListener("click", calcConeArea);
}

// Sphere Area
const sphereButton = document.querySelector(".js-sphere-button");

export function calcSphereArea () {
  let sphereRadius = document.querySelector(".js-sphere-radius");
  let sphereArea = document.querySelector(".js-sphere-area");

  let radius = sphereRadius.value;
  let area = sphereArea.value;

  let result;

  if (!area) {
    result = (4 * Math.PI * (radius**2)).toFixed(2);
    sphereArea.value = result;
  } else if (!radius) {
    result = (Math.sqrt(area / (4 * Math.PI))).toFixed(2);
    sphereRadius.value = result;
  }
}

if (sphereButton) {
  sphereButton.addEventListener("click", calcSphereArea);
}