document.addEventListener("DOMContentLoaded", function () {
  var loginForm = document.querySelector("form");
  var registerForm = document.getElementById("registerForm");
  var registerButton = document.getElementById("registerButton");
  var loginButton = document.getElementById("loginButton");

  registerButton.addEventListener("click", function (event) {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
    event.preventDefault();
  });
  loginButton.addEventListener("click", function (event) {
    loginForm.style.display = "block";
    registerForm.style.display = "none";
    event.preventDefault();
  });
});
