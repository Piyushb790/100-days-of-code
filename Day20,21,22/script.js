const featureElement = document.querySelector(".feature");
const companyElement = document.querySelector(".company");

//! show only one */
const featureContainer = document.querySelector(".feature-container");
const companyContainer = document.querySelector(".about-company");

//**event listener for feature list */
featureElement.addEventListener("click", function () {
  const featureContainer = document.querySelector(".feature-container");

  //**feature container toggle */
  featureContainer.style.display === "none"
    ? (featureContainer.style.display = "block")
    : (featureContainer.style.display = "none");
  //   **feature container toggle end */

  //**feature arrow toggle */
  this.classList.toggle("rotate");

  //**feature arrow toggle end */

  if (featureContainer) {
    companyContainer.style.display = "none";
  }
});

//**event listener for company list */
companyElement.addEventListener("click", function () {
  //~ company arrow toggle */
  this.classList.toggle("rotate");
  //~ company container toggle */
  const companyContainer = document.querySelector(".about-company");
  companyContainer.style.display === "none"
    ? (companyContainer.style.display = "block")
    : (companyContainer.style.display = "none");
  if (companyContainer) {
    featureContainer.style.display = "none";
  }
});

// hamburger

const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function () {
  const responsiveNav = document.querySelector(".responsive-nav");
  responsiveNav.classList.toggle("active");
});

// close
const close = document.querySelector(".close");

close.addEventListener("click", function () {
  const responsiveNav = document.querySelector(".responsive-nav");
  responsiveNav.classList.toggle("active");
});

// feature-container-reponsive
const featureResponsive = document.querySelector(".feature-responsive");

featureResponsive.addEventListener("click", function () {
  const featureResponsiveContainer = document.querySelector(
    ".feature-container-reponsive"
  );

  featureResponsiveContainer.style.display === "none"
    ? (featureResponsiveContainer.style.display = "block")
    : (featureResponsiveContainer.style.display = "none");
});

//company container responsive
const companyResponsive = document.querySelector(".company-responsive");

companyResponsive.addEventListener("click", function () {
  const aboutCompanyResponsive = document.querySelector(
    ".about-company-responsive"
  );

  aboutCompanyResponsive.style.display === "none"
    ? (aboutCompanyResponsive.style.display = "block")
    : (aboutCompanyResponsive.style.display = "none");
});
