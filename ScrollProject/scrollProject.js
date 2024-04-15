const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

const toggleBtn = document.querySelector(".nav-toggle");

const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

toggleBtn.addEventListener("click", function () {
  // linksContainer.classList.toggle("show-links");
  const linksContainerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  if (linksContainerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
  linksContainer.classList.toggle("show-links");
  // linksContainer.classList.toggle("show-links");
});

// toTop button on page scroll
const nav = document.getElementById("nav");
const scrollBtn = document.querySelector(".top-link");
window.addEventListener("scroll", function () {
  console.log(window.pageYOffset);
  const navheight = nav.getBoundingClientRect().height;
  if (window.scrollY > navheight || window.pageYOffset > navheight) {
    nav.classList.add("fixed-nav");
  } else {
    nav.classList.remove("fixed-nav");
  }
  if (window.scrollY > 300 || window.pageYOffset > 300) {
    scrollBtn.classList.add("show-link");
  } else {
    scrollBtn.classList.remove("show-link");
  }
});
