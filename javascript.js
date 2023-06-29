let gridSize = document.querySelector(".slider-value").value;

const gridContainer = document.querySelector(".grid-container");
let sliderValue = document.querySelector("#size-value");
let sliderLabel = document.querySelector(".slider-label"); 

sliderValue.addEventListener("input", updateGridSize);

function updateGridSize() {
    gridSize = sliderValue.value;
    sliderLabel.textContent = `Size: ${gridSize} x ${gridSize}`;
    resetButton();
}

function createGrid(sliderValue) {
    for(let i = 0; i < sliderValue; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        gridContainer.appendChild(row);

        for(let j = 0; j < sliderValue; j++) {
            const sizeOfBox =  400 / gridSize;
            const box = document.createElement("div");
            box.classList.add("box");
            box.style.width = `${sizeOfBox}px`;
            box.style.height = `${sizeOfBox}px`;
            row.appendChild(box);
            box.addEventListener('mouseover', function colorBlack() {
                box.style.backgroundColor="#384048"; 
            })
        } 
    }
}
function resetButton() {
    gridContainer.innerHTML = "";
    createGrid(gridSize);
}

createGrid(gridSize);
createResetButton();

/*function createResetButton() {
    const resetButton = document.createElement("button");
    resetButton.classList.add("resetButton");
    bodyContainer.appendChild(resetButton);
    resetButton.innerHTML = `<button onclick="resetButton()">Erase</button>`; 
}
function createMonoButton() {
    const resetButton = document.createElement("button");
    resetButton.classList.add("resetButton");
    bodyContainer.appendChild(resetButton);
    resetButton.innerHTML = `<button onclick="resetButton()">Gray</button>`;
}
function createColorButton() {
    const resetButton = document.createElement("button");
    resetButton.classList.add("resetButton");
    bodyContainer.appendChild(resetButton);
    resetButton.innerHTML = `<button onclick="resetButton()">Color</button>`;
}*/




















