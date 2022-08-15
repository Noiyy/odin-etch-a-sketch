let grid = 16;

const gridContainer = document.querySelector("#grid .container");

function createGrid() {
    for (let i = 0; i < grid; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        gridContainer.appendChild(row);
    
        for (let j = 0; j < grid; j++) {
            const gridSquare = document.createElement("div");
            gridSquare.classList.add("gridSquare");
            gridSquare.addEventListener("mouseover", (e) => e.target.classList.add("hovered"));
            gridSquare.addEventListener("mouseleave", (e) => e.target.classList.remove("hovered"));

            row.appendChild(gridSquare);
        }
    }
}

createGrid();