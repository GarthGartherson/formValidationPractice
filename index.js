const email = document.querySelector("#email");
const country = document.querySelector("#country");
const zip = document.querySelector("#zipcode");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const form = document.querySelector("form");
const submitError = document.querySelector(".submitError");

// const inputs = document.querySelectorAll(".container_information > input");
const inputs = document.querySelectorAll(".input-wrapper > input");

inputs.forEach((input) => {
  input.addEventListener("blur", (e) => {
    let currentError = document.querySelector(`.${input.id}Error`);
    submitError.textContent = "";

    if (!input.checkValidity()) {
      showError(input, currentError);
    }
    if (input.checkValidity()) {
      currentError.textContent = "";
    }
    if (input.id === "confirmPassword" || input.id === "password") {
      if (confirmPassword.value !== password.value) {
        let confirmPasswordError = document.querySelector(
          ".confirmPasswordError"
        );
        confirmPasswordError.textContent = "Passwords Must Match!";
      }
    }
  });
});

form.addEventListener("submit", function (e) {
  inputs.forEach((input) => {
    if (!input.checkValidity()) {
      submitError.textContent = "There are still some errors.";
      e.preventDefault();
    }
  });
});

function showError(input, currentErrorField) {
  if (!input.checkValidity()) {
    if (input.validity.typeMismatch) {
      currentErrorField.textContent =
        "Entered value needs to be an e-mail address.";
    } else if (input.validity.tooShort) {
      currentErrorField.textContent = "Entered Value is too short!";
    } else if (input.validity.tooLong) {
      currentErrorField.textContent = "Entered Value is too long.";
    } else if (input.validity.rangeOverflow) {
      currentErrorField.textContent = "Entered number is too high!";
    } else if (input.validity.rangeUnderflow) {
      currentErrorField.textContent = "Entered value is too low!";
    }
  }
}
