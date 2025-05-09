const audio = document.getElementById('audio');
const button = document.getElementById('playPauseButton');
const icon = document.getElementById('icon');

// Cek status awal dari localStorage
if (localStorage.getItem('audioStatus') === 'playing') {
  audio.play();
  icon.src = 'pause.png';
} else {
  audio.pause();
  icon.src = 'play.png';
}

// Fungsi toggle play/pause
function toggleMusic() {
  if (audio.paused) {
    audio.play();
    icon.src = 'pause.png';
    localStorage.setItem('audioStatus', 'playing');
  } else {
    audio.pause();
    icon.src = 'play.png';
    localStorage.setItem('audioStatus', 'paused');
  }
}

button.addEventListener('click', toggleMusic);
