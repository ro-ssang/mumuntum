const body = document.querySelector('body');

const IMG_NUMBER = 3;

function paintImage(number) {
  const image = new Image();
  image.src = `assets/img/${number}.jpg`;
  image.classList.add('bgImage');
  body.appendChild(image);
}

function generateRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER) + 1;
  return number;
}

function init() {
  const randomNumber = generateRandom();
  paintImage(randomNumber);
}

init();
