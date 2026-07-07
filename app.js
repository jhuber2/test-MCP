"use strict";

function showMessage(element, text, type) {
  element.textContent = text;
  element.className = "message " + type;
  element.hidden = false;
}

const loginForm = document.getElementById("login-form");
if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("login-email").value.trim();
    const emailInput = document.getElementById("login-email");
    const password = document.getElementById("login-password").value;
    const message = document.getElementById("login-message");

    if (!email || !password) {
      showMessage(message, "Please enter both email and password.", "error");
      return;
    }
    if (!emailInput.validity.valid) {
      showMessage(message, "Please enter a valid email address.", "error");
      return;
    }
    if (password.length < 6) {
      showMessage(message, "Password must be at least 6 characters.", "error");
      return;
    }
    showMessage(message, "Login successful. Welcome back!", "success");
    loginForm.reset();
  });
}

const profileForm = document.getElementById("profile-form");
if (profileForm) {
  profileForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("full-name").value.trim();
    const emailInput = document.getElementById("contact-email");
    const role = document.getElementById("role-select").value;
    const terms = document.getElementById("terms-checkbox").checked;
    const message = document.getElementById("form-message");

    if (!name || !emailInput.value.trim() || !role) {
      showMessage(message, "Please complete your name, email, and role.", "error");
      return;
    }
    if (!emailInput.validity.valid) {
      showMessage(message, "Please enter a valid email address.", "error");
      return;
    }
    if (!terms) {
      showMessage(message, "Please accept the terms before submitting.", "error");
      return;
    }
    showMessage(message, "Form submitted successfully for " + name + ".", "success");
    profileForm.reset();
  });

  profileForm.addEventListener("reset", function () {
    const message = document.getElementById("form-message");
    message.hidden = true;
    message.textContent = "";
  });
}
