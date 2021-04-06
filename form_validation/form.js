/* const form = document.querySelector("#form");
const error = document.querySelector(".errors");
const errorList = document.querySelector(".errors-list");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const passConfirm = document.querySelector("#password-confirmation");
const termsAgree = document.querySelector("#terms");

form.addEventListener("submit", (e) => {
  const errorsArray = [
    "Username must be at least 6 characters long",
    "Password must be is at least 10 characters long",
    "Password must match",
    "You must accept the terms",
  ];

  clearErrors();

  showErrors(errorsArray);
});

function clearErrors() {
  while (errorList.children[0] != null) {
    errorList.removeChild(errorList.children[0]);
  }
  error.classList.remove("show");
}

function showErrors(errorsArray) {
  if (usernameInput.value.length < 6) {
    const errUsername = document.createElement("li");
    errUsername.innerText = errorsArray[0];
    errorList.appendChild(errUsername);
    error.classList.add("show");
  }

  if (passwordInput.value.length < 10) {
    const errPassword = document.createElement("li");
    errPassword.innerText = errorsArray[1];
    errorList.appendChild(errPassword);
    error.classList.add("show");
  }

  if (passConfirm.value !== passwordInput.value) {
    const errConfirm = document.createElement("li");
    errConfirm.innerText = errorsArray[2];
    errorList.appendChild(errConfirm);
    error.classList.add("show");
  }

  if (!termsAgree.checked) {
    const errTerms = document.createElement("li");
    errTerms.innerText = errorsArray[3];
    errorList.appendChild(errTerms);
    error.classList.add("show");
  }
} */

//---------------------solution
const form = document.querySelector("#form");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const passwordConfirmInput = document.querySelector("#password-confirmation");
const termsInput = document.querySelector("#terms");
const errorsContainer = document.querySelector(".errors");
const errorsList = document.querySelector(".errors-list");

form.addEventListener("submit", (e) => {
  const errorMessages = [];
  clearErrors();
  if (usernameInput.value.length < 6) {
    errorMessages.push("Username must be at least 6 characters");
  }
  if (passwordInput.value.length < 10) {
    errorMessages.push("Password must be at least 10 characters");
  }
  if (passwordConfirmInput.value !== passwordInput.value) {
    errorMessages.push("Passwords must match");
  }
  if (!termsInput.checked) {
    errorMessages.push("You must accept the terms");
  }
  if (errorMessages.length > 0) {
    showErrors(errorMessages);
    e.preventDefault();
  }
});

function clearErrors() {
  while (errorsList.children[0] != null) {
    errorsList.removeChild(errorsList.children[0]);
  }
  errorsContainer.classList.remove("show");
}

function showErrors(errorMessages) {
  errorMessages.forEach((errorMessage) => {
    const li = document.createElement("li");
    li.innerText = errorMessage;
    errorsList.appendChild(li);
  });
  errorsContainer.classList.add("show");
}
