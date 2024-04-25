const menuBtn = document.querySelector(".mobile__header-burger"),
  burgerIcon = document.querySelector(".burger__icon"),
  body = document.querySelector("body"),
  html = document.querySelector("html"),
  navigation = document.querySelector(".navigation"),
  mobileHeader = document.querySelector(".mobile__header"),
  links = document.querySelector(".desktop__header"),
  overlay = document.querySelector(".overlay__body"),
  logo = document.querySelector(".mobile__header-logo"),
  logoDesktop = document.querySelector(".desktop__header-logo"),
  searchMobile = document.querySelector(".search__button"),
  searchMobileContainer = document.querySelector(".search__input-container"),
  countryMobile = document.querySelector(".country__switch-tablet"),
  subnavAccordionItems = document.querySelectorAll(".navigation__list-item"),
  desktopSearchButton = document.querySelector(".search__desktop-button"),
  desktopSearchInput = document.querySelector(".search__desktop-input"),
  switchMobile = document.querySelector(".country__switch-mobile"),
  switchTablet = document.querySelector(".country__switch-tablet"),
  switchDesktop = document.querySelector(".country__switch-desktop"),
  switchCountrySection = document.querySelector(".switch__country"),
  switchCountryClose = document.querySelector(
    ".switch__country-close > button"
  );

// mobile menu show / close
menuBtn.addEventListener("click", function () {
  burgerIcon.classList.toggle("open");
  links.classList.toggle("active");
  body.classList.toggle("active");
  overlay.classList.toggle("active");
  subnavAccordionItems.forEach((item) => {
    let isShow = item.classList.contains("show-subnav");
    if (isShow) {
      item.classList.remove("show-subnav");
    }
  });
  if (links.classList.contains("active")) {
    document.querySelector(".search__button-search").style.display = "block";
    document.querySelector(".search__button-close").style.display = "none";
  }
  mobileHeader.classList.remove("mobile-shadow");
});

// delete styles when window resize
window.addEventListener("resize", function () {
  if (body.classList.contains("active") && links.classList.contains("active")) {
    body.classList.remove("active");
    links.classList.remove("active");
    overlay.classList.remove("active");
    burgerIcon.classList.remove("open");
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
  // change mobile search icon
  if (searchMobileContainer.classList.contains("opened")) {
    document.querySelector(".search__button-search").style.display = "none";
    document.querySelector(".search__button-close").style.display = "block";
    mobileHeader.classList.add("mobile-shadow");
  } else {
    document.querySelector(".search__button-search").style.display = "block";
    document.querySelector(".search__button-close").style.display = "none";
    mobileHeader.classList.remove("mobile-shadow");
  }
});

// remove mobile menu & body overlay when logo clicked
logo.addEventListener("click", function () {
  if (body.classList.contains("active")) {
    body.classList.remove("active");
    links.classList.remove("active");
    overlay.classList.remove("active");
    searchMobileContainer.classList.remove("opened");
    burgerIcon.classList.remove("open");
  }
  if (html.classList.contains("show-switch-country")) {
    html.classList.remove("show-switch-country");
  }
  mobileHeader.classList.remove("mobile-shadow");
});

// remove mobile search panel when logo clicked
logo.addEventListener("click", function () {
  if (searchMobileContainer.classList.contains("opened")) {
    searchMobileContainer.classList.remove("opened");
    document.querySelector(".search__button-search").style.display = "block";
    document.querySelector(".search__button-close").style.display = "none";
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
    burgerIcon.classList.remove("open");
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
  subnavAccordionItems.forEach((item) => {
    let isShow = item.classList.contains("show-subnav");
    if (isShow) {
      item.classList.remove("show-subnav");
    }
    if (!isShow) {
      overlay.classList.remove("active");
    }
  });
  desktopSearchInput.classList.remove("expanded");
});

// desktop search input expanded
desktopSearchButton.addEventListener("click", function () {
  desktopSearchInput.classList.toggle("expanded");
  if (desktopSearchInput.classList.contains("expanded")) {
    desktopSearchButton.textContent = "Close";
  } else {
    desktopSearchButton.textContent = "Search";
  }
});

// switch country section show / close
switchMobile.addEventListener("click", function () {
  switchCountrySection.classList.add("active");
  if (switchCountrySection.classList.contains("active")) {
    links.classList.remove("active");
    overlay.classList.remove("active");
    body.classList.remove("active");
    logo.addEventListener("click", function () {
      switchCountrySection.classList.remove("active");
    });
    burgerIcon.classList.remove("open");
  }
  if (switchCountrySection.classList.contains("active")) {
    html.classList.add("show-switch-country");
  } else {
    html.classList.remove("show-switch-country");
  }
});

switchTablet.addEventListener("click", function () {
  switchCountrySection.classList.add("active");
  if (switchCountrySection.classList.contains("active")) {
    links.classList.remove("active");
    overlay.classList.remove("active");
    body.classList.remove("active");
    logo.addEventListener("click", function () {
      switchCountrySection.classList.remove("active");
    });
    logoDesktop.addEventListener("click", function () {
      switchCountrySection.classList.remove("active");
    });
    burgerIcon.classList.remove("open");
  }
});

switchDesktop.addEventListener("click", function () {
  switchCountrySection.classList.add("active");
  if (switchCountrySection.classList.contains("active")) {
    links.classList.remove("active");
    overlay.classList.remove("active");
    body.classList.remove("active");
    logo.addEventListener("click", function () {
      switchCountrySection.classList.remove("active");
    });
    logoDesktop.addEventListener("click", function () {
      switchCountrySection.classList.remove("active");
    });
    subnavAccordionItems.forEach((item) => {
      let isShow = item.classList.contains("show-subnav");
      if (isShow) {
        item.classList.remove("show-subnav");
      }
    });
  }
});

// switch country section close
switchCountryClose.addEventListener("click", function () {
  switchCountrySection.classList.remove("active");
  html.classList.remove("show-switch-country");
});

// remove desktop overlay when click ouside header element
document.addEventListener("click", function (e) {
  if (!navigation.contains(e.target)) {
    overlay.classList.remove("active");
    subnavAccordionItems.forEach((item) => {
      let isShow = item.classList.contains("show-subnav");
      if (isShow) {
        item.classList.remove("show-subnav");
      }
    });
  }
});
