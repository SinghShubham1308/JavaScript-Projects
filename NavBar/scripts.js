const toggleBtn = document.querySelector(".nav-toggle");
let el = document.querySelector(".links");
var classList = el.classList;
console.log(classList.contains("show-links"));
toggleBtn.addEventListener("click", function () {
  if (classList.contains("show-links")) {
    el.classList.remove("show-links");
  } else {
    el.classList.add("show-links");
  }
});
