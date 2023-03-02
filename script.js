//slider functionality
const slider = document.getElementById('gridSize');
const output = document.getElementById('sliderValue');
let gridSize = slider.value;

const pixelDisplay = function () {
  output.innerHTML = gridSize;
};

slider.oninput = function () {
  gridSize = this.value; // stores number of grid cells in gridSize variable
  pixelDisplay(); // rewrite Pixels with ^^ value
  makeGrid(gridSize);
};

// create grid
let board = document.querySelector('.grid-container');
let selectCells = board.querySelectorAll('div');

const makeGrid = function (size) {
  selectCells.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`; // creates layout
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let numberOfCells = size ** 2; //create divs according to size
  for (i = 0; i < numberOfCells; i++) {
    let cell = document.createElement('div');
    cell.style.backgroundColor = 'pink';
    cell.addEventListener('mouseover', colorCell);
    board.insertAdjacentElement('beforeend', cell);
  }
};

// color functionality
let color = 'black';

const colorCell = function () {
  this.style.backgroundColor = color;
};

// button functionality

//INITIALIZE:

makeGrid(gridSize);

pixelDisplay(); // writes Pixels: 'current slider value'
