// Triangle Perimeter
const triangleButton = document.querySelector(".js-triangle-button");

export function calcTrianglePerimeter () {
  let triangleSideA = document.querySelector(".js-triangle-side-a");
  let triangleSideB = document.querySelector(".js-triangle-side-b");
  let triangleSideC = document.querySelector(".js-triangle-side-c");
  let trianglePerimeter = document.querySelector(".js-triangle-perimeter");

  let sideA = Number(triangleSideA.value);
  let sideB = Number(triangleSideB.value);
  let sideC = Number(triangleSideC.value);
  let perimeter = Number(trianglePerimeter.value);

  let result;

  if (!perimeter) {
    result = (sideA + sideB + sideC).toFixed(2);
    trianglePerimeter.value = result;
  } else if (!sideA) {
    result = (perimeter - sideB - sideC).toFixed(2);
    triangleSideA.value = result;
  } else if (!sideB) {
    result = (perimeter - sideA - sideC).toFixed(2);
    triangleSideB.value = result;
  } else if (!sideC) {
    result = (perimeter - sideA - sideB).toFixed(2);
    triangleSideC.value = result;
  }
}

triangleButton.addEventListener("click", calcTrianglePerimeter);

// Square Perimeter
const squareButton = document.querySelector(".js-square-button");

export function calcSquarePerimeter () {
  let squareSide = document.querySelector(".js-square-side");
  let squarePerimeter = document.querySelector(".js-square-perimeter");

  let side = squareSide.value;
  let perimeter = squarePerimeter.value;

  let result;

  if (!perimeter) {
    result = (side * 4).toFixed(2);
    squarePerimeter.value = result;
  } else if (!side) {
    result = (perimeter / 4).toFixed(2);
    squareSide.value = result;
  }
}

squareButton.addEventListener("click", calcSquarePerimeter);

// Rectangle Perimeter
const rectangleButton = document.querySelector(".js-rectangle-button");

export function calcRectanglePerimeter () {
  let rectangleLength = document.querySelector(".js-rectangle-length");
  let rectangleWidth = document.querySelector(".js-rectangle-width");
  let rectanglePerimeter = document.querySelector(".js-rectangle-perimeter");

  let length = Number(rectangleLength.value);
  let width = Number(rectangleWidth.value);
  let perimeter = Number(rectanglePerimeter.value);

  let result;

  if (!perimeter) {
    result = (2 * (length + width)).toFixed(2);
    rectanglePerimeter.value = result;
  } else if (!length) {
    result = ((perimeter / 2) - width).toFixed(2);
    rectangleLength.value = result;
  } else if (!width) {
    result = ((perimeter / 2) - length).toFixed(2);
    rectangleWidth.value = result;
  }
}

rectangleButton.addEventListener("click", calcRectanglePerimeter);

// Circle Perimeter
const circleButton = document.querySelector(".js-circle-button");

export function calcCirclePerimeter () {
  let circleRadius = document.querySelector(".js-circle-radius");
  let circlePerimeter = document.querySelector(".js-circle-perimeter");

  let radius = circleRadius.value;
  let perimeter = circlePerimeter.value;

  let result;

  if (!perimeter) {
    result = (2 * Math.PI * radius).toFixed(2);
    circlePerimeter.value = result;
  } else if (!radius) {
    result = (perimeter / (2 * Math.PI)).toFixed(2);
    circleRadius.value = result;
  }
}

circleButton.addEventListener("click", calcCirclePerimeter);

// Parallelogram Perimeter
const parallelogramButton = document.querySelector(".js-parallelogram-button");

export function calcParallelogramPerimeter () {
  let parallelogramBase = document.querySelector(".js-parallelogram-base");
  let parallelogramSide = document.querySelector(".js-parallelogram-side");
  let parallelogramPerimeter = document.querySelector(".js-parallelogram-perimeter");

  let base = Number(parallelogramBase.value);
  let side = Number(parallelogramSide.value);
  let perimeter = Number(parallelogramPerimeter.value);

  let result;

  if (!perimeter) {
    result = (2 * (base + side)).toFixed(2);
    parallelogramPerimeter.value = result;
  } else if (!base) {
    result = ((perimeter / 2) - side).toFixed(2);
    parallelogramBase.value = result;
  } else if (!side) {
    result = ((perimeter / 2) - base).toFixed(2);
    parallelogramSide.value = result;
  }
}

parallelogramButton.addEventListener("click", calcParallelogramPerimeter);

// Regular Polygon Perimeter
const polygonButton = document.querySelector(".js-polygon-button");

export function calcPolygonPerimeter () {
  let polygonSides = document.querySelector(".js-polygon-sides");
  let polygonLength = document.querySelector(".js-polygon-length");
  let polygonPerimeter = document.querySelector(".js-polygon-perimeter");

  let n = polygonSides.value;
  let s = polygonLength.value;
  let perimeter = polygonPerimeter.value;

  let result;

  if (!perimeter) {
    result = (n * s).toFixed(2);
    polygonPerimeter.value = result;
  } else if (!n) {
    result = (perimeter / s).toFixed(2);
    polygonSides.value = result;
  } else if (!s) {
    result = (perimeter / n).toFixed(2);
    polygonLength.value = result;
  }
}

polygonButton.addEventListener("click", calcPolygonPerimeter);
