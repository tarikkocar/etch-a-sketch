const grids = document.querySelector(".grids")

let n = 16;

for (let i = 0; i < n*n; i++) {
    const square = document.createElement("div")
    square.className = "square";
    square.style.height = `${600/n}px`;
    square.style.width = `${600/n}px`;
    grids.appendChild(square);
}

function changeColor(e) {
    e.target.style.backgroundColor = "black";
}

const squares = document.querySelectorAll(".square");

for (let i = 0; i < squares.length;i++) {
    squares[i].addEventListener("mouseenter", changeColor);
}