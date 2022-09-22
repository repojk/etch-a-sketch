let gridSize = 16;
let borderSize = 3; //default border size is 3
let gridContainerSide = ((gridSize * 20) + (borderSize * gridSize * 2)).toString() + 'px';

const divGridContainer = document.querySelector('#grid-container');
divGridContainer.classList.add('grid-container', 'wrap');
divGridContainer.setAttribute('style', `width: ${gridContainerSide}; height: ${gridContainerSide};`);

for (i = 0; i < (gridSize * gridSize); i++) {
    const divGridSquare = document.createElement('div');
    divGridSquare.classList.toggle('grid-square');
    divGridContainer.appendChild(divGridSquare);
}