const toggleBtn = document.querySelector(".nav-toggle");
let links = document.querySelector(".links");

console.log(links.classList.contains("show-links"));
toggleBtn.addEventListener("click", function () {
//   if (classList.contains("show-links")) {
//     links.classList.remove("show-links");
//   } else {
//     links.classList.add("show-links");
//   }
links.classList.toggle("show-links");
});
