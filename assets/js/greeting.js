const greeting = document.querySelector('.greeting');
const form = greeting.querySelector('form');
const input = form.querySelector('input');
const greetingUserElem = greeting.querySelector('em');

const USER_LS = 'currentUser';
const SHOWING_CN = 'showing';

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener('submit', handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greetingUserElem.classList.add(SHOWING_CN);
  greetingUserElem.innerHTML = `Hello, <strong>${text}</strong>`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
