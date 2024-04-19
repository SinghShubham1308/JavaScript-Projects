//e.target is what triggers the event dispatcher to trigger and e.currentTarget is what you assigned your listener to.
const tabBtns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");
about.addEventListener("click", function (e) {
  // console.log(e.currentTarget);
  const id = e.target.dataset.id;
  if (id) {
    // remove active form buttons
    tabBtns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    // hide other articles
    articles.forEach(function(article){
        article.classList.remove("active");
    })
    const element  = document.getElementById(id);
    console.log(element);
    element.classList.add('active');
  } 
});
