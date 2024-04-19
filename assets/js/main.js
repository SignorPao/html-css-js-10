let menuBtn = document.querySelector(".mobile__header-burger"),
  body = document.querySelector("body"),
  links = document.querySelector(".desktop__header"),
  overlay = document.querySelector(".overlay__body"),
  logo = document.querySelector(".mobile__header-logo"),
  searchMobile = document.querySelector(".search__button"),
  searchMobileContainer = document.querySelector(".search__input-container"),
  countryMobile = document.querySelector(".country__switch-tablet"),
  subnavMenu = document.querySelectorAll(".subnav");

// mobile menu show / close
menuBtn.addEventListener("click", function () {
  links.classList.toggle("active");
  body.classList.toggle("active");
  overlay.classList.toggle("active");
});

// fix / scroll body when menu is open
window.addEventListener("resize", function () {
  if (body.classList.contains("active") && links.classList.contains("active")) {
    body.classList.remove("active");
    links.classList.remove("active");
    overlay.classList.remove("active");
  }
});

// open / close mobile search panel
searchMobile.addEventListener("click", function () {
  searchMobileContainer.classList.toggle("opened");
});

// remove mobile menu & body overlay when logo clicked
logo.addEventListener("click", function () {
  if (body.classList.contains("active")) {
    body.classList.remove("active");
    links.classList.remove("active");
    overlay.classList.remove("active");
    searchMobileContainer.classList.remove("opened");
  }
});

// remove mobile search panel when logo clicked
logo.addEventListener("click", function () {
  if (searchMobileContainer.classList.contains("opened")) {
    searchMobileContainer.classList.remove("opened");
  }
});

// remove mobile search panel when menu clicked
menuBtn.addEventListener("click", function () {
  if (searchMobileContainer.classList.contains("opened")) {
    searchMobileContainer.classList.remove("opened");
  }
});

// remove menu when mobile search panel clicked
searchMobile.addEventListener("click", function () {
  if (links.classList.contains("active")) {
    links.classList.remove("active");
    body.classList.remove("active");
    overlay.classList.remove("active");
  }
});

// add / remove body overlay when desktop submenu is open
const submenuArray = [...subnavMenu];
console.log(submenuArray);
for (let i = 0; i < submenuArray.length; i++) {
  if (submenuArray[i].classList.contains("show-subnav")) {
    overlay.classList.add("active");
  } else {
    overlay.classList.remove("active");
  }
}
