const openModalBtn = document.querySelector(".modal-btn");
const modalOverlay = document.querySelector(".modal-overlay");
closeBtn = document.querySelector(".close-btn");
openModalBtn.addEventListener("click",function(){
    modalOverlay.classList.add("open-modal")
})
closeBtn.addEventListener("click",function(){
    modalOverlay.classList.remove("open-modal");
})