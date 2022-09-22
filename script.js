function initializeGrid() {
    let gridSide = 16;
    //set borderSize to 3 if checking .grid-square class displaying border
    let borderSize = 0;
    let gridSquareSize = 30;
    let gridContainerSide = ((gridSide * gridSquareSize) + (borderSize * gridSide * 2)).toString() + 'px';

    const divGridContainer = document.querySelector('#grid-container');
    divGridContainer.classList.add('grid-container', 'wrap');
    divGridContainer.setAttribute('style', `width: ${gridContainerSide}; height: ${gridContainerSide};`);

    for (i = 0; i < (gridSide * gridSide); i++) {
        const divGridSquare = document.createElement('div');
        divGridSquare.classList.toggle('grid-square');
        divGridSquare.setAttribute('style', `width: ${gridSquareSize}px; height: ${gridSquareSize}px;`);
        divGridContainer.appendChild(divGridSquare);
    }
};

function hoverTrail(e) {
    this.classList.add('trail');
};

function listenHoverTrail() {
    const hoverGridSquares = document.querySelectorAll('.grid-square');
    hoverGridSquares.forEach(square => square.addEventListener('mouseover', hoverTrail));
};

function main() {
    initializeGrid();
    listenHoverTrail();
}

main();