const numberElement = document.getElementById("number");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");

let currentNumber = 0; // Initialize the number

incrementButton.addEventListener("click", () => {
  currentNumber++;
  numberElement.textContent = currentNumber;
});

decrementButton.addEventListener("click", () => {
  currentNumber--;
  numberElement.textContent = currentNumber;
});