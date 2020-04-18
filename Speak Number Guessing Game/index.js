const msgEL = document.getElementById('msg');
const micro = document.getElementById('micro');

const randomNum = getRandomNumber();

console.log(randomNum);

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

let recognition = new window.SpeechRecognition();

recognition.start();

function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function onSpeak(e){
  const msg = e.results[0][0].transcript;

  console.log(msg)

  writeMessage(msg);
  checkNumber(msg)
}

function writeMessage(msg){
  msgEL.innerHTML = `
    <div>Your said: </div>
    <span class="box">${msg}</span>
  `
}

function checkNumber(msg){
  const num = +msg;

  if(Number.isNaN(num)){
    msgEL.innerHTML += `<div>That is not a valid number</div>`
    return
  }

  if(num > 100 || num < 1){
    msgEL.innerHTML += `<div>Number must be between 1 and 100</div>`
  }

  if(num === randomNum){
    document.body.innerHTML = `
      <h2>Congrats! you have guessed the number! <br><br></h2>
      It was ${num}
      <button class="play-again" id="play-again">Play Again</button>
    `
  } else if(num > randomNum){
    msgEL.innerHTML = `<div>GO LOWER</div>`
  } else {
    msgEL.innerHTML = `<div>GO HIGHER</div>`
  }
}

recognition.addEventListener('result', onSpeak);

recognition.addEventListener('end', () => recognition.start());

document.body.addEventListener('click', (e) => {
  if(e.target.id === 'play-again'){
    window.location.reload()
  }
});