const mark = document.querySelector(".mark");

mark.addEventListener("click", function () {
  const activeEle = document.querySelectorAll(".active-ele");
  const numberNotifications = document.querySelector(".number-notifications");
  activeEle.forEach((ele) => {
    ele.classList.remove("active-ele");
    numberNotifications.innerHTML = "0";
  });
});
