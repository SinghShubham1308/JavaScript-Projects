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
  // linksContainer.classList.toggle("show-links");

});

// toTop button on page scroll
const nav = document.getElementById("nav");
const scrollBtn = document.querySelector(".top-link");
window.addEventListener("scroll", function () {
  // console.log(window.pageYOffset);
  const navheight = nav.getBoundingClientRect().height;
  if (window.pageYOffset > navheight) {
    nav.classList.add("fixed-nav");
  } else {
    nav.classList.remove("fixed-nav");
  }
  if (window.pageYOffset > 500) {
    scrollBtn.classList.add("show-link");
  } else {
    scrollBtn.classList.remove("show-link");
  }
});
// smooth scroll
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default 
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    // console.log(id);
    const element = document.getElementById(id);
    // calculate the heights
    const navHeight = nav.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = nav.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;
    if(!fixedNav){
      position = position - navHeight; 
    }
    if(navHeight>82){
      position = position + containerHeight;
    }
    // console.log(position);
    window.scrollTo({
      left:0,
      top:position,
    });
    console.log(linksContainer);
    linksContainer.style.height = 0;
    // console.log(linksContainer);
  });
});
