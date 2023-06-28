let gridSize =  16;

const gridContainer = document.querySelector(".grid-container");
const bodyContainer = document.querySelector(".body-container");

function createGrid(numOfBoxes) {
    for(let i = 0; i < numOfBoxes; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        gridContainer.appendChild(row);

        for(let j = 0; j < numOfBoxes; j++) {
            const sizeOfBox = 500 / gridSize;
            const box = document.createElement("div");
            box.classList.add("box");
            box.style.width = `${sizeOfBox}px`;
            box.style.height = `${sizeOfBox}px`;
            row.appendChild(box);
            box.addEventListener('mouseover', function () {
                box.style.backgroundColor="#384048";
            })
        }
        
    }
}

function resetButton() {
    const box = gridContainer.querySelectorAll("div");
    box.forEach((div) => (div.style.backgroundColor = "whitesmoke"));
}
function sizeOfGrid(sizeOfBox) {
    
 
  }


function createResetButton() {
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
}
function createSizeButton() {
    const resetButton = document.createElement("button");
    resetButton.classList.add("resetButton");
    bodyContainer.appendChild(resetButton);
    resetButton.innerHTML = `<button onclick="resetButton()">Size</button>`;
}

createGrid(gridSize);
createResetButton();
createColorButton();
createMonoButton();
createSizeButton();
















