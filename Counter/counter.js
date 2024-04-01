
let counter = 0;

const counterValue = document.getElementById('value');
const incrementBtn = document.getElementById('increase');
const decrementBtn = document.getElementById('decrease');
const resetBtn = document.querySelector('#reset');
incrementBtn.addEventListener("click",function(){
    
    counter++;
    counterValue.innerHTML = counter;
    if (counter> 0) {
      value.style.color = "green";
    }
})
decrementBtn.addEventListener("click",function(){
    counter--;
    counterValue.innerHTML = counter;
    if (counter < 0) {
      value.style.color = "red";
    }
})
resetBtn.addEventListener("click",function(){
    counter = 0;
    counterValue.innerHTML = counter;
    if (counter === 0) {
      value.style.color = "#222";
    }
})

    
    
