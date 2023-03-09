import Notiflix from 'notiflix';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const datePicker = document.querySelector('#datetime-picker');

const refs = {
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
};
const startButton = document.querySelector('[data-start]');
const allDate = document.querySelector('.timer');
const allDateTimer = document.querySelector('.timer .value');
startButton.disabled = true;
let selectedDate = null; 

datePicker.addEventListener('click', dateCalendar);
startButton.addEventListener('click', startСountdown);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      if (selectedDates[0] < Date.now()) {
        Notiflix.Notify.failure(
          'Please choose a date in the future',
            {
             timeout: 3000,
            },
          ); 
      } else {
        startButton.disabled = false;
           selectedDate = selectedDates[0];
           console.log(selectedDate);
      };
  },
};

function dateCalendar() {    
};
dateCalendar();

flatpickr(datePicker, options);

function startСountdown() {
    timer.start();
};
dateCalendar();

const timer = {
    intervalId: null,    
    start() {
        const startTime = selectedDate;
        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = startTime - currentTime;
            const time = convertMs(deltaTime);
            updateClockFace(time);
            allDateTimer.style.color = 'tomato';
            if (deltaTime <= 0) {
               this.stop();
            };
        }, 1000);
    },    
    stop() {
      clearInterval(this.intervalId);
    },
};


function updateClockFace({ days, hours, minutes, seconds }) {
    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.minutes.textContent = minutes;
    refs.seconds.textContent = seconds;
};

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
};

function convertMs(ms) {

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
};


//allDate.style.display = 'flex';
allDate.style.color = 'teal';
allDate.style.fontSize = '28px';
allDate.style.fontStyle = 'italic';
