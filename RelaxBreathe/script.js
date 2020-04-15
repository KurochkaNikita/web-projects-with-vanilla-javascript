const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breatherTime = (totalTime / 5 ) * 2;
const holdTime = totalTime / 5 ;

breathAnimation();
setInterval( breathAnimation, totalTime);


function breathAnimation() {
  text.innerText = 'Breath in!';
  container.className = 'container grow';

  setTimeout( () => {
    text.innerText = 'Hold!';

    setTimeout(() => {
      text.innerText = 'Breathe Out!';
      container.className = 'container shrink';
    }, holdTime)

  }, breatherTime)
}