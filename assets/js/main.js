// mobile menu show / close
let menuBtn = document.querySelector(".mobile__header-burger"),
  body = document.querySelector("body"),
  links = document.querySelector(".desktop__header");
menuBtn.addEventListener("click", function () {
  links.classList.toggle("active");
  body.classList.toggle("active");
});

// fix / scroll body when menu is open
window.addEventListener("resize", function () {
  if (body.classList.contains("active") && links.classList.contains("active")) {
    body.classList.remove("active");
    links.classList.remove("active");
  }
});
