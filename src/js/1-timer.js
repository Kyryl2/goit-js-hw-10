import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

flatpickr(input, options);
iziToast.show({
  title: 'Hey',
  message: 'Please choose a date in the future',
});

const input = document.querySelector('#datetime-picker');
let userSelectedDate;
const startBtn = document.querySelector('[data-start]');
startBtn.disabled = true;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] < new Date()) {
      alert('Please choose a date in the future');
    }

    startBtn.disabled = false;
    userSelectedDate = selectedDates[0];
  },
};
startBtn.addEventListener('click', onBtnClick);
function onBtnClick() {}

function addLeadingZero(value) {}

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
