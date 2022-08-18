let grid = 16;
let randomCol = false;

const gridSizeBtn = document.querySelector("button.gridSize");
const gridContainer = document.querySelector("#grid");
const monoBtn = document.querySelector("button.monochromatic");
const randomBtn = document.querySelector("button.randomColors");
const resetBtn = document.querySelector("button.reset");

createGrid();
gridSizeBtn.addEventListener("click", changeGrid);
monoBtn.addEventListener("click", () => randomCol = false);
randomBtn.addEventListener("click", () => randomCol = true);
resetBtn.addEventListener("click", () => changeGrid());

function changeGrid() {
    do {
        grid = parseInt(prompt("Enter desired grid size:", 16));
    } while (grid > 100 || grid < 0);

    while (gridContainer.hasChildNodes()) gridContainer.firstChild.remove();
    createGrid();
}

function createGrid() {
    for (let i = 0; i < grid; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        gridContainer.appendChild(row);
    
        for (let j = 0; j < grid; j++) {
            const gridSquare = document.createElement("div");
            gridSquare.classList.add("gridSquare");
            const widthSize = gridContainer.clientWidth / grid;
            const heightSize = gridContainer.clientHeight / grid;
            gridSquare.style.cssText = `width: ${widthSize}px; height: ${heightSize}px`;
            gridSquare.addEventListener("mouseover", paint);

            row.appendChild(gridSquare);
        }
    }
}

function paint(e) {
    const gSquare = e.target;
    if (randomCol) {
        let R = Math.floor(Math.random()*256);
        let G = Math.floor(Math.random()*256);
        let B = Math.floor(Math.random()*256);
        gSquare.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
        gSquare.style.border = "0";

    } else {
        let bgColor = gSquare.style.backgroundColor;
        if (bgColor.includes("rgb(") && !bgColor.includes("rgb(0, 0, 0)")) {
            gSquare.style.backgroundColor = `rgba(0, 0, 0, 0.1)`;
        } else if (bgColor) {
            let alpha = parseFloat(bgColor.slice(-4, -1));
            if (isNaN(alpha)) return;
            gSquare.style.backgroundColor = `rgba(0, 0, 0, ${alpha += 0.1})`;
        } else gSquare.style.backgroundColor = `rgba(0, 0, 0, 0.1)`;
        gSquare.style.border = "0";
    }   
}