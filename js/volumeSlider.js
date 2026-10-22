const audioPlayer = document.getElementById('audio-player');
const currentTimeDisplay = document.getElementById('current-time');
const volumeSlider = document.getElementById('volume-slider');
const volumeButton = document.getElementById('volume-button');
const playButton = document.getElementById('play-button');
const audioTracker = document.querySelector('.audio-tracker');
const topBanner = document.querySelector('.top-banner');

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

audioPlayer.addEventListener('timeupdate', () => {
  currentTimeDisplay.textContent = formatTime(audioPlayer.currentTime);
});

audioPlayer.volume = 0.5;

volumeSlider.addEventListener('input', () => {
  const volume = volumeSlider.value / 100;
  audioPlayer.volume = volume;
});

playButton.addEventListener('click', () => {
  if (audioPlayer.paused) {
    audioPlayer.play().catch((error) => {
      console.error('Audio playback failed:', error);
    });
    playButton.textContent = 'Pause';

    topBanner.textContent = 'kenish - i want the sky';

    volumeButton.classList.add('show');
    audioTracker.classList.add('expanded');
  } else {
    audioPlayer.pause();
    playButton.textContent = 'Play';

    topBanner.textContent = 'Currently playing: None';

    volumeButton.classList.remove('show');
    volumeSlider.classList.remove('show');
    audioTracker.classList.remove('expanded');
    audioTracker.classList.remove('expanded-slider');
  }
});

let isVolumeSliderVisible = false;

volumeButton.addEventListener('click', () => {
  isVolumeSliderVisible = !isVolumeSliderVisible;

  if (isVolumeSliderVisible) {
    volumeSlider.classList.add('show');
    audioTracker.classList.add('expanded-slider');
  } else {

    volumeSlider.classList.remove('show');

    setTimeout(() => {
      audioTracker.classList.remove('expanded-slider');
    }, 1);
  }
});