import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
form.addEventListener('submit', onSubmitForm);
// ----Way 1----//

function createPromise(state, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else if (state === 'rejected') {
        reject(delay);
      }
    }, delay);
  });
}
function onSubmitForm(event) {
  event.preventDefault();

  const delay = document.querySelector('input[name="delay"]').value;
  const checkBox = document.querySelector('input[name="state"]:checked').value;

  createPromise(checkBox, delay)
    .then(result =>
      iziToast.show({
        message: `✅ Fulfilled promise in ${result}ms`,
        position: 'topRight',
        color: 'green',
      })
    )
    .catch(error =>
      iziToast.show({
        message: `❌ Rejected promise in ${error}ms`,
        position: 'topRight',
        color: 'red',
      })
    );
}

//---Way 2---//

// document.querySelector('.form').addEventListener('submit', function (event) {
//   event.preventDefault();

//   const delay = document.querySelector('input[name="delay"]').value;
//   const checkBox = document.querySelector('input[name="state"]:checked').value;

//   const customPromise = new Promise((resolve, reject) => {
//     if (checkBox === 'fulfilled') {
//       setTimeout(() => resolve(delay), delay);
//     } else if (checkBox === 'rejected') {
//       setTimeout(() => reject(delay), delay);
//     }
//   });

//   customPromise
//     .then(result =>
//       iziToast.show({
//         message: `✅ Fulfilled promise in ${result}ms`,
//         position: 'topRight',
//         color: 'green',
//       })
//     )

//     .catch(error =>
//       iziToast.show({
//         message: `❌ Rejected promise in ${error}ms`,
//         position: 'topRight',
//         color: 'red',
//       })
//     );
// });
