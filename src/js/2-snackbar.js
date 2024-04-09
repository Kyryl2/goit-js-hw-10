import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

// const form = document.querySelector('.form');
// form.addEventListener('submit', onSubmitForm);

// function onSubmitForm(event) {
//   event.preventDefault();

//   const delay = document.querySelector('input[name="delay"]').value;
//   const checkBox = document.querySelector('input[name="state"]:checked').value;
//   return new Promise((resolve, reject) => {
//     if (checkBox === 'fulfilled') {
//       setTimeout(() => {
//         resolve(delay);
//       }, delay);
//     }
//     if (checkBox === 'rejected') {
//       setTimeout(() => {
//         reject(delay);
//       }, delay);
//     }
//   });
// }
// onSubmitForm()
//   .then(result =>
//     iziToast.show({
//       message: `✅ Fulfilled promise in ${result}ms`,
//       position: 'topRight',
//       color: 'green',
//     })
//   )
//   .catch(error =>
//     iziToast.show({
//       message: `❌ Rejected promise in ${error}ms`,
//       position: 'topRight',
//       color: 'red',
//     })
//   );

document.querySelector('.form').addEventListener('submit', function (event) {
  event.preventDefault();

  const delay = document.querySelector('input[name="delay"]').value;
  const checkBox = document.querySelector('input[name="state"]:checked').value;

  const customPromise = new Promise((resolve, reject) => {
    if (checkBox === 'fulfilled') {
      setTimeout(() => resolve(delay), delay);
    } else if (checkBox === 'rejected') {
      setTimeout(() => reject(delay), delay);
    }
  });

  customPromise
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
});
