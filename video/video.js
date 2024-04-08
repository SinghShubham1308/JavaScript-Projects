// Get the video element
const video = document.querySelector(".video-container");

// Get the switch button
const switchBtn = document.querySelector(".switch-btn");

// Add click event listener to the switch button
switchBtn.addEventListener("click", function () {
  switchBtn.classList.toggle("slide");
  if (video.paused) {
    // If paused, play the video
    video.play();
  } else {
    video.pause();
  }
});

const preloader = document.querySelector(".preloader");
window.addEventListener("load",function(){
  preloader.classList.toggle("hide-preloader");
});
