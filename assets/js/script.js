let grid = 16;
const gridSizeBtn = document.querySelector("button.gridSize");
const gridContainer = document.querySelector("#grid");

createGrid();
gridSizeBtn.addEventListener("click", changeGrid);

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
            gridSquare.addEventListener("mouseover", (e) => e.target.classList.add("hovered"));
            gridSquare.addEventListener("mouseleave", (e) => e.target.classList.remove("hovered"));

            row.appendChild(gridSquare);
        }
    }
}