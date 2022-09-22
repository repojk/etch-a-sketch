let gridSide = 16;
let borderSize = 3; //default border size is 3
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