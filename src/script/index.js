"use strict";
import "../sass/main.scss";

//=========================
// VARIABLES
//=========================
const form = document.querySelector(".form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");

//=========================
// FUNCTIONS
//=========================
function setSuccess(input) {
    let formControl = input.parentElement;
    let small = formControl.querySelector("small");
    formControl.className = "form__control success";
    small.textContent = "";
}

function setError(input, message) {
    let formControl = input.parentElement;
    let small = formControl.querySelector("small");
    formControl.className = "form__control error";
    small.classList.remove("hidden");
    small.textContent = message;
}

function checkInput() {
    let user = nameInput.value.trim();
    let email = emailInput.value.trim();

    if (user === "") {
        setError(nameInput, "Name can not be empty");
    } else {
        setSuccess(nameInput);
    }

    if (email === "") {
        setError(emailInput, "Email can not be empty");
    } else {
        setSuccess(emailInput);
    }
}

// On submit, check for valid email
function validateMail(mail) {
    const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(mail).toLowerCase());
}

//=============================
// EVENT LISTENERS
//=============================
// Listen for change in inputfield.
// For incorrect input, logs message to user
form.addEventListener("change", (e) => {
    e.preventDefault();
    checkInput();
});
// Listens for submit to be clicked
// If nonvalid, notify user
form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateMail();
});
