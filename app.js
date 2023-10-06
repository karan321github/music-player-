// script.js

const songItems = document.querySelectorAll('.songItem');
const masterPlay = document.getElementById('masterPlay');
const masterSongName = document.getElementById('masterSongName');
const gif = document.getElementById('gif');

let isPlaying = false;

function playSong() {
  isPlaying = true;
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
  gif.style.opacity = 1;
}

function pauseSong() {
  isPlaying = false;
  masterPlay.classList.remove('fa-pause-circle');
  masterPlay.classList.add('fa-play-circle');
  gif.style.opacity = 0;
}

masterPlay.addEventListener('click', () => {
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

songItems.forEach((songItem, index) => {
  const playBtn = songItem.querySelector('.songItemPlay');
  const songName = songItem.querySelector('.songName').innerText;

  playBtn.addEventListener('click', () => {
    if (isPlaying) {
      pauseSong();
    }
    playSong();
    masterSongName.innerText = songName;
  });
});

// Implement previous and next song navigation
let currentSongIndex = 0;

function playNextSong() {
  currentSongIndex = (currentSongIndex + 1) % songItems.length;
  const nextSongName = songItems[currentSongIndex].querySelector('.songName').innerText;
  masterSongName.innerText = nextSongName;
}

function playPreviousSong() {
  currentSongIndex = (currentSongIndex - 1 + songItems.length) % songItems.length;
  const previousSongName = songItems[currentSongIndex].querySelector('.songName').innerText;
  masterSongName.innerText = previousSongName;
}

const nextBtn = document.getElementById('next');
const previousBtn = document.getElementById('previous');

nextBtn.addEventListener('click', () => {
  playNextSong();
});

previousBtn.addEventListener('click', () => {
  playPreviousSong();
});
