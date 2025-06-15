const vinyl = document.getElementById('vinyl');
const audio = document.getElementById('barbieAudio');

vinyl.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    vinyl.classList.add('spin');
  } else {
    audio.pause();
    vinyl.classList.remove('spin');
  }
});
