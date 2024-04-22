document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll(".sort__button");
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      buttons.forEach(function (btn) {
        btn.classList.remove("active");
      });
      this.classList.add("active");
    });
  });
});
