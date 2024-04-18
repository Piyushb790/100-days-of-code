const inputCardName = document.getElementById("inp-card-name");
const inputCardNumber = document.getElementById("inp-card-number");
const month = document.getElementById("month");
const year = document.getElementById("year");
const cvv = document.getElementById("cvv");
const confirmBtn = document.getElementById("confirm-btn");
const cardImgNumber = document.getElementById("card-img-number");
const cardImgName = document.getElementById("card-img-name");
const cardImgCvvMonth = document.getElementById("card-img-cvv-month");
const cardImgCvvYear = document.getElementById("card-img-cvv-year");
const cardImgCvvBack = document.getElementById("card-cvv-img");
const cardDetails = document.getElementById("card-details");
const successContainer = document.querySelector(".success-container");
const formContainer = document.querySelector(".form-container");
const continueBtn = document.querySelector(".continue-btn");
const loader = document.querySelector(".loader");
/**input error */

/** cardholder name */
const cardHolderName = () => {
  const regexName = /^[a-zA-Z]+(?: [a-zA-Z]+){0,2}$/;
  const cardNameError = document.querySelector(".name-error");
  if (!regexName.test(inputCardName.value)) {
    cardNameError.style.display = "block";
    inputCardName.style.borderColor = "red";
    return false;
  } else {
    cardNameError.style.display = "none";
    inputCardName.style.borderColor = "black";
    return true;
  }
};

//card holder number
const cardHolderNumber = () => {
  const regexNumber = /^\d{4} \d{4} \d{4} \d{4}$/;
  const cardNumberError = document.querySelector(".number-error");
  if (!regexNumber.test(inputCardNumber.value)) {
    cardNumberError.style.display = "block";
    inputCardNumber.style.borderColor = "red";
    return false;
  } else {
    cardNumberError.style.display = "none";
    inputCardNumber.style.borderColor = "black";
    return true;
  }
};

// card month number
const cardMonthNumber = () => {
  const cardMonthNumError = document.querySelector(".month-error");
  if (month.value > 0 && month.value < 13) {
    cardMonthNumError.style.display = "none";
    month.style.borderColor = "black";
    return true;
  } else {
    cardMonthNumError.style.display = "block";
    month.style.borderColor = "red";
    return false;
  }
};

// card year number
const cardYearNumber = () => {
  const regexNumber = /^\d{2}$/;
  const cardYearNumError = document.querySelector(".year-error");
  if (!regexNumber.test(year.value)) {
    cardYearNumError.style.display = "block";
    year.style.borderColor = "red";
    return false;
  } else {
    cardYearNumError.style.display = "none";
    year.style.borderColor = "black";
    return true;
  }
};

// card cvv
const cardCvv = () => {
  const regexCvv = /^\d{3}$/;
  const cvvError = document.querySelector(".cvv-error");
  if (!regexCvv.test(cvv.value)) {
    cvvError.style.display = "block";
    cvv.style.borderColor = "red";
    return false;
  } else {
    cvvError.style.display = "none";
    cvv.style.borderColor = "black";
    return true;
  }
};

/**validate form */
cardDetails.addEventListener("submit", function (e) {
  e.preventDefault();

  const isCardNameValid = cardHolderName();
  const isCardNumberValid = cardHolderNumber();
  const isCardMonthValid = cardMonthNumber();
  const isCardYearValid = cardYearNumber();
  const isCardCvvValid = cardCvv();

  // check if all input validations pass
  if (
    isCardNameValid &&
    isCardNumberValid &&
    isCardMonthValid &&
    isCardYearValid &&
    isCardCvvValid
  ) {
    loader.style.display = "block";
    formContainer.style.display = "none";

    setTimeout(function () {
      loader.style.display = "none";
      successContainer.style.display = "block";
      formContainer.style.display = "none";
    }, 2000);
  } else {
    successContainer.style.display = "none";
    formContainer.style.display = "block";
  }
});

/**update */
inputCardNumber.addEventListener("input", function () {
  const cleanedValue = this.value.replace(/\s/g, "");
  const formattedValue = cleanedValue.replace(/(.{4})/g, "$1 ");
  this.value = formattedValue.trim();
  cardImgNumber.textContent = inputCardNumber.value;
});

inputCardName.addEventListener("input", function () {
  cardImgName.textContent = inputCardName.value.toUpperCase();
});

month.addEventListener("input", function () {
  cardImgCvvMonth.textContent = month.value;
});

year.addEventListener("input", function () {
  cardImgCvvYear.textContent = year.value;
});

cvv.addEventListener("input", function () {
  cardImgCvvBack.textContent = cvv.value;
});

//continue button
continueBtn.addEventListener("click", function () {
  window.location.reload();
});
