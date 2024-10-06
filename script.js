function generateGrid(container, gridSquares) {
    for (let i = 0; i < gridSquares; i++) {
        for (let j = 0; j < gridSquares; j++) {
            let square = document.createElement("div");
            square.style.height = `${960 / gridSquares}px`;
            square.style.width = `${960 / gridSquares}px`;
            square.style.margin = "0px";
            square.style.border = "none";
            container.appendChild(square);
        }
    }
}

const container = document.querySelector(".container");
let gridSquares = 16;

generateGrid(container, gridSquares);