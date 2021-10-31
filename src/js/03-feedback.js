import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-stat';
const form = document.querySelector('form');

initForm();

form.addEventListener('submit', evt => {
  evt.preventDefault();
  const formData = new FormData(form);
  formData.forEach((value, name) => console.log(name, value));
  form.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
});

form.addEventListener(
  'input',
  throttle(evt => {
    let getLocalStorage = localStorage.getItem(LOCALSTORAGE_KEY);
    getLocalStorage = getLocalStorage ? JSON.parse(getLocalStorage) : {};
    getLocalStorage[evt.target.name] = evt.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(getLocalStorage));
  }, 500),
);

function initForm() {
  let getLocalStorage = localStorage.getItem(LOCALSTORAGE_KEY);
  if (getLocalStorage) {
    getLocalStorage = JSON.parse(getLocalStorage);
    Object.entries(getLocalStorage).forEach(([name, value]) => {
      form.elements[name].value = value;
    });
  }
}

//Второй вариант выполнения
// import throttle from 'lodash.throttle';

// const STORAGE_KEY = 'feedback-form-state';
// const getLocalStorage = localStorage.getItem(STORAGE_KEY);

// const form = document.querySelector('form');
// const input = document.querySelector('input');
// const textarea = document.querySelector('textarea');

// form.addEventListener('submit', onFormSubmit);
// textarea.addEventListener('input', throttle(onMessageInput, 500));
// input.addEventListener('input', throttle(onEmailInput, 500));

// const localStorageValue = {
//   email: '',
//   message: '',
// };

// populateTextarea();

// function onFormSubmit(evt) {
//   evt.preventDefault();
//   console.log('Отправляем форму');
//   evt.currentTarget.reset();
//   localStorage.removeItem(STORAGE_KEY);
// }

// function onEmailInput(evt) {
//   localStorageValue.email = evt.target.value;

//   localStorage.setItem(STORAGE_KEY, JSON.stringify(localStorageValue));
// }

// function onMessageInput(evt) {
//   localStorageValue.message = evt.target.value;

//   localStorage.setItem(STORAGE_KEY, JSON.stringify(localStorageValue));
// }

// function populateTextarea() {
//   const savedMessage = JSON.parse(getLocalStorage);

//   if (savedMessage) {
//     input.value = savedMessage.email;
//     textarea.value = savedMessage.message;
//   }
// }
