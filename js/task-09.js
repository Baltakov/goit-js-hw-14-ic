function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector("button");
const backgroundBody = document.querySelector("body");
const span = document.querySelector(".color");
const add = document.querySelector(".additional");

function getComplementaryColor(hexColor) {
  const color = chroma(hexColor);
  return color.complement().hex();
}

btn.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  backgroundBody.style.background = randomColor;
  const complementaryColor = getComplementaryColor(randomColor);
  span.textContent = randomColor;
  add.style.color = "red";
});
