function generateGrid(container, gridSquares) {
    container.replaceChildren();
    for (let i = 0; i < gridSquares; i++) {
        for (let j = 0; j < gridSquares; j++) {
            let square = document.createElement("div");
            square.style.height = `${800 / gridSquares}px`;
            square.style.width = `${800 / gridSquares}px`;
            square.style.margin = "0px";
            square.style.border = "none";
            square.style.opacity = 0;
            container.appendChild(square);
        }
    }
}

function getRandomColour() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

const container = document.querySelector(".container");
let gridSquares = 16;

generateGrid(container, gridSquares);

container.addEventListener('mouseover', (event) => {
    let target = event.target;
    target.style.backgroundColor = getRandomColour();
    let colourOpacity = Number(target.style.opacity) + 0.1;
    target.style.opacity = Math.min(colourOpacity, 1);
});

const btn = document.querySelector(".reset");
btn.addEventListener('click', (event) => {
    let dimension = 16;
    do {
        dimension = prompt('Grid dimension (less than or equal to 100)', 16);
    } while (dimension > 100);
    generateGrid(container, dimension);
});