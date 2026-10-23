// Get HTML elements -----------------------------------------------------------

const userValue = document.getElementById("userValue");
const secondValue = document.getElementById("secondValue");
const percentageSection = document.getElementById("percentageSection");

const result = document.getElementById("result");


// Display result -------------------------------------------------------------

function showResult(message) {
    result.textContent = message;
    result.classList.add("show");
}


// Get first value -------------------------------------------------------------

function getFirstValue() {
    const value = userValue.value.trim();
    if (value === "" || !Number.isFinite(Number(value))) {
        showResult("Please enter a valid first value.");
        return null;
    }
    return Number(value);
}


// Square Button ----------------------------------------------------------------

document.getElementById("squareBtn").addEventListener("click", function () {
    const value = getFirstValue();
    if (value === null) return;
    const square = value * value;
    showResult("Square = " + square);

});


// Half Button ------------------------------------------------------------------

document.getElementById("halfBtn").addEventListener("click", function () {
    const value = getFirstValue();
    if (value === null) return;
    const half = value / 2;
    showResult("Half = " + half);

});


// Percentage Button -------------------------------------------------------------

document.getElementById("percentageBtn").addEventListener("click", function () {
    const value = getFirstValue();
    if (value === null) return;
    percentageSection.classList.remove("hidden");
    secondValue.focus();
    result.classList.remove("show");

});


// Calculate Percentage Button ------------------------------------------------------

document.getElementById("calculatePercentage").addEventListener("click", function () {
    const first = getFirstValue();
    if (first === null) return;
    const second = secondValue.value.trim();
    if (second === "" || !Number.isFinite(Number(second))) {
        showResult("Please enter a valid second value.");
        return;
    }

    const total = Number(second);
    if (total === 0) {
        showResult("The second value cannot be zero.");
        return;
    }

    const percentage = (first / total) * 100;
    showResult(first + " is " + percentage + "% of " + total);

});


// Circle Area Button ----------------------------------------------------------------

document.getElementById("circleBtn").addEventListener("click", function () {
    const radius = getFirstValue();
    if (radius === null) return;
    if (radius < 0) {
        showResult("Radius cannot be negative.");
        return;
    }

    const area = Math.PI * radius * radius;
    showResult("Circle Area = " + area.toFixed(2));

});