"use strict";

//=========================
// VARIABLES
//=========================
const FORM = document.querySelector(".form");
const NAME = document.querySelector("[data-name]");
const EMAIL = document.querySelector("[data-email]");

//=========================
// FUNCTIONS
//=========================

// On submit, check for valid email
function validateMail(mail) {
    const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(mail).toLowerCase());
}

function checkUserInput() {
    for (let input of FORM) {
        input.value.trim();
    }
}

function userMessage() {}

//=============================
// EVENT LISTENERS
//=============================
// Listen for change in inputfield.
// For incorrect input, logs message to user
FORM.addEventListener("change", (e) => {
    e.preventDefault();
    checkUserInput();
});
// Listens for submit to be clicked
// If nonvalid, notify user
FORM.addEventListener("submit", (e) => {
    e.preventDefault();
    validateMail();
    NAME.classList.remove("error");
    NAME.classList.remove("success");
});
