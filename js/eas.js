const easapp = () => {
    const gridSizeButtons = document.querySelectorAll('.size');
    const penColorButtons = document.querySelectorAll('.mode');

    let currentMode = '';

    function generateGrid(size = 27 * 33, cssClass = 'medium-grid-default') {
        const gameContainer = document.getElementById('grid-container');

        gameContainer.innerHTML = '';

        gameContainer.classList.remove('small-grid', 'medium-grid-default', 'large-grid');
        gameContainer.classList.add(cssClass);

        for (let i = 0; i < size; i += 1) {
            const div = document.createElement ('div');
            gameContainer.appendChild(div);
            div.classList.add('square-grid');
            div.style.width = "10px";
            div.style.height = "10px";
        }
    }
    generateGrid();
}

//Start the easapp function
easapp();