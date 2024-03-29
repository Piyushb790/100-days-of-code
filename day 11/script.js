const accordian = document.querySelectorAll(".accordian");
console.log(accordian);

accordian.forEach((accordian) => {
  const plus = accordian.querySelector(".plus");
  const answer = accordian.querySelector(".answer");
  const minus = accordian.querySelector(".minus");

  accordian.addEventListener("click", () => {
    answer.classList.toggle("active");
    if (answer.classList.contains("active")) {
      plus.style.display = "none";
      minus.style.display = "block";
    } else {
      plus.style.display = "block";
      minus.style.display = "none";
    }
  });
});
