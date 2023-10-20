const audio = document.getElementById("audio");

const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");

const progressContainer = document.getElementById("progress-container");
const progress = document.getElementById("progress-bar");

const songTitle = document.getElementById("song-title");
const songCover = document.getElementById("song-cover");
const artist = document.getElementById("artist");

const songs = ["lost-in-city-lights-145038", "forest-lullaby-110624"];

let songIndex = 0;

loadSong(songs[songIndex]);

function loadSong(song) {
  if (song === "lost-in-city-lights-145038") {
    songTitle.textContent = "Lost in the City Lights";
    artist.textContent = "Cosmo Sheldrake";
    songCover.src = `assets/images/cover-1.png`;
  } else {
    songTitle.textContent = "Forest Lullaby";
    artist.textContent = "Lesfm";
    songCover.src = `assets/images/cover-2.png`;
  }
  audio.src = `assets/music/${song}.mp3`;
}

function playSong() {
  audio.play();
}

function pauseSong() {
  audio.pause();
}

function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);
  audio.play();
}

function previousSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);
  audio.play();
}

playBtn.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

prevBtn.addEventListener("click", previousSong);
nextBtn.addEventListener("click", nextSong);
