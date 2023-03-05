var audio = new Audio("assets/audio.mp3");
  audio.volume = 0.2;
  audio.loop = true;
document.onclick = function() {
  audio.play();
}
