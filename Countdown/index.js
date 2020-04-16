const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const loading = document.getElementById('loading');


const dayAndMouth = 'November 16';
const currentYear = new Date().getFullYear();

const inYear = new Date(`${dayAndMouth} ${currentYear + 1} 00:00:00`) - new Date() > 0 ? currentYear : currentYear + 1;

const newBirthdayTime = new Date(`${dayAndMouth} ${inYear} 00:00:00`);

function updateCountdown() {
  const currentTime = new Date();
  const diff = newBirthdayTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60 ) % 24;
  const m = Math.floor(diff / 1000 / 60 ) % 60;
  const s = Math.floor(diff / 1000 ) % 60;

  days.innerHTML = d;
  hours.innerHTML = h < 10 ? '0' + h : h;
  minutes.innerHTML = m < 10 ? '0' + m : m;
  seconds.innerHTML = s < 10 ? '0' + s : s;
}

setTimeout(() => {
  loading.remove();
  countdown.style.display = 'flex';
}, 1000);

year.innerText = inYear;
setInterval(updateCountdown, 1000);