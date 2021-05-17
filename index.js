let number = 5;

function add() {
    return number += 5;
}

function subtract() {
    return number -= 3;
}

function multiply() {
    return number *= 20;
}

function divide() {
    return number /= 5;
}

function add(a, b) {
    return a + b;
}
add(1000, 50);

function subtract(a, b) {
    return a - b;
}
subtract(50 - 5);

function multiply(a, b) {
    return a * b;
}
multiply(6 * 8);

function divide(a, b) {
    return a / b;
}
divide(48 / 8);

function increment(n) {
    return n + 1;
}
increments(5);

function decrement(n) {
    return n - 1;
}
decrements(10);

function makeInt(n, x) {
    return parseInt(n, 10);
}
makeInt('n', 10)

function preserveDecimal(n) {
    return parseFloat(n);
}
preserveDecimal(2.222);