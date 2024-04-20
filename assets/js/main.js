let menuBtn = document.querySelector(".mobile__header-burger"),
  body = document.querySelector("body"),
  links = document.querySelector(".desktop__header"),
  overlay = document.querySelector(".overlay__body"),
  logo = document.querySelector(".mobile__header-logo"),
  logoDesktop = document.querySelector(".desktop__header-logo"),
  searchMobile = document.querySelector(".search__button"),
  searchMobileContainer = document.querySelector(".search__input-container"),
  countryMobile = document.querySelector(".country__switch-tablet"),
  subnavAccordionItems = document.querySelectorAll(".navigation__list-item");

// mobile menu show / close
menuBtn.addEventListener("click", function () {
  links.classList.toggle("active");
  body.classList.toggle("active");
  overlay.classList.toggle("active");
  subnavAccordionItems.forEach((item) => {
    let isShow = item.classList.contains("show-subnav");
    if (isShow) {
      item.classList.remove("show-subnav");
    }
  });
});

// delete styles when window resize
window.addEventListener("resize", function () {
  if (body.classList.contains("active") && links.classList.contains("active")) {
    body.classList.remove("active");
    links.classList.remove("active");
    overlay.classList.remove("active");
  }
  subnavAccordionItems.forEach((item) => {
    item.classList.remove("show-subnav");
    let isShow = item.classList.contains("show-subnav");
    if (!isShow) {
      overlay.classList.remove("active");
    }
  });
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

// add handlers to subnav menu
subnavAccordionItems.forEach((item) => {
  item.addEventListener("click", function () {
    let isItemOpen = item.classList.contains("show-subnav");
    subnavAccordionItems.forEach((item) =>
      item.classList.remove("show-subnav")
    );
    if (!isItemOpen) {
      item.classList.toggle("show-subnav");
      if (window.innerWidth > 1440) {
        overlay.classList.add("active");
      }
    } else {
      if (window.innerWidth > 1440) {
        overlay.classList.remove("active");
      }
    }
  });
});

// remove all when desktop logo clicked
logoDesktop.addEventListener("click", function () {
  console.log("desktop logo clicked");
  subnavAccordionItems.forEach((item) => {
    let isShow = item.classList.contains("show-subnav");
    if (isShow) {
      item.classList.remove("show-subnav");
    }
    if (!isShow) {
      overlay.classList.remove("active");
    }
  });
});
