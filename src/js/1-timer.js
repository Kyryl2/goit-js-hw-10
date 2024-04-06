import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';

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

flatpickr(input, options);

function onBtnClick() {}
