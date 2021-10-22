const body = document.querySelector('body');

const IMG_NUMBER = 3;
const ACCESS_KEY = 'ZAvi04uVEXZzkAIi44sq-UFcgHZs2fpNnBh79u6yBCU';

function paintImage(imgInfo) {
  const image = new Image();
  image.src = imgInfo.src;
  image.alt = imgInfo.alt;
  image.classList.add('bgImage');
  body.appendChild(image);
}

function getRandomImage() {
  const promise = new Promise((resolve, reject) => {
    fetch(`https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}`)
      .then((response) => response.json())
      .then((json) => {
        resolve({
          alt: '배경화면',
          src: json.urls.full,
        });
      })
      .catch((err) => reject(err));
  });

  return promise;
}

function getRandomLocalImage() {
  const randomNum = Math.floor(Math.random() * IMG_NUMBER) + 1;
  return {
    alt: '배경화면',
    src: `assets/img/${randomNum}.jpg`,
  };
}

function init() {
  getRandomImage()
    .then((imgInfo) => paintImage(imgInfo))
    .catch((err) => {
      console.log(err.message);
      const imgInfo = getRandomLocalImage();
      paintImage(imgInfo);
    });
}

init();
