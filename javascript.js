let gridSize = document.querySelector(".slider-value").value;
const gridContainer = document.querySelector(".grid-container");
let sliderValue = document.querySelector("#size-value");
let sliderLabel = document.querySelector(".slider-label");
const monoButton = document.querySelector(".mono-button");
const colorButton = document.querySelector(".random-color");

let colorMode = "mono";

sliderValue.addEventListener("input", updateGridSize);

function updateGridSize() {
    gridSize = sliderValue.value;
    sliderLabel.textContent = `Size: ${gridSize} x ${gridSize}`;
    resetGrid();    
}

function createGrid(sliderValue) {
    for(let i = 0; i < sliderValue; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        gridContainer.appendChild(row);

        for(let j = 0; j < sliderValue; j++) {
            const sizeOfBox =  350 / gridSize;
            const box = document.createElement("div");
            box.classList.add("box");
            box.style.width = `${sizeOfBox}px`;
            box.style.height = `${sizeOfBox}px`;
            row.appendChild(box);
            box.addEventListener('mouseover', function colorBlack() {
                if (colorMode === "mono") {
                    box.style.backgroundColor = "#384048";
                  } else if (colorMode === "randomColor") {
                    const randomColor = createRandomColor();
                    box.style.backgroundColor = randomColor;
                  } 
            })
        } 
    }
}

function createRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

function monoColor() {
    colorMode = "mono";
}

function randomColor() {
    colorMode = "randomColor";
}

function resetButton() {
    gridContainer.innerHTML = "";
    createGrid(gridSize);
}

function resetGrid() {
    gridSize = document.querySelector(".slider-value").value;
    resetButton();
  }

createGrid(gridSize);


//createResetButton();

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




















