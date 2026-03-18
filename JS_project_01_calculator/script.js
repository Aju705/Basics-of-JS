const display = document.getElementById('display');
let a = []
function appendValue(input) {
    if (display.innerText === '0' || display.innerText === 'Error') {
        display.innerText = input;
        a.push(input)
        console.log(a)
    } else {
        display.innerText += input;
        a.push(input)
        console.log(a)
    }
}

function clearDisplay() {
    display.innerText = '0';
}

function calculate() {
    try {
        // eval() takes the string "2+2" and returns 4
        display.innerText = eval(display.innerText);
    } catch (e) {
        display.innerText = 'Error';
    }
}