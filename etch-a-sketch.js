const grids = document.querySelector(".grids")

// Initial grid
createGrid(16);

// Create grid with given size
function createGrid(size) {
    grids.innerHTML = "";
    for (let i = 0; i < size*size; i++) {
        const square = document.createElement("div");
        square.className = "square";
        square.style.height = `${600/size}px`;
        square.style.width = `${600/size}px`;
        grids.appendChild(square);
    }
    paint();
}

// Create new grid with size selected by user
function changeSize(e) {
    let size = parseInt(e.target.id);
    createGrid(size);
}

// Add event listener to individual cells to change their background color when hovered
function paint() {
    const squares = document.querySelectorAll(".square");
    if (document.querySelector('input[name="color"]:checked').value === "Black") {
        for (let i = 0; i < squares.length; i++) {
            squares[i].removeEventListener("mouseenter", paintRainbow); // Remove previous event listeners
            squares[i].addEventListener("mouseenter", paintBlack);
        }
    } else if (document.querySelector('input[name="color"]:checked').value === "Rainbow") {
        for (let i = 0; i < squares.length; i++) {
            squares[i].removeEventListener("mouseenter", paintRainbow);
            squares[i].addEventListener("mouseenter", paintRainbow);
        }
    }
}

// Paint the cell with black
function paintBlack(e) {
    e.target.style.backgroundColor = "black";
}

// Paint the cell with a random color
function paintRainbow(e) {
    e.target.style.backgroundColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
}

// Generate a random number between 0 and 255
function random(number) {
    return Math.floor(Math.random()*number);
  }

// Change the size of the grid through buttons
const buttons = document.querySelectorAll(".btn");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", changeSize);
}

// Change the color
const colors = document.querySelectorAll("input");
  
for (let i = 0; i < colors.length; i++) {
    colors[i].addEventListener("input", paint);
}