function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
//////////////////////////////////////////
/*startBtn.disabled = true;
startBtn.addEventListener('click', onStartTimerButton);
let timerId = null;
let selectedDate = null;
let currentDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      startBtn.disabled = true;
      window.alert('Please choose a date in future!');
    } else {
      startBtn.disabled = false;
    }
  },
};
flatpickr(inputDateTime, options);

const timer = {
  start() {
    const startTime = Date.now();
    setInterval(() => {
      //selectedDate = selectedDates[0].getTime();
      //currentDate = new Date().getTime();
      const currentTime = Date.now();
      //const deltaTime = selectedDate - currentDate;
      const deltaTime = currentTime - startTime;
      const time = convertMs(deltaTime);
      updateClockface(time);
    }, 1000);
  },
};

function onStartTimerButton() {
  timer.start();
  startBtn.disabled = true;
}

function updateClockface({ days, hours, minutes, seconds }) {
  refs.daysTimer.textContent = `${days}`;
  refs.hoursTimer.textContent = `${hours}`;
  refs.minutesTimer.textContent = `${minutes}`;
  refs.secondsTimer.textContent = `${seconds}`;
}

/* Принимает число, приводит к строке и добавляет в начало 0, 
если меньше 2-х знаков  */
/*
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

/* -принимает время в миллисекундах
   - высчитывает сколько в них содержится дней/часов/миниут/секунд
   - возвращает объект со свойствами d, h, min, sec */

/*function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}
*/
