//**left-thumb-img */
const mainImg = document.querySelector(".main-img");
const thumbImages = document.querySelectorAll(".left-bottom .img");

thumbImages.forEach((thumbImg) => {
  thumbImg.addEventListener("click", function () {
    thumbImages.forEach((img) => {
      img.classList.remove("active");
    });
    this.classList.add("active");
    const src = this.src;
    const filename = src.split("/").pop();
    const imagePath = "./images/" + filename.replace("-thumbnail", "");
    mainImg.src = imagePath;
  });
});

//*modal thumb img */
const modalThumbImages = document.querySelectorAll(
  ".modal-thumb-img .column img"
);
const modalMainImg = document.querySelector(".modal-main-img img");

modalThumbImages.forEach((modalThumbImg) => {
  modalThumbImg.addEventListener("click", function () {
    modalThumbImages.forEach((img) => {
      img.classList.remove("active");
    });
    this.classList.add("active");
    const src = this.src;
    const filename = src.split("/").pop();
    const imagePath = "./images/" + filename.replace("-thumbnail", "");

    modalMainImg.src = imagePath;
  });
});
//**open modal */
mainImg.addEventListener("click", function () {
  modalContainer.style.display = "flex";
});
//**close modal */
const modalContainer = document.querySelector(".modal-container");
const close = document.querySelector(".close");
close.addEventListener("click", function () {
  modalContainer.style.display = "none";
});
//**next and previous modal image */
const previous = document.querySelector(".previous");
const next = document.querySelector(".next");

next.addEventListener("click", function () {
  loadNextImage();
});
previous.addEventListener("click", function () {
  loadPreviousImage();
});

var currentImageIndex = 0;

function loadPreviousImage() {
  currentImageIndex =
    (currentImageIndex - 1 + modalThumbImages.length) % modalThumbImages.length;
  updateMainImage();
}

// Function to load the next image
function loadNextImage() {
  currentImageIndex =
    (currentImageIndex + 1 + modalThumbImages.length) % modalThumbImages.length;
  updateMainImage();
}

function updateMainImage() {
  const modalThumbImages = document.querySelectorAll(
    ".modal-thumb-img .column img"
  );
  const imagePath = modalThumbImages[currentImageIndex].src;
  const filename = imagePath.split("/").pop().replace("-thumbnail", "");
  const path = "./images/" + filename;
  modalMainImg.src = path;

  modalThumbImages.forEach(function (image) {
    image.classList.remove("active");
  });

  modalThumbImages[currentImageIndex].classList.add("active");
}

//**cart  */

/**cart quantity */

const increase = document.querySelector("#increment");
const decrease = document.querySelector("#decrement");
const itemQuantity = document.querySelector("#items");
const quantityLabel = document.querySelector(".quantity-label");
const cartContainer = document.querySelector(".cart-container");

//**increase */
increase.addEventListener("click", () => {
  let value = itemQuantity.textContent;
  value++;
  if (value > 10) {
    alert("limited stock");
    return;
  }
  itemQuantity.textContent = value;
  quantityLabel.style.display = "block";
  quantityLabel.textContent = itemQuantity.textContent;
});
//**decrease */
decrease.addEventListener("click", function () {
  let value = itemQuantity.textContent;
  value--;
  if (value < 0) {
    alert("increase the quantity");
    return;
  }
  itemQuantity.textContent = value;
  quantityLabel.style.display = "block";
  quantityLabel.textContent = itemQuantity.textContent;
});

//**Add to cart */
const AddBtn = document.querySelector("#add");
const cartProducts = document.querySelector(".cart-products");
AddBtn.addEventListener("click", function addingCart() {
  if (itemQuantity.textContent < 1) {
    alert("minimum quantity should be 1");
    return;
  }
  cartProducts.innerHTML = `
  <div class="main-adding-cart">
  <div class="adding-cart">
 <div class="cart-left">
 <img src="./images/image-product-1-thumbnail.jpg" alt="product-1" />
</div>
<div class="cart-right"><p>Fall Limited Edition Sneakers</p>  $${125} x ${
    itemQuantity.textContent
  } <span class="total">$${itemQuantity.textContent * 125}.00</span>
  </div>
  <button class="delete"><img src="./images/icon-delete.svg"></button>
  
 </div>
 <div class="checkout">Checkout</div>
 </div>`;

  //**delete */
  const deleteBtn = document.querySelector(".delete");
  deleteBtn.addEventListener("click", function () {
    cartProducts.innerHTML = "Your Cart is empty";
    itemQuantity.textContent = 0;
    quantityLabel.style.display = "none";
  });

  //**checkout */
  const checkoutBtn = document.querySelector(".checkout");
  checkoutBtn.addEventListener("click", function () {
    alert("ordered successfully");
  });
});
//**show cart  */

const cartImg = document.querySelector(".cart-img");
cartImg.addEventListener("click", function () {
  cartContainer.classList.toggle("active");
});

//**responsive mobile slider */
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
const mainResImage = document.querySelector(".main-img");

const images = [
  "./images/image-product-1.jpg",
  "./images/image-product-2.jpg",
  "./images/image-product-3.jpg",
  "./images/image-product-4.jpg",
];

let curr = 0;

function updateResImage() {
  mainResImage.src = images[curr];
}

leftBtn.addEventListener("click", function () {
  curr = curr === 0 ? images.length - 1 : curr - 1;
  updateResImage();
});

rightBtn.addEventListener("click", function () {
  curr = curr === images.length - 1 ? 0 : curr + 1;
  updateResImage();
});

//**aside  */
const hamburger = document.querySelector(".hamburger img");
const resImage = document.querySelector(".res-close img");
const mainBackground = document.querySelector("main");
const aside = document.querySelector("aside");

hamburger.addEventListener("click", function () {
  aside.classList.add("active");
});

resImage.addEventListener("click", function () {
  aside.classList.remove("active");
});
