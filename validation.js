//Pegamos os elementos
const elForm = document.getElementById("form");
const elEmailInput = document.getElementById("email");
const elPasswordInput = document.getElementById("pass");
const emailField = document.querySelector(".email-field");
const passwordField = document.querySelector(".password-field");

//verificamos o input do email com a regex
const checkEmail = () => {
  const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (!elEmailInput.value.match(emailPattern)) {
    return emailField.classList.add("invalid");
  }
  emailField.classList.remove("invalid");
};

//verificamos o input da senha com a regex
const checkPassword = () => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!elPasswordInput.value.match(passwordRegex)) {
    return passwordField.classList.add("invalid");
  }
  passwordField.classList.remove("invalid");
};

//chamamos as funcoes de verificacao qnd fazemos o submit
elForm.addEventListener("submit", (e) => {
  e.preventDefault();
  checkEmail();
  checkPassword();

  if (
    !emailField.classList.contains("invalid") &&
    !passwordField.classList.contains("invalid")
  ) {
    location.href = "http://www.google.pt";
  }
});
