const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("pwd");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isValid;
  isValid = checkInputs();

  if (isValid) {
    window.location = "./index.html";
  }
});

function checkInputs() {
  //get the values from the inputs and remove all white spaces by trim()
  const usernameVal = username.value.trim();
  const emailVal = email.value.trim();
  const passwordVal = password.value.trim();

  return (
    verifyEmail(emailVal) && verifyName(usernameVal) && verifyPwd(passwordVal)
  );
}

function verifyEmail(emailVal) {
  let isValid = true;

  if (emailVal === "") {
    setErrorFor(email, "Email cannot be empty");
    isValid = false;
  } else if (!isEmail(emailVal)) {
    setErrorFor(email, "Email is invalid");
    isValid = false;
  } else {
    setSuccessFor(email);
    isValid = true;
  }

  return isValid;
}

function verifyName(usernameVal) {
  let isValid = true;

  if (usernameVal === "") {
    setErrorFor(username, "Username cannot be empty");
    isValid = false;
  } else if (!isName(usernameVal)) {
    setErrorFor(username, "Name entered can contain only alphabets!");
    isValid = false;
  } else {
    setSuccessFor(username);
    isValid = true;
  }

  return isValid;
}

function verifyPwd(passwordVal) {
  let isValid = true;
  if (passwordVal === "") {
    setErrorFor(password, "Password cannot be empty");
    isValid = false;
  } else if (!isPwd(passwordVal)) {
    setErrorFor(password, "Invalid Password!");
    isValid = false;
  } else {
    setSuccessFor(password);
    isValid = true;
  }

  return isValid;
}

function setErrorFor(input, message) {
  const formControl = input.parentElement; //.form-control
  const small = formControl.querySelector("small");

  //add err msg inside small
  small.innerText = message;

  //add err class
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control success";
  small.style.visibility = "hidden";
}

function isEmail(email) {
  let emailLetters = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,4}$/;
  return emailLetters.test(email);
}

function isName(username) {
  let letters = /^[A-Za-z]+$/;
  return letters.test(username);
}

function isPwd(password) {
  let pwdLetters = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,15}$/;
  return pwdLetters.test(password);
}
