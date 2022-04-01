/*
a

a

a
*/



let boom = document.getElementById('boom')
let audio = new Audio()
audio.src = "./scripts/thud.mp3"

let interval = setInterval(() => {
  if (boom.style.opacity === 1) {
    clearInterval(interval);
    audio.play();
  }
}, 100);


