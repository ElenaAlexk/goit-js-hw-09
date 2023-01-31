const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

let timerId = null;
stopBtn.disabled = true;

startBtn.addEventListener('click', onStartBtnClick);
function onStartBtnClick() {
  startBtn.disabled = true;
  stopBtn.disabled = false;

  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}
stopBtn.addEventListener('click', onStopBtnClick);
function onStopBtnClick() {
  stopBtn.disabled = false;
  startBtn.disabled = false;
  clearInterval(timerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
