import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const delay = document.querySelector('[name="delay"]');
const step = document.querySelector('[name="step"]');
const amount = document.querySelector('[name="amount"]');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
    let delay = Number(event.currentTarget.delay.value);
    const step = Number(event.currentTarget.step.value);
    const amount = Number(event.currentTarget.amount.value);
  
  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
      setTimeout(() => {
          Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        }, delay);
      })
      .catch(({ position, delay }) => {
        setTimeout(() => {
          Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        }, delay);
    });
    delay += step;
  }; 
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const objectPromice = { position, delay };
  return new Promise((resolve, reject) => {
      if (shouldResolve) {
        resolve(objectPromice);
      } else {
        reject(objectPromice);
       }; 
  });
};




