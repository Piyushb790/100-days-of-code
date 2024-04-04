const orignalHeader = document.querySelector("header");
const cloneHeader = orignalHeader.cloneNode(true);
cloneHeader.classList.add("sticky");
orignalHeader.parentNode.insertBefore(cloneHeader, orignalHeader);

//**Parallax js */
var scene = document.getElementById("scene");
var parallax = new Parallax(scene);

//**scroll effect */

window.addEventListener("scroll", function () {
  const scrollFromTop = window.scrollY || document.documentElement.scrollTop;
  document.body.classList.toggle("scroll", scrollFromTop > 350);
});

//** Mansonry gallary */

var gridDiv = document.querySelector(".grid");
var masonry = new Masonry(gridDiv, {
  itemSelector: ".grid-item",
  columnWidth: 80,
  fitWidth: true,
  gutter: 0,
});

//**slick slider */

$(".slider").slick({
  autoplay: true,
  autoplaySpeed: 1500,
  arrows: true,
  centerMode: true,
  centerPadding: "20px",
  variableWidth: true,
  slidesToShow: 3,
  prevArrow: '<button type="button" class="slick-prev">Previous</button>',
  nextArrow: '<button type="button" class="slick-next">Previous</button>',
  responsive: [],
});

//**smooth scroll */
$('nav ul li a[href^="#"]').on("click", function (e) {
  e.preventDefault();
  var target = $(this.hash);

  if (target.length) {
    $("html, body")
      .stop()
      .animate({
        scrollTop: target.offset().top - 60,
      });
  }
});

//** responsive menu */
var body = document.querySelector("body");
var menuTrigger = document.querySelector(".js-menu-trigger");
var mainOverlay = document.querySelector(".js-main-overlay");

menuTrigger.addEventListener("click", function () {
  body.classList.add("menu-is-active");
});

mainOverlay.addEventListener("click", function () {
  body.classList.remove("menu-is-active");
});

document.querySelectorAll(".menu li a").forEach(function (link) {
  link.addEventListener("click", function () {
    document.body.classList.remove("menu-is-active");
  });
});
