// JavaScript for iPhone Calculator

const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value.replace(/%/g, '/100'));
    } catch (error) {
        display.value = "Error";
    }
}

function toggleSign() {
    // Find the last number in the expression using regex
    const match = display.value.match(/(-?\d+\.?\d*)$/);
    if (match) {
        const lastNumber = match[0];
        const start = display.value.lastIndexOf(lastNumber);

        let toggled;
        if (lastNumber.startsWith('-')) {
            toggled = lastNumber.slice(1);
        } else {
            toggled = '-' + lastNumber;
        }
        // Replace the last number with its toggled sign version
        display.value = display.value.slice(0, start) + toggled;
    }
}


function backspace() {
    display.value = display.value.slice(0, -1);
}