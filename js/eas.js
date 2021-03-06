const easapp = () => {
    const gridSizeButtons = document.querySelectorAll('.size');
    const penColorButtons = document.querySelectorAll('.color');

    let currentColor = '';

    function generateGrid(size = 32 * 44, cssClass = 'medium-grid-default') {
        const gameContainer = document.getElementById('grid-container');

        gameContainer.innerHTML = '';

        gameContainer.classList.remove('small-grid', 'medium-grid-default', 'large-grid');
        gameContainer.classList.add(cssClass);

        for (let i = 0; i < size; i += 1) {
            const div = document.createElement('div');
            gameContainer.appendChild(div);
        }
    }


    function erase() {
        const gridItems = document.querySelectorAll('#grid-container > div');

        gridItems.forEach((item) => {
            item.style.backgroundColor = '#D8D8D8';
            item.style.opacity = '1';
        });
    }


    function startPainting(mode) {
        const gridItems = document.querySelectorAll('#grid-container > div');

        gridItems.forEach((item) => {
            item.count = 0;
            item.addEventListener('mouseenter', (e) => {
                if (mode === 'gray' || currentColor === 'gray' || currentColor === '') {
                    e.target.style.backgroundColor = '#707070';
                    e.target.style.opacity = 1;
                } else if (mode === 'black' || currentColor === 'black') {
                    e.target.style.backgroundColor = '#000000';
                    e.target.count += 1;
                    e.target.style.opacity = 0.2 * e.target.count;
                } else if (mode === 'rainbow' || currentColor === 'rainbow') {
                    const rainbowPallete = ['#EF476F', '#FFD166', '#06D6A0', '#118AB2', '#8BD175'];
                    const randomColor = Math.floor(Math.random() * rainbowPallete.length);
                    e.target.style.opacity = 1;
                    e.target.style.backgroundColor = rainbowPallete[randomColor];
                }
            });
        });
    }


    function selectButton(button) {
        if (button.classList.contains('color')) {
            penColorButtons.forEach((selection) => {
                selection.classList.remove('active-button');
            });
        } else {
            gridSizeButtons.forEach((selection) => {
                selection.classList.remove('active-button');
            });
        }
        button.classList.add('active-button');
    }


    function changeSize() {
        const small = 16 * 22;
        const medium = 32 * 44;
        const large = 64 * 88;

        gridSizeButtons[1].classList.add('active-button');

        gridSizeButtons.forEach((selection) => {
            selection.addEventListener('click', () => {
                if (selection.classList.contains('small')) {
                    //erase();
                    generateGrid(small, 'small-grid');
                    startPainting();
                    selectButton(selection);
                } else if (selection.classList.contains('medium')) {
                    //erase();
                    generateGrid(medium, 'medium-grid-default');
                    startPainting();
                    selectButton(selection);
                } else {
                    //erase();
                    generateGrid(large, 'large-grid');
                    startPainting();
                    selectButton(selection);
                }
            });
        });
    }


    function changeColor() {
        penColorButtons[0].classList.add('active-button');

        penColorButtons.forEach((selection) => {
            selection.addEventListener('click', () => {
                if (selection.classList.contains('gray')) {
                    startPainting('gray');
                    selectButton(selection);
                    currentColor = 'gray';
                } else if (selection.classList.contains('black')) {
                    startPainting('black');
                    selectButton(selection);
                    currentColor = 'black';
                } else {
                    startPainting('rainbow');
                    selectButton(selection);
                    currentColor = 'rainbow';
                }
            });
        });
    }


    function eraseListener() {
        const eraseButton = document.querySelector('.erase');

        eraseButton.addEventListener('click', erase);
    }



    generateGrid();
    startPainting();
    changeSize();
    changeColor();
    eraseListener();

}

//Start the easapp function
easapp();