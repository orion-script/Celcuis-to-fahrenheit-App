"use strict";

const inputCelcius = document.querySelector(".iput_celcius");
const inputFahrenheit = document.querySelector(".iput_fahrenheit");

const btnToFahrenheit = document.querySelector(".celciustofahrenheit");
const btnToCelcius = document.querySelector(".fahrenheittocelcius");

const resultToFehrenheit = document.querySelector(".fahrenheit_Result");
const resultToCelcius = document.querySelector(".celcius_Result");

// (32°F − 32) × 5/9 = 0°C

btnToCelcius.addEventListener("click", function () {
  console.log("Button Clicked");

  const toCelcius = ((Number(inputFahrenheit.value) - 32) * 5) / 9;
  console.log(toCelcius);
  document.getElementById("result").innerHTML = toCelcius;
});

// (-16.67°C × 9/5) + 32 = 2°F

btnToFahrenheit.addEventListener("click", function () {
  console.log("button clicked");

  const toFahrenheit = (Number(inputCelcius.value) * 9) / 5 + 32;
  console.log(toFahrenheit);
  document.getElementById("result").innerHTML = toFahrenheit;
});
