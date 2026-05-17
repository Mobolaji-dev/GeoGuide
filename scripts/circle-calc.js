// Circle Circumference
const circleCircumferenceButton = document.querySelector(".js-circumference-button");

export function calcCircleCircumference () {
  let circleRadius = document.querySelector(".js-circumference-radius");
  let circleCircumference = document.querySelector(".js-circle-circumference");

  let radius = circleRadius.value;
  let circumference = circleCircumference.value;

  let result;

  if (!circumference) {
    result = (2 * Math.PI * radius).toFixed(2);
    circleCircumference.value = result;
  } else if (!radius) {
    result = (circumference / (2 * Math.PI)).toFixed(2);
    circleRadius.value = result;
  }
}

circleCircumferenceButton.addEventListener("click", calcCircleCircumference);

// Circle Area
const circleButton = document.querySelector(".js-area-button");

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

circleButton.addEventListener("click", calcCircleArea);

// Arc Length
const arcButton = document.querySelector(".js-arc-button");

export function calcArcLength () {
  let arcRadius = document.querySelector(".js-arc-radius");
  let arcAngle = document.querySelector(".js-arc-angle");
  let arcLengthField = document.querySelector(".js-arc-length");

  let r = Number(arcRadius.value);
  let theta = Number(arcAngle.value);
  let s = Number(arcLengthField.value);

  let result;

  if (!s) {
    result = ((theta / 360) * 2 * Math.PI * r).toFixed(2);
    arcLengthField.value = result;
  } else if (!r) {
    result = (s / ((theta / 360) * 2 * Math.PI)).toFixed(2);
    arcRadius.value = result;
  } else if (!theta) {
    result = ((s * 360) / (2 * Math.PI * r)).toFixed(2);
    arcAngle.value = result;
  }
}

arcButton.addEventListener("click", calcArcLength);


// Area of a Sector
const sectorButton = document.querySelector(".js-sector-button");

export function calcSectorArea () {
  let sectorRadius = document.querySelector(".js-sector-radius");
  let sectorAngle = document.querySelector(".js-sector-angle");
  let sectorAreaField = document.querySelector(".js-sector-area");

  let r = Number(sectorRadius.value);
  let theta = Number(sectorAngle.value);
  let area = Number(sectorAreaField.value);

  let result;

  if (!area) {
    result = ((theta / 360) * Math.PI * (r ** 2)).toFixed(2);
    sectorAreaField.value = result;
  } else if (!r) {
    result = (Math.sqrt(area / ((theta / 360) * Math.PI))).toFixed(2);
    sectorRadius.value = result;
  } else if (!theta) {
    result = ((area * 360) / (Math.PI * (r ** 2))).toFixed(2);
    sectorAngle.value = result;
  }
}

sectorButton.addEventListener("click", calcSectorArea);

// Area of a Segment
const segmentButton = document.querySelector(".js-segment-button");

export function calcSegmentArea () {
  let segmentRadius = document.querySelector(".js-segment-radius");
  let segmentAngle = document.querySelector(".js-segment-angle");
  let segmentAreaField = document.querySelector(".js-segment-area");

  let r = Number(segmentRadius.value);
  let thetaDeg = Number(segmentAngle.value);
  
  // Convert degrees to radians for JS Math functions
  let thetaRad = (thetaDeg * Math.PI) / 180;

  let result;

  // This formula calculates the area of the minor segment
  if (r && thetaDeg) {
    result = ((r ** 2) / 2 * (thetaRad - Math.sin(thetaRad))).toFixed(2);
    segmentAreaField.value = result;
  }
}

segmentButton.addEventListener("click", calcSegmentArea);