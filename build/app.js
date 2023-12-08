// Getting elements from HTML file
const btn = document.getElementById('btn')
const cell1 = document.querySelector('.cell1')
const cell2 = document.querySelector('.cell2')
const cell3 = document.querySelector('.cell3')
const cell4 = document.querySelector('.cell4')
const cell5 = document.querySelector('.cell5')
const span1 = document.querySelector('.span1')
const span2 = document.querySelector('.span2')
const span3 = document.querySelector('.span3')
const span4 = document.querySelector('.span4')
const span5 = document.querySelector('.span5')
const root = document.querySelector(':root')

// Hex code generator
function hexGenerator() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#"
    for (let i = 0; i < 6; i++) {
        const randomNumber = Math.floor(Math.random() * hex.length)
        hexColor += hex[randomNumber]
    }
    return hexColor
}

// Changing the cell color and updating the hex code
function hexEdit(cell, span) {
    let cellColor = hexGenerator()
    cell.style.backgroundColor = cellColor
    span.textContent = cellColor
}
function hexInit() {
    hexEdit(cell1, span1)
    hexEdit(cell2, span2)
    hexEdit(cell3, span3)
    hexEdit(cell4, span4)
    hexEdit(cell5, span5)
}
btn.addEventListener('click', function () {
    hexInit()
})

// calling this function globally to change the palette on every reload
hexInit()

// Copy the hex code by clicking on it
function copyHex(spanName) {
    spanName.onclick = function () {
        document.execCommand("copy");

    }

    spanName.addEventListener("copy", function (event) {
        event.preventDefault();
        if (event.clipboardData) {
            event.clipboardData.setData("text/plain", spanName.textContent);
            spanName.dataset.tooltip = "Copied"
            // root.style.setProperty('--tooltip-color', 'black')
            setTimeout(function () {
                spanName.dataset.tooltip = "Click to Copy"
                // root.style.setProperty('--tooltip-color', 'rgba(0, 0, 0, 0.349)')
            }, 400)
        }
    });
}
copyHex(span1)
copyHex(span2)
copyHex(span3)
copyHex(span4)
copyHex(span5)

// Background color change on reload
function backgroundColorChanger() {
    const colors = ["#44E0C8", "#A6CF98", "#FFC5C5", "#DCBFFF", "#39A7FF", "#FF8551", "#FF6969", "#ADC4CE"];
    const randomNumber = Math.floor(Math.random() * colors.length)
    document.body.style.backgroundColor = colors[randomNumber]
}
backgroundColorChanger()