const div = document.querySelector("div");
const input = div.firstElementChild;
const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// input.addEventListener("input", () => {
//   return input.value;
// });

// createBoxes(amount);

create.addEventListener("click", () => {
  const amount = Number(input.value);
  createBoxes(amount);
});

destroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  boxes.innerHTML = "";
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    div.style.margin = "5px";

    boxes.appendChild(div);
    size += 10;
    div.textContent = i + 1;
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}
