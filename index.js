const userName = document.querySelector(".username");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const passwordConfirmation = document.querySelector(".password_confirmation");
const userForm = document.querySelector("form");
const submit = document.querySelector(".submit");
const userNameContainer = document.querySelector(".username-container");
const emailContainer = document.querySelector(".email-container");
const passwordContainer = document.querySelector(".password-container");
const passwordConfirmationContainer = document.querySelector(
  ".confirm-password-container"
);

// Username validation

// Usename Validation
function userVerification() {
  if (userName.value === "") {
    userName.style.borderColor = "red";
    const para = document.createElement("p");
    para.style.color = "red";
    userName.style.marginBottom = "0.5rem";
    para.style.marginBottom = "1.5rem";
    para.style.fontSize = "0.7rem";
    para.innerHTML = "Enter Username";
    if (userNameContainer.childElementCount >= 3) {
      userNameContainer.removeChild(userNameContainer.lastChild);
    }
    userNameContainer.appendChild(para);
  } else {
    userName.style.borderColor = "green";
    userName.style.marginBottom = "2rem";
    if (userNameContainer.childElementCount >= 3) {
      userNameContainer.removeChild(userNameContainer.lastChild);
    }
  }
}

// Email validation
function emailVerification() {
  if (email.value === "") {
    email.style.borderColor = "red";
    const para = document.createElement("p");
    para.style.color = "red";
    email.style.marginBottom = "0.5rem";
    para.style.marginBottom = "1.5rem";
    para.style.fontSize = "0.7rem";
    para.innerHTML = "Enter Email";
    if (emailContainer.childElementCount >= 3) {
      emailContainer.removeChild(emailContainer.lastChild);
    }
    emailContainer.appendChild(para);
  } else {
    email.style.borderColor = "green";
    email.style.marginBottom = "2rem";
    if (emailContainer.childElementCount >= 3) {
      emailContainer.removeChild(emailContainer.lastChild);
    }
  }
}

// Password validation
function passwordVerification() {
  if (password.value === "") {
    password.style.borderColor = "red";
    const para = document.createElement("p");
    para.style.color = "red";
    password.style.marginBottom = "0.5rem";
    para.style.marginBottom = "1.5rem";
    para.style.fontSize = "0.7rem";
    para.innerHTML = "Enter password";
    if (passwordContainer.childElementCount >= 3) {
      passwordContainer.removeChild(passwordContainer.lastChild);
    }
    passwordContainer.appendChild(para);
  } else {
    password.style.borderColor = "green";
    password.style.marginBottom = "2rem";
    if (passwordContainer.childElementCount >= 3) {
      passwordContainer.removeChild(passwordContainer.lastChild);
    }
    if (password.value.length <= 6) {
      const warningMessage = document.createElement("p");
      warningMessage.innerHTML = "Password should be more than 6 characters";
      passwordContainer.appendChild(warningMessage);
      warningMessage.style.color = "red";
      warningMessage.style.fontSize = "0.7rem";
      warningMessage.style.marginBottom = "1.5rem";
      password.style.borderColor = "red";
      password.style.marginBottom = "0.5rem";
    }
  }
}

// Password confirmation
function passwordConfirmationVerification() {
  if (passwordConfirmation.value === "") {
    passwordConfirmation.style.borderColor = "red";
    const para = document.createElement("p");
    para.style.color = "red";
    passwordConfirmation.style.marginBottom = "0.5rem";
    para.style.marginBottom = "1.5rem";
    para.style.fontSize = "0.7rem";
    para.innerHTML = "Re-Enter Password";
    if (passwordConfirmationContainer.childElementCount >= 3) {
      passwordConfirmationContainer.removeChild(
        passwordConfirmationContainer.lastChild
      );
    }
    passwordConfirmationContainer.appendChild(para);
  } else {
    passwordConfirmation.style.borderColor = "green";
    passwordConfirmation.style.marginBottom = "2rem";
    if (passwordConfirmationContainer.childElementCount >= 3) {
      passwordConfirmationContainer.removeChild(
        passwordConfirmationContainer.lastChild
      );
    }
    if (password.value.length <= 6) {
      passwordConfirmation.style.borderColor = "red";
    }
  }
}

// Password confirmation validation
function passwordConfirmationRetype() {
  if (password.value !== passwordConfirmation.value) {
    const confirmationMessage = document.createElement("p");
    confirmationMessage.innerHTML = "Password does not match";
    passwordContainer.appendChild(confirmationMessage);
    confirmationMessage.style.color = "red";
    confirmationMessage.style.fontSize = "0.7rem";
    confirmationMessage.style.marginBottom = "1.5rem";
    password.style.borderColor = "red";
    passwordConfirmation.style.borderColor = "red";
    password.style.marginBottom = "0.5rem";
  }
}

function validation(e) {
  userVerification();
  emailVerification();
  passwordVerification();
  passwordConfirmationVerification();
  passwordConfirmationRetype();
  e.preventDefault();
}

// Adding submit event listener to form
submit.addEventListener("click", validation);
