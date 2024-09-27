const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
  const inputValue = input.value;
  console.log(inputValue);
  if (input.value.length !== parseInt(input.dataset.length)) {
    input.classList.add("invalid");
    input.classList.remove("valid");
    console.log(1);
  } else {
    input.classList.add("valid");
    input.classList.remove("invalid");
    console.log(2);
  }
});
