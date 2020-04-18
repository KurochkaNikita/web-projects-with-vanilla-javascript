const main = document.querySelector('main');
const voiceSelect = document.getElementById('voices');
const textarea = document.getElementById('text');
const readBtn = document.getElementById('read');
const toggleBtn = document.getElementById('toggle');
const closeBtn = document.getElementById('close');

const message = new SpeechSynthesisUtterance();

const data = [
  {
    image: './img/drink.jpg',
    text: "I am Thirsty"
  },
  {
    image: './img/food.jpg',
    text: "This is pizza"
  },
  {
    image: './img/tired.jpg',
    text: "She is sleeping"
  },
  {
    image: './img/hurt.jpg',
    text: "I am Hurt"
  },
  {
    image: './img/happy.jpg',
    text: "I'm Happy"
  },
  {
    image: './img/angry.jpg',
    text: "he has black heir"
  },
  {
    image: './img/sad.jpg',
    text: "She is crying"
  },
  {
    image: './img/scared.jpg',
    text: "I'm Scared"
  },
  {
    image: './img/outside.jpg',
    text: 'I Want To Go Outside'
  },
  {
    image: './img/home.jpg',
    text: 'I Want To Go Home'
  },
  {
    image: './img/school.jpg',
    text: 'I Want To Go To School'
  },
  {
    image: './img/grandma.jpg',
    text: 'I Want To Go To Grandmas'
  }
];

data.forEach(createBox);

function createBox({image, text}) {
  const box = document.createElement('div');

  box.classList.add('box');
  box.innerHTML = `
    <img src="${image}" alt="${text}" />   
    <p class="info">${text}</p>`;

  box.addEventListener('click', () => {
    setTextMessage(text);
    speakText();

    box.classList.add('active');
    setTimeout(() => box.classList.remove('active'),800)
  });

  main.appendChild(box);
}



// Store Voice

let voices = [];

function getVoices(){
  voices = speechSynthesis.getVoices();

  voices.forEach(voice => {
    const option = document.createElement("option");

    option.value = voice.name;
    option.innerText = `${voice.name} ${voice.lang}`;

    voiceSelect.appendChild(option)
  })
}

function setTextMessage(text){
  message.text = text;
}

function speakText(){
  speechSynthesis.speak(message);
}

function setVoice(e){
  message.voice = voices.find((voice) => voice.name === e.target.value)
}

speechSynthesis.addEventListener('voiceschanged', getVoices);

toggleBtn.addEventListener('click', () => {
  document.getElementById('text-box').classList.toggle('show')
});

closeBtn.addEventListener('click', () => {
  document.getElementById('text-box').classList.remove('show')
});

voiceSelect.addEventListener('change', setVoice);

readBtn.addEventListener('click', () => {
  setTextMessage(textarea.value);
  speakText();
});

getVoices();