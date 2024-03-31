const btnSubscribe = document.querySelector(".btn1");
const btnDismiss = document.querySelector(".btn2");
const successCard = document.querySelector(".success");
const mainContainer = document.querySelector(".main-container");
const error = document.querySelector(".error");
const emailInput = document.getElementById("email-input");
const successEmail = document.getElementById("success-email");
console.log(successEmail);

function validateEmail() {
  var mailFormat = /^\S+@\S+\.\S+$/;

  if (emailInput.value.match(mailFormat)) {
    btnSubscribe.addEventListener("click", function () {
      mainContainer.style.display = "none";
      successCard.style.display = "block";
      successEmail.innerText = emailInput.value;
      emailInput.value = "";
    });
  } else {
    error.style.display = "block";
  }
}
function dismiss() {
  successCard.classList.add("fade-out");
  setTimeout(function () {
    window.location.reload();
    successCard.style.display = "none";
    mainContainer.style.display = "block";
  }, 500);
}
