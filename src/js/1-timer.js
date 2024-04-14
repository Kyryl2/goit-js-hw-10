import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';
const divTimer = document.querySelector('.field');
const input = document.querySelector('#datetime-picker');
let userSelectedDate = 0;

const startBtn = document.querySelector('[data-start]');
startBtn.classList.add('not-active');
startBtn.disabled = true;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      iziToast.show({
        title: 'Error',
        message: 'Illegal operation',
        position: 'topRight',
        color: 'red',
      });
      startBtn.classList.remove('is-active');
      startBtn.classList.add('not-active');
      startBtn.disabled = true;
      return;
    }
    startBtn.disabled = false;
    startBtn.classList.remove('not-active');
    startBtn.classList.add('is-active');
    userSelectedDate = selectedDates[0];
  },
};

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

startBtn.addEventListener('click', onBtnClick);

function onBtnClick() {
  const intervalId = setInterval(() => {
    const currentTime = Date.now();
    startBtn.disabled = true;
    startBtn.classList.remove('is-active');
    startBtn.classList.add('not-active');
    input.disabled = true;
    const diff = userSelectedDate - currentTime;

    const { days, hours, minutes, seconds } = convertMs(diff);
    if (diff > 0) {
      document.querySelector('[data-days]').textContent = addLeadingZero(days);
      document.querySelector('[data-hours]').textContent =
        addLeadingZero(hours);
      document.querySelector('[data-minutes]').textContent =
        addLeadingZero(minutes);
      document.querySelector('[data-seconds]').textContent =
        addLeadingZero(seconds);
    } else {
      clearInterval(intervalId);
    }
  }, 1000);
}

flatpickr(input, options);
