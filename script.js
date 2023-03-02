//slider functionality
const slider = document.getElementById('gridSize');
const output = document.getElementById('sliderValue');
let gridSize = slider.value;

const pixelDisplay = function () {
  output.innerHTML = gridSize;
};

pixelDisplay(); // writes Pixels: 'current slider value'

slider.oninput = function () {
  gridSize = this.value; // stores number of grid cells in gridSize variable
  pixelDisplay(); // rewrite Pixels with ^^ value
};
