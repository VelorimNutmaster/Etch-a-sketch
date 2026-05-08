let singleColor = 1;
let randomColor = 0;
let gridSize = 16; // Default grid size
const div = document.querySelector('#canvas');
const applyButton = document.querySelector('#applyGridSize');
const gridSizeInput = document.querySelector('#gridSize');
const resetButton = document.querySelector('#reset');
const singleColorButton = document.querySelector('#singleColor');
const randomColorButton = document.querySelector('#randomColor');

function resetCanvas() {
    div.innerHTML = '';
}
resetButton.addEventListener('click', () => {
resetCanvas();
    
});
singleColorButton.addEventListener('click', () => {
    singleColor = 1;
    randomColor = 0;
});
randomColorButton.addEventListener('click', () => {
    randomColor = 1;
    singleColor = 0;
});

applyButton.addEventListener('click', () => {
    resetCanvas();
     gridSize = parseInt(gridSizeInput.value);
    if (isNaN(gridSize) || gridSize < 16 || gridSize > 100) {
        alert('Please enter a valid grid size between 16 and 100.');
        return;
    }
        for (let i = 0; i < gridSize * gridSize; i++) {
            const row = document.createElement('div');
            row.classList.add('row');
            div.appendChild(row);
            row.addEventListener('mouseover', () => {
                if(singleColor==1) {
                  const currentOpacity = parseFloat(row.style.opacity || 0.1);
                  row.style.backgroundColor = 'black';
                  row.style.opacity = currentOpacity + 0.1;
              
                } else if(randomColor==1) {
                    const RandomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
                    row.style.backgroundColor = RandomColor;
                }
            });
    }
    
     function rowSize() {
        const row = document.querySelectorAll('.row');
        row.forEach((row) => {
            row.style.width = `${(512 / gridSize)-2}px`;
            row.style.height = `${(512 / gridSize)-2}px`;
        });
    }

    rowSize();
});
