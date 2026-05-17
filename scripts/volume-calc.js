// Cube Volume
const cubeButton = document.querySelector(".js-cube-button");

export function calcCubeVolume () {
  let cubeSide = document.querySelector(".js-cube-side");
  let cubeVolume = document.querySelector(".js-cube-volume");

  let side = cubeSide.value;
  let volume = cubeVolume.value;

  let result;

  if (!volume) {
    result = (side ** 3).toFixed(2);
    cubeVolume.value = result;
  } else if (!side) {
    result = (Math.cbrt(volume)).toFixed(2);
    cubeSide.value = result;
  }
}

cubeButton.addEventListener("click", calcCubeVolume);

// Cuboid Volume
const cuboidButton = document.querySelector(".js-cuboid-button");

export function calcCuboidVolume () {
  let cuboidLength = document.querySelector(".js-cuboid-length");
  let cuboidWidth = document.querySelector(".js-cuboid-width");
  let cuboidHeight = document.querySelector(".js-cuboid-height");
  let cuboidVolume = document.querySelector(".js-cuboid-volume");

  let length = Number(cuboidLength.value);
  let width = Number(cuboidWidth.value);
  let height = Number(cuboidHeight.value);
  let volume = Number(cuboidVolume.value);

  let result;

  if (!volume) {
    result = (length * width * height).toFixed(2);
    cuboidVolume.value = result;
  } else if (!length) {
    result = (volume / (width * height)).toFixed(2);
    cuboidLength.value = result;
  } else if (!width) {
    result = (volume / (length * height)).toFixed(2);
    cuboidWidth.value = result;
  } else if (!height) {
    result = (volume / (length * width)).toFixed(2);
    cuboidHeight.value = result;
  }
}

cuboidButton.addEventListener("click", calcCuboidVolume);

// Cylinder Volume
const cylinderButton = document.querySelector(".js-cylinder-button");

export function calcCylinderVolume () {
  let cylinderRadius = document.querySelector(".js-cylinder-radius");
  let cylinderHeight = document.querySelector(".js-cylinder-height");
  let cylinderVolume = document.querySelector(".js-cylinder-volume");

  let r = cylinderRadius.value;
  let h = cylinderHeight.value;
  let volume = cylinderVolume.value;

  let result;

  if (!volume) {
    result = (Math.PI * (r**2) * h).toFixed(2);
    cylinderVolume.value = result;
  } else if (!r) {
    result = (Math.sqrt(volume / (Math.PI * h))).toFixed(2);
    cylinderRadius.value = result;
  } else if (!h) {
    result = (volume / (Math.PI * (r**2))).toFixed(2);
    cylinderHeight.value = result;
  }
}

cylinderButton.addEventListener("click", calcCylinderVolume);

// Cone Volume
const coneButton = document.querySelector(".js-cone-button");

export function calcConeVolume () {
  let coneRadius = document.querySelector(".js-cone-radius");
  let coneHeight = document.querySelector(".js-cone-height");
  let coneVolume = document.querySelector(".js-cone-volume");

  let r = coneRadius.value;
  let h = coneHeight.value;
  let volume = coneVolume.value;

  let result;

  if (!volume) {
    result = ((1/3) * Math.PI * (r**2) * h).toFixed(2);
    coneVolume.value = result;
  } else if (!r) {
    result = (Math.sqrt(volume / ((1/3) * Math.PI * h))).toFixed(2);
    coneRadius.value = result;
  } else if (!h) {
    result = (volume / ((1/3) * Math.PI * (r**2))).toFixed(2);
    coneHeight.value = result;
  }
}

coneButton.addEventListener("click", calcConeVolume);


// Sphere Volume
const sphereVolButton = document.querySelector(".js-sphere-vol-button");

export function calcSphereVolume () {
  let sphereRadius = document.querySelector(".js-sphere-radius");
  let sphereVolume = document.querySelector(".js-sphere-volume");

  let radius = sphereRadius.value;
  let volume = sphereVolume.value;

  let result;

  if (!volume) {
    result = ((4/3) * Math.PI * (radius**3)).toFixed(2);
    sphereVolume.value = result;
  } else if (!radius) {
    result = (Math.cbrt(volume / ((4/3) * Math.PI))).toFixed(2);
    sphereRadius.value = result;
  }
}

sphereVolButton.addEventListener("click", calcSphereVolume);