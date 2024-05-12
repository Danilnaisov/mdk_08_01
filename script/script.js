function togglePasswordVisibility() {
  var passwordInput = document.getElementById("passwordInput");
  var passwordEye = document.querySelector(".password_eye");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    passwordEye.classList.add("active");
  } else {
    passwordInput.type = "password";
    passwordEye.classList.remove("active");
  }
}

function refreshPage() {
  location.reload();
}

function redirectToRegistration() {
  window.location.href = "register.html";
}

function redirectToLogin() {
  window.location.href = "login.html";
}
