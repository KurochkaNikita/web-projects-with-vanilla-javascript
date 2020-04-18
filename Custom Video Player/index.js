const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// Functions

function toggleVideoStatus() {
  if(video.paused){
    video.play();
  } else {
    video.pause()
  }
}

// Update play/stop icon
function changePlayIcon() {
  if(video.paused){
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
  }
}

function stopVideo() {
  video.currentTime = 0;
  video.pause()
}

function updateProgress() {
  progress.value = (video.currentTime / video.duration ) * 100;
  getTime(video.currentTime);
}

function setVideoStatus() {
  video.currentTime = ( +progress.value * video.duration ) / 100;
}

// get minutes and seconds
function getTime(time){
  let mins = Math.floor(+time / 60);
  if(mins < 10){
    mins = "0" + mins;
  }

  let secs = Math.floor(+time % 60);
  if(secs < 10){
    secs = "0" + secs;
  }

  timestamp.innerHTML = `${mins}:${secs}`;
}

//Event listeners

video.addEventListener('click', toggleVideoStatus);
video.addEventListener('play', changePlayIcon);
video.addEventListener('pause', changePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoStatus);
