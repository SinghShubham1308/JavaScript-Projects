// using selectors inside the element
const questions = document.querySelectorAll(".question");
questions.forEach(function(question){
    // console.log(question);
    const btn = question.querySelector(".question-btn");
    console.log(btn);
    btn.addEventListener('click',function(){
        questions.forEach(function(item){
            if(item !== question){
                item.classList.remove("show-text");
            }
        })
        question.classList.toggle("show-text")
    })
});
// traversing the dom
// const questionBtn = document.querySelectorAll(".question-btn");
// const text = document.getElementsByClassName(".question");
// questionBtn.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     console.log("Current Target:", e.currentTarget);
//     console.log("Target:", e.target);
//     console.log("Parent Element:", e.currentTarget.parentElement);
//     console.log(e.currentTarget.parentElement.parentElement);
//     var question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text");
//   });
// });


