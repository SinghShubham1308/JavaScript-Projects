const colors = ["green","red","rgba(133,122,200)","f15025"]
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
btn.addEventListener("click",function(){
    const randInt = Math.floor(Math.random() * colors.length);
    document.body.style.background = colors[randInt];
    color.textContent =colors[randInt];
})