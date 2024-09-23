let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const value = document.getElementById("value");

decrementBtn.addEventListener("click", () => {
  counterValue--;
  value.textContent = counterValue;
});
incrementBtn.addEventListener("click", () => {
  counterValue++;
  value.textContent = counterValue;
});
