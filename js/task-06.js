const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
  if (input.value.length !== parseInt(input.dataset.length)) {
    input.classList.add("invalid");
    input.classList.remove("valid");
  } else {
    input.classList.add("valid");
    input.classList.remove("invalid");
  }
});
