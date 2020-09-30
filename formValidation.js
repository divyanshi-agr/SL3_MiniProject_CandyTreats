const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("pwd");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  //get the values from the inputs and remove all white spaces by trim()
  const usernameVal = username.value.trim();
  const emailVal = email.value.trim();
  const passwordVal = password.value.trim();

  if (usernameVal === "") {
    //show error
    setErrorFor(username, "Username cannot be empty");
    //add error class
  }

  if (emailVal === "") {
    //show error
    setErrorFor(email, "Email cannot be empty");
    //add error class
  } else if (!isEmail(emailVal)) {
    setErrorFor(email, "Email is invalid");
  }

  if (passwordVal === "") {
    //show error
    setErrorFor(password, "Password cannot be empty");
    //add error class
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement; //.form-control
  const small = formControl.querySelector("small");

  //add err msg inside small
  small.innerText = message;

  //add err class
  formControl.className = "form-control error";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
