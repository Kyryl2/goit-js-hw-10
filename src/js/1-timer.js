import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';
const divTimer = document.querySelector('.field');
const input = document.querySelector('#datetime-picker');
let userSelectedDate = 0;

const startBtn = document.querySelector('[data-start]');

startBtn.disabled = true;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);
    if (selectedDates[0] < Date.now()) {
      iziToast.show({
        title: 'Error',
        message: 'Illegal operation',
        position: 'topRight',
        color: 'red',
      });
    }
    startBtn.disabled = false;
    userSelectedDate = selectedDates[0];
    // console.log(userSelectedDate);
  },
};
console.log(userSelectedDate);

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
  // console.log(userSelectedDate);
  const intervalId = setInterval(() => {
    const currentTime = Date.now();
    startBtn.disabled = true;
    const diff = userSelectedDate - currentTime;
    // console.log(diff);
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
