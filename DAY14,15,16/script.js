const inputDay = document.getElementById("day");
const inputMonth = document.getElementById("month");
const inputYear = document.getElementById("year");
const showDay = document.querySelector(".show-day");
const showMonth = document.querySelector(".show-month");
const showYear = document.querySelector(".show-year");

// const calculateAge = () => {
//   var currDate = new Date();
//   const inputDate = `${inputYear.value}-${inputMonth.value}-${inputDay.value}`;
//   const finalInputDate = new Date(inputDate);

//   var yearDiff = currDate.getFullYear() - finalInputDate.getFullYear();

//   if (
//     currDate.getMonth() < finalInputDate.getMonth() ||
//     (currDate.getMonth() === finalInputDate.getMonth() &&
//       currDate.getDate() < finalInputDate.getDate())
//   ) {
//     yearDiff--;
//   }

//   //* calculate month difference

//   var monthDiff = currDate.getMonth() - finalInputDate.getMonth();
//   if (monthDiff < 0) {
//     monthDiff += 12;
//   }

//   //* calculate day difference

//   var dayDiff = currDate.getDate() - finalInputDate.getDate();
//   if (dayDiff < 0) {
//     const tempDate = new Date(currDate.getFullYear(), currDate.getMonth(), 0);
//     dayDiff = dayDiff + tempDate.getDate();
//     monthDiff--;
//   }
//   showDay.innerHTML = dayDiff;
//   showMonth.innerHTML = monthDiff;
//   showYear.innerHTML = yearDiff;

//   //* error */
//   if (inputDay.value.length == 0 || inputDay.value > 31 || inputDay.value < 1) {
//     document
//       .querySelector(".input-container.day")
//       .style.setProperty("--before-color", "red");
//     const errorMsg1 = document.querySelector(".error-msg1");

//     errorMsg1.classList.add("error-msg-day");
//     return 0;
//   }
//   if (
//     inputMonth.value.length == 0 ||
//     inputMonth.value > 12 ||
//     inputMonth.value < 1
//   ) {
//     document
//       .querySelector(".input-container.month")
//       .style.setProperty("--before-color", "red");
//     const errorMsg2 = document.querySelector(".error-msg2");
//     errorMsg2.classList.add("error-msg-month");
//     return 0;
//   }
//   if (inputYear.value.length == 0 || inputYear.value > currDate.getFullYear()) {
//     document
//       .querySelector(".input-container.year")
//       .style.setProperty("--before-color", "red");
//     const errorMsg3 = document.querySelector(".error-msg3");
//     errorMsg3.classList.add("error-msg-year");
//     return 0;
//   }
// };
// Function to calculate age
const calculateAge = () => {
  // Get current date
  var currDate = new Date();

  // Get input date
  const inputDate = `${inputYear.value}-${inputMonth.value}-${inputDay.value}`;
  const finalInputDate = new Date(inputDate);

  // Error handling - Day
  if (inputDay.value == "" || inputDay.value > 31 || inputDay.value < 1) {
    const errorMsg1 = document.querySelector(".error-msg1");
    errorMsg1.classList.add("error-msg-day");
    return 0;
  }

  // Error handling - Month
  if (inputMonth.value == "" || inputMonth.value > 12 || inputMonth.value < 1) {
    const errorMsg2 = document.querySelector(".error-msg2");
    errorMsg2.classList.add("error-msg-month");
    return 0;
  }

  // Error handling - Year
  if (inputYear.value == "" || inputYear.value > currDate.getFullYear()) {
    const errorMsg3 = document.querySelector(".error-msg3");
    errorMsg3.classList.add("error-msg-year");
    return 0;
  }

  // Calculate year difference
  var yearDiff = currDate.getFullYear() - finalInputDate.getFullYear();

  // Adjust year difference if birth date hasn't occurred this year
  if (
    currDate.getMonth() < finalInputDate.getMonth() ||
    (currDate.getMonth() === finalInputDate.getMonth() &&
      currDate.getDate() < finalInputDate.getDate())
  ) {
    yearDiff--;
  }

  // Calculate month difference
  var monthDiff = currDate.getMonth() - finalInputDate.getMonth();
  if (monthDiff < 0) {
    monthDiff += 12;
  }

  // Calculate day difference
  var dayDiff = currDate.getDate() - finalInputDate.getDate();
  if (dayDiff < 0) {
    const tempDate = new Date(currDate.getFullYear(), currDate.getMonth(), 0);
    dayDiff = dayDiff + tempDate.getDate();
    monthDiff--;
  }

  // Display calculated age
  showDay.innerHTML = dayDiff;
  showMonth.innerHTML = monthDiff;
  showYear.innerHTML = yearDiff;
};
