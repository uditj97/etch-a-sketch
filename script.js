var grid = document.querySelector('body');

var rowCount = 16,
    colCount = 16;
const containerHeight = 480;
const containerWidth = 16000;


function customSize() {
    rowCount = prompt('Enter Row');
    colCount = prompt('Enter Col');
    initializeGrid(rowCount, colCount);
}




function initializeGrid(rowNumber, colNumber) {
    for (let i = 1; i <= rowNumber; i++) {
        var row = document.createElement("div");
        row.classList.add("row" + i);
        row.classList.add("d-flex")
        grid.appendChild(row);
        for (let j = 1; j <= colNumber; j++) {
            var cell = document.createElement("div");
            cell.classList.add("cell" + i + j);
            cell.classList.add("a");
            cell.style.background = "white";
            cell.style.height = containerHeight / rowCount + "px";
            cell.style.width = containerWidth / colCount + "px";
            cell.addEventListener("mouseover", function (event) {

                var letters = '0123456789ABCDEF';
                var color = '#';
                for (var i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                event.target.style.background = color;


            });
            row.appendChild(cell);
        }
    }
    var customSizeButton = document.createElement("BUTTON");
    customSizeButton.classList.add("btn");
    customSizeButton.classList.add("btn-primary");
    customSizeButton.innerHTML = "CUSTOM GRID";
    customSizeButton.addEventListener("click", customSize);
    document.body.appendChild(customSizeButton);

    var resetButton = document.createElement("BUTTON");
    resetButton.classList.add("btn");
    resetButton.classList.add("btn-primary");
    resetButton.innerHTML = "RESET";
    resetButton.addEventListener("click", function (event) {
        document.querySelectorAll(".a").forEach(color => color.style.background = "white");
    });
    document.body.appendChild(resetButton);
}

initializeGrid(rowCount, colCount);