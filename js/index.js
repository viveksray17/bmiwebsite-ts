"use strict";
function displayBmi() {
    var height = document.getElementById("height");
    var weight = document.getElementById("weight");
    var result = calculateBmi(parseFloat(height.value), parseFloat(weight.value));
    document.getElementById("showresult").innerText = "Your BMI is ".concat(result.toFixed(2));
    console.log("Your random number is ".concat((Math.random() * 100).toFixed(0)));
}
function calculateBmi(height, weight) {
    var heightInM = height / 100;
    return weight / Math.pow(heightInM, 2);
}
