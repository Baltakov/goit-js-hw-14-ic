const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    return alert("Please fill in all the fields!");
  }
  const submitForm = { email, password };
  console.log(submitForm);
  console.log(`Email: ${form.elements[0].value}`);
  console.log(`Password: ${form.elements[1].value}`);
  form.reset();
});
