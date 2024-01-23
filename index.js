const GRIDSISE = 600;
let squarePerSide = 16;

const sketchArea = document.querySelector('#sketch-area');
sketchArea.style.width = sketchArea.style.height = `${GRIDSISE}px`;

function changeBackgroundColor() {
    this.style.backgroundColor = 'red';
}

function createGridIdCells(){
    const numberOfSquares = (squarePerSide * squarePerSide);
    const widthOrHeight = `${(GRIDSISE / squarePerSide) - 2}px`;

    for (let i=0; i < numberOfSquares; i++) {
        const gridCells = document.createElement('div');

        gridCells.style.width = gridCells.style.height = widthOrHeight;
        gridCells.classList.add('cell');

        sketchArea.appendChild(gridCells);

        gridCells.addEventListener("mouseover", changeBackgroundColor);
    }
}

createGridIdCells(16);