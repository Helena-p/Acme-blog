"use strict";

//=========================
// VARIABLES
//=========================
const FORM = document.querySelector(".form");
const FORM_BTN = document.querySelector(".btn");

//=========================
// FUNCTIONS
//=========================

// On submit, check for valid email
function validateMail(mail) {
    const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(mail).toLowerCase());
}

function userMessage() {}

//=============================
// EVENT LISTENERS
//=============================
// Listens for submit to be clicked
// If nonvalid, notify user
FORM.addEventListener("click", userMessage);
